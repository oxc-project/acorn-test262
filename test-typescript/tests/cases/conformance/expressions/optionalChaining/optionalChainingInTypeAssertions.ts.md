__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    331
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          10,
          24
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "range": [
                16,
                17
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                17,
                22
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  20,
                  22
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
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
                  "column": 10,
                  "line": 2
                },
                "start": {
                  "column": 5,
                  "line": 2
                }
              }
            },
            "range": [
              16,
              22
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 10,
            "line": 1
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
          6,
          9
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        24
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
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
            "name": "foo",
            "optional": false,
            "range": [
              32,
              35
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 5
              },
              "start": {
                "column": 6,
                "line": 5
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "range": [
                42,
                45
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 5
                },
                "start": {
                  "column": 16,
                  "line": 5
                }
              }
            },
            "range": [
              38,
              47
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 5
              },
              "start": {
                "column": 12,
                "line": 5
              }
            }
          },
          "range": [
            32,
            47
          ],
          "loc": {
            "end": {
              "column": 21,
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
        26,
        48
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "TSAsExpression",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  51,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 7
                  },
                  "start": {
                    "column": 1,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "range": [
                  55,
                  56
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 7
                  },
                  "start": {
                    "column": 5,
                    "line": 7
                  }
                }
              },
              "range": [
                51,
                56
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 7
                },
                "start": {
                  "column": 1,
                  "line": 7
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                60,
                63
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              }
            },
            "range": [
              51,
              63
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 7
              },
              "start": {
                "column": 1,
                "line": 7
              }
            }
          },
          "optional": true,
          "range": [
            50,
            68
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
          50,
          68
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
        50,
        69
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  76,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 8
                  },
                  "start": {
                    "column": 6,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "range": [
                  80,
                  81
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 8
                  },
                  "start": {
                    "column": 10,
                    "line": 8
                  }
                }
              },
              "range": [
                76,
                81
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 8
                },
                "start": {
                  "column": 6,
                  "line": 8
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                72,
                75
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
                }
              }
            },
            "range": [
              71,
              81
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 8
              },
              "start": {
                "column": 1,
                "line": 8
              }
            }
          },
          "optional": true,
          "range": [
            70,
            86
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "range": [
          70,
          86
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        70,
        87
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "TSAsExpression",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  102,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 10
                  },
                  "start": {
                    "column": 13,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "range": [
                  106,
                  107
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 10
                  },
                  "start": {
                    "column": 17,
                    "line": 10
                  }
                }
              },
              "range": [
                102,
                107
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 10
                },
                "start": {
                  "column": 13,
                  "line": 10
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                111,
                114
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 10
                },
                "start": {
                  "column": 22,
                  "line": 10
                }
              }
            },
            "range": [
              102,
              114
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
          "optional": true,
          "range": [
            95,
            131
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        },
        "range": [
          95,
          131
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 10
          },
          "start": {
            "column": 6,
            "line": 10
          }
        }
      },
      "range": [
        95,
        132
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 10
        },
        "start": {
          "column": 6,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ChainExpression",
        "expression": {
          "type": "CallExpression",
          "arguments": [],
          "callee": {
            "type": "TSTypeAssertion",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  151,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 11
                  },
                  "start": {
                    "column": 18,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "range": [
                  155,
                  156
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 11
                  },
                  "start": {
                    "column": 22,
                    "line": 11
                  }
                }
              },
              "range": [
                151,
                156
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 11
                },
                "start": {
                  "column": 18,
                  "line": 11
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                147,
                150
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 11
                },
                "start": {
                  "column": 14,
                  "line": 11
                }
              }
            },
            "range": [
              146,
              156
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 11
              },
              "start": {
                "column": 13,
                "line": 11
              }
            }
          },
          "optional": true,
          "range": [
            139,
            173
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 11
            },
            "start": {
              "column": 6,
              "line": 11
            }
          }
        },
        "range": [
          139,
          173
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "range": [
        139,
        174
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 11
        },
        "start": {
          "column": 6,
          "line": 11
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "TSAsExpression",
          "expression": {
            "type": "ChainExpression",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  233,
                  236
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 14
                  },
                  "start": {
                    "column": 1,
                    "line": 14
                  }
                }
              },
              "optional": true,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "range": [
                  238,
                  239
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 14
                  },
                  "start": {
                    "column": 6,
                    "line": 14
                  }
                }
              },
              "range": [
                233,
                239
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 14
                },
                "start": {
                  "column": 1,
                  "line": 14
                }
              }
            },
            "range": [
              233,
              239
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 14
              },
              "start": {
                "column": 1,
                "line": 14
              }
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              243,
              246
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 14
              },
              "start": {
                "column": 11,
                "line": 14
              }
            }
          },
          "range": [
            233,
            246
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 14
            },
            "start": {
              "column": 1,
              "line": 14
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "range": [
            248,
            254
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 14
            },
            "start": {
              "column": 16,
              "line": 14
            }
          }
        },
        "range": [
          232,
          254
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 14
          },
          "start": {
            "column": 0,
            "line": 14
          }
        }
      },
      "range": [
        232,
        255
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "ChainExpression",
            "expression": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  262,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 15
                  },
                  "start": {
                    "column": 6,
                    "line": 15
                  }
                }
              },
              "optional": true,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "range": [
                  267,
                  268
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 15
                  }
                }
              },
              "range": [
                262,
                268
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 15
                },
                "start": {
                  "column": 6,
                  "line": 15
                }
              }
            },
            "range": [
              262,
              268
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              258,
              261
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 15
              },
              "start": {
                "column": 2,
                "line": 15
              }
            }
          },
          "range": [
            257,
            268
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 15
            },
            "start": {
              "column": 1,
              "line": 15
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "range": [
            270,
            276
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 15
            },
            "start": {
              "column": 14,
              "line": 15
            }
          }
        },
        "range": [
          256,
          276
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "range": [
        256,
        277
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "TSAsExpression",
          "expression": {
            "type": "ChainExpression",
            "expression": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  279,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 4,
                    "line": 16
                  },
                  "start": {
                    "column": 1,
                    "line": 16
                  }
                }
              },
              "optional": true,
              "property": {
                "type": "Literal",
                "raw": "\"m\"",
                "value": "m",
                "range": [
                  285,
                  288
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 16
                  },
                  "start": {
                    "column": 7,
                    "line": 16
                  }
                }
              },
              "range": [
                279,
                289
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 16
                },
                "start": {
                  "column": 1,
                  "line": 16
                }
              }
            },
            "range": [
              279,
              289
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 16
              },
              "start": {
                "column": 1,
                "line": 16
              }
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              293,
              296
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 16
              },
              "start": {
                "column": 15,
                "line": 16
              }
            }
          },
          "range": [
            279,
            296
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 16
            },
            "start": {
              "column": 1,
              "line": 16
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "range": [
            298,
            304
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 16
            },
            "start": {
              "column": 20,
              "line": 16
            }
          }
        },
        "range": [
          278,
          304
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 16
          },
          "start": {
            "column": 0,
            "line": 16
          }
        }
      },
      "range": [
        278,
        305
      ],
      "loc": {
        "end": {
          "column": 27,
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
        "type": "MemberExpression",
        "computed": false,
        "object": {
          "type": "TSTypeAssertion",
          "expression": {
            "type": "ChainExpression",
            "expression": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  312,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 17
                  },
                  "start": {
                    "column": 6,
                    "line": 17
                  }
                }
              },
              "optional": true,
              "property": {
                "type": "Literal",
                "raw": "\"m\"",
                "value": "m",
                "range": [
                  318,
                  321
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 12,
                    "line": 17
                  }
                }
              },
              "range": [
                312,
                322
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 17
                },
                "start": {
                  "column": 6,
                  "line": 17
                }
              }
            },
            "range": [
              312,
              322
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
              }
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "range": [
              308,
              311
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 2,
                "line": 17
              }
            }
          },
          "range": [
            307,
            322
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 17
            },
            "start": {
              "column": 1,
              "line": 17
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "length",
          "optional": false,
          "range": [
            324,
            330
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 17
            },
            "start": {
              "column": 18,
              "line": 17
            }
          }
        },
        "range": [
          306,
          330
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
      "range": [
        306,
        331
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 25,
      "line": 17
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
