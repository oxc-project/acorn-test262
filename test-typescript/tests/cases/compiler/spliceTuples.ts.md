__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    518
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
            "name": "sb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 1
                },
                "start": {
                  "column": 16,
                  "line": 1
                }
              },
              "range": [
                16,
                35
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      19,
                      25
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 1
                      },
                      "start": {
                        "column": 19,
                        "line": 1
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      27,
                      34
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 1
                      },
                      "start": {
                        "column": 27,
                        "line": 1
                      }
                    }
                  }
                ],
                "range": [
                  18,
                  35
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 1
                  },
                  "start": {
                    "column": 18,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              14,
              35
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 1
              },
              "start": {
                "column": 14,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            14,
            35
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        0,
        36
      ],
      "loc": {
        "end": {
          "column": 36,
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
            "name": "k1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 33,
                  "line": 3
                },
                "start": {
                  "column": 6,
                  "line": 3
                }
              },
              "range": [
                44,
                71
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      47,
                      53
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 3
                      },
                      "start": {
                        "column": 9,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      55,
                      61
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 3
                      },
                      "start": {
                        "column": 17,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      63,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 3
                      },
                      "start": {
                        "column": 25,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  46,
                  71
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              42,
              71
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": null,
          "range": [
            42,
            71
          ],
          "loc": {
            "end": {
              "column": 33,
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
        38,
        72
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k1",
          "optional": false,
          "range": [
            73,
            75
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 4
            },
            "start": {
              "column": 0,
              "line": 4
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                79,
                80
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 4
                },
                "start": {
                  "column": 6,
                  "line": 4
                }
              }
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sb",
                "optional": false,
                "range": [
                  85,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 4
                  },
                  "start": {
                    "column": 12,
                    "line": 4
                  }
                }
              },
              "range": [
                82,
                87
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
          ],
          "range": [
            78,
            88
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 4
            },
            "start": {
              "column": 5,
              "line": 4
            }
          }
        },
        "range": [
          73,
          88
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        73,
        89
      ],
      "loc": {
        "end": {
          "column": 16,
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
            "name": "k2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 6
                },
                "start": {
                  "column": 6,
                  "line": 6
                }
              },
              "range": [
                97,
                132
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      100,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 6
                      },
                      "start": {
                        "column": 9,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      108,
                      114
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      116,
                      123
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 6
                      },
                      "start": {
                        "column": 25,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      125,
                      131
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 6
                      },
                      "start": {
                        "column": 34,
                        "line": 6
                      }
                    }
                  }
                ],
                "range": [
                  99,
                  132
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              95,
              132
            ],
            "loc": {
              "end": {
                "column": 41,
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
            95,
            132
          ],
          "loc": {
            "end": {
              "column": 41,
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
        91,
        133
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 6
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "range": [
            134,
            136
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                140,
                141
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 7
                },
                "start": {
                  "column": 6,
                  "line": 7
                }
              }
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sb",
                "optional": false,
                "range": [
                  146,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
                    "line": 7
                  }
                }
              },
              "range": [
                143,
                148
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              }
            },
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                150,
                151
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
            }
          ],
          "range": [
            139,
            152
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 7
            },
            "start": {
              "column": 5,
              "line": 7
            }
          }
        },
        "range": [
          134,
          152
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        134,
        153
      ],
      "loc": {
        "end": {
          "column": 19,
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
            "name": "sb_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 41,
                  "line": 9
                },
                "start": {
                  "column": 17,
                  "line": 9
                }
              },
              "range": [
                172,
                196
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      175,
                      181
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 9
                      },
                      "start": {
                        "column": 20,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          186,
                          193
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 9
                          },
                          "start": {
                            "column": 31,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        186,
                        195
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 9
                        },
                        "start": {
                          "column": 31,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      183,
                      195
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 9
                      },
                      "start": {
                        "column": 28,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  174,
                  196
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 9
                  },
                  "start": {
                    "column": 19,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              169,
              196
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            169,
            196
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 9
            },
            "start": {
              "column": 14,
              "line": 9
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        155,
        197
      ],
      "loc": {
        "end": {
          "column": 42,
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
            "name": "k3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 11
                },
                "start": {
                  "column": 6,
                  "line": 11
                }
              },
              "range": [
                205,
                237
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      208,
                      214
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 11
                      },
                      "start": {
                        "column": 9,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      216,
                      222
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 11
                      },
                      "start": {
                        "column": 17,
                        "line": 11
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          227,
                          234
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 11
                          },
                          "start": {
                            "column": 28,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        227,
                        236
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 11
                        },
                        "start": {
                          "column": 28,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      224,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 11
                      },
                      "start": {
                        "column": 25,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  207,
                  237
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              }
            },
            "range": [
              203,
              237
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          "init": null,
          "range": [
            203,
            237
          ],
          "loc": {
            "end": {
              "column": 38,
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
        199,
        238
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k3",
          "optional": false,
          "range": [
            239,
            241
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                245,
                246
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 12
                },
                "start": {
                  "column": 6,
                  "line": 12
                }
              }
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sb_",
                "optional": false,
                "range": [
                  251,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 12
                  },
                  "start": {
                    "column": 12,
                    "line": 12
                  }
                }
              },
              "range": [
                248,
                254
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              }
            }
          ],
          "range": [
            244,
            255
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 12
            },
            "start": {
              "column": 5,
              "line": 12
            }
          }
        },
        "range": [
          239,
          255
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        239,
        256
      ],
      "loc": {
        "end": {
          "column": 17,
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
            "name": "sbb_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 51,
                  "line": 14
                },
                "start": {
                  "column": 18,
                  "line": 14
                }
              },
              "range": [
                276,
                309
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      279,
                      285
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 14
                      },
                      "start": {
                        "column": 21,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      287,
                      294
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 14
                      },
                      "start": {
                        "column": 29,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          299,
                          306
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 14
                          },
                          "start": {
                            "column": 41,
                            "line": 14
                          }
                        }
                      },
                      "range": [
                        299,
                        308
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 14
                        },
                        "start": {
                          "column": 41,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      296,
                      308
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 14
                      },
                      "start": {
                        "column": 38,
                        "line": 14
                      }
                    }
                  }
                ],
                "range": [
                  278,
                  309
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 14
                  },
                  "start": {
                    "column": 20,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              272,
              309
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 14
              },
              "start": {
                "column": 14,
                "line": 14
              }
            }
          },
          "init": null,
          "range": [
            272,
            309
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 14
            },
            "start": {
              "column": 14,
              "line": 14
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        258,
        310
      ],
      "loc": {
        "end": {
          "column": 52,
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
            "name": "k4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 16
                },
                "start": {
                  "column": 6,
                  "line": 16
                }
              },
              "range": [
                318,
                350
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      321,
                      327
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 16
                      },
                      "start": {
                        "column": 9,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      329,
                      335
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 16
                      },
                      "start": {
                        "column": 17,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          340,
                          347
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 16
                          },
                          "start": {
                            "column": 28,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        340,
                        349
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 16
                        },
                        "start": {
                          "column": 28,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      337,
                      349
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 16
                      },
                      "start": {
                        "column": 25,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  320,
                  350
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              316,
              350
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": null,
          "range": [
            316,
            350
          ],
          "loc": {
            "end": {
              "column": 38,
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
        312,
        351
      ],
      "loc": {
        "end": {
          "column": 39,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k4",
          "optional": false,
          "range": [
            352,
            354
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 17
            },
            "start": {
              "column": 0,
              "line": 17
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                358,
                359
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 17
                },
                "start": {
                  "column": 6,
                  "line": 17
                }
              }
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sbb_",
                "optional": false,
                "range": [
                  364,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 17
                  },
                  "start": {
                    "column": 12,
                    "line": 17
                  }
                }
              },
              "range": [
                361,
                368
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
                }
              }
            }
          ],
          "range": [
            357,
            369
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 17
            },
            "start": {
              "column": 5,
              "line": 17
            }
          }
        },
        "range": [
          352,
          369
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 17
          }
        }
      },
      "range": [
        352,
        370
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
            "name": "k5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 47,
                  "line": 19
                },
                "start": {
                  "column": 6,
                  "line": 19
                }
              },
              "range": [
                378,
                419
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      381,
                      387
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 19
                      },
                      "start": {
                        "column": 9,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      389,
                      395
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 19
                      },
                      "start": {
                        "column": 17,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      397,
                      404
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 19
                      },
                      "start": {
                        "column": 25,
                        "line": 19
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          409,
                          416
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 19
                          },
                          "start": {
                            "column": 37,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        409,
                        418
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 19
                        },
                        "start": {
                          "column": 37,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      406,
                      418
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 19
                      },
                      "start": {
                        "column": 34,
                        "line": 19
                      }
                    }
                  }
                ],
                "range": [
                  380,
                  419
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              376,
              419
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": null,
          "range": [
            376,
            419
          ],
          "loc": {
            "end": {
              "column": 47,
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
        372,
        420
      ],
      "loc": {
        "end": {
          "column": 48,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k5",
          "optional": false,
          "range": [
            421,
            423
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                427,
                428
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 20
                },
                "start": {
                  "column": 6,
                  "line": 20
                }
              }
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sbb_",
                "optional": false,
                "range": [
                  433,
                  437
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 20
                  },
                  "start": {
                    "column": 12,
                    "line": 20
                  }
                }
              },
              "range": [
                430,
                437
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 20
                }
              }
            }
          ],
          "range": [
            426,
            438
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 20
            },
            "start": {
              "column": 5,
              "line": 20
            }
          }
        },
        "range": [
          421,
          438
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        421,
        439
      ],
      "loc": {
        "end": {
          "column": 18,
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
            "name": "k6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 56,
                  "line": 22
                },
                "start": {
                  "column": 6,
                  "line": 22
                }
              },
              "range": [
                447,
                497
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      450,
                      456
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 22
                      },
                      "start": {
                        "column": 9,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      458,
                      464
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 22
                      },
                      "start": {
                        "column": 17,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      466,
                      473
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 22
                      },
                      "start": {
                        "column": 25,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      475,
                      482
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 22
                      },
                      "start": {
                        "column": 34,
                        "line": 22
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          487,
                          494
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 22
                          },
                          "start": {
                            "column": 46,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        487,
                        496
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 22
                        },
                        "start": {
                          "column": 46,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      484,
                      496
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 22
                      },
                      "start": {
                        "column": 43,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  449,
                  497
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              445,
              497
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": null,
          "range": [
            445,
            497
          ],
          "loc": {
            "end": {
              "column": 56,
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
        441,
        498
      ],
      "loc": {
        "end": {
          "column": 57,
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
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k6",
          "optional": false,
          "range": [
            499,
            501
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                505,
                506
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 23
                },
                "start": {
                  "column": 6,
                  "line": 23
                }
              }
            },
            {
              "type": "SpreadElement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "sbb_",
                "optional": false,
                "range": [
                  511,
                  515
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 23
                  },
                  "start": {
                    "column": 12,
                    "line": 23
                  }
                }
              },
              "range": [
                508,
                515
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 23
                }
              }
            }
          ],
          "range": [
            504,
            516
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 23
            },
            "start": {
              "column": 5,
              "line": 23
            }
          }
        },
        "range": [
          499,
          516
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        499,
        517
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
