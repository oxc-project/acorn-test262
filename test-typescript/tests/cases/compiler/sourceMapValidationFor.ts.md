__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    395
  ],
  "body": [
    {
      "type": "ForStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "\"i: \"",
                    "value": "i: ",
                    "range": [
                      48,
                      53
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 2
                      },
                      "start": {
                        "column": 17,
                        "line": 2
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "range": [
                      56,
                      57
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 2
                      },
                      "start": {
                        "column": 25,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    48,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 2
                    },
                    "start": {
                      "column": 17,
                      "line": 2
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
                  "name": "WScript",
                  "optional": false,
                  "range": [
                    35,
                    42
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Echo",
                  "optional": false,
                  "range": [
                    43,
                    47
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  35,
                  47
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
                  }
                }
              },
              "optional": false,
              "range": [
                35,
                58
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "range": [
              35,
              59
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          29,
          61
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 29,
            "line": 1
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
              "type": "Identifier",
              "decorators": [],
              "name": "i",
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
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                13,
                14
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "range": [
              9,
              14
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 1
              },
              "start": {
                "column": 9,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          5,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            16,
            17
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "10",
          "value": 10,
          "range": [
            20,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 20,
              "line": 1
            }
          }
        },
        "range": [
          16,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 16,
            "line": 1
          }
        }
      },
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            24,
            25
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 1
            },
            "start": {
              "column": 24,
              "line": 1
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          24,
          27
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 1
          },
          "start": {
            "column": 24,
            "line": 1
          }
        }
      },
      "range": [
        0,
        61
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
      "type": "ForStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "raw": "\"i: \"",
                    "value": "i: ",
                    "range": [
                      106,
                      111
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
                        "line": 6
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "range": [
                      114,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 6
                      },
                      "start": {
                        "column": 25,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    106,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 6
                    },
                    "start": {
                      "column": 17,
                      "line": 6
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
                  "name": "WScript",
                  "optional": false,
                  "range": [
                    93,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 6
                    },
                    "start": {
                      "column": 4,
                      "line": 6
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Echo",
                  "optional": false,
                  "range": [
                    101,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
                    }
                  }
                },
                "range": [
                  93,
                  105
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 6
                  },
                  "start": {
                    "column": 4,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "range": [
                93,
                116
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              93,
              117
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 6
              }
            }
          }
        ],
        "range": [
          87,
          119
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 5
          }
        }
      },
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            67,
            68
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 4
            },
            "start": {
              "column": 5,
              "line": 4
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            71,
            72
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
        "range": [
          67,
          72
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            74,
            75
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
          "raw": "10",
          "value": 10,
          "range": [
            78,
            80
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 4
            },
            "start": {
              "column": 16,
              "line": 4
            }
          }
        },
        "range": [
          74,
          80
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
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            82,
            83
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 4
            },
            "start": {
              "column": 20,
              "line": 4
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          82,
          85
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 4
          },
          "start": {
            "column": 20,
            "line": 4
          }
        }
      },
      "range": [
        62,
        119
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 4
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
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "range": [
                  152,
                  153
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
              "operator": "++",
              "prefix": false,
              "range": [
                152,
                155
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              152,
              156
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                  "type": "ContinueStatement",
                  "label": null,
                  "range": [
                    183,
                    192
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                173,
                198
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 16,
                  "line": 10
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "range": [
                  165,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  170,
                  171
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
                165,
                171
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 10
                },
                "start": {
                  "column": 8,
                  "line": 10
                }
              }
            },
            "range": [
              161,
              198
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          146,
          200
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 26,
            "line": 8
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
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "range": [
                129,
                130
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
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                133,
                134
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 13,
                  "line": 8
                }
              }
            },
            "range": [
              129,
              134
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 8
              },
              "start": {
                "column": 9,
                "line": 8
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          125,
          134
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "range": [
            136,
            137
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 8
            },
            "start": {
              "column": 16,
              "line": 8
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "10",
          "value": 10,
          "range": [
            140,
            142
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 8
            },
            "start": {
              "column": 20,
              "line": 8
            }
          }
        },
        "range": [
          136,
          142
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 8
          },
          "start": {
            "column": 16,
            "line": 8
          }
        }
      },
      "update": null,
      "range": [
        120,
        200
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 8
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
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "j",
                "optional": false,
                "range": [
                  228,
                  229
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                228,
                231
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              228,
              232
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          222,
          234
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 0,
            "line": 15
          }
        }
      },
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "range": [
            206,
            207
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 14
            },
            "start": {
              "column": 5,
              "line": 14
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            210,
            211
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 14
            },
            "start": {
              "column": 9,
              "line": 14
            }
          }
        },
        "range": [
          206,
          211
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 14
          },
          "start": {
            "column": 5,
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
          "name": "j",
          "optional": false,
          "range": [
            213,
            214
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 14
            },
            "start": {
              "column": 12,
              "line": 14
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "10",
          "value": 10,
          "range": [
            217,
            219
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 14
            },
            "start": {
              "column": 16,
              "line": 14
            }
          }
        },
        "range": [
          213,
          219
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 14
          },
          "start": {
            "column": 12,
            "line": 14
          }
        }
      },
      "update": null,
      "range": [
        201,
        234
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "ForStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          257,
          260
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 22,
            "line": 18
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
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "range": [
                244,
                245
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
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                248,
                249
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 18
                },
                "start": {
                  "column": 13,
                  "line": 18
                }
              }
            },
            "range": [
              244,
              249
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 18
              },
              "start": {
                "column": 9,
                "line": 18
              }
            }
          }
        ],
        "declare": false,
        "kind": "var",
        "range": [
          240,
          249
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 18
          },
          "start": {
            "column": 5,
            "line": 18
          }
        }
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "range": [
            252,
            253
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
        "operator": "++",
        "prefix": false,
        "range": [
          252,
          255
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 18
          },
          "start": {
            "column": 17,
            "line": 18
          }
        }
      },
      "range": [
        235,
        260
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 18
        }
      }
    },
    {
      "type": "ForStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          279,
          282
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "init": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "range": [
            266,
            267
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
        "right": {
          "type": "Literal",
          "raw": "0",
          "value": 0,
          "range": [
            270,
            271
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 20
            },
            "start": {
              "column": 9,
              "line": 20
            }
          }
        },
        "range": [
          266,
          271
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
          }
        }
      },
      "test": null,
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "range": [
            274,
            275
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 20
            },
            "start": {
              "column": 13,
              "line": 20
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          274,
          277
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 20
          },
          "start": {
            "column": 13,
            "line": 20
          }
        }
      },
      "range": [
        261,
        282
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "ForStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          303,
          306
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 20,
            "line": 23
          }
        }
      },
      "init": null,
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "range": [
            290,
            291
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 23
            },
            "start": {
              "column": 7,
              "line": 23
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "10",
          "value": 10,
          "range": [
            294,
            296
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 23
            },
            "start": {
              "column": 11,
              "line": 23
            }
          }
        },
        "range": [
          290,
          296
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 23
          },
          "start": {
            "column": 7,
            "line": 23
          }
        }
      },
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "range": [
            298,
            299
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 23
            },
            "start": {
              "column": 15,
              "line": 23
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          298,
          301
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 23
          },
          "start": {
            "column": 15,
            "line": 23
          }
        }
      },
      "range": [
        283,
        306
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 23
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
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  322,
                  323
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 26
                  },
                  "start": {
                    "column": 4,
                    "line": 26
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                322,
                325
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 26
                },
                "start": {
                  "column": 4,
                  "line": 26
                }
              }
            },
            "range": [
              322,
              326
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          316,
          328
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 9,
            "line": 25
          }
        }
      },
      "init": null,
      "test": null,
      "update": null,
      "range": [
        307,
        328
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 25
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
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  344,
                  345
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
              "operator": "++",
              "prefix": false,
              "range": [
                344,
                347
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 30
                },
                "start": {
                  "column": 4,
                  "line": 30
                }
              }
            },
            "range": [
              344,
              348
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          }
        ],
        "range": [
          338,
          350
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "init": null,
      "test": null,
      "update": null,
      "range": [
        329,
        350
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 28
        }
      }
    },
    {
      "type": "ForStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          392,
          395
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 41,
            "line": 32
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                356,
                357
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 32
                },
                "start": {
                  "column": 5,
                  "line": 32
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                360,
                361
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
            },
            "range": [
              356,
              361
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 32
              },
              "start": {
                "column": 5,
                "line": 32
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "range": [
                363,
                364
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 32
                },
                "start": {
                  "column": 12,
                  "line": 32
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "20",
              "value": 20,
              "range": [
                367,
                369
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 32
                },
                "start": {
                  "column": 16,
                  "line": 32
                }
              }
            },
            "range": [
              363,
              369
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 32
              },
              "start": {
                "column": 12,
                "line": 32
              }
            }
          }
        ],
        "range": [
          356,
          369
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 32
          },
          "start": {
            "column": 5,
            "line": 32
          }
        }
      },
      "test": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "BinaryExpression",
            "operator": "<",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "j",
              "optional": false,
              "range": [
                371,
                372
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 32
                },
                "start": {
                  "column": 20,
                  "line": 32
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "20",
              "value": 20,
              "range": [
                375,
                377
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 32
                },
                "start": {
                  "column": 24,
                  "line": 32
                }
              }
            },
            "range": [
              371,
              377
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 32
              },
              "start": {
                "column": 20,
                "line": 32
              }
            }
          },
          {
            "type": "BinaryExpression",
            "operator": "<",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                379,
                380
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 32
                },
                "start": {
                  "column": 28,
                  "line": 32
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "20",
              "value": 20,
              "range": [
                383,
                385
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 32
                },
                "start": {
                  "column": 32,
                  "line": 32
                }
              }
            },
            "range": [
              379,
              385
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 32
              },
              "start": {
                "column": 28,
                "line": 32
              }
            }
          }
        ],
        "range": [
          371,
          385
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 32
          },
          "start": {
            "column": 20,
            "line": 32
          }
        }
      },
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "j",
          "optional": false,
          "range": [
            387,
            388
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 32
            },
            "start": {
              "column": 36,
              "line": 32
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          387,
          390
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 32
          },
          "start": {
            "column": 36,
            "line": 32
          }
        }
      },
      "range": [
        351,
        395
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 33
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
