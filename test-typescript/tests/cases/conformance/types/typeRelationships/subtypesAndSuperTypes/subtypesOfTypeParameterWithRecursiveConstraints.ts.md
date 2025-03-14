__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    82,
    3666
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          95,
          106
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                97,
                100
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 15,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              },
              "range": [
                100,
                103
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    102,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 3
                    },
                    "start": {
                      "column": 20,
                      "line": 3
                    }
                  }
                },
                "range": [
                  102,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
                  }
                }
              }
            },
            "value": null,
            "range": [
              97,
              104
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 3
              },
              "start": {
                "column": 15,
                "line": 3
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 3
          },
          "start": {
            "column": 13,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "range": [
          88,
          91
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        },
        "range": [
          91,
          94
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
                92,
                93
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              92,
              93
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 3
              },
              "start": {
                "column": 10,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        82,
        106
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 3
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
                    210,
                    212
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "range": [
                      226,
                      227
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 6
                      },
                      "start": {
                        "column": 24,
                        "line": 6
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      222,
                      223
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
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      215,
                      219
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 6
                      },
                      "start": {
                        "column": 13,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    215,
                    227
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 6
                    },
                    "start": {
                      "column": 13,
                      "line": 6
                    }
                  }
                },
                "range": [
                  210,
                  227
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              206,
              228
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 6
              },
              "start": {
                "column": 4,
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
                  "name": "r1",
                  "optional": false,
                  "range": [
                    237,
                    239
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      253,
                      254
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 7
                      },
                      "start": {
                        "column": 24,
                        "line": 7
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "range": [
                      249,
                      250
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
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      242,
                      246
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 7
                      },
                      "start": {
                        "column": 13,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    242,
                    254
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 7
                    },
                    "start": {
                      "column": 13,
                      "line": 7
                    }
                  }
                },
                "range": [
                  237,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              233,
              255
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 7
              },
              "start": {
                "column": 4,
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
                  "name": "r2",
                  "optional": false,
                  "range": [
                    275,
                    277
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      291,
                      292
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 10
                      },
                      "start": {
                        "column": 24,
                        "line": 10
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      287,
                      288
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 10
                      },
                      "start": {
                        "column": 20,
                        "line": 10
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      280,
                      284
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 10
                      },
                      "start": {
                        "column": 13,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    280,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 10
                    },
                    "start": {
                      "column": 13,
                      "line": 10
                    }
                  }
                },
                "range": [
                  275,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              271,
              293
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 10
              },
              "start": {
                "column": 4,
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
                  "name": "r2",
                  "optional": false,
                  "range": [
                    302,
                    304
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
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      318,
                      319
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 11
                      },
                      "start": {
                        "column": 24,
                        "line": 11
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      314,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 11
                      },
                      "start": {
                        "column": 20,
                        "line": 11
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      307,
                      311
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 11
                      },
                      "start": {
                        "column": 13,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    307,
                    319
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 11
                    },
                    "start": {
                      "column": 13,
                      "line": 11
                    }
                  }
                },
                "range": [
                  302,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              298,
              320
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 11
              },
              "start": {
                "column": 4,
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
                  "name": "r3",
                  "optional": false,
                  "range": [
                    340,
                    342
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
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "range": [
                      356,
                      357
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 14
                      },
                      "start": {
                        "column": 24,
                        "line": 14
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      352,
                      353
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 14
                      },
                      "start": {
                        "column": 20,
                        "line": 14
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      345,
                      349
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 14
                      },
                      "start": {
                        "column": 13,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    345,
                    357
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 14
                    },
                    "start": {
                      "column": 13,
                      "line": 14
                    }
                  }
                },
                "range": [
                  340,
                  357
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              336,
              358
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
                    367,
                    369
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      383,
                      384
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 15
                      },
                      "start": {
                        "column": 24,
                        "line": 15
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "range": [
                      379,
                      380
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 15
                      },
                      "start": {
                        "column": 20,
                        "line": 15
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      372,
                      376
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 15
                      },
                      "start": {
                        "column": 13,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    372,
                    384
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 15
                    },
                    "start": {
                      "column": 13,
                      "line": 15
                    }
                  }
                },
                "range": [
                  367,
                  384
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 15
                  },
                  "start": {
                    "column": 8,
                    "line": 15
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              363,
              385
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 15
              },
              "start": {
                "column": 4,
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
                  "name": "r4",
                  "optional": false,
                  "range": [
                    405,
                    407
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 18
                    },
                    "start": {
                      "column": 8,
                      "line": 18
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        425,
                        428
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 18
                        },
                        "start": {
                          "column": 28,
                          "line": 18
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        428,
                        431
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              429,
                              430
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 18
                              },
                              "start": {
                                "column": 32,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            429,
                            430
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 18
                            },
                            "start": {
                              "column": 32,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 18
                        },
                        "start": {
                          "column": 31,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      421,
                      433
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 18
                      },
                      "start": {
                        "column": 24,
                        "line": 18
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      417,
                      418
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 18
                      },
                      "start": {
                        "column": 20,
                        "line": 18
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      410,
                      414
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 18
                      },
                      "start": {
                        "column": 13,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    410,
                    433
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 18
                    },
                    "start": {
                      "column": 13,
                      "line": 18
                    }
                  }
                },
                "range": [
                  405,
                  433
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              401,
              434
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 18
              },
              "start": {
                "column": 4,
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
                  "name": "r4",
                  "optional": false,
                  "range": [
                    443,
                    445
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      470,
                      471
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 19
                      },
                      "start": {
                        "column": 35,
                        "line": 19
                      }
                    }
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        459,
                        462
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 19
                        },
                        "start": {
                          "column": 24,
                          "line": 19
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        462,
                        465
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              463,
                              464
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 19
                              },
                              "start": {
                                "column": 28,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            463,
                            464
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 19
                            },
                            "start": {
                              "column": 28,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 19
                        },
                        "start": {
                          "column": 27,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      455,
                      467
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 19
                      },
                      "start": {
                        "column": 20,
                        "line": 19
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      448,
                      452
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 19
                      },
                      "start": {
                        "column": 13,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    448,
                    471
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 19
                    },
                    "start": {
                      "column": 13,
                      "line": 19
                    }
                  }
                },
                "range": [
                  443,
                  471
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              439,
              472
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 19
              },
              "start": {
                "column": 4,
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
                  "name": "r5",
                  "optional": false,
                  "range": [
                    492,
                    494
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        512,
                        515
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 22
                        },
                        "start": {
                          "column": 28,
                          "line": 22
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        515,
                        518
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              516,
                              517
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 22
                              },
                              "start": {
                                "column": 32,
                                "line": 22
                              }
                            }
                          },
                          "range": [
                            516,
                            517
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 22
                            },
                            "start": {
                              "column": 32,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 22
                        },
                        "start": {
                          "column": 31,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      508,
                      520
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 22
                      },
                      "start": {
                        "column": 24,
                        "line": 22
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "range": [
                      504,
                      505
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 22
                      },
                      "start": {
                        "column": 20,
                        "line": 22
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      497,
                      501
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 22
                      },
                      "start": {
                        "column": 13,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    497,
                    520
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 22
                    },
                    "start": {
                      "column": 13,
                      "line": 22
                    }
                  }
                },
                "range": [
                  492,
                  520
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              488,
              521
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 22
              },
              "start": {
                "column": 4,
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
                  "name": "r5",
                  "optional": false,
                  "range": [
                    530,
                    532
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
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "range": [
                      557,
                      558
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 23
                      },
                      "start": {
                        "column": 35,
                        "line": 23
                      }
                    }
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        546,
                        549
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 23
                        },
                        "start": {
                          "column": 24,
                          "line": 23
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        549,
                        552
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              550,
                              551
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 23
                              },
                              "start": {
                                "column": 28,
                                "line": 23
                              }
                            }
                          },
                          "range": [
                            550,
                            551
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 23
                            },
                            "start": {
                              "column": 28,
                              "line": 23
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 23
                        },
                        "start": {
                          "column": 27,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      542,
                      554
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 23
                      },
                      "start": {
                        "column": 20,
                        "line": 23
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      535,
                      539
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 23
                      },
                      "start": {
                        "column": 13,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    535,
                    558
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 23
                    },
                    "start": {
                      "column": 13,
                      "line": 23
                    }
                  }
                },
                "range": [
                  530,
                  558
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              526,
              559
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
                  "name": "r6",
                  "optional": false,
                  "range": [
                    579,
                    581
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        599,
                        602
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 26
                        },
                        "start": {
                          "column": 28,
                          "line": 26
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        602,
                        605
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              603,
                              604
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 26
                              },
                              "start": {
                                "column": 32,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            603,
                            604
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 26
                            },
                            "start": {
                              "column": 32,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 26
                        },
                        "start": {
                          "column": 31,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      595,
                      607
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 26
                      },
                      "start": {
                        "column": 24,
                        "line": 26
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      591,
                      592
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 26
                      },
                      "start": {
                        "column": 20,
                        "line": 26
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      584,
                      588
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 26
                      },
                      "start": {
                        "column": 13,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    584,
                    607
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 26
                    },
                    "start": {
                      "column": 13,
                      "line": 26
                    }
                  }
                },
                "range": [
                  579,
                  607
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              575,
              608
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
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
                  "name": "r6",
                  "optional": false,
                  "range": [
                    617,
                    619
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      644,
                      645
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 27
                      },
                      "start": {
                        "column": 35,
                        "line": 27
                      }
                    }
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        633,
                        636
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 27
                        },
                        "start": {
                          "column": 24,
                          "line": 27
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        636,
                        639
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              637,
                              638
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 27
                              },
                              "start": {
                                "column": 28,
                                "line": 27
                              }
                            }
                          },
                          "range": [
                            637,
                            638
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 27
                            },
                            "start": {
                              "column": 28,
                              "line": 27
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 27
                        },
                        "start": {
                          "column": 27,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      629,
                      641
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 27
                      },
                      "start": {
                        "column": 20,
                        "line": 27
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      622,
                      626
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 27
                      },
                      "start": {
                        "column": 13,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    622,
                    645
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 27
                    },
                    "start": {
                      "column": 13,
                      "line": 27
                    }
                  }
                },
                "range": [
                  617,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 27
                  },
                  "start": {
                    "column": 8,
                    "line": 27
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              613,
              646
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
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
                  "name": "r7",
                  "optional": false,
                  "range": [
                    667,
                    669
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 31
                    },
                    "start": {
                      "column": 8,
                      "line": 31
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        687,
                        690
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 31
                        },
                        "start": {
                          "column": 28,
                          "line": 31
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        690,
                        693
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              691,
                              692
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 31
                              },
                              "start": {
                                "column": 32,
                                "line": 31
                              }
                            }
                          },
                          "range": [
                            691,
                            692
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 31
                            },
                            "start": {
                              "column": 32,
                              "line": 31
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 31
                        },
                        "start": {
                          "column": 31,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      683,
                      695
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 31
                      },
                      "start": {
                        "column": 24,
                        "line": 31
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      679,
                      680
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 31
                      },
                      "start": {
                        "column": 20,
                        "line": 31
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      672,
                      676
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 31
                      },
                      "start": {
                        "column": 13,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    672,
                    695
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 31
                    },
                    "start": {
                      "column": 13,
                      "line": 31
                    }
                  }
                },
                "range": [
                  667,
                  695
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 31
                  },
                  "start": {
                    "column": 8,
                    "line": 31
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              663,
              696
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 31
              },
              "start": {
                "column": 4,
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
                  "name": "r7",
                  "optional": false,
                  "range": [
                    705,
                    707
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      732,
                      733
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 32
                      },
                      "start": {
                        "column": 35,
                        "line": 32
                      }
                    }
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        721,
                        724
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 32
                        },
                        "start": {
                          "column": 24,
                          "line": 32
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        724,
                        727
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              725,
                              726
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 32
                              },
                              "start": {
                                "column": 28,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            725,
                            726
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 32
                            },
                            "start": {
                              "column": 28,
                              "line": 32
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 32
                        },
                        "start": {
                          "column": 27,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      717,
                      729
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 32
                      },
                      "start": {
                        "column": 20,
                        "line": 32
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      710,
                      714
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 32
                      },
                      "start": {
                        "column": 13,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    710,
                    733
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 32
                    },
                    "start": {
                      "column": 13,
                      "line": 32
                    }
                  }
                },
                "range": [
                  705,
                  733
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              701,
              734
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
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
                  "name": "r8",
                  "optional": false,
                  "range": [
                    754,
                    756
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 35
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        774,
                        777
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 35
                        },
                        "start": {
                          "column": 28,
                          "line": 35
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        777,
                        780
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              778,
                              779
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 35
                              },
                              "start": {
                                "column": 32,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            778,
                            779
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 35
                            },
                            "start": {
                              "column": 32,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 35
                        },
                        "start": {
                          "column": 31,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      770,
                      782
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 35
                      },
                      "start": {
                        "column": 24,
                        "line": 35
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "range": [
                      766,
                      767
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 35
                      },
                      "start": {
                        "column": 20,
                        "line": 35
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      759,
                      763
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 35
                      },
                      "start": {
                        "column": 13,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    759,
                    782
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 35
                    },
                    "start": {
                      "column": 13,
                      "line": 35
                    }
                  }
                },
                "range": [
                  754,
                  782
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 35
                  },
                  "start": {
                    "column": 8,
                    "line": 35
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              750,
              783
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
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
                  "name": "r8",
                  "optional": false,
                  "range": [
                    792,
                    794
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "range": [
                      819,
                      820
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 36
                      },
                      "start": {
                        "column": 35,
                        "line": 36
                      }
                    }
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        808,
                        811
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 36
                        },
                        "start": {
                          "column": 24,
                          "line": 36
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        811,
                        814
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              812,
                              813
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 36
                              },
                              "start": {
                                "column": 28,
                                "line": 36
                              }
                            }
                          },
                          "range": [
                            812,
                            813
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 36
                            },
                            "start": {
                              "column": 28,
                              "line": 36
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 36
                        },
                        "start": {
                          "column": 27,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      804,
                      816
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 36
                      },
                      "start": {
                        "column": 20,
                        "line": 36
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      797,
                      801
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 36
                      },
                      "start": {
                        "column": 13,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    797,
                    820
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 36
                    },
                    "start": {
                      "column": 13,
                      "line": 36
                    }
                  }
                },
                "range": [
                  792,
                  820
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 36
                  },
                  "start": {
                    "column": 8,
                    "line": 36
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              788,
              821
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
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
                  "name": "r9",
                  "optional": false,
                  "range": [
                    841,
                    843
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        861,
                        864
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 39
                        },
                        "start": {
                          "column": 28,
                          "line": 39
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        864,
                        867
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              865,
                              866
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 39
                              },
                              "start": {
                                "column": 32,
                                "line": 39
                              }
                            }
                          },
                          "range": [
                            865,
                            866
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 39
                            },
                            "start": {
                              "column": 32,
                              "line": 39
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 39
                        },
                        "start": {
                          "column": 31,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      857,
                      869
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 39
                      },
                      "start": {
                        "column": 24,
                        "line": 39
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      853,
                      854
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 39
                      },
                      "start": {
                        "column": 20,
                        "line": 39
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      846,
                      850
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 39
                      },
                      "start": {
                        "column": 13,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    846,
                    869
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 39
                    },
                    "start": {
                      "column": 13,
                      "line": 39
                    }
                  }
                },
                "range": [
                  841,
                  869
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 39
                  },
                  "start": {
                    "column": 8,
                    "line": 39
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              837,
              870
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
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
                  "name": "r9",
                  "optional": false,
                  "range": [
                    879,
                    881
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      906,
                      907
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 40
                      },
                      "start": {
                        "column": 35,
                        "line": 40
                      }
                    }
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        895,
                        898
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 40
                        },
                        "start": {
                          "column": 24,
                          "line": 40
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        898,
                        901
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              899,
                              900
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 40
                              },
                              "start": {
                                "column": 28,
                                "line": 40
                              }
                            }
                          },
                          "range": [
                            899,
                            900
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 40
                            },
                            "start": {
                              "column": 28,
                              "line": 40
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 40
                        },
                        "start": {
                          "column": 27,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      891,
                      903
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 40
                      },
                      "start": {
                        "column": 20,
                        "line": 40
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      884,
                      888
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 40
                      },
                      "start": {
                        "column": 13,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    884,
                    907
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 40
                    },
                    "start": {
                      "column": 13,
                      "line": 40
                    }
                  }
                },
                "range": [
                  879,
                  907
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 40
                  },
                  "start": {
                    "column": 8,
                    "line": 40
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              875,
              908
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
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
                  "name": "r10",
                  "optional": false,
                  "range": [
                    929,
                    932
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        950,
                        953
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 44
                        },
                        "start": {
                          "column": 29,
                          "line": 44
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        953,
                        956
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              954,
                              955
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 44
                              },
                              "start": {
                                "column": 33,
                                "line": 44
                              }
                            }
                          },
                          "range": [
                            954,
                            955
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 44
                            },
                            "start": {
                              "column": 33,
                              "line": 44
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 44
                        },
                        "start": {
                          "column": 32,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      946,
                      958
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 44
                      },
                      "start": {
                        "column": 25,
                        "line": 44
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      942,
                      943
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 44
                      },
                      "start": {
                        "column": 21,
                        "line": 44
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      935,
                      939
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 44
                      },
                      "start": {
                        "column": 14,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    935,
                    958
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 44
                    },
                    "start": {
                      "column": 14,
                      "line": 44
                    }
                  }
                },
                "range": [
                  929,
                  958
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 44
                  },
                  "start": {
                    "column": 8,
                    "line": 44
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              925,
              959
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
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
                  "name": "r10",
                  "optional": false,
                  "range": [
                    968,
                    971
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "range": [
                      996,
                      997
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 45
                      },
                      "start": {
                        "column": 36,
                        "line": 45
                      }
                    }
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        985,
                        988
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 45
                        },
                        "start": {
                          "column": 25,
                          "line": 45
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        988,
                        991
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              989,
                              990
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 45
                              },
                              "start": {
                                "column": 29,
                                "line": 45
                              }
                            }
                          },
                          "range": [
                            989,
                            990
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 45
                            },
                            "start": {
                              "column": 29,
                              "line": 45
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 45
                        },
                        "start": {
                          "column": 28,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      981,
                      993
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 45
                      },
                      "start": {
                        "column": 21,
                        "line": 45
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      974,
                      978
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 45
                      },
                      "start": {
                        "column": 14,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    974,
                    997
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 45
                    },
                    "start": {
                      "column": 14,
                      "line": 45
                    }
                  }
                },
                "range": [
                  968,
                  997
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 45
                  },
                  "start": {
                    "column": 8,
                    "line": 45
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              964,
              998
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
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
                  "name": "r11",
                  "optional": false,
                  "range": [
                    1018,
                    1021
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 48
                    },
                    "start": {
                      "column": 8,
                      "line": 48
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1039,
                        1042
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 48
                        },
                        "start": {
                          "column": 29,
                          "line": 48
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1042,
                        1045
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              1043,
                              1044
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 48
                              },
                              "start": {
                                "column": 33,
                                "line": 48
                              }
                            }
                          },
                          "range": [
                            1043,
                            1044
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 48
                            },
                            "start": {
                              "column": 33,
                              "line": 48
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 48
                        },
                        "start": {
                          "column": 32,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      1035,
                      1047
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 48
                      },
                      "start": {
                        "column": 25,
                        "line": 48
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "range": [
                      1031,
                      1032
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 48
                      },
                      "start": {
                        "column": 21,
                        "line": 48
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      1024,
                      1028
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 48
                      },
                      "start": {
                        "column": 14,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    1024,
                    1047
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 48
                    },
                    "start": {
                      "column": 14,
                      "line": 48
                    }
                  }
                },
                "range": [
                  1018,
                  1047
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 48
                  },
                  "start": {
                    "column": 8,
                    "line": 48
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1014,
              1048
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
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
                  "name": "r11",
                  "optional": false,
                  "range": [
                    1057,
                    1060
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 49
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "range": [
                      1085,
                      1086
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 49
                      },
                      "start": {
                        "column": 36,
                        "line": 49
                      }
                    }
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1074,
                        1077
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 49
                        },
                        "start": {
                          "column": 25,
                          "line": 49
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1077,
                        1080
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              1078,
                              1079
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 49
                              },
                              "start": {
                                "column": 29,
                                "line": 49
                              }
                            }
                          },
                          "range": [
                            1078,
                            1079
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 49
                            },
                            "start": {
                              "column": 29,
                              "line": 49
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 49
                        },
                        "start": {
                          "column": 28,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      1070,
                      1082
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 49
                      },
                      "start": {
                        "column": 21,
                        "line": 49
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      1063,
                      1067
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 49
                      },
                      "start": {
                        "column": 14,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    1063,
                    1086
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 49
                    },
                    "start": {
                      "column": 14,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1057,
                  1086
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 49
                  },
                  "start": {
                    "column": 8,
                    "line": 49
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1053,
              1087
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
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
                  "name": "r12",
                  "optional": false,
                  "range": [
                    1107,
                    1110
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 52
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1128,
                        1131
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 52
                        },
                        "start": {
                          "column": 29,
                          "line": 52
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1131,
                        1134
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              1132,
                              1133
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 52
                              },
                              "start": {
                                "column": 33,
                                "line": 52
                              }
                            }
                          },
                          "range": [
                            1132,
                            1133
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 52
                            },
                            "start": {
                              "column": 33,
                              "line": 52
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 52
                        },
                        "start": {
                          "column": 32,
                          "line": 52
                        }
                      }
                    },
                    "range": [
                      1124,
                      1136
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 52
                      },
                      "start": {
                        "column": 25,
                        "line": 52
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      1120,
                      1121
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 52
                      },
                      "start": {
                        "column": 21,
                        "line": 52
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      1113,
                      1117
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 52
                      },
                      "start": {
                        "column": 14,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    1113,
                    1136
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 52
                    },
                    "start": {
                      "column": 14,
                      "line": 52
                    }
                  }
                },
                "range": [
                  1107,
                  1136
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 52
                  },
                  "start": {
                    "column": 8,
                    "line": 52
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1103,
              1137
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
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
                  "name": "r12",
                  "optional": false,
                  "range": [
                    1146,
                    1149
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 53
                    },
                    "start": {
                      "column": 8,
                      "line": 53
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "range": [
                      1174,
                      1175
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 53
                      },
                      "start": {
                        "column": 36,
                        "line": 53
                      }
                    }
                  },
                  "consequent": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1163,
                        1166
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 53
                        },
                        "start": {
                          "column": 25,
                          "line": 53
                        }
                      }
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1166,
                        1169
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              1167,
                              1168
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 53
                              },
                              "start": {
                                "column": 29,
                                "line": 53
                              }
                            }
                          },
                          "range": [
                            1167,
                            1168
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 53
                            },
                            "start": {
                              "column": 29,
                              "line": 53
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 53
                        },
                        "start": {
                          "column": 28,
                          "line": 53
                        }
                      }
                    },
                    "range": [
                      1159,
                      1171
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 53
                      },
                      "start": {
                        "column": 21,
                        "line": 53
                      }
                    }
                  },
                  "test": {
                    "type": "Literal",
                    "raw": "true",
                    "value": true,
                    "range": [
                      1152,
                      1156
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 53
                      },
                      "start": {
                        "column": 14,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    1152,
                    1175
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 53
                    },
                    "start": {
                      "column": 14,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1146,
                  1175
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 53
                  },
                  "start": {
                    "column": 8,
                    "line": 53
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1142,
              1176
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          }
        ],
        "range": [
          190,
          1178
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 83,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          116,
          117
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
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
                "column": 69,
                "line": 4
              },
              "start": {
                "column": 66,
                "line": 4
              }
            },
            "range": [
              173,
              176
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  175,
                  176
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 4
                  },
                  "start": {
                    "column": 68,
                    "line": 4
                  }
                }
              },
              "range": [
                175,
                176
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 4
                },
                "start": {
                  "column": 68,
                  "line": 4
                }
              }
            }
          },
          "range": [
            172,
            176
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 4
            },
            "start": {
              "column": 65,
              "line": 4
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 75,
                "line": 4
              },
              "start": {
                "column": 72,
                "line": 4
              }
            },
            "range": [
              179,
              182
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  181,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 75,
                    "line": 4
                  },
                  "start": {
                    "column": 74,
                    "line": 4
                  }
                }
              },
              "range": [
                181,
                182
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 4
                },
                "start": {
                  "column": 74,
                  "line": 4
                }
              }
            }
          },
          "range": [
            178,
            182
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 4
            },
            "start": {
              "column": 71,
              "line": 4
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 81,
                "line": 4
              },
              "start": {
                "column": 78,
                "line": 4
              }
            },
            "range": [
              185,
              188
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "V",
                "optional": false,
                "range": [
                  187,
                  188
                ],
                "loc": {
                  "end": {
                    "column": 81,
                    "line": 4
                  },
                  "start": {
                    "column": 80,
                    "line": 4
                  }
                }
              },
              "range": [
                187,
                188
              ],
              "loc": {
                "end": {
                  "column": 81,
                  "line": 4
                },
                "start": {
                  "column": 80,
                  "line": 4
                }
              }
            }
          },
          "range": [
            184,
            188
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 4
            },
            "start": {
              "column": 77,
              "line": 4
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 64,
            "line": 4
          },
          "start": {
            "column": 10,
            "line": 4
          }
        },
        "range": [
          117,
          171
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  131,
                  134
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        132,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 4
                        },
                        "start": {
                          "column": 25,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      132,
                      133
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 4
                      },
                      "start": {
                        "column": 25,
                        "line": 4
                      }
                    }
                  }
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
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  128,
                  131
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 4
                  },
                  "start": {
                    "column": 21,
                    "line": 4
                  }
                }
              },
              "range": [
                128,
                134
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 4
                },
                "start": {
                  "column": 21,
                  "line": 4
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
                118,
                119
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              118,
              134
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 4
              },
              "start": {
                "column": 11,
                "line": 4
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  149,
                  152
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        150,
                        151
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 4
                        },
                        "start": {
                          "column": 43,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      150,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 4
                      },
                      "start": {
                        "column": 43,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 4
                  },
                  "start": {
                    "column": 42,
                    "line": 4
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  146,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 4
                  },
                  "start": {
                    "column": 39,
                    "line": 4
                  }
                }
              },
              "range": [
                146,
                152
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 4
                },
                "start": {
                  "column": 39,
                  "line": 4
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                136,
                137
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 4
                },
                "start": {
                  "column": 29,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              136,
              152
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 4
              },
              "start": {
                "column": 29,
                "line": 4
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  167,
                  170
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "range": [
                        168,
                        169
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 4
                        },
                        "start": {
                          "column": 61,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      168,
                      169
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 4
                      },
                      "start": {
                        "column": 61,
                        "line": 4
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 4
                  },
                  "start": {
                    "column": 60,
                    "line": 4
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "range": [
                  164,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 4
                  },
                  "start": {
                    "column": 57,
                    "line": 4
                  }
                }
              },
              "range": [
                164,
                170
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 4
                },
                "start": {
                  "column": 57,
                  "line": 4
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "range": [
                154,
                155
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 4
                },
                "start": {
                  "column": 47,
                  "line": 4
                }
              }
            },
            "out": false,
            "range": [
              154,
              170
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 4
              },
              "start": {
                "column": 47,
                "line": 4
              }
            }
          }
        ]
      },
      "range": [
        107,
        1178
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1210,
                1233
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      1220,
                      1223
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 58
                      },
                      "start": {
                        "column": 11,
                        "line": 58
                      }
                    },
                    "range": [
                      1223,
                      1226
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1225,
                          1226
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 58
                          },
                          "start": {
                            "column": 13,
                            "line": 58
                          }
                        }
                      },
                      "range": [
                        1225,
                        1226
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 58
                        },
                        "start": {
                          "column": 13,
                          "line": 58
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    1220,
                    1227
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 59
                },
                "start": {
                  "column": 18,
                  "line": 57
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "range": [
                1202,
                1206
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 57
                },
                "start": {
                  "column": 10,
                  "line": 57
                }
              }
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 57
                },
                "start": {
                  "column": 14,
                  "line": 57
                }
              },
              "range": [
                1206,
                1209
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
                      1207,
                      1208
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 57
                      },
                      "start": {
                        "column": 15,
                        "line": 57
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1207,
                    1208
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 57
                    },
                    "start": {
                      "column": 15,
                      "line": 57
                    }
                  }
                }
              ]
            },
            "range": [
              1196,
              1233
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1318,
                1364
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 62
                          },
                          "start": {
                            "column": 10,
                            "line": 62
                          }
                        },
                        "range": [
                          1330,
                          1338
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1332,
                            1338
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 62
                            },
                            "start": {
                              "column": 12,
                              "line": 62
                            }
                          }
                        }
                      },
                      "range": [
                        1329,
                        1338
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 62
                        },
                        "start": {
                          "column": 9,
                          "line": 62
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 62
                      },
                      "start": {
                        "column": 19,
                        "line": 62
                      }
                    },
                    "range": [
                      1339,
                      1342
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1341,
                          1342
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 62
                          },
                          "start": {
                            "column": 21,
                            "line": 62
                          }
                        }
                      },
                      "range": [
                        1341,
                        1342
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 62
                        },
                        "start": {
                          "column": 21,
                          "line": 62
                        }
                      }
                    }
                  },
                  "range": [
                    1328,
                    1343
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 62
                    },
                    "start": {
                      "column": 8,
                      "line": 62
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      1352,
                      1355
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 63
                      },
                      "start": {
                        "column": 8,
                        "line": 63
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 63
                      },
                      "start": {
                        "column": 11,
                        "line": 63
                      }
                    },
                    "range": [
                      1355,
                      1358
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1357,
                          1358
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 63
                          },
                          "start": {
                            "column": 13,
                            "line": 63
                          }
                        }
                      },
                      "range": [
                        1357,
                        1358
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 63
                        },
                        "start": {
                          "column": 13,
                          "line": 63
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    1352,
                    1358
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 63
                    },
                    "start": {
                      "column": 8,
                      "line": 63
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 64
                },
                "start": {
                  "column": 83,
                  "line": 61
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D1",
              "optional": false,
              "range": [
                1245,
                1247
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 61
                },
                "start": {
                  "column": 10,
                  "line": 61
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "range": [
                1310,
                1314
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 61
                },
                "start": {
                  "column": 75,
                  "line": 61
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1314,
                1317
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1315,
                      1316
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 61
                      },
                      "start": {
                        "column": 80,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    1315,
                    1316
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 61
                    },
                    "start": {
                      "column": 80,
                      "line": 61
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 61
                },
                "start": {
                  "column": 79,
                  "line": 61
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 61
                },
                "start": {
                  "column": 12,
                  "line": 61
                }
              },
              "range": [
                1247,
                1301
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1261,
                        1264
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              1262,
                              1263
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 61
                              },
                              "start": {
                                "column": 27,
                                "line": 61
                              }
                            }
                          },
                          "range": [
                            1262,
                            1263
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 61
                            },
                            "start": {
                              "column": 27,
                              "line": 61
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 61
                        },
                        "start": {
                          "column": 26,
                          "line": 61
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1258,
                        1261
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 61
                        },
                        "start": {
                          "column": 23,
                          "line": 61
                        }
                      }
                    },
                    "range": [
                      1258,
                      1264
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 61
                      },
                      "start": {
                        "column": 23,
                        "line": 61
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
                      1248,
                      1249
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 61
                      },
                      "start": {
                        "column": 13,
                        "line": 61
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1248,
                    1264
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 61
                    },
                    "start": {
                      "column": 13,
                      "line": 61
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1279,
                        1282
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              1280,
                              1281
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 61
                              },
                              "start": {
                                "column": 45,
                                "line": 61
                              }
                            }
                          },
                          "range": [
                            1280,
                            1281
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 61
                            },
                            "start": {
                              "column": 45,
                              "line": 61
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 61
                        },
                        "start": {
                          "column": 44,
                          "line": 61
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1276,
                        1279
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 61
                        },
                        "start": {
                          "column": 41,
                          "line": 61
                        }
                      }
                    },
                    "range": [
                      1276,
                      1282
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 61
                      },
                      "start": {
                        "column": 41,
                        "line": 61
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      1266,
                      1267
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 61
                      },
                      "start": {
                        "column": 31,
                        "line": 61
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1266,
                    1282
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 61
                    },
                    "start": {
                      "column": 31,
                      "line": 61
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1297,
                        1300
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              1298,
                              1299
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 61
                              },
                              "start": {
                                "column": 63,
                                "line": 61
                              }
                            }
                          },
                          "range": [
                            1298,
                            1299
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 61
                            },
                            "start": {
                              "column": 63,
                              "line": 61
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 61
                        },
                        "start": {
                          "column": 62,
                          "line": 61
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1294,
                        1297
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 61
                        },
                        "start": {
                          "column": 59,
                          "line": 61
                        }
                      }
                    },
                    "range": [
                      1294,
                      1300
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 61
                      },
                      "start": {
                        "column": 59,
                        "line": 61
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      1284,
                      1285
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 61
                      },
                      "start": {
                        "column": 49,
                        "line": 61
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1284,
                    1300
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 61
                    },
                    "start": {
                      "column": 49,
                      "line": 61
                    }
                  }
                }
              ]
            },
            "range": [
              1239,
              1364
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 61
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1449,
                1495
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 67
                          },
                          "start": {
                            "column": 10,
                            "line": 67
                          }
                        },
                        "range": [
                          1461,
                          1469
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1463,
                            1469
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 67
                            },
                            "start": {
                              "column": 12,
                              "line": 67
                            }
                          }
                        }
                      },
                      "range": [
                        1460,
                        1469
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 67
                        },
                        "start": {
                          "column": 9,
                          "line": 67
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 67
                      },
                      "start": {
                        "column": 19,
                        "line": 67
                      }
                    },
                    "range": [
                      1470,
                      1473
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1472,
                          1473
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 67
                          },
                          "start": {
                            "column": 21,
                            "line": 67
                          }
                        }
                      },
                      "range": [
                        1472,
                        1473
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 67
                        },
                        "start": {
                          "column": 21,
                          "line": 67
                        }
                      }
                    }
                  },
                  "range": [
                    1459,
                    1474
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 67
                    },
                    "start": {
                      "column": 8,
                      "line": 67
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      1483,
                      1486
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 68
                      },
                      "start": {
                        "column": 8,
                        "line": 68
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 68
                      },
                      "start": {
                        "column": 11,
                        "line": 68
                      }
                    },
                    "range": [
                      1486,
                      1489
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          1488,
                          1489
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 68
                          },
                          "start": {
                            "column": 13,
                            "line": 68
                          }
                        }
                      },
                      "range": [
                        1488,
                        1489
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 68
                        },
                        "start": {
                          "column": 13,
                          "line": 68
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    1483,
                    1489
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 68
                    },
                    "start": {
                      "column": 8,
                      "line": 68
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 69
                },
                "start": {
                  "column": 83,
                  "line": 66
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D2",
              "optional": false,
              "range": [
                1376,
                1378
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 66
                },
                "start": {
                  "column": 10,
                  "line": 66
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "range": [
                1441,
                1445
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 66
                },
                "start": {
                  "column": 75,
                  "line": 66
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1445,
                1448
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1446,
                      1447
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 66
                      },
                      "start": {
                        "column": 80,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    1446,
                    1447
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 66
                    },
                    "start": {
                      "column": 80,
                      "line": 66
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 66
                },
                "start": {
                  "column": 79,
                  "line": 66
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 66
                },
                "start": {
                  "column": 12,
                  "line": 66
                }
              },
              "range": [
                1378,
                1432
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1392,
                        1395
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              1393,
                              1394
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 66
                              },
                              "start": {
                                "column": 27,
                                "line": 66
                              }
                            }
                          },
                          "range": [
                            1393,
                            1394
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 66
                            },
                            "start": {
                              "column": 27,
                              "line": 66
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 66
                        },
                        "start": {
                          "column": 26,
                          "line": 66
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1389,
                        1392
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 66
                        },
                        "start": {
                          "column": 23,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1389,
                      1395
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 66
                      },
                      "start": {
                        "column": 23,
                        "line": 66
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
                      1379,
                      1380
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 66
                      },
                      "start": {
                        "column": 13,
                        "line": 66
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1379,
                    1395
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 66
                    },
                    "start": {
                      "column": 13,
                      "line": 66
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1410,
                        1413
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              1411,
                              1412
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 66
                              },
                              "start": {
                                "column": 45,
                                "line": 66
                              }
                            }
                          },
                          "range": [
                            1411,
                            1412
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 66
                            },
                            "start": {
                              "column": 45,
                              "line": 66
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 66
                        },
                        "start": {
                          "column": 44,
                          "line": 66
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1407,
                        1410
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 66
                        },
                        "start": {
                          "column": 41,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1407,
                      1413
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 66
                      },
                      "start": {
                        "column": 41,
                        "line": 66
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      1397,
                      1398
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 66
                      },
                      "start": {
                        "column": 31,
                        "line": 66
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1397,
                    1413
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 66
                    },
                    "start": {
                      "column": 31,
                      "line": 66
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1428,
                        1431
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              1429,
                              1430
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 66
                              },
                              "start": {
                                "column": 63,
                                "line": 66
                              }
                            }
                          },
                          "range": [
                            1429,
                            1430
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 66
                            },
                            "start": {
                              "column": 63,
                              "line": 66
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 66
                        },
                        "start": {
                          "column": 62,
                          "line": 66
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1425,
                        1428
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 66
                        },
                        "start": {
                          "column": 59,
                          "line": 66
                        }
                      }
                    },
                    "range": [
                      1425,
                      1431
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 66
                      },
                      "start": {
                        "column": 59,
                        "line": 66
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      1415,
                      1416
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 66
                      },
                      "start": {
                        "column": 49,
                        "line": 66
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1415,
                    1431
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 66
                    },
                    "start": {
                      "column": 49,
                      "line": 66
                    }
                  }
                }
              ]
            },
            "range": [
              1370,
              1495
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1580,
                1626
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 72
                          },
                          "start": {
                            "column": 10,
                            "line": 72
                          }
                        },
                        "range": [
                          1592,
                          1600
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1594,
                            1600
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 72
                            },
                            "start": {
                              "column": 12,
                              "line": 72
                            }
                          }
                        }
                      },
                      "range": [
                        1591,
                        1600
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 72
                        },
                        "start": {
                          "column": 9,
                          "line": 72
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 72
                      },
                      "start": {
                        "column": 19,
                        "line": 72
                      }
                    },
                    "range": [
                      1601,
                      1604
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1603,
                          1604
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 72
                          },
                          "start": {
                            "column": 21,
                            "line": 72
                          }
                        }
                      },
                      "range": [
                        1603,
                        1604
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 72
                        },
                        "start": {
                          "column": 21,
                          "line": 72
                        }
                      }
                    }
                  },
                  "range": [
                    1590,
                    1605
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 72
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      1614,
                      1617
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 73
                      },
                      "start": {
                        "column": 8,
                        "line": 73
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 73
                      },
                      "start": {
                        "column": 11,
                        "line": 73
                      }
                    },
                    "range": [
                      1617,
                      1620
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          1619,
                          1620
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 73
                          },
                          "start": {
                            "column": 13,
                            "line": 73
                          }
                        }
                      },
                      "range": [
                        1619,
                        1620
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 73
                        },
                        "start": {
                          "column": 13,
                          "line": 73
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    1614,
                    1620
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 73
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 74
                },
                "start": {
                  "column": 83,
                  "line": 71
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D3",
              "optional": false,
              "range": [
                1507,
                1509
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 71
                },
                "start": {
                  "column": 10,
                  "line": 71
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "range": [
                1572,
                1576
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 71
                },
                "start": {
                  "column": 75,
                  "line": 71
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1576,
                1579
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      1577,
                      1578
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 71
                      },
                      "start": {
                        "column": 80,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    1577,
                    1578
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 71
                    },
                    "start": {
                      "column": 80,
                      "line": 71
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 71
                },
                "start": {
                  "column": 79,
                  "line": 71
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 71
                },
                "start": {
                  "column": 12,
                  "line": 71
                }
              },
              "range": [
                1509,
                1563
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1523,
                        1526
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              1524,
                              1525
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 71
                              },
                              "start": {
                                "column": 27,
                                "line": 71
                              }
                            }
                          },
                          "range": [
                            1524,
                            1525
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 71
                            },
                            "start": {
                              "column": 27,
                              "line": 71
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 71
                        },
                        "start": {
                          "column": 26,
                          "line": 71
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1520,
                        1523
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 71
                        },
                        "start": {
                          "column": 23,
                          "line": 71
                        }
                      }
                    },
                    "range": [
                      1520,
                      1526
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 71
                      },
                      "start": {
                        "column": 23,
                        "line": 71
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
                      1510,
                      1511
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 71
                      },
                      "start": {
                        "column": 13,
                        "line": 71
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1510,
                    1526
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 71
                    },
                    "start": {
                      "column": 13,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1541,
                        1544
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              1542,
                              1543
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 71
                              },
                              "start": {
                                "column": 45,
                                "line": 71
                              }
                            }
                          },
                          "range": [
                            1542,
                            1543
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 71
                            },
                            "start": {
                              "column": 45,
                              "line": 71
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 71
                        },
                        "start": {
                          "column": 44,
                          "line": 71
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1538,
                        1541
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 71
                        },
                        "start": {
                          "column": 41,
                          "line": 71
                        }
                      }
                    },
                    "range": [
                      1538,
                      1544
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 71
                      },
                      "start": {
                        "column": 41,
                        "line": 71
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      1528,
                      1529
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 71
                      },
                      "start": {
                        "column": 31,
                        "line": 71
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1528,
                    1544
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 71
                    },
                    "start": {
                      "column": 31,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1559,
                        1562
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              1560,
                              1561
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 71
                              },
                              "start": {
                                "column": 63,
                                "line": 71
                              }
                            }
                          },
                          "range": [
                            1560,
                            1561
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 71
                            },
                            "start": {
                              "column": 63,
                              "line": 71
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 71
                        },
                        "start": {
                          "column": 62,
                          "line": 71
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1556,
                        1559
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 71
                        },
                        "start": {
                          "column": 59,
                          "line": 71
                        }
                      }
                    },
                    "range": [
                      1556,
                      1562
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 71
                      },
                      "start": {
                        "column": 59,
                        "line": 71
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      1546,
                      1547
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 71
                      },
                      "start": {
                        "column": 49,
                        "line": 71
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1546,
                    1562
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 71
                    },
                    "start": {
                      "column": 49,
                      "line": 71
                    }
                  }
                }
              ]
            },
            "range": [
              1501,
              1626
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 71
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1711,
                1757
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 77
                          },
                          "start": {
                            "column": 10,
                            "line": 77
                          }
                        },
                        "range": [
                          1723,
                          1731
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1725,
                            1731
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 77
                            },
                            "start": {
                              "column": 12,
                              "line": 77
                            }
                          }
                        }
                      },
                      "range": [
                        1722,
                        1731
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 77
                        },
                        "start": {
                          "column": 9,
                          "line": 77
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 77
                      },
                      "start": {
                        "column": 19,
                        "line": 77
                      }
                    },
                    "range": [
                      1732,
                      1735
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          1734,
                          1735
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 77
                          },
                          "start": {
                            "column": 21,
                            "line": 77
                          }
                        }
                      },
                      "range": [
                        1734,
                        1735
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 77
                        },
                        "start": {
                          "column": 21,
                          "line": 77
                        }
                      }
                    }
                  },
                  "range": [
                    1721,
                    1736
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 77
                    },
                    "start": {
                      "column": 8,
                      "line": 77
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      1745,
                      1748
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 78
                      },
                      "start": {
                        "column": 8,
                        "line": 78
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 78
                      },
                      "start": {
                        "column": 11,
                        "line": 78
                      }
                    },
                    "range": [
                      1748,
                      1751
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          1750,
                          1751
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 78
                          },
                          "start": {
                            "column": 13,
                            "line": 78
                          }
                        }
                      },
                      "range": [
                        1750,
                        1751
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 78
                        },
                        "start": {
                          "column": 13,
                          "line": 78
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    1745,
                    1751
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 78
                    },
                    "start": {
                      "column": 8,
                      "line": 78
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 79
                },
                "start": {
                  "column": 83,
                  "line": 76
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D4",
              "optional": false,
              "range": [
                1638,
                1640
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 76
                },
                "start": {
                  "column": 10,
                  "line": 76
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "range": [
                1703,
                1707
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 76
                },
                "start": {
                  "column": 75,
                  "line": 76
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1707,
                1710
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      1708,
                      1709
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 76
                      },
                      "start": {
                        "column": 80,
                        "line": 76
                      }
                    }
                  },
                  "range": [
                    1708,
                    1709
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 76
                    },
                    "start": {
                      "column": 80,
                      "line": 76
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 76
                },
                "start": {
                  "column": 79,
                  "line": 76
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 76
                },
                "start": {
                  "column": 12,
                  "line": 76
                }
              },
              "range": [
                1640,
                1694
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1654,
                        1657
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              1655,
                              1656
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 76
                              },
                              "start": {
                                "column": 27,
                                "line": 76
                              }
                            }
                          },
                          "range": [
                            1655,
                            1656
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 76
                            },
                            "start": {
                              "column": 27,
                              "line": 76
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 76
                        },
                        "start": {
                          "column": 26,
                          "line": 76
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1651,
                        1654
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 76
                        },
                        "start": {
                          "column": 23,
                          "line": 76
                        }
                      }
                    },
                    "range": [
                      1651,
                      1657
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 76
                      },
                      "start": {
                        "column": 23,
                        "line": 76
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
                      1641,
                      1642
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 76
                      },
                      "start": {
                        "column": 13,
                        "line": 76
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1641,
                    1657
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 76
                    },
                    "start": {
                      "column": 13,
                      "line": 76
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1672,
                        1675
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              1673,
                              1674
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 76
                              },
                              "start": {
                                "column": 45,
                                "line": 76
                              }
                            }
                          },
                          "range": [
                            1673,
                            1674
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 76
                            },
                            "start": {
                              "column": 45,
                              "line": 76
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 76
                        },
                        "start": {
                          "column": 44,
                          "line": 76
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1669,
                        1672
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 76
                        },
                        "start": {
                          "column": 41,
                          "line": 76
                        }
                      }
                    },
                    "range": [
                      1669,
                      1675
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 76
                      },
                      "start": {
                        "column": 41,
                        "line": 76
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      1659,
                      1660
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 76
                      },
                      "start": {
                        "column": 31,
                        "line": 76
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1659,
                    1675
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 76
                    },
                    "start": {
                      "column": 31,
                      "line": 76
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1690,
                        1693
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              1691,
                              1692
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 76
                              },
                              "start": {
                                "column": 63,
                                "line": 76
                              }
                            }
                          },
                          "range": [
                            1691,
                            1692
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 76
                            },
                            "start": {
                              "column": 63,
                              "line": 76
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 76
                        },
                        "start": {
                          "column": 62,
                          "line": 76
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1687,
                        1690
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 76
                        },
                        "start": {
                          "column": 59,
                          "line": 76
                        }
                      }
                    },
                    "range": [
                      1687,
                      1693
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 76
                      },
                      "start": {
                        "column": 59,
                        "line": 76
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      1677,
                      1678
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 76
                      },
                      "start": {
                        "column": 49,
                        "line": 76
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1677,
                    1693
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 76
                    },
                    "start": {
                      "column": 49,
                      "line": 76
                    }
                  }
                }
              ]
            },
            "range": [
              1632,
              1757
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1842,
                1888
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 82
                          },
                          "start": {
                            "column": 10,
                            "line": 82
                          }
                        },
                        "range": [
                          1854,
                          1862
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1856,
                            1862
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 82
                            },
                            "start": {
                              "column": 12,
                              "line": 82
                            }
                          }
                        }
                      },
                      "range": [
                        1853,
                        1862
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 82
                        },
                        "start": {
                          "column": 9,
                          "line": 82
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 82
                      },
                      "start": {
                        "column": 19,
                        "line": 82
                      }
                    },
                    "range": [
                      1863,
                      1866
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          1865,
                          1866
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 82
                          },
                          "start": {
                            "column": 21,
                            "line": 82
                          }
                        }
                      },
                      "range": [
                        1865,
                        1866
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 82
                        },
                        "start": {
                          "column": 21,
                          "line": 82
                        }
                      }
                    }
                  },
                  "range": [
                    1852,
                    1867
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 82
                    },
                    "start": {
                      "column": 8,
                      "line": 82
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      1876,
                      1879
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 83
                      },
                      "start": {
                        "column": 8,
                        "line": 83
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 83
                      },
                      "start": {
                        "column": 11,
                        "line": 83
                      }
                    },
                    "range": [
                      1879,
                      1882
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          1881,
                          1882
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 83
                          },
                          "start": {
                            "column": 13,
                            "line": 83
                          }
                        }
                      },
                      "range": [
                        1881,
                        1882
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 83
                        },
                        "start": {
                          "column": 13,
                          "line": 83
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    1876,
                    1882
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 83
                    },
                    "start": {
                      "column": 8,
                      "line": 83
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 84
                },
                "start": {
                  "column": 83,
                  "line": 81
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D5",
              "optional": false,
              "range": [
                1769,
                1771
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 81
                },
                "start": {
                  "column": 10,
                  "line": 81
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "range": [
                1834,
                1838
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 81
                },
                "start": {
                  "column": 75,
                  "line": 81
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1838,
                1841
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      1839,
                      1840
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 81
                      },
                      "start": {
                        "column": 80,
                        "line": 81
                      }
                    }
                  },
                  "range": [
                    1839,
                    1840
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 81
                    },
                    "start": {
                      "column": 80,
                      "line": 81
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 81
                },
                "start": {
                  "column": 79,
                  "line": 81
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 81
                },
                "start": {
                  "column": 12,
                  "line": 81
                }
              },
              "range": [
                1771,
                1825
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1785,
                        1788
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              1786,
                              1787
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 81
                              },
                              "start": {
                                "column": 27,
                                "line": 81
                              }
                            }
                          },
                          "range": [
                            1786,
                            1787
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 81
                            },
                            "start": {
                              "column": 27,
                              "line": 81
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 81
                        },
                        "start": {
                          "column": 26,
                          "line": 81
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1782,
                        1785
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 81
                        },
                        "start": {
                          "column": 23,
                          "line": 81
                        }
                      }
                    },
                    "range": [
                      1782,
                      1788
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 81
                      },
                      "start": {
                        "column": 23,
                        "line": 81
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
                      1772,
                      1773
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 81
                      },
                      "start": {
                        "column": 13,
                        "line": 81
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1772,
                    1788
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 81
                    },
                    "start": {
                      "column": 13,
                      "line": 81
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1803,
                        1806
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              1804,
                              1805
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 81
                              },
                              "start": {
                                "column": 45,
                                "line": 81
                              }
                            }
                          },
                          "range": [
                            1804,
                            1805
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 81
                            },
                            "start": {
                              "column": 45,
                              "line": 81
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 81
                        },
                        "start": {
                          "column": 44,
                          "line": 81
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1800,
                        1803
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 81
                        },
                        "start": {
                          "column": 41,
                          "line": 81
                        }
                      }
                    },
                    "range": [
                      1800,
                      1806
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 81
                      },
                      "start": {
                        "column": 41,
                        "line": 81
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      1790,
                      1791
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 81
                      },
                      "start": {
                        "column": 31,
                        "line": 81
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1790,
                    1806
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 81
                    },
                    "start": {
                      "column": 31,
                      "line": 81
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1821,
                        1824
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              1822,
                              1823
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 81
                              },
                              "start": {
                                "column": 63,
                                "line": 81
                              }
                            }
                          },
                          "range": [
                            1822,
                            1823
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 81
                            },
                            "start": {
                              "column": 63,
                              "line": 81
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 81
                        },
                        "start": {
                          "column": 62,
                          "line": 81
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1818,
                        1821
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 81
                        },
                        "start": {
                          "column": 59,
                          "line": 81
                        }
                      }
                    },
                    "range": [
                      1818,
                      1824
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 81
                      },
                      "start": {
                        "column": 59,
                        "line": 81
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      1808,
                      1809
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 81
                      },
                      "start": {
                        "column": 49,
                        "line": 81
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1808,
                    1824
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 81
                    },
                    "start": {
                      "column": 49,
                      "line": 81
                    }
                  }
                }
              ]
            },
            "range": [
              1763,
              1888
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 81
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                1973,
                2019
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 87
                          },
                          "start": {
                            "column": 10,
                            "line": 87
                          }
                        },
                        "range": [
                          1985,
                          1993
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1987,
                            1993
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 87
                            },
                            "start": {
                              "column": 12,
                              "line": 87
                            }
                          }
                        }
                      },
                      "range": [
                        1984,
                        1993
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 87
                        },
                        "start": {
                          "column": 9,
                          "line": 87
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 87
                      },
                      "start": {
                        "column": 19,
                        "line": 87
                      }
                    },
                    "range": [
                      1994,
                      1997
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          1996,
                          1997
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 87
                          },
                          "start": {
                            "column": 21,
                            "line": 87
                          }
                        }
                      },
                      "range": [
                        1996,
                        1997
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 87
                        },
                        "start": {
                          "column": 21,
                          "line": 87
                        }
                      }
                    }
                  },
                  "range": [
                    1983,
                    1998
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 87
                    },
                    "start": {
                      "column": 8,
                      "line": 87
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      2007,
                      2010
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 88
                      },
                      "start": {
                        "column": 8,
                        "line": 88
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 88
                      },
                      "start": {
                        "column": 11,
                        "line": 88
                      }
                    },
                    "range": [
                      2010,
                      2013
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          2012,
                          2013
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 88
                          },
                          "start": {
                            "column": 13,
                            "line": 88
                          }
                        }
                      },
                      "range": [
                        2012,
                        2013
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 88
                        },
                        "start": {
                          "column": 13,
                          "line": 88
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    2007,
                    2013
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 88
                    },
                    "start": {
                      "column": 8,
                      "line": 88
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 89
                },
                "start": {
                  "column": 83,
                  "line": 86
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D6",
              "optional": false,
              "range": [
                1900,
                1902
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 86
                },
                "start": {
                  "column": 10,
                  "line": 86
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "range": [
                1965,
                1969
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 86
                },
                "start": {
                  "column": 75,
                  "line": 86
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1969,
                1972
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      1970,
                      1971
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 86
                      },
                      "start": {
                        "column": 80,
                        "line": 86
                      }
                    }
                  },
                  "range": [
                    1970,
                    1971
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 86
                    },
                    "start": {
                      "column": 80,
                      "line": 86
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 86
                },
                "start": {
                  "column": 79,
                  "line": 86
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 86
                },
                "start": {
                  "column": 12,
                  "line": 86
                }
              },
              "range": [
                1902,
                1956
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1916,
                        1919
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              1917,
                              1918
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 86
                              },
                              "start": {
                                "column": 27,
                                "line": 86
                              }
                            }
                          },
                          "range": [
                            1917,
                            1918
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 86
                            },
                            "start": {
                              "column": 27,
                              "line": 86
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 86
                        },
                        "start": {
                          "column": 26,
                          "line": 86
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1913,
                        1916
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 86
                        },
                        "start": {
                          "column": 23,
                          "line": 86
                        }
                      }
                    },
                    "range": [
                      1913,
                      1919
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 86
                      },
                      "start": {
                        "column": 23,
                        "line": 86
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
                      1903,
                      1904
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 86
                      },
                      "start": {
                        "column": 13,
                        "line": 86
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1903,
                    1919
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 86
                    },
                    "start": {
                      "column": 13,
                      "line": 86
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1934,
                        1937
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              1935,
                              1936
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 86
                              },
                              "start": {
                                "column": 45,
                                "line": 86
                              }
                            }
                          },
                          "range": [
                            1935,
                            1936
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 86
                            },
                            "start": {
                              "column": 45,
                              "line": 86
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 86
                        },
                        "start": {
                          "column": 44,
                          "line": 86
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1931,
                        1934
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 86
                        },
                        "start": {
                          "column": 41,
                          "line": 86
                        }
                      }
                    },
                    "range": [
                      1931,
                      1937
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 86
                      },
                      "start": {
                        "column": 41,
                        "line": 86
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      1921,
                      1922
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 86
                      },
                      "start": {
                        "column": 31,
                        "line": 86
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1921,
                    1937
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 86
                    },
                    "start": {
                      "column": 31,
                      "line": 86
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        1952,
                        1955
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              1953,
                              1954
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 86
                              },
                              "start": {
                                "column": 63,
                                "line": 86
                              }
                            }
                          },
                          "range": [
                            1953,
                            1954
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 86
                            },
                            "start": {
                              "column": 63,
                              "line": 86
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 86
                        },
                        "start": {
                          "column": 62,
                          "line": 86
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        1949,
                        1952
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 86
                        },
                        "start": {
                          "column": 59,
                          "line": 86
                        }
                      }
                    },
                    "range": [
                      1949,
                      1955
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 86
                      },
                      "start": {
                        "column": 59,
                        "line": 86
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      1939,
                      1940
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 86
                      },
                      "start": {
                        "column": 49,
                        "line": 86
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1939,
                    1955
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 86
                    },
                    "start": {
                      "column": 49,
                      "line": 86
                    }
                  }
                }
              ]
            },
            "range": [
              1894,
              2019
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 89
              },
              "start": {
                "column": 4,
                "line": 86
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                2104,
                2150
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 92
                          },
                          "start": {
                            "column": 10,
                            "line": 92
                          }
                        },
                        "range": [
                          2116,
                          2124
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            2118,
                            2124
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 92
                            },
                            "start": {
                              "column": 12,
                              "line": 92
                            }
                          }
                        }
                      },
                      "range": [
                        2115,
                        2124
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 92
                        },
                        "start": {
                          "column": 9,
                          "line": 92
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 92
                      },
                      "start": {
                        "column": 19,
                        "line": 92
                      }
                    },
                    "range": [
                      2125,
                      2128
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          2127,
                          2128
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 92
                          },
                          "start": {
                            "column": 21,
                            "line": 92
                          }
                        }
                      },
                      "range": [
                        2127,
                        2128
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 92
                        },
                        "start": {
                          "column": 21,
                          "line": 92
                        }
                      }
                    }
                  },
                  "range": [
                    2114,
                    2129
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 92
                    },
                    "start": {
                      "column": 8,
                      "line": 92
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      2138,
                      2141
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 93
                      },
                      "start": {
                        "column": 8,
                        "line": 93
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 93
                      },
                      "start": {
                        "column": 11,
                        "line": 93
                      }
                    },
                    "range": [
                      2141,
                      2144
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          2143,
                          2144
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 93
                          },
                          "start": {
                            "column": 13,
                            "line": 93
                          }
                        }
                      },
                      "range": [
                        2143,
                        2144
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 93
                        },
                        "start": {
                          "column": 13,
                          "line": 93
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    2138,
                    2144
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 93
                    },
                    "start": {
                      "column": 8,
                      "line": 93
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 94
                },
                "start": {
                  "column": 83,
                  "line": 91
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D7",
              "optional": false,
              "range": [
                2031,
                2033
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 91
                },
                "start": {
                  "column": 10,
                  "line": 91
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "range": [
                2096,
                2100
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 91
                },
                "start": {
                  "column": 75,
                  "line": 91
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                2100,
                2103
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      2101,
                      2102
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 91
                      },
                      "start": {
                        "column": 80,
                        "line": 91
                      }
                    }
                  },
                  "range": [
                    2101,
                    2102
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 91
                    },
                    "start": {
                      "column": 80,
                      "line": 91
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 91
                },
                "start": {
                  "column": 79,
                  "line": 91
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 91
                },
                "start": {
                  "column": 12,
                  "line": 91
                }
              },
              "range": [
                2033,
                2087
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2047,
                        2050
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              2048,
                              2049
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 91
                              },
                              "start": {
                                "column": 27,
                                "line": 91
                              }
                            }
                          },
                          "range": [
                            2048,
                            2049
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 91
                            },
                            "start": {
                              "column": 27,
                              "line": 91
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 91
                        },
                        "start": {
                          "column": 26,
                          "line": 91
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2044,
                        2047
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 91
                        },
                        "start": {
                          "column": 23,
                          "line": 91
                        }
                      }
                    },
                    "range": [
                      2044,
                      2050
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 91
                      },
                      "start": {
                        "column": 23,
                        "line": 91
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
                      2034,
                      2035
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 91
                      },
                      "start": {
                        "column": 13,
                        "line": 91
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2034,
                    2050
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 91
                    },
                    "start": {
                      "column": 13,
                      "line": 91
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2065,
                        2068
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              2066,
                              2067
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 91
                              },
                              "start": {
                                "column": 45,
                                "line": 91
                              }
                            }
                          },
                          "range": [
                            2066,
                            2067
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 91
                            },
                            "start": {
                              "column": 45,
                              "line": 91
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 91
                        },
                        "start": {
                          "column": 44,
                          "line": 91
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2062,
                        2065
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 91
                        },
                        "start": {
                          "column": 41,
                          "line": 91
                        }
                      }
                    },
                    "range": [
                      2062,
                      2068
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 91
                      },
                      "start": {
                        "column": 41,
                        "line": 91
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      2052,
                      2053
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 91
                      },
                      "start": {
                        "column": 31,
                        "line": 91
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2052,
                    2068
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 91
                    },
                    "start": {
                      "column": 31,
                      "line": 91
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2083,
                        2086
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              2084,
                              2085
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 91
                              },
                              "start": {
                                "column": 63,
                                "line": 91
                              }
                            }
                          },
                          "range": [
                            2084,
                            2085
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 91
                            },
                            "start": {
                              "column": 63,
                              "line": 91
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 91
                        },
                        "start": {
                          "column": 62,
                          "line": 91
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2080,
                        2083
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 91
                        },
                        "start": {
                          "column": 59,
                          "line": 91
                        }
                      }
                    },
                    "range": [
                      2080,
                      2086
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 91
                      },
                      "start": {
                        "column": 59,
                        "line": 91
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      2070,
                      2071
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 91
                      },
                      "start": {
                        "column": 49,
                        "line": 91
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2070,
                    2086
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 91
                    },
                    "start": {
                      "column": 49,
                      "line": 91
                    }
                  }
                }
              ]
            },
            "range": [
              2025,
              2150
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 94
              },
              "start": {
                "column": 4,
                "line": 91
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                2235,
                2281
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 97
                          },
                          "start": {
                            "column": 10,
                            "line": 97
                          }
                        },
                        "range": [
                          2247,
                          2255
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            2249,
                            2255
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 97
                            },
                            "start": {
                              "column": 12,
                              "line": 97
                            }
                          }
                        }
                      },
                      "range": [
                        2246,
                        2255
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 97
                        },
                        "start": {
                          "column": 9,
                          "line": 97
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 97
                      },
                      "start": {
                        "column": 19,
                        "line": 97
                      }
                    },
                    "range": [
                      2256,
                      2259
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          2258,
                          2259
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 97
                          },
                          "start": {
                            "column": 21,
                            "line": 97
                          }
                        }
                      },
                      "range": [
                        2258,
                        2259
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 97
                        },
                        "start": {
                          "column": 21,
                          "line": 97
                        }
                      }
                    }
                  },
                  "range": [
                    2245,
                    2260
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 97
                    },
                    "start": {
                      "column": 8,
                      "line": 97
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      2269,
                      2272
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 98
                      },
                      "start": {
                        "column": 8,
                        "line": 98
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 98
                      },
                      "start": {
                        "column": 11,
                        "line": 98
                      }
                    },
                    "range": [
                      2272,
                      2275
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          2274,
                          2275
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 98
                          },
                          "start": {
                            "column": 13,
                            "line": 98
                          }
                        }
                      },
                      "range": [
                        2274,
                        2275
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 98
                        },
                        "start": {
                          "column": 13,
                          "line": 98
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    2269,
                    2275
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 98
                    },
                    "start": {
                      "column": 8,
                      "line": 98
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 99
                },
                "start": {
                  "column": 83,
                  "line": 96
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D8",
              "optional": false,
              "range": [
                2162,
                2164
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 96
                },
                "start": {
                  "column": 10,
                  "line": 96
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "range": [
                2227,
                2231
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 96
                },
                "start": {
                  "column": 75,
                  "line": 96
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                2231,
                2234
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      2232,
                      2233
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 96
                      },
                      "start": {
                        "column": 80,
                        "line": 96
                      }
                    }
                  },
                  "range": [
                    2232,
                    2233
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 96
                    },
                    "start": {
                      "column": 80,
                      "line": 96
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 96
                },
                "start": {
                  "column": 79,
                  "line": 96
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 96
                },
                "start": {
                  "column": 12,
                  "line": 96
                }
              },
              "range": [
                2164,
                2218
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2178,
                        2181
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              2179,
                              2180
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 96
                              },
                              "start": {
                                "column": 27,
                                "line": 96
                              }
                            }
                          },
                          "range": [
                            2179,
                            2180
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 96
                            },
                            "start": {
                              "column": 27,
                              "line": 96
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 96
                        },
                        "start": {
                          "column": 26,
                          "line": 96
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2175,
                        2178
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 96
                        },
                        "start": {
                          "column": 23,
                          "line": 96
                        }
                      }
                    },
                    "range": [
                      2175,
                      2181
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 96
                      },
                      "start": {
                        "column": 23,
                        "line": 96
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
                      2165,
                      2166
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 96
                      },
                      "start": {
                        "column": 13,
                        "line": 96
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2165,
                    2181
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 96
                    },
                    "start": {
                      "column": 13,
                      "line": 96
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2196,
                        2199
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              2197,
                              2198
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 96
                              },
                              "start": {
                                "column": 45,
                                "line": 96
                              }
                            }
                          },
                          "range": [
                            2197,
                            2198
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 96
                            },
                            "start": {
                              "column": 45,
                              "line": 96
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 96
                        },
                        "start": {
                          "column": 44,
                          "line": 96
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2193,
                        2196
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 96
                        },
                        "start": {
                          "column": 41,
                          "line": 96
                        }
                      }
                    },
                    "range": [
                      2193,
                      2199
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 96
                      },
                      "start": {
                        "column": 41,
                        "line": 96
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      2183,
                      2184
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 96
                      },
                      "start": {
                        "column": 31,
                        "line": 96
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2183,
                    2199
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 96
                    },
                    "start": {
                      "column": 31,
                      "line": 96
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2214,
                        2217
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              2215,
                              2216
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 96
                              },
                              "start": {
                                "column": 63,
                                "line": 96
                              }
                            }
                          },
                          "range": [
                            2215,
                            2216
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 96
                            },
                            "start": {
                              "column": 63,
                              "line": 96
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 96
                        },
                        "start": {
                          "column": 62,
                          "line": 96
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2211,
                        2214
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 96
                        },
                        "start": {
                          "column": 59,
                          "line": 96
                        }
                      }
                    },
                    "range": [
                      2211,
                      2217
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 96
                      },
                      "start": {
                        "column": 59,
                        "line": 96
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      2201,
                      2202
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 96
                      },
                      "start": {
                        "column": 49,
                        "line": 96
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2201,
                    2217
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 96
                    },
                    "start": {
                      "column": 49,
                      "line": 96
                    }
                  }
                }
              ]
            },
            "range": [
              2156,
              2281
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 99
              },
              "start": {
                "column": 4,
                "line": 96
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                2366,
                2412
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 102
                          },
                          "start": {
                            "column": 10,
                            "line": 102
                          }
                        },
                        "range": [
                          2378,
                          2386
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            2380,
                            2386
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 102
                            },
                            "start": {
                              "column": 12,
                              "line": 102
                            }
                          }
                        }
                      },
                      "range": [
                        2377,
                        2386
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 102
                        },
                        "start": {
                          "column": 9,
                          "line": 102
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 102
                      },
                      "start": {
                        "column": 19,
                        "line": 102
                      }
                    },
                    "range": [
                      2387,
                      2390
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          2389,
                          2390
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 102
                          },
                          "start": {
                            "column": 21,
                            "line": 102
                          }
                        }
                      },
                      "range": [
                        2389,
                        2390
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 102
                        },
                        "start": {
                          "column": 21,
                          "line": 102
                        }
                      }
                    }
                  },
                  "range": [
                    2376,
                    2391
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 102
                    },
                    "start": {
                      "column": 8,
                      "line": 102
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      2400,
                      2403
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 103
                      },
                      "start": {
                        "column": 8,
                        "line": 103
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 103
                      },
                      "start": {
                        "column": 11,
                        "line": 103
                      }
                    },
                    "range": [
                      2403,
                      2406
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          2405,
                          2406
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 103
                          },
                          "start": {
                            "column": 13,
                            "line": 103
                          }
                        }
                      },
                      "range": [
                        2405,
                        2406
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 103
                        },
                        "start": {
                          "column": 13,
                          "line": 103
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    2400,
                    2406
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 103
                    },
                    "start": {
                      "column": 8,
                      "line": 103
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 104
                },
                "start": {
                  "column": 83,
                  "line": 101
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D9",
              "optional": false,
              "range": [
                2293,
                2295
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 101
                },
                "start": {
                  "column": 10,
                  "line": 101
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "range": [
                2358,
                2362
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 101
                },
                "start": {
                  "column": 75,
                  "line": 101
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                2362,
                2365
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      2363,
                      2364
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 101
                      },
                      "start": {
                        "column": 80,
                        "line": 101
                      }
                    }
                  },
                  "range": [
                    2363,
                    2364
                  ],
                  "loc": {
                    "end": {
                      "column": 81,
                      "line": 101
                    },
                    "start": {
                      "column": 80,
                      "line": 101
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 101
                },
                "start": {
                  "column": 79,
                  "line": 101
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 101
                },
                "start": {
                  "column": 12,
                  "line": 101
                }
              },
              "range": [
                2295,
                2349
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2309,
                        2312
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              2310,
                              2311
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 101
                              },
                              "start": {
                                "column": 27,
                                "line": 101
                              }
                            }
                          },
                          "range": [
                            2310,
                            2311
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 101
                            },
                            "start": {
                              "column": 27,
                              "line": 101
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 101
                        },
                        "start": {
                          "column": 26,
                          "line": 101
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2306,
                        2309
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 101
                        },
                        "start": {
                          "column": 23,
                          "line": 101
                        }
                      }
                    },
                    "range": [
                      2306,
                      2312
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 101
                      },
                      "start": {
                        "column": 23,
                        "line": 101
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
                      2296,
                      2297
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 101
                      },
                      "start": {
                        "column": 13,
                        "line": 101
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2296,
                    2312
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 101
                    },
                    "start": {
                      "column": 13,
                      "line": 101
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2327,
                        2330
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              2328,
                              2329
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 101
                              },
                              "start": {
                                "column": 45,
                                "line": 101
                              }
                            }
                          },
                          "range": [
                            2328,
                            2329
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 101
                            },
                            "start": {
                              "column": 45,
                              "line": 101
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 101
                        },
                        "start": {
                          "column": 44,
                          "line": 101
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2324,
                        2327
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 101
                        },
                        "start": {
                          "column": 41,
                          "line": 101
                        }
                      }
                    },
                    "range": [
                      2324,
                      2330
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 101
                      },
                      "start": {
                        "column": 41,
                        "line": 101
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      2314,
                      2315
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 101
                      },
                      "start": {
                        "column": 31,
                        "line": 101
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2314,
                    2330
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 101
                    },
                    "start": {
                      "column": 31,
                      "line": 101
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2345,
                        2348
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              2346,
                              2347
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 101
                              },
                              "start": {
                                "column": 63,
                                "line": 101
                              }
                            }
                          },
                          "range": [
                            2346,
                            2347
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 101
                            },
                            "start": {
                              "column": 63,
                              "line": 101
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 101
                        },
                        "start": {
                          "column": 62,
                          "line": 101
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2342,
                        2345
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 101
                        },
                        "start": {
                          "column": 59,
                          "line": 101
                        }
                      }
                    },
                    "range": [
                      2342,
                      2348
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 101
                      },
                      "start": {
                        "column": 59,
                        "line": 101
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      2332,
                      2333
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 101
                      },
                      "start": {
                        "column": 49,
                        "line": 101
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2332,
                    2348
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 101
                    },
                    "start": {
                      "column": 49,
                      "line": 101
                    }
                  }
                }
              ]
            },
            "range": [
              2287,
              2412
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 101
              }
            }
          }
        ],
        "range": [
          1190,
          2414
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 105
          },
          "start": {
            "column": 10,
            "line": 56
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1187,
          1189
        ],
        "decorators": [],
        "name": "M1",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 56
          },
          "start": {
            "column": 7,
            "line": 56
          }
        }
      },
      "kind": "module",
      "range": [
        1180,
        2414
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 105
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                2448,
                2476
              ],
              "body": [
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      2458,
                      2461
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 110
                      },
                      "start": {
                        "column": 8,
                        "line": 110
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 110
                      },
                      "start": {
                        "column": 11,
                        "line": 110
                      }
                    },
                    "range": [
                      2461,
                      2469
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          2466,
                          2469
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "range": [
                                2467,
                                2468
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 110
                                },
                                "start": {
                                  "column": 17,
                                  "line": 110
                                }
                              }
                            },
                            "range": [
                              2467,
                              2468
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 110
                              },
                              "start": {
                                "column": 17,
                                "line": 110
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 110
                          },
                          "start": {
                            "column": 16,
                            "line": 110
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "range": [
                          2463,
                          2466
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 110
                          },
                          "start": {
                            "column": 13,
                            "line": 110
                          }
                        }
                      },
                      "range": [
                        2463,
                        2469
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 110
                        },
                        "start": {
                          "column": 13,
                          "line": 110
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    2458,
                    2470
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 110
                    },
                    "start": {
                      "column": 8,
                      "line": 110
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 111
                },
                "start": {
                  "column": 19,
                  "line": 109
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "range": [
                2439,
                2444
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 109
                },
                "start": {
                  "column": 10,
                  "line": 109
                }
              }
            },
            "implements": [],
            "superClass": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 109
                },
                "start": {
                  "column": 15,
                  "line": 109
                }
              },
              "range": [
                2444,
                2447
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
                      2445,
                      2446
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 109
                      },
                      "start": {
                        "column": 16,
                        "line": 109
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2445,
                    2446
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 109
                    },
                    "start": {
                      "column": 16,
                      "line": 109
                    }
                  }
                }
              ]
            },
            "range": [
              2433,
              2476
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 111
              },
              "start": {
                "column": 4,
                "line": 109
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                2562,
                2608
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 114
                          },
                          "start": {
                            "column": 10,
                            "line": 114
                          }
                        },
                        "range": [
                          2574,
                          2582
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            2576,
                            2582
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 114
                            },
                            "start": {
                              "column": 12,
                              "line": 114
                            }
                          }
                        }
                      },
                      "range": [
                        2573,
                        2582
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 114
                        },
                        "start": {
                          "column": 9,
                          "line": 114
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 114
                      },
                      "start": {
                        "column": 19,
                        "line": 114
                      }
                    },
                    "range": [
                      2583,
                      2586
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          2585,
                          2586
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 114
                          },
                          "start": {
                            "column": 21,
                            "line": 114
                          }
                        }
                      },
                      "range": [
                        2585,
                        2586
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 114
                        },
                        "start": {
                          "column": 21,
                          "line": 114
                        }
                      }
                    }
                  },
                  "range": [
                    2572,
                    2587
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 114
                    },
                    "start": {
                      "column": 8,
                      "line": 114
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      2596,
                      2599
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 115
                      },
                      "start": {
                        "column": 8,
                        "line": 115
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 115
                      },
                      "start": {
                        "column": 11,
                        "line": 115
                      }
                    },
                    "range": [
                      2599,
                      2602
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          2601,
                          2602
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 115
                          },
                          "start": {
                            "column": 13,
                            "line": 115
                          }
                        }
                      },
                      "range": [
                        2601,
                        2602
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 115
                        },
                        "start": {
                          "column": 13,
                          "line": 115
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    2596,
                    2602
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 115
                    },
                    "start": {
                      "column": 8,
                      "line": 115
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 116
                },
                "start": {
                  "column": 84,
                  "line": 113
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D1",
              "optional": false,
              "range": [
                2488,
                2490
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 113
                },
                "start": {
                  "column": 10,
                  "line": 113
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "range": [
                2553,
                2558
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 113
                },
                "start": {
                  "column": 75,
                  "line": 113
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                2558,
                2561
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      2559,
                      2560
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 113
                      },
                      "start": {
                        "column": 81,
                        "line": 113
                      }
                    }
                  },
                  "range": [
                    2559,
                    2560
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 113
                    },
                    "start": {
                      "column": 81,
                      "line": 113
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 113
                },
                "start": {
                  "column": 80,
                  "line": 113
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 113
                },
                "start": {
                  "column": 12,
                  "line": 113
                }
              },
              "range": [
                2490,
                2544
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2504,
                        2507
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              2505,
                              2506
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 113
                              },
                              "start": {
                                "column": 27,
                                "line": 113
                              }
                            }
                          },
                          "range": [
                            2505,
                            2506
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 113
                            },
                            "start": {
                              "column": 27,
                              "line": 113
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 113
                        },
                        "start": {
                          "column": 26,
                          "line": 113
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2501,
                        2504
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 113
                        },
                        "start": {
                          "column": 23,
                          "line": 113
                        }
                      }
                    },
                    "range": [
                      2501,
                      2507
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 113
                      },
                      "start": {
                        "column": 23,
                        "line": 113
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
                      2491,
                      2492
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 113
                      },
                      "start": {
                        "column": 13,
                        "line": 113
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2491,
                    2507
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 113
                    },
                    "start": {
                      "column": 13,
                      "line": 113
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2522,
                        2525
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              2523,
                              2524
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 113
                              },
                              "start": {
                                "column": 45,
                                "line": 113
                              }
                            }
                          },
                          "range": [
                            2523,
                            2524
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 113
                            },
                            "start": {
                              "column": 45,
                              "line": 113
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 113
                        },
                        "start": {
                          "column": 44,
                          "line": 113
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2519,
                        2522
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 113
                        },
                        "start": {
                          "column": 41,
                          "line": 113
                        }
                      }
                    },
                    "range": [
                      2519,
                      2525
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 113
                      },
                      "start": {
                        "column": 41,
                        "line": 113
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      2509,
                      2510
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 113
                      },
                      "start": {
                        "column": 31,
                        "line": 113
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2509,
                    2525
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 113
                    },
                    "start": {
                      "column": 31,
                      "line": 113
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2540,
                        2543
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              2541,
                              2542
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 113
                              },
                              "start": {
                                "column": 63,
                                "line": 113
                              }
                            }
                          },
                          "range": [
                            2541,
                            2542
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 113
                            },
                            "start": {
                              "column": 63,
                              "line": 113
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 113
                        },
                        "start": {
                          "column": 62,
                          "line": 113
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2537,
                        2540
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 113
                        },
                        "start": {
                          "column": 59,
                          "line": 113
                        }
                      }
                    },
                    "range": [
                      2537,
                      2543
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 113
                      },
                      "start": {
                        "column": 59,
                        "line": 113
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      2527,
                      2528
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 113
                      },
                      "start": {
                        "column": 49,
                        "line": 113
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2527,
                    2543
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 113
                    },
                    "start": {
                      "column": 49,
                      "line": 113
                    }
                  }
                }
              ]
            },
            "range": [
              2482,
              2608
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 116
              },
              "start": {
                "column": 4,
                "line": 113
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                2694,
                2740
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 119
                          },
                          "start": {
                            "column": 10,
                            "line": 119
                          }
                        },
                        "range": [
                          2706,
                          2714
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            2708,
                            2714
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 119
                            },
                            "start": {
                              "column": 12,
                              "line": 119
                            }
                          }
                        }
                      },
                      "range": [
                        2705,
                        2714
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 119
                        },
                        "start": {
                          "column": 9,
                          "line": 119
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 119
                      },
                      "start": {
                        "column": 19,
                        "line": 119
                      }
                    },
                    "range": [
                      2715,
                      2718
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          2717,
                          2718
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 119
                          },
                          "start": {
                            "column": 21,
                            "line": 119
                          }
                        }
                      },
                      "range": [
                        2717,
                        2718
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 119
                        },
                        "start": {
                          "column": 21,
                          "line": 119
                        }
                      }
                    }
                  },
                  "range": [
                    2704,
                    2719
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 119
                    },
                    "start": {
                      "column": 8,
                      "line": 119
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      2728,
                      2731
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 120
                      },
                      "start": {
                        "column": 8,
                        "line": 120
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 120
                      },
                      "start": {
                        "column": 11,
                        "line": 120
                      }
                    },
                    "range": [
                      2731,
                      2734
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          2733,
                          2734
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 120
                          },
                          "start": {
                            "column": 13,
                            "line": 120
                          }
                        }
                      },
                      "range": [
                        2733,
                        2734
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 120
                        },
                        "start": {
                          "column": 13,
                          "line": 120
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    2728,
                    2734
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 120
                    },
                    "start": {
                      "column": 8,
                      "line": 120
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 121
                },
                "start": {
                  "column": 84,
                  "line": 118
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D2",
              "optional": false,
              "range": [
                2620,
                2622
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 118
                },
                "start": {
                  "column": 10,
                  "line": 118
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "range": [
                2685,
                2690
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 118
                },
                "start": {
                  "column": 75,
                  "line": 118
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                2690,
                2693
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      2691,
                      2692
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 118
                      },
                      "start": {
                        "column": 81,
                        "line": 118
                      }
                    }
                  },
                  "range": [
                    2691,
                    2692
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 118
                    },
                    "start": {
                      "column": 81,
                      "line": 118
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 118
                },
                "start": {
                  "column": 80,
                  "line": 118
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 118
                },
                "start": {
                  "column": 12,
                  "line": 118
                }
              },
              "range": [
                2622,
                2676
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2636,
                        2639
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              2637,
                              2638
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 118
                              },
                              "start": {
                                "column": 27,
                                "line": 118
                              }
                            }
                          },
                          "range": [
                            2637,
                            2638
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 118
                            },
                            "start": {
                              "column": 27,
                              "line": 118
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 118
                        },
                        "start": {
                          "column": 26,
                          "line": 118
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2633,
                        2636
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 118
                        },
                        "start": {
                          "column": 23,
                          "line": 118
                        }
                      }
                    },
                    "range": [
                      2633,
                      2639
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 118
                      },
                      "start": {
                        "column": 23,
                        "line": 118
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
                      2623,
                      2624
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 118
                      },
                      "start": {
                        "column": 13,
                        "line": 118
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2623,
                    2639
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 118
                    },
                    "start": {
                      "column": 13,
                      "line": 118
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2654,
                        2657
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              2655,
                              2656
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 118
                              },
                              "start": {
                                "column": 45,
                                "line": 118
                              }
                            }
                          },
                          "range": [
                            2655,
                            2656
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 118
                            },
                            "start": {
                              "column": 45,
                              "line": 118
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 118
                        },
                        "start": {
                          "column": 44,
                          "line": 118
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2651,
                        2654
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 118
                        },
                        "start": {
                          "column": 41,
                          "line": 118
                        }
                      }
                    },
                    "range": [
                      2651,
                      2657
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 118
                      },
                      "start": {
                        "column": 41,
                        "line": 118
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      2641,
                      2642
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 118
                      },
                      "start": {
                        "column": 31,
                        "line": 118
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2641,
                    2657
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 118
                    },
                    "start": {
                      "column": 31,
                      "line": 118
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2672,
                        2675
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              2673,
                              2674
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 118
                              },
                              "start": {
                                "column": 63,
                                "line": 118
                              }
                            }
                          },
                          "range": [
                            2673,
                            2674
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 118
                            },
                            "start": {
                              "column": 63,
                              "line": 118
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 118
                        },
                        "start": {
                          "column": 62,
                          "line": 118
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2669,
                        2672
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 118
                        },
                        "start": {
                          "column": 59,
                          "line": 118
                        }
                      }
                    },
                    "range": [
                      2669,
                      2675
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 118
                      },
                      "start": {
                        "column": 59,
                        "line": 118
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      2659,
                      2660
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 118
                      },
                      "start": {
                        "column": 49,
                        "line": 118
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2659,
                    2675
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 118
                    },
                    "start": {
                      "column": 49,
                      "line": 118
                    }
                  }
                }
              ]
            },
            "range": [
              2614,
              2740
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 121
              },
              "start": {
                "column": 4,
                "line": 118
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                2826,
                2872
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 124
                          },
                          "start": {
                            "column": 10,
                            "line": 124
                          }
                        },
                        "range": [
                          2838,
                          2846
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            2840,
                            2846
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 124
                            },
                            "start": {
                              "column": 12,
                              "line": 124
                            }
                          }
                        }
                      },
                      "range": [
                        2837,
                        2846
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 124
                        },
                        "start": {
                          "column": 9,
                          "line": 124
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 124
                      },
                      "start": {
                        "column": 19,
                        "line": 124
                      }
                    },
                    "range": [
                      2847,
                      2850
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          2849,
                          2850
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 124
                          },
                          "start": {
                            "column": 21,
                            "line": 124
                          }
                        }
                      },
                      "range": [
                        2849,
                        2850
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 124
                        },
                        "start": {
                          "column": 21,
                          "line": 124
                        }
                      }
                    }
                  },
                  "range": [
                    2836,
                    2851
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 124
                    },
                    "start": {
                      "column": 8,
                      "line": 124
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      2860,
                      2863
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 125
                      },
                      "start": {
                        "column": 8,
                        "line": 125
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 125
                      },
                      "start": {
                        "column": 11,
                        "line": 125
                      }
                    },
                    "range": [
                      2863,
                      2866
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          2865,
                          2866
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 125
                          },
                          "start": {
                            "column": 13,
                            "line": 125
                          }
                        }
                      },
                      "range": [
                        2865,
                        2866
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 125
                        },
                        "start": {
                          "column": 13,
                          "line": 125
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    2860,
                    2866
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 125
                    },
                    "start": {
                      "column": 8,
                      "line": 125
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 126
                },
                "start": {
                  "column": 84,
                  "line": 123
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D3",
              "optional": false,
              "range": [
                2752,
                2754
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 123
                },
                "start": {
                  "column": 10,
                  "line": 123
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "range": [
                2817,
                2822
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 123
                },
                "start": {
                  "column": 75,
                  "line": 123
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                2822,
                2825
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      2823,
                      2824
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 123
                      },
                      "start": {
                        "column": 81,
                        "line": 123
                      }
                    }
                  },
                  "range": [
                    2823,
                    2824
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 123
                    },
                    "start": {
                      "column": 81,
                      "line": 123
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 123
                },
                "start": {
                  "column": 80,
                  "line": 123
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 123
                },
                "start": {
                  "column": 12,
                  "line": 123
                }
              },
              "range": [
                2754,
                2808
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2768,
                        2771
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              2769,
                              2770
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 123
                              },
                              "start": {
                                "column": 27,
                                "line": 123
                              }
                            }
                          },
                          "range": [
                            2769,
                            2770
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 123
                            },
                            "start": {
                              "column": 27,
                              "line": 123
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 123
                        },
                        "start": {
                          "column": 26,
                          "line": 123
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2765,
                        2768
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 123
                        },
                        "start": {
                          "column": 23,
                          "line": 123
                        }
                      }
                    },
                    "range": [
                      2765,
                      2771
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 123
                      },
                      "start": {
                        "column": 23,
                        "line": 123
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
                      2755,
                      2756
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 123
                      },
                      "start": {
                        "column": 13,
                        "line": 123
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2755,
                    2771
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 123
                    },
                    "start": {
                      "column": 13,
                      "line": 123
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2786,
                        2789
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              2787,
                              2788
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 123
                              },
                              "start": {
                                "column": 45,
                                "line": 123
                              }
                            }
                          },
                          "range": [
                            2787,
                            2788
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 123
                            },
                            "start": {
                              "column": 45,
                              "line": 123
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 123
                        },
                        "start": {
                          "column": 44,
                          "line": 123
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2783,
                        2786
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 123
                        },
                        "start": {
                          "column": 41,
                          "line": 123
                        }
                      }
                    },
                    "range": [
                      2783,
                      2789
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 123
                      },
                      "start": {
                        "column": 41,
                        "line": 123
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      2773,
                      2774
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 123
                      },
                      "start": {
                        "column": 31,
                        "line": 123
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2773,
                    2789
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 123
                    },
                    "start": {
                      "column": 31,
                      "line": 123
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2804,
                        2807
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              2805,
                              2806
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 123
                              },
                              "start": {
                                "column": 63,
                                "line": 123
                              }
                            }
                          },
                          "range": [
                            2805,
                            2806
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 123
                            },
                            "start": {
                              "column": 63,
                              "line": 123
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 123
                        },
                        "start": {
                          "column": 62,
                          "line": 123
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2801,
                        2804
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 123
                        },
                        "start": {
                          "column": 59,
                          "line": 123
                        }
                      }
                    },
                    "range": [
                      2801,
                      2807
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 123
                      },
                      "start": {
                        "column": 59,
                        "line": 123
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      2791,
                      2792
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 123
                      },
                      "start": {
                        "column": 49,
                        "line": 123
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2791,
                    2807
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 123
                    },
                    "start": {
                      "column": 49,
                      "line": 123
                    }
                  }
                }
              ]
            },
            "range": [
              2746,
              2872
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 126
              },
              "start": {
                "column": 4,
                "line": 123
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                2958,
                3004
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 129
                          },
                          "start": {
                            "column": 10,
                            "line": 129
                          }
                        },
                        "range": [
                          2970,
                          2978
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            2972,
                            2978
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 129
                            },
                            "start": {
                              "column": 12,
                              "line": 129
                            }
                          }
                        }
                      },
                      "range": [
                        2969,
                        2978
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 129
                        },
                        "start": {
                          "column": 9,
                          "line": 129
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 129
                      },
                      "start": {
                        "column": 19,
                        "line": 129
                      }
                    },
                    "range": [
                      2979,
                      2982
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          2981,
                          2982
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 129
                          },
                          "start": {
                            "column": 21,
                            "line": 129
                          }
                        }
                      },
                      "range": [
                        2981,
                        2982
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 129
                        },
                        "start": {
                          "column": 21,
                          "line": 129
                        }
                      }
                    }
                  },
                  "range": [
                    2968,
                    2983
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 129
                    },
                    "start": {
                      "column": 8,
                      "line": 129
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      2992,
                      2995
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 130
                      },
                      "start": {
                        "column": 8,
                        "line": 130
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 130
                      },
                      "start": {
                        "column": 11,
                        "line": 130
                      }
                    },
                    "range": [
                      2995,
                      2998
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          2997,
                          2998
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 130
                          },
                          "start": {
                            "column": 13,
                            "line": 130
                          }
                        }
                      },
                      "range": [
                        2997,
                        2998
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 130
                        },
                        "start": {
                          "column": 13,
                          "line": 130
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    2992,
                    2998
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 130
                    },
                    "start": {
                      "column": 8,
                      "line": 130
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 131
                },
                "start": {
                  "column": 84,
                  "line": 128
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D4",
              "optional": false,
              "range": [
                2884,
                2886
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 128
                },
                "start": {
                  "column": 10,
                  "line": 128
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "range": [
                2949,
                2954
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 128
                },
                "start": {
                  "column": 75,
                  "line": 128
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                2954,
                2957
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      2955,
                      2956
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 128
                      },
                      "start": {
                        "column": 81,
                        "line": 128
                      }
                    }
                  },
                  "range": [
                    2955,
                    2956
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 128
                    },
                    "start": {
                      "column": 81,
                      "line": 128
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 128
                },
                "start": {
                  "column": 80,
                  "line": 128
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 128
                },
                "start": {
                  "column": 12,
                  "line": 128
                }
              },
              "range": [
                2886,
                2940
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2900,
                        2903
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              2901,
                              2902
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 128
                              },
                              "start": {
                                "column": 27,
                                "line": 128
                              }
                            }
                          },
                          "range": [
                            2901,
                            2902
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 128
                            },
                            "start": {
                              "column": 27,
                              "line": 128
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 128
                        },
                        "start": {
                          "column": 26,
                          "line": 128
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2897,
                        2900
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 128
                        },
                        "start": {
                          "column": 23,
                          "line": 128
                        }
                      }
                    },
                    "range": [
                      2897,
                      2903
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 128
                      },
                      "start": {
                        "column": 23,
                        "line": 128
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
                      2887,
                      2888
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 128
                      },
                      "start": {
                        "column": 13,
                        "line": 128
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2887,
                    2903
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 128
                    },
                    "start": {
                      "column": 13,
                      "line": 128
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2918,
                        2921
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              2919,
                              2920
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 128
                              },
                              "start": {
                                "column": 45,
                                "line": 128
                              }
                            }
                          },
                          "range": [
                            2919,
                            2920
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 128
                            },
                            "start": {
                              "column": 45,
                              "line": 128
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 128
                        },
                        "start": {
                          "column": 44,
                          "line": 128
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2915,
                        2918
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 128
                        },
                        "start": {
                          "column": 41,
                          "line": 128
                        }
                      }
                    },
                    "range": [
                      2915,
                      2921
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 128
                      },
                      "start": {
                        "column": 41,
                        "line": 128
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      2905,
                      2906
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 128
                      },
                      "start": {
                        "column": 31,
                        "line": 128
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2905,
                    2921
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 128
                    },
                    "start": {
                      "column": 31,
                      "line": 128
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        2936,
                        2939
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              2937,
                              2938
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 128
                              },
                              "start": {
                                "column": 63,
                                "line": 128
                              }
                            }
                          },
                          "range": [
                            2937,
                            2938
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 128
                            },
                            "start": {
                              "column": 63,
                              "line": 128
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 128
                        },
                        "start": {
                          "column": 62,
                          "line": 128
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        2933,
                        2936
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 128
                        },
                        "start": {
                          "column": 59,
                          "line": 128
                        }
                      }
                    },
                    "range": [
                      2933,
                      2939
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 128
                      },
                      "start": {
                        "column": 59,
                        "line": 128
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      2923,
                      2924
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 128
                      },
                      "start": {
                        "column": 49,
                        "line": 128
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    2923,
                    2939
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 128
                    },
                    "start": {
                      "column": 49,
                      "line": 128
                    }
                  }
                }
              ]
            },
            "range": [
              2878,
              3004
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 131
              },
              "start": {
                "column": 4,
                "line": 128
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                3090,
                3136
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 134
                          },
                          "start": {
                            "column": 10,
                            "line": 134
                          }
                        },
                        "range": [
                          3102,
                          3110
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3104,
                            3110
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 134
                            },
                            "start": {
                              "column": 12,
                              "line": 134
                            }
                          }
                        }
                      },
                      "range": [
                        3101,
                        3110
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 134
                        },
                        "start": {
                          "column": 9,
                          "line": 134
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 134
                      },
                      "start": {
                        "column": 19,
                        "line": 134
                      }
                    },
                    "range": [
                      3111,
                      3114
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          3113,
                          3114
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 134
                          },
                          "start": {
                            "column": 21,
                            "line": 134
                          }
                        }
                      },
                      "range": [
                        3113,
                        3114
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 134
                        },
                        "start": {
                          "column": 21,
                          "line": 134
                        }
                      }
                    }
                  },
                  "range": [
                    3100,
                    3115
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 134
                    },
                    "start": {
                      "column": 8,
                      "line": 134
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      3124,
                      3127
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 135
                      },
                      "start": {
                        "column": 8,
                        "line": 135
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 135
                      },
                      "start": {
                        "column": 11,
                        "line": 135
                      }
                    },
                    "range": [
                      3127,
                      3130
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          3129,
                          3130
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 135
                          },
                          "start": {
                            "column": 13,
                            "line": 135
                          }
                        }
                      },
                      "range": [
                        3129,
                        3130
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 135
                        },
                        "start": {
                          "column": 13,
                          "line": 135
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    3124,
                    3130
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 135
                    },
                    "start": {
                      "column": 8,
                      "line": 135
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 136
                },
                "start": {
                  "column": 84,
                  "line": 133
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D5",
              "optional": false,
              "range": [
                3016,
                3018
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 133
                },
                "start": {
                  "column": 10,
                  "line": 133
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "range": [
                3081,
                3086
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 133
                },
                "start": {
                  "column": 75,
                  "line": 133
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                3086,
                3089
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      3087,
                      3088
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 133
                      },
                      "start": {
                        "column": 81,
                        "line": 133
                      }
                    }
                  },
                  "range": [
                    3087,
                    3088
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 133
                    },
                    "start": {
                      "column": 81,
                      "line": 133
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 133
                },
                "start": {
                  "column": 80,
                  "line": 133
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 133
                },
                "start": {
                  "column": 12,
                  "line": 133
                }
              },
              "range": [
                3018,
                3072
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3032,
                        3035
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              3033,
                              3034
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 133
                              },
                              "start": {
                                "column": 27,
                                "line": 133
                              }
                            }
                          },
                          "range": [
                            3033,
                            3034
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 133
                            },
                            "start": {
                              "column": 27,
                              "line": 133
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 133
                        },
                        "start": {
                          "column": 26,
                          "line": 133
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        3029,
                        3032
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 133
                        },
                        "start": {
                          "column": 23,
                          "line": 133
                        }
                      }
                    },
                    "range": [
                      3029,
                      3035
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 133
                      },
                      "start": {
                        "column": 23,
                        "line": 133
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
                      3019,
                      3020
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 133
                      },
                      "start": {
                        "column": 13,
                        "line": 133
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3019,
                    3035
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 133
                    },
                    "start": {
                      "column": 13,
                      "line": 133
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3050,
                        3053
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              3051,
                              3052
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 133
                              },
                              "start": {
                                "column": 45,
                                "line": 133
                              }
                            }
                          },
                          "range": [
                            3051,
                            3052
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 133
                            },
                            "start": {
                              "column": 45,
                              "line": 133
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 133
                        },
                        "start": {
                          "column": 44,
                          "line": 133
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        3047,
                        3050
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 133
                        },
                        "start": {
                          "column": 41,
                          "line": 133
                        }
                      }
                    },
                    "range": [
                      3047,
                      3053
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 133
                      },
                      "start": {
                        "column": 41,
                        "line": 133
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      3037,
                      3038
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 133
                      },
                      "start": {
                        "column": 31,
                        "line": 133
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3037,
                    3053
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 133
                    },
                    "start": {
                      "column": 31,
                      "line": 133
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3068,
                        3071
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              3069,
                              3070
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 133
                              },
                              "start": {
                                "column": 63,
                                "line": 133
                              }
                            }
                          },
                          "range": [
                            3069,
                            3070
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 133
                            },
                            "start": {
                              "column": 63,
                              "line": 133
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 133
                        },
                        "start": {
                          "column": 62,
                          "line": 133
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        3065,
                        3068
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 133
                        },
                        "start": {
                          "column": 59,
                          "line": 133
                        }
                      }
                    },
                    "range": [
                      3065,
                      3071
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 133
                      },
                      "start": {
                        "column": 59,
                        "line": 133
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      3055,
                      3056
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 133
                      },
                      "start": {
                        "column": 49,
                        "line": 133
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3055,
                    3071
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 133
                    },
                    "start": {
                      "column": 49,
                      "line": 133
                    }
                  }
                }
              ]
            },
            "range": [
              3010,
              3136
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 136
              },
              "start": {
                "column": 4,
                "line": 133
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                3222,
                3268
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 139
                          },
                          "start": {
                            "column": 10,
                            "line": 139
                          }
                        },
                        "range": [
                          3234,
                          3242
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3236,
                            3242
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 139
                            },
                            "start": {
                              "column": 12,
                              "line": 139
                            }
                          }
                        }
                      },
                      "range": [
                        3233,
                        3242
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 139
                        },
                        "start": {
                          "column": 9,
                          "line": 139
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 139
                      },
                      "start": {
                        "column": 19,
                        "line": 139
                      }
                    },
                    "range": [
                      3243,
                      3246
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          3245,
                          3246
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 139
                          },
                          "start": {
                            "column": 21,
                            "line": 139
                          }
                        }
                      },
                      "range": [
                        3245,
                        3246
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 139
                        },
                        "start": {
                          "column": 21,
                          "line": 139
                        }
                      }
                    }
                  },
                  "range": [
                    3232,
                    3247
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 139
                    },
                    "start": {
                      "column": 8,
                      "line": 139
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      3256,
                      3259
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 140
                      },
                      "start": {
                        "column": 8,
                        "line": 140
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 140
                      },
                      "start": {
                        "column": 11,
                        "line": 140
                      }
                    },
                    "range": [
                      3259,
                      3262
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          3261,
                          3262
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 140
                          },
                          "start": {
                            "column": 13,
                            "line": 140
                          }
                        }
                      },
                      "range": [
                        3261,
                        3262
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 140
                        },
                        "start": {
                          "column": 13,
                          "line": 140
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    3256,
                    3262
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 140
                    },
                    "start": {
                      "column": 8,
                      "line": 140
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 141
                },
                "start": {
                  "column": 84,
                  "line": 138
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D6",
              "optional": false,
              "range": [
                3148,
                3150
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 138
                },
                "start": {
                  "column": 10,
                  "line": 138
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "range": [
                3213,
                3218
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 138
                },
                "start": {
                  "column": 75,
                  "line": 138
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                3218,
                3221
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      3219,
                      3220
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 138
                      },
                      "start": {
                        "column": 81,
                        "line": 138
                      }
                    }
                  },
                  "range": [
                    3219,
                    3220
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 138
                    },
                    "start": {
                      "column": 81,
                      "line": 138
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 138
                },
                "start": {
                  "column": 80,
                  "line": 138
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 138
                },
                "start": {
                  "column": 12,
                  "line": 138
                }
              },
              "range": [
                3150,
                3204
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3164,
                        3167
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              3165,
                              3166
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 138
                              },
                              "start": {
                                "column": 27,
                                "line": 138
                              }
                            }
                          },
                          "range": [
                            3165,
                            3166
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 138
                            },
                            "start": {
                              "column": 27,
                              "line": 138
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 138
                        },
                        "start": {
                          "column": 26,
                          "line": 138
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        3161,
                        3164
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 138
                        },
                        "start": {
                          "column": 23,
                          "line": 138
                        }
                      }
                    },
                    "range": [
                      3161,
                      3167
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 138
                      },
                      "start": {
                        "column": 23,
                        "line": 138
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
                      3151,
                      3152
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 138
                      },
                      "start": {
                        "column": 13,
                        "line": 138
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3151,
                    3167
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 138
                    },
                    "start": {
                      "column": 13,
                      "line": 138
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3182,
                        3185
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              3183,
                              3184
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 138
                              },
                              "start": {
                                "column": 45,
                                "line": 138
                              }
                            }
                          },
                          "range": [
                            3183,
                            3184
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 138
                            },
                            "start": {
                              "column": 45,
                              "line": 138
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 138
                        },
                        "start": {
                          "column": 44,
                          "line": 138
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        3179,
                        3182
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 138
                        },
                        "start": {
                          "column": 41,
                          "line": 138
                        }
                      }
                    },
                    "range": [
                      3179,
                      3185
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 138
                      },
                      "start": {
                        "column": 41,
                        "line": 138
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      3169,
                      3170
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 138
                      },
                      "start": {
                        "column": 31,
                        "line": 138
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3169,
                    3185
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 138
                    },
                    "start": {
                      "column": 31,
                      "line": 138
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3200,
                        3203
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              3201,
                              3202
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 138
                              },
                              "start": {
                                "column": 63,
                                "line": 138
                              }
                            }
                          },
                          "range": [
                            3201,
                            3202
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 138
                            },
                            "start": {
                              "column": 63,
                              "line": 138
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 138
                        },
                        "start": {
                          "column": 62,
                          "line": 138
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        3197,
                        3200
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 138
                        },
                        "start": {
                          "column": 59,
                          "line": 138
                        }
                      }
                    },
                    "range": [
                      3197,
                      3203
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 138
                      },
                      "start": {
                        "column": 59,
                        "line": 138
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      3187,
                      3188
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 138
                      },
                      "start": {
                        "column": 49,
                        "line": 138
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3187,
                    3203
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 138
                    },
                    "start": {
                      "column": 49,
                      "line": 138
                    }
                  }
                }
              ]
            },
            "range": [
              3142,
              3268
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 141
              },
              "start": {
                "column": 4,
                "line": 138
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                3354,
                3400
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 144
                          },
                          "start": {
                            "column": 10,
                            "line": 144
                          }
                        },
                        "range": [
                          3366,
                          3374
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3368,
                            3374
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 144
                            },
                            "start": {
                              "column": 12,
                              "line": 144
                            }
                          }
                        }
                      },
                      "range": [
                        3365,
                        3374
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 144
                        },
                        "start": {
                          "column": 9,
                          "line": 144
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 144
                      },
                      "start": {
                        "column": 19,
                        "line": 144
                      }
                    },
                    "range": [
                      3375,
                      3378
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          3377,
                          3378
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 144
                          },
                          "start": {
                            "column": 21,
                            "line": 144
                          }
                        }
                      },
                      "range": [
                        3377,
                        3378
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 144
                        },
                        "start": {
                          "column": 21,
                          "line": 144
                        }
                      }
                    }
                  },
                  "range": [
                    3364,
                    3379
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 144
                    },
                    "start": {
                      "column": 8,
                      "line": 144
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      3388,
                      3391
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 145
                      },
                      "start": {
                        "column": 8,
                        "line": 145
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 145
                      },
                      "start": {
                        "column": 11,
                        "line": 145
                      }
                    },
                    "range": [
                      3391,
                      3394
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          3393,
                          3394
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 145
                          },
                          "start": {
                            "column": 13,
                            "line": 145
                          }
                        }
                      },
                      "range": [
                        3393,
                        3394
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 145
                        },
                        "start": {
                          "column": 13,
                          "line": 145
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    3388,
                    3394
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 145
                    },
                    "start": {
                      "column": 8,
                      "line": 145
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 146
                },
                "start": {
                  "column": 84,
                  "line": 143
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D7",
              "optional": false,
              "range": [
                3280,
                3282
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 143
                },
                "start": {
                  "column": 10,
                  "line": 143
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "range": [
                3345,
                3350
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 143
                },
                "start": {
                  "column": 75,
                  "line": 143
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                3350,
                3353
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      3351,
                      3352
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 143
                      },
                      "start": {
                        "column": 81,
                        "line": 143
                      }
                    }
                  },
                  "range": [
                    3351,
                    3352
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 143
                    },
                    "start": {
                      "column": 81,
                      "line": 143
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 143
                },
                "start": {
                  "column": 80,
                  "line": 143
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 143
                },
                "start": {
                  "column": 12,
                  "line": 143
                }
              },
              "range": [
                3282,
                3336
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3296,
                        3299
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              3297,
                              3298
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 143
                              },
                              "start": {
                                "column": 27,
                                "line": 143
                              }
                            }
                          },
                          "range": [
                            3297,
                            3298
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 143
                            },
                            "start": {
                              "column": 27,
                              "line": 143
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 143
                        },
                        "start": {
                          "column": 26,
                          "line": 143
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        3293,
                        3296
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 143
                        },
                        "start": {
                          "column": 23,
                          "line": 143
                        }
                      }
                    },
                    "range": [
                      3293,
                      3299
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 143
                      },
                      "start": {
                        "column": 23,
                        "line": 143
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
                      3283,
                      3284
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 143
                      },
                      "start": {
                        "column": 13,
                        "line": 143
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3283,
                    3299
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 143
                    },
                    "start": {
                      "column": 13,
                      "line": 143
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3314,
                        3317
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              3315,
                              3316
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 143
                              },
                              "start": {
                                "column": 45,
                                "line": 143
                              }
                            }
                          },
                          "range": [
                            3315,
                            3316
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 143
                            },
                            "start": {
                              "column": 45,
                              "line": 143
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 143
                        },
                        "start": {
                          "column": 44,
                          "line": 143
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        3311,
                        3314
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 143
                        },
                        "start": {
                          "column": 41,
                          "line": 143
                        }
                      }
                    },
                    "range": [
                      3311,
                      3317
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 143
                      },
                      "start": {
                        "column": 41,
                        "line": 143
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      3301,
                      3302
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 143
                      },
                      "start": {
                        "column": 31,
                        "line": 143
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3301,
                    3317
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 143
                    },
                    "start": {
                      "column": 31,
                      "line": 143
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3332,
                        3335
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              3333,
                              3334
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 143
                              },
                              "start": {
                                "column": 63,
                                "line": 143
                              }
                            }
                          },
                          "range": [
                            3333,
                            3334
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 143
                            },
                            "start": {
                              "column": 63,
                              "line": 143
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 143
                        },
                        "start": {
                          "column": 62,
                          "line": 143
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        3329,
                        3332
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 143
                        },
                        "start": {
                          "column": 59,
                          "line": 143
                        }
                      }
                    },
                    "range": [
                      3329,
                      3335
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 143
                      },
                      "start": {
                        "column": 59,
                        "line": 143
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      3319,
                      3320
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 143
                      },
                      "start": {
                        "column": 49,
                        "line": 143
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3319,
                    3335
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 143
                    },
                    "start": {
                      "column": 49,
                      "line": 143
                    }
                  }
                }
              ]
            },
            "range": [
              3274,
              3400
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 146
              },
              "start": {
                "column": 4,
                "line": 143
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                3486,
                3532
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 149
                          },
                          "start": {
                            "column": 10,
                            "line": 149
                          }
                        },
                        "range": [
                          3498,
                          3506
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3500,
                            3506
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 149
                            },
                            "start": {
                              "column": 12,
                              "line": 149
                            }
                          }
                        }
                      },
                      "range": [
                        3497,
                        3506
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 149
                        },
                        "start": {
                          "column": 9,
                          "line": 149
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 149
                      },
                      "start": {
                        "column": 19,
                        "line": 149
                      }
                    },
                    "range": [
                      3507,
                      3510
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          3509,
                          3510
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 149
                          },
                          "start": {
                            "column": 21,
                            "line": 149
                          }
                        }
                      },
                      "range": [
                        3509,
                        3510
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 149
                        },
                        "start": {
                          "column": 21,
                          "line": 149
                        }
                      }
                    }
                  },
                  "range": [
                    3496,
                    3511
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 149
                    },
                    "start": {
                      "column": 8,
                      "line": 149
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      3520,
                      3523
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 150
                      },
                      "start": {
                        "column": 8,
                        "line": 150
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 150
                      },
                      "start": {
                        "column": 11,
                        "line": 150
                      }
                    },
                    "range": [
                      3523,
                      3526
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "range": [
                          3525,
                          3526
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 150
                          },
                          "start": {
                            "column": 13,
                            "line": 150
                          }
                        }
                      },
                      "range": [
                        3525,
                        3526
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 150
                        },
                        "start": {
                          "column": 13,
                          "line": 150
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    3520,
                    3526
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 150
                    },
                    "start": {
                      "column": 8,
                      "line": 150
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 151
                },
                "start": {
                  "column": 84,
                  "line": 148
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D8",
              "optional": false,
              "range": [
                3412,
                3414
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 148
                },
                "start": {
                  "column": 10,
                  "line": 148
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "range": [
                3477,
                3482
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 148
                },
                "start": {
                  "column": 75,
                  "line": 148
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                3482,
                3485
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      3483,
                      3484
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 148
                      },
                      "start": {
                        "column": 81,
                        "line": 148
                      }
                    }
                  },
                  "range": [
                    3483,
                    3484
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 148
                    },
                    "start": {
                      "column": 81,
                      "line": 148
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 148
                },
                "start": {
                  "column": 80,
                  "line": 148
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 148
                },
                "start": {
                  "column": 12,
                  "line": 148
                }
              },
              "range": [
                3414,
                3468
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3428,
                        3431
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              3429,
                              3430
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 148
                              },
                              "start": {
                                "column": 27,
                                "line": 148
                              }
                            }
                          },
                          "range": [
                            3429,
                            3430
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 148
                            },
                            "start": {
                              "column": 27,
                              "line": 148
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 148
                        },
                        "start": {
                          "column": 26,
                          "line": 148
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        3425,
                        3428
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 148
                        },
                        "start": {
                          "column": 23,
                          "line": 148
                        }
                      }
                    },
                    "range": [
                      3425,
                      3431
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 148
                      },
                      "start": {
                        "column": 23,
                        "line": 148
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
                      3415,
                      3416
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 148
                      },
                      "start": {
                        "column": 13,
                        "line": 148
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3415,
                    3431
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 148
                    },
                    "start": {
                      "column": 13,
                      "line": 148
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3446,
                        3449
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              3447,
                              3448
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 148
                              },
                              "start": {
                                "column": 45,
                                "line": 148
                              }
                            }
                          },
                          "range": [
                            3447,
                            3448
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 148
                            },
                            "start": {
                              "column": 45,
                              "line": 148
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 148
                        },
                        "start": {
                          "column": 44,
                          "line": 148
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        3443,
                        3446
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 148
                        },
                        "start": {
                          "column": 41,
                          "line": 148
                        }
                      }
                    },
                    "range": [
                      3443,
                      3449
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 148
                      },
                      "start": {
                        "column": 41,
                        "line": 148
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      3433,
                      3434
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 148
                      },
                      "start": {
                        "column": 31,
                        "line": 148
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3433,
                    3449
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 148
                    },
                    "start": {
                      "column": 31,
                      "line": 148
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3464,
                        3467
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              3465,
                              3466
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 148
                              },
                              "start": {
                                "column": 63,
                                "line": 148
                              }
                            }
                          },
                          "range": [
                            3465,
                            3466
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 148
                            },
                            "start": {
                              "column": 63,
                              "line": 148
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 148
                        },
                        "start": {
                          "column": 62,
                          "line": 148
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        3461,
                        3464
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 148
                        },
                        "start": {
                          "column": 59,
                          "line": 148
                        }
                      }
                    },
                    "range": [
                      3461,
                      3467
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 148
                      },
                      "start": {
                        "column": 59,
                        "line": 148
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      3451,
                      3452
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 148
                      },
                      "start": {
                        "column": 49,
                        "line": 148
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3451,
                    3467
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 148
                    },
                    "start": {
                      "column": 49,
                      "line": 148
                    }
                  }
                }
              ]
            },
            "range": [
              3406,
              3532
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 151
              },
              "start": {
                "column": 4,
                "line": 148
              }
            }
          },
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                3618,
                3664
              ],
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 154
                          },
                          "start": {
                            "column": 10,
                            "line": 154
                          }
                        },
                        "range": [
                          3630,
                          3638
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            3632,
                            3638
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 154
                            },
                            "start": {
                              "column": 12,
                              "line": 154
                            }
                          }
                        }
                      },
                      "range": [
                        3629,
                        3638
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 154
                        },
                        "start": {
                          "column": 9,
                          "line": 154
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 154
                      },
                      "start": {
                        "column": 19,
                        "line": 154
                      }
                    },
                    "range": [
                      3639,
                      3642
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          3641,
                          3642
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 154
                          },
                          "start": {
                            "column": 21,
                            "line": 154
                          }
                        }
                      },
                      "range": [
                        3641,
                        3642
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 154
                        },
                        "start": {
                          "column": 21,
                          "line": 154
                        }
                      }
                    }
                  },
                  "range": [
                    3628,
                    3643
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 154
                    },
                    "start": {
                      "column": 8,
                      "line": 154
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      3652,
                      3655
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 155
                      },
                      "start": {
                        "column": 8,
                        "line": 155
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 155
                      },
                      "start": {
                        "column": 11,
                        "line": 155
                      }
                    },
                    "range": [
                      3655,
                      3658
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "range": [
                          3657,
                          3658
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 155
                          },
                          "start": {
                            "column": 13,
                            "line": 155
                          }
                        }
                      },
                      "range": [
                        3657,
                        3658
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 155
                        },
                        "start": {
                          "column": 13,
                          "line": 155
                        }
                      }
                    }
                  },
                  "value": null,
                  "range": [
                    3652,
                    3658
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 155
                    },
                    "start": {
                      "column": 8,
                      "line": 155
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 156
                },
                "start": {
                  "column": 84,
                  "line": 153
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "D9",
              "optional": false,
              "range": [
                3544,
                3546
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 153
                },
                "start": {
                  "column": 10,
                  "line": 153
                }
              }
            },
            "implements": [],
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "range": [
                3609,
                3614
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 153
                },
                "start": {
                  "column": 75,
                  "line": 153
                }
              }
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                3614,
                3617
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      3615,
                      3616
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 153
                      },
                      "start": {
                        "column": 81,
                        "line": 153
                      }
                    }
                  },
                  "range": [
                    3615,
                    3616
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 153
                    },
                    "start": {
                      "column": 81,
                      "line": 153
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 153
                },
                "start": {
                  "column": 80,
                  "line": 153
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 153
                },
                "start": {
                  "column": 12,
                  "line": 153
                }
              },
              "range": [
                3546,
                3600
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3560,
                        3563
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "range": [
                              3561,
                              3562
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 153
                              },
                              "start": {
                                "column": 27,
                                "line": 153
                              }
                            }
                          },
                          "range": [
                            3561,
                            3562
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 153
                            },
                            "start": {
                              "column": 27,
                              "line": 153
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 153
                        },
                        "start": {
                          "column": 26,
                          "line": 153
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        3557,
                        3560
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 153
                        },
                        "start": {
                          "column": 23,
                          "line": 153
                        }
                      }
                    },
                    "range": [
                      3557,
                      3563
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 153
                      },
                      "start": {
                        "column": 23,
                        "line": 153
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
                      3547,
                      3548
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 153
                      },
                      "start": {
                        "column": 13,
                        "line": 153
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3547,
                    3563
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 153
                    },
                    "start": {
                      "column": 13,
                      "line": 153
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3578,
                        3581
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              3579,
                              3580
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 153
                              },
                              "start": {
                                "column": 45,
                                "line": 153
                              }
                            }
                          },
                          "range": [
                            3579,
                            3580
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 153
                            },
                            "start": {
                              "column": 45,
                              "line": 153
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 153
                        },
                        "start": {
                          "column": 44,
                          "line": 153
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        3575,
                        3578
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 153
                        },
                        "start": {
                          "column": 41,
                          "line": 153
                        }
                      }
                    },
                    "range": [
                      3575,
                      3581
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 153
                      },
                      "start": {
                        "column": 41,
                        "line": 153
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      3565,
                      3566
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 153
                      },
                      "start": {
                        "column": 31,
                        "line": 153
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3565,
                    3581
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 153
                    },
                    "start": {
                      "column": 31,
                      "line": 153
                    }
                  }
                },
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        3596,
                        3599
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "range": [
                              3597,
                              3598
                            ],
                            "loc": {
                              "end": {
                                "column": 64,
                                "line": 153
                              },
                              "start": {
                                "column": 63,
                                "line": 153
                              }
                            }
                          },
                          "range": [
                            3597,
                            3598
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 153
                            },
                            "start": {
                              "column": 63,
                              "line": 153
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 153
                        },
                        "start": {
                          "column": 62,
                          "line": 153
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "range": [
                        3593,
                        3596
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 153
                        },
                        "start": {
                          "column": 59,
                          "line": 153
                        }
                      }
                    },
                    "range": [
                      3593,
                      3599
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 153
                      },
                      "start": {
                        "column": 59,
                        "line": 153
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "range": [
                      3583,
                      3584
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 153
                      },
                      "start": {
                        "column": 49,
                        "line": 153
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3583,
                    3599
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 153
                    },
                    "start": {
                      "column": 49,
                      "line": 153
                    }
                  }
                }
              ]
            },
            "range": [
              3538,
              3664
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 156
              },
              "start": {
                "column": 4,
                "line": 153
              }
            }
          }
        ],
        "range": [
          2427,
          3666
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 157
          },
          "start": {
            "column": 10,
            "line": 108
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          2424,
          2426
        ],
        "decorators": [],
        "name": "M2",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 108
          },
          "start": {
            "column": 7,
            "line": 108
          }
        }
      },
      "kind": "module",
      "range": [
        2417,
        3666
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 157
        },
        "start": {
          "column": 0,
          "line": 108
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 157
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
