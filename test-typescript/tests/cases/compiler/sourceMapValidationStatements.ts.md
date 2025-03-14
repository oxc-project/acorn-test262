__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1232
  ],
  "body": [
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    23,
                    24
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
                "init": null,
                "range": [
                  23,
                  24
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
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              19,
              25
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    34,
                    35
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    38,
                    39
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
                "range": [
                  34,
                  39
                ],
                "loc": {
                  "end": {
                    "column": 13,
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
            "kind": "var",
            "range": [
              30,
              40
            ],
            "loc": {
              "end": {
                "column": 14,
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
                    "type": "AssignmentExpression",
                    "operator": "+=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        84,
                        85
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
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "range": [
                        89,
                        90
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 5
                        },
                        "start": {
                          "column": 13,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      84,
                      90
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 5
                      },
                      "start": {
                        "column": 8,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    84,
                    91
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 5
                    },
                    "start": {
                      "column": 8,
                      "line": 5
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "*=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        100,
                        101
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
                    "right": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        105,
                        106
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 6
                        },
                        "start": {
                          "column": 13,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      100,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    100,
                    107
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
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
                74,
                113
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 7
                },
                "start": {
                  "column": 33,
                  "line": 4
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
                      54,
                      55
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 4
                      },
                      "start": {
                        "column": 13,
                        "line": 4
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      58,
                      59
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
                    54,
                    59
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 4
                    },
                    "start": {
                      "column": 13,
                      "line": 4
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                50,
                59
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 9,
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
                  61,
                  62
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
              "right": {
                "type": "Literal",
                "raw": "10",
                "value": 10,
                "range": [
                  65,
                  67
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 4
                  },
                  "start": {
                    "column": 24,
                    "line": 4
                  }
                }
              },
              "range": [
                61,
                67
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 4
                },
                "start": {
                  "column": 20,
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
                  69,
                  70
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 4
                  },
                  "start": {
                    "column": 28,
                    "line": 4
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                69,
                72
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
            "range": [
              45,
              113
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 4
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
                    "type": "AssignmentExpression",
                    "operator": "+=",
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
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        174,
                        176
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 11
                        },
                        "start": {
                          "column": 13,
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
                        "column": 15,
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
                    177
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
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
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        186,
                        187
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
                    "operator": "++",
                    "prefix": false,
                    "range": [
                      186,
                      189
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    186,
                    190
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
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
                159,
                196
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 13
                },
                "start": {
                  "column": 11,
                  "line": 10
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "/=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        140,
                        141
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "9",
                      "value": 9,
                      "range": [
                        145,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 9
                        },
                        "start": {
                          "column": 13,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      140,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    140,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                130,
                153
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 16,
                  "line": 8
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
                  122,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "17",
                "value": 17,
                "range": [
                  126,
                  128
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 8
                  },
                  "start": {
                    "column": 12,
                    "line": 8
                  }
                }
              },
              "range": [
                122,
                128
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 8
                },
                "start": {
                  "column": 8,
                  "line": 8
                }
              }
            },
            "range": [
              118,
              196
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 8
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
                  "range": [
                    205,
                    206
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
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        219,
                        220
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
                    {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        230,
                        231
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "3",
                      "value": 3,
                      "range": [
                        241,
                        242
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "range": [
                    209,
                    248
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 18
                    },
                    "start": {
                      "column": 12,
                      "line": 14
                    }
                  }
                },
                "range": [
                  205,
                  248
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              201,
              249
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 18
              },
              "start": {
                "column": 4,
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
                  "name": "obj",
                  "optional": false,
                  "range": [
                    258,
                    261
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
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "range": [
                          274,
                          275
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 20
                          },
                          "start": {
                            "column": 8,
                            "line": 20
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
                          277,
                          278
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 20
                          },
                          "start": {
                            "column": 11,
                            "line": 20
                          }
                        }
                      },
                      "range": [
                        274,
                        278
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 20
                        },
                        "start": {
                          "column": 8,
                          "line": 20
                        }
                      }
                    },
                    {
                      "type": "Property",
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "q",
                        "optional": false,
                        "range": [
                          288,
                          289
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
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "raw": "\"hello\"",
                        "value": "hello",
                        "range": [
                          291,
                          298
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 21
                          },
                          "start": {
                            "column": 11,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        288,
                        298
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 21
                        },
                        "start": {
                          "column": 8,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "range": [
                    264,
                    304
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 22
                    },
                    "start": {
                      "column": 14,
                      "line": 19
                    }
                  }
                },
                "range": [
                  258,
                  304
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 19
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              254,
              305
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          {
            "type": "ForInStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          337,
                          340
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 24
                          },
                          "start": {
                            "column": 8,
                            "line": 24
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "range": [
                          341,
                          342
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 24
                          },
                          "start": {
                            "column": 12,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        337,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 24
                        },
                        "start": {
                          "column": 8,
                          "line": 24
                        }
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          345,
                          346
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 24
                          },
                          "start": {
                            "column": 16,
                            "line": 24
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "j",
                        "optional": false,
                        "range": [
                          347,
                          348
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 24
                          },
                          "start": {
                            "column": 18,
                            "line": 24
                          }
                        }
                      },
                      "range": [
                        345,
                        349
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 24
                        },
                        "start": {
                          "column": 16,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      337,
                      349
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    337,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          363,
                          364
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 25
                          },
                          "start": {
                            "column": 12,
                            "line": 25
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          367,
                          369
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 25
                          },
                          "start": {
                            "column": 16,
                            "line": 25
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
                          "line": 25
                        },
                        "start": {
                          "column": 12,
                          "line": 25
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    359,
                    370
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
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
                327,
                376
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 21,
                  "line": 23
                }
              }
            },
            "left": {
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
                      319,
                      320
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 23
                      },
                      "start": {
                        "column": 13,
                        "line": 23
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    319,
                    320
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 23
                    },
                    "start": {
                      "column": 13,
                      "line": 23
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                315,
                320
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 23
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                324,
                325
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 23
                },
                "start": {
                  "column": 18,
                  "line": 23
                }
              }
            },
            "range": [
              310,
              376
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "range": [
                          395,
                          398
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
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
                        "name": "q",
                        "optional": false,
                        "range": [
                          399,
                          400
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 28
                          },
                          "start": {
                            "column": 12,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        395,
                        400
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 28
                        },
                        "start": {
                          "column": 8,
                          "line": 28
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"ohhh\"",
                      "value": "ohhh",
                      "range": [
                        403,
                        409
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 28
                        },
                        "start": {
                          "column": 16,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      395,
                      409
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    395,
                    410
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 28
                    },
                    "start": {
                      "column": 8,
                      "line": 28
                    }
                  }
                }
              ],
              "range": [
                385,
                416
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 29
                },
                "start": {
                  "column": 8,
                  "line": 27
                }
              }
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
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
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "range": [
                                  508,
                                  511
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 33
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "q",
                                "optional": false,
                                "range": [
                                  512,
                                  513
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 33
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 33
                                  }
                                }
                              },
                              "range": [
                                508,
                                513
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 33
                                },
                                "start": {
                                  "column": 12,
                                  "line": 33
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "\"hmm\"",
                              "value": "hmm",
                              "range": [
                                516,
                                521
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 33
                                },
                                "start": {
                                  "column": 20,
                                  "line": 33
                                }
                              }
                            },
                            "range": [
                              508,
                              521
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 33
                              },
                              "start": {
                                "column": 12,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            508,
                            522
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 33
                            },
                            "start": {
                              "column": 12,
                              "line": 33
                            }
                          }
                        }
                      ],
                      "range": [
                        494,
                        532
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 34
                        },
                        "start": {
                          "column": 15,
                          "line": 32
                        }
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "range": [
                                  467,
                                  470
                                ],
                                "loc": {
                                  "end": {
                                    "column": 15,
                                    "line": 31
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 31
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "range": [
                                  471,
                                  472
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 31
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 31
                                  }
                                }
                              },
                              "range": [
                                467,
                                472
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 31
                                },
                                "start": {
                                  "column": 12,
                                  "line": 31
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "12",
                              "value": 12,
                              "range": [
                                475,
                                477
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 31
                                },
                                "start": {
                                  "column": 20,
                                  "line": 31
                                }
                              }
                            },
                            "range": [
                              467,
                              477
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 31
                              },
                              "start": {
                                "column": 12,
                                "line": 31
                              }
                            }
                          },
                          "range": [
                            467,
                            478
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 31
                            },
                            "start": {
                              "column": 12,
                              "line": 31
                            }
                          }
                        }
                      ],
                      "range": [
                        453,
                        488
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 32
                        },
                        "start": {
                          "column": 24,
                          "line": 30
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "range": [
                            441,
                            444
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 30
                            },
                            "start": {
                              "column": 12,
                              "line": 30
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "range": [
                            445,
                            446
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 30
                            },
                            "start": {
                              "column": 16,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          441,
                          446
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 30
                          },
                          "start": {
                            "column": 12,
                            "line": 30
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          449,
                          451
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 30
                          },
                          "start": {
                            "column": 20,
                            "line": 30
                          }
                        }
                      },
                      "range": [
                        441,
                        451
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 30
                        },
                        "start": {
                          "column": 12,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      437,
                      532
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 34
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  427,
                  538
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 35
                  },
                  "start": {
                    "column": 16,
                    "line": 29
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "range": [
                  424,
                  425
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 29
                  },
                  "start": {
                    "column": 13,
                    "line": 29
                  }
                }
              },
              "range": [
                417,
                538
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 6,
                  "line": 29
                }
              }
            },
            "range": [
              381,
              538
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "range": [
                        567,
                        572
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 37
                        },
                        "start": {
                          "column": 18,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      563,
                      574
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 37
                      },
                      "start": {
                        "column": 14,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    557,
                    575
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
              "range": [
                547,
                581
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 38
                },
                "start": {
                  "column": 8,
                  "line": 36
                }
              }
            },
            "finalizer": {
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
                      "name": "y",
                      "optional": false,
                      "range": [
                        639,
                        640
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
                      "raw": "70",
                      "value": 70,
                      "range": [
                        643,
                        645
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
                      639,
                      645
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
                    639,
                    646
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
                629,
                652
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 14,
                  "line": 40
                }
              }
            },
            "handler": {
              "type": "CatchClause",
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
                          "name": "b",
                          "optional": false,
                          "range": [
                            607,
                            608
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 39
                            },
                            "start": {
                              "column": 12,
                              "line": 39
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e1",
                          "optional": false,
                          "range": [
                            611,
                            613
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 39
                            },
                            "start": {
                              "column": 16,
                              "line": 39
                            }
                          }
                        },
                        "range": [
                          607,
                          613
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 39
                          },
                          "start": {
                            "column": 12,
                            "line": 39
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      603,
                      614
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 39
                      },
                      "start": {
                        "column": 8,
                        "line": 39
                      }
                    }
                  }
                ],
                "range": [
                  593,
                  620
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 40
                  },
                  "start": {
                    "column": 17,
                    "line": 38
                  }
                }
              },
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e1",
                "optional": false,
                "range": [
                  589,
                  591
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 38
                  },
                  "start": {
                    "column": 13,
                    "line": 38
                  }
                }
              },
              "range": [
                582,
                620
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 40
                },
                "start": {
                  "column": 6,
                  "line": 38
                }
              }
            },
            "range": [
              543,
              652
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          {
            "type": "WithStatement",
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
                      "name": "i",
                      "optional": false,
                      "range": [
                        678,
                        679
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
                    "right": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        682,
                        683
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 44
                        },
                        "start": {
                          "column": 12,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      678,
                      683
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 44
                      },
                      "start": {
                        "column": 8,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    678,
                    684
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
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
                      "name": "z",
                      "optional": false,
                      "range": [
                        693,
                        694
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
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        697,
                        699
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 45
                        },
                        "start": {
                          "column": 12,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      693,
                      699
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
                  "range": [
                    693,
                    700
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
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
                668,
                706
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 46
                },
                "start": {
                  "column": 15,
                  "line": 43
                }
              }
            },
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "range": [
                663,
                666
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 43
                },
                "start": {
                  "column": 10,
                  "line": 43
                }
              }
            },
            "range": [
              657,
              706
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
            "type": "SwitchStatement",
            "cases": [
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              758,
                              759
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 49
                              },
                              "start": {
                                "column": 12,
                                "line": 49
                              }
                            }
                          },
                          "operator": "++",
                          "prefix": false,
                          "range": [
                            758,
                            761
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 49
                            },
                            "start": {
                              "column": 12,
                              "line": 49
                            }
                          }
                        },
                        "range": [
                          758,
                          762
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
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "range": [
                          775,
                          781
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
                      }
                    ],
                    "range": [
                      744,
                      792
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 52
                      },
                      "start": {
                        "column": 16,
                        "line": 48
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    741,
                    742
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 48
                    },
                    "start": {
                      "column": 13,
                      "line": 48
                    }
                  }
                },
                "range": [
                  736,
                  792
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 52
                  },
                  "start": {
                    "column": 8,
                    "line": 48
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UpdateExpression",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              823,
                              824
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
                          "operator": "--",
                          "prefix": false,
                          "range": [
                            823,
                            826
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 54
                            },
                            "start": {
                              "column": 12,
                              "line": 54
                            }
                          }
                        },
                        "range": [
                          823,
                          827
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
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "range": [
                          840,
                          846
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
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
                      809,
                      857
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 57
                      },
                      "start": {
                        "column": 16,
                        "line": 53
                      }
                    }
                  }
                ],
                "test": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    806,
                    807
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 53
                    },
                    "start": {
                      "column": 13,
                      "line": 53
                    }
                  }
                },
                "range": [
                  801,
                  857
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 57
                  },
                  "start": {
                    "column": 8,
                    "line": 53
                  }
                }
              },
              {
                "type": "SwitchCase",
                "consequent": [
                  {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "*=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "range": [
                              889,
                              890
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 59
                              },
                              "start": {
                                "column": 12,
                                "line": 59
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              894,
                              895
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 59
                              },
                              "start": {
                                "column": 17,
                                "line": 59
                              }
                            }
                          },
                          "range": [
                            889,
                            895
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 59
                            },
                            "start": {
                              "column": 12,
                              "line": 59
                            }
                          }
                        },
                        "range": [
                          889,
                          896
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 59
                          },
                          "start": {
                            "column": 12,
                            "line": 59
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
                              909,
                              910
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 60
                              },
                              "start": {
                                "column": 12,
                                "line": 60
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "50",
                            "value": 50,
                            "range": [
                              913,
                              915
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 60
                              },
                              "start": {
                                "column": 16,
                                "line": 60
                              }
                            }
                          },
                          "range": [
                            909,
                            915
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 60
                            },
                            "start": {
                              "column": 12,
                              "line": 60
                            }
                          }
                        },
                        "range": [
                          909,
                          916
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 60
                          },
                          "start": {
                            "column": 12,
                            "line": 60
                          }
                        }
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "range": [
                          929,
                          935
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 61
                          },
                          "start": {
                            "column": 12,
                            "line": 61
                          }
                        }
                      }
                    ],
                    "range": [
                      875,
                      946
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 63
                      },
                      "start": {
                        "column": 17,
                        "line": 58
                      }
                    }
                  }
                ],
                "test": null,
                "range": [
                  866,
                  946
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 63
                  },
                  "start": {
                    "column": 8,
                    "line": 58
                  }
                }
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "range": [
                  719,
                  722
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 47
                  },
                  "start": {
                    "column": 12,
                    "line": 47
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "range": [
                  723,
                  724
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 47
                  },
                  "start": {
                    "column": 16,
                    "line": 47
                  }
                }
              },
              "range": [
                719,
                724
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 47
                },
                "start": {
                  "column": 12,
                  "line": 47
                }
              }
            },
            "range": [
              711,
              952
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 47
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
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        982,
                        983
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 66
                        },
                        "start": {
                          "column": 8,
                          "line": 66
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": false,
                    "range": [
                      982,
                      985
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 66
                      },
                      "start": {
                        "column": 8,
                        "line": 66
                      }
                    }
                  },
                  "range": [
                    982,
                    986
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 66
                    },
                    "start": {
                      "column": 8,
                      "line": 66
                    }
                  }
                }
              ],
              "range": [
                972,
                992
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 67
                },
                "start": {
                  "column": 19,
                  "line": 65
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
                  964,
                  965
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 65
                  },
                  "start": {
                    "column": 11,
                    "line": 65
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "10",
                "value": 10,
                "range": [
                  968,
                  970
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 65
                  },
                  "start": {
                    "column": 15,
                    "line": 65
                  }
                }
              },
              "range": [
                964,
                970
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 65
                },
                "start": {
                  "column": 11,
                  "line": 65
                }
              }
            },
            "range": [
              957,
              992
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 67
              },
              "start": {
                "column": 4,
                "line": 65
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
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1010,
                        1011
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 69
                        },
                        "start": {
                          "column": 8,
                          "line": 69
                        }
                      }
                    },
                    "operator": "--",
                    "prefix": false,
                    "range": [
                      1010,
                      1013
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 69
                      },
                      "start": {
                        "column": 8,
                        "line": 69
                      }
                    }
                  },
                  "range": [
                    1010,
                    1014
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 69
                    },
                    "start": {
                      "column": 8,
                      "line": 69
                    }
                  }
                }
              ],
              "range": [
                1000,
                1020
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 70
                },
                "start": {
                  "column": 7,
                  "line": 68
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
                  1028,
                  1029
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 70
                  },
                  "start": {
                    "column": 13,
                    "line": 70
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "4",
                "value": 4,
                "range": [
                  1032,
                  1033
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 70
                  },
                  "start": {
                    "column": 17,
                    "line": 70
                  }
                }
              },
              "range": [
                1028,
                1033
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
              997,
              1034
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 70
              },
              "start": {
                "column": 4,
                "line": 68
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
                  1039,
                  1040
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 71
                  },
                  "start": {
                    "column": 4,
                    "line": 71
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  1043,
                  1044
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 71
                  },
                  "start": {
                    "column": 8,
                    "line": 71
                  }
                }
              },
              "range": [
                1039,
                1044
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 71
                },
                "start": {
                  "column": 4,
                  "line": 71
                }
              }
            },
            "range": [
              1039,
              1045
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 71
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    1054,
                    1055
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 72
                    },
                    "start": {
                      "column": 8,
                      "line": 72
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        1077,
                        1078
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 72
                        },
                        "start": {
                          "column": 31,
                          "line": 72
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1081,
                        1082
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 72
                        },
                        "start": {
                          "column": 35,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      1077,
                      1082
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 72
                      },
                      "start": {
                        "column": 31,
                        "line": 72
                      }
                    }
                  },
                  "consequent": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
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
                          "column": 24,
                          "line": 72
                        },
                        "start": {
                          "column": 23,
                          "line": 72
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1073,
                        1074
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 72
                        },
                        "start": {
                          "column": 27,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      1069,
                      1074
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 72
                      },
                      "start": {
                        "column": 23,
                        "line": 72
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
                        1059,
                        1060
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 72
                        },
                        "start": {
                          "column": 13,
                          "line": 72
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1064,
                        1065
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 72
                        },
                        "start": {
                          "column": 18,
                          "line": 72
                        }
                      }
                    },
                    "range": [
                      1059,
                      1065
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 72
                      },
                      "start": {
                        "column": 13,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    1058,
                    1082
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 72
                    },
                    "start": {
                      "column": 12,
                      "line": 72
                    }
                  }
                },
                "range": [
                  1054,
                  1082
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 72
                  },
                  "start": {
                    "column": 8,
                    "line": 72
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              1050,
              1083
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "BinaryExpression",
                "operator": "-",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1107,
                    1108
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 73
                    },
                    "start": {
                      "column": 23,
                      "line": 73
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1111,
                    1112
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 73
                    },
                    "start": {
                      "column": 27,
                      "line": 73
                    }
                  }
                },
                "range": [
                  1107,
                  1112
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 73
                  },
                  "start": {
                    "column": 23,
                    "line": 73
                  }
                }
              },
              "consequent": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1099,
                    1100
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 73
                    },
                    "start": {
                      "column": 15,
                      "line": 73
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1103,
                    1104
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 73
                    },
                    "start": {
                      "column": 19,
                      "line": 73
                    }
                  }
                },
                "range": [
                  1099,
                  1104
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 73
                  },
                  "start": {
                    "column": 15,
                    "line": 73
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
                    1089,
                    1090
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 73
                    },
                    "start": {
                      "column": 5,
                      "line": 73
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    1094,
                    1095
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 73
                    },
                    "start": {
                      "column": 10,
                      "line": 73
                    }
                  }
                },
                "range": [
                  1089,
                  1095
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 73
                  },
                  "start": {
                    "column": 5,
                    "line": 73
                  }
                }
              },
              "range": [
                1088,
                1112
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 73
                },
                "start": {
                  "column": 4,
                  "line": 73
                }
              }
            },
            "range": [
              1088,
              1113
            ],
            "loc": {
              "end": {
                "column": 29,
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
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1118,
                  1119
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
                "raw": "1",
                "value": 1,
                "range": [
                  1124,
                  1125
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 74
                  },
                  "start": {
                    "column": 10,
                    "line": 74
                  }
                }
              },
              "range": [
                1118,
                1125
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
              1118,
              1126
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
                    "column": 5,
                    "line": 75
                  },
                  "start": {
                    "column": 4,
                    "line": 75
                  }
                }
              },
              "right": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    1135,
                    1136
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 75
                    },
                    "start": {
                      "column": 8,
                      "line": 75
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "40",
                  "value": 40,
                  "range": [
                    1139,
                    1141
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 75
                    },
                    "start": {
                      "column": 12,
                      "line": 75
                    }
                  }
                },
                "range": [
                  1135,
                  1141
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 75
                  },
                  "start": {
                    "column": 8,
                    "line": 75
                  }
                }
              },
              "range": [
                1131,
                1141
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 75
                },
                "start": {
                  "column": 4,
                  "line": 75
                }
              }
            },
            "range": [
              1131,
              1142
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 75
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
                  "raw": "\"y\"",
                  "value": "y",
                  "range": [
                    1152,
                    1155
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 76
                    },
                    "start": {
                      "column": 9,
                      "line": 76
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "eval",
                "optional": false,
                "range": [
                  1147,
                  1151
                ],
                "loc": {
                  "end": {
                    "column": 8,
                    "line": 76
                  },
                  "start": {
                    "column": 4,
                    "line": 76
                  }
                }
              },
              "optional": false,
              "range": [
                1147,
                1156
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 76
                },
                "start": {
                  "column": 4,
                  "line": 76
                }
              }
            },
            "range": [
              1147,
              1157
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          },
          {
            "type": "ReturnStatement",
            "argument": null,
            "range": [
              1162,
              1169
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 77
              },
              "start": {
                "column": 4,
                "line": 77
              }
            }
          }
        ],
        "range": [
          13,
          1171
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 78
          },
          "start": {
            "column": 13,
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
        "name": "f",
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
      "params": [],
      "range": [
        0,
        1171
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 78
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
            "name": "b",
            "optional": false,
            "range": [
              1176,
              1177
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
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
                        "range": [
                          1202,
                          1203
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 80
                          },
                          "start": {
                            "column": 8,
                            "line": 80
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          1206,
                          1208
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 80
                          },
                          "start": {
                            "column": 12,
                            "line": 80
                          }
                        }
                      },
                      "range": [
                        1202,
                        1208
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 80
                        },
                        "start": {
                          "column": 8,
                          "line": 80
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1198,
                    1209
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 80
                    },
                    "start": {
                      "column": 4,
                      "line": 80
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
                        1214,
                        1215
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 81
                        },
                        "start": {
                          "column": 4,
                          "line": 81
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1218,
                          1219
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 81
                          },
                          "start": {
                            "column": 8,
                            "line": 81
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1222,
                          1223
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 81
                          },
                          "start": {
                            "column": 12,
                            "line": 81
                          }
                        }
                      },
                      "range": [
                        1218,
                        1223
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 81
                        },
                        "start": {
                          "column": 8,
                          "line": 81
                        }
                      }
                    },
                    "range": [
                      1214,
                      1223
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 81
                      },
                      "start": {
                        "column": 4,
                        "line": 81
                      }
                    }
                  },
                  "range": [
                    1214,
                    1224
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 81
                    },
                    "start": {
                      "column": 4,
                      "line": 81
                    }
                  }
                }
              ],
              "range": [
                1192,
                1226
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 82
                },
                "start": {
                  "column": 20,
                  "line": 79
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              1180,
              1226
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 82
              },
              "start": {
                "column": 8,
                "line": 79
              }
            }
          },
          "range": [
            1176,
            1226
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 82
            },
            "start": {
              "column": 4,
              "line": 79
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1172,
        1227
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 82
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
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "range": [
            1228,
            1229
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 83
            },
            "start": {
              "column": 0,
              "line": 83
            }
          }
        },
        "optional": false,
        "range": [
          1228,
          1231
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 83
          },
          "start": {
            "column": 0,
            "line": 83
          }
        }
      },
      "range": [
        1228,
        1232
      ],
      "loc": {
        "end": {
          "column": 4,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 83
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 4,
      "line": 83
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
