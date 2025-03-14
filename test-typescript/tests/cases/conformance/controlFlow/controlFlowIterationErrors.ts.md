__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1326
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
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "range": [
                  57,
                  58
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "range": [
                  59,
                  65
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
              },
              "range": [
                57,
                65
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              50,
              66
            ],
            "loc": {
              "end": {
                "column": 20,
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
          44,
          68
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 24,
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
        "name": "len",
        "optional": false,
        "range": [
          29,
          32
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
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
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
              34,
              42
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                36,
                42
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
            33,
            42
          ],
          "loc": {
            "end": {
              "column": 22,
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
        20,
        68
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
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    },
                    "range": [
                      95,
                      122
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            97,
                            103
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 8
                            },
                            "start": {
                              "column": 11,
                              "line": 8
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            106,
                            112
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 8
                            },
                            "start": {
                              "column": 20,
                              "line": 8
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            115,
                            122
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 8
                            },
                            "start": {
                              "column": 29,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "range": [
                        97,
                        122
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 8
                        },
                        "start": {
                          "column": 11,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    94,
                    122
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "init": null,
                "range": [
                  94,
                  122
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              90,
              123
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
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
                  128,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  132,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              },
              "range": [
                128,
                134
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              128,
              135
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "WhileStatement",
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
                        163,
                        164
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
                    "right": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            171,
                            172
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 11
                            },
                            "start": {
                              "column": 16,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "range": [
                          167,
                          170
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 11
                          },
                          "start": {
                            "column": 12,
                            "line": 11
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        167,
                        173
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 11
                        },
                        "start": {
                          "column": 12,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      163,
                      173
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 11
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    163,
                    174
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      183,
                      184
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
                  "range": [
                    183,
                    185
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
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
                153,
                191
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 17,
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
                147,
                151
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 10
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "range": [
              140,
              191
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
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                196,
                197
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              196,
              198
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          84,
          200
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 14,
            "line": 7
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
          79,
          81
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "params": [],
      "range": [
        70,
        200
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
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
                        "line": 18
                      },
                      "start": {
                        "column": 9,
                        "line": 18
                      }
                    },
                    "range": [
                      227,
                      254
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            229,
                            235
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 18
                            },
                            "start": {
                              "column": 11,
                              "line": 18
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            238,
                            244
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 18
                            },
                            "start": {
                              "column": 20,
                              "line": 18
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            247,
                            254
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 18
                            },
                            "start": {
                              "column": 29,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "range": [
                        229,
                        254
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 18
                        },
                        "start": {
                          "column": 11,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    226,
                    254
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
                },
                "init": null,
                "range": [
                  226,
                  254
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
            "kind": "let",
            "range": [
              222,
              255
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
                  260,
                  261
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  264,
                  266
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
              "range": [
                260,
                266
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "range": [
              260,
              267
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
          {
            "type": "WhileStatement",
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
                      295,
                      296
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 21
                      },
                      "start": {
                        "column": 8,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    295,
                    297
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
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
                        306,
                        307
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
                    "right": {
                      "type": "CallExpression",
                      "arguments": [
                        {
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
                              "column": 17,
                              "line": 22
                            },
                            "start": {
                              "column": 16,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "len",
                        "optional": false,
                        "range": [
                          310,
                          313
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 22
                          },
                          "start": {
                            "column": 12,
                            "line": 22
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        310,
                        316
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 22
                        },
                        "start": {
                          "column": 12,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      306,
                      316
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
                  "range": [
                    306,
                    317
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                285,
                323
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 17,
                  "line": 20
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                279,
                283
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 20
                },
                "start": {
                  "column": 11,
                  "line": 20
                }
              }
            },
            "range": [
              272,
              323
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 20
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
                328,
                329
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 24
                },
                "start": {
                  "column": 4,
                  "line": 24
                }
              }
            },
            "range": [
              328,
              330
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          216,
          332
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 25
          },
          "start": {
            "column": 14,
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
        "name": "f2",
        "optional": false,
        "range": [
          211,
          213
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
      "params": [],
      "range": [
        202,
        332
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 17
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
        "name": "foo",
        "optional": false,
        "range": [
          351,
          354
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 27
          },
          "start": {
            "column": 17,
            "line": 27
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
                "column": 30,
                "line": 27
              },
              "start": {
                "column": 22,
                "line": 27
              }
            },
            "range": [
              356,
              364
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                358,
                364
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 27
                },
                "start": {
                  "column": 24,
                  "line": 27
                }
              }
            }
          },
          "range": [
            355,
            364
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 27
            },
            "start": {
              "column": 21,
              "line": 27
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 27
          },
          "start": {
            "column": 31,
            "line": 27
          }
        },
        "range": [
          365,
          373
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            367,
            373
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 27
            },
            "start": {
              "column": 33,
              "line": 27
            }
          }
        }
      },
      "range": [
        334,
        374
      ],
      "loc": {
        "end": {
          "column": 40,
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
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "range": [
          392,
          395
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 28
          },
          "start": {
            "column": 17,
            "line": 28
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
                "column": 30,
                "line": 28
              },
              "start": {
                "column": 22,
                "line": 28
              }
            },
            "range": [
              397,
              405
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                399,
                405
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 28
                },
                "start": {
                  "column": 24,
                  "line": 28
                }
              }
            }
          },
          "range": [
            396,
            405
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 28
            },
            "start": {
              "column": 21,
              "line": 28
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 39,
            "line": 28
          },
          "start": {
            "column": 31,
            "line": 28
          }
        },
        "range": [
          406,
          414
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            408,
            414
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 28
            },
            "start": {
              "column": 33,
              "line": 28
            }
          }
        }
      },
      "range": [
        375,
        415
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 28
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
                        "column": 36,
                        "line": 31
                      },
                      "start": {
                        "column": 9,
                        "line": 31
                      }
                    },
                    "range": [
                      442,
                      469
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            444,
                            450
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 31
                            },
                            "start": {
                              "column": 11,
                              "line": 31
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            453,
                            459
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 31
                            },
                            "start": {
                              "column": 20,
                              "line": 31
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            462,
                            469
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 31
                            },
                            "start": {
                              "column": 29,
                              "line": 31
                            }
                          }
                        }
                      ],
                      "range": [
                        444,
                        469
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 31
                        },
                        "start": {
                          "column": 11,
                          "line": 31
                        }
                      }
                    }
                  },
                  "range": [
                    441,
                    469
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
                },
                "init": null,
                "range": [
                  441,
                  469
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
            "kind": "let",
            "range": [
              437,
              470
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
                  475,
                  476
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 32
                  },
                  "start": {
                    "column": 4,
                    "line": 32
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  479,
                  481
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
              "range": [
                475,
                481
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 32
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            "range": [
              475,
              482
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
              }
            }
          },
          {
            "type": "WhileStatement",
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
                        510,
                        511
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "arguments": [
                        {
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
                              "column": 17,
                              "line": 34
                            },
                            "start": {
                              "column": 16,
                              "line": 34
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
                          514,
                          517
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 34
                          },
                          "start": {
                            "column": 12,
                            "line": 34
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        514,
                        520
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 34
                        },
                        "start": {
                          "column": 12,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      510,
                      520
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    510,
                    521
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
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
                      530,
                      531
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    530,
                    532
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
                }
              ],
              "range": [
                500,
                538
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 36
                },
                "start": {
                  "column": 17,
                  "line": 33
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                494,
                498
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 33
                },
                "start": {
                  "column": 11,
                  "line": 33
                }
              }
            },
            "range": [
              487,
              538
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 33
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
                543,
                544
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "range": [
              543,
              545
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
        "range": [
          431,
          547
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 14,
            "line": 30
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "range": [
          426,
          428
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
      "params": [],
      "range": [
        417,
        547
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
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
                        "line": 41
                      },
                      "start": {
                        "column": 9,
                        "line": 41
                      }
                    },
                    "range": [
                      574,
                      601
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            576,
                            582
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 41
                            },
                            "start": {
                              "column": 11,
                              "line": 41
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            585,
                            591
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 41
                            },
                            "start": {
                              "column": 20,
                              "line": 41
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            594,
                            601
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 41
                            },
                            "start": {
                              "column": 29,
                              "line": 41
                            }
                          }
                        }
                      ],
                      "range": [
                        576,
                        601
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 41
                        },
                        "start": {
                          "column": 11,
                          "line": 41
                        }
                      }
                    }
                  },
                  "range": [
                    573,
                    601
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 41
                    },
                    "start": {
                      "column": 8,
                      "line": 41
                    }
                  }
                },
                "init": null,
                "range": [
                  573,
                  601
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 41
                  },
                  "start": {
                    "column": 8,
                    "line": 41
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              569,
              602
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
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
                  607,
                  608
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 42
                  },
                  "start": {
                    "column": 4,
                    "line": 42
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  611,
                  613
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 42
                  },
                  "start": {
                    "column": 8,
                    "line": 42
                  }
                }
              },
              "range": [
                607,
                613
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 42
                }
              }
            },
            "range": [
              607,
              614
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          {
            "type": "WhileStatement",
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
                      642,
                      643
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 44
                      },
                      "start": {
                        "column": 8,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    642,
                    644
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 44
                    },
                    "start": {
                      "column": 8,
                      "line": 44
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
                        653,
                        654
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 45
                        },
                        "start": {
                          "column": 8,
                          "line": 45
                        }
                      }
                    },
                    "right": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            661,
                            662
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 45
                            },
                            "start": {
                              "column": 16,
                              "line": 45
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
                          657,
                          660
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 45
                          },
                          "start": {
                            "column": 12,
                            "line": 45
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        657,
                        663
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 45
                        },
                        "start": {
                          "column": 12,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      653,
                      663
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 45
                      },
                      "start": {
                        "column": 8,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    653,
                    664
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                }
              ],
              "range": [
                632,
                670
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 17,
                  "line": 43
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                626,
                630
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 43
                },
                "start": {
                  "column": 11,
                  "line": 43
                }
              }
            },
            "range": [
              619,
              670
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 46
              },
              "start": {
                "column": 4,
                "line": 43
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
                675,
                676
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
            "range": [
              675,
              677
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
        "range": [
          563,
          679
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 14,
            "line": 40
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
          558,
          560
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 40
          },
          "start": {
            "column": 9,
            "line": 40
          }
        }
      },
      "params": [],
      "range": [
        549,
        679
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 40
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
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  741,
                  742
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 51
                  },
                  "start": {
                    "column": 12,
                    "line": 51
                  }
                }
              },
              "operator": "+",
              "prefix": true,
              "range": [
                740,
                742
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 51
                },
                "start": {
                  "column": 11,
                  "line": 51
                }
              }
            },
            "range": [
              733,
              743
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          }
        ],
        "range": [
          727,
          745
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 46,
            "line": 50
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asNumber",
        "optional": false,
        "range": [
          690,
          698
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 50
          },
          "start": {
            "column": 9,
            "line": 50
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
                "column": 36,
                "line": 50
              },
              "start": {
                "column": 19,
                "line": 50
              }
            },
            "range": [
              700,
              717
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    702,
                    708
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 50
                    },
                    "start": {
                      "column": 21,
                      "line": 50
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    711,
                    717
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 50
                    },
                    "start": {
                      "column": 30,
                      "line": 50
                    }
                  }
                }
              ],
              "range": [
                702,
                717
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 50
                },
                "start": {
                  "column": 21,
                  "line": 50
                }
              }
            }
          },
          "range": [
            699,
            717
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 50
            },
            "start": {
              "column": 18,
              "line": 50
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 45,
            "line": 50
          },
          "start": {
            "column": 37,
            "line": 50
          }
        },
        "range": [
          718,
          726
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            720,
            726
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 50
            },
            "start": {
              "column": 39,
              "line": 50
            }
          }
        }
      },
      "range": [
        681,
        745
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 50
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
                        "line": 55
                      },
                      "start": {
                        "column": 9,
                        "line": 55
                      }
                    },
                    "range": [
                      772,
                      799
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            774,
                            780
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 55
                            },
                            "start": {
                              "column": 11,
                              "line": 55
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            783,
                            789
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 55
                            },
                            "start": {
                              "column": 20,
                              "line": 55
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            792,
                            799
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 55
                            },
                            "start": {
                              "column": 29,
                              "line": 55
                            }
                          }
                        }
                      ],
                      "range": [
                        774,
                        799
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 55
                        },
                        "start": {
                          "column": 11,
                          "line": 55
                        }
                      }
                    }
                  },
                  "range": [
                    771,
                    799
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 55
                    },
                    "start": {
                      "column": 8,
                      "line": 55
                    }
                  }
                },
                "init": null,
                "range": [
                  771,
                  799
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 55
                  },
                  "start": {
                    "column": 8,
                    "line": 55
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              767,
              800
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
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
                  805,
                  806
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
              },
              "right": {
                "type": "Literal",
                "raw": "\"0\"",
                "value": "0",
                "range": [
                  809,
                  812
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 56
                  },
                  "start": {
                    "column": 8,
                    "line": 56
                  }
                }
              },
              "range": [
                805,
                812
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            },
            "range": [
              805,
              813
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          },
          {
            "type": "WhileStatement",
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
                        841,
                        842
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 58
                        },
                        "start": {
                          "column": 8,
                          "line": 58
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "UnaryExpression",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            846,
                            847
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
                        "operator": "+",
                        "prefix": true,
                        "range": [
                          845,
                          847
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 58
                          },
                          "start": {
                            "column": 12,
                            "line": 58
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          850,
                          851
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 58
                          },
                          "start": {
                            "column": 17,
                            "line": 58
                          }
                        }
                      },
                      "range": [
                        845,
                        851
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 58
                        },
                        "start": {
                          "column": 12,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      841,
                      851
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 58
                      },
                      "start": {
                        "column": 8,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    841,
                    852
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
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
                      861,
                      862
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 59
                      },
                      "start": {
                        "column": 8,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    861,
                    863
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                }
              ],
              "range": [
                831,
                869
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 17,
                  "line": 57
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                825,
                829
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 57
                },
                "start": {
                  "column": 11,
                  "line": 57
                }
              }
            },
            "range": [
              818,
              869
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          }
        ],
        "range": [
          761,
          871
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 14,
            "line": 54
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h1",
        "optional": false,
        "range": [
          756,
          758
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 54
          },
          "start": {
            "column": 9,
            "line": 54
          }
        }
      },
      "params": [],
      "range": [
        747,
        871
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 54
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
                        "line": 64
                      },
                      "start": {
                        "column": 9,
                        "line": 64
                      }
                    },
                    "range": [
                      898,
                      925
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            900,
                            906
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 64
                            },
                            "start": {
                              "column": 11,
                              "line": 64
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            909,
                            915
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 64
                            },
                            "start": {
                              "column": 20,
                              "line": 64
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            918,
                            925
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 64
                            },
                            "start": {
                              "column": 29,
                              "line": 64
                            }
                          }
                        }
                      ],
                      "range": [
                        900,
                        925
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 64
                        },
                        "start": {
                          "column": 11,
                          "line": 64
                        }
                      }
                    }
                  },
                  "range": [
                    897,
                    925
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 64
                    },
                    "start": {
                      "column": 8,
                      "line": 64
                    }
                  }
                },
                "init": null,
                "range": [
                  897,
                  925
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 64
                  },
                  "start": {
                    "column": 8,
                    "line": 64
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              893,
              926
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 64
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  931,
                  932
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 65
                  },
                  "start": {
                    "column": 4,
                    "line": 65
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"0\"",
                "value": "0",
                "range": [
                  935,
                  938
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 65
                  },
                  "start": {
                    "column": 8,
                    "line": 65
                  }
                }
              },
              "range": [
                931,
                938
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
                }
              }
            },
            "range": [
              931,
              939
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          },
          {
            "type": "WhileStatement",
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
                        967,
                        968
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 67
                        },
                        "start": {
                          "column": 8,
                          "line": 67
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              980,
                              981
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
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "asNumber",
                          "optional": false,
                          "range": [
                            971,
                            979
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 67
                            },
                            "start": {
                              "column": 12,
                              "line": 67
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          971,
                          982
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 67
                          },
                          "start": {
                            "column": 12,
                            "line": 67
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          985,
                          986
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 67
                          },
                          "start": {
                            "column": 26,
                            "line": 67
                          }
                        }
                      },
                      "range": [
                        971,
                        986
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 67
                        },
                        "start": {
                          "column": 12,
                          "line": 67
                        }
                      }
                    },
                    "range": [
                      967,
                      986
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 67
                      },
                      "start": {
                        "column": 8,
                        "line": 67
                      }
                    }
                  },
                  "range": [
                    967,
                    987
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 67
                    },
                    "start": {
                      "column": 8,
                      "line": 67
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
                      996,
                      997
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 68
                      },
                      "start": {
                        "column": 8,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    996,
                    998
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 68
                    },
                    "start": {
                      "column": 8,
                      "line": 68
                    }
                  }
                }
              ],
              "range": [
                957,
                1004
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 69
                },
                "start": {
                  "column": 17,
                  "line": 66
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                951,
                955
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 66
                },
                "start": {
                  "column": 11,
                  "line": 66
                }
              }
            },
            "range": [
              944,
              1004
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
          }
        ],
        "range": [
          887,
          1006
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 14,
            "line": 63
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h2",
        "optional": false,
        "range": [
          882,
          884
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 63
          },
          "start": {
            "column": 9,
            "line": 63
          }
        }
      },
      "params": [],
      "range": [
        873,
        1006
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 63
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
                        "line": 73
                      },
                      "start": {
                        "column": 9,
                        "line": 73
                      }
                    },
                    "range": [
                      1033,
                      1060
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1035,
                            1041
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 73
                            },
                            "start": {
                              "column": 11,
                              "line": 73
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1044,
                            1050
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 73
                            },
                            "start": {
                              "column": 20,
                              "line": 73
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1053,
                            1060
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 73
                            },
                            "start": {
                              "column": 29,
                              "line": 73
                            }
                          }
                        }
                      ],
                      "range": [
                        1035,
                        1060
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 73
                        },
                        "start": {
                          "column": 11,
                          "line": 73
                        }
                      }
                    }
                  },
                  "range": [
                    1032,
                    1060
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 73
                    }
                  }
                },
                "init": null,
                "range": [
                  1032,
                  1060
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 73
                  },
                  "start": {
                    "column": 8,
                    "line": 73
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1028,
              1061
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
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
                  1066,
                  1067
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 74
                  },
                  "start": {
                    "column": 4,
                    "line": 74
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"0\"",
                "value": "0",
                "range": [
                  1070,
                  1073
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 74
                  },
                  "start": {
                    "column": 8,
                    "line": 74
                  }
                }
              },
              "range": [
                1066,
                1073
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 74
                },
                "start": {
                  "column": 4,
                  "line": 74
                }
              }
            },
            "range": [
              1066,
              1074
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 74
              },
              "start": {
                "column": 4,
                "line": 74
              }
            }
          },
          {
            "type": "WhileStatement",
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
                        "name": "y",
                        "optional": false,
                        "range": [
                          1106,
                          1107
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 76
                          },
                          "start": {
                            "column": 12,
                            "line": 76
                          }
                        }
                      },
                      "init": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              1119,
                              1120
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 76
                              },
                              "start": {
                                "column": 25,
                                "line": 76
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "asNumber",
                          "optional": false,
                          "range": [
                            1110,
                            1118
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 76
                            },
                            "start": {
                              "column": 16,
                              "line": 76
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1110,
                          1121
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 76
                          },
                          "start": {
                            "column": 16,
                            "line": 76
                          }
                        }
                      },
                      "range": [
                        1106,
                        1121
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 76
                        },
                        "start": {
                          "column": 12,
                          "line": 76
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1102,
                    1122
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 76
                    },
                    "start": {
                      "column": 8,
                      "line": 76
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
                        1131,
                        1132
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 77
                        },
                        "start": {
                          "column": 8,
                          "line": 77
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1135,
                          1136
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 77
                          },
                          "start": {
                            "column": 12,
                            "line": 77
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1139,
                          1140
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 77
                          },
                          "start": {
                            "column": 16,
                            "line": 77
                          }
                        }
                      },
                      "range": [
                        1135,
                        1140
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 77
                        },
                        "start": {
                          "column": 12,
                          "line": 77
                        }
                      }
                    },
                    "range": [
                      1131,
                      1140
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 77
                      },
                      "start": {
                        "column": 8,
                        "line": 77
                      }
                    }
                  },
                  "range": [
                    1131,
                    1141
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 77
                    },
                    "start": {
                      "column": 8,
                      "line": 77
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
                      1150,
                      1151
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 78
                      },
                      "start": {
                        "column": 8,
                        "line": 78
                      }
                    }
                  },
                  "range": [
                    1150,
                    1152
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 78
                    },
                    "start": {
                      "column": 8,
                      "line": 78
                    }
                  }
                }
              ],
              "range": [
                1092,
                1158
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 79
                },
                "start": {
                  "column": 17,
                  "line": 75
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1086,
                1090
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 75
                },
                "start": {
                  "column": 11,
                  "line": 75
                }
              }
            },
            "range": [
              1079,
              1158
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          }
        ],
        "range": [
          1022,
          1160
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 80
          },
          "start": {
            "column": 14,
            "line": 72
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h3",
        "optional": false,
        "range": [
          1017,
          1019
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
      "params": [],
      "range": [
        1008,
        1160
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 72
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
                        "line": 83
                      },
                      "start": {
                        "column": 9,
                        "line": 83
                      }
                    },
                    "range": [
                      1187,
                      1214
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1189,
                            1195
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 83
                            },
                            "start": {
                              "column": 11,
                              "line": 83
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1198,
                            1204
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 83
                            },
                            "start": {
                              "column": 20,
                              "line": 83
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1207,
                            1214
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 83
                            },
                            "start": {
                              "column": 29,
                              "line": 83
                            }
                          }
                        }
                      ],
                      "range": [
                        1189,
                        1214
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 83
                        },
                        "start": {
                          "column": 11,
                          "line": 83
                        }
                      }
                    }
                  },
                  "range": [
                    1186,
                    1214
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 83
                    },
                    "start": {
                      "column": 8,
                      "line": 83
                    }
                  }
                },
                "init": null,
                "range": [
                  1186,
                  1214
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 83
                  },
                  "start": {
                    "column": 8,
                    "line": 83
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1182,
              1215
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
                  1220,
                  1221
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 84
                  },
                  "start": {
                    "column": 4,
                    "line": 84
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"0\"",
                "value": "0",
                "range": [
                  1224,
                  1227
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 84
                  },
                  "start": {
                    "column": 8,
                    "line": 84
                  }
                }
              },
              "range": [
                1220,
                1227
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 84
                },
                "start": {
                  "column": 4,
                  "line": 84
                }
              }
            },
            "range": [
              1220,
              1228
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 84
              },
              "start": {
                "column": 4,
                "line": 84
              }
            }
          },
          {
            "type": "WhileStatement",
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
                      1256,
                      1257
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 86
                      },
                      "start": {
                        "column": 8,
                        "line": 86
                      }
                    }
                  },
                  "range": [
                    1256,
                    1258
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 86
                    },
                    "start": {
                      "column": 8,
                      "line": 86
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
                        "range": [
                          1271,
                          1272
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 87
                          },
                          "start": {
                            "column": 12,
                            "line": 87
                          }
                        }
                      },
                      "init": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              1284,
                              1285
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 87
                              },
                              "start": {
                                "column": 25,
                                "line": 87
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "asNumber",
                          "optional": false,
                          "range": [
                            1275,
                            1283
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 87
                            },
                            "start": {
                              "column": 16,
                              "line": 87
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1275,
                          1286
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 87
                          },
                          "start": {
                            "column": 16,
                            "line": 87
                          }
                        }
                      },
                      "range": [
                        1271,
                        1286
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 87
                        },
                        "start": {
                          "column": 12,
                          "line": 87
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1267,
                    1287
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 87
                    },
                    "start": {
                      "column": 8,
                      "line": 87
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
                        1296,
                        1297
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 88
                        },
                        "start": {
                          "column": 8,
                          "line": 88
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1300,
                          1301
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 88
                          },
                          "start": {
                            "column": 12,
                            "line": 88
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1304,
                          1305
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 88
                          },
                          "start": {
                            "column": 16,
                            "line": 88
                          }
                        }
                      },
                      "range": [
                        1300,
                        1305
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 88
                        },
                        "start": {
                          "column": 12,
                          "line": 88
                        }
                      }
                    },
                    "range": [
                      1296,
                      1305
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 88
                      },
                      "start": {
                        "column": 8,
                        "line": 88
                      }
                    }
                  },
                  "range": [
                    1296,
                    1306
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 88
                    },
                    "start": {
                      "column": 8,
                      "line": 88
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
                      1315,
                      1316
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 89
                      },
                      "start": {
                        "column": 8,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    1315,
                    1317
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 89
                    },
                    "start": {
                      "column": 8,
                      "line": 89
                    }
                  }
                }
              ],
              "range": [
                1246,
                1323
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 90
                },
                "start": {
                  "column": 17,
                  "line": 85
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1240,
                1244
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 85
                },
                "start": {
                  "column": 11,
                  "line": 85
                }
              }
            },
            "range": [
              1233,
              1323
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          }
        ],
        "range": [
          1176,
          1325
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 91
          },
          "start": {
            "column": 14,
            "line": 82
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "h4",
        "optional": false,
        "range": [
          1171,
          1173
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 82
          },
          "start": {
            "column": 9,
            "line": 82
          }
        }
      },
      "params": [],
      "range": [
        1162,
        1325
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 91
        },
        "start": {
          "column": 0,
          "line": 82
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 92
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
