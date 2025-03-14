__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    923
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
                        "column": 36,
                        "line": 3
                      },
                      "start": {
                        "column": 9,
                        "line": 3
                      }
                    },
                    "range": [
                      43,
                      70
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
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            63,
                            70
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 3
                            },
                            "start": {
                              "column": 29,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        45,
                        70
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
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
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
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
                  70
                ],
                "loc": {
                  "end": {
                    "column": 36,
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
              71
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "ForStatement",
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
                      112,
                      113
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    112,
                    114
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                102,
                139
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 30,
                  "line": 4
                }
              }
            },
            "init": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  81,
                  82
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
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  85,
                  87
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 4
                  },
                  "start": {
                    "column": 13,
                    "line": 4
                  }
                }
              },
              "range": [
                81,
                87
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                89,
                93
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 4
                },
                "start": {
                  "column": 17,
                  "line": 4
                }
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  95,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 4
                  },
                  "start": {
                    "column": 23,
                    "line": 4
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "5",
                "value": 5,
                "range": [
                  99,
                  100
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 4
                  },
                  "start": {
                    "column": 27,
                    "line": 4
                  }
                }
              },
              "range": [
                95,
                100
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 4
                },
                "start": {
                  "column": 23,
                  "line": 4
                }
              }
            },
            "range": [
              76,
              139
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          32,
          141
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
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
        141
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
                        "column": 36,
                        "line": 9
                      },
                      "start": {
                        "column": 9,
                        "line": 9
                      }
                    },
                    "range": [
                      166,
                      193
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            168,
                            174
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 9
                            },
                            "start": {
                              "column": 11,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            177,
                            183
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
                          "type": "TSBooleanKeyword",
                          "range": [
                            186,
                            193
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 9
                            },
                            "start": {
                              "column": 29,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        168,
                        193
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 9
                        },
                        "start": {
                          "column": 11,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    165,
                    193
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "init": null,
                "range": [
                  165,
                  193
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              161,
              194
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "ForStatement",
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
                      241,
                      242
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    241,
                    243
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
                        262,
                        263
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 12
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"\"",
                      "value": "",
                      "range": [
                        266,
                        268
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 12
                        },
                        "start": {
                          "column": 12,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      262,
                      268
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    262,
                    269
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                }
              ],
              "range": [
                231,
                275
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 36,
                  "line": 10
                }
              }
            },
            "init": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  204,
                  205
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 10
                  },
                  "start": {
                    "column": 9,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "5",
                "value": 5,
                "range": [
                  208,
                  209
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 10
                  },
                  "start": {
                    "column": 13,
                    "line": 10
                  }
                }
              },
              "range": [
                204,
                209
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 10
                },
                "start": {
                  "column": 9,
                  "line": 10
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                211,
                215
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 10
                },
                "start": {
                  "column": 16,
                  "line": 10
                }
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  217,
                  218
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 10
                  },
                  "start": {
                    "column": 22,
                    "line": 10
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
                    221,
                    222
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 10
                    },
                    "start": {
                      "column": 26,
                      "line": 10
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
                    223,
                    229
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 10
                    },
                    "start": {
                      "column": 28,
                      "line": 10
                    }
                  }
                },
                "range": [
                  221,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 10
                  },
                  "start": {
                    "column": 26,
                    "line": 10
                  }
                }
              },
              "range": [
                217,
                229
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 10
                },
                "start": {
                  "column": 22,
                  "line": 10
                }
              }
            },
            "range": [
              199,
              275
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          155,
          277
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 14
          },
          "start": {
            "column": 13,
            "line": 8
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
          151,
          152
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [],
      "range": [
        142,
        277
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 8
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
                        "column": 36,
                        "line": 16
                      },
                      "start": {
                        "column": 9,
                        "line": 16
                      }
                    },
                    "range": [
                      302,
                      329
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            304,
                            310
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 16
                            },
                            "start": {
                              "column": 11,
                              "line": 16
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            313,
                            319
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
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            322,
                            329
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 16
                            },
                            "start": {
                              "column": 29,
                              "line": 16
                            }
                          }
                        }
                      ],
                      "range": [
                        304,
                        329
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 16
                        },
                        "start": {
                          "column": 11,
                          "line": 16
                        }
                      }
                    }
                  },
                  "range": [
                    301,
                    329
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 16
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                },
                "init": null,
                "range": [
                  301,
                  329
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 16
                  },
                  "start": {
                    "column": 8,
                    "line": 16
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              297,
              330
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          {
            "type": "ForStatement",
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
                      387,
                      388
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    387,
                    389
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
                }
              ],
              "range": [
                377,
                405
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 19
                },
                "start": {
                  "column": 46,
                  "line": 17
                }
              }
            },
            "init": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  340,
                  341
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 17
                  },
                  "start": {
                    "column": 9,
                    "line": 17
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "5",
                "value": 5,
                "range": [
                  344,
                  345
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 17
                  },
                  "start": {
                    "column": 13,
                    "line": 17
                  }
                }
              },
              "range": [
                340,
                345
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 17
                },
                "start": {
                  "column": 9,
                  "line": 17
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
                  347,
                  348
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 17
                  },
                  "start": {
                    "column": 16,
                    "line": 17
                  }
                }
              },
              "right": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      351,
                      352
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 17
                      },
                      "start": {
                        "column": 20,
                        "line": 17
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toExponential",
                    "optional": false,
                    "range": [
                      353,
                      366
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 17
                      },
                      "start": {
                        "column": 22,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    351,
                    366
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 17
                    },
                    "start": {
                      "column": 20,
                      "line": 17
                    }
                  }
                },
                "optional": false,
                "range": [
                  351,
                  368
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 17
                  },
                  "start": {
                    "column": 20,
                    "line": 17
                  }
                }
              },
              "range": [
                347,
                368
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 17
                },
                "start": {
                  "column": 16,
                  "line": 17
                }
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  370,
                  371
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 17
                  },
                  "start": {
                    "column": 39,
                    "line": 17
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "5",
                "value": 5,
                "range": [
                  374,
                  375
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 17
                  },
                  "start": {
                    "column": 43,
                    "line": 17
                  }
                }
              },
              "range": [
                370,
                375
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 17
                },
                "start": {
                  "column": 39,
                  "line": 17
                }
              }
            },
            "range": [
              335,
              405
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          291,
          407
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 13,
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
        "name": "c",
        "optional": false,
        "range": [
          287,
          288
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [],
      "range": [
        278,
        407
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 15
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
                        "column": 36,
                        "line": 22
                      },
                      "start": {
                        "column": 9,
                        "line": 22
                      }
                    },
                    "range": [
                      432,
                      459
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            434,
                            440
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 22
                            },
                            "start": {
                              "column": 11,
                              "line": 22
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            443,
                            449
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 22
                            },
                            "start": {
                              "column": 20,
                              "line": 22
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            452,
                            459
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 22
                            },
                            "start": {
                              "column": 29,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "range": [
                        434,
                        459
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 22
                        },
                        "start": {
                          "column": 11,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    431,
                    459
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
                },
                "init": null,
                "range": [
                  431,
                  459
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
            "kind": "let",
            "range": [
              427,
              460
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
            "type": "ForStatement",
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
                      518,
                      519
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    518,
                    520
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                508,
                536
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 47,
                  "line": 23
                }
              }
            },
            "init": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  470,
                  471
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 23
                  },
                  "start": {
                    "column": 9,
                    "line": 23
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  474,
                  476
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 23
                  },
                  "start": {
                    "column": 13,
                    "line": 23
                  }
                }
              },
              "range": [
                470,
                476
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 23
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
                    485,
                    486
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 23
                    },
                    "start": {
                      "column": 24,
                      "line": 23
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  478,
                  486
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 23
                  },
                  "start": {
                    "column": 17,
                    "line": 23
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  491,
                  499
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 23
                  },
                  "start": {
                    "column": 30,
                    "line": 23
                  }
                }
              },
              "range": [
                478,
                499
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 23
                },
                "start": {
                  "column": 17,
                  "line": 23
                }
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  501,
                  502
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 23
                  },
                  "start": {
                    "column": 40,
                    "line": 23
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "5",
                "value": 5,
                "range": [
                  505,
                  506
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 23
                  },
                  "start": {
                    "column": 44,
                    "line": 23
                  }
                }
              },
              "range": [
                501,
                506
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 23
                },
                "start": {
                  "column": 40,
                  "line": 23
                }
              }
            },
            "range": [
              465,
              536
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          }
        ],
        "range": [
          421,
          538
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 13,
            "line": 21
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
          417,
          418
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
      "params": [],
      "range": [
        408,
        538
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 21
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
                        "column": 45,
                        "line": 28
                      },
                      "start": {
                        "column": 9,
                        "line": 28
                      }
                    },
                    "range": [
                      563,
                      599
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            565,
                            571
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 28
                            },
                            "start": {
                              "column": 11,
                              "line": 28
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            574,
                            580
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 28
                            },
                            "start": {
                              "column": 20,
                              "line": 28
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            583,
                            590
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 28
                            },
                            "start": {
                              "column": 29,
                              "line": 28
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
                              593,
                              599
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 28
                              },
                              "start": {
                                "column": 39,
                                "line": 28
                              }
                            }
                          },
                          "range": [
                            593,
                            599
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 28
                            },
                            "start": {
                              "column": 39,
                              "line": 28
                            }
                          }
                        }
                      ],
                      "range": [
                        565,
                        599
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 28
                        },
                        "start": {
                          "column": 11,
                          "line": 28
                        }
                      }
                    }
                  },
                  "range": [
                    562,
                    599
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                },
                "init": null,
                "range": [
                  562,
                  599
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 28
                  },
                  "start": {
                    "column": 8,
                    "line": 28
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              558,
              600
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "ForStatement",
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
                      672,
                      673
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    672,
                    674
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                662,
                700
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 31
                },
                "start": {
                  "column": 61,
                  "line": 29
                }
              }
            },
            "init": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  610,
                  611
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 29
                  },
                  "start": {
                    "column": 9,
                    "line": 29
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "Literal",
                  "raw": "\"\"",
                  "value": "",
                  "range": [
                    614,
                    616
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 29
                    },
                    "start": {
                      "column": 13,
                      "line": 29
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    620,
                    621
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 29
                    },
                    "start": {
                      "column": 19,
                      "line": 29
                    }
                  }
                },
                "range": [
                  614,
                  621
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 29
                  },
                  "start": {
                    "column": 13,
                    "line": 29
                  }
                }
              },
              "range": [
                610,
                621
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 29
                },
                "start": {
                  "column": 9,
                  "line": 29
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    630,
                    631
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 29
                    },
                    "start": {
                      "column": 29,
                      "line": 29
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  623,
                  631
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 29
                  },
                  "start": {
                    "column": 22,
                    "line": 29
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  636,
                  644
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 29
                  },
                  "start": {
                    "column": 35,
                    "line": 29
                  }
                }
              },
              "range": [
                623,
                644
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 29
                },
                "start": {
                  "column": 22,
                  "line": 29
                }
              }
            },
            "update": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  646,
                  647
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 29
                  },
                  "start": {
                    "column": 45,
                    "line": 29
                  }
                }
              },
              "right": {
                "type": "LogicalExpression",
                "operator": "||",
                "left": {
                  "type": "Literal",
                  "raw": "\"\"",
                  "value": "",
                  "range": [
                    650,
                    652
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 29
                    },
                    "start": {
                      "column": 49,
                      "line": 29
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "true",
                  "value": true,
                  "range": [
                    656,
                    660
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 29
                    },
                    "start": {
                      "column": 55,
                      "line": 29
                    }
                  }
                },
                "range": [
                  650,
                  660
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 29
                  },
                  "start": {
                    "column": 49,
                    "line": 29
                  }
                }
              },
              "range": [
                646,
                660
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 29
                },
                "start": {
                  "column": 45,
                  "line": 29
                }
              }
            },
            "range": [
              605,
              700
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          }
        ],
        "range": [
          552,
          702
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 13,
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
        "name": "e",
        "optional": false,
        "range": [
          548,
          549
        ],
        "loc": {
          "end": {
            "column": 10,
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
        539,
        702
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 27
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
                        "column": 36,
                        "line": 34
                      },
                      "start": {
                        "column": 9,
                        "line": 34
                      }
                    },
                    "range": [
                      727,
                      754
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            729,
                            735
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 34
                            },
                            "start": {
                              "column": 11,
                              "line": 34
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            738,
                            744
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 34
                            },
                            "start": {
                              "column": 20,
                              "line": 34
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            747,
                            754
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 34
                            },
                            "start": {
                              "column": 29,
                              "line": 34
                            }
                          }
                        }
                      ],
                      "range": [
                        729,
                        754
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 34
                        },
                        "start": {
                          "column": 11,
                          "line": 34
                        }
                      }
                    }
                  },
                  "range": [
                    726,
                    754
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
                    }
                  }
                },
                "init": null,
                "range": [
                  726,
                  754
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 34
                  },
                  "start": {
                    "column": 8,
                    "line": 34
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              722,
              755
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          },
          {
            "type": "ForStatement",
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
                      801,
                      802
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    801,
                    803
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
                {
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      859,
                      865
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 37
                      },
                      "start": {
                        "column": 35,
                        "line": 37
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
                          843,
                          844
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 37
                          },
                          "start": {
                            "column": 19,
                            "line": 37
                          }
                        }
                      },
                      "operator": "typeof",
                      "prefix": true,
                      "range": [
                        836,
                        844
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 37
                        },
                        "start": {
                          "column": 12,
                          "line": 37
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"number\"",
                      "value": "number",
                      "range": [
                        849,
                        857
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 37
                        },
                        "start": {
                          "column": 25,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      836,
                      857
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 37
                      },
                      "start": {
                        "column": 12,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    832,
                    865
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
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
                        874,
                        875
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 38
                        },
                        "start": {
                          "column": 8,
                          "line": 38
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        878,
                        887
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 38
                        },
                        "start": {
                          "column": 12,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      874,
                      887
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 38
                      },
                      "start": {
                        "column": 8,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    874,
                    888
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 38
                    },
                    "start": {
                      "column": 8,
                      "line": 38
                    }
                  }
                }
              ],
              "range": [
                791,
                894
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 39
                },
                "start": {
                  "column": 35,
                  "line": 35
                }
              }
            },
            "init": null,
            "test": {
              "type": "BinaryExpression",
              "operator": "!==",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    774,
                    775
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 35
                    },
                    "start": {
                      "column": 18,
                      "line": 35
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  767,
                  775
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 35
                  },
                  "start": {
                    "column": 11,
                    "line": 35
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  780,
                  788
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 35
                  },
                  "start": {
                    "column": 24,
                    "line": 35
                  }
                }
              },
              "range": [
                767,
                788
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 35
                },
                "start": {
                  "column": 11,
                  "line": 35
                }
              }
            },
            "update": null,
            "range": [
              760,
              894
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 35
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
                899,
                900
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
                }
              }
            },
            "range": [
              899,
              901
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
        "range": [
          716,
          922
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 13,
            "line": 33
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
          712,
          713
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 33
          },
          "start": {
            "column": 9,
            "line": 33
          }
        }
      },
      "params": [],
      "range": [
        703,
        922
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 42
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
