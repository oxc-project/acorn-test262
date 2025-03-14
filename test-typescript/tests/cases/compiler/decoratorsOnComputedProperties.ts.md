__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    4738
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          38,
          41
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 1
          },
          "start": {
            "column": 38,
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
        "name": "x",
        "optional": false,
        "range": [
          9,
          10
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            },
            "range": [
              12,
              20
            ],
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "range": [
                14,
                20
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 14,
                  "line": 1
                }
              }
            }
          },
          "range": [
            11,
            20
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 1
            },
            "start": {
              "column": 11,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 36,
                "line": 1
              },
              "start": {
                "column": 23,
                "line": 1
              }
            },
            "range": [
              23,
              36
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyKey",
                "optional": false,
                "range": [
                  25,
                  36
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 1
                  },
                  "start": {
                    "column": 25,
                    "line": 1
                  }
                }
              },
              "range": [
                25,
                36
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 1
                },
                "start": {
                  "column": 25,
                  "line": 1
                }
              }
            }
          },
          "range": [
            22,
            36
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 1
            },
            "start": {
              "column": 22,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        41
      ],
      "loc": {
        "end": {
          "column": 41,
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
            "name": "i",
            "optional": false,
            "range": [
              46,
              47
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              50,
              51
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 2
              },
              "start": {
                "column": 8,
                "line": 2
              }
            }
          },
          "range": [
            46,
            51
          ],
          "loc": {
            "end": {
              "column": 9,
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
        42,
        52
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
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
              "operator": "+",
              "left": {
                "type": "UpdateExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "range": [
                    87,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 3
                    },
                    "start": {
                      "column": 34,
                      "line": 3
                    }
                  }
                },
                "operator": "++",
                "prefix": true,
                "range": [
                  85,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 3
                  },
                  "start": {
                    "column": 32,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  91,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 3
                  },
                  "start": {
                    "column": 38,
                    "line": 3
                  }
                }
              },
              "range": [
                85,
                93
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 3
                },
                "start": {
                  "column": 32,
                  "line": 3
                }
              }
            },
            "range": [
              78,
              94
            ],
            "loc": {
              "end": {
                "column": 41,
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
          76,
          96
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 3
          },
          "start": {
            "column": 23,
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
        "name": "foo",
        "optional": false,
        "range": [
          62,
          65
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 22,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 3
          }
        },
        "range": [
          67,
          75
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            69,
            75
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          }
        }
      },
      "range": [
        53,
        96
      ],
      "loc": {
        "end": {
          "column": 43,
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
            "name": "fieldNameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              },
              "range": [
                114,
                122
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  116,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 5
                  },
                  "start": {
                    "column": 18,
                    "line": 5
                  }
                }
              }
            },
            "range": [
              104,
              122
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"fieldName1\"",
            "value": "fieldName1",
            "range": [
              125,
              137
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 5
              },
              "start": {
                "column": 27,
                "line": 5
              }
            }
          },
          "range": [
            104,
            137
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 5
            },
            "start": {
              "column": 6,
              "line": 5
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        98,
        138
      ],
      "loc": {
        "end": {
          "column": 40,
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
            "name": "fieldNameB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 6
                },
                "start": {
                  "column": 16,
                  "line": 6
                }
              },
              "range": [
                155,
                163
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  157,
                  163
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 6
                  },
                  "start": {
                    "column": 18,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              145,
              163
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 6
              },
              "start": {
                "column": 6,
                "line": 6
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"fieldName2\"",
            "value": "fieldName2",
            "range": [
              166,
              178
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 6
              },
              "start": {
                "column": 27,
                "line": 6
              }
            }
          },
          "range": [
            145,
            178
          ],
          "loc": {
            "end": {
              "column": 39,
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
        139,
        179
      ],
      "loc": {
        "end": {
          "column": 40,
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
            "name": "fieldNameC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 24,
                  "line": 7
                },
                "start": {
                  "column": 16,
                  "line": 7
                }
              },
              "range": [
                196,
                204
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  198,
                  204
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 7
                  },
                  "start": {
                    "column": 18,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              186,
              204
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 7
              },
              "start": {
                "column": 6,
                "line": 7
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"fieldName3\"",
            "value": "fieldName3",
            "range": [
              207,
              219
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 7
              },
              "start": {
                "column": 27,
                "line": 7
              }
            }
          },
          "range": [
            186,
            219
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 7
            },
            "start": {
              "column": 6,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        180,
        220
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          230,
          633
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    237,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 10
                    },
                    "start": {
                      "column": 5,
                      "line": 10
                    }
                  }
                },
                "range": [
                  236,
                  238
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property\"",
              "value": "property",
              "range": [
                240,
                250
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
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
                  "column": 24,
                  "line": 10
                },
                "start": {
                  "column": 19,
                  "line": 10
                }
              },
              "range": [
                251,
                256
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  253,
                  256
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 10
                  },
                  "start": {
                    "column": 21,
                    "line": 10
                  }
                }
              }
            },
            "value": null,
            "range": [
              236,
              257
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    263,
                    264
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 11
                    },
                    "start": {
                      "column": 5,
                      "line": 11
                    }
                  }
                },
                "range": [
                  262,
                  264
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  266,
                  272
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "range": [
                  273,
                  284
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 11
                  },
                  "start": {
                    "column": 15,
                    "line": 11
                  }
                }
              },
              "range": [
                266,
                284
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 8,
                  "line": 11
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
                  "column": 32,
                  "line": 11
                },
                "start": {
                  "column": 27,
                  "line": 11
                }
              },
              "range": [
                285,
                290
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  287,
                  290
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 11
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              }
            },
            "value": null,
            "range": [
              262,
              291
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    297,
                    298
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 12
                    },
                    "start": {
                      "column": 5,
                      "line": 12
                    }
                  }
                },
                "range": [
                  296,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property2\"",
              "value": "property2",
              "range": [
                300,
                311
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
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
                  "column": 25,
                  "line": 12
                },
                "start": {
                  "column": 20,
                  "line": 12
                }
              },
              "range": [
                312,
                317
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  314,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 12
                  },
                  "start": {
                    "column": 22,
                    "line": 12
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                320,
                321
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 12
                },
                "start": {
                  "column": 28,
                  "line": 12
                }
              }
            },
            "range": [
              296,
              322
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
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    328,
                    329
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 13
                    },
                    "start": {
                      "column": 5,
                      "line": 13
                    }
                  }
                },
                "range": [
                  327,
                  329
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 13
                  },
                  "start": {
                    "column": 4,
                    "line": 13
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  331,
                  337
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "range": [
                  338,
                  346
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 13
                  },
                  "start": {
                    "column": 15,
                    "line": 13
                  }
                }
              },
              "range": [
                331,
                346
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
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
                  "column": 29,
                  "line": 13
                },
                "start": {
                  "column": 24,
                  "line": 13
                }
              },
              "range": [
                347,
                352
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  349,
                  352
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 13
                  },
                  "start": {
                    "column": 26,
                    "line": 13
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                355,
                359
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 13
                },
                "start": {
                  "column": 32,
                  "line": 13
                }
              }
            },
            "range": [
              327,
              360
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property3\"",
              "value": "property3",
              "range": [
                366,
                377
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
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
                  "column": 22,
                  "line": 14
                },
                "start": {
                  "column": 17,
                  "line": 14
                }
              },
              "range": [
                378,
                383
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  380,
                  383
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 14
                  },
                  "start": {
                    "column": 19,
                    "line": 14
                  }
                }
              }
            },
            "value": null,
            "range": [
              365,
              384
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  390,
                  396
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 15
                  },
                  "start": {
                    "column": 5,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "range": [
                  397,
                  415
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 15
                  },
                  "start": {
                    "column": 12,
                    "line": 15
                  }
                }
              },
              "range": [
                390,
                415
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 15
                },
                "start": {
                  "column": 5,
                  "line": 15
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
                  "column": 36,
                  "line": 15
                },
                "start": {
                  "column": 31,
                  "line": 15
                }
              },
              "range": [
                416,
                421
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  418,
                  421
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 15
                  },
                  "start": {
                    "column": 33,
                    "line": 15
                  }
                }
              }
            },
            "value": null,
            "range": [
              389,
              422
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property4\"",
              "value": "property4",
              "range": [
                428,
                439
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 16
                },
                "start": {
                  "column": 5,
                  "line": 16
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
                  "column": 22,
                  "line": 16
                },
                "start": {
                  "column": 17,
                  "line": 16
                }
              },
              "range": [
                440,
                445
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  442,
                  445
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 16
                  },
                  "start": {
                    "column": 19,
                    "line": 16
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                448,
                449
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 16
                },
                "start": {
                  "column": 25,
                  "line": 16
                }
              }
            },
            "range": [
              427,
              450
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  456,
                  462
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 17
                  },
                  "start": {
                    "column": 5,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "range": [
                  463,
                  468
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
                456,
                468
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 17
                },
                "start": {
                  "column": 18,
                  "line": 17
                }
              },
              "range": [
                469,
                474
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  471,
                  474
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
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                477,
                481
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 17
                },
                "start": {
                  "column": 26,
                  "line": 17
                }
              }
            },
            "range": [
              455,
              482
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  488,
                  491
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 18
                  },
                  "start": {
                    "column": 5,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "range": [
                488,
                493
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 18
                },
                "start": {
                  "column": 5,
                  "line": 18
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
                  "column": 16,
                  "line": 18
                },
                "start": {
                  "column": 11,
                  "line": 18
                }
              },
              "range": [
                494,
                499
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  496,
                  499
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 18
                  },
                  "start": {
                    "column": 13,
                    "line": 18
                  }
                }
              }
            },
            "value": null,
            "range": [
              487,
              500
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    506,
                    507
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 19
                    },
                    "start": {
                      "column": 5,
                      "line": 19
                    }
                  }
                },
                "range": [
                  505,
                  507
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  509,
                  512
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 19
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              },
              "optional": false,
              "range": [
                509,
                514
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 19
                },
                "start": {
                  "column": 8,
                  "line": 19
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
                  "line": 19
                },
                "start": {
                  "column": 14,
                  "line": 19
                }
              },
              "range": [
                515,
                520
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  517,
                  520
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 19
                  },
                  "start": {
                    "column": 16,
                    "line": 19
                  }
                }
              }
            },
            "value": null,
            "range": [
              505,
              521
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    527,
                    528
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
                "range": [
                  526,
                  528
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  530,
                  533
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "range": [
                530,
                535
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
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
                  "line": 20
                },
                "start": {
                  "column": 14,
                  "line": 20
                }
              },
              "range": [
                536,
                541
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  538,
                  541
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 20
                  },
                  "start": {
                    "column": 16,
                    "line": 20
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                544,
                548
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 20
                },
                "start": {
                  "column": 22,
                  "line": 20
                }
              }
            },
            "range": [
              526,
              549
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "range": [
                555,
                565
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 5,
                  "line": 21
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
                  "line": 21
                },
                "start": {
                  "column": 16,
                  "line": 21
                }
              },
              "range": [
                566,
                571
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  568,
                  571
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 21
                  },
                  "start": {
                    "column": 18,
                    "line": 21
                  }
                }
              }
            },
            "value": null,
            "range": [
              554,
              572
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
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    578,
                    579
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 22
                    },
                    "start": {
                      "column": 5,
                      "line": 22
                    }
                  }
                },
                "range": [
                  577,
                  579
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "range": [
                581,
                591
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 22
                },
                "start": {
                  "column": 8,
                  "line": 22
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
                  "column": 24,
                  "line": 22
                },
                "start": {
                  "column": 19,
                  "line": 22
                }
              },
              "range": [
                592,
                597
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  594,
                  597
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 22
                  },
                  "start": {
                    "column": 21,
                    "line": 22
                  }
                }
              }
            },
            "value": null,
            "range": [
              577,
              598
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    604,
                    605
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 23
                    },
                    "start": {
                      "column": 5,
                      "line": 23
                    }
                  }
                },
                "range": [
                  603,
                  605
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 23
                  },
                  "start": {
                    "column": 4,
                    "line": 23
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "range": [
                607,
                617
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 23
                },
                "start": {
                  "column": 8,
                  "line": 23
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
                  "column": 24,
                  "line": 23
                },
                "start": {
                  "column": 19,
                  "line": 23
                }
              },
              "range": [
                618,
                623
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  620,
                  623
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 23
                  },
                  "start": {
                    "column": 21,
                    "line": 23
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                626,
                630
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 23
                },
                "start": {
                  "column": 27,
                  "line": 23
                }
              }
            },
            "range": [
              603,
              631
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 8,
            "line": 9
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          228,
          229
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 9
          },
          "start": {
            "column": 6,
            "line": 9
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        222,
        633
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              648,
              1051
            ],
            "body": [
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        655,
                        656
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 27
                        },
                        "start": {
                          "column": 5,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      654,
                      656
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 27
                      },
                      "start": {
                        "column": 4,
                        "line": 27
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property\"",
                  "value": "property",
                  "range": [
                    658,
                    668
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
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
                      "column": 24,
                      "line": 27
                    },
                    "start": {
                      "column": 19,
                      "line": 27
                    }
                  },
                  "range": [
                    669,
                    674
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      671,
                      674
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 27
                      },
                      "start": {
                        "column": 21,
                        "line": 27
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  654,
                  675
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 27
                  },
                  "start": {
                    "column": 4,
                    "line": 27
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        681,
                        682
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 28
                        },
                        "start": {
                          "column": 5,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      680,
                      682
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 28
                      },
                      "start": {
                        "column": 4,
                        "line": 28
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      684,
                      690
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "range": [
                      691,
                      702
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 28
                      },
                      "start": {
                        "column": 15,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    684,
                    702
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
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
                      "column": 32,
                      "line": 28
                    },
                    "start": {
                      "column": 27,
                      "line": 28
                    }
                  },
                  "range": [
                    703,
                    708
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      705,
                      708
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 28
                      },
                      "start": {
                        "column": 29,
                        "line": 28
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  680,
                  709
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 28
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        715,
                        716
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 29
                        },
                        "start": {
                          "column": 5,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      714,
                      716
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 29
                      },
                      "start": {
                        "column": 4,
                        "line": 29
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property2\"",
                  "value": "property2",
                  "range": [
                    718,
                    729
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 29
                    },
                    "start": {
                      "column": 8,
                      "line": 29
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
                      "column": 25,
                      "line": 29
                    },
                    "start": {
                      "column": 20,
                      "line": 29
                    }
                  },
                  "range": [
                    730,
                    735
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      732,
                      735
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 29
                      },
                      "start": {
                        "column": 22,
                        "line": 29
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    738,
                    739
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 29
                    },
                    "start": {
                      "column": 28,
                      "line": 29
                    }
                  }
                },
                "range": [
                  714,
                  740
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 29
                  },
                  "start": {
                    "column": 4,
                    "line": 29
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        746,
                        747
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 30
                        },
                        "start": {
                          "column": 5,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      745,
                      747
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 30
                      },
                      "start": {
                        "column": 4,
                        "line": 30
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      749,
                      755
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "range": [
                      756,
                      764
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 30
                      },
                      "start": {
                        "column": 15,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    749,
                    764
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
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
                      "column": 29,
                      "line": 30
                    },
                    "start": {
                      "column": 24,
                      "line": 30
                    }
                  },
                  "range": [
                    765,
                    770
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      767,
                      770
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 30
                      },
                      "start": {
                        "column": 26,
                        "line": 30
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    773,
                    777
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 30
                    },
                    "start": {
                      "column": 32,
                      "line": 30
                    }
                  }
                },
                "range": [
                  745,
                  778
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 30
                  },
                  "start": {
                    "column": 4,
                    "line": 30
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property3\"",
                  "value": "property3",
                  "range": [
                    784,
                    795
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 31
                    },
                    "start": {
                      "column": 5,
                      "line": 31
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
                      "column": 22,
                      "line": 31
                    },
                    "start": {
                      "column": 17,
                      "line": 31
                    }
                  },
                  "range": [
                    796,
                    801
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      798,
                      801
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 31
                      },
                      "start": {
                        "column": 19,
                        "line": 31
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  783,
                  802
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 31
                  },
                  "start": {
                    "column": 4,
                    "line": 31
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      808,
                      814
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 32
                      },
                      "start": {
                        "column": 5,
                        "line": 32
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "range": [
                      815,
                      833
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 32
                      },
                      "start": {
                        "column": 12,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    808,
                    833
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 32
                    },
                    "start": {
                      "column": 5,
                      "line": 32
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
                      "column": 36,
                      "line": 32
                    },
                    "start": {
                      "column": 31,
                      "line": 32
                    }
                  },
                  "range": [
                    834,
                    839
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      836,
                      839
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 32
                      },
                      "start": {
                        "column": 33,
                        "line": 32
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  807,
                  840
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
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property4\"",
                  "value": "property4",
                  "range": [
                    846,
                    857
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 33
                    },
                    "start": {
                      "column": 5,
                      "line": 33
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
                      "column": 22,
                      "line": 33
                    },
                    "start": {
                      "column": 17,
                      "line": 33
                    }
                  },
                  "range": [
                    858,
                    863
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      860,
                      863
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 33
                      },
                      "start": {
                        "column": 19,
                        "line": 33
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    866,
                    867
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 33
                    },
                    "start": {
                      "column": 25,
                      "line": 33
                    }
                  }
                },
                "range": [
                  845,
                  868
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 33
                  },
                  "start": {
                    "column": 4,
                    "line": 33
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      874,
                      880
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 34
                      },
                      "start": {
                        "column": 5,
                        "line": 34
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "range": [
                      881,
                      886
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 34
                      },
                      "start": {
                        "column": 12,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    874,
                    886
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 34
                    },
                    "start": {
                      "column": 5,
                      "line": 34
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
                      "column": 23,
                      "line": 34
                    },
                    "start": {
                      "column": 18,
                      "line": 34
                    }
                  },
                  "range": [
                    887,
                    892
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      889,
                      892
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 34
                      },
                      "start": {
                        "column": 20,
                        "line": 34
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    895,
                    899
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 34
                    },
                    "start": {
                      "column": 26,
                      "line": 34
                    }
                  }
                },
                "range": [
                  873,
                  900
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      906,
                      909
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 35
                      },
                      "start": {
                        "column": 5,
                        "line": 35
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    906,
                    911
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 35
                    },
                    "start": {
                      "column": 5,
                      "line": 35
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
                      "column": 16,
                      "line": 35
                    },
                    "start": {
                      "column": 11,
                      "line": 35
                    }
                  },
                  "range": [
                    912,
                    917
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      914,
                      917
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 35
                      },
                      "start": {
                        "column": 13,
                        "line": 35
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  905,
                  918
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 35
                  },
                  "start": {
                    "column": 4,
                    "line": 35
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        924,
                        925
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 36
                        },
                        "start": {
                          "column": 5,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      923,
                      925
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 36
                      },
                      "start": {
                        "column": 4,
                        "line": 36
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      927,
                      930
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    927,
                    932
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
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
                      "line": 36
                    },
                    "start": {
                      "column": 14,
                      "line": 36
                    }
                  },
                  "range": [
                    933,
                    938
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      935,
                      938
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 36
                      },
                      "start": {
                        "column": 16,
                        "line": 36
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  923,
                  939
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
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        945,
                        946
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 37
                        },
                        "start": {
                          "column": 5,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      944,
                      946
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 37
                      },
                      "start": {
                        "column": 4,
                        "line": 37
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      948,
                      951
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 37
                      },
                      "start": {
                        "column": 8,
                        "line": 37
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    948,
                    953
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
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
                      "line": 37
                    },
                    "start": {
                      "column": 14,
                      "line": 37
                    }
                  },
                  "range": [
                    954,
                    959
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      956,
                      959
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 37
                      },
                      "start": {
                        "column": 16,
                        "line": 37
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    962,
                    966
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 37
                    },
                    "start": {
                      "column": 22,
                      "line": 37
                    }
                  }
                },
                "range": [
                  944,
                  967
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 37
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "range": [
                    973,
                    983
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 38
                    },
                    "start": {
                      "column": 5,
                      "line": 38
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
                      "line": 38
                    },
                    "start": {
                      "column": 16,
                      "line": 38
                    }
                  },
                  "range": [
                    984,
                    989
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      986,
                      989
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 38
                      },
                      "start": {
                        "column": 18,
                        "line": 38
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  972,
                  990
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 38
                  },
                  "start": {
                    "column": 4,
                    "line": 38
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        996,
                        997
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 39
                        },
                        "start": {
                          "column": 5,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      995,
                      997
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 39
                      },
                      "start": {
                        "column": 4,
                        "line": 39
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "range": [
                    999,
                    1009
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 39
                    },
                    "start": {
                      "column": 8,
                      "line": 39
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
                      "column": 24,
                      "line": 39
                    },
                    "start": {
                      "column": 19,
                      "line": 39
                    }
                  },
                  "range": [
                    1010,
                    1015
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1012,
                      1015
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 39
                      },
                      "start": {
                        "column": 21,
                        "line": 39
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  995,
                  1016
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 39
                  },
                  "start": {
                    "column": 4,
                    "line": 39
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1022,
                        1023
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 40
                        },
                        "start": {
                          "column": 5,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      1021,
                      1023
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 40
                      },
                      "start": {
                        "column": 4,
                        "line": 40
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "range": [
                    1025,
                    1035
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 40
                    },
                    "start": {
                      "column": 8,
                      "line": 40
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
                      "column": 24,
                      "line": 40
                    },
                    "start": {
                      "column": 19,
                      "line": 40
                    }
                  },
                  "range": [
                    1036,
                    1041
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1038,
                      1041
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 40
                      },
                      "start": {
                        "column": 21,
                        "line": 40
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    1044,
                    1048
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 40
                    },
                    "start": {
                      "column": 27,
                      "line": 40
                    }
                  }
                },
                "range": [
                  1021,
                  1049
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 40
                  },
                  "start": {
                    "column": 4,
                    "line": 40
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 41
              },
              "start": {
                "column": 13,
                "line": 26
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              646,
              647
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 26
              },
              "start": {
                "column": 11,
                "line": 26
              }
            }
          },
          "implements": [],
          "superClass": null,
          "range": [
            640,
            1051
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 41
            },
            "start": {
              "column": 5,
              "line": 26
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          635,
          1051
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        635,
        1052
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          1062,
          1494
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1069,
                    1070
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 44
                    },
                    "start": {
                      "column": 5,
                      "line": 44
                    }
                  }
                },
                "range": [
                  1068,
                  1070
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 44
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property\"",
              "value": "property",
              "range": [
                1072,
                1082
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 44
                },
                "start": {
                  "column": 8,
                  "line": 44
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
                  "column": 24,
                  "line": 44
                },
                "start": {
                  "column": 19,
                  "line": 44
                }
              },
              "range": [
                1083,
                1088
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1085,
                  1088
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 44
                  },
                  "start": {
                    "column": 21,
                    "line": 44
                  }
                }
              }
            },
            "value": null,
            "range": [
              1068,
              1089
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1095,
                    1096
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 45
                    },
                    "start": {
                      "column": 5,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1094,
                  1096
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 45
                  },
                  "start": {
                    "column": 4,
                    "line": 45
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  1098,
                  1104
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 45
                  },
                  "start": {
                    "column": 8,
                    "line": 45
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "range": [
                  1105,
                  1116
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 45
                  },
                  "start": {
                    "column": 15,
                    "line": 45
                  }
                }
              },
              "range": [
                1098,
                1116
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 45
                },
                "start": {
                  "column": 8,
                  "line": 45
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
                  "column": 32,
                  "line": 45
                },
                "start": {
                  "column": 27,
                  "line": 45
                }
              },
              "range": [
                1117,
                1122
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1119,
                  1122
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 45
                  },
                  "start": {
                    "column": 29,
                    "line": 45
                  }
                }
              }
            },
            "value": null,
            "range": [
              1094,
              1123
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1129,
                    1130
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 46
                    },
                    "start": {
                      "column": 5,
                      "line": 46
                    }
                  }
                },
                "range": [
                  1128,
                  1130
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 46
                  },
                  "start": {
                    "column": 4,
                    "line": 46
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property2\"",
              "value": "property2",
              "range": [
                1132,
                1143
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 46
                },
                "start": {
                  "column": 8,
                  "line": 46
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
                  "column": 25,
                  "line": 46
                },
                "start": {
                  "column": 20,
                  "line": 46
                }
              },
              "range": [
                1144,
                1149
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1146,
                  1149
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 46
                  },
                  "start": {
                    "column": 22,
                    "line": 46
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                1152,
                1153
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 46
                },
                "start": {
                  "column": 28,
                  "line": 46
                }
              }
            },
            "range": [
              1128,
              1154
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1160,
                    1161
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 47
                    },
                    "start": {
                      "column": 5,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1159,
                  1161
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 47
                  },
                  "start": {
                    "column": 4,
                    "line": 47
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  1163,
                  1169
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 47
                  },
                  "start": {
                    "column": 8,
                    "line": 47
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "range": [
                  1170,
                  1178
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 47
                  },
                  "start": {
                    "column": 15,
                    "line": 47
                  }
                }
              },
              "range": [
                1163,
                1178
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 47
                },
                "start": {
                  "column": 8,
                  "line": 47
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
                  "column": 29,
                  "line": 47
                },
                "start": {
                  "column": 24,
                  "line": 47
                }
              },
              "range": [
                1179,
                1184
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1181,
                  1184
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 47
                  },
                  "start": {
                    "column": 26,
                    "line": 47
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                1187,
                1191
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 47
                },
                "start": {
                  "column": 32,
                  "line": 47
                }
              }
            },
            "range": [
              1159,
              1192
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property3\"",
              "value": "property3",
              "range": [
                1198,
                1209
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 48
                },
                "start": {
                  "column": 5,
                  "line": 48
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
                  "column": 22,
                  "line": 48
                },
                "start": {
                  "column": 17,
                  "line": 48
                }
              },
              "range": [
                1210,
                1215
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1212,
                  1215
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 48
                  },
                  "start": {
                    "column": 19,
                    "line": 48
                  }
                }
              }
            },
            "value": null,
            "range": [
              1197,
              1216
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  1222,
                  1228
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 49
                  },
                  "start": {
                    "column": 5,
                    "line": 49
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "range": [
                  1229,
                  1247
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 49
                  },
                  "start": {
                    "column": 12,
                    "line": 49
                  }
                }
              },
              "range": [
                1222,
                1247
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 49
                },
                "start": {
                  "column": 5,
                  "line": 49
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
                  "column": 36,
                  "line": 49
                },
                "start": {
                  "column": 31,
                  "line": 49
                }
              },
              "range": [
                1248,
                1253
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1250,
                  1253
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 49
                  },
                  "start": {
                    "column": 33,
                    "line": 49
                  }
                }
              }
            },
            "value": null,
            "range": [
              1221,
              1254
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property4\"",
              "value": "property4",
              "range": [
                1260,
                1271
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 50
                },
                "start": {
                  "column": 5,
                  "line": 50
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
                  "column": 22,
                  "line": 50
                },
                "start": {
                  "column": 17,
                  "line": 50
                }
              },
              "range": [
                1272,
                1277
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1274,
                  1277
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 50
                  },
                  "start": {
                    "column": 19,
                    "line": 50
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                1280,
                1281
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 50
                },
                "start": {
                  "column": 25,
                  "line": 50
                }
              }
            },
            "range": [
              1259,
              1282
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  1288,
                  1294
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 51
                  },
                  "start": {
                    "column": 5,
                    "line": 51
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "range": [
                  1295,
                  1300
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 51
                  },
                  "start": {
                    "column": 12,
                    "line": 51
                  }
                }
              },
              "range": [
                1288,
                1300
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 51
                },
                "start": {
                  "column": 5,
                  "line": 51
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
                  "column": 23,
                  "line": 51
                },
                "start": {
                  "column": 18,
                  "line": 51
                }
              },
              "range": [
                1301,
                1306
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1303,
                  1306
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
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                1309,
                1313
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 51
                },
                "start": {
                  "column": 26,
                  "line": 51
                }
              }
            },
            "range": [
              1287,
              1314
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  1320,
                  1323
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 52
                  },
                  "start": {
                    "column": 5,
                    "line": 52
                  }
                }
              },
              "optional": false,
              "range": [
                1320,
                1325
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 52
                },
                "start": {
                  "column": 5,
                  "line": 52
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
                  "column": 16,
                  "line": 52
                },
                "start": {
                  "column": 11,
                  "line": 52
                }
              },
              "range": [
                1326,
                1331
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1328,
                  1331
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 52
                  },
                  "start": {
                    "column": 13,
                    "line": 52
                  }
                }
              }
            },
            "value": null,
            "range": [
              1319,
              1332
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1338,
                    1339
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 53
                    },
                    "start": {
                      "column": 5,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1337,
                  1339
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 53
                  },
                  "start": {
                    "column": 4,
                    "line": 53
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  1341,
                  1344
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
              "optional": false,
              "range": [
                1341,
                1346
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 53
                },
                "start": {
                  "column": 8,
                  "line": 53
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
                  "line": 53
                },
                "start": {
                  "column": 14,
                  "line": 53
                }
              },
              "range": [
                1347,
                1352
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1349,
                  1352
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 53
                  },
                  "start": {
                    "column": 16,
                    "line": 53
                  }
                }
              }
            },
            "value": null,
            "range": [
              1337,
              1353
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1359,
                    1360
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 54
                    },
                    "start": {
                      "column": 5,
                      "line": 54
                    }
                  }
                },
                "range": [
                  1358,
                  1360
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 54
                  },
                  "start": {
                    "column": 4,
                    "line": 54
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  1362,
                  1365
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 54
                  },
                  "start": {
                    "column": 8,
                    "line": 54
                  }
                }
              },
              "optional": false,
              "range": [
                1362,
                1367
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 54
                },
                "start": {
                  "column": 8,
                  "line": 54
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
                  "line": 54
                },
                "start": {
                  "column": 14,
                  "line": 54
                }
              },
              "range": [
                1368,
                1373
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1370,
                  1373
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 54
                  },
                  "start": {
                    "column": 16,
                    "line": 54
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                1376,
                1380
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 54
                },
                "start": {
                  "column": 22,
                  "line": 54
                }
              }
            },
            "range": [
              1358,
              1381
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "range": [
                1387,
                1397
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 55
                },
                "start": {
                  "column": 5,
                  "line": 55
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
                  "line": 55
                },
                "start": {
                  "column": 16,
                  "line": 55
                }
              },
              "range": [
                1398,
                1403
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1400,
                  1403
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 55
                  },
                  "start": {
                    "column": 18,
                    "line": 55
                  }
                }
              }
            },
            "value": null,
            "range": [
              1386,
              1404
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1410,
                    1411
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 56
                    },
                    "start": {
                      "column": 5,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1409,
                  1411
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 56
                  },
                  "start": {
                    "column": 4,
                    "line": 56
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "range": [
                1413,
                1423
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 56
                },
                "start": {
                  "column": 8,
                  "line": 56
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
                  "column": 24,
                  "line": 56
                },
                "start": {
                  "column": 19,
                  "line": 56
                }
              },
              "range": [
                1424,
                1429
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1426,
                  1429
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 56
                  },
                  "start": {
                    "column": 21,
                    "line": 56
                  }
                }
              }
            },
            "value": null,
            "range": [
              1409,
              1430
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1436,
                    1437
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 57
                    },
                    "start": {
                      "column": 5,
                      "line": 57
                    }
                  }
                },
                "range": [
                  1435,
                  1437
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 57
                  },
                  "start": {
                    "column": 4,
                    "line": 57
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "range": [
                1439,
                1449
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 57
                },
                "start": {
                  "column": 8,
                  "line": 57
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
                  "column": 24,
                  "line": 57
                },
                "start": {
                  "column": 19,
                  "line": 57
                }
              },
              "range": [
                1450,
                1455
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1452,
                  1455
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 57
                  },
                  "start": {
                    "column": 21,
                    "line": 57
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                1458,
                1462
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 57
                },
                "start": {
                  "column": 27,
                  "line": 57
                }
              }
            },
            "range": [
              1435,
              1463
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "\"some\"",
                "value": "some",
                "range": [
                  1469,
                  1475
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 58
                  },
                  "start": {
                    "column": 5,
                    "line": 58
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"method\"",
                "value": "method",
                "range": [
                  1478,
                  1486
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 58
                  },
                  "start": {
                    "column": 14,
                    "line": 58
                  }
                }
              },
              "range": [
                1469,
                1486
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 58
                },
                "start": {
                  "column": 5,
                  "line": 58
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                1487,
                1492
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1490,
                  1492
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 58
                  },
                  "start": {
                    "column": 26,
                    "line": 58
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
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
            "range": [
              1468,
              1492
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 58
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 59
          },
          "start": {
            "column": 8,
            "line": 43
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
          1060,
          1061
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 43
          },
          "start": {
            "column": 6,
            "line": 43
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1054,
        1494
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 59
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
        "type": "UnaryExpression",
        "argument": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              1509,
              1941
            ],
            "body": [
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1516,
                        1517
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 62
                        },
                        "start": {
                          "column": 5,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      1515,
                      1517
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 62
                      },
                      "start": {
                        "column": 4,
                        "line": 62
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property\"",
                  "value": "property",
                  "range": [
                    1519,
                    1529
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 62
                    },
                    "start": {
                      "column": 8,
                      "line": 62
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
                      "column": 24,
                      "line": 62
                    },
                    "start": {
                      "column": 19,
                      "line": 62
                    }
                  },
                  "range": [
                    1530,
                    1535
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1532,
                      1535
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 62
                      },
                      "start": {
                        "column": 21,
                        "line": 62
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  1515,
                  1536
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 62
                  },
                  "start": {
                    "column": 4,
                    "line": 62
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1542,
                        1543
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 63
                        },
                        "start": {
                          "column": 5,
                          "line": 63
                        }
                      }
                    },
                    "range": [
                      1541,
                      1543
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 63
                      },
                      "start": {
                        "column": 4,
                        "line": 63
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      1545,
                      1551
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
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "range": [
                      1552,
                      1563
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 63
                      },
                      "start": {
                        "column": 15,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    1545,
                    1563
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
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
                      "column": 32,
                      "line": 63
                    },
                    "start": {
                      "column": 27,
                      "line": 63
                    }
                  },
                  "range": [
                    1564,
                    1569
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1566,
                      1569
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 63
                      },
                      "start": {
                        "column": 29,
                        "line": 63
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  1541,
                  1570
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 63
                  },
                  "start": {
                    "column": 4,
                    "line": 63
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1576,
                        1577
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 64
                        },
                        "start": {
                          "column": 5,
                          "line": 64
                        }
                      }
                    },
                    "range": [
                      1575,
                      1577
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 64
                      },
                      "start": {
                        "column": 4,
                        "line": 64
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property2\"",
                  "value": "property2",
                  "range": [
                    1579,
                    1590
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 64
                    },
                    "start": {
                      "column": 8,
                      "line": 64
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
                      "column": 25,
                      "line": 64
                    },
                    "start": {
                      "column": 20,
                      "line": 64
                    }
                  },
                  "range": [
                    1591,
                    1596
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1593,
                      1596
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 64
                      },
                      "start": {
                        "column": 22,
                        "line": 64
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    1599,
                    1600
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 64
                    },
                    "start": {
                      "column": 28,
                      "line": 64
                    }
                  }
                },
                "range": [
                  1575,
                  1601
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 64
                  },
                  "start": {
                    "column": 4,
                    "line": 64
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1607,
                        1608
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 65
                        },
                        "start": {
                          "column": 5,
                          "line": 65
                        }
                      }
                    },
                    "range": [
                      1606,
                      1608
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 65
                      },
                      "start": {
                        "column": 4,
                        "line": 65
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      1610,
                      1616
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 65
                      },
                      "start": {
                        "column": 8,
                        "line": 65
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "range": [
                      1617,
                      1625
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 65
                      },
                      "start": {
                        "column": 15,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    1610,
                    1625
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 65
                    },
                    "start": {
                      "column": 8,
                      "line": 65
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
                      "column": 29,
                      "line": 65
                    },
                    "start": {
                      "column": 24,
                      "line": 65
                    }
                  },
                  "range": [
                    1626,
                    1631
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1628,
                      1631
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 65
                      },
                      "start": {
                        "column": 26,
                        "line": 65
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    1634,
                    1638
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 65
                    },
                    "start": {
                      "column": 32,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1606,
                  1639
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 65
                  },
                  "start": {
                    "column": 4,
                    "line": 65
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property3\"",
                  "value": "property3",
                  "range": [
                    1645,
                    1656
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 66
                    },
                    "start": {
                      "column": 5,
                      "line": 66
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
                      "column": 22,
                      "line": 66
                    },
                    "start": {
                      "column": 17,
                      "line": 66
                    }
                  },
                  "range": [
                    1657,
                    1662
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1659,
                      1662
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 66
                      },
                      "start": {
                        "column": 19,
                        "line": 66
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  1644,
                  1663
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 66
                  },
                  "start": {
                    "column": 4,
                    "line": 66
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      1669,
                      1675
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 67
                      },
                      "start": {
                        "column": 5,
                        "line": 67
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "range": [
                      1676,
                      1694
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 67
                      },
                      "start": {
                        "column": 12,
                        "line": 67
                      }
                    }
                  },
                  "range": [
                    1669,
                    1694
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 67
                    },
                    "start": {
                      "column": 5,
                      "line": 67
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
                      "column": 36,
                      "line": 67
                    },
                    "start": {
                      "column": 31,
                      "line": 67
                    }
                  },
                  "range": [
                    1695,
                    1700
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1697,
                      1700
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 67
                      },
                      "start": {
                        "column": 33,
                        "line": 67
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  1668,
                  1701
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 67
                  },
                  "start": {
                    "column": 4,
                    "line": 67
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property4\"",
                  "value": "property4",
                  "range": [
                    1707,
                    1718
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 68
                    },
                    "start": {
                      "column": 5,
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
                      "column": 22,
                      "line": 68
                    },
                    "start": {
                      "column": 17,
                      "line": 68
                    }
                  },
                  "range": [
                    1719,
                    1724
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1721,
                      1724
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 68
                      },
                      "start": {
                        "column": 19,
                        "line": 68
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    1727,
                    1728
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 68
                    },
                    "start": {
                      "column": 25,
                      "line": 68
                    }
                  }
                },
                "range": [
                  1706,
                  1729
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 68
                  },
                  "start": {
                    "column": 4,
                    "line": 68
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      1735,
                      1741
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 69
                      },
                      "start": {
                        "column": 5,
                        "line": 69
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "range": [
                      1742,
                      1747
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 69
                      },
                      "start": {
                        "column": 12,
                        "line": 69
                      }
                    }
                  },
                  "range": [
                    1735,
                    1747
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 69
                    },
                    "start": {
                      "column": 5,
                      "line": 69
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
                      "column": 23,
                      "line": 69
                    },
                    "start": {
                      "column": 18,
                      "line": 69
                    }
                  },
                  "range": [
                    1748,
                    1753
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1750,
                      1753
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 69
                      },
                      "start": {
                        "column": 20,
                        "line": 69
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    1756,
                    1760
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 69
                    },
                    "start": {
                      "column": 26,
                      "line": 69
                    }
                  }
                },
                "range": [
                  1734,
                  1761
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 69
                  },
                  "start": {
                    "column": 4,
                    "line": 69
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      1767,
                      1770
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 70
                      },
                      "start": {
                        "column": 5,
                        "line": 70
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1767,
                    1772
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 70
                    },
                    "start": {
                      "column": 5,
                      "line": 70
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
                      "column": 16,
                      "line": 70
                    },
                    "start": {
                      "column": 11,
                      "line": 70
                    }
                  },
                  "range": [
                    1773,
                    1778
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1775,
                      1778
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 70
                      },
                      "start": {
                        "column": 13,
                        "line": 70
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  1766,
                  1779
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 70
                  },
                  "start": {
                    "column": 4,
                    "line": 70
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1785,
                        1786
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 71
                        },
                        "start": {
                          "column": 5,
                          "line": 71
                        }
                      }
                    },
                    "range": [
                      1784,
                      1786
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 71
                      },
                      "start": {
                        "column": 4,
                        "line": 71
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      1788,
                      1791
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 71
                      },
                      "start": {
                        "column": 8,
                        "line": 71
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1788,
                    1793
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 71
                    },
                    "start": {
                      "column": 8,
                      "line": 71
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
                      "line": 71
                    },
                    "start": {
                      "column": 14,
                      "line": 71
                    }
                  },
                  "range": [
                    1794,
                    1799
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1796,
                      1799
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 71
                      },
                      "start": {
                        "column": 16,
                        "line": 71
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  1784,
                  1800
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 71
                  },
                  "start": {
                    "column": 4,
                    "line": 71
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1806,
                        1807
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 72
                        },
                        "start": {
                          "column": 5,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      1805,
                      1807
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 72
                      },
                      "start": {
                        "column": 4,
                        "line": 72
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      1809,
                      1812
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 72
                      },
                      "start": {
                        "column": 8,
                        "line": 72
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1809,
                    1814
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 72
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
                      "line": 72
                    },
                    "start": {
                      "column": 14,
                      "line": 72
                    }
                  },
                  "range": [
                    1815,
                    1820
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1817,
                      1820
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 72
                      },
                      "start": {
                        "column": 16,
                        "line": 72
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    1823,
                    1827
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 72
                    },
                    "start": {
                      "column": 22,
                      "line": 72
                    }
                  }
                },
                "range": [
                  1805,
                  1828
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 72
                  },
                  "start": {
                    "column": 4,
                    "line": 72
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "range": [
                    1834,
                    1844
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 73
                    },
                    "start": {
                      "column": 5,
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
                      "column": 21,
                      "line": 73
                    },
                    "start": {
                      "column": 16,
                      "line": 73
                    }
                  },
                  "range": [
                    1845,
                    1850
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1847,
                      1850
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 73
                      },
                      "start": {
                        "column": 18,
                        "line": 73
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  1833,
                  1851
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 73
                  },
                  "start": {
                    "column": 4,
                    "line": 73
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1857,
                        1858
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 74
                        },
                        "start": {
                          "column": 5,
                          "line": 74
                        }
                      }
                    },
                    "range": [
                      1856,
                      1858
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 74
                      },
                      "start": {
                        "column": 4,
                        "line": 74
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "range": [
                    1860,
                    1870
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 74
                    },
                    "start": {
                      "column": 8,
                      "line": 74
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
                      "column": 24,
                      "line": 74
                    },
                    "start": {
                      "column": 19,
                      "line": 74
                    }
                  },
                  "range": [
                    1871,
                    1876
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1873,
                      1876
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 74
                      },
                      "start": {
                        "column": 21,
                        "line": 74
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  1856,
                  1877
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 74
                  },
                  "start": {
                    "column": 4,
                    "line": 74
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1883,
                        1884
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 75
                        },
                        "start": {
                          "column": 5,
                          "line": 75
                        }
                      }
                    },
                    "range": [
                      1882,
                      1884
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 75
                      },
                      "start": {
                        "column": 4,
                        "line": 75
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "range": [
                    1886,
                    1896
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 75
                    },
                    "start": {
                      "column": 8,
                      "line": 75
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
                      "column": 24,
                      "line": 75
                    },
                    "start": {
                      "column": 19,
                      "line": 75
                    }
                  },
                  "range": [
                    1897,
                    1902
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      1899,
                      1902
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 75
                      },
                      "start": {
                        "column": 21,
                        "line": 75
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    1905,
                    1909
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 75
                    },
                    "start": {
                      "column": 27,
                      "line": 75
                    }
                  }
                },
                "range": [
                  1882,
                  1910
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 75
                  },
                  "start": {
                    "column": 4,
                    "line": 75
                  }
                }
              },
              {
                "type": "MethodDefinition",
                "computed": true,
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "\"some\"",
                    "value": "some",
                    "range": [
                      1916,
                      1922
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 76
                      },
                      "start": {
                        "column": 5,
                        "line": 76
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"method\"",
                    "value": "method",
                    "range": [
                      1925,
                      1933
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 76
                      },
                      "start": {
                        "column": 14,
                        "line": 76
                      }
                    }
                  },
                  "range": [
                    1916,
                    1933
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 76
                    },
                    "start": {
                      "column": 5,
                      "line": 76
                    }
                  }
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1934,
                    1939
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1937,
                      1939
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 76
                      },
                      "start": {
                        "column": 26,
                        "line": 76
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 76
                    },
                    "start": {
                      "column": 23,
                      "line": 76
                    }
                  }
                },
                "range": [
                  1915,
                  1939
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 76
                  },
                  "start": {
                    "column": 4,
                    "line": 76
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 77
              },
              "start": {
                "column": 13,
                "line": 61
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "range": [
              1507,
              1508
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 61
              },
              "start": {
                "column": 11,
                "line": 61
              }
            }
          },
          "implements": [],
          "superClass": null,
          "range": [
            1501,
            1941
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 77
            },
            "start": {
              "column": 5,
              "line": 61
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          1496,
          1941
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 77
          },
          "start": {
            "column": 0,
            "line": 61
          }
        }
      },
      "range": [
        1496,
        1942
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 77
        },
        "start": {
          "column": 0,
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
          1952,
          2384
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1959,
                    1960
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 80
                    },
                    "start": {
                      "column": 5,
                      "line": 80
                    }
                  }
                },
                "range": [
                  1958,
                  1960
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 80
                  },
                  "start": {
                    "column": 4,
                    "line": 80
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property\"",
              "value": "property",
              "range": [
                1962,
                1972
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 80
                },
                "start": {
                  "column": 8,
                  "line": 80
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
                  "column": 24,
                  "line": 80
                },
                "start": {
                  "column": 19,
                  "line": 80
                }
              },
              "range": [
                1973,
                1978
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  1975,
                  1978
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 80
                  },
                  "start": {
                    "column": 21,
                    "line": 80
                  }
                }
              }
            },
            "value": null,
            "range": [
              1958,
              1979
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 80
              },
              "start": {
                "column": 4,
                "line": 80
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1985,
                    1986
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 81
                    },
                    "start": {
                      "column": 5,
                      "line": 81
                    }
                  }
                },
                "range": [
                  1984,
                  1986
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 81
                  },
                  "start": {
                    "column": 4,
                    "line": 81
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  1988,
                  1994
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 81
                  },
                  "start": {
                    "column": 8,
                    "line": 81
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "range": [
                  1995,
                  2006
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 81
                  },
                  "start": {
                    "column": 15,
                    "line": 81
                  }
                }
              },
              "range": [
                1988,
                2006
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 81
                },
                "start": {
                  "column": 8,
                  "line": 81
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
                  "column": 32,
                  "line": 81
                },
                "start": {
                  "column": 27,
                  "line": 81
                }
              },
              "range": [
                2007,
                2012
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2009,
                  2012
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 81
                  },
                  "start": {
                    "column": 29,
                    "line": 81
                  }
                }
              }
            },
            "value": null,
            "range": [
              1984,
              2013
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 81
              },
              "start": {
                "column": 4,
                "line": 81
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2019,
                    2020
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 82
                    },
                    "start": {
                      "column": 5,
                      "line": 82
                    }
                  }
                },
                "range": [
                  2018,
                  2020
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 82
                  },
                  "start": {
                    "column": 4,
                    "line": 82
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property2\"",
              "value": "property2",
              "range": [
                2022,
                2033
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 82
                },
                "start": {
                  "column": 8,
                  "line": 82
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
                  "column": 25,
                  "line": 82
                },
                "start": {
                  "column": 20,
                  "line": 82
                }
              },
              "range": [
                2034,
                2039
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2036,
                  2039
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 82
                  },
                  "start": {
                    "column": 22,
                    "line": 82
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                2042,
                2043
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 82
                },
                "start": {
                  "column": 28,
                  "line": 82
                }
              }
            },
            "range": [
              2018,
              2044
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 82
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2050,
                    2051
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 83
                    },
                    "start": {
                      "column": 5,
                      "line": 83
                    }
                  }
                },
                "range": [
                  2049,
                  2051
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 83
                  },
                  "start": {
                    "column": 4,
                    "line": 83
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  2053,
                  2059
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
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "range": [
                  2060,
                  2068
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 83
                  },
                  "start": {
                    "column": 15,
                    "line": 83
                  }
                }
              },
              "range": [
                2053,
                2068
              ],
              "loc": {
                "end": {
                  "column": 23,
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
                  "column": 29,
                  "line": 83
                },
                "start": {
                  "column": 24,
                  "line": 83
                }
              },
              "range": [
                2069,
                2074
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2071,
                  2074
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 83
                  },
                  "start": {
                    "column": 26,
                    "line": 83
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                2077,
                2081
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 83
                },
                "start": {
                  "column": 32,
                  "line": 83
                }
              }
            },
            "range": [
              2049,
              2082
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 83
              },
              "start": {
                "column": 4,
                "line": 83
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property3\"",
              "value": "property3",
              "range": [
                2088,
                2099
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 84
                },
                "start": {
                  "column": 5,
                  "line": 84
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
                  "column": 22,
                  "line": 84
                },
                "start": {
                  "column": 17,
                  "line": 84
                }
              },
              "range": [
                2100,
                2105
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2102,
                  2105
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 84
                  },
                  "start": {
                    "column": 19,
                    "line": 84
                  }
                }
              }
            },
            "value": null,
            "range": [
              2087,
              2106
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  2112,
                  2118
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 85
                  },
                  "start": {
                    "column": 5,
                    "line": 85
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "range": [
                  2119,
                  2137
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 85
                  },
                  "start": {
                    "column": 12,
                    "line": 85
                  }
                }
              },
              "range": [
                2112,
                2137
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 85
                },
                "start": {
                  "column": 5,
                  "line": 85
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
                  "column": 36,
                  "line": 85
                },
                "start": {
                  "column": 31,
                  "line": 85
                }
              },
              "range": [
                2138,
                2143
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2140,
                  2143
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 85
                  },
                  "start": {
                    "column": 33,
                    "line": 85
                  }
                }
              }
            },
            "value": null,
            "range": [
              2111,
              2144
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property4\"",
              "value": "property4",
              "range": [
                2150,
                2161
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 86
                },
                "start": {
                  "column": 5,
                  "line": 86
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
                  "column": 22,
                  "line": 86
                },
                "start": {
                  "column": 17,
                  "line": 86
                }
              },
              "range": [
                2162,
                2167
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2164,
                  2167
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 86
                  },
                  "start": {
                    "column": 19,
                    "line": 86
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                2170,
                2171
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 86
                },
                "start": {
                  "column": 25,
                  "line": 86
                }
              }
            },
            "range": [
              2149,
              2172
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 86
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  2178,
                  2184
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 87
                  },
                  "start": {
                    "column": 5,
                    "line": 87
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "range": [
                  2185,
                  2190
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 87
                  },
                  "start": {
                    "column": 12,
                    "line": 87
                  }
                }
              },
              "range": [
                2178,
                2190
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 87
                },
                "start": {
                  "column": 5,
                  "line": 87
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
                  "column": 23,
                  "line": 87
                },
                "start": {
                  "column": 18,
                  "line": 87
                }
              },
              "range": [
                2191,
                2196
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2193,
                  2196
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 87
                  },
                  "start": {
                    "column": 20,
                    "line": 87
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                2199,
                2203
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 87
                },
                "start": {
                  "column": 26,
                  "line": 87
                }
              }
            },
            "range": [
              2177,
              2204
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  2210,
                  2213
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 88
                  },
                  "start": {
                    "column": 5,
                    "line": 88
                  }
                }
              },
              "optional": false,
              "range": [
                2210,
                2215
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 88
                },
                "start": {
                  "column": 5,
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
                  "column": 16,
                  "line": 88
                },
                "start": {
                  "column": 11,
                  "line": 88
                }
              },
              "range": [
                2216,
                2221
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2218,
                  2221
                ],
                "loc": {
                  "end": {
                    "column": 16,
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
              2209,
              2222
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 88
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2228,
                    2229
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 89
                    },
                    "start": {
                      "column": 5,
                      "line": 89
                    }
                  }
                },
                "range": [
                  2227,
                  2229
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 89
                  },
                  "start": {
                    "column": 4,
                    "line": 89
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  2231,
                  2234
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 89
                  },
                  "start": {
                    "column": 8,
                    "line": 89
                  }
                }
              },
              "optional": false,
              "range": [
                2231,
                2236
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 89
                },
                "start": {
                  "column": 8,
                  "line": 89
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
                  "line": 89
                },
                "start": {
                  "column": 14,
                  "line": 89
                }
              },
              "range": [
                2237,
                2242
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2239,
                  2242
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 89
                  },
                  "start": {
                    "column": 16,
                    "line": 89
                  }
                }
              }
            },
            "value": null,
            "range": [
              2227,
              2243
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 89
              },
              "start": {
                "column": 4,
                "line": 89
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2249,
                    2250
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 90
                    },
                    "start": {
                      "column": 5,
                      "line": 90
                    }
                  }
                },
                "range": [
                  2248,
                  2250
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 90
                  },
                  "start": {
                    "column": 4,
                    "line": 90
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  2252,
                  2255
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 90
                  },
                  "start": {
                    "column": 8,
                    "line": 90
                  }
                }
              },
              "optional": false,
              "range": [
                2252,
                2257
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 90
                },
                "start": {
                  "column": 8,
                  "line": 90
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
                  "line": 90
                },
                "start": {
                  "column": 14,
                  "line": 90
                }
              },
              "range": [
                2258,
                2263
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2260,
                  2263
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 90
                  },
                  "start": {
                    "column": 16,
                    "line": 90
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                2266,
                2270
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 90
                },
                "start": {
                  "column": 22,
                  "line": 90
                }
              }
            },
            "range": [
              2248,
              2271
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 90
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "\"some\"",
                "value": "some",
                "range": [
                  2277,
                  2283
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 91
                  },
                  "start": {
                    "column": 5,
                    "line": 91
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"method\"",
                "value": "method",
                "range": [
                  2286,
                  2294
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 91
                  },
                  "start": {
                    "column": 14,
                    "line": 91
                  }
                }
              },
              "range": [
                2277,
                2294
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 91
                },
                "start": {
                  "column": 5,
                  "line": 91
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                2295,
                2300
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  2298,
                  2300
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 91
                  },
                  "start": {
                    "column": 26,
                    "line": 91
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 91
                },
                "start": {
                  "column": 23,
                  "line": 91
                }
              }
            },
            "range": [
              2276,
              2300
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 91
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "range": [
                2306,
                2316
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 92
                },
                "start": {
                  "column": 5,
                  "line": 92
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
                  "line": 92
                },
                "start": {
                  "column": 16,
                  "line": 92
                }
              },
              "range": [
                2317,
                2322
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2319,
                  2322
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 92
                  },
                  "start": {
                    "column": 18,
                    "line": 92
                  }
                }
              }
            },
            "value": null,
            "range": [
              2305,
              2323
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 92
              },
              "start": {
                "column": 4,
                "line": 92
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2329,
                    2330
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 93
                    },
                    "start": {
                      "column": 5,
                      "line": 93
                    }
                  }
                },
                "range": [
                  2328,
                  2330
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 93
                  },
                  "start": {
                    "column": 4,
                    "line": 93
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "range": [
                2332,
                2342
              ],
              "loc": {
                "end": {
                  "column": 18,
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
                  "column": 24,
                  "line": 93
                },
                "start": {
                  "column": 19,
                  "line": 93
                }
              },
              "range": [
                2343,
                2348
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2345,
                  2348
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 93
                  },
                  "start": {
                    "column": 21,
                    "line": 93
                  }
                }
              }
            },
            "value": null,
            "range": [
              2328,
              2349
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 93
              },
              "start": {
                "column": 4,
                "line": 93
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2355,
                    2356
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 94
                    },
                    "start": {
                      "column": 5,
                      "line": 94
                    }
                  }
                },
                "range": [
                  2354,
                  2356
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 94
                  },
                  "start": {
                    "column": 4,
                    "line": 94
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "range": [
                2358,
                2368
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 94
                },
                "start": {
                  "column": 8,
                  "line": 94
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
                  "column": 24,
                  "line": 94
                },
                "start": {
                  "column": 19,
                  "line": 94
                }
              },
              "range": [
                2369,
                2374
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2371,
                  2374
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 94
                  },
                  "start": {
                    "column": 21,
                    "line": 94
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                2377,
                2381
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 94
                },
                "start": {
                  "column": 27,
                  "line": 94
                }
              }
            },
            "range": [
              2354,
              2382
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 94
              },
              "start": {
                "column": 4,
                "line": 94
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 95
          },
          "start": {
            "column": 8,
            "line": 79
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "range": [
          1950,
          1951
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 79
          },
          "start": {
            "column": 6,
            "line": 79
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        1944,
        2384
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 95
        },
        "start": {
          "column": 0,
          "line": 79
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              2399,
              2831
            ],
            "body": [
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2406,
                        2407
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 98
                        },
                        "start": {
                          "column": 5,
                          "line": 98
                        }
                      }
                    },
                    "range": [
                      2405,
                      2407
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 98
                      },
                      "start": {
                        "column": 4,
                        "line": 98
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property\"",
                  "value": "property",
                  "range": [
                    2409,
                    2419
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
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
                      "column": 24,
                      "line": 98
                    },
                    "start": {
                      "column": 19,
                      "line": 98
                    }
                  },
                  "range": [
                    2420,
                    2425
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2422,
                      2425
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 98
                      },
                      "start": {
                        "column": 21,
                        "line": 98
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  2405,
                  2426
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 98
                  },
                  "start": {
                    "column": 4,
                    "line": 98
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2432,
                        2433
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 99
                        },
                        "start": {
                          "column": 5,
                          "line": 99
                        }
                      }
                    },
                    "range": [
                      2431,
                      2433
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 99
                      },
                      "start": {
                        "column": 4,
                        "line": 99
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      2435,
                      2441
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 99
                      },
                      "start": {
                        "column": 8,
                        "line": 99
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "range": [
                      2442,
                      2453
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 99
                      },
                      "start": {
                        "column": 15,
                        "line": 99
                      }
                    }
                  },
                  "range": [
                    2435,
                    2453
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 99
                    },
                    "start": {
                      "column": 8,
                      "line": 99
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
                      "column": 32,
                      "line": 99
                    },
                    "start": {
                      "column": 27,
                      "line": 99
                    }
                  },
                  "range": [
                    2454,
                    2459
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2456,
                      2459
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 99
                      },
                      "start": {
                        "column": 29,
                        "line": 99
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  2431,
                  2460
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 99
                  },
                  "start": {
                    "column": 4,
                    "line": 99
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2466,
                        2467
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 100
                        },
                        "start": {
                          "column": 5,
                          "line": 100
                        }
                      }
                    },
                    "range": [
                      2465,
                      2467
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 100
                      },
                      "start": {
                        "column": 4,
                        "line": 100
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property2\"",
                  "value": "property2",
                  "range": [
                    2469,
                    2480
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 100
                    },
                    "start": {
                      "column": 8,
                      "line": 100
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
                      "column": 25,
                      "line": 100
                    },
                    "start": {
                      "column": 20,
                      "line": 100
                    }
                  },
                  "range": [
                    2481,
                    2486
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2483,
                      2486
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 100
                      },
                      "start": {
                        "column": 22,
                        "line": 100
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    2489,
                    2490
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 100
                    },
                    "start": {
                      "column": 28,
                      "line": 100
                    }
                  }
                },
                "range": [
                  2465,
                  2491
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 100
                  },
                  "start": {
                    "column": 4,
                    "line": 100
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2497,
                        2498
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 101
                        },
                        "start": {
                          "column": 5,
                          "line": 101
                        }
                      }
                    },
                    "range": [
                      2496,
                      2498
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 101
                      },
                      "start": {
                        "column": 4,
                        "line": 101
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      2500,
                      2506
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 101
                      },
                      "start": {
                        "column": 8,
                        "line": 101
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "range": [
                      2507,
                      2515
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 101
                      },
                      "start": {
                        "column": 15,
                        "line": 101
                      }
                    }
                  },
                  "range": [
                    2500,
                    2515
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 101
                    },
                    "start": {
                      "column": 8,
                      "line": 101
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
                      "column": 29,
                      "line": 101
                    },
                    "start": {
                      "column": 24,
                      "line": 101
                    }
                  },
                  "range": [
                    2516,
                    2521
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2518,
                      2521
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
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    2524,
                    2528
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 101
                    },
                    "start": {
                      "column": 32,
                      "line": 101
                    }
                  }
                },
                "range": [
                  2496,
                  2529
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 101
                  },
                  "start": {
                    "column": 4,
                    "line": 101
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property3\"",
                  "value": "property3",
                  "range": [
                    2535,
                    2546
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 102
                    },
                    "start": {
                      "column": 5,
                      "line": 102
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
                      "column": 22,
                      "line": 102
                    },
                    "start": {
                      "column": 17,
                      "line": 102
                    }
                  },
                  "range": [
                    2547,
                    2552
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2549,
                      2552
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 102
                      },
                      "start": {
                        "column": 19,
                        "line": 102
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  2534,
                  2553
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 102
                  },
                  "start": {
                    "column": 4,
                    "line": 102
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      2559,
                      2565
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 103
                      },
                      "start": {
                        "column": 5,
                        "line": 103
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "range": [
                      2566,
                      2584
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 103
                      },
                      "start": {
                        "column": 12,
                        "line": 103
                      }
                    }
                  },
                  "range": [
                    2559,
                    2584
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 103
                    },
                    "start": {
                      "column": 5,
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
                      "column": 36,
                      "line": 103
                    },
                    "start": {
                      "column": 31,
                      "line": 103
                    }
                  },
                  "range": [
                    2585,
                    2590
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2587,
                      2590
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 103
                      },
                      "start": {
                        "column": 33,
                        "line": 103
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  2558,
                  2591
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 103
                  },
                  "start": {
                    "column": 4,
                    "line": 103
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property4\"",
                  "value": "property4",
                  "range": [
                    2597,
                    2608
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 104
                    },
                    "start": {
                      "column": 5,
                      "line": 104
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
                      "column": 22,
                      "line": 104
                    },
                    "start": {
                      "column": 17,
                      "line": 104
                    }
                  },
                  "range": [
                    2609,
                    2614
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2611,
                      2614
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 104
                      },
                      "start": {
                        "column": 19,
                        "line": 104
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    2617,
                    2618
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 104
                    },
                    "start": {
                      "column": 25,
                      "line": 104
                    }
                  }
                },
                "range": [
                  2596,
                  2619
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 104
                  },
                  "start": {
                    "column": 4,
                    "line": 104
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      2625,
                      2631
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 105
                      },
                      "start": {
                        "column": 5,
                        "line": 105
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "range": [
                      2632,
                      2637
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 105
                      },
                      "start": {
                        "column": 12,
                        "line": 105
                      }
                    }
                  },
                  "range": [
                    2625,
                    2637
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 105
                    },
                    "start": {
                      "column": 5,
                      "line": 105
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
                      "column": 23,
                      "line": 105
                    },
                    "start": {
                      "column": 18,
                      "line": 105
                    }
                  },
                  "range": [
                    2638,
                    2643
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2640,
                      2643
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 105
                      },
                      "start": {
                        "column": 20,
                        "line": 105
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    2646,
                    2650
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 105
                    },
                    "start": {
                      "column": 26,
                      "line": 105
                    }
                  }
                },
                "range": [
                  2624,
                  2651
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 105
                  },
                  "start": {
                    "column": 4,
                    "line": 105
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      2657,
                      2660
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 106
                      },
                      "start": {
                        "column": 5,
                        "line": 106
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2657,
                    2662
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 106
                    },
                    "start": {
                      "column": 5,
                      "line": 106
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
                      "column": 16,
                      "line": 106
                    },
                    "start": {
                      "column": 11,
                      "line": 106
                    }
                  },
                  "range": [
                    2663,
                    2668
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2665,
                      2668
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 106
                      },
                      "start": {
                        "column": 13,
                        "line": 106
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  2656,
                  2669
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 106
                  },
                  "start": {
                    "column": 4,
                    "line": 106
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2675,
                        2676
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 107
                        },
                        "start": {
                          "column": 5,
                          "line": 107
                        }
                      }
                    },
                    "range": [
                      2674,
                      2676
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 107
                      },
                      "start": {
                        "column": 4,
                        "line": 107
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      2678,
                      2681
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 107
                      },
                      "start": {
                        "column": 8,
                        "line": 107
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2678,
                    2683
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 107
                    },
                    "start": {
                      "column": 8,
                      "line": 107
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
                      "line": 107
                    },
                    "start": {
                      "column": 14,
                      "line": 107
                    }
                  },
                  "range": [
                    2684,
                    2689
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2686,
                      2689
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 107
                      },
                      "start": {
                        "column": 16,
                        "line": 107
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  2674,
                  2690
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 107
                  },
                  "start": {
                    "column": 4,
                    "line": 107
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2696,
                        2697
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 108
                        },
                        "start": {
                          "column": 5,
                          "line": 108
                        }
                      }
                    },
                    "range": [
                      2695,
                      2697
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 108
                      },
                      "start": {
                        "column": 4,
                        "line": 108
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      2699,
                      2702
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 108
                      },
                      "start": {
                        "column": 8,
                        "line": 108
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    2699,
                    2704
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 108
                    },
                    "start": {
                      "column": 8,
                      "line": 108
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
                      "line": 108
                    },
                    "start": {
                      "column": 14,
                      "line": 108
                    }
                  },
                  "range": [
                    2705,
                    2710
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2707,
                      2710
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 108
                      },
                      "start": {
                        "column": 16,
                        "line": 108
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    2713,
                    2717
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 108
                    },
                    "start": {
                      "column": 22,
                      "line": 108
                    }
                  }
                },
                "range": [
                  2695,
                  2718
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 108
                  },
                  "start": {
                    "column": 4,
                    "line": 108
                  }
                }
              },
              {
                "type": "MethodDefinition",
                "computed": true,
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "\"some\"",
                    "value": "some",
                    "range": [
                      2724,
                      2730
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 109
                      },
                      "start": {
                        "column": 5,
                        "line": 109
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"method\"",
                    "value": "method",
                    "range": [
                      2733,
                      2741
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 109
                      },
                      "start": {
                        "column": 14,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    2724,
                    2741
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 109
                    },
                    "start": {
                      "column": 5,
                      "line": 109
                    }
                  }
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    2742,
                    2747
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      2745,
                      2747
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 109
                      },
                      "start": {
                        "column": 26,
                        "line": 109
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 109
                    },
                    "start": {
                      "column": 23,
                      "line": 109
                    }
                  }
                },
                "range": [
                  2723,
                  2747
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 109
                  },
                  "start": {
                    "column": 4,
                    "line": 109
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "range": [
                    2753,
                    2763
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 110
                    },
                    "start": {
                      "column": 5,
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
                      "column": 21,
                      "line": 110
                    },
                    "start": {
                      "column": 16,
                      "line": 110
                    }
                  },
                  "range": [
                    2764,
                    2769
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2766,
                      2769
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 110
                      },
                      "start": {
                        "column": 18,
                        "line": 110
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  2752,
                  2770
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 110
                  },
                  "start": {
                    "column": 4,
                    "line": 110
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2776,
                        2777
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 111
                        },
                        "start": {
                          "column": 5,
                          "line": 111
                        }
                      }
                    },
                    "range": [
                      2775,
                      2777
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 111
                      },
                      "start": {
                        "column": 4,
                        "line": 111
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "range": [
                    2779,
                    2789
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 111
                    },
                    "start": {
                      "column": 8,
                      "line": 111
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
                      "column": 24,
                      "line": 111
                    },
                    "start": {
                      "column": 19,
                      "line": 111
                    }
                  },
                  "range": [
                    2790,
                    2795
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2792,
                      2795
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 111
                      },
                      "start": {
                        "column": 21,
                        "line": 111
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  2775,
                  2796
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 111
                  },
                  "start": {
                    "column": 4,
                    "line": 111
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2802,
                        2803
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 112
                        },
                        "start": {
                          "column": 5,
                          "line": 112
                        }
                      }
                    },
                    "range": [
                      2801,
                      2803
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 112
                      },
                      "start": {
                        "column": 4,
                        "line": 112
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "range": [
                    2805,
                    2815
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 112
                    },
                    "start": {
                      "column": 8,
                      "line": 112
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
                      "column": 24,
                      "line": 112
                    },
                    "start": {
                      "column": 19,
                      "line": 112
                    }
                  },
                  "range": [
                    2816,
                    2821
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      2818,
                      2821
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 112
                      },
                      "start": {
                        "column": 21,
                        "line": 112
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    2824,
                    2828
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 112
                    },
                    "start": {
                      "column": 27,
                      "line": 112
                    }
                  }
                },
                "range": [
                  2801,
                  2829
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 112
                  },
                  "start": {
                    "column": 4,
                    "line": 112
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 113
              },
              "start": {
                "column": 13,
                "line": 97
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "F",
            "optional": false,
            "range": [
              2397,
              2398
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 97
              },
              "start": {
                "column": 11,
                "line": 97
              }
            }
          },
          "implements": [],
          "superClass": null,
          "range": [
            2391,
            2831
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 113
            },
            "start": {
              "column": 5,
              "line": 97
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          2386,
          2831
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 113
          },
          "start": {
            "column": 0,
            "line": 97
          }
        }
      },
      "range": [
        2386,
        2832
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 113
        },
        "start": {
          "column": 0,
          "line": 97
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          2842,
          3304
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2849,
                    2850
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 116
                    },
                    "start": {
                      "column": 5,
                      "line": 116
                    }
                  }
                },
                "range": [
                  2848,
                  2850
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 116
                  },
                  "start": {
                    "column": 4,
                    "line": 116
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property\"",
              "value": "property",
              "range": [
                2852,
                2862
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 116
                },
                "start": {
                  "column": 8,
                  "line": 116
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
                  "column": 24,
                  "line": 116
                },
                "start": {
                  "column": 19,
                  "line": 116
                }
              },
              "range": [
                2863,
                2868
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2865,
                  2868
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 116
                  },
                  "start": {
                    "column": 21,
                    "line": 116
                  }
                }
              }
            },
            "value": null,
            "range": [
              2848,
              2869
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 116
              },
              "start": {
                "column": 4,
                "line": 116
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2875,
                    2876
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 117
                    },
                    "start": {
                      "column": 5,
                      "line": 117
                    }
                  }
                },
                "range": [
                  2874,
                  2876
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 117
                  },
                  "start": {
                    "column": 4,
                    "line": 117
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  2878,
                  2884
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 117
                  },
                  "start": {
                    "column": 8,
                    "line": 117
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "range": [
                  2885,
                  2896
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 117
                  },
                  "start": {
                    "column": 15,
                    "line": 117
                  }
                }
              },
              "range": [
                2878,
                2896
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 117
                },
                "start": {
                  "column": 8,
                  "line": 117
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
                  "column": 32,
                  "line": 117
                },
                "start": {
                  "column": 27,
                  "line": 117
                }
              },
              "range": [
                2897,
                2902
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2899,
                  2902
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 117
                  },
                  "start": {
                    "column": 29,
                    "line": 117
                  }
                }
              }
            },
            "value": null,
            "range": [
              2874,
              2903
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 117
              },
              "start": {
                "column": 4,
                "line": 117
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2909,
                    2910
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 118
                    },
                    "start": {
                      "column": 5,
                      "line": 118
                    }
                  }
                },
                "range": [
                  2908,
                  2910
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 118
                  },
                  "start": {
                    "column": 4,
                    "line": 118
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property2\"",
              "value": "property2",
              "range": [
                2912,
                2923
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 118
                },
                "start": {
                  "column": 8,
                  "line": 118
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
                  "column": 25,
                  "line": 118
                },
                "start": {
                  "column": 20,
                  "line": 118
                }
              },
              "range": [
                2924,
                2929
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2926,
                  2929
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 118
                  },
                  "start": {
                    "column": 22,
                    "line": 118
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                2932,
                2933
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 118
                },
                "start": {
                  "column": 28,
                  "line": 118
                }
              }
            },
            "range": [
              2908,
              2934
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 118
              },
              "start": {
                "column": 4,
                "line": 118
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    2940,
                    2941
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 119
                    },
                    "start": {
                      "column": 5,
                      "line": 119
                    }
                  }
                },
                "range": [
                  2939,
                  2941
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 119
                  },
                  "start": {
                    "column": 4,
                    "line": 119
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  2943,
                  2949
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 119
                  },
                  "start": {
                    "column": 8,
                    "line": 119
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "range": [
                  2950,
                  2958
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 119
                  },
                  "start": {
                    "column": 15,
                    "line": 119
                  }
                }
              },
              "range": [
                2943,
                2958
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
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 119
                },
                "start": {
                  "column": 24,
                  "line": 119
                }
              },
              "range": [
                2959,
                2964
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2961,
                  2964
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 119
                  },
                  "start": {
                    "column": 26,
                    "line": 119
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                2967,
                2971
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 119
                },
                "start": {
                  "column": 32,
                  "line": 119
                }
              }
            },
            "range": [
              2939,
              2972
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 119
              },
              "start": {
                "column": 4,
                "line": 119
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property3\"",
              "value": "property3",
              "range": [
                2978,
                2989
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 120
                },
                "start": {
                  "column": 5,
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
                  "column": 22,
                  "line": 120
                },
                "start": {
                  "column": 17,
                  "line": 120
                }
              },
              "range": [
                2990,
                2995
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  2992,
                  2995
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 120
                  },
                  "start": {
                    "column": 19,
                    "line": 120
                  }
                }
              }
            },
            "value": null,
            "range": [
              2977,
              2996
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 120
              },
              "start": {
                "column": 4,
                "line": 120
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  3002,
                  3008
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 121
                  },
                  "start": {
                    "column": 5,
                    "line": 121
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "range": [
                  3009,
                  3027
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 121
                  },
                  "start": {
                    "column": 12,
                    "line": 121
                  }
                }
              },
              "range": [
                3002,
                3027
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 121
                },
                "start": {
                  "column": 5,
                  "line": 121
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
                  "column": 36,
                  "line": 121
                },
                "start": {
                  "column": 31,
                  "line": 121
                }
              },
              "range": [
                3028,
                3033
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3030,
                  3033
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 121
                  },
                  "start": {
                    "column": 33,
                    "line": 121
                  }
                }
              }
            },
            "value": null,
            "range": [
              3001,
              3034
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 121
              },
              "start": {
                "column": 4,
                "line": 121
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property4\"",
              "value": "property4",
              "range": [
                3040,
                3051
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 122
                },
                "start": {
                  "column": 5,
                  "line": 122
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
                  "column": 22,
                  "line": 122
                },
                "start": {
                  "column": 17,
                  "line": 122
                }
              },
              "range": [
                3052,
                3057
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3054,
                  3057
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 122
                  },
                  "start": {
                    "column": 19,
                    "line": 122
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                3060,
                3061
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 122
                },
                "start": {
                  "column": 25,
                  "line": 122
                }
              }
            },
            "range": [
              3039,
              3062
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 122
              },
              "start": {
                "column": 4,
                "line": 122
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  3068,
                  3074
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 123
                  },
                  "start": {
                    "column": 5,
                    "line": 123
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "range": [
                  3075,
                  3080
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 123
                  },
                  "start": {
                    "column": 12,
                    "line": 123
                  }
                }
              },
              "range": [
                3068,
                3080
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 123
                },
                "start": {
                  "column": 5,
                  "line": 123
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
                  "column": 23,
                  "line": 123
                },
                "start": {
                  "column": 18,
                  "line": 123
                }
              },
              "range": [
                3081,
                3086
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3083,
                  3086
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 123
                  },
                  "start": {
                    "column": 20,
                    "line": 123
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                3089,
                3093
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 123
                },
                "start": {
                  "column": 26,
                  "line": 123
                }
              }
            },
            "range": [
              3067,
              3094
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 123
              },
              "start": {
                "column": 4,
                "line": 123
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  3100,
                  3103
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 124
                  },
                  "start": {
                    "column": 5,
                    "line": 124
                  }
                }
              },
              "optional": false,
              "range": [
                3100,
                3105
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 124
                },
                "start": {
                  "column": 5,
                  "line": 124
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
                  "column": 16,
                  "line": 124
                },
                "start": {
                  "column": 11,
                  "line": 124
                }
              },
              "range": [
                3106,
                3111
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3108,
                  3111
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 124
                  },
                  "start": {
                    "column": 13,
                    "line": 124
                  }
                }
              }
            },
            "value": null,
            "range": [
              3099,
              3112
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 124
              },
              "start": {
                "column": 4,
                "line": 124
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    3118,
                    3119
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 125
                    },
                    "start": {
                      "column": 5,
                      "line": 125
                    }
                  }
                },
                "range": [
                  3117,
                  3119
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 125
                  },
                  "start": {
                    "column": 4,
                    "line": 125
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  3121,
                  3124
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
              "range": [
                3121,
                3126
              ],
              "loc": {
                "end": {
                  "column": 13,
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
                  "column": 19,
                  "line": 125
                },
                "start": {
                  "column": 14,
                  "line": 125
                }
              },
              "range": [
                3127,
                3132
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3129,
                  3132
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 125
                  },
                  "start": {
                    "column": 16,
                    "line": 125
                  }
                }
              }
            },
            "value": null,
            "range": [
              3117,
              3133
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 125
              },
              "start": {
                "column": 4,
                "line": 125
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    3139,
                    3140
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 126
                    },
                    "start": {
                      "column": 5,
                      "line": 126
                    }
                  }
                },
                "range": [
                  3138,
                  3140
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 126
                  },
                  "start": {
                    "column": 4,
                    "line": 126
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  3142,
                  3145
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 126
                  },
                  "start": {
                    "column": 8,
                    "line": 126
                  }
                }
              },
              "optional": false,
              "range": [
                3142,
                3147
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 126
                },
                "start": {
                  "column": 8,
                  "line": 126
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
                  "line": 126
                },
                "start": {
                  "column": 14,
                  "line": 126
                }
              },
              "range": [
                3148,
                3153
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3150,
                  3153
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 126
                  },
                  "start": {
                    "column": 16,
                    "line": 126
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                3156,
                3160
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 126
                },
                "start": {
                  "column": 22,
                  "line": 126
                }
              }
            },
            "range": [
              3138,
              3161
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 126
              },
              "start": {
                "column": 4,
                "line": 126
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "\"some\"",
                "value": "some",
                "range": [
                  3167,
                  3173
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 127
                  },
                  "start": {
                    "column": 5,
                    "line": 127
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"method\"",
                "value": "method",
                "range": [
                  3176,
                  3184
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 127
                  },
                  "start": {
                    "column": 14,
                    "line": 127
                  }
                }
              },
              "range": [
                3167,
                3184
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 127
                },
                "start": {
                  "column": 5,
                  "line": 127
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                3185,
                3190
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  3188,
                  3190
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 127
                  },
                  "start": {
                    "column": 26,
                    "line": 127
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 127
                },
                "start": {
                  "column": 23,
                  "line": 127
                }
              }
            },
            "range": [
              3166,
              3190
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 127
              },
              "start": {
                "column": 4,
                "line": 127
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "range": [
                3196,
                3206
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 128
                },
                "start": {
                  "column": 5,
                  "line": 128
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
                  "line": 128
                },
                "start": {
                  "column": 16,
                  "line": 128
                }
              },
              "range": [
                3207,
                3212
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3209,
                  3212
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 128
                  },
                  "start": {
                    "column": 18,
                    "line": 128
                  }
                }
              }
            },
            "value": null,
            "range": [
              3195,
              3213
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 128
              },
              "start": {
                "column": 4,
                "line": 128
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    3219,
                    3220
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 129
                    },
                    "start": {
                      "column": 5,
                      "line": 129
                    }
                  }
                },
                "range": [
                  3218,
                  3220
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 129
                  },
                  "start": {
                    "column": 4,
                    "line": 129
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "range": [
                3222,
                3232
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 129
                },
                "start": {
                  "column": 8,
                  "line": 129
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
                  "column": 24,
                  "line": 129
                },
                "start": {
                  "column": 19,
                  "line": 129
                }
              },
              "range": [
                3233,
                3238
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3235,
                  3238
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 129
                  },
                  "start": {
                    "column": 21,
                    "line": 129
                  }
                }
              }
            },
            "value": null,
            "range": [
              3218,
              3239
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 129
              },
              "start": {
                "column": 4,
                "line": 129
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "\"some\"",
                "value": "some",
                "range": [
                  3245,
                  3251
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 130
                  },
                  "start": {
                    "column": 5,
                    "line": 130
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"method2\"",
                "value": "method2",
                "range": [
                  3254,
                  3263
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 130
                  },
                  "start": {
                    "column": 14,
                    "line": 130
                  }
                }
              },
              "range": [
                3245,
                3263
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 130
                },
                "start": {
                  "column": 5,
                  "line": 130
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                3264,
                3269
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  3267,
                  3269
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 130
                  },
                  "start": {
                    "column": 27,
                    "line": 130
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 130
                },
                "start": {
                  "column": 24,
                  "line": 130
                }
              }
            },
            "range": [
              3244,
              3269
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 130
              },
              "start": {
                "column": 4,
                "line": 130
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    3275,
                    3276
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 131
                    },
                    "start": {
                      "column": 5,
                      "line": 131
                    }
                  }
                },
                "range": [
                  3274,
                  3276
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 131
                  },
                  "start": {
                    "column": 4,
                    "line": 131
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "range": [
                3278,
                3288
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 131
                },
                "start": {
                  "column": 8,
                  "line": 131
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
                  "column": 24,
                  "line": 131
                },
                "start": {
                  "column": 19,
                  "line": 131
                }
              },
              "range": [
                3289,
                3294
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3291,
                  3294
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 131
                  },
                  "start": {
                    "column": 21,
                    "line": 131
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                3297,
                3301
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 131
                },
                "start": {
                  "column": 27,
                  "line": 131
                }
              }
            },
            "range": [
              3274,
              3302
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 131
              },
              "start": {
                "column": 4,
                "line": 131
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 132
          },
          "start": {
            "column": 8,
            "line": 115
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "range": [
          2840,
          2841
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 115
          },
          "start": {
            "column": 6,
            "line": 115
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        2834,
        3304
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 132
        },
        "start": {
          "column": 0,
          "line": 115
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              3319,
              3781
            ],
            "body": [
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        3326,
                        3327
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 135
                        },
                        "start": {
                          "column": 5,
                          "line": 135
                        }
                      }
                    },
                    "range": [
                      3325,
                      3327
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 135
                      },
                      "start": {
                        "column": 4,
                        "line": 135
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property\"",
                  "value": "property",
                  "range": [
                    3329,
                    3339
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
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
                      "column": 24,
                      "line": 135
                    },
                    "start": {
                      "column": 19,
                      "line": 135
                    }
                  },
                  "range": [
                    3340,
                    3345
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      3342,
                      3345
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 135
                      },
                      "start": {
                        "column": 21,
                        "line": 135
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  3325,
                  3346
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 135
                  },
                  "start": {
                    "column": 4,
                    "line": 135
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        3352,
                        3353
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 136
                        },
                        "start": {
                          "column": 5,
                          "line": 136
                        }
                      }
                    },
                    "range": [
                      3351,
                      3353
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 136
                      },
                      "start": {
                        "column": 4,
                        "line": 136
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      3355,
                      3361
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 136
                      },
                      "start": {
                        "column": 8,
                        "line": 136
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "range": [
                      3362,
                      3373
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 136
                      },
                      "start": {
                        "column": 15,
                        "line": 136
                      }
                    }
                  },
                  "range": [
                    3355,
                    3373
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 136
                    },
                    "start": {
                      "column": 8,
                      "line": 136
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
                      "column": 32,
                      "line": 136
                    },
                    "start": {
                      "column": 27,
                      "line": 136
                    }
                  },
                  "range": [
                    3374,
                    3379
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      3376,
                      3379
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 136
                      },
                      "start": {
                        "column": 29,
                        "line": 136
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  3351,
                  3380
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 136
                  },
                  "start": {
                    "column": 4,
                    "line": 136
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        3386,
                        3387
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 137
                        },
                        "start": {
                          "column": 5,
                          "line": 137
                        }
                      }
                    },
                    "range": [
                      3385,
                      3387
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 137
                      },
                      "start": {
                        "column": 4,
                        "line": 137
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property2\"",
                  "value": "property2",
                  "range": [
                    3389,
                    3400
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 137
                    },
                    "start": {
                      "column": 8,
                      "line": 137
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
                      "column": 25,
                      "line": 137
                    },
                    "start": {
                      "column": 20,
                      "line": 137
                    }
                  },
                  "range": [
                    3401,
                    3406
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      3403,
                      3406
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 137
                      },
                      "start": {
                        "column": 22,
                        "line": 137
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    3409,
                    3410
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 137
                    },
                    "start": {
                      "column": 28,
                      "line": 137
                    }
                  }
                },
                "range": [
                  3385,
                  3411
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 137
                  },
                  "start": {
                    "column": 4,
                    "line": 137
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        3417,
                        3418
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 138
                        },
                        "start": {
                          "column": 5,
                          "line": 138
                        }
                      }
                    },
                    "range": [
                      3416,
                      3418
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 138
                      },
                      "start": {
                        "column": 4,
                        "line": 138
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      3420,
                      3426
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 138
                      },
                      "start": {
                        "column": 8,
                        "line": 138
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "range": [
                      3427,
                      3435
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 138
                      },
                      "start": {
                        "column": 15,
                        "line": 138
                      }
                    }
                  },
                  "range": [
                    3420,
                    3435
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 138
                    },
                    "start": {
                      "column": 8,
                      "line": 138
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
                      "column": 29,
                      "line": 138
                    },
                    "start": {
                      "column": 24,
                      "line": 138
                    }
                  },
                  "range": [
                    3436,
                    3441
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      3438,
                      3441
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
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    3444,
                    3448
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 138
                    },
                    "start": {
                      "column": 32,
                      "line": 138
                    }
                  }
                },
                "range": [
                  3416,
                  3449
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 138
                  },
                  "start": {
                    "column": 4,
                    "line": 138
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property3\"",
                  "value": "property3",
                  "range": [
                    3455,
                    3466
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 139
                    },
                    "start": {
                      "column": 5,
                      "line": 139
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
                      "column": 22,
                      "line": 139
                    },
                    "start": {
                      "column": 17,
                      "line": 139
                    }
                  },
                  "range": [
                    3467,
                    3472
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      3469,
                      3472
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 139
                      },
                      "start": {
                        "column": 19,
                        "line": 139
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  3454,
                  3473
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 139
                  },
                  "start": {
                    "column": 4,
                    "line": 139
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      3479,
                      3485
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 140
                      },
                      "start": {
                        "column": 5,
                        "line": 140
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "range": [
                      3486,
                      3504
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 140
                      },
                      "start": {
                        "column": 12,
                        "line": 140
                      }
                    }
                  },
                  "range": [
                    3479,
                    3504
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 140
                    },
                    "start": {
                      "column": 5,
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
                      "column": 36,
                      "line": 140
                    },
                    "start": {
                      "column": 31,
                      "line": 140
                    }
                  },
                  "range": [
                    3505,
                    3510
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      3507,
                      3510
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 140
                      },
                      "start": {
                        "column": 33,
                        "line": 140
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  3478,
                  3511
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 140
                  },
                  "start": {
                    "column": 4,
                    "line": 140
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property4\"",
                  "value": "property4",
                  "range": [
                    3517,
                    3528
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 141
                    },
                    "start": {
                      "column": 5,
                      "line": 141
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
                      "column": 22,
                      "line": 141
                    },
                    "start": {
                      "column": 17,
                      "line": 141
                    }
                  },
                  "range": [
                    3529,
                    3534
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      3531,
                      3534
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 141
                      },
                      "start": {
                        "column": 19,
                        "line": 141
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    3537,
                    3538
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 141
                    },
                    "start": {
                      "column": 25,
                      "line": 141
                    }
                  }
                },
                "range": [
                  3516,
                  3539
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 141
                  },
                  "start": {
                    "column": 4,
                    "line": 141
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      3545,
                      3551
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 142
                      },
                      "start": {
                        "column": 5,
                        "line": 142
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "range": [
                      3552,
                      3557
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 142
                      },
                      "start": {
                        "column": 12,
                        "line": 142
                      }
                    }
                  },
                  "range": [
                    3545,
                    3557
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 142
                    },
                    "start": {
                      "column": 5,
                      "line": 142
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
                      "column": 23,
                      "line": 142
                    },
                    "start": {
                      "column": 18,
                      "line": 142
                    }
                  },
                  "range": [
                    3558,
                    3563
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      3560,
                      3563
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 142
                      },
                      "start": {
                        "column": 20,
                        "line": 142
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    3566,
                    3570
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 142
                    },
                    "start": {
                      "column": 26,
                      "line": 142
                    }
                  }
                },
                "range": [
                  3544,
                  3571
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 142
                  },
                  "start": {
                    "column": 4,
                    "line": 142
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      3577,
                      3580
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 143
                      },
                      "start": {
                        "column": 5,
                        "line": 143
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    3577,
                    3582
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 143
                    },
                    "start": {
                      "column": 5,
                      "line": 143
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
                      "column": 16,
                      "line": 143
                    },
                    "start": {
                      "column": 11,
                      "line": 143
                    }
                  },
                  "range": [
                    3583,
                    3588
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      3585,
                      3588
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 143
                      },
                      "start": {
                        "column": 13,
                        "line": 143
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  3576,
                  3589
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 143
                  },
                  "start": {
                    "column": 4,
                    "line": 143
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        3595,
                        3596
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 144
                        },
                        "start": {
                          "column": 5,
                          "line": 144
                        }
                      }
                    },
                    "range": [
                      3594,
                      3596
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 144
                      },
                      "start": {
                        "column": 4,
                        "line": 144
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      3598,
                      3601
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 144
                      },
                      "start": {
                        "column": 8,
                        "line": 144
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    3598,
                    3603
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 144
                    },
                    "start": {
                      "column": 8,
                      "line": 144
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
                      "line": 144
                    },
                    "start": {
                      "column": 14,
                      "line": 144
                    }
                  },
                  "range": [
                    3604,
                    3609
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      3606,
                      3609
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 144
                      },
                      "start": {
                        "column": 16,
                        "line": 144
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  3594,
                  3610
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 144
                  },
                  "start": {
                    "column": 4,
                    "line": 144
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        3616,
                        3617
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 145
                        },
                        "start": {
                          "column": 5,
                          "line": 145
                        }
                      }
                    },
                    "range": [
                      3615,
                      3617
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 145
                      },
                      "start": {
                        "column": 4,
                        "line": 145
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      3619,
                      3622
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
                  "range": [
                    3619,
                    3624
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
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
                      "column": 19,
                      "line": 145
                    },
                    "start": {
                      "column": 14,
                      "line": 145
                    }
                  },
                  "range": [
                    3625,
                    3630
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      3627,
                      3630
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 145
                      },
                      "start": {
                        "column": 16,
                        "line": 145
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    3633,
                    3637
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 145
                    },
                    "start": {
                      "column": 22,
                      "line": 145
                    }
                  }
                },
                "range": [
                  3615,
                  3638
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 145
                  },
                  "start": {
                    "column": 4,
                    "line": 145
                  }
                }
              },
              {
                "type": "MethodDefinition",
                "computed": true,
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "\"some\"",
                    "value": "some",
                    "range": [
                      3644,
                      3650
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 146
                      },
                      "start": {
                        "column": 5,
                        "line": 146
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"method\"",
                    "value": "method",
                    "range": [
                      3653,
                      3661
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 146
                      },
                      "start": {
                        "column": 14,
                        "line": 146
                      }
                    }
                  },
                  "range": [
                    3644,
                    3661
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 146
                    },
                    "start": {
                      "column": 5,
                      "line": 146
                    }
                  }
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    3662,
                    3667
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3665,
                      3667
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 146
                      },
                      "start": {
                        "column": 26,
                        "line": 146
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 146
                    },
                    "start": {
                      "column": 23,
                      "line": 146
                    }
                  }
                },
                "range": [
                  3643,
                  3667
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 146
                  },
                  "start": {
                    "column": 4,
                    "line": 146
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "range": [
                    3673,
                    3683
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 147
                    },
                    "start": {
                      "column": 5,
                      "line": 147
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
                      "line": 147
                    },
                    "start": {
                      "column": 16,
                      "line": 147
                    }
                  },
                  "range": [
                    3684,
                    3689
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      3686,
                      3689
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 147
                      },
                      "start": {
                        "column": 18,
                        "line": 147
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  3672,
                  3690
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 147
                  },
                  "start": {
                    "column": 4,
                    "line": 147
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        3696,
                        3697
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 148
                        },
                        "start": {
                          "column": 5,
                          "line": 148
                        }
                      }
                    },
                    "range": [
                      3695,
                      3697
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 148
                      },
                      "start": {
                        "column": 4,
                        "line": 148
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "range": [
                    3699,
                    3709
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 148
                    },
                    "start": {
                      "column": 8,
                      "line": 148
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
                      "column": 24,
                      "line": 148
                    },
                    "start": {
                      "column": 19,
                      "line": 148
                    }
                  },
                  "range": [
                    3710,
                    3715
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      3712,
                      3715
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 148
                      },
                      "start": {
                        "column": 21,
                        "line": 148
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  3695,
                  3716
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 148
                  },
                  "start": {
                    "column": 4,
                    "line": 148
                  }
                }
              },
              {
                "type": "MethodDefinition",
                "computed": true,
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "\"some\"",
                    "value": "some",
                    "range": [
                      3722,
                      3728
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 149
                      },
                      "start": {
                        "column": 5,
                        "line": 149
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"method2\"",
                    "value": "method2",
                    "range": [
                      3731,
                      3740
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 149
                      },
                      "start": {
                        "column": 14,
                        "line": 149
                      }
                    }
                  },
                  "range": [
                    3722,
                    3740
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 149
                    },
                    "start": {
                      "column": 5,
                      "line": 149
                    }
                  }
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    3741,
                    3746
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      3744,
                      3746
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 149
                      },
                      "start": {
                        "column": 27,
                        "line": 149
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 149
                    },
                    "start": {
                      "column": 24,
                      "line": 149
                    }
                  }
                },
                "range": [
                  3721,
                  3746
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 149
                  },
                  "start": {
                    "column": 4,
                    "line": 149
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        3752,
                        3753
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 150
                        },
                        "start": {
                          "column": 5,
                          "line": 150
                        }
                      }
                    },
                    "range": [
                      3751,
                      3753
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 150
                      },
                      "start": {
                        "column": 4,
                        "line": 150
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "range": [
                    3755,
                    3765
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
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
                      "column": 24,
                      "line": 150
                    },
                    "start": {
                      "column": 19,
                      "line": 150
                    }
                  },
                  "range": [
                    3766,
                    3771
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      3768,
                      3771
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 150
                      },
                      "start": {
                        "column": 21,
                        "line": 150
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    3774,
                    3778
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 150
                    },
                    "start": {
                      "column": 27,
                      "line": 150
                    }
                  }
                },
                "range": [
                  3751,
                  3779
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 150
                  },
                  "start": {
                    "column": 4,
                    "line": 150
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 151
              },
              "start": {
                "column": 13,
                "line": 134
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "H",
            "optional": false,
            "range": [
              3317,
              3318
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 134
              },
              "start": {
                "column": 11,
                "line": 134
              }
            }
          },
          "implements": [],
          "superClass": null,
          "range": [
            3311,
            3781
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 151
            },
            "start": {
              "column": 5,
              "line": 134
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          3306,
          3781
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 151
          },
          "start": {
            "column": 0,
            "line": 134
          }
        }
      },
      "range": [
        3306,
        3782
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 151
        },
        "start": {
          "column": 0,
          "line": 134
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          3792,
          4257
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    3799,
                    3800
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 154
                    },
                    "start": {
                      "column": 5,
                      "line": 154
                    }
                  }
                },
                "range": [
                  3798,
                  3800
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 154
                  },
                  "start": {
                    "column": 4,
                    "line": 154
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property\"",
              "value": "property",
              "range": [
                3802,
                3812
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 154
                },
                "start": {
                  "column": 8,
                  "line": 154
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
                  "column": 24,
                  "line": 154
                },
                "start": {
                  "column": 19,
                  "line": 154
                }
              },
              "range": [
                3813,
                3818
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3815,
                  3818
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 154
                  },
                  "start": {
                    "column": 21,
                    "line": 154
                  }
                }
              }
            },
            "value": null,
            "range": [
              3798,
              3819
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 154
              },
              "start": {
                "column": 4,
                "line": 154
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    3825,
                    3826
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 155
                    },
                    "start": {
                      "column": 5,
                      "line": 155
                    }
                  }
                },
                "range": [
                  3824,
                  3826
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 155
                  },
                  "start": {
                    "column": 4,
                    "line": 155
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  3828,
                  3834
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
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toStringTag",
                "optional": false,
                "range": [
                  3835,
                  3846
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 155
                  },
                  "start": {
                    "column": 15,
                    "line": 155
                  }
                }
              },
              "range": [
                3828,
                3846
              ],
              "loc": {
                "end": {
                  "column": 26,
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
                  "column": 32,
                  "line": 155
                },
                "start": {
                  "column": 27,
                  "line": 155
                }
              },
              "range": [
                3847,
                3852
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3849,
                  3852
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 155
                  },
                  "start": {
                    "column": 29,
                    "line": 155
                  }
                }
              }
            },
            "value": null,
            "range": [
              3824,
              3853
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 155
              },
              "start": {
                "column": 4,
                "line": 155
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    3859,
                    3860
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 156
                    },
                    "start": {
                      "column": 5,
                      "line": 156
                    }
                  }
                },
                "range": [
                  3858,
                  3860
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 156
                  },
                  "start": {
                    "column": 4,
                    "line": 156
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property2\"",
              "value": "property2",
              "range": [
                3862,
                3873
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 156
                },
                "start": {
                  "column": 8,
                  "line": 156
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
                  "column": 25,
                  "line": 156
                },
                "start": {
                  "column": 20,
                  "line": 156
                }
              },
              "range": [
                3874,
                3879
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3876,
                  3879
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 156
                  },
                  "start": {
                    "column": 22,
                    "line": 156
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                3882,
                3883
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 156
                },
                "start": {
                  "column": 28,
                  "line": 156
                }
              }
            },
            "range": [
              3858,
              3884
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 156
              },
              "start": {
                "column": 4,
                "line": 156
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    3890,
                    3891
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 157
                    },
                    "start": {
                      "column": 5,
                      "line": 157
                    }
                  }
                },
                "range": [
                  3889,
                  3891
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 157
                  },
                  "start": {
                    "column": 4,
                    "line": 157
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  3893,
                  3899
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 157
                  },
                  "start": {
                    "column": 8,
                    "line": 157
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "range": [
                  3900,
                  3908
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 157
                  },
                  "start": {
                    "column": 15,
                    "line": 157
                  }
                }
              },
              "range": [
                3893,
                3908
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 157
                },
                "start": {
                  "column": 8,
                  "line": 157
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
                  "column": 29,
                  "line": 157
                },
                "start": {
                  "column": 24,
                  "line": 157
                }
              },
              "range": [
                3909,
                3914
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3911,
                  3914
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 157
                  },
                  "start": {
                    "column": 26,
                    "line": 157
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                3917,
                3921
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 157
                },
                "start": {
                  "column": 32,
                  "line": 157
                }
              }
            },
            "range": [
              3889,
              3922
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 157
              },
              "start": {
                "column": 4,
                "line": 157
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property3\"",
              "value": "property3",
              "range": [
                3928,
                3939
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 158
                },
                "start": {
                  "column": 5,
                  "line": 158
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
                  "column": 22,
                  "line": 158
                },
                "start": {
                  "column": 17,
                  "line": 158
                }
              },
              "range": [
                3940,
                3945
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3942,
                  3945
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 158
                  },
                  "start": {
                    "column": 19,
                    "line": 158
                  }
                }
              }
            },
            "value": null,
            "range": [
              3927,
              3946
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 158
              },
              "start": {
                "column": 4,
                "line": 158
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  3952,
                  3958
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 159
                  },
                  "start": {
                    "column": 5,
                    "line": 159
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "isConcatSpreadable",
                "optional": false,
                "range": [
                  3959,
                  3977
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 159
                  },
                  "start": {
                    "column": 12,
                    "line": 159
                  }
                }
              },
              "range": [
                3952,
                3977
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 159
                },
                "start": {
                  "column": 5,
                  "line": 159
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
                  "column": 36,
                  "line": 159
                },
                "start": {
                  "column": 31,
                  "line": 159
                }
              },
              "range": [
                3978,
                3983
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  3980,
                  3983
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 159
                  },
                  "start": {
                    "column": 33,
                    "line": 159
                  }
                }
              }
            },
            "value": null,
            "range": [
              3951,
              3984
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 159
              },
              "start": {
                "column": 4,
                "line": 159
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "raw": "\"property4\"",
              "value": "property4",
              "range": [
                3990,
                4001
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 160
                },
                "start": {
                  "column": 5,
                  "line": 160
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
                  "column": 22,
                  "line": 160
                },
                "start": {
                  "column": 17,
                  "line": 160
                }
              },
              "range": [
                4002,
                4007
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  4004,
                  4007
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 160
                  },
                  "start": {
                    "column": 19,
                    "line": 160
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                4010,
                4011
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 160
                },
                "start": {
                  "column": 25,
                  "line": 160
                }
              }
            },
            "range": [
              3989,
              4012
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 160
              },
              "start": {
                "column": 4,
                "line": 160
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "range": [
                  4018,
                  4024
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 161
                  },
                  "start": {
                    "column": 5,
                    "line": 161
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "match",
                "optional": false,
                "range": [
                  4025,
                  4030
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 161
                  },
                  "start": {
                    "column": 12,
                    "line": 161
                  }
                }
              },
              "range": [
                4018,
                4030
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 161
                },
                "start": {
                  "column": 5,
                  "line": 161
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
                  "column": 23,
                  "line": 161
                },
                "start": {
                  "column": 18,
                  "line": 161
                }
              },
              "range": [
                4031,
                4036
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  4033,
                  4036
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 161
                  },
                  "start": {
                    "column": 20,
                    "line": 161
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                4039,
                4043
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 161
                },
                "start": {
                  "column": 26,
                  "line": 161
                }
              }
            },
            "range": [
              4017,
              4044
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 161
              },
              "start": {
                "column": 4,
                "line": 161
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  4050,
                  4053
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 162
                  },
                  "start": {
                    "column": 5,
                    "line": 162
                  }
                }
              },
              "optional": false,
              "range": [
                4050,
                4055
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 162
                },
                "start": {
                  "column": 5,
                  "line": 162
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
                  "column": 16,
                  "line": 162
                },
                "start": {
                  "column": 11,
                  "line": 162
                }
              },
              "range": [
                4056,
                4061
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  4058,
                  4061
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 162
                  },
                  "start": {
                    "column": 13,
                    "line": 162
                  }
                }
              }
            },
            "value": null,
            "range": [
              4049,
              4062
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 162
              },
              "start": {
                "column": 4,
                "line": 162
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    4068,
                    4069
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 163
                    },
                    "start": {
                      "column": 5,
                      "line": 163
                    }
                  }
                },
                "range": [
                  4067,
                  4069
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 163
                  },
                  "start": {
                    "column": 4,
                    "line": 163
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  4071,
                  4074
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 163
                  },
                  "start": {
                    "column": 8,
                    "line": 163
                  }
                }
              },
              "optional": false,
              "range": [
                4071,
                4076
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 163
                },
                "start": {
                  "column": 8,
                  "line": 163
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
                  "line": 163
                },
                "start": {
                  "column": 14,
                  "line": 163
                }
              },
              "range": [
                4077,
                4082
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  4079,
                  4082
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 163
                  },
                  "start": {
                    "column": 16,
                    "line": 163
                  }
                }
              }
            },
            "value": null,
            "range": [
              4067,
              4083
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 163
              },
              "start": {
                "column": 4,
                "line": 163
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    4089,
                    4090
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 164
                    },
                    "start": {
                      "column": 5,
                      "line": 164
                    }
                  }
                },
                "range": [
                  4088,
                  4090
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 164
                  },
                  "start": {
                    "column": 4,
                    "line": 164
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  4092,
                  4095
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 164
                  },
                  "start": {
                    "column": 8,
                    "line": 164
                  }
                }
              },
              "optional": false,
              "range": [
                4092,
                4097
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 164
                },
                "start": {
                  "column": 8,
                  "line": 164
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
                  "line": 164
                },
                "start": {
                  "column": 14,
                  "line": 164
                }
              },
              "range": [
                4098,
                4103
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  4100,
                  4103
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 164
                  },
                  "start": {
                    "column": 16,
                    "line": 164
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                4106,
                4110
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 164
                },
                "start": {
                  "column": 22,
                  "line": 164
                }
              }
            },
            "range": [
              4088,
              4111
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 164
              },
              "start": {
                "column": 4,
                "line": 164
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    4117,
                    4118
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 165
                    },
                    "start": {
                      "column": 5,
                      "line": 165
                    }
                  }
                },
                "range": [
                  4116,
                  4118
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 165
                  },
                  "start": {
                    "column": 4,
                    "line": 165
                  }
                }
              }
            ],
            "key": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "\"some\"",
                "value": "some",
                "range": [
                  4120,
                  4126
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 165
                  },
                  "start": {
                    "column": 8,
                    "line": 165
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"method\"",
                "value": "method",
                "range": [
                  4129,
                  4137
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 165
                  },
                  "start": {
                    "column": 17,
                    "line": 165
                  }
                }
              },
              "range": [
                4120,
                4137
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 165
                },
                "start": {
                  "column": 8,
                  "line": 165
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                4138,
                4143
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  4141,
                  4143
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 165
                  },
                  "start": {
                    "column": 29,
                    "line": 165
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 165
                },
                "start": {
                  "column": 26,
                  "line": 165
                }
              }
            },
            "range": [
              4116,
              4143
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 165
              },
              "start": {
                "column": 4,
                "line": 165
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameA",
              "optional": false,
              "range": [
                4149,
                4159
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 166
                },
                "start": {
                  "column": 5,
                  "line": 166
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
                  "line": 166
                },
                "start": {
                  "column": 16,
                  "line": 166
                }
              },
              "range": [
                4160,
                4165
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  4162,
                  4165
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 166
                  },
                  "start": {
                    "column": 18,
                    "line": 166
                  }
                }
              }
            },
            "value": null,
            "range": [
              4148,
              4166
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 166
              },
              "start": {
                "column": 4,
                "line": 166
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    4172,
                    4173
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 167
                    },
                    "start": {
                      "column": 5,
                      "line": 167
                    }
                  }
                },
                "range": [
                  4171,
                  4173
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 167
                  },
                  "start": {
                    "column": 4,
                    "line": 167
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameB",
              "optional": false,
              "range": [
                4175,
                4185
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 167
                },
                "start": {
                  "column": 8,
                  "line": 167
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
                  "column": 24,
                  "line": 167
                },
                "start": {
                  "column": 19,
                  "line": 167
                }
              },
              "range": [
                4186,
                4191
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  4188,
                  4191
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 167
                  },
                  "start": {
                    "column": 21,
                    "line": 167
                  }
                }
              }
            },
            "value": null,
            "range": [
              4171,
              4192
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 167
              },
              "start": {
                "column": 4,
                "line": 167
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "raw": "\"some\"",
                "value": "some",
                "range": [
                  4198,
                  4204
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 168
                  },
                  "start": {
                    "column": 5,
                    "line": 168
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"method2\"",
                "value": "method2",
                "range": [
                  4207,
                  4216
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 168
                  },
                  "start": {
                    "column": 14,
                    "line": 168
                  }
                }
              },
              "range": [
                4198,
                4216
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 168
                },
                "start": {
                  "column": 5,
                  "line": 168
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                4217,
                4222
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  4220,
                  4222
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 168
                  },
                  "start": {
                    "column": 27,
                    "line": 168
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 168
                },
                "start": {
                  "column": 24,
                  "line": 168
                }
              }
            },
            "range": [
              4197,
              4222
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 168
              },
              "start": {
                "column": 4,
                "line": 168
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": true,
            "declare": false,
            "decorators": [
              {
                "type": "Decorator",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    4228,
                    4229
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 169
                    },
                    "start": {
                      "column": 5,
                      "line": 169
                    }
                  }
                },
                "range": [
                  4227,
                  4229
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 169
                  },
                  "start": {
                    "column": 4,
                    "line": 169
                  }
                }
              }
            ],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldNameC",
              "optional": false,
              "range": [
                4231,
                4241
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 169
                },
                "start": {
                  "column": 8,
                  "line": 169
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
                  "column": 24,
                  "line": 169
                },
                "start": {
                  "column": 19,
                  "line": 169
                }
              },
              "range": [
                4242,
                4247
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  4244,
                  4247
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 169
                  },
                  "start": {
                    "column": 21,
                    "line": 169
                  }
                }
              }
            },
            "value": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                4250,
                4254
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 169
                },
                "start": {
                  "column": 27,
                  "line": 169
                }
              }
            },
            "range": [
              4227,
              4255
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 169
              },
              "start": {
                "column": 4,
                "line": 169
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 170
          },
          "start": {
            "column": 8,
            "line": 153
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "range": [
          3790,
          3791
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 153
          },
          "start": {
            "column": 6,
            "line": 153
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        3784,
        4257
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 170
        },
        "start": {
          "column": 0,
          "line": 153
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "argument": {
          "type": "ClassExpression",
          "abstract": false,
          "body": {
            "type": "ClassBody",
            "range": [
              4272,
              4737
            ],
            "body": [
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        4279,
                        4280
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 173
                        },
                        "start": {
                          "column": 5,
                          "line": 173
                        }
                      }
                    },
                    "range": [
                      4278,
                      4280
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 173
                      },
                      "start": {
                        "column": 4,
                        "line": 173
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property\"",
                  "value": "property",
                  "range": [
                    4282,
                    4292
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 173
                    },
                    "start": {
                      "column": 8,
                      "line": 173
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
                      "column": 24,
                      "line": 173
                    },
                    "start": {
                      "column": 19,
                      "line": 173
                    }
                  },
                  "range": [
                    4293,
                    4298
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      4295,
                      4298
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 173
                      },
                      "start": {
                        "column": 21,
                        "line": 173
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  4278,
                  4299
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 173
                  },
                  "start": {
                    "column": 4,
                    "line": 173
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        4305,
                        4306
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 174
                        },
                        "start": {
                          "column": 5,
                          "line": 174
                        }
                      }
                    },
                    "range": [
                      4304,
                      4306
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 174
                      },
                      "start": {
                        "column": 4,
                        "line": 174
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      4308,
                      4314
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 174
                      },
                      "start": {
                        "column": 8,
                        "line": 174
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "range": [
                      4315,
                      4326
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 174
                      },
                      "start": {
                        "column": 15,
                        "line": 174
                      }
                    }
                  },
                  "range": [
                    4308,
                    4326
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 174
                    },
                    "start": {
                      "column": 8,
                      "line": 174
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
                      "column": 32,
                      "line": 174
                    },
                    "start": {
                      "column": 27,
                      "line": 174
                    }
                  },
                  "range": [
                    4327,
                    4332
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      4329,
                      4332
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 174
                      },
                      "start": {
                        "column": 29,
                        "line": 174
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  4304,
                  4333
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 174
                  },
                  "start": {
                    "column": 4,
                    "line": 174
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        4339,
                        4340
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 175
                        },
                        "start": {
                          "column": 5,
                          "line": 175
                        }
                      }
                    },
                    "range": [
                      4338,
                      4340
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 175
                      },
                      "start": {
                        "column": 4,
                        "line": 175
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property2\"",
                  "value": "property2",
                  "range": [
                    4342,
                    4353
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 175
                    },
                    "start": {
                      "column": 8,
                      "line": 175
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
                      "column": 25,
                      "line": 175
                    },
                    "start": {
                      "column": 20,
                      "line": 175
                    }
                  },
                  "range": [
                    4354,
                    4359
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      4356,
                      4359
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 175
                      },
                      "start": {
                        "column": 22,
                        "line": 175
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    4362,
                    4363
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 175
                    },
                    "start": {
                      "column": 28,
                      "line": 175
                    }
                  }
                },
                "range": [
                  4338,
                  4364
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 175
                  },
                  "start": {
                    "column": 4,
                    "line": 175
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        4370,
                        4371
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 176
                        },
                        "start": {
                          "column": 5,
                          "line": 176
                        }
                      }
                    },
                    "range": [
                      4369,
                      4371
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 176
                      },
                      "start": {
                        "column": 4,
                        "line": 176
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      4373,
                      4379
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 176
                      },
                      "start": {
                        "column": 8,
                        "line": 176
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "range": [
                      4380,
                      4388
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 176
                      },
                      "start": {
                        "column": 15,
                        "line": 176
                      }
                    }
                  },
                  "range": [
                    4373,
                    4388
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 176
                    },
                    "start": {
                      "column": 8,
                      "line": 176
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
                      "column": 29,
                      "line": 176
                    },
                    "start": {
                      "column": 24,
                      "line": 176
                    }
                  },
                  "range": [
                    4389,
                    4394
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      4391,
                      4394
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 176
                      },
                      "start": {
                        "column": 26,
                        "line": 176
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    4397,
                    4401
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 176
                    },
                    "start": {
                      "column": 32,
                      "line": 176
                    }
                  }
                },
                "range": [
                  4369,
                  4402
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 176
                  },
                  "start": {
                    "column": 4,
                    "line": 176
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property3\"",
                  "value": "property3",
                  "range": [
                    4408,
                    4419
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 177
                    },
                    "start": {
                      "column": 5,
                      "line": 177
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
                      "column": 22,
                      "line": 177
                    },
                    "start": {
                      "column": 17,
                      "line": 177
                    }
                  },
                  "range": [
                    4420,
                    4425
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      4422,
                      4425
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 177
                      },
                      "start": {
                        "column": 19,
                        "line": 177
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  4407,
                  4426
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 177
                  },
                  "start": {
                    "column": 4,
                    "line": 177
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      4432,
                      4438
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 178
                      },
                      "start": {
                        "column": 5,
                        "line": 178
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isConcatSpreadable",
                    "optional": false,
                    "range": [
                      4439,
                      4457
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 178
                      },
                      "start": {
                        "column": 12,
                        "line": 178
                      }
                    }
                  },
                  "range": [
                    4432,
                    4457
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 178
                    },
                    "start": {
                      "column": 5,
                      "line": 178
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
                      "column": 36,
                      "line": 178
                    },
                    "start": {
                      "column": 31,
                      "line": 178
                    }
                  },
                  "range": [
                    4458,
                    4463
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      4460,
                      4463
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 178
                      },
                      "start": {
                        "column": 33,
                        "line": 178
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  4431,
                  4464
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 178
                  },
                  "start": {
                    "column": 4,
                    "line": 178
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Literal",
                  "raw": "\"property4\"",
                  "value": "property4",
                  "range": [
                    4470,
                    4481
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 179
                    },
                    "start": {
                      "column": 5,
                      "line": 179
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
                      "column": 22,
                      "line": 179
                    },
                    "start": {
                      "column": 17,
                      "line": 179
                    }
                  },
                  "range": [
                    4482,
                    4487
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      4484,
                      4487
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 179
                      },
                      "start": {
                        "column": 19,
                        "line": 179
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    4490,
                    4491
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 179
                    },
                    "start": {
                      "column": 25,
                      "line": 179
                    }
                  }
                },
                "range": [
                  4469,
                  4492
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 179
                  },
                  "start": {
                    "column": 4,
                    "line": 179
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      4498,
                      4504
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 180
                      },
                      "start": {
                        "column": 5,
                        "line": 180
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "match",
                    "optional": false,
                    "range": [
                      4505,
                      4510
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 180
                      },
                      "start": {
                        "column": 12,
                        "line": 180
                      }
                    }
                  },
                  "range": [
                    4498,
                    4510
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 180
                    },
                    "start": {
                      "column": 5,
                      "line": 180
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
                      "column": 23,
                      "line": 180
                    },
                    "start": {
                      "column": 18,
                      "line": 180
                    }
                  },
                  "range": [
                    4511,
                    4516
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      4513,
                      4516
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 180
                      },
                      "start": {
                        "column": 20,
                        "line": 180
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    4519,
                    4523
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 180
                    },
                    "start": {
                      "column": 26,
                      "line": 180
                    }
                  }
                },
                "range": [
                  4497,
                  4524
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 180
                  },
                  "start": {
                    "column": 4,
                    "line": 180
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      4530,
                      4533
                    ],
                    "loc": {
                      "end": {
                        "column": 8,
                        "line": 181
                      },
                      "start": {
                        "column": 5,
                        "line": 181
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    4530,
                    4535
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 181
                    },
                    "start": {
                      "column": 5,
                      "line": 181
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
                      "column": 16,
                      "line": 181
                    },
                    "start": {
                      "column": 11,
                      "line": 181
                    }
                  },
                  "range": [
                    4536,
                    4541
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      4538,
                      4541
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 181
                      },
                      "start": {
                        "column": 13,
                        "line": 181
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  4529,
                  4542
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 181
                  },
                  "start": {
                    "column": 4,
                    "line": 181
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        4548,
                        4549
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 182
                        },
                        "start": {
                          "column": 5,
                          "line": 182
                        }
                      }
                    },
                    "range": [
                      4547,
                      4549
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 182
                      },
                      "start": {
                        "column": 4,
                        "line": 182
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      4551,
                      4554
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 182
                      },
                      "start": {
                        "column": 8,
                        "line": 182
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    4551,
                    4556
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 182
                    },
                    "start": {
                      "column": 8,
                      "line": 182
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
                      "line": 182
                    },
                    "start": {
                      "column": 14,
                      "line": 182
                    }
                  },
                  "range": [
                    4557,
                    4562
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      4559,
                      4562
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 182
                      },
                      "start": {
                        "column": 16,
                        "line": 182
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  4547,
                  4563
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 182
                  },
                  "start": {
                    "column": 4,
                    "line": 182
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        4569,
                        4570
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 183
                        },
                        "start": {
                          "column": 5,
                          "line": 183
                        }
                      }
                    },
                    "range": [
                      4568,
                      4570
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 183
                      },
                      "start": {
                        "column": 4,
                        "line": 183
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "range": [
                      4572,
                      4575
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 183
                      },
                      "start": {
                        "column": 8,
                        "line": 183
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    4572,
                    4577
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 183
                    },
                    "start": {
                      "column": 8,
                      "line": 183
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
                      "line": 183
                    },
                    "start": {
                      "column": 14,
                      "line": 183
                    }
                  },
                  "range": [
                    4578,
                    4583
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      4580,
                      4583
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 183
                      },
                      "start": {
                        "column": 16,
                        "line": 183
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    4586,
                    4590
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 183
                    },
                    "start": {
                      "column": 22,
                      "line": 183
                    }
                  }
                },
                "range": [
                  4568,
                  4591
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 183
                  },
                  "start": {
                    "column": 4,
                    "line": 183
                  }
                }
              },
              {
                "type": "MethodDefinition",
                "computed": true,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        4597,
                        4598
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 184
                        },
                        "start": {
                          "column": 5,
                          "line": 184
                        }
                      }
                    },
                    "range": [
                      4596,
                      4598
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 184
                      },
                      "start": {
                        "column": 4,
                        "line": 184
                      }
                    }
                  }
                ],
                "key": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "\"some\"",
                    "value": "some",
                    "range": [
                      4600,
                      4606
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 184
                      },
                      "start": {
                        "column": 8,
                        "line": 184
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"method\"",
                    "value": "method",
                    "range": [
                      4609,
                      4617
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 184
                      },
                      "start": {
                        "column": 17,
                        "line": 184
                      }
                    }
                  },
                  "range": [
                    4600,
                    4617
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 184
                    },
                    "start": {
                      "column": 8,
                      "line": 184
                    }
                  }
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    4618,
                    4623
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      4621,
                      4623
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 184
                      },
                      "start": {
                        "column": 29,
                        "line": 184
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 184
                    },
                    "start": {
                      "column": 26,
                      "line": 184
                    }
                  }
                },
                "range": [
                  4596,
                  4623
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 184
                  },
                  "start": {
                    "column": 4,
                    "line": 184
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameA",
                  "optional": false,
                  "range": [
                    4629,
                    4639
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 185
                    },
                    "start": {
                      "column": 5,
                      "line": 185
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
                      "line": 185
                    },
                    "start": {
                      "column": 16,
                      "line": 185
                    }
                  },
                  "range": [
                    4640,
                    4645
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      4642,
                      4645
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 185
                      },
                      "start": {
                        "column": 18,
                        "line": 185
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  4628,
                  4646
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 185
                  },
                  "start": {
                    "column": 4,
                    "line": 185
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        4652,
                        4653
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 186
                        },
                        "start": {
                          "column": 5,
                          "line": 186
                        }
                      }
                    },
                    "range": [
                      4651,
                      4653
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 186
                      },
                      "start": {
                        "column": 4,
                        "line": 186
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameB",
                  "optional": false,
                  "range": [
                    4655,
                    4665
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 186
                    },
                    "start": {
                      "column": 8,
                      "line": 186
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
                      "column": 24,
                      "line": 186
                    },
                    "start": {
                      "column": 19,
                      "line": 186
                    }
                  },
                  "range": [
                    4666,
                    4671
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      4668,
                      4671
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 186
                      },
                      "start": {
                        "column": 21,
                        "line": 186
                      }
                    }
                  }
                },
                "value": null,
                "range": [
                  4651,
                  4672
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 186
                  },
                  "start": {
                    "column": 4,
                    "line": 186
                  }
                }
              },
              {
                "type": "MethodDefinition",
                "computed": true,
                "decorators": [],
                "key": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "\"some\"",
                    "value": "some",
                    "range": [
                      4678,
                      4684
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 187
                      },
                      "start": {
                        "column": 5,
                        "line": 187
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "\"method2\"",
                    "value": "method2",
                    "range": [
                      4687,
                      4696
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 187
                      },
                      "start": {
                        "column": 14,
                        "line": 187
                      }
                    }
                  },
                  "range": [
                    4678,
                    4696
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 187
                    },
                    "start": {
                      "column": 5,
                      "line": 187
                    }
                  }
                },
                "kind": "method",
                "optional": false,
                "override": false,
                "static": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    4697,
                    4702
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      4700,
                      4702
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 187
                      },
                      "start": {
                        "column": 27,
                        "line": 187
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 187
                    },
                    "start": {
                      "column": 24,
                      "line": 187
                    }
                  }
                },
                "range": [
                  4677,
                  4702
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 187
                  },
                  "start": {
                    "column": 4,
                    "line": 187
                  }
                }
              },
              {
                "type": "PropertyDefinition",
                "computed": true,
                "declare": false,
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        4708,
                        4709
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 188
                        },
                        "start": {
                          "column": 5,
                          "line": 188
                        }
                      }
                    },
                    "range": [
                      4707,
                      4709
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 188
                      },
                      "start": {
                        "column": 4,
                        "line": 188
                      }
                    }
                  }
                ],
                "definite": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fieldNameC",
                  "optional": false,
                  "range": [
                    4711,
                    4721
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 188
                    },
                    "start": {
                      "column": 8,
                      "line": 188
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
                      "column": 24,
                      "line": 188
                    },
                    "start": {
                      "column": 19,
                      "line": 188
                    }
                  },
                  "range": [
                    4722,
                    4727
                  ],
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "range": [
                      4724,
                      4727
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 188
                      },
                      "start": {
                        "column": 21,
                        "line": 188
                      }
                    }
                  }
                },
                "value": {
                  "type": "Literal",
                  "raw": "null",
                  "value": null,
                  "range": [
                    4730,
                    4734
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 188
                    },
                    "start": {
                      "column": 27,
                      "line": 188
                    }
                  }
                },
                "range": [
                  4707,
                  4735
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 188
                  },
                  "start": {
                    "column": 4,
                    "line": 188
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 189
              },
              "start": {
                "column": 13,
                "line": 172
              }
            }
          },
          "declare": false,
          "decorators": [],
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "J",
            "optional": false,
            "range": [
              4270,
              4271
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 172
              },
              "start": {
                "column": 11,
                "line": 172
              }
            }
          },
          "implements": [],
          "superClass": null,
          "range": [
            4264,
            4737
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 189
            },
            "start": {
              "column": 5,
              "line": 172
            }
          }
        },
        "operator": "void",
        "prefix": true,
        "range": [
          4259,
          4737
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 189
          },
          "start": {
            "column": 0,
            "line": 172
          }
        }
      },
      "range": [
        4259,
        4738
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 189
        },
        "start": {
          "column": 0,
          "line": 172
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 2,
      "line": 189
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
