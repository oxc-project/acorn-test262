__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1321
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 1
                },
                "start": {
                  "column": 8,
                  "line": 1
                }
              },
              "range": [
                8,
                17
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  10,
                  17
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 1
                  },
                  "start": {
                    "column": 10,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              4,
              17
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            4,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 4,
              "line": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        0,
        18
      ],
      "loc": {
        "end": {
          "column": 18,
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
                        "column": 26,
                        "line": 3
                      },
                      "start": {
                        "column": 9,
                        "line": 3
                      }
                    },
                    "range": [
                      43,
                      60
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            45,
                            51
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 3
                            },
                            "start": {
                              "column": 11,
                              "line": 3
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            54,
                            60
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 3
                            },
                            "start": {
                              "column": 20,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        45,
                        60
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 3
                        },
                        "start": {
                          "column": 11,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    42,
                    60
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "init": null,
                "range": [
                  42,
                  60
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              38,
              61
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 3
              },
              "start": {
                "column": 4,
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
                "name": "x",
                "optional": false,
                "range": [
                  66,
                  67
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
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  70,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              },
              "range": [
                66,
                72
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              66,
              73
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      91,
                      92
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    91,
                    93
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
                }
              ],
              "range": [
                81,
                109
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 5
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                117,
                121
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
              78,
              122
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          32,
          124
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 8
          },
          "start": {
            "column": 13,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "range": [
          28,
          29
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "params": [],
      "range": [
        19,
        124
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 8
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
                        "column": 26,
                        "line": 10
                      },
                      "start": {
                        "column": 9,
                        "line": 10
                      }
                    },
                    "range": [
                      149,
                      166
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            151,
                            157
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 10
                            },
                            "start": {
                              "column": 11,
                              "line": 10
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            160,
                            166
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 10
                            },
                            "start": {
                              "column": 20,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        151,
                        166
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 10
                        },
                        "start": {
                          "column": 11,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    148,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "init": null,
                "range": [
                  148,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 26,
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
            "kind": "let",
            "range": [
              144,
              167
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
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
                "name": "x",
                "optional": false,
                "range": [
                  172,
                  173
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  176,
                  178
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
              "range": [
                172,
                178
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
                }
              }
            },
            "range": [
              172,
              179
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      197,
                      198
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    197,
                    199
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        218,
                        219
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        222,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 14
                        },
                        "start": {
                          "column": 12,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      218,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    218,
                    225
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "range": [
                    234,
                    240
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                187,
                246
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 7,
                  "line": 12
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                254,
                258
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 16
                },
                "start": {
                  "column": 13,
                  "line": 16
                }
              }
            },
            "range": [
              184,
              259
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          138,
          261
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 13,
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
        "name": "b",
        "optional": false,
        "range": [
          134,
          135
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 9
          },
          "start": {
            "column": 9,
            "line": 9
          }
        }
      },
      "params": [],
      "range": [
        125,
        261
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 19
                      },
                      "start": {
                        "column": 9,
                        "line": 19
                      }
                    },
                    "range": [
                      286,
                      303
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            288,
                            294
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 19
                            },
                            "start": {
                              "column": 11,
                              "line": 19
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            297,
                            303
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 19
                            },
                            "start": {
                              "column": 20,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "range": [
                        288,
                        303
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 19
                        },
                        "start": {
                          "column": 11,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    285,
                    303
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                "init": null,
                "range": [
                  285,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 26,
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
            "kind": "let",
            "range": [
              281,
              304
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 19
              },
              "start": {
                "column": 4,
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
                "name": "x",
                "optional": false,
                "range": [
                  309,
                  310
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 4,
                    "line": 20
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  313,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              },
              "range": [
                309,
                315
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 20
                }
              }
            },
            "range": [
              309,
              316
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      334,
                      335
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 22
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    334,
                    336
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
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        355,
                        356
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 23
                        },
                        "start": {
                          "column": 8,
                          "line": 23
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        359,
                        368
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 23
                        },
                        "start": {
                          "column": 12,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      355,
                      368
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    355,
                    369
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "ContinueStatement",
                    "label": null,
                    "range": [
                      405,
                      414
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 24
                      },
                      "start": {
                        "column": 35,
                        "line": 24
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          389,
                          390
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 24
                          },
                          "start": {
                            "column": 19,
                            "line": 24
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        382,
                        390
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 24
                        },
                        "start": {
                          "column": 12,
                          "line": 24
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"string\"",
                      "value": "string",
                      "range": [
                        395,
                        403
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 24
                        },
                        "start": {
                          "column": 25,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      382,
                      403
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 24
                      },
                      "start": {
                        "column": 12,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    378,
                    414
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "range": [
                    423,
                    429
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                324,
                435
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 7,
                  "line": 21
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                443,
                447
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
              321,
              448
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "range": [
          275,
          450
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 13,
            "line": 18
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "range": [
          271,
          272
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 18
          },
          "start": {
            "column": 9,
            "line": 18
          }
        }
      },
      "params": [],
      "range": [
        262,
        450
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 18
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 29
                      },
                      "start": {
                        "column": 9,
                        "line": 29
                      }
                    },
                    "range": [
                      475,
                      492
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            477,
                            483
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 29
                            },
                            "start": {
                              "column": 11,
                              "line": 29
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            486,
                            492
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 29
                            },
                            "start": {
                              "column": 20,
                              "line": 29
                            }
                          }
                        }
                      ],
                      "range": [
                        477,
                        492
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 29
                        },
                        "start": {
                          "column": 11,
                          "line": 29
                        }
                      }
                    }
                  },
                  "range": [
                    474,
                    492
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 29
                    },
                    "start": {
                      "column": 8,
                      "line": 29
                    }
                  }
                },
                "init": null,
                "range": [
                  474,
                  492
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 29
                  },
                  "start": {
                    "column": 8,
                    "line": 29
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              470,
              493
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
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
                "name": "x",
                "optional": false,
                "range": [
                  498,
                  499
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 30
                  },
                  "start": {
                    "column": 4,
                    "line": 30
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1000",
                "value": 1000,
                "range": [
                  502,
                  506
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 30
                  },
                  "start": {
                    "column": 8,
                    "line": 30
                  }
                }
              },
              "range": [
                498,
                506
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "range": [
              498,
              507
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      525,
                      526
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 32
                      },
                      "start": {
                        "column": 8,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    525,
                    527
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
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        546,
                        547
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 33
                        },
                        "start": {
                          "column": 8,
                          "line": 33
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        550,
                        552
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 33
                        },
                        "start": {
                          "column": 12,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      546,
                      552
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 33
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    546,
                    553
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                }
              ],
              "range": [
                515,
                559
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
                },
                "start": {
                  "column": 7,
                  "line": 31
                }
              }
            },
            "test": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  567,
                  568
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 34
                  },
                  "start": {
                    "column": 13,
                    "line": 34
                  }
                }
              },
              "right": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    571,
                    572
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 34
                    },
                    "start": {
                      "column": 17,
                      "line": 34
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
                    573,
                    579
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 34
                    },
                    "start": {
                      "column": 19,
                      "line": 34
                    }
                  }
                },
                "range": [
                  571,
                  579
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 34
                  },
                  "start": {
                    "column": 17,
                    "line": 34
                  }
                }
              },
              "range": [
                567,
                579
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 34
                },
                "start": {
                  "column": 13,
                  "line": 34
                }
              }
            },
            "range": [
              512,
              580
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                585,
                586
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
                }
              }
            },
            "range": [
              585,
              587
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          }
        ],
        "range": [
          464,
          599
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 36
          },
          "start": {
            "column": 13,
            "line": 28
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "range": [
          460,
          461
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 28
          },
          "start": {
            "column": 9,
            "line": 28
          }
        }
      },
      "params": [],
      "range": [
        451,
        599
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 28
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 38
                      },
                      "start": {
                        "column": 9,
                        "line": 38
                      }
                    },
                    "range": [
                      624,
                      641
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            626,
                            632
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 38
                            },
                            "start": {
                              "column": 11,
                              "line": 38
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            635,
                            641
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 38
                            },
                            "start": {
                              "column": 20,
                              "line": 38
                            }
                          }
                        }
                      ],
                      "range": [
                        626,
                        641
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 38
                        },
                        "start": {
                          "column": 11,
                          "line": 38
                        }
                      }
                    }
                  },
                  "range": [
                    623,
                    641
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                },
                "init": null,
                "range": [
                  623,
                  641
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 38
                  },
                  "start": {
                    "column": 8,
                    "line": 38
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              619,
              642
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
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
                "name": "x",
                "optional": false,
                "range": [
                  647,
                  648
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 39
                  },
                  "start": {
                    "column": 4,
                    "line": 39
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  651,
                  653
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
              "range": [
                647,
                653
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 39
                },
                "start": {
                  "column": 4,
                  "line": 39
                }
              }
            },
            "range": [
              647,
              654
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        672,
                        673
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 41
                        },
                        "start": {
                          "column": 8,
                          "line": 41
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "42",
                      "value": 42,
                      "range": [
                        676,
                        678
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 41
                        },
                        "start": {
                          "column": 12,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      672,
                      678
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    672,
                    679
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                }
              ],
              "range": [
                662,
                685
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 7,
                  "line": 40
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                693,
                697
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 42
                },
                "start": {
                  "column": 13,
                  "line": 42
                }
              }
            },
            "range": [
              659,
              698
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                703,
                704
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            },
            "range": [
              703,
              705
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          }
        ],
        "range": [
          613,
          717
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 13,
            "line": 37
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "range": [
          609,
          610
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 37
          },
          "start": {
            "column": 9,
            "line": 37
          }
        }
      },
      "params": [],
      "range": [
        600,
        717
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 37
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 46
                      },
                      "start": {
                        "column": 9,
                        "line": 46
                      }
                    },
                    "range": [
                      742,
                      789
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            744,
                            750
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 46
                            },
                            "start": {
                              "column": 11,
                              "line": 46
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            753,
                            759
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 46
                            },
                            "start": {
                              "column": 20,
                              "line": 46
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            762,
                            769
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 46
                            },
                            "start": {
                              "column": 29,
                              "line": 46
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "range": [
                              772,
                              778
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 46
                              },
                              "start": {
                                "column": 39,
                                "line": 46
                              }
                            }
                          },
                          "range": [
                            772,
                            778
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 46
                            },
                            "start": {
                              "column": 39,
                              "line": 46
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Function",
                            "optional": false,
                            "range": [
                              781,
                              789
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 46
                              },
                              "start": {
                                "column": 48,
                                "line": 46
                              }
                            }
                          },
                          "range": [
                            781,
                            789
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 46
                            },
                            "start": {
                              "column": 48,
                              "line": 46
                            }
                          }
                        }
                      ],
                      "range": [
                        744,
                        789
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 46
                        },
                        "start": {
                          "column": 11,
                          "line": 46
                        }
                      }
                    }
                  },
                  "range": [
                    741,
                    789
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                },
                "init": null,
                "range": [
                  741,
                  789
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 46
                  },
                  "start": {
                    "column": 8,
                    "line": 46
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              737,
              790
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 46
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
                "name": "x",
                "optional": false,
                "range": [
                  795,
                  796
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
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  799,
                  801
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 47
                  },
                  "start": {
                    "column": 8,
                    "line": 47
                  }
                }
              },
              "range": [
                795,
                801
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "range": [
              795,
              802
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          {
            "type": "DoWhileStatement",
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              844,
                              845
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 50
                              },
                              "start": {
                                "column": 12,
                                "line": 50
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "42",
                            "value": 42,
                            "range": [
                              848,
                              850
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 50
                              },
                              "start": {
                                "column": 16,
                                "line": 50
                              }
                            }
                          },
                          "range": [
                            844,
                            850
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 50
                            },
                            "start": {
                              "column": 12,
                              "line": 50
                            }
                          }
                        },
                        "range": [
                          844,
                          851
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 50
                          },
                          "start": {
                            "column": 12,
                            "line": 50
                          }
                        }
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "range": [
                          864,
                          870
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 51
                          },
                          "start": {
                            "column": 12,
                            "line": 51
                          }
                        }
                      }
                    ],
                    "range": [
                      830,
                      880
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 52
                      },
                      "start": {
                        "column": 18,
                        "line": 49
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "range": [
                      824,
                      828
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 49
                      },
                      "start": {
                        "column": 12,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    820,
                    880
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 52
                    },
                    "start": {
                      "column": 8,
                      "line": 49
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              913,
                              914
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 54
                              },
                              "start": {
                                "column": 12,
                                "line": 54
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              917,
                              921
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 54
                              },
                              "start": {
                                "column": 16,
                                "line": 54
                              }
                            }
                          },
                          "range": [
                            913,
                            921
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 54
                            },
                            "start": {
                              "column": 12,
                              "line": 54
                            }
                          }
                        },
                        "range": [
                          913,
                          922
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 54
                          },
                          "start": {
                            "column": 12,
                            "line": 54
                          }
                        }
                      },
                      {
                        "type": "ContinueStatement",
                        "label": null,
                        "range": [
                          935,
                          944
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 55
                          },
                          "start": {
                            "column": 12,
                            "line": 55
                          }
                        }
                      }
                    ],
                    "range": [
                      899,
                      954
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 56
                      },
                      "start": {
                        "column": 18,
                        "line": 53
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "range": [
                      893,
                      897
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 53
                      },
                      "start": {
                        "column": 12,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    889,
                    954
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 56
                    },
                    "start": {
                      "column": 8,
                      "line": 53
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        963,
                        964
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 57
                        },
                        "start": {
                          "column": 8,
                          "line": 57
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "/a/",
                      "regex": {
                        "flags": "",
                        "pattern": "a"
                      },
                      "value": null,
                      "range": [
                        967,
                        970
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 57
                        },
                        "start": {
                          "column": 12,
                          "line": 57
                        }
                      }
                    },
                    "range": [
                      963,
                      970
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 57
                      },
                      "start": {
                        "column": 8,
                        "line": 57
                      }
                    }
                  },
                  "range": [
                    963,
                    971
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 57
                    },
                    "start": {
                      "column": 8,
                      "line": 57
                    }
                  }
                }
              ],
              "range": [
                810,
                977
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 58
                },
                "start": {
                  "column": 7,
                  "line": 48
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                985,
                989
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 58
                },
                "start": {
                  "column": 13,
                  "line": 58
                }
              }
            },
            "range": [
              807,
              990
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 58
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                995,
                996
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
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
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          }
        ],
        "range": [
          731,
          1028
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 60
          },
          "start": {
            "column": 13,
            "line": 45
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
          727,
          728
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 45
          },
          "start": {
            "column": 9,
            "line": 45
          }
        }
      },
      "params": [],
      "range": [
        718,
        1028
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 45
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 62
                      },
                      "start": {
                        "column": 9,
                        "line": 62
                      }
                    },
                    "range": [
                      1053,
                      1100
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1055,
                            1061
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 62
                            },
                            "start": {
                              "column": 11,
                              "line": 62
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1064,
                            1070
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 62
                            },
                            "start": {
                              "column": 20,
                              "line": 62
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1073,
                            1080
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 62
                            },
                            "start": {
                              "column": 29,
                              "line": 62
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "range": [
                              1083,
                              1089
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 62
                              },
                              "start": {
                                "column": 39,
                                "line": 62
                              }
                            }
                          },
                          "range": [
                            1083,
                            1089
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 62
                            },
                            "start": {
                              "column": 39,
                              "line": 62
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Function",
                            "optional": false,
                            "range": [
                              1092,
                              1100
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 62
                              },
                              "start": {
                                "column": 48,
                                "line": 62
                              }
                            }
                          },
                          "range": [
                            1092,
                            1100
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 62
                            },
                            "start": {
                              "column": 48,
                              "line": 62
                            }
                          }
                        }
                      ],
                      "range": [
                        1055,
                        1100
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 62
                        },
                        "start": {
                          "column": 11,
                          "line": 62
                        }
                      }
                    }
                  },
                  "range": [
                    1052,
                    1100
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 62
                    },
                    "start": {
                      "column": 8,
                      "line": 62
                    }
                  }
                },
                "init": null,
                "range": [
                  1052,
                  1100
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 62
                  },
                  "start": {
                    "column": 8,
                    "line": 62
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1048,
              1101
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
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
                "name": "x",
                "optional": false,
                "range": [
                  1106,
                  1107
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 63
                  },
                  "start": {
                    "column": 4,
                    "line": 63
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  1110,
                  1112
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 63
                  },
                  "start": {
                    "column": 8,
                    "line": 63
                  }
                }
              },
              "range": [
                1106,
                1112
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 63
                },
                "start": {
                  "column": 4,
                  "line": 63
                }
              }
            },
            "range": [
              1106,
              1113
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          },
          {
            "type": "DoWhileStatement",
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              1155,
                              1156
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 66
                              },
                              "start": {
                                "column": 12,
                                "line": 66
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "42",
                            "value": 42,
                            "range": [
                              1159,
                              1161
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 66
                              },
                              "start": {
                                "column": 16,
                                "line": 66
                              }
                            }
                          },
                          "range": [
                            1155,
                            1161
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 66
                            },
                            "start": {
                              "column": 12,
                              "line": 66
                            }
                          }
                        },
                        "range": [
                          1155,
                          1162
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 66
                          },
                          "start": {
                            "column": 12,
                            "line": 66
                          }
                        }
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "range": [
                          1175,
                          1181
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
                    ],
                    "range": [
                      1141,
                      1191
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 68
                      },
                      "start": {
                        "column": 18,
                        "line": 65
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "range": [
                      1135,
                      1139
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 65
                      },
                      "start": {
                        "column": 12,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    1131,
                    1191
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 68
                    },
                    "start": {
                      "column": 8,
                      "line": 65
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              1224,
                              1225
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 70
                              },
                              "start": {
                                "column": 12,
                                "line": 70
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              1228,
                              1232
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 70
                              },
                              "start": {
                                "column": 16,
                                "line": 70
                              }
                            }
                          },
                          "range": [
                            1224,
                            1232
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 70
                            },
                            "start": {
                              "column": 12,
                              "line": 70
                            }
                          }
                        },
                        "range": [
                          1224,
                          1233
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 70
                          },
                          "start": {
                            "column": 12,
                            "line": 70
                          }
                        }
                      },
                      {
                        "type": "ContinueStatement",
                        "label": null,
                        "range": [
                          1246,
                          1255
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 71
                          },
                          "start": {
                            "column": 12,
                            "line": 71
                          }
                        }
                      }
                    ],
                    "range": [
                      1210,
                      1265
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 72
                      },
                      "start": {
                        "column": 18,
                        "line": 69
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "range": [
                      1204,
                      1208
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 69
                      },
                      "start": {
                        "column": 12,
                        "line": 69
                      }
                    }
                  },
                  "range": [
                    1200,
                    1265
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 69
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
                      "name": "x",
                      "optional": false,
                      "range": [
                        1274,
                        1275
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 73
                        },
                        "start": {
                          "column": 8,
                          "line": 73
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "/a/",
                      "regex": {
                        "flags": "",
                        "pattern": "a"
                      },
                      "value": null,
                      "range": [
                        1278,
                        1281
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 73
                        },
                        "start": {
                          "column": 12,
                          "line": 73
                        }
                      }
                    },
                    "range": [
                      1274,
                      1281
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 73
                      },
                      "start": {
                        "column": 8,
                        "line": 73
                      }
                    }
                  },
                  "range": [
                    1274,
                    1282
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 73
                    }
                  }
                }
              ],
              "range": [
                1121,
                1288
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 74
                },
                "start": {
                  "column": 7,
                  "line": 64
                }
              }
            },
            "test": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                1296,
                1300
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 74
                },
                "start": {
                  "column": 13,
                  "line": 74
                }
              }
            },
            "range": [
              1118,
              1301
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1306,
                1307
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 75
                },
                "start": {
                  "column": 4,
                  "line": 75
                }
              }
            },
            "range": [
              1306,
              1308
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
        "range": [
          1042,
          1320
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 76
          },
          "start": {
            "column": 13,
            "line": 61
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "range": [
          1038,
          1039
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 61
          },
          "start": {
            "column": 9,
            "line": 61
          }
        }
      },
      "params": [],
      "range": [
        1029,
        1320
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 77
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
