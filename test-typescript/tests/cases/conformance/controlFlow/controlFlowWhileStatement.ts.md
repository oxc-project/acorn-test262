__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1915
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
                      101,
                      102
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
                    101,
                    103
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
                91,
                119
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 17,
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
                85,
                89
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 5
                },
                "start": {
                  "column": 11,
                  "line": 5
                }
              }
            },
            "range": [
              78,
              119
            ],
            "loc": {
              "end": {
                "column": 5,
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
          121
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
        121
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
                      146,
                      163
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            148,
                            154
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
                            157,
                            163
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
                        148,
                        163
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
                    145,
                    163
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
                  145,
                  163
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
              141,
              164
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
                  169,
                  170
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
                  173,
                  175
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
                169,
                175
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
              169,
              176
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
                      204,
                      205
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
                    204,
                    206
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
                        225,
                        226
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
                        229,
                        231
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
                      225,
                      231
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
                    225,
                    232
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
                    241,
                    247
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
                194,
                253
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 16
                },
                "start": {
                  "column": 17,
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
                188,
                192
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 12
                },
                "start": {
                  "column": 11,
                  "line": 12
                }
              }
            },
            "range": [
              181,
              253
            ],
            "loc": {
              "end": {
                "column": 5,
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
          135,
          255
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
          131,
          132
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
        122,
        255
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
                      280,
                      297
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            282,
                            288
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
                            291,
                            297
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
                        282,
                        297
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
                    279,
                    297
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
                  279,
                  297
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
              275,
              298
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
                  303,
                  304
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
                  307,
                  309
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
                303,
                309
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
              303,
              310
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
                      338,
                      339
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
                    338,
                    340
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
                        359,
                        360
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
                        363,
                        372
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
                      359,
                      372
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
                    359,
                    373
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
                      409,
                      418
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
                          393,
                          394
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
                        386,
                        394
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
                        399,
                        407
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
                      386,
                      407
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
                    382,
                    418
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
                    427,
                    433
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
                328,
                439
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 17,
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
                322,
                326
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "range": [
              315,
              439
            ],
            "loc": {
              "end": {
                "column": 5,
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
          269,
          441
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
          265,
          266
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
        256,
        441
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
                      466,
                      483
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            468,
                            474
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
                            477,
                            483
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
                        468,
                        483
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
                    465,
                    483
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
                  465,
                  483
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
              461,
              484
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
                  489,
                  490
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
                "raw": "\"\"",
                "value": "",
                "range": [
                  493,
                  495
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
              },
              "range": [
                489,
                495
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "range": [
              489,
              496
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
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
                      532,
                      533
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
                    532,
                    534
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
                        553,
                        554
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
                        557,
                        559
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
                      553,
                      559
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
                    553,
                    560
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
                522,
                566
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 34
                },
                "start": {
                  "column": 25,
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
                  508,
                  509
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 31
                  },
                  "start": {
                    "column": 11,
                    "line": 31
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
                    512,
                    513
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 31
                    },
                    "start": {
                      "column": 15,
                      "line": 31
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
                    514,
                    520
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 31
                    },
                    "start": {
                      "column": 17,
                      "line": 31
                    }
                  }
                },
                "range": [
                  512,
                  520
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 31
                  },
                  "start": {
                    "column": 15,
                    "line": 31
                  }
                }
              },
              "range": [
                508,
                520
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 31
                },
                "start": {
                  "column": 11,
                  "line": 31
                }
              }
            },
            "range": [
              501,
              566
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "range": [
          455,
          568
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
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
          451,
          452
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
        442,
        568
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
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
                        "line": 37
                      },
                      "start": {
                        "column": 9,
                        "line": 37
                      }
                    },
                    "range": [
                      593,
                      610
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            595,
                            601
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 37
                            },
                            "start": {
                              "column": 11,
                              "line": 37
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            604,
                            610
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 37
                            },
                            "start": {
                              "column": 20,
                              "line": 37
                            }
                          }
                        }
                      ],
                      "range": [
                        595,
                        610
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 37
                        },
                        "start": {
                          "column": 11,
                          "line": 37
                        }
                      }
                    }
                  },
                  "range": [
                    592,
                    610
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 37
                    }
                  }
                },
                "init": null,
                "range": [
                  592,
                  610
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 37
                  },
                  "start": {
                    "column": 8,
                    "line": 37
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              588,
              611
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
                  616,
                  617
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 38
                  },
                  "start": {
                    "column": 4,
                    "line": 38
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  620,
                  622
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 38
                  },
                  "start": {
                    "column": 8,
                    "line": 38
                  }
                }
              },
              "range": [
                616,
                622
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "range": [
              616,
              623
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
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
                      651,
                      652
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    651,
                    653
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
                        681,
                        682
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
                        685,
                        687
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
                      681,
                      687
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
                    681,
                    688
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
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      697,
                      698
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 42
                      },
                      "start": {
                        "column": 8,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    697,
                    699
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
                }
              ],
              "range": [
                641,
                715
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 43
                },
                "start": {
                  "column": 17,
                  "line": 39
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                635,
                639
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 39
                },
                "start": {
                  "column": 11,
                  "line": 39
                }
              }
            },
            "range": [
              628,
              715
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 39
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
                720,
                721
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "range": [
              720,
              722
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
        "range": [
          582,
          743
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 13,
            "line": 36
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
          578,
          579
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
      "params": [],
      "range": [
        569,
        743
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 36
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
                        "line": 47
                      },
                      "start": {
                        "column": 9,
                        "line": 47
                      }
                    },
                    "range": [
                      768,
                      815
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            770,
                            776
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 47
                            },
                            "start": {
                              "column": 11,
                              "line": 47
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            779,
                            785
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 47
                            },
                            "start": {
                              "column": 20,
                              "line": 47
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            788,
                            795
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 47
                            },
                            "start": {
                              "column": 29,
                              "line": 47
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
                              798,
                              804
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 47
                              },
                              "start": {
                                "column": 39,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            798,
                            804
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 47
                            },
                            "start": {
                              "column": 39,
                              "line": 47
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
                              807,
                              815
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 47
                              },
                              "start": {
                                "column": 48,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            807,
                            815
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 47
                            },
                            "start": {
                              "column": 48,
                              "line": 47
                            }
                          }
                        }
                      ],
                      "range": [
                        770,
                        815
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 47
                        },
                        "start": {
                          "column": 11,
                          "line": 47
                        }
                      }
                    }
                  },
                  "range": [
                    767,
                    815
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                },
                "init": null,
                "range": [
                  767,
                  815
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 47
                  },
                  "start": {
                    "column": 8,
                    "line": 47
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              763,
              816
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
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
                  821,
                  822
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
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  825,
                  827
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 48
                  },
                  "start": {
                    "column": 8,
                    "line": 48
                  }
                }
              },
              "range": [
                821,
                827
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 48
                }
              }
            },
            "range": [
              821,
              828
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          },
          {
            "type": "WhileStatement",
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
                              880,
                              881
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
                          "right": {
                            "type": "Literal",
                            "raw": "42",
                            "value": 42,
                            "range": [
                              884,
                              886
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 51
                              },
                              "start": {
                                "column": 16,
                                "line": 51
                              }
                            }
                          },
                          "range": [
                            880,
                            886
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
                        },
                        "range": [
                          880,
                          887
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 51
                          },
                          "start": {
                            "column": 12,
                            "line": 51
                          }
                        }
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "range": [
                          900,
                          906
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 52
                          },
                          "start": {
                            "column": 12,
                            "line": 52
                          }
                        }
                      }
                    ],
                    "range": [
                      866,
                      916
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 53
                      },
                      "start": {
                        "column": 18,
                        "line": 50
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "range": [
                      860,
                      864
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 50
                      },
                      "start": {
                        "column": 12,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    856,
                    916
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 53
                    },
                    "start": {
                      "column": 8,
                      "line": 50
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
                              949,
                              950
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 55
                              },
                              "start": {
                                "column": 12,
                                "line": 55
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              953,
                              957
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 55
                              },
                              "start": {
                                "column": 16,
                                "line": 55
                              }
                            }
                          },
                          "range": [
                            949,
                            957
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 55
                            },
                            "start": {
                              "column": 12,
                              "line": 55
                            }
                          }
                        },
                        "range": [
                          949,
                          958
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
                      },
                      {
                        "type": "ContinueStatement",
                        "label": null,
                        "range": [
                          971,
                          980
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 56
                          },
                          "start": {
                            "column": 12,
                            "line": 56
                          }
                        }
                      }
                    ],
                    "range": [
                      935,
                      990
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 57
                      },
                      "start": {
                        "column": 18,
                        "line": 54
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "range": [
                      929,
                      933
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 54
                      },
                      "start": {
                        "column": 12,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    925,
                    990
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 57
                    },
                    "start": {
                      "column": 8,
                      "line": 54
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
                        999,
                        1000
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
                      "type": "Literal",
                      "raw": "/a/",
                      "regex": {
                        "flags": "",
                        "pattern": "a"
                      },
                      "value": null,
                      "range": [
                        1003,
                        1006
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 58
                        },
                        "start": {
                          "column": 12,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      999,
                      1006
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
                  },
                  "range": [
                    999,
                    1007
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 58
                    },
                    "start": {
                      "column": 8,
                      "line": 58
                    }
                  }
                }
              ],
              "range": [
                846,
                1013
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 59
                },
                "start": {
                  "column": 17,
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
                840,
                844
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 49
                },
                "start": {
                  "column": 11,
                  "line": 49
                }
              }
            },
            "range": [
              833,
              1013
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 49
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
                1018,
                1019
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 60
                },
                "start": {
                  "column": 4,
                  "line": 60
                }
              }
            },
            "range": [
              1018,
              1020
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          }
        ],
        "range": [
          757,
          1060
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 13,
            "line": 46
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
          753,
          754
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 46
          },
          "start": {
            "column": 9,
            "line": 46
          }
        }
      },
      "params": [],
      "range": [
        744,
        1060
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 46
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
                        "line": 63
                      },
                      "start": {
                        "column": 9,
                        "line": 63
                      }
                    },
                    "range": [
                      1085,
                      1132
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1087,
                            1093
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 63
                            },
                            "start": {
                              "column": 11,
                              "line": 63
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1096,
                            1102
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 63
                            },
                            "start": {
                              "column": 20,
                              "line": 63
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1105,
                            1112
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 63
                            },
                            "start": {
                              "column": 29,
                              "line": 63
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
                              1115,
                              1121
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 63
                              },
                              "start": {
                                "column": 39,
                                "line": 63
                              }
                            }
                          },
                          "range": [
                            1115,
                            1121
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 63
                            },
                            "start": {
                              "column": 39,
                              "line": 63
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
                              1124,
                              1132
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 63
                              },
                              "start": {
                                "column": 48,
                                "line": 63
                              }
                            }
                          },
                          "range": [
                            1124,
                            1132
                          ],
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 63
                            },
                            "start": {
                              "column": 48,
                              "line": 63
                            }
                          }
                        }
                      ],
                      "range": [
                        1087,
                        1132
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 63
                        },
                        "start": {
                          "column": 11,
                          "line": 63
                        }
                      }
                    }
                  },
                  "range": [
                    1084,
                    1132
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 63
                    },
                    "start": {
                      "column": 8,
                      "line": 63
                    }
                  }
                },
                "init": null,
                "range": [
                  1084,
                  1132
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 63
                  },
                  "start": {
                    "column": 8,
                    "line": 63
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1080,
              1133
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
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
                  1138,
                  1139
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 64
                  },
                  "start": {
                    "column": 4,
                    "line": 64
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  1142,
                  1144
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 64
                  },
                  "start": {
                    "column": 8,
                    "line": 64
                  }
                }
              },
              "range": [
                1138,
                1144
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 64
                },
                "start": {
                  "column": 4,
                  "line": 64
                }
              }
            },
            "range": [
              1138,
              1145
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          },
          {
            "type": "WhileStatement",
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
                              1197,
                              1198
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
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
                            "raw": "42",
                            "value": 42,
                            "range": [
                              1201,
                              1203
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 67
                              },
                              "start": {
                                "column": 16,
                                "line": 67
                              }
                            }
                          },
                          "range": [
                            1197,
                            1203
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
                        },
                        "range": [
                          1197,
                          1204
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 67
                          },
                          "start": {
                            "column": 12,
                            "line": 67
                          }
                        }
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "range": [
                          1217,
                          1223
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 68
                          },
                          "start": {
                            "column": 12,
                            "line": 68
                          }
                        }
                      }
                    ],
                    "range": [
                      1183,
                      1233
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 69
                      },
                      "start": {
                        "column": 18,
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
                      1177,
                      1181
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 66
                      },
                      "start": {
                        "column": 12,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    1173,
                    1233
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 69
                    },
                    "start": {
                      "column": 8,
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
                              1266,
                              1267
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 71
                              },
                              "start": {
                                "column": 12,
                                "line": 71
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "true",
                            "value": true,
                            "range": [
                              1270,
                              1274
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 71
                              },
                              "start": {
                                "column": 16,
                                "line": 71
                              }
                            }
                          },
                          "range": [
                            1266,
                            1274
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 71
                            },
                            "start": {
                              "column": 12,
                              "line": 71
                            }
                          }
                        },
                        "range": [
                          1266,
                          1275
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
                      },
                      {
                        "type": "ContinueStatement",
                        "label": null,
                        "range": [
                          1288,
                          1297
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 72
                          },
                          "start": {
                            "column": 12,
                            "line": 72
                          }
                        }
                      }
                    ],
                    "range": [
                      1252,
                      1307
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 73
                      },
                      "start": {
                        "column": 18,
                        "line": 70
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "range": [
                      1246,
                      1250
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 70
                      },
                      "start": {
                        "column": 12,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    1242,
                    1307
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 70
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
                        1316,
                        1317
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 74
                        },
                        "start": {
                          "column": 8,
                          "line": 74
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
                        1320,
                        1323
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 74
                        },
                        "start": {
                          "column": 12,
                          "line": 74
                        }
                      }
                    },
                    "range": [
                      1316,
                      1323
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 74
                      },
                      "start": {
                        "column": 8,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    1316,
                    1324
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 74
                    },
                    "start": {
                      "column": 8,
                      "line": 74
                    }
                  }
                }
              ],
              "range": [
                1163,
                1330
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 75
                },
                "start": {
                  "column": 17,
                  "line": 65
                }
              }
            },
            "test": {
              "type": "Literal",
              "raw": "true",
              "value": true,
              "range": [
                1157,
                1161
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 65
                },
                "start": {
                  "column": 11,
                  "line": 65
                }
              }
            },
            "range": [
              1150,
              1330
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 65
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
                1335,
                1336
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 76
                },
                "start": {
                  "column": 4,
                  "line": 76
                }
              }
            },
            "range": [
              1335,
              1337
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          }
        ],
        "range": [
          1074,
          1349
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 77
          },
          "start": {
            "column": 13,
            "line": 62
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
          1070,
          1071
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 62
          },
          "start": {
            "column": 9,
            "line": 62
          }
        }
      },
      "params": [],
      "range": [
        1061,
        1349
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 62
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
                        "line": 79
                      },
                      "start": {
                        "column": 9,
                        "line": 79
                      }
                    },
                    "range": [
                      1375,
                      1402
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1377,
                            1383
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 79
                            },
                            "start": {
                              "column": 11,
                              "line": 79
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1386,
                            1392
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 79
                            },
                            "start": {
                              "column": 20,
                              "line": 79
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1395,
                            1402
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 79
                            },
                            "start": {
                              "column": 29,
                              "line": 79
                            }
                          }
                        }
                      ],
                      "range": [
                        1377,
                        1402
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 79
                        },
                        "start": {
                          "column": 11,
                          "line": 79
                        }
                      }
                    }
                  },
                  "range": [
                    1374,
                    1402
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 79
                    },
                    "start": {
                      "column": 8,
                      "line": 79
                    }
                  }
                },
                "init": null,
                "range": [
                  1374,
                  1402
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 79
                  },
                  "start": {
                    "column": 8,
                    "line": 79
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1370,
              1403
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
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
                  1408,
                  1409
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 80
                  },
                  "start": {
                    "column": 4,
                    "line": 80
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  1412,
                  1414
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 80
                  },
                  "start": {
                    "column": 8,
                    "line": 80
                  }
                }
              },
              "range": [
                1408,
                1414
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 80
                },
                "start": {
                  "column": 4,
                  "line": 80
                }
              }
            },
            "range": [
              1408,
              1415
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 80
              },
              "start": {
                "column": 4,
                "line": 80
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
                      1444,
                      1445
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 82
                      },
                      "start": {
                        "column": 8,
                        "line": 82
                      }
                    }
                  },
                  "range": [
                    1444,
                    1446
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 82
                    },
                    "start": {
                      "column": 8,
                      "line": 82
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
                        1474,
                        1475
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 83
                        },
                        "start": {
                          "column": 8,
                          "line": 83
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1478,
                        1479
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 83
                        },
                        "start": {
                          "column": 12,
                          "line": 83
                        }
                      }
                    },
                    "range": [
                      1474,
                      1479
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 83
                      },
                      "start": {
                        "column": 8,
                        "line": 83
                      }
                    }
                  },
                  "range": [
                    1474,
                    1480
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
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1489,
                      1490
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 84
                      },
                      "start": {
                        "column": 8,
                        "line": 84
                      }
                    }
                  },
                  "range": [
                    1489,
                    1491
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 84
                    },
                    "start": {
                      "column": 8,
                      "line": 84
                    }
                  }
                }
              ],
              "range": [
                1434,
                1507
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 85
                },
                "start": {
                  "column": 18,
                  "line": 81
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": ">",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1427,
                  1428
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 81
                  },
                  "start": {
                    "column": 11,
                    "line": 81
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1431,
                  1432
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 81
                  },
                  "start": {
                    "column": 15,
                    "line": 81
                  }
                }
              },
              "range": [
                1427,
                1432
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 81
                },
                "start": {
                  "column": 11,
                  "line": 81
                }
              }
            },
            "range": [
              1420,
              1507
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 81
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
                1512,
                1513
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 86
                },
                "start": {
                  "column": 4,
                  "line": 86
                }
              }
            },
            "range": [
              1512,
              1514
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 86
              },
              "start": {
                "column": 4,
                "line": 86
              }
            }
          }
        ],
        "range": [
          1364,
          1535
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 87
          },
          "start": {
            "column": 14,
            "line": 78
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
          1359,
          1361
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 78
          },
          "start": {
            "column": 9,
            "line": 78
          }
        }
      },
      "params": [],
      "range": [
        1350,
        1535
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 87
        },
        "start": {
          "column": 0,
          "line": 78
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
        "name": "len",
        "optional": false,
        "range": [
          1553,
          1556
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 88
          },
          "start": {
            "column": 17,
            "line": 88
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
                "column": 39,
                "line": 88
              },
              "start": {
                "column": 22,
                "line": 88
              }
            },
            "range": [
              1558,
              1575
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    1560,
                    1566
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 88
                    },
                    "start": {
                      "column": 24,
                      "line": 88
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    1569,
                    1575
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 88
                    },
                    "start": {
                      "column": 33,
                      "line": 88
                    }
                  }
                }
              ],
              "range": [
                1560,
                1575
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 88
                },
                "start": {
                  "column": 24,
                  "line": 88
                }
              }
            }
          },
          "range": [
            1557,
            1575
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 88
            },
            "start": {
              "column": 21,
              "line": 88
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 48,
            "line": 88
          },
          "start": {
            "column": 40,
            "line": 88
          }
        },
        "range": [
          1576,
          1584
        ],
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "range": [
            1578,
            1584
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 88
            },
            "start": {
              "column": 42,
              "line": 88
            }
          }
        }
      },
      "range": [
        1536,
        1585
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 88
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
                        "line": 90
                      },
                      "start": {
                        "column": 9,
                        "line": 90
                      }
                    },
                    "range": [
                      1611,
                      1638
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1613,
                            1619
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 90
                            },
                            "start": {
                              "column": 11,
                              "line": 90
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1622,
                            1628
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 90
                            },
                            "start": {
                              "column": 20,
                              "line": 90
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1631,
                            1638
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 90
                            },
                            "start": {
                              "column": 29,
                              "line": 90
                            }
                          }
                        }
                      ],
                      "range": [
                        1613,
                        1638
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 90
                        },
                        "start": {
                          "column": 11,
                          "line": 90
                        }
                      }
                    }
                  },
                  "range": [
                    1610,
                    1638
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 90
                    },
                    "start": {
                      "column": 8,
                      "line": 90
                    }
                  }
                },
                "init": null,
                "range": [
                  1610,
                  1638
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 90
                  },
                  "start": {
                    "column": 8,
                    "line": 90
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1606,
              1639
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 90
              },
              "start": {
                "column": 4,
                "line": 90
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
                  1644,
                  1645
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 91
                  },
                  "start": {
                    "column": 4,
                    "line": 91
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  1648,
                  1650
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 91
                  },
                  "start": {
                    "column": 8,
                    "line": 91
                  }
                }
              },
              "range": [
                1644,
                1650
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 91
                },
                "start": {
                  "column": 4,
                  "line": 91
                }
              }
            },
            "range": [
              1644,
              1651
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 91
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
                        1679,
                        1680
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 93
                        },
                        "start": {
                          "column": 8,
                          "line": 93
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
                            1687,
                            1688
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 93
                            },
                            "start": {
                              "column": 16,
                              "line": 93
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
                          1683,
                          1686
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 93
                          },
                          "start": {
                            "column": 12,
                            "line": 93
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1683,
                        1689
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 93
                        },
                        "start": {
                          "column": 12,
                          "line": 93
                        }
                      }
                    },
                    "range": [
                      1679,
                      1689
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
                  "range": [
                    1679,
                    1690
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 93
                    },
                    "start": {
                      "column": 8,
                      "line": 93
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
                      1699,
                      1700
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 94
                      },
                      "start": {
                        "column": 8,
                        "line": 94
                      }
                    }
                  },
                  "range": [
                    1699,
                    1701
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 94
                    },
                    "start": {
                      "column": 8,
                      "line": 94
                    }
                  }
                }
              ],
              "range": [
                1669,
                1717
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 95
                },
                "start": {
                  "column": 17,
                  "line": 92
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1663,
                1667
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 92
                },
                "start": {
                  "column": 11,
                  "line": 92
                }
              }
            },
            "range": [
              1656,
              1717
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 95
              },
              "start": {
                "column": 4,
                "line": 92
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
                1722,
                1723
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 96
                },
                "start": {
                  "column": 4,
                  "line": 96
                }
              }
            },
            "range": [
              1722,
              1724
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 96
              },
              "start": {
                "column": 4,
                "line": 96
              }
            }
          }
        ],
        "range": [
          1600,
          1745
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 97
          },
          "start": {
            "column": 14,
            "line": 89
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
          1595,
          1597
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 89
          },
          "start": {
            "column": 9,
            "line": 89
          }
        }
      },
      "params": [],
      "range": [
        1586,
        1745
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 89
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
                        "line": 99
                      },
                      "start": {
                        "column": 9,
                        "line": 99
                      }
                    },
                    "range": [
                      1771,
                      1798
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            1773,
                            1779
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 99
                            },
                            "start": {
                              "column": 11,
                              "line": 99
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            1782,
                            1788
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 99
                            },
                            "start": {
                              "column": 20,
                              "line": 99
                            }
                          }
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "range": [
                            1791,
                            1798
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 99
                            },
                            "start": {
                              "column": 29,
                              "line": 99
                            }
                          }
                        }
                      ],
                      "range": [
                        1773,
                        1798
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 99
                        },
                        "start": {
                          "column": 11,
                          "line": 99
                        }
                      }
                    }
                  },
                  "range": [
                    1770,
                    1798
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 99
                    },
                    "start": {
                      "column": 8,
                      "line": 99
                    }
                  }
                },
                "init": null,
                "range": [
                  1770,
                  1798
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 99
                  },
                  "start": {
                    "column": 8,
                    "line": 99
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1766,
              1799
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 99
              },
              "start": {
                "column": 4,
                "line": 99
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
                  1804,
                  1805
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 100
                  },
                  "start": {
                    "column": 4,
                    "line": 100
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"\"",
                "value": "",
                "range": [
                  1808,
                  1810
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 100
                  },
                  "start": {
                    "column": 8,
                    "line": 100
                  }
                }
              },
              "range": [
                1804,
                1810
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 100
                },
                "start": {
                  "column": 4,
                  "line": 100
                }
              }
            },
            "range": [
              1804,
              1811
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 100
              },
              "start": {
                "column": 4,
                "line": 100
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
                      1839,
                      1840
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 102
                      },
                      "start": {
                        "column": 8,
                        "line": 102
                      }
                    }
                  },
                  "range": [
                    1839,
                    1841
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 102
                    },
                    "start": {
                      "column": 8,
                      "line": 102
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
                        1869,
                        1870
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 103
                        },
                        "start": {
                          "column": 8,
                          "line": 103
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
                            1877,
                            1878
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 103
                            },
                            "start": {
                              "column": 16,
                              "line": 103
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
                          1873,
                          1876
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 103
                          },
                          "start": {
                            "column": 12,
                            "line": 103
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        1873,
                        1879
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 103
                        },
                        "start": {
                          "column": 12,
                          "line": 103
                        }
                      }
                    },
                    "range": [
                      1869,
                      1879
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 103
                      },
                      "start": {
                        "column": 8,
                        "line": 103
                      }
                    }
                  },
                  "range": [
                    1869,
                    1880
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 103
                    },
                    "start": {
                      "column": 8,
                      "line": 103
                    }
                  }
                }
              ],
              "range": [
                1829,
                1886
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 104
                },
                "start": {
                  "column": 17,
                  "line": 101
                }
              }
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "range": [
                1823,
                1827
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 101
                },
                "start": {
                  "column": 11,
                  "line": 101
                }
              }
            },
            "range": [
              1816,
              1886
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
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                1891,
                1892
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 105
                },
                "start": {
                  "column": 4,
                  "line": 105
                }
              }
            },
            "range": [
              1891,
              1893
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 105
              },
              "start": {
                "column": 4,
                "line": 105
              }
            }
          }
        ],
        "range": [
          1760,
          1914
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 106
          },
          "start": {
            "column": 14,
            "line": 98
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
          1755,
          1757
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 98
          },
          "start": {
            "column": 9,
            "line": 98
          }
        }
      },
      "params": [],
      "range": [
        1746,
        1914
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 106
        },
        "start": {
          "column": 0,
          "line": 98
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 107
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
