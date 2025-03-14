__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    930
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                34,
                35
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 1
                },
                "start": {
                  "column": 34,
                  "line": 1
                }
              }
            },
            "range": [
              27,
              36
            ],
            "loc": {
              "end": {
                "column": 36,
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
          25,
          38
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 1
          },
          "start": {
            "column": 25,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "range": [
          9,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 24,
            "line": 1
          },
          "start": {
            "column": 13,
            "line": 1
          }
        },
        "range": [
          13,
          24
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "range": [
              22,
              24
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            }
          },
          "range": [
            15,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 15,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        38
      ],
      "loc": {
        "end": {
          "column": 38,
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              },
              "range": [
                45,
                53
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  47,
                  53
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 3
                  },
                  "start": {
                    "column": 7,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              44,
              53
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "range": [
              56,
              58
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 3
              },
              "start": {
                "column": 16,
                "line": 3
              }
            }
          },
          "range": [
            44,
            58
          ],
          "loc": {
            "end": {
              "column": 18,
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
        40,
        59
      ],
      "loc": {
        "end": {
          "column": 19,
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
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
                }
              },
              "range": [
                74,
                88
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  },
                  "range": [
                    79,
                    88
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      82,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 4
                      },
                      "start": {
                        "column": 13,
                        "line": 4
                      }
                    }
                  }
                },
                "range": [
                  76,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 7,
                    "line": 4
                  }
                }
              }
            },
            "range": [
              73,
              88
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
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "range": [
              91,
              93
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 4
              },
              "start": {
                "column": 22,
                "line": 4
              }
            }
          },
          "range": [
            73,
            93
          ],
          "loc": {
            "end": {
              "column": 24,
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
        69,
        94
      ],
      "loc": {
        "end": {
          "column": 25,
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 5,
                  "line": 6
                }
              },
              "range": [
                107,
                123
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 6
                    },
                    "start": {
                      "column": 10,
                      "line": 6
                    }
                  },
                  "range": [
                    112,
                    123
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "range": [
                        122,
                        123
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 6
                        },
                        "start": {
                          "column": 20,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      115,
                      123
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 6
                      },
                      "start": {
                        "column": 13,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  109,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 6
                  },
                  "start": {
                    "column": 7,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              106,
              123
            ],
            "loc": {
              "end": {
                "column": 21,
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
            106,
            123
          ],
          "loc": {
            "end": {
              "column": 21,
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
        102,
        124
      ],
      "loc": {
        "end": {
          "column": 22,
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
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 7
                },
                "start": {
                  "column": 5,
                  "line": 7
                }
              },
              "range": [
                130,
                146
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 7
                    },
                    "start": {
                      "column": 10,
                      "line": 7
                    }
                  },
                  "range": [
                    135,
                    146
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "range": [
                        145,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 7
                        },
                        "start": {
                          "column": 20,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      138,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 7
                      },
                      "start": {
                        "column": 13,
                        "line": 7
                      }
                    }
                  }
                },
                "range": [
                  132,
                  146
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 7
                  },
                  "start": {
                    "column": 7,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              129,
              146
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
          },
          "init": null,
          "range": [
            129,
            146
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
      "kind": "var",
      "range": [
        125,
        147
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          175,
          178
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 9
          },
          "start": {
            "column": 26,
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
        "name": "f1",
        "optional": false,
        "range": [
          158,
          160
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
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 9
              },
              "start": {
                "column": 13,
                "line": 9
              }
            },
            "range": [
              162,
              173
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "range": [
                  171,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 9
                  },
                  "start": {
                    "column": 22,
                    "line": 9
                  }
                }
              },
              "range": [
                164,
                173
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 9
                }
              }
            }
          },
          "range": [
            161,
            173
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 9
            },
            "start": {
              "column": 12,
              "line": 9
            }
          }
        }
      ],
      "range": [
        149,
        178
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 9
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
        "body": [],
        "range": [
          205,
          208
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 11
          },
          "start": {
            "column": 25,
            "line": 11
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
          189,
          191
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 11
          },
          "start": {
            "column": 9,
            "line": 11
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 24,
            "line": 11
          },
          "start": {
            "column": 13,
            "line": 11
          }
        },
        "range": [
          193,
          204
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "g2",
            "optional": false,
            "range": [
              202,
              204
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 11
              },
              "start": {
                "column": 22,
                "line": 11
              }
            }
          },
          "range": [
            195,
            204
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 11
            },
            "start": {
              "column": 15,
              "line": 11
            }
          }
        }
      },
      "range": [
        180,
        208
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          235,
          238
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 12
          },
          "start": {
            "column": 25,
            "line": 12
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "range": [
          219,
          221
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 12
          },
          "start": {
            "column": 9,
            "line": 12
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 24,
            "line": 12
          },
          "start": {
            "column": 13,
            "line": 12
          }
        },
        "range": [
          223,
          234
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "range": [
              232,
              234
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 12
              },
              "start": {
                "column": 22,
                "line": 12
              }
            }
          },
          "range": [
            225,
            234
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 12
            },
            "start": {
              "column": 15,
              "line": 12
            }
          }
        }
      },
      "range": [
        210,
        238
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          256,
          259
        ],
        "body": [],
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
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          251,
          252
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 14
          },
          "start": {
            "column": 10,
            "line": 14
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 14
          },
          "start": {
            "column": 11,
            "line": 14
          }
        },
        "range": [
          252,
          255
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
                253,
                254
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 14
                },
                "start": {
                  "column": 12,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              253,
              254
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 14
              },
              "start": {
                "column": 12,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        241,
        259
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "range": [
                297,
                299
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 15
                },
                "start": {
                  "column": 37,
                  "line": 15
                }
              }
            },
            "range": [
              290,
              300
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 15
              },
              "start": {
                "column": 30,
                "line": 15
              }
            }
          }
        ],
        "range": [
          288,
          302
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 15
          },
          "start": {
            "column": 28,
            "line": 15
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
          269,
          271
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 27,
            "line": 15
          },
          "start": {
            "column": 13,
            "line": 15
          }
        },
        "range": [
          273,
          287
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              276,
              287
            ],
            "params": [
              {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f3",
                  "optional": false,
                  "range": [
                    284,
                    286
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 15
                    },
                    "start": {
                      "column": 24,
                      "line": 15
                    }
                  }
                },
                "range": [
                  277,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 15
                  },
                  "start": {
                    "column": 17,
                    "line": 15
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 15
              },
              "start": {
                "column": 16,
                "line": 15
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "range": [
              275,
              276
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 15
              },
              "start": {
                "column": 15,
                "line": 15
              }
            }
          },
          "range": [
            275,
            287
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 15
            },
            "start": {
              "column": 15,
              "line": 15
            }
          }
        }
      },
      "range": [
        260,
        302
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 5,
                  "line": 17
                }
              },
              "range": [
                309,
                317
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  311,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 17
                  },
                  "start": {
                    "column": 7,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              308,
              317
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "f3",
            "optional": false,
            "range": [
              320,
              322
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 17
              },
              "start": {
                "column": 16,
                "line": 17
              }
            }
          },
          "range": [
            308,
            322
          ],
          "loc": {
            "end": {
              "column": 18,
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
      "kind": "var",
      "range": [
        304,
        323
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          342,
          377
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "range": [
                356,
                357
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "range": [
                357,
                375
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  372,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 20
                  },
                  "start": {
                    "column": 28,
                    "line": 20
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 20
                      },
                      "start": {
                        "column": 15,
                        "line": 20
                      }
                    },
                    "range": [
                      359,
                      371
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "range": [
                            368,
                            369
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 20
                            },
                            "start": {
                              "column": 24,
                              "line": 20
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "range": [
                            370,
                            371
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 20
                            },
                            "start": {
                              "column": 26,
                              "line": 20
                            }
                          }
                        },
                        "range": [
                          368,
                          371
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 20
                          },
                          "start": {
                            "column": 24,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        361,
                        371
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 20
                        },
                        "start": {
                          "column": 17,
                          "line": 20
                        }
                      }
                    }
                  },
                  "range": [
                    358,
                    371
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 20
                    },
                    "start": {
                      "column": 14,
                      "line": 20
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 20
                },
                "start": {
                  "column": 13,
                  "line": 20
                }
              }
            },
            "range": [
              349,
              375
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 20
              },
              "start": {
                "column": 5,
                "line": 20
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 8,
            "line": 19
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          340,
          341
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 19
          },
          "start": {
            "column": 6,
            "line": 19
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        334,
        377
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              382,
              383
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
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "range": [
              378,
              379
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 22
              },
              "start": {
                "column": 0,
                "line": 22
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "range": [
              380,
              381
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 22
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          },
          "range": [
            378,
            381
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 22
            },
            "start": {
              "column": 0,
              "line": 22
            }
          }
        },
        "optional": false,
        "range": [
          378,
          384
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 22
          }
        }
      },
      "range": [
        378,
        385
      ],
      "loc": {
        "end": {
          "column": 7,
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
            "name": "f4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 24
                },
                "start": {
                  "column": 6,
                  "line": 24
                }
              },
              "range": [
                402,
                419
              ],
              "typeAnnotation": {
                "type": "TSFunctionType",
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 24
                    },
                    "start": {
                      "column": 11,
                      "line": 24
                    }
                  },
                  "range": [
                    407,
                    419
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f4",
                      "optional": false,
                      "range": [
                        417,
                        419
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 24
                        },
                        "start": {
                          "column": 21,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      410,
                      419
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 24
                      },
                      "start": {
                        "column": 14,
                        "line": 24
                      }
                    }
                  }
                },
                "range": [
                  404,
                  419
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              400,
              419
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": null,
          "range": [
            400,
            419
          ],
          "loc": {
            "end": {
              "column": 23,
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
      "kind": "var",
      "range": [
        396,
        420
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
          "name": "f4",
          "optional": false,
          "range": [
            421,
            423
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "3",
          "value": 3,
          "range": [
            426,
            427
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
          421,
          427
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        421,
        428
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
              "type": "Identifier",
              "decorators": [],
              "name": "f5",
              "optional": false,
              "range": [
                462,
                464
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 27
                },
                "start": {
                  "column": 23,
                  "line": 27
                }
              }
            },
            "range": [
              455,
              465
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 27
              },
              "start": {
                "column": 16,
                "line": 27
              }
            }
          }
        ],
        "range": [
          453,
          467
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 27
          },
          "start": {
            "column": 14,
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
        "name": "f5",
        "optional": false,
        "range": [
          448,
          450
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
      "params": [],
      "range": [
        439,
        467
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "range": [
          478,
          480
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 29
          },
          "start": {
            "column": 9,
            "line": 29
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 24,
            "line": 29
          },
          "start": {
            "column": 13,
            "line": 29
          }
        },
        "range": [
          482,
          493
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "f6",
            "optional": false,
            "range": [
              491,
              493
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 29
              },
              "start": {
                "column": 22,
                "line": 29
              }
            }
          },
          "range": [
            484,
            493
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 29
            },
            "start": {
              "column": 15,
              "line": 29
            }
          }
        }
      },
      "range": [
        469,
        494
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "range": [
          504,
          506
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 30
          },
          "start": {
            "column": 9,
            "line": 30
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 30
              },
              "start": {
                "column": 13,
                "line": 30
              }
            },
            "range": [
              508,
              519
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f6",
                "optional": false,
                "range": [
                  517,
                  519
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 30
                  },
                  "start": {
                    "column": 22,
                    "line": 30
                  }
                }
              },
              "range": [
                510,
                519
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 30
                },
                "start": {
                  "column": 15,
                  "line": 30
                }
              }
            }
          },
          "range": [
            507,
            519
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 30
            },
            "start": {
              "column": 12,
              "line": 30
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 30
          },
          "start": {
            "column": 25,
            "line": 30
          }
        },
        "range": [
          520,
          534
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 39,
                "line": 30
              },
              "start": {
                "column": 30,
                "line": 30
              }
            },
            "range": [
              525,
              534
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                528,
                534
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 30
                },
                "start": {
                  "column": 33,
                  "line": 30
                }
              }
            }
          },
          "range": [
            522,
            534
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 30
            },
            "start": {
              "column": 27,
              "line": 30
            }
          }
        }
      },
      "range": [
        495,
        535
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
              "type": "Identifier",
              "decorators": [],
              "name": "f6",
              "optional": false,
              "range": [
                566,
                568
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 31
                },
                "start": {
                  "column": 30,
                  "line": 31
                }
              }
            },
            "range": [
              559,
              569
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 31
              },
              "start": {
                "column": 23,
                "line": 31
              }
            }
          }
        ],
        "range": [
          557,
          571
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 31
          },
          "start": {
            "column": 21,
            "line": 31
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "range": [
          545,
          547
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 31
          },
          "start": {
            "column": 9,
            "line": 31
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 19,
                "line": 31
              },
              "start": {
                "column": 14,
                "line": 31
              }
            },
            "range": [
              550,
              555
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                552,
                555
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 31
                },
                "start": {
                  "column": 16,
                  "line": 31
                }
              }
            }
          },
          "range": [
            548,
            555
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 31
            },
            "start": {
              "column": 12,
              "line": 31
            }
          }
        }
      ],
      "range": [
        536,
        571
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              576,
              578
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
              },
              "start": {
                "column": 3,
                "line": 33
              }
            }
          },
          {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              580,
              581
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 33
              },
              "start": {
                "column": 7,
                "line": 33
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "range": [
            573,
            575
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 33
            },
            "start": {
              "column": 0,
              "line": 33
            }
          }
        },
        "optional": false,
        "range": [
          573,
          582
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 33
          },
          "start": {
            "column": 0,
            "line": 33
          }
        }
      },
      "range": [
        573,
        583
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              613,
              615
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 3,
                "line": 34
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "range": [
            610,
            612
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 34
            },
            "start": {
              "column": 0,
              "line": 34
            }
          }
        },
        "optional": false,
        "range": [
          610,
          616
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 34
          }
        }
      },
      "range": [
        610,
        617
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f6",
          "optional": false,
          "range": [
            654,
            656
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "optional": false,
        "range": [
          654,
          658
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        654,
        659
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "range": [
          684,
          686
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 37
          },
          "start": {
            "column": 17,
            "line": 37
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 32,
            "line": 37
          },
          "start": {
            "column": 21,
            "line": 37
          }
        },
        "range": [
          688,
          699
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "f7",
            "optional": false,
            "range": [
              697,
              699
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 37
              },
              "start": {
                "column": 30,
                "line": 37
              }
            }
          },
          "range": [
            690,
            699
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 37
            },
            "start": {
              "column": 23,
              "line": 37
            }
          }
        }
      },
      "range": [
        667,
        700
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "range": [
          718,
          720
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 38
          },
          "start": {
            "column": 17,
            "line": 38
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 32,
                "line": 38
              },
              "start": {
                "column": 21,
                "line": 38
              }
            },
            "range": [
              722,
              733
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f7",
                "optional": false,
                "range": [
                  731,
                  733
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 38
                  },
                  "start": {
                    "column": 30,
                    "line": 38
                  }
                }
              },
              "range": [
                724,
                733
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 38
                },
                "start": {
                  "column": 23,
                  "line": 38
                }
              }
            }
          },
          "range": [
            721,
            733
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 38
            },
            "start": {
              "column": 20,
              "line": 38
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 47,
            "line": 38
          },
          "start": {
            "column": 33,
            "line": 38
          }
        },
        "range": [
          734,
          748
        ],
        "typeAnnotation": {
          "type": "TSFunctionType",
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 38
              },
              "start": {
                "column": 38,
                "line": 38
              }
            },
            "range": [
              739,
              748
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                742,
                748
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 38
                },
                "start": {
                  "column": 41,
                  "line": 38
                }
              }
            }
          },
          "range": [
            736,
            748
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 38
            },
            "start": {
              "column": 35,
              "line": 38
            }
          }
        }
      },
      "range": [
        701,
        749
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "range": [
          767,
          769
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 39
          },
          "start": {
            "column": 17,
            "line": 39
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 29,
                "line": 39
              },
              "start": {
                "column": 21,
                "line": 39
              }
            },
            "range": [
              771,
              779
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                773,
                779
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 39
                },
                "start": {
                  "column": 23,
                  "line": 39
                }
              }
            }
          },
          "range": [
            770,
            779
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 39
            },
            "start": {
              "column": 20,
              "line": 39
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 38,
            "line": 39
          },
          "start": {
            "column": 30,
            "line": 39
          }
        },
        "range": [
          780,
          788
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            782,
            788
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 39
            },
            "start": {
              "column": 32,
              "line": 39
            }
          }
        }
      },
      "range": [
        750,
        789
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "range": [
          807,
          809
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 40
          },
          "start": {
            "column": 17,
            "line": 40
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 40
              },
              "start": {
                "column": 22,
                "line": 40
              }
            },
            "range": [
              812,
              823
            ],
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "f7",
                "optional": false,
                "range": [
                  821,
                  823
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 40
                  },
                  "start": {
                    "column": 31,
                    "line": 40
                  }
                }
              },
              "range": [
                814,
                823
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 40
                },
                "start": {
                  "column": 24,
                  "line": 40
                }
              }
            }
          },
          "range": [
            810,
            823
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 40
            },
            "start": {
              "column": 20,
              "line": 40
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 40
          },
          "start": {
            "column": 34,
            "line": 40
          }
        },
        "range": [
          824,
          835
        ],
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "f7",
            "optional": false,
            "range": [
              833,
              835
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 40
              },
              "start": {
                "column": 43,
                "line": 40
              }
            }
          },
          "range": [
            826,
            835
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 40
            },
            "start": {
              "column": 36,
              "line": 40
            }
          }
        }
      },
      "range": [
        790,
        836
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              841,
              843
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 42
              },
              "start": {
                "column": 3,
                "line": 42
              }
            }
          },
          {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              845,
              846
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 42
              },
              "start": {
                "column": 7,
                "line": 42
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f7",
          "optional": false,
          "range": [
            838,
            840
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 42
            },
            "start": {
              "column": 0,
              "line": 42
            }
          }
        },
        "optional": false,
        "range": [
          838,
          847
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        838,
        848
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "\"\"",
            "value": "",
            "range": [
              878,
              880
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 43
              },
              "start": {
                "column": 3,
                "line": 43
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f7",
          "optional": false,
          "range": [
            875,
            877
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 43
            },
            "start": {
              "column": 0,
              "line": 43
            }
          }
        },
        "optional": false,
        "range": [
          875,
          881
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        875,
        882
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f7",
          "optional": false,
          "range": [
            919,
            921
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 44
            },
            "start": {
              "column": 0,
              "line": 44
            }
          }
        },
        "optional": false,
        "range": [
          919,
          923
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 44
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        919,
        924
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 11,
      "line": 44
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
