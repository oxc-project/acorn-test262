__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    60,
    1127
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtendedMapper",
        "optional": false,
        "range": [
          65,
          79
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 81,
                  "line": 3
                },
                "start": {
                  "column": 73,
                  "line": 3
                }
              },
              "range": [
                133,
                141
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  135,
                  141
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 3
                  },
                  "start": {
                    "column": 75,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              128,
              141
            ],
            "loc": {
              "end": {
                "column": 81,
                "line": 3
              },
              "start": {
                "column": 68,
                "line": 3
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 104,
                  "line": 3
                },
                "start": {
                  "column": 89,
                  "line": 3
                }
              },
              "range": [
                149,
                164
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HandledInputT",
                  "optional": false,
                  "range": [
                    151,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 104,
                      "line": 3
                    },
                    "start": {
                      "column": 91,
                      "line": 3
                    }
                  }
                },
                "range": [
                  151,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 104,
                    "line": 3
                  },
                  "start": {
                    "column": 91,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              143,
              164
            ],
            "loc": {
              "end": {
                "column": 104,
                "line": 3
              },
              "start": {
                "column": 83,
                "line": 3
              }
            }
          },
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                169,
                173
              ],
              "loc": {
                "end": {
                  "column": 113,
                  "line": 3
                },
                "start": {
                  "column": 109,
                  "line": 3
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 121,
                  "line": 3
                },
                "start": {
                  "column": 114,
                  "line": 3
                }
              },
              "range": [
                174,
                181
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgsT",
                  "optional": false,
                  "range": [
                    176,
                    181
                  ],
                  "loc": {
                    "end": {
                      "column": 121,
                      "line": 3
                    },
                    "start": {
                      "column": 116,
                      "line": 3
                    }
                  }
                },
                "range": [
                  176,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 121,
                    "line": 3
                  },
                  "start": {
                    "column": 116,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              166,
              181
            ],
            "loc": {
              "end": {
                "column": 121,
                "line": 3
              },
              "start": {
                "column": 106,
                "line": 3
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 133,
              "line": 3
            },
            "start": {
              "column": 123,
              "line": 3
            }
          },
          "range": [
            183,
            193
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "OutputT",
              "optional": false,
              "range": [
                186,
                193
              ],
              "loc": {
                "end": {
                  "column": 133,
                  "line": 3
                },
                "start": {
                  "column": 126,
                  "line": 3
                }
              }
            },
            "range": [
              186,
              193
            ],
            "loc": {
              "end": {
                "column": 133,
                "line": 3
              },
              "start": {
                "column": 126,
                "line": 3
              }
            }
          }
        },
        "range": [
          127,
          193
        ],
        "loc": {
          "end": {
            "column": 133,
            "line": 3
          },
          "start": {
            "column": 67,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 64,
            "line": 3
          },
          "start": {
            "column": 19,
            "line": 3
          }
        },
        "range": [
          79,
          124
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "HandledInputT",
              "optional": false,
              "range": [
                80,
                93
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              80,
              93
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "OutputT",
              "optional": false,
              "range": [
                95,
                102
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 3
                },
                "start": {
                  "column": 35,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              95,
              102
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 3
              },
              "start": {
                "column": 35,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  118,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 3
                  },
                  "start": {
                    "column": 58,
                    "line": 3
                  }
                }
              },
              "range": [
                118,
                123
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 3
                },
                "start": {
                  "column": 58,
                  "line": 3
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArgsT",
              "optional": false,
              "range": [
                104,
                109
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 3
                },
                "start": {
                  "column": 44,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              104,
              123
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 3
              },
              "start": {
                "column": 44,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        60,
        194
      ],
      "loc": {
        "end": {
          "column": 134,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "range": [
          200,
          201
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            218,
            235
          ],
          "params": [
            {
              "type": "TSAnyKeyword",
              "range": [
                219,
                222
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 4
                },
                "start": {
                  "column": 24,
                  "line": 4
                }
              }
            },
            {
              "type": "TSAnyKeyword",
              "range": [
                224,
                227
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 4
                },
                "start": {
                  "column": 29,
                  "line": 4
                }
              }
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    230,
                    233
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 4
                    },
                    "start": {
                      "column": 35,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                229,
                234
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 4
                },
                "start": {
                  "column": 34,
                  "line": 4
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 4
            },
            "start": {
              "column": 23,
              "line": 4
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtendedMapper",
          "optional": false,
          "range": [
            204,
            218
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 4
            },
            "start": {
              "column": 9,
              "line": 4
            }
          }
        },
        "range": [
          204,
          235
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "range": [
        195,
        236
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "range": [
          242,
          243
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            260,
            277
          ],
          "params": [
            {
              "type": "TSAnyKeyword",
              "range": [
                261,
                264
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 24,
                  "line": 5
                }
              }
            },
            {
              "type": "TSAnyKeyword",
              "range": [
                266,
                269
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 5
                },
                "start": {
                  "column": 29,
                  "line": 5
                }
              }
            },
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  271,
                  274
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 5
                  },
                  "start": {
                    "column": 34,
                    "line": 5
                  }
                }
              },
              "range": [
                271,
                276
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 5
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 5
            },
            "start": {
              "column": 23,
              "line": 5
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtendedMapper",
          "optional": false,
          "range": [
            246,
            260
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 5
            },
            "start": {
              "column": 9,
              "line": 5
            }
          }
        },
        "range": [
          246,
          277
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "range": [
        237,
        278
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "range": [
          284,
          288
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              291,
              292
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 6
              },
              "start": {
                "column": 12,
                "line": 6
              }
            }
          },
          "range": [
            291,
            292
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 6
            },
            "start": {
              "column": 12,
              "line": 6
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              301,
              302
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 6
              },
              "start": {
                "column": 22,
                "line": 6
              }
            }
          },
          "range": [
            301,
            302
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 6
            },
            "start": {
              "column": 22,
              "line": 6
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"n\"",
            "value": "n",
            "range": [
              311,
              314
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 6
              },
              "start": {
                "column": 32,
                "line": 6
              }
            }
          },
          "range": [
            311,
            314
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 6
            },
            "start": {
              "column": 32,
              "line": 6
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"y\"",
            "value": "y",
            "range": [
              305,
              308
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 6
              },
              "start": {
                "column": 26,
                "line": 6
              }
            }
          },
          "range": [
            305,
            308
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 6
            },
            "start": {
              "column": 26,
              "line": 6
            }
          }
        },
        "range": [
          291,
          314
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 6
          },
          "start": {
            "column": 12,
            "line": 6
          }
        }
      },
      "range": [
        279,
        314
      ],
      "loc": {
        "end": {
          "column": 35,
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
            "name": "check",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 15,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              },
              "range": [
                324,
                330
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test",
                  "optional": false,
                  "range": [
                    326,
                    330
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
                "range": [
                  326,
                  330
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
              }
            },
            "range": [
              319,
              330
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"y\"",
            "value": "y",
            "range": [
              333,
              336
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 7
              },
              "start": {
                "column": 18,
                "line": 7
              }
            }
          },
          "range": [
            319,
            336
          ],
          "loc": {
            "end": {
              "column": 21,
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
      "kind": "let",
      "range": [
        315,
        337
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtendedMapper1",
        "optional": false,
        "range": [
          345,
          360
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 11
                },
                "start": {
                  "column": 10,
                  "line": 11
                }
              },
              "range": [
                420,
                428
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  422,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 11
                  },
                  "start": {
                    "column": 12,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              415,
              428
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 11
              },
              "start": {
                "column": 5,
                "line": 11
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 11
                },
                "start": {
                  "column": 26,
                  "line": 11
                }
              },
              "range": [
                436,
                451
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HandledInputT",
                  "optional": false,
                  "range": [
                    438,
                    451
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 11
                    },
                    "start": {
                      "column": 28,
                      "line": 11
                    }
                  }
                },
                "range": [
                  438,
                  451
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 11
                  },
                  "start": {
                    "column": 28,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              430,
              451
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 11
              },
              "start": {
                "column": 20,
                "line": 11
              }
            }
          },
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                456,
                460
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 11
                },
                "start": {
                  "column": 46,
                  "line": 11
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 58,
                  "line": 11
                },
                "start": {
                  "column": 51,
                  "line": 11
                }
              },
              "range": [
                461,
                468
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ArgsT",
                  "optional": false,
                  "range": [
                    463,
                    468
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 11
                    },
                    "start": {
                      "column": 53,
                      "line": 11
                    }
                  }
                },
                "range": [
                  463,
                  468
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 11
                  },
                  "start": {
                    "column": 53,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              453,
              468
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 11
              },
              "start": {
                "column": 43,
                "line": 11
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 70,
              "line": 11
            },
            "start": {
              "column": 60,
              "line": 11
            }
          },
          "range": [
            470,
            480
          ],
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "OutputT",
              "optional": false,
              "range": [
                473,
                480
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 11
                },
                "start": {
                  "column": 63,
                  "line": 11
                }
              }
            },
            "range": [
              473,
              480
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 11
              },
              "start": {
                "column": 63,
                "line": 11
              }
            }
          }
        },
        "range": [
          414,
          480
        ],
        "loc": {
          "end": {
            "column": 70,
            "line": 11
          },
          "start": {
            "column": 4,
            "line": 11
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 65,
            "line": 10
          },
          "start": {
            "column": 20,
            "line": 10
          }
        },
        "range": [
          360,
          405
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "HandledInputT",
              "optional": false,
              "range": [
                361,
                374
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 10
                },
                "start": {
                  "column": 21,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              361,
              374
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 10
              },
              "start": {
                "column": 21,
                "line": 10
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "OutputT",
              "optional": false,
              "range": [
                376,
                383
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 10
                },
                "start": {
                  "column": 36,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              376,
              383
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 10
              },
              "start": {
                "column": 36,
                "line": 10
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  399,
                  402
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 10
                  },
                  "start": {
                    "column": 59,
                    "line": 10
                  }
                }
              },
              "range": [
                399,
                404
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 10
                },
                "start": {
                  "column": 59,
                  "line": 10
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArgsT",
              "optional": false,
              "range": [
                385,
                390
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 10
                },
                "start": {
                  "column": 45,
                  "line": 10
                }
              }
            },
            "out": false,
            "range": [
              385,
              404
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 10
              },
              "start": {
                "column": 45,
                "line": 10
              }
            }
          }
        ]
      },
      "range": [
        340,
        483
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a1",
        "optional": false,
        "range": [
          490,
          492
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            510,
            527
          ],
          "params": [
            {
              "type": "TSAnyKeyword",
              "range": [
                511,
                514
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 14
                },
                "start": {
                  "column": 26,
                  "line": 14
                }
              }
            },
            {
              "type": "TSAnyKeyword",
              "range": [
                516,
                519
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 14
                },
                "start": {
                  "column": 31,
                  "line": 14
                }
              }
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    522,
                    525
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 14
                    },
                    "start": {
                      "column": 37,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                521,
                526
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 14
                },
                "start": {
                  "column": 36,
                  "line": 14
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 14
            },
            "start": {
              "column": 25,
              "line": 14
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtendedMapper1",
          "optional": false,
          "range": [
            495,
            510
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 14
            },
            "start": {
              "column": 10,
              "line": 14
            }
          }
        },
        "range": [
          495,
          527
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 14
          },
          "start": {
            "column": 10,
            "line": 14
          }
        }
      },
      "range": [
        485,
        528
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b1",
        "optional": false,
        "range": [
          534,
          536
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            554,
            571
          ],
          "params": [
            {
              "type": "TSAnyKeyword",
              "range": [
                555,
                558
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 15
                },
                "start": {
                  "column": 26,
                  "line": 15
                }
              }
            },
            {
              "type": "TSAnyKeyword",
              "range": [
                560,
                563
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 15
                },
                "start": {
                  "column": 31,
                  "line": 15
                }
              }
            },
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  565,
                  568
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 15
                  },
                  "start": {
                    "column": 36,
                    "line": 15
                  }
                }
              },
              "range": [
                565,
                570
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 15
                },
                "start": {
                  "column": 36,
                  "line": 15
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 15
            },
            "start": {
              "column": 25,
              "line": 15
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtendedMapper1",
          "optional": false,
          "range": [
            539,
            554
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 15
            },
            "start": {
              "column": 10,
              "line": 15
            }
          }
        },
        "range": [
          539,
          571
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 15
          },
          "start": {
            "column": 10,
            "line": 15
          }
        }
      },
      "range": [
        529,
        572
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "range": [
          578,
          583
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 16
          },
          "start": {
            "column": 5,
            "line": 16
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "range": [
              586,
              588
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 16
              },
              "start": {
                "column": 13,
                "line": 16
              }
            }
          },
          "range": [
            586,
            588
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 16
            },
            "start": {
              "column": 13,
              "line": 16
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "range": [
              597,
              599
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 16
              },
              "start": {
                "column": 24,
                "line": 16
              }
            }
          },
          "range": [
            597,
            599
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 16
            },
            "start": {
              "column": 24,
              "line": 16
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"n\"",
            "value": "n",
            "range": [
              608,
              611
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 16
              },
              "start": {
                "column": 35,
                "line": 16
              }
            }
          },
          "range": [
            608,
            611
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 16
            },
            "start": {
              "column": 35,
              "line": 16
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"y\"",
            "value": "y",
            "range": [
              602,
              605
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 16
              },
              "start": {
                "column": 29,
                "line": 16
              }
            }
          },
          "range": [
            602,
            605
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 16
            },
            "start": {
              "column": 29,
              "line": 16
            }
          }
        },
        "range": [
          586,
          611
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 16
          },
          "start": {
            "column": 13,
            "line": 16
          }
        }
      },
      "range": [
        573,
        611
      ],
      "loc": {
        "end": {
          "column": 38,
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
            "name": "check1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 17
                },
                "start": {
                  "column": 10,
                  "line": 17
                }
              },
              "range": [
                622,
                629
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "range": [
                    624,
                    629
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 17
                    },
                    "start": {
                      "column": 12,
                      "line": 17
                    }
                  }
                },
                "range": [
                  624,
                  629
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 17
                  },
                  "start": {
                    "column": 12,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              616,
              629
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
          },
          "init": {
            "type": "Literal",
            "raw": "\"y\"",
            "value": "y",
            "range": [
              632,
              635
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 17
              },
              "start": {
                "column": 20,
                "line": 17
              }
            }
          },
          "range": [
            616,
            635
          ],
          "loc": {
            "end": {
              "column": 23,
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
        612,
        636
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
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtendedMapper2",
        "optional": false,
        "range": [
          643,
          658
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 19
          },
          "start": {
            "column": 5,
            "line": 19
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "indexType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"x\"",
            "value": "x",
            "range": [
              783,
              786
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 20
              },
              "start": {
                "column": 75,
                "line": 20
              }
            }
          },
          "range": [
            783,
            786
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 20
            },
            "start": {
              "column": 75,
              "line": 20
            }
          }
        },
        "objectType": {
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
                  713,
                  714
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 20
                  },
                  "start": {
                    "column": 5,
                    "line": 20
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
                    "column": 73,
                    "line": 20
                  },
                  "start": {
                    "column": 6,
                    "line": 20
                  }
                },
                "range": [
                  714,
                  781
                ],
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 20
                          },
                          "start": {
                            "column": 13,
                            "line": 20
                          }
                        },
                        "range": [
                          721,
                          729
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            723,
                            729
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 20
                            },
                            "start": {
                              "column": 15,
                              "line": 20
                            }
                          }
                        }
                      },
                      "range": [
                        716,
                        729
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mixed",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 20
                          },
                          "start": {
                            "column": 29,
                            "line": 20
                          }
                        },
                        "range": [
                          737,
                          752
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "HandledInputT",
                            "optional": false,
                            "range": [
                              739,
                              752
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 20
                              },
                              "start": {
                                "column": 31,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            739,
                            752
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 20
                            },
                            "start": {
                              "column": 31,
                              "line": 20
                            }
                          }
                        }
                      },
                      "range": [
                        731,
                        752
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 20
                        },
                        "start": {
                          "column": 23,
                          "line": 20
                        }
                      }
                    },
                    {
                      "type": "RestElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "range": [
                          757,
                          761
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 20
                          },
                          "start": {
                            "column": 49,
                            "line": 20
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 20
                          },
                          "start": {
                            "column": 54,
                            "line": 20
                          }
                        },
                        "range": [
                          762,
                          769
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ArgsT",
                            "optional": false,
                            "range": [
                              764,
                              769
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 20
                              },
                              "start": {
                                "column": 56,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            764,
                            769
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 20
                            },
                            "start": {
                              "column": 56,
                              "line": 20
                            }
                          }
                        }
                      },
                      "range": [
                        754,
                        769
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 20
                        },
                        "start": {
                          "column": 46,
                          "line": 20
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 73,
                        "line": 20
                      },
                      "start": {
                        "column": 63,
                        "line": 20
                      }
                    },
                    "range": [
                      771,
                      781
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "OutputT",
                        "optional": false,
                        "range": [
                          774,
                          781
                        ],
                        "loc": {
                          "end": {
                            "column": 73,
                            "line": 20
                          },
                          "start": {
                            "column": 66,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        774,
                        781
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
                          "line": 20
                        },
                        "start": {
                          "column": 66,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    715,
                    781
                  ],
                  "loc": {
                    "end": {
                      "column": 73,
                      "line": 20
                    },
                    "start": {
                      "column": 7,
                      "line": 20
                    }
                  }
                }
              },
              "range": [
                713,
                781
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 20
                },
                "start": {
                  "column": 5,
                  "line": 20
                }
              }
            }
          ],
          "range": [
            712,
            782
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        },
        "range": [
          712,
          787
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 20
          },
          "start": {
            "column": 4,
            "line": 20
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 65,
            "line": 19
          },
          "start": {
            "column": 20,
            "line": 19
          }
        },
        "range": [
          658,
          703
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "HandledInputT",
              "optional": false,
              "range": [
                659,
                672
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 19
                },
                "start": {
                  "column": 21,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              659,
              672
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 19
              },
              "start": {
                "column": 21,
                "line": 19
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "OutputT",
              "optional": false,
              "range": [
                674,
                681
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 19
                },
                "start": {
                  "column": 36,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              674,
              681
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 19
              },
              "start": {
                "column": 36,
                "line": 19
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  697,
                  700
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 19
                  },
                  "start": {
                    "column": 59,
                    "line": 19
                  }
                }
              },
              "range": [
                697,
                702
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 19
                },
                "start": {
                  "column": 59,
                  "line": 19
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ArgsT",
              "optional": false,
              "range": [
                683,
                688
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 19
                },
                "start": {
                  "column": 45,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              683,
              702
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 19
              },
              "start": {
                "column": 45,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        638,
        790
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a2",
        "optional": false,
        "range": [
          797,
          799
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 23
          },
          "start": {
            "column": 5,
            "line": 23
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            817,
            834
          ],
          "params": [
            {
              "type": "TSAnyKeyword",
              "range": [
                818,
                821
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 23
                },
                "start": {
                  "column": 26,
                  "line": 23
                }
              }
            },
            {
              "type": "TSAnyKeyword",
              "range": [
                823,
                826
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 23
                },
                "start": {
                  "column": 31,
                  "line": 23
                }
              }
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    829,
                    832
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 23
                    },
                    "start": {
                      "column": 37,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                828,
                833
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 23
                },
                "start": {
                  "column": 36,
                  "line": 23
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 23
            },
            "start": {
              "column": 25,
              "line": 23
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtendedMapper2",
          "optional": false,
          "range": [
            802,
            817
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 23
            },
            "start": {
              "column": 10,
              "line": 23
            }
          }
        },
        "range": [
          802,
          834
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 23
          },
          "start": {
            "column": 10,
            "line": 23
          }
        }
      },
      "range": [
        792,
        835
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b2",
        "optional": false,
        "range": [
          841,
          843
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 24
          },
          "start": {
            "column": 5,
            "line": 24
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            861,
            878
          ],
          "params": [
            {
              "type": "TSAnyKeyword",
              "range": [
                862,
                865
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 24
                },
                "start": {
                  "column": 26,
                  "line": 24
                }
              }
            },
            {
              "type": "TSAnyKeyword",
              "range": [
                867,
                870
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 24
                },
                "start": {
                  "column": 31,
                  "line": 24
                }
              }
            },
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "range": [
                  872,
                  875
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 24
                  },
                  "start": {
                    "column": 36,
                    "line": 24
                  }
                }
              },
              "range": [
                872,
                877
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 24
                },
                "start": {
                  "column": 36,
                  "line": 24
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 24
            },
            "start": {
              "column": 25,
              "line": 24
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExtendedMapper2",
          "optional": false,
          "range": [
            846,
            861
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 24
            },
            "start": {
              "column": 10,
              "line": 24
            }
          }
        },
        "range": [
          846,
          878
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 24
          },
          "start": {
            "column": 10,
            "line": 24
          }
        }
      },
      "range": [
        836,
        879
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "range": [
          885,
          890
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 25
          },
          "start": {
            "column": 5,
            "line": 25
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "range": [
              893,
              895
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 25
              },
              "start": {
                "column": 13,
                "line": 25
              }
            }
          },
          "range": [
            893,
            895
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 25
            },
            "start": {
              "column": 13,
              "line": 25
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "range": [
              904,
              906
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 25
              },
              "start": {
                "column": 24,
                "line": 25
              }
            }
          },
          "range": [
            904,
            906
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 25
            },
            "start": {
              "column": 24,
              "line": 25
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"n\"",
            "value": "n",
            "range": [
              915,
              918
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 25
              },
              "start": {
                "column": 35,
                "line": 25
              }
            }
          },
          "range": [
            915,
            918
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 25
            },
            "start": {
              "column": 35,
              "line": 25
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"y\"",
            "value": "y",
            "range": [
              909,
              912
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 25
              },
              "start": {
                "column": 29,
                "line": 25
              }
            }
          },
          "range": [
            909,
            912
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 25
            },
            "start": {
              "column": 29,
              "line": 25
            }
          }
        },
        "range": [
          893,
          918
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 25
          },
          "start": {
            "column": 13,
            "line": 25
          }
        }
      },
      "range": [
        880,
        918
      ],
      "loc": {
        "end": {
          "column": 38,
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
            "name": "check2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 26
                },
                "start": {
                  "column": 10,
                  "line": 26
                }
              },
              "range": [
                929,
                936
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test2",
                  "optional": false,
                  "range": [
                    931,
                    936
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 26
                    },
                    "start": {
                      "column": 12,
                      "line": 26
                    }
                  }
                },
                "range": [
                  931,
                  936
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 26
                  },
                  "start": {
                    "column": 12,
                    "line": 26
                  }
                }
              }
            },
            "range": [
              923,
              936
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"y\"",
            "value": "y",
            "range": [
              939,
              942
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 26
              },
              "start": {
                "column": 20,
                "line": 26
              }
            }
          },
          "range": [
            923,
            942
          ],
          "loc": {
            "end": {
              "column": 23,
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
        919,
        943
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a3",
        "optional": false,
        "range": [
          950,
          952
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
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 28
                },
                "start": {
                  "column": 15,
                  "line": 28
                }
              },
              "range": [
                960,
                968
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  962,
                  968
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 28
                  },
                  "start": {
                    "column": 17,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              956,
              968
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 28
              },
              "start": {
                "column": 11,
                "line": 28
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 28
                },
                "start": {
                  "column": 30,
                  "line": 28
                }
              },
              "range": [
                975,
                980
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  977,
                  980
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 28
                  },
                  "start": {
                    "column": 32,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              970,
              980
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 28
              },
              "start": {
                "column": 25,
                "line": 28
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "args_0",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 28
                },
                "start": {
                  "column": 43,
                  "line": 28
                }
              },
              "range": [
                988,
                993
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  990,
                  993
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 28
                  },
                  "start": {
                    "column": 45,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              982,
              993
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 28
              },
              "start": {
                "column": 37,
                "line": 28
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 56,
              "line": 28
            },
            "start": {
              "column": 50,
              "line": 28
            }
          },
          "range": [
            995,
            1001
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              998,
              1001
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 28
              },
              "start": {
                "column": 53,
                "line": 28
              }
            }
          }
        },
        "range": [
          955,
          1001
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 28
          },
          "start": {
            "column": 10,
            "line": 28
          }
        }
      },
      "range": [
        945,
        1001
      ],
      "loc": {
        "end": {
          "column": 56,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b3",
        "optional": false,
        "range": [
          1007,
          1009
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 29
          },
          "start": {
            "column": 5,
            "line": 29
          }
        }
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 29
                },
                "start": {
                  "column": 15,
                  "line": 29
                }
              },
              "range": [
                1017,
                1025
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  1019,
                  1025
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 29
                  },
                  "start": {
                    "column": 17,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              1013,
              1025
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 29
              },
              "start": {
                "column": 11,
                "line": 29
              }
            }
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 29
                },
                "start": {
                  "column": 30,
                  "line": 29
                }
              },
              "range": [
                1032,
                1037
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1034,
                  1037
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 29
                  },
                  "start": {
                    "column": 32,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              1027,
              1037
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 29
              },
              "start": {
                "column": 25,
                "line": 29
              }
            }
          },
          {
            "type": "RestElement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "range": [
                1042,
                1046
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 29
                },
                "start": {
                  "column": 40,
                  "line": 29
                }
              }
            },
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 29
                },
                "start": {
                  "column": 44,
                  "line": 29
                }
              },
              "range": [
                1046,
                1053
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "range": [
                    1048,
                    1051
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 29
                    },
                    "start": {
                      "column": 46,
                      "line": 29
                    }
                  }
                },
                "range": [
                  1048,
                  1053
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 29
                  },
                  "start": {
                    "column": 46,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              1039,
              1053
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 29
              },
              "start": {
                "column": 37,
                "line": 29
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "loc": {
            "end": {
              "column": 59,
              "line": 29
            },
            "start": {
              "column": 53,
              "line": 29
            }
          },
          "range": [
            1055,
            1061
          ],
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              1058,
              1061
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 29
              },
              "start": {
                "column": 56,
                "line": 29
              }
            }
          }
        },
        "range": [
          1012,
          1061
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 29
          },
          "start": {
            "column": 10,
            "line": 29
          }
        }
      },
      "range": [
        1002,
        1061
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "range": [
          1068,
          1073
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 31
          },
          "start": {
            "column": 5,
            "line": 31
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "a3",
            "optional": false,
            "range": [
              1076,
              1078
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 31
              },
              "start": {
                "column": 13,
                "line": 31
              }
            }
          },
          "range": [
            1076,
            1078
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 31
            },
            "start": {
              "column": 13,
              "line": 31
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "b3",
            "optional": false,
            "range": [
              1087,
              1089
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 31
              },
              "start": {
                "column": 24,
                "line": 31
              }
            }
          },
          "range": [
            1087,
            1089
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 31
            },
            "start": {
              "column": 24,
              "line": 31
            }
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"n\"",
            "value": "n",
            "range": [
              1098,
              1101
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 31
              },
              "start": {
                "column": 35,
                "line": 31
              }
            }
          },
          "range": [
            1098,
            1101
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 31
            },
            "start": {
              "column": 35,
              "line": 31
            }
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "\"y\"",
            "value": "y",
            "range": [
              1092,
              1095
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 31
              },
              "start": {
                "column": 29,
                "line": 31
              }
            }
          },
          "range": [
            1092,
            1095
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 31
            },
            "start": {
              "column": 29,
              "line": 31
            }
          }
        },
        "range": [
          1076,
          1101
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 31
          },
          "start": {
            "column": 13,
            "line": 31
          }
        }
      },
      "range": [
        1063,
        1101
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
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
            "name": "check3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 32
                },
                "start": {
                  "column": 10,
                  "line": 32
                }
              },
              "range": [
                1112,
                1119
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test3",
                  "optional": false,
                  "range": [
                    1114,
                    1119
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 32
                    },
                    "start": {
                      "column": 12,
                      "line": 32
                    }
                  }
                },
                "range": [
                  1114,
                  1119
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 32
                  },
                  "start": {
                    "column": 12,
                    "line": 32
                  }
                }
              }
            },
            "range": [
              1106,
              1119
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"y\"",
            "value": "y",
            "range": [
              1122,
              1125
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 32
              },
              "start": {
                "column": 20,
                "line": 32
              }
            }
          },
          "range": [
            1106,
            1125
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 32
            },
            "start": {
              "column": 4,
              "line": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        1102,
        1126
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 33
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
