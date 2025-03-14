__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    707
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        32
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
              "name": "array",
              "optional": false,
              "range": [
                11,
                16
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    20,
                    21
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 1
                    },
                    "start": {
                      "column": 20,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    23,
                    24
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 1
                    },
                    "start": {
                      "column": 23,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    26,
                    27
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 1
                    },
                    "start": {
                      "column": 26,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "4",
                  "value": 4,
                  "range": [
                    29,
                    30
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 1
                    },
                    "start": {
                      "column": 29,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                19,
                31
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              }
            },
            "range": [
              11,
              31
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          7,
          32
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 32,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  87,
                  88
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
              "right": {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  93,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 4
                  },
                  "start": {
                    "column": 17,
                    "line": 4
                  }
                }
              },
              "range": [
                87,
                94
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              80,
              95
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
        "range": [
          74,
          97
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 40,
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
        "name": "somePredicate",
        "optional": false,
        "range": [
          43,
          56
        ],
        "loc": {
          "end": {
            "column": 22,
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
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 24,
                "line": 3
              }
            },
            "range": [
              58,
              63
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                60,
                63
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 3
                },
                "start": {
                  "column": 26,
                  "line": 3
                }
              }
            }
          },
          "range": [
            57,
            63
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 3
            },
            "start": {
              "column": 23,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 3
          },
          "start": {
            "column": 30,
            "line": 3
          }
        },
        "range": [
          64,
          73
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            66,
            73
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 3
            },
            "start": {
              "column": 32,
              "line": 3
            }
          }
        }
      },
      "range": [
        34,
        97
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
      "type": "ExportNamedDeclaration",
      "range": [
        99,
        157
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
              "name": "lastIndex1",
              "optional": false,
              "range": [
                110,
                120
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 7
                },
                "start": {
                  "column": 11,
                  "line": 7
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "range": [
                        148,
                        149
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 7
                        },
                        "start": {
                          "column": 49,
                          "line": 7
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        154,
                        155
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 7
                        },
                        "start": {
                          "column": 55,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      148,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 7
                      },
                      "start": {
                        "column": 49,
                        "line": 7
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "range": [
                        143,
                        144
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 7
                        },
                        "start": {
                          "column": 44,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "range": [
                    143,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 7
                    },
                    "start": {
                      "column": 44,
                      "line": 7
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
                  "name": "array",
                  "optional": false,
                  "range": [
                    123,
                    128
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 7
                    },
                    "start": {
                      "column": 24,
                      "line": 7
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "findLastIndex",
                  "optional": false,
                  "range": [
                    129,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 7
                    },
                    "start": {
                      "column": 30,
                      "line": 7
                    }
                  }
                },
                "range": [
                  123,
                  142
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 7
                  },
                  "start": {
                    "column": 24,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "range": [
                123,
                156
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 7
                },
                "start": {
                  "column": 24,
                  "line": 7
                }
              }
            },
            "range": [
              110,
              156
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 7
              },
              "start": {
                "column": 11,
                "line": 7
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          106,
          157
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 7
          },
          "start": {
            "column": 7,
            "line": 7
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 58,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        158,
        217
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
              "name": "lastIndex2",
              "optional": false,
              "range": [
                169,
                179
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 8
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "somePredicate",
                  "optional": false,
                  "range": [
                    202,
                    215
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 8
                    },
                    "start": {
                      "column": 44,
                      "line": 8
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
                  "name": "array",
                  "optional": false,
                  "range": [
                    182,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 8
                    },
                    "start": {
                      "column": 24,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "findLastIndex",
                  "optional": false,
                  "range": [
                    188,
                    201
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 8
                    },
                    "start": {
                      "column": 30,
                      "line": 8
                    }
                  }
                },
                "range": [
                  182,
                  201
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 8
                  },
                  "start": {
                    "column": 24,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "range": [
                182,
                216
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 8
                },
                "start": {
                  "column": 24,
                  "line": 8
                }
              }
            },
            "range": [
              169,
              216
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 8
              },
              "start": {
                "column": 11,
                "line": 8
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          165,
          217
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 59,
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
        219,
        268
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
              "name": "last1",
              "optional": false,
              "range": [
                230,
                235
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "somePredicate",
                  "optional": false,
                  "range": [
                    253,
                    266
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 10
                    },
                    "start": {
                      "column": 34,
                      "line": 10
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
                  "name": "array",
                  "optional": false,
                  "range": [
                    238,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 10
                    },
                    "start": {
                      "column": 19,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "findLast",
                  "optional": false,
                  "range": [
                    244,
                    252
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 10
                    },
                    "start": {
                      "column": 25,
                      "line": 10
                    }
                  }
                },
                "range": [
                  238,
                  252
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 10
                  },
                  "start": {
                    "column": 19,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "range": [
                238,
                267
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 10
                },
                "start": {
                  "column": 19,
                  "line": 10
                }
              }
            },
            "range": [
              230,
              267
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 10
              },
              "start": {
                "column": 11,
                "line": 10
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          226,
          268
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 10
          },
          "start": {
            "column": 7,
            "line": 10
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 49,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        269,
        318
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
              "name": "last2",
              "optional": false,
              "range": [
                280,
                285
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "somePredicate",
                  "optional": false,
                  "range": [
                    303,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 11
                    },
                    "start": {
                      "column": 34,
                      "line": 11
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
                  "name": "array",
                  "optional": false,
                  "range": [
                    288,
                    293
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 11
                    },
                    "start": {
                      "column": 19,
                      "line": 11
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "findLast",
                  "optional": false,
                  "range": [
                    294,
                    302
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 11
                    },
                    "start": {
                      "column": 25,
                      "line": 11
                    }
                  }
                },
                "range": [
                  288,
                  302
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 11
                  },
                  "start": {
                    "column": 19,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "range": [
                288,
                317
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 11
                },
                "start": {
                  "column": 19,
                  "line": 11
                }
              }
            },
            "range": [
              280,
              317
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 11
              },
              "start": {
                "column": 11,
                "line": 11
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          276,
          318
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 11
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 49,
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
        320,
        357
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
              "name": "sorted",
              "optional": false,
              "range": [
                331,
                337
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 13
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "range": [
                    340,
                    345
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 13
                    },
                    "start": {
                      "column": 20,
                      "line": 13
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toSorted",
                  "optional": false,
                  "range": [
                    346,
                    354
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 13
                    },
                    "start": {
                      "column": 26,
                      "line": 13
                    }
                  }
                },
                "range": [
                  340,
                  354
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 13
                  },
                  "start": {
                    "column": 20,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "range": [
                340,
                356
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 13
                },
                "start": {
                  "column": 20,
                  "line": 13
                }
              }
            },
            "range": [
              331,
              356
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 13
              },
              "start": {
                "column": 11,
                "line": 13
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          327,
          357
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 13
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 37,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        359,
        400
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
              "name": "spliced1",
              "optional": false,
              "range": [
                370,
                378
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    397,
                    398
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 15
                    },
                    "start": {
                      "column": 38,
                      "line": 15
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
                  "name": "array",
                  "optional": false,
                  "range": [
                    381,
                    386
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 15
                    },
                    "start": {
                      "column": 22,
                      "line": 15
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toSpliced",
                  "optional": false,
                  "range": [
                    387,
                    396
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 15
                    },
                    "start": {
                      "column": 28,
                      "line": 15
                    }
                  }
                },
                "range": [
                  381,
                  396
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 15
                  },
                  "start": {
                    "column": 22,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "range": [
                381,
                399
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
              370,
              399
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 15
              },
              "start": {
                "column": 11,
                "line": 15
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          366,
          400
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 15
          },
          "start": {
            "column": 7,
            "line": 15
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
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
      "type": "ExportNamedDeclaration",
      "range": [
        401,
        445
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
              "name": "spliced2",
              "optional": false,
              "range": [
                412,
                420
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    439,
                    440
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 16
                    },
                    "start": {
                      "column": 38,
                      "line": 16
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    442,
                    443
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 16
                    },
                    "start": {
                      "column": 41,
                      "line": 16
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
                  "name": "array",
                  "optional": false,
                  "range": [
                    423,
                    428
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 16
                    },
                    "start": {
                      "column": 22,
                      "line": 16
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toSpliced",
                  "optional": false,
                  "range": [
                    429,
                    438
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
                  423,
                  438
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 16
                  },
                  "start": {
                    "column": 22,
                    "line": 16
                  }
                }
              },
              "optional": false,
              "range": [
                423,
                444
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 16
                },
                "start": {
                  "column": 22,
                  "line": 16
                }
              }
            },
            "range": [
              412,
              444
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 16
              },
              "start": {
                "column": 11,
                "line": 16
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          408,
          445
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 16
          },
          "start": {
            "column": 7,
            "line": 16
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 44,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        446,
        502
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
              "name": "spliced3",
              "optional": false,
              "range": [
                457,
                465
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 17
                },
                "start": {
                  "column": 11,
                  "line": 17
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    484,
                    485
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 17
                    },
                    "start": {
                      "column": 38,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    487,
                    488
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 17
                    },
                    "start": {
                      "column": 41,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "4",
                  "value": 4,
                  "range": [
                    490,
                    491
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 17
                    },
                    "start": {
                      "column": 44,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "5",
                  "value": 5,
                  "range": [
                    493,
                    494
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 17
                    },
                    "start": {
                      "column": 47,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "6",
                  "value": 6,
                  "range": [
                    496,
                    497
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 17
                    },
                    "start": {
                      "column": 50,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "7",
                  "value": 7,
                  "range": [
                    499,
                    500
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 17
                    },
                    "start": {
                      "column": 53,
                      "line": 17
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
                  "name": "array",
                  "optional": false,
                  "range": [
                    468,
                    473
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 17
                    },
                    "start": {
                      "column": 22,
                      "line": 17
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toSpliced",
                  "optional": false,
                  "range": [
                    474,
                    483
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 17
                    },
                    "start": {
                      "column": 28,
                      "line": 17
                    }
                  }
                },
                "range": [
                  468,
                  483
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 17
                  },
                  "start": {
                    "column": 22,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "range": [
                468,
                501
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 17
                },
                "start": {
                  "column": 22,
                  "line": 17
                }
              }
            },
            "range": [
              457,
              501
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 17
              },
              "start": {
                "column": 11,
                "line": 17
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          453,
          502
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 17
          },
          "start": {
            "column": 7,
            "line": 17
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 56,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        503,
        555
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
              "name": "spliced4",
              "optional": false,
              "range": [
                514,
                522
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    541,
                    542
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 18
                    },
                    "start": {
                      "column": 38,
                      "line": 18
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    544,
                    553
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 18
                    },
                    "start": {
                      "column": 41,
                      "line": 18
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
                  "name": "array",
                  "optional": false,
                  "range": [
                    525,
                    530
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 18
                    },
                    "start": {
                      "column": 22,
                      "line": 18
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toSpliced",
                  "optional": false,
                  "range": [
                    531,
                    540
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 18
                    },
                    "start": {
                      "column": 28,
                      "line": 18
                    }
                  }
                },
                "range": [
                  525,
                  540
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 18
                  },
                  "start": {
                    "column": 22,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "range": [
                525,
                554
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 18
                },
                "start": {
                  "column": 22,
                  "line": 18
                }
              }
            },
            "range": [
              514,
              554
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 18
              },
              "start": {
                "column": 11,
                "line": 18
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          510,
          555
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 18
          },
          "start": {
            "column": 7,
            "line": 18
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 52,
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
        556,
        620
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
              "name": "spliced5",
              "optional": false,
              "range": [
                567,
                575
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 19
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    594,
                    595
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 19
                    },
                    "start": {
                      "column": 38,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "range": [
                    597,
                    606
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 19
                    },
                    "start": {
                      "column": 41,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "4",
                  "value": 4,
                  "range": [
                    608,
                    609
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 19
                    },
                    "start": {
                      "column": 52,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "5",
                  "value": 5,
                  "range": [
                    611,
                    612
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 19
                    },
                    "start": {
                      "column": 55,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "6",
                  "value": 6,
                  "range": [
                    614,
                    615
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 19
                    },
                    "start": {
                      "column": 58,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "7",
                  "value": 7,
                  "range": [
                    617,
                    618
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 19
                    },
                    "start": {
                      "column": 61,
                      "line": 19
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
                  "name": "array",
                  "optional": false,
                  "range": [
                    578,
                    583
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 19
                    },
                    "start": {
                      "column": 22,
                      "line": 19
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toSpliced",
                  "optional": false,
                  "range": [
                    584,
                    593
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 19
                    },
                    "start": {
                      "column": 28,
                      "line": 19
                    }
                  }
                },
                "range": [
                  578,
                  593
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 19
                  },
                  "start": {
                    "column": 22,
                    "line": 19
                  }
                }
              },
              "optional": false,
              "range": [
                578,
                619
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 19
                },
                "start": {
                  "column": 22,
                  "line": 19
                }
              }
            },
            "range": [
              567,
              619
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 19
              },
              "start": {
                "column": 11,
                "line": 19
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          563,
          620
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 19
          },
          "start": {
            "column": 7,
            "line": 19
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 64,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        622,
        666
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
              "name": "startsWithOne",
              "optional": false,
              "range": [
                633,
                646
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    660,
                    661
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 21
                    },
                    "start": {
                      "column": 38,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    663,
                    664
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 21
                    },
                    "start": {
                      "column": 41,
                      "line": 21
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
                  "name": "array",
                  "optional": false,
                  "range": [
                    649,
                    654
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 21
                    },
                    "start": {
                      "column": 27,
                      "line": 21
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "range": [
                    655,
                    659
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 21
                    },
                    "start": {
                      "column": 33,
                      "line": 21
                    }
                  }
                },
                "range": [
                  649,
                  659
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 21
                  },
                  "start": {
                    "column": 27,
                    "line": 21
                  }
                }
              },
              "optional": false,
              "range": [
                649,
                665
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 21
                },
                "start": {
                  "column": 27,
                  "line": 21
                }
              }
            },
            "range": [
              633,
              665
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 21
              },
              "start": {
                "column": 11,
                "line": 21
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          629,
          666
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 21
          },
          "start": {
            "column": 7,
            "line": 21
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 44,
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
        667,
        707
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
              "name": "inTheEnd",
              "optional": false,
              "range": [
                678,
                686
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 22
                },
                "start": {
                  "column": 11,
                  "line": 22
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      701,
                      702
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 22
                      },
                      "start": {
                        "column": 34,
                        "line": 22
                      }
                    }
                  },
                  "operator": "-",
                  "prefix": true,
                  "range": [
                    700,
                    702
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 22
                    },
                    "start": {
                      "column": 33,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    704,
                    705
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 22
                    },
                    "start": {
                      "column": 37,
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
                  "name": "array",
                  "optional": false,
                  "range": [
                    689,
                    694
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 22
                    },
                    "start": {
                      "column": 22,
                      "line": 22
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "range": [
                    695,
                    699
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 22
                    },
                    "start": {
                      "column": 28,
                      "line": 22
                    }
                  }
                },
                "range": [
                  689,
                  699
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 22
                  },
                  "start": {
                    "column": 22,
                    "line": 22
                  }
                }
              },
              "optional": false,
              "range": [
                689,
                706
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 22
                },
                "start": {
                  "column": 22,
                  "line": 22
                }
              }
            },
            "range": [
              678,
              706
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 22
              },
              "start": {
                "column": 11,
                "line": 22
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          674,
          707
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 22
          },
          "start": {
            "column": 7,
            "line": 22
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 40,
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
      "column": 40,
      "line": 22
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
