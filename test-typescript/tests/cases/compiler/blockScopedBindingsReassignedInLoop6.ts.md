__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    476
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          77,
                          78
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 3
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        }
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "UpdateExpression",
                            "argument": {
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
                                  "column": 23,
                                  "line": 3
                                },
                                "start": {
                                  "column": 22,
                                  "line": 3
                                }
                              }
                            },
                            "operator": "++",
                            "prefix": false,
                            "range": [
                              87,
                              90
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 3
                              },
                              "start": {
                                "column": 22,
                                "line": 3
                              }
                            }
                          },
                          "right": {
                            "type": "UpdateExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                93,
                                94
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 3
                                },
                                "start": {
                                  "column": 28,
                                  "line": 3
                                }
                              }
                            },
                            "operator": "++",
                            "prefix": false,
                            "range": [
                              93,
                              96
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 3
                              },
                              "start": {
                                "column": 28,
                                "line": 3
                              }
                            }
                          },
                          "range": [
                            87,
                            96
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 3
                            },
                            "start": {
                              "column": 22,
                              "line": 3
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          81,
                          96
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 3
                          },
                          "start": {
                            "column": 16,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        77,
                        96
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 3
                        },
                        "start": {
                          "column": 12,
                          "line": 3
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    73,
                    97
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": {
                    "type": "IfStatement",
                    "alternate": {
                      "type": "ReturnStatement",
                      "argument": null,
                      "range": [
                        206,
                        213
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 9
                        },
                        "start": {
                          "column": 12,
                          "line": 9
                        }
                      }
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            174,
                            175
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "5",
                          "value": 5,
                          "range": [
                            178,
                            179
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 7
                            },
                            "start": {
                              "column": 16,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          174,
                          179
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 7
                          },
                          "start": {
                            "column": 12,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        174,
                        180
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 7
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "==",
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
                            "column": 18,
                            "line": 6
                          },
                          "start": {
                            "column": 17,
                            "line": 6
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          159,
                          160
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 6
                          },
                          "start": {
                            "column": 22,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        154,
                        160
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 6
                        },
                        "start": {
                          "column": 17,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      150,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 9
                      },
                      "start": {
                        "column": 13,
                        "line": 6
                      }
                    }
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      130,
                      136
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 5
                      },
                      "start": {
                        "column": 12,
                        "line": 5
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "==",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        110,
                        111
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 4
                        },
                        "start": {
                          "column": 12,
                          "line": 4
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        115,
                        116
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
                      110,
                      116
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 4
                      },
                      "start": {
                        "column": 12,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    106,
                    213
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                }
              ],
              "range": [
                63,
                219
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 47,
                  "line": 2
                }
              }
            },
            "init": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          30,
                          31
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 2
                          },
                          "start": {
                            "column": 14,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          33,
                          34
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 2
                          },
                          "start": {
                            "column": 17,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      29,
                      35
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 2
                      },
                      "start": {
                        "column": 13,
                        "line": 2
                      }
                    }
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          39,
                          40
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 2
                          },
                          "start": {
                            "column": 23,
                            "line": 2
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          42,
                          43
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 2
                          },
                          "start": {
                            "column": 26,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "range": [
                      38,
                      44
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 2
                      },
                      "start": {
                        "column": 22,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    29,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 2
                    },
                    "start": {
                      "column": 13,
                      "line": 2
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                25,
                44
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 2
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  46,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 2
                  },
                  "start": {
                    "column": 30,
                    "line": 2
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  50,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 2
                  },
                  "start": {
                    "column": 34,
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
                  "column": 35,
                  "line": 2
                },
                "start": {
                  "column": 30,
                  "line": 2
                }
              }
            },
            "update": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      55,
                      56
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 2
                      },
                      "start": {
                        "column": 39,
                        "line": 2
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": true,
                  "range": [
                    53,
                    56
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 2
                    },
                    "start": {
                      "column": 37,
                      "line": 2
                    }
                  }
                },
                {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      60,
                      61
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 2
                      },
                      "start": {
                        "column": 44,
                        "line": 2
                      }
                    }
                  },
                  "operator": "--",
                  "prefix": true,
                  "range": [
                    58,
                    61
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 2
                    },
                    "start": {
                      "column": 42,
                      "line": 2
                    }
                  }
                }
              ],
              "range": [
                53,
                61
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 2
                },
                "start": {
                  "column": 37,
                  "line": 2
                }
              }
            },
            "range": [
              20,
              219
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          14,
          221
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 14,
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
        "name": "f1",
        "optional": false,
        "range": [
          9,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [],
      "range": [
        0,
        221
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
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
            "type": "ForStatement",
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
                        "name": "a",
                        "optional": false,
                        "range": [
                          326,
                          327
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
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "async": false,
                        "body": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "UpdateExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                336,
                                337
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 15
                                },
                                "start": {
                                  "column": 22,
                                  "line": 15
                                }
                              }
                            },
                            "operator": "++",
                            "prefix": false,
                            "range": [
                              336,
                              339
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 15
                              },
                              "start": {
                                "column": 22,
                                "line": 15
                              }
                            }
                          },
                          "right": {
                            "type": "UpdateExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                342,
                                343
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 15
                                },
                                "start": {
                                  "column": 28,
                                  "line": 15
                                }
                              }
                            },
                            "operator": "++",
                            "prefix": false,
                            "range": [
                              342,
                              345
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 15
                              },
                              "start": {
                                "column": 28,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            336,
                            345
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 15
                            },
                            "start": {
                              "column": 22,
                              "line": 15
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          330,
                          345
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 15
                          },
                          "start": {
                            "column": 16,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        326,
                        345
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 15
                        },
                        "start": {
                          "column": 12,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    322,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 15
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                },
                {
                  "type": "IfStatement",
                  "alternate": {
                    "type": "IfStatement",
                    "alternate": {
                      "type": "ReturnStatement",
                      "argument": null,
                      "range": [
                        455,
                        462
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 21
                        },
                        "start": {
                          "column": 12,
                          "line": 21
                        }
                      }
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            423,
                            424
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 19
                            },
                            "start": {
                              "column": 12,
                              "line": 19
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "5",
                          "value": 5,
                          "range": [
                            427,
                            428
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 19
                            },
                            "start": {
                              "column": 16,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          423,
                          428
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 19
                          },
                          "start": {
                            "column": 12,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        423,
                        429
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 19
                        },
                        "start": {
                          "column": 12,
                          "line": 19
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "==",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          403,
                          404
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 18
                          },
                          "start": {
                            "column": 17,
                            "line": 18
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "2",
                        "value": 2,
                        "range": [
                          408,
                          409
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 18
                          },
                          "start": {
                            "column": 22,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        403,
                        409
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 18
                        },
                        "start": {
                          "column": 17,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      399,
                      462
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 21
                      },
                      "start": {
                        "column": 13,
                        "line": 18
                      }
                    }
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "label": null,
                    "range": [
                      379,
                      385
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 17
                      },
                      "start": {
                        "column": 12,
                        "line": 17
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "==",
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
                          "column": 13,
                          "line": 16
                        },
                        "start": {
                          "column": 12,
                          "line": 16
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        364,
                        365
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 16
                        },
                        "start": {
                          "column": 17,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      359,
                      365
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 16
                      },
                      "start": {
                        "column": 12,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    355,
                    462
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 16
                    }
                  }
                }
              ],
              "range": [
                312,
                468
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 22
                },
                "start": {
                  "column": 73,
                  "line": 14
                }
              }
            },
            "init": {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "definite": false,
                  "id": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                254,
                                255
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 14
                                },
                                "start": {
                                  "column": 15,
                                  "line": 14
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                257,
                                258
                              ],
                              "loc": {
                                "end": {
                                  "column": 19,
                                  "line": 14
                                },
                                "start": {
                                  "column": 18,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              254,
                              258
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 14
                              },
                              "start": {
                                "column": 15,
                                "line": 14
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
                                260,
                                261
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 14
                                },
                                "start": {
                                  "column": 21,
                                  "line": 14
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ObjectPattern",
                              "decorators": [],
                              "optional": false,
                              "properties": [
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
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
                                        "column": 26,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "range": [
                                      267,
                                      268
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 29,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "range": [
                                    264,
                                    268
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 14
                                    }
                                  }
                                }
                              ],
                              "range": [
                                263,
                                269
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 14
                                },
                                "start": {
                                  "column": 24,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              260,
                              269
                            ],
                            "loc": {
                              "end": {
                                "column": 30,
                                "line": 14
                              },
                              "start": {
                                "column": 21,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "range": [
                          253,
                          270
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 14
                          },
                          "start": {
                            "column": 14,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      252,
                      271
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 14
                      },
                      "start": {
                        "column": 13,
                        "line": 14
                      }
                    }
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "range": [
                                276,
                                277
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 14
                                },
                                "start": {
                                  "column": 37,
                                  "line": 14
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                279,
                                280
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 14
                                },
                                "start": {
                                  "column": 40,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              276,
                              280
                            ],
                            "loc": {
                              "end": {
                                "column": 41,
                                "line": 14
                              },
                              "start": {
                                "column": 37,
                                "line": 14
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
                                282,
                                283
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 14
                                },
                                "start": {
                                  "column": 43,
                                  "line": 14
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "range": [
                                      286,
                                      287
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 48,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 47,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "raw": "2",
                                    "value": 2,
                                    "range": [
                                      289,
                                      290
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 51,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 50,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "range": [
                                    286,
                                    290
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 51,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 47,
                                      "line": 14
                                    }
                                  }
                                }
                              ],
                              "range": [
                                285,
                                291
                              ],
                              "loc": {
                                "end": {
                                  "column": 52,
                                  "line": 14
                                },
                                "start": {
                                  "column": 46,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              282,
                              291
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 14
                              },
                              "start": {
                                "column": 43,
                                "line": 14
                              }
                            }
                          }
                        ],
                        "range": [
                          275,
                          292
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 14
                          },
                          "start": {
                            "column": 36,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "range": [
                      274,
                      293
                    ],
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 14
                      },
                      "start": {
                        "column": 35,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    252,
                    293
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 14
                    },
                    "start": {
                      "column": 13,
                      "line": 14
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                248,
                293
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 14
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
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
                    "column": 57,
                    "line": 14
                  },
                  "start": {
                    "column": 56,
                    "line": 14
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  299,
                  300
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 14
                  },
                  "start": {
                    "column": 60,
                    "line": 14
                  }
                }
              },
              "range": [
                295,
                300
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 14
                },
                "start": {
                  "column": 56,
                  "line": 14
                }
              }
            },
            "update": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      304,
                      305
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 14
                      },
                      "start": {
                        "column": 65,
                        "line": 14
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": true,
                  "range": [
                    302,
                    305
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 14
                    },
                    "start": {
                      "column": 63,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      309,
                      310
                    ],
                    "loc": {
                      "end": {
                        "column": 71,
                        "line": 14
                      },
                      "start": {
                        "column": 70,
                        "line": 14
                      }
                    }
                  },
                  "operator": "--",
                  "prefix": true,
                  "range": [
                    307,
                    310
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 14
                    },
                    "start": {
                      "column": 68,
                      "line": 14
                    }
                  }
                }
              ],
              "range": [
                302,
                310
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 14
                },
                "start": {
                  "column": 63,
                  "line": 14
                }
              }
            },
            "range": [
              243,
              468
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          237,
          470
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 14,
            "line": 13
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
          232,
          234
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [],
      "range": [
        223,
        470
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 29
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
