__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    277
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Map",
          "optional": false,
          "range": [
            4,
            7
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        },
        "range": [
          0,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        10
      ],
      "loc": {
        "end": {
          "column": 10,
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
            "name": "potentiallyUndefinedIterable",
            "optional": false,
            "range": [
              18,
              46
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 3
              },
              "start": {
                "column": 6,
                "line": 3
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "'1'",
                      "value": "1",
                      "range": [
                        51,
                        54
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 3
                        },
                        "start": {
                          "column": 39,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        56,
                        57
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 3
                        },
                        "start": {
                          "column": 44,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    50,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 3
                    },
                    "start": {
                      "column": 38,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "'2'",
                      "value": "2",
                      "range": [
                        61,
                        64
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 3
                        },
                        "start": {
                          "column": 49,
                          "line": 3
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        66,
                        67
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 3
                        },
                        "start": {
                          "column": 54,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "range": [
                    60,
                    68
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 3
                    },
                    "start": {
                      "column": 48,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                49,
                69
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 3
                },
                "start": {
                  "column": 37,
                  "line": 3
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      81,
                      99
                    ],
                    "params": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              83,
                              89
                            ],
                            "loc": {
                              "end": {
                                "column": 77,
                                "line": 3
                              },
                              "start": {
                                "column": 71,
                                "line": 3
                              }
                            }
                          },
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              91,
                              97
                            ],
                            "loc": {
                              "end": {
                                "column": 85,
                                "line": 3
                              },
                              "start": {
                                "column": 79,
                                "line": 3
                              }
                            }
                          }
                        ],
                        "range": [
                          82,
                          98
                        ],
                        "loc": {
                          "end": {
                            "column": 86,
                            "line": 3
                          },
                          "start": {
                            "column": 70,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 87,
                        "line": 3
                      },
                      "start": {
                        "column": 69,
                        "line": 3
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "range": [
                      73,
                      81
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 3
                      },
                      "start": {
                        "column": 61,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    73,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 87,
                      "line": 3
                    },
                    "start": {
                      "column": 61,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    102,
                    111
                  ],
                  "loc": {
                    "end": {
                      "column": 99,
                      "line": 3
                    },
                    "start": {
                      "column": 90,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                73,
                111
              ],
              "loc": {
                "end": {
                  "column": 99,
                  "line": 3
                },
                "start": {
                  "column": 61,
                  "line": 3
                }
              }
            },
            "range": [
              49,
              111
            ],
            "loc": {
              "end": {
                "column": 99,
                "line": 3
              },
              "start": {
                "column": 37,
                "line": 3
              }
            }
          },
          "range": [
            18,
            111
          ],
          "loc": {
            "end": {
              "column": 99,
              "line": 3
            },
            "start": {
              "column": 6,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        12,
        112
      ],
      "loc": {
        "end": {
          "column": 100,
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
        "type": "NewExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "potentiallyUndefinedIterable",
            "optional": false,
            "range": [
              121,
              149
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 4
              },
              "start": {
                "column": 8,
                "line": 4
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Map",
          "optional": false,
          "range": [
            117,
            120
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        },
        "range": [
          113,
          150
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 4
          },
          "start": {
            "column": 0,
            "line": 4
          }
        }
      },
      "range": [
        113,
        151
      ],
      "loc": {
        "end": {
          "column": 38,
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
            "name": "potentiallyNullIterable",
            "optional": false,
            "range": [
              159,
              182
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "'1'",
                      "value": "1",
                      "range": [
                        187,
                        190
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 6
                        },
                        "start": {
                          "column": 34,
                          "line": 6
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        192,
                        193
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 6
                        },
                        "start": {
                          "column": 39,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    186,
                    194
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 6
                    },
                    "start": {
                      "column": 33,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "'2'",
                      "value": "2",
                      "range": [
                        197,
                        200
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 6
                        },
                        "start": {
                          "column": 44,
                          "line": 6
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        202,
                        203
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 6
                        },
                        "start": {
                          "column": 49,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "range": [
                    196,
                    204
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 6
                    },
                    "start": {
                      "column": 43,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                185,
                205
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 6
                },
                "start": {
                  "column": 32,
                  "line": 6
                }
              }
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      217,
                      235
                    ],
                    "params": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              219,
                              225
                            ],
                            "loc": {
                              "end": {
                                "column": 72,
                                "line": 6
                              },
                              "start": {
                                "column": 66,
                                "line": 6
                              }
                            }
                          },
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              227,
                              233
                            ],
                            "loc": {
                              "end": {
                                "column": 80,
                                "line": 6
                              },
                              "start": {
                                "column": 74,
                                "line": 6
                              }
                            }
                          }
                        ],
                        "range": [
                          218,
                          234
                        ],
                        "loc": {
                          "end": {
                            "column": 81,
                            "line": 6
                          },
                          "start": {
                            "column": 65,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 82,
                        "line": 6
                      },
                      "start": {
                        "column": 64,
                        "line": 6
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Iterable",
                    "optional": false,
                    "range": [
                      209,
                      217
                    ],
                    "loc": {
                      "end": {
                        "column": 64,
                        "line": 6
                      },
                      "start": {
                        "column": 56,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    209,
                    235
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 6
                    },
                    "start": {
                      "column": 56,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    238,
                    242
                  ],
                  "loc": {
                    "end": {
                      "column": 89,
                      "line": 6
                    },
                    "start": {
                      "column": 85,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                209,
                242
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 6
                },
                "start": {
                  "column": 56,
                  "line": 6
                }
              }
            },
            "range": [
              185,
              242
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 6
              },
              "start": {
                "column": 32,
                "line": 6
              }
            }
          },
          "range": [
            159,
            242
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 6
            },
            "start": {
              "column": 6,
              "line": 6
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        153,
        243
      ],
      "loc": {
        "end": {
          "column": 90,
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
        "type": "NewExpression",
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "potentiallyNullIterable",
            "optional": false,
            "range": [
              252,
              275
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 7
              },
              "start": {
                "column": 8,
                "line": 7
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Map",
          "optional": false,
          "range": [
            248,
            251
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        },
        "range": [
          244,
          276
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        244,
        277
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 33,
      "line": 7
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
