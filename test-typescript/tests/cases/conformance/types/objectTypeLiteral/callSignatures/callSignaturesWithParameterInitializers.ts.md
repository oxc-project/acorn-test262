__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    77,
    640
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          97,
          100
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 3
          },
          "start": {
            "column": 20,
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
          86,
          89
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
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              90,
              91
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 3
              },
              "start": {
                "column": 13,
                "line": 3
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              94,
              95
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          },
          "range": [
            90,
            95
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 3
            },
            "start": {
              "column": 13,
              "line": 3
            }
          }
        }
      ],
      "range": [
        77,
        100
      ],
      "loc": {
        "end": {
          "column": 23,
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
            "name": "f",
            "optional": false,
            "range": [
              105,
              106
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                129,
                132
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 4
                },
                "start": {
                  "column": 28,
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
              "name": "foo",
              "optional": false,
              "range": [
                118,
                121
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 17,
                  "line": 4
                }
              }
            },
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    122,
                    123
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 4
                    },
                    "start": {
                      "column": 21,
                      "line": 4
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    126,
                    127
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
                  122,
                  127
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 4
                  },
                  "start": {
                    "column": 21,
                    "line": 4
                  }
                }
              }
            ],
            "range": [
              109,
              132
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 4
              },
              "start": {
                "column": 8,
                "line": 4
              }
            }
          },
          "range": [
            105,
            132
          ],
          "loc": {
            "end": {
              "column": 31,
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
        101,
        132
      ],
      "loc": {
        "end": {
          "column": 31,
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
            "name": "f2",
            "optional": false,
            "range": [
              137,
              139
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                164,
                167
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 5
                },
                "start": {
                  "column": 31,
                  "line": 5
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
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
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 11,
                      "line": 5
                    }
                  },
                  "range": [
                    144,
                    152
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      146,
                      152
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 5
                      },
                      "start": {
                        "column": 13,
                        "line": 5
                      }
                    }
                  }
                },
                "range": [
                  143,
                  152
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 5
                  },
                  "start": {
                    "column": 10,
                    "line": 5
                  }
                }
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    154,
                    155
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 5
                    },
                    "start": {
                      "column": 21,
                      "line": 5
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    158,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 5
                    },
                    "start": {
                      "column": 25,
                      "line": 5
                    }
                  }
                },
                "range": [
                  154,
                  159
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              }
            ],
            "range": [
              142,
              167
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 5
              },
              "start": {
                "column": 9,
                "line": 5
              }
            }
          },
          "range": [
            137,
            167
          ],
          "loc": {
            "end": {
              "column": 34,
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
        133,
        167
      ],
      "loc": {
        "end": {
          "column": 34,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              173,
              174
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            169,
            172
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "optional": false,
        "range": [
          169,
          175
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        169,
        176
      ],
      "loc": {
        "end": {
          "column": 7,
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
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "range": [
            177,
            180
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 8
            },
            "start": {
              "column": 0,
              "line": 8
            }
          }
        },
        "optional": false,
        "range": [
          177,
          182
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 8
          },
          "start": {
            "column": 0,
            "line": 8
          }
        }
      },
      "range": [
        177,
        183
      ],
      "loc": {
        "end": {
          "column": 6,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              186,
              187
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 9
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            184,
            185
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          184,
          188
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        184,
        189
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 9
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
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            190,
            191
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "optional": false,
        "range": [
          190,
          193
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        190,
        194
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
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
            "raw": "1",
            "value": 1,
            "range": [
              198,
              199
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 11
              },
              "start": {
                "column": 3,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "range": [
            195,
            197
          ],
          "loc": {
            "end": {
              "column": 2,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "range": [
          195,
          200
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        195,
        201
      ],
      "loc": {
        "end": {
          "column": 6,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              205,
              206
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 12
              },
              "start": {
                "column": 3,
                "line": 12
              }
            }
          },
          {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              208,
              209
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
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "range": [
            202,
            204
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
        "optional": false,
        "range": [
          202,
          210
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        202,
        211
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          221,
          243
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                227,
                230
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
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
                230,
                241
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  238,
                  241
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 15
                  },
                  "start": {
                    "column": 15,
                    "line": 15
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      231,
                      232
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      235,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 15
                      },
                      "start": {
                        "column": 12,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    231,
                    236
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 15
                },
                "start": {
                  "column": 7,
                  "line": 15
                }
              }
            },
            "range": [
              227,
              241
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 8,
            "line": 14
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
          219,
          220
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
      "implements": [],
      "superClass": null,
      "range": [
        213,
        243
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 18
                },
                "start": {
                  "column": 5,
                  "line": 18
                }
              },
              "range": [
                250,
                253
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "range": [
                    252,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 18
                    },
                    "start": {
                      "column": 7,
                      "line": 18
                    }
                  }
                },
                "range": [
                  252,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 18
                  },
                  "start": {
                    "column": 7,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              249,
              253
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            249,
            253
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        245,
        254
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              255,
              256
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 19
              },
              "start": {
                "column": 0,
                "line": 19
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
              257,
              260
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 2,
                "line": 19
              }
            }
          },
          "range": [
            255,
            260
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 19
            },
            "start": {
              "column": 0,
              "line": 19
            }
          }
        },
        "optional": false,
        "range": [
          255,
          262
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 19
          },
          "start": {
            "column": 0,
            "line": 19
          }
        }
      },
      "range": [
        255,
        263
      ],
      "loc": {
        "end": {
          "column": 8,
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
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              270,
              271
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
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              264,
              265
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 20
              },
              "start": {
                "column": 0,
                "line": 20
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
              266,
              269
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          },
          "range": [
            264,
            269
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 20
            },
            "start": {
              "column": 0,
              "line": 20
            }
          }
        },
        "optional": false,
        "range": [
          264,
          272
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 20
          },
          "start": {
            "column": 0,
            "line": 20
          }
        }
      },
      "range": [
        264,
        273
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          307,
          350
        ],
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
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
                      "column": 6,
                      "line": 24
                    },
                    "start": {
                      "column": 5,
                      "line": 24
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    318,
                    319
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 24
                    },
                    "start": {
                      "column": 9,
                      "line": 24
                    }
                  }
                },
                "range": [
                  314,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 24
                  },
                  "start": {
                    "column": 5,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              313,
              321
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "range": [
                326,
                329
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "kind": "method",
            "optional": false,
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
                      "column": 17,
                      "line": 25
                    },
                    "start": {
                      "column": 9,
                      "line": 25
                    }
                  },
                  "range": [
                    331,
                    339
                  ],
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "range": [
                      333,
                      339
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 25
                      },
                      "start": {
                        "column": 11,
                        "line": 25
                      }
                    }
                  }
                },
                "range": [
                  330,
                  339
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 25
                  },
                  "start": {
                    "column": 8,
                    "line": 25
                  }
                }
              },
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    341,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 25
                    },
                    "start": {
                      "column": 19,
                      "line": 25
                    }
                  }
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    345,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 25
                    },
                    "start": {
                      "column": 23,
                      "line": 25
                    }
                  }
                },
                "range": [
                  341,
                  346
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 25
                  },
                  "start": {
                    "column": 19,
                    "line": 25
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "range": [
              326,
              348
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 12,
            "line": 23
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
          305,
          306
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 23
          },
          "start": {
            "column": 10,
            "line": 23
          }
        }
      },
      "range": [
        295,
        350
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 8,
                  "line": 28
                },
                "start": {
                  "column": 5,
                  "line": 28
                }
              },
              "range": [
                357,
                360
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "range": [
                    359,
                    360
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 28
                    },
                    "start": {
                      "column": 7,
                      "line": 28
                    }
                  }
                },
                "range": [
                  359,
                  360
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 28
                  },
                  "start": {
                    "column": 7,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              356,
              360
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          "init": null,
          "range": [
            356,
            360
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        352,
        361
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
          "name": "i",
          "optional": false,
          "range": [
            362,
            363
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "optional": false,
        "range": [
          362,
          365
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        362,
        366
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
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
            "raw": "1",
            "value": 1,
            "range": [
              369,
              370
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 30
              },
              "start": {
                "column": 2,
                "line": 30
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            367,
            368
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 30
            },
            "start": {
              "column": 0,
              "line": 30
            }
          }
        },
        "optional": false,
        "range": [
          367,
          371
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 30
          },
          "start": {
            "column": 0,
            "line": 30
          }
        }
      },
      "range": [
        367,
        372
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
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
            "raw": "1",
            "value": 1,
            "range": [
              379,
              380
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 31
              },
              "start": {
                "column": 6,
                "line": 31
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
            "name": "i",
            "optional": false,
            "range": [
              373,
              374
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 31
              },
              "start": {
                "column": 0,
                "line": 31
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
              375,
              378
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 31
              },
              "start": {
                "column": 2,
                "line": 31
              }
            }
          },
          "range": [
            373,
            378
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 31
            },
            "start": {
              "column": 0,
              "line": 31
            }
          }
        },
        "optional": false,
        "range": [
          373,
          381
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 31
          }
        }
      },
      "range": [
        373,
        382
      ],
      "loc": {
        "end": {
          "column": 9,
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
            "raw": "1",
            "value": 1,
            "range": [
              389,
              390
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 32
              },
              "start": {
                "column": 6,
                "line": 32
              }
            }
          },
          {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              392,
              393
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 32
              },
              "start": {
                "column": 9,
                "line": 32
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
            "name": "i",
            "optional": false,
            "range": [
              383,
              384
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 32
              },
              "start": {
                "column": 0,
                "line": 32
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
              385,
              388
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 2,
                "line": 32
              }
            }
          },
          "range": [
            383,
            388
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "optional": false,
        "range": [
          383,
          394
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        383,
        395
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 32
        },
        "start": {
          "column": 0,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 38
                },
                "start": {
                  "column": 5,
                  "line": 35
                }
              },
              "range": [
                422,
                456
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            431,
                            432
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
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            435,
                            436
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 36
                            },
                            "start": {
                              "column": 9,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          431,
                          436
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 36
                          },
                          "start": {
                            "column": 5,
                            "line": 36
                          }
                        }
                      }
                    ],
                    "range": [
                      430,
                      438
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 36
                      },
                      "start": {
                        "column": 4,
                        "line": 36
                      }
                    }
                  },
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "range": [
                        443,
                        446
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 37
                        },
                        "start": {
                          "column": 4,
                          "line": 37
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            447,
                            448
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 37
                            },
                            "start": {
                              "column": 8,
                              "line": 37
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            451,
                            452
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 37
                            },
                            "start": {
                              "column": 12,
                              "line": 37
                            }
                          }
                        },
                        "range": [
                          447,
                          452
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
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "range": [
                      443,
                      454
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 37
                      },
                      "start": {
                        "column": 4,
                        "line": 37
                      }
                    }
                  }
                ],
                "range": [
                  424,
                  456
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 38
                  },
                  "start": {
                    "column": 7,
                    "line": 35
                  }
                }
              }
            },
            "range": [
              421,
              456
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          "init": null,
          "range": [
            421,
            456
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 38
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        417,
        456
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 35
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
          "name": "a",
          "optional": false,
          "range": [
            458,
            459
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 40
            },
            "start": {
              "column": 0,
              "line": 40
            }
          }
        },
        "optional": false,
        "range": [
          458,
          461
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        458,
        462
      ],
      "loc": {
        "end": {
          "column": 4,
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
            "raw": "1",
            "value": 1,
            "range": [
              465,
              466
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 41
              },
              "start": {
                "column": 2,
                "line": 41
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            463,
            464
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 41
            },
            "start": {
              "column": 0,
              "line": 41
            }
          }
        },
        "optional": false,
        "range": [
          463,
          467
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        463,
        468
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              469,
              470
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 42
              },
              "start": {
                "column": 0,
                "line": 42
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
              471,
              474
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 42
              },
              "start": {
                "column": 2,
                "line": 42
              }
            }
          },
          "range": [
            469,
            474
          ],
          "loc": {
            "end": {
              "column": 5,
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
          469,
          476
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 42
          },
          "start": {
            "column": 0,
            "line": 42
          }
        }
      },
      "range": [
        469,
        477
      ],
      "loc": {
        "end": {
          "column": 8,
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
            "raw": "1",
            "value": 1,
            "range": [
              484,
              485
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
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              478,
              479
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 43
              },
              "start": {
                "column": 0,
                "line": 43
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
              480,
              483
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 43
              },
              "start": {
                "column": 2,
                "line": 43
              }
            }
          },
          "range": [
            478,
            483
          ],
          "loc": {
            "end": {
              "column": 5,
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
          478,
          486
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 43
          },
          "start": {
            "column": 0,
            "line": 43
          }
        }
      },
      "range": [
        478,
        487
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
            "name": "b",
            "optional": false,
            "range": [
              493,
              494
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
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
                  "name": "foo",
                  "optional": false,
                  "range": [
                    503,
                    506
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 46
                    },
                    "start": {
                      "column": 4,
                      "line": 46
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    506,
                    517
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      514,
                      517
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 46
                      },
                      "start": {
                        "column": 15,
                        "line": 46
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          507,
                          508
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 46
                          },
                          "start": {
                            "column": 8,
                            "line": 46
                          }
                        }
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          511,
                          512
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 46
                          },
                          "start": {
                            "column": 12,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        507,
                        512
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 46
                        },
                        "start": {
                          "column": 8,
                          "line": 46
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 46
                    },
                    "start": {
                      "column": 7,
                      "line": 46
                    }
                  }
                },
                "range": [
                  503,
                  517
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 46
                  },
                  "start": {
                    "column": 4,
                    "line": 46
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "range": [
                    523,
                    524
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 47
                    },
                    "start": {
                      "column": 4,
                      "line": 47
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      557,
                      560
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 47
                      },
                      "start": {
                        "column": 38,
                        "line": 47
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
                      535,
                      538
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 47
                      },
                      "start": {
                        "column": 16,
                        "line": 47
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
                            "line": 47
                          },
                          "start": {
                            "column": 21,
                            "line": 47
                          }
                        },
                        "range": [
                          540,
                          548
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            542,
                            548
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 47
                            },
                            "start": {
                              "column": 23,
                              "line": 47
                            }
                          }
                        }
                      },
                      "range": [
                        539,
                        548
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 47
                        },
                        "start": {
                          "column": 20,
                          "line": 47
                        }
                      }
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          550,
                          551
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 47
                          },
                          "start": {
                            "column": 31,
                            "line": 47
                          }
                        }
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          554,
                          555
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 47
                          },
                          "start": {
                            "column": 35,
                            "line": 47
                          }
                        }
                      },
                      "range": [
                        550,
                        555
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 47
                        },
                        "start": {
                          "column": 31,
                          "line": 47
                        }
                      }
                    }
                  ],
                  "range": [
                    526,
                    560
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 47
                    },
                    "start": {
                      "column": 7,
                      "line": 47
                    }
                  }
                },
                "range": [
                  523,
                  560
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 47
                  },
                  "start": {
                    "column": 4,
                    "line": 47
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "range": [
                    566,
                    567
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 48
                    },
                    "start": {
                      "column": 4,
                      "line": 48
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      580,
                      583
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 48
                      },
                      "start": {
                        "column": 18,
                        "line": 48
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          570,
                          571
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 48
                          },
                          "start": {
                            "column": 8,
                            "line": 48
                          }
                        }
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          574,
                          575
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 48
                          },
                          "start": {
                            "column": 12,
                            "line": 48
                          }
                        }
                      },
                      "range": [
                        570,
                        575
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 48
                        },
                        "start": {
                          "column": 8,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "range": [
                    569,
                    583
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 48
                    },
                    "start": {
                      "column": 7,
                      "line": 48
                    }
                  }
                },
                "range": [
                  566,
                  583
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 48
                  },
                  "start": {
                    "column": 4,
                    "line": 48
                  }
                }
              }
            ],
            "range": [
              497,
              585
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 49
              },
              "start": {
                "column": 8,
                "line": 45
              }
            }
          },
          "range": [
            493,
            585
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 49
            },
            "start": {
              "column": 4,
              "line": 45
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        489,
        585
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 45
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              587,
              588
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 51
              },
              "start": {
                "column": 0,
                "line": 51
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
              589,
              592
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 51
              },
              "start": {
                "column": 2,
                "line": 51
              }
            }
          },
          "range": [
            587,
            592
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 51
            },
            "start": {
              "column": 0,
              "line": 51
            }
          }
        },
        "optional": false,
        "range": [
          587,
          594
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 51
          },
          "start": {
            "column": 0,
            "line": 51
          }
        }
      },
      "range": [
        587,
        595
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 51
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
            "raw": "1",
            "value": 1,
            "range": [
              602,
              603
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 52
              },
              "start": {
                "column": 6,
                "line": 52
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
            "name": "b",
            "optional": false,
            "range": [
              596,
              597
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 52
              },
              "start": {
                "column": 0,
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
              598,
              601
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 52
              },
              "start": {
                "column": 2,
                "line": 52
              }
            }
          },
          "range": [
            596,
            601
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 52
            },
            "start": {
              "column": 0,
              "line": 52
            }
          }
        },
        "optional": false,
        "range": [
          596,
          604
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 52
          },
          "start": {
            "column": 0,
            "line": 52
          }
        }
      },
      "range": [
        596,
        605
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
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
            "raw": "1",
            "value": 1,
            "range": [
              610,
              611
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
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
            "name": "b",
            "optional": false,
            "range": [
              606,
              607
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 53
              },
              "start": {
                "column": 0,
                "line": 53
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              608,
              609
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 53
              },
              "start": {
                "column": 2,
                "line": 53
              }
            }
          },
          "range": [
            606,
            609
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 53
            },
            "start": {
              "column": 0,
              "line": 53
            }
          }
        },
        "optional": false,
        "range": [
          606,
          612
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 53
          },
          "start": {
            "column": 0,
            "line": 53
          }
        }
      },
      "range": [
        606,
        613
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 53
        },
        "start": {
          "column": 0,
          "line": 53
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
            "raw": "1",
            "value": 1,
            "range": [
              618,
              619
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              621,
              622
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 54
              },
              "start": {
                "column": 7,
                "line": 54
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
            "name": "b",
            "optional": false,
            "range": [
              614,
              615
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 54
              },
              "start": {
                "column": 0,
                "line": 54
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              616,
              617
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 54
              },
              "start": {
                "column": 2,
                "line": 54
              }
            }
          },
          "range": [
            614,
            617
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 54
            },
            "start": {
              "column": 0,
              "line": 54
            }
          }
        },
        "optional": false,
        "range": [
          614,
          623
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 54
          },
          "start": {
            "column": 0,
            "line": 54
          }
        }
      },
      "range": [
        614,
        624
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              625,
              626
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 55
              },
              "start": {
                "column": 0,
                "line": 55
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              627,
              628
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 55
              },
              "start": {
                "column": 2,
                "line": 55
              }
            }
          },
          "range": [
            625,
            628
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 55
            },
            "start": {
              "column": 0,
              "line": 55
            }
          }
        },
        "optional": false,
        "range": [
          625,
          630
        ],
        "loc": {
          "end": {
            "column": 5,
            "line": 55
          },
          "start": {
            "column": 0,
            "line": 55
          }
        }
      },
      "range": [
        625,
        631
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 55
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
            "raw": "1",
            "value": 1,
            "range": [
              636,
              637
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
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
            "name": "b",
            "optional": false,
            "range": [
              632,
              633
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 56
              },
              "start": {
                "column": 0,
                "line": 56
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              634,
              635
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 56
              },
              "start": {
                "column": 2,
                "line": 56
              }
            }
          },
          "range": [
            632,
            635
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 56
            },
            "start": {
              "column": 0,
              "line": 56
            }
          }
        },
        "optional": false,
        "range": [
          632,
          638
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 56
          },
          "start": {
            "column": 0,
            "line": 56
          }
        }
      },
      "range": [
        632,
        639
      ],
      "loc": {
        "end": {
          "column": 7,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 57
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
