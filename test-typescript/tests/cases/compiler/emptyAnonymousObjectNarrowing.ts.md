__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    885
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
            "name": "nonNull",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                23
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "range": [
                  21,
                  23
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 1
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              23
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            12,
            23
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        0,
        24
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "range": [
                72,
                79
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 6
                },
                "start": {
                  "column": 2,
                  "line": 6
                }
              }
            },
            "range": [
              72,
              80
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          }
        ],
        "range": [
          68,
          82
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "range": [
                52,
                59
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 2,
                  "line": 3
                }
              }
            },
            "range": [
              52,
              60
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 3
              },
              "start": {
                "column": 2,
                "line": 3
              }
            }
          }
        ],
        "range": [
          48,
          62
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 23,
            "line": 2
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "range": [
            29,
            36
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 2
            },
            "start": {
              "column": 4,
              "line": 2
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "\"foo\"",
          "value": "foo",
          "range": [
            41,
            46
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 2
            },
            "start": {
              "column": 16,
              "line": 2
            }
          }
        },
        "range": [
          29,
          46
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 2
          },
          "start": {
            "column": 4,
            "line": 2
          }
        }
      },
      "range": [
        25,
        82
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 9
                }
              },
              "range": [
                99,
                114
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "range": [
                        103,
                        104
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 9
                        },
                        "start": {
                          "column": 19,
                          "line": 9
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
                          "column": 28,
                          "line": 9
                        },
                        "start": {
                          "column": 20,
                          "line": 9
                        }
                      },
                      "range": [
                        104,
                        112
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          106,
                          112
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 9
                          },
                          "start": {
                            "column": 22,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      103,
                      112
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 9
                      },
                      "start": {
                        "column": 19,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  101,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 9
                  },
                  "start": {
                    "column": 17,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              96,
              114
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 9
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            96,
            114
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 9
            },
            "start": {
              "column": 12,
              "line": 9
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        84,
        115
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "range": [
                161,
                168
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 14
                },
                "start": {
                  "column": 2,
                  "line": 14
                }
              }
            },
            "range": [
              161,
              169
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
              }
            }
          }
        ],
        "range": [
          157,
          171
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 13
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "range": [
                141,
                148
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 11
                }
              }
            },
            "range": [
              141,
              149
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          }
        ],
        "range": [
          137,
          151
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 21,
            "line": 10
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "range": [
            120,
            127
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 10
            },
            "start": {
              "column": 4,
              "line": 10
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "range": [
            132,
            135
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 10
            },
            "start": {
              "column": 16,
              "line": 10
            }
          }
        },
        "range": [
          120,
          135
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 10
          },
          "start": {
            "column": 4,
            "line": 10
          }
        }
      },
      "range": [
        116,
        171
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 10
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "range": [
                      249,
                      256
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 22
                      },
                      "start": {
                        "column": 4,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    249,
                    257
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                243,
                261
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 23
                },
                "start": {
                  "column": 7,
                  "line": 21
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "range": [
                      223,
                      230
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 19
                      },
                      "start": {
                        "column": 4,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    223,
                    231
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 19
                    },
                    "start": {
                      "column": 4,
                      "line": 19
                    }
                  }
                }
              ],
              "range": [
                217,
                235
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 20
                },
                "start": {
                  "column": 21,
                  "line": 18
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nonNull",
                "optional": false,
                "range": [
                  202,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 18
                  },
                  "start": {
                    "column": 6,
                    "line": 18
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  214,
                  215
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 18
                  },
                  "start": {
                    "column": 18,
                    "line": 18
                  }
                }
              },
              "range": [
                202,
                215
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 18
                },
                "start": {
                  "column": 6,
                  "line": 18
                }
              }
            },
            "range": [
              198,
              261
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 23
              },
              "start": {
                "column": 2,
                "line": 18
              }
            }
          }
        ],
        "range": [
          194,
          263
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 21,
            "line": 17
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
          182,
          184
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
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
                "column": 19,
                "line": 17
              },
              "start": {
                "column": 16,
                "line": 17
              }
            },
            "range": [
              189,
              192
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  191,
                  192
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 17
                  },
                  "start": {
                    "column": 18,
                    "line": 17
                  }
                }
              },
              "range": [
                191,
                192
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 17
                },
                "start": {
                  "column": 18,
                  "line": 17
                }
              }
            }
          },
          "range": [
            188,
            192
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 17
            },
            "start": {
              "column": 15,
              "line": 17
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 17
          },
          "start": {
            "column": 11,
            "line": 17
          }
        },
        "range": [
          184,
          187
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
                185,
                186
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              185,
              186
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 17
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        173,
        263
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 17
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "range": [
                      356,
                      363
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 31
                      },
                      "start": {
                        "column": 4,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    356,
                    364
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 31
                    },
                    "start": {
                      "column": 4,
                      "line": 31
                    }
                  }
                }
              ],
              "range": [
                350,
                368
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 32
                },
                "start": {
                  "column": 7,
                  "line": 30
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nonNull",
                    "optional": false,
                    "range": [
                      330,
                      337
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 28
                      },
                      "start": {
                        "column": 4,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    330,
                    338
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 28
                    },
                    "start": {
                      "column": 4,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                324,
                342
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 29
                },
                "start": {
                  "column": 21,
                  "line": 27
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "nonNull",
                "optional": false,
                "range": [
                  309,
                  316
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 27
                  },
                  "start": {
                    "column": 6,
                    "line": 27
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  321,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 27
                  },
                  "start": {
                    "column": 18,
                    "line": 27
                  }
                }
              },
              "range": [
                309,
                322
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 27
                },
                "start": {
                  "column": 6,
                  "line": 27
                }
              }
            },
            "range": [
              305,
              368
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 32
              },
              "start": {
                "column": 2,
                "line": 27
              }
            }
          }
        ],
        "range": [
          301,
          370
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 36,
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
        "name": "f2",
        "optional": false,
        "range": [
          274,
          276
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 26
          },
          "start": {
            "column": 9,
            "line": 26
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
                "column": 34,
                "line": 26
              },
              "start": {
                "column": 31,
                "line": 26
              }
            },
            "range": [
              296,
              299
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  298,
                  299
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 26
                  },
                  "start": {
                    "column": 33,
                    "line": 26
                  }
                }
              },
              "range": [
                298,
                299
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 26
                },
                "start": {
                  "column": 33,
                  "line": 26
                }
              }
            }
          },
          "range": [
            295,
            299
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 26
            },
            "start": {
              "column": 30,
              "line": 26
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 29,
            "line": 26
          },
          "start": {
            "column": 11,
            "line": 26
          }
        },
        "range": [
          276,
          294
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "range": [
                287,
                293
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 26
                },
                "start": {
                  "column": 22,
                  "line": 26
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
                277,
                278
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 26
                },
                "start": {
                  "column": 12,
                  "line": 26
                }
              }
            },
            "out": false,
            "range": [
              277,
              293
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 26
              },
              "start": {
                "column": 12,
                "line": 26
              }
            }
          }
        ]
      },
      "range": [
        265,
        370
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
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
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 52,
                  "line": 35
                },
                "start": {
                  "column": 17,
                  "line": 35
                }
              },
              "range": [
                389,
                424
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"xyz\"",
                      "value": "xyz",
                      "range": [
                        391,
                        396
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 35
                        },
                        "start": {
                          "column": 19,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      391,
                      396
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 35
                      },
                      "start": {
                        "column": 19,
                        "line": 35
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "range": [
                            401,
                            402
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 35
                            },
                            "start": {
                              "column": 29,
                              "line": 35
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
                              "column": 38,
                              "line": 35
                            },
                            "start": {
                              "column": 30,
                              "line": 35
                            }
                          },
                          "range": [
                            402,
                            410
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              404,
                              410
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 35
                              },
                              "start": {
                                "column": 32,
                                "line": 35
                              }
                            }
                          }
                        },
                        "range": [
                          401,
                          410
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 35
                          },
                          "start": {
                            "column": 29,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "range": [
                      399,
                      412
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 35
                      },
                      "start": {
                        "column": 27,
                        "line": 35
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      415,
                      424
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 35
                      },
                      "start": {
                        "column": 43,
                        "line": 35
                      }
                    }
                  }
                ],
                "range": [
                  391,
                  424
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 35
                  },
                  "start": {
                    "column": 19,
                    "line": 35
                  }
                }
              }
            },
            "range": [
              384,
              424
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 35
              },
              "start": {
                "column": 12,
                "line": 35
              }
            }
          },
          "init": null,
          "range": [
            384,
            424
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 35
            },
            "start": {
              "column": 12,
              "line": 35
            }
          }
        }
      ],
      "declare": true,
      "kind": "let",
      "range": [
        372,
        425
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "range": [
                473,
                480
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 40
                },
                "start": {
                  "column": 2,
                  "line": 40
                }
              }
            },
            "range": [
              473,
              481
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 40
              },
              "start": {
                "column": 2,
                "line": 40
              }
            }
          }
        ],
        "range": [
          469,
          483
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 5,
            "line": 39
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "range": [
                453,
                460
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 37
                },
                "start": {
                  "column": 2,
                  "line": 37
                }
              }
            },
            "range": [
              453,
              461
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 37
              },
              "start": {
                "column": 2,
                "line": 37
              }
            }
          }
        ],
        "range": [
          449,
          463
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 23,
            "line": 36
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "range": [
            430,
            437
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "union",
          "optional": false,
          "range": [
            442,
            447
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 36
            },
            "start": {
              "column": 16,
              "line": 36
            }
          }
        },
        "range": [
          430,
          447
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 36
          },
          "start": {
            "column": 4,
            "line": 36
          }
        }
      },
      "range": [
        426,
        483
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 36
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "range": [
                536,
                543
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 47
                },
                "start": {
                  "column": 2,
                  "line": 47
                }
              }
            },
            "range": [
              536,
              544
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 47
              },
              "start": {
                "column": 2,
                "line": 47
              }
            }
          }
        ],
        "range": [
          532,
          546
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 5,
            "line": 46
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "range": [
                516,
                523
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 44
                },
                "start": {
                  "column": 2,
                  "line": 44
                }
              }
            },
            "range": [
              516,
              524
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 44
              },
              "start": {
                "column": 2,
                "line": 44
              }
            }
          }
        ],
        "range": [
          512,
          526
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 27,
            "line": 43
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "range": [
            489,
            496
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 43
            },
            "start": {
              "column": 4,
              "line": 43
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "range": [
            501,
            510
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 43
            },
            "start": {
              "column": 16,
              "line": 43
            }
          }
        },
        "range": [
          489,
          510
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 43
          },
          "start": {
            "column": 4,
            "line": 43
          }
        }
      },
      "range": [
        485,
        546
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 43
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "range": [
                594,
                601
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 54
                },
                "start": {
                  "column": 2,
                  "line": 54
                }
              }
            },
            "range": [
              594,
              602
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 54
              },
              "start": {
                "column": 2,
                "line": 54
              }
            }
          }
        ],
        "range": [
          590,
          604
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 5,
            "line": 53
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "range": [
                574,
                581
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 51
                },
                "start": {
                  "column": 2,
                  "line": 51
                }
              }
            },
            "range": [
              574,
              582
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 51
              },
              "start": {
                "column": 2,
                "line": 51
              }
            }
          }
        ],
        "range": [
          570,
          584
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 22,
            "line": 50
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "===",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "range": [
            552,
            559
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 50
            },
            "start": {
              "column": 4,
              "line": 50
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "null",
          "value": null,
          "range": [
            564,
            568
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 50
            },
            "start": {
              "column": 16,
              "line": 50
            }
          }
        },
        "range": [
          552,
          568
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 50
          },
          "start": {
            "column": 4,
            "line": 50
          }
        }
      },
      "range": [
        548,
        604
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    },
    {
      "type": "IfStatement",
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "range": [
                656,
                663
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 61
                },
                "start": {
                  "column": 2,
                  "line": 61
                }
              }
            },
            "range": [
              656,
              664
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 61
              },
              "start": {
                "column": 2,
                "line": 61
              }
            }
          }
        ],
        "range": [
          652,
          666
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 62
          },
          "start": {
            "column": 5,
            "line": 60
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonNull",
              "optional": false,
              "range": [
                636,
                643
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 58
                },
                "start": {
                  "column": 2,
                  "line": 58
                }
              }
            },
            "range": [
              636,
              644
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 58
              },
              "start": {
                "column": 2,
                "line": 58
              }
            }
          }
        ],
        "range": [
          632,
          646
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 59
          },
          "start": {
            "column": 26,
            "line": 57
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonNull",
          "optional": false,
          "range": [
            610,
            617
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 57
            },
            "start": {
              "column": 4,
              "line": 57
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "range": [
            621,
            630
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 57
            },
            "start": {
              "column": 15,
              "line": 57
            }
          }
        },
        "range": [
          610,
          630
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 57
          },
          "start": {
            "column": 4,
            "line": 57
          }
        }
      },
      "range": [
        606,
        666
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 57
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
              695,
              698
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 65
              },
              "start": {
                "column": 6,
                "line": 65
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "raw": "'foo'",
                          "value": "foo",
                          "range": [
                            760,
                            765
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 67
                            },
                            "start": {
                              "column": 13,
                              "line": 67
                            }
                          }
                        },
                        "range": [
                          753,
                          766
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 67
                          },
                          "start": {
                            "column": 6,
                            "line": 67
                          }
                        }
                      }
                    ],
                    "range": [
                      745,
                      770
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 68
                      },
                      "start": {
                        "column": 14,
                        "line": 66
                      }
                    }
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        738,
                        743
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 66
                        },
                        "start": {
                          "column": 7,
                          "line": 66
                        }
                      }
                    },
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      737,
                      743
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 66
                      },
                      "start": {
                        "column": 6,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    733,
                    770
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 68
                    },
                    "start": {
                      "column": 2,
                      "line": 66
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "range": [
                            809,
                            814
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 70
                            },
                            "start": {
                              "column": 13,
                              "line": 70
                            }
                          }
                        },
                        "range": [
                          802,
                          815
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 70
                          },
                          "start": {
                            "column": 6,
                            "line": 70
                          }
                        }
                      }
                    ],
                    "range": [
                      794,
                      868
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 71
                      },
                      "start": {
                        "column": 23,
                        "line": 69
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "range": [
                        777,
                        782
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 69
                        },
                        "start": {
                          "column": 6,
                          "line": 69
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "'xyz'",
                      "value": "xyz",
                      "range": [
                        787,
                        792
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 69
                        },
                        "start": {
                          "column": 16,
                          "line": 69
                        }
                      }
                    },
                    "range": [
                      777,
                      792
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 69
                      },
                      "start": {
                        "column": 6,
                        "line": 69
                      }
                    }
                  },
                  "range": [
                    773,
                    868
                  ],
                  "loc": {
                    "end": {
                      "column": 3,
                      "line": 71
                    },
                    "start": {
                      "column": 2,
                      "line": 69
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "''",
                    "value": "",
                    "range": [
                      878,
                      880
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 72
                      },
                      "start": {
                        "column": 9,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    871,
                    881
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 72
                    },
                    "start": {
                      "column": 2,
                      "line": 72
                    }
                  }
                }
              ],
              "range": [
                729,
                883
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 73
                },
                "start": {
                  "column": 40,
                  "line": 65
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
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 65
                    },
                    "start": {
                      "column": 18,
                      "line": 65
                    }
                  },
                  "range": [
                    707,
                    716
                  ],
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "range": [
                      709,
                      716
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 65
                      },
                      "start": {
                        "column": 20,
                        "line": 65
                      }
                    }
                  }
                },
                "range": [
                  702,
                  716
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 65
                  },
                  "start": {
                    "column": 13,
                    "line": 65
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 65
                },
                "start": {
                  "column": 28,
                  "line": 65
                }
              },
              "range": [
                717,
                725
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  719,
                  725
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 65
                  },
                  "start": {
                    "column": 30,
                    "line": 65
                  }
                }
              }
            },
            "range": [
              701,
              883
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 73
              },
              "start": {
                "column": 12,
                "line": 65
              }
            }
          },
          "range": [
            695,
            883
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 73
            },
            "start": {
              "column": 6,
              "line": 65
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        689,
        884
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 65
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 74
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
