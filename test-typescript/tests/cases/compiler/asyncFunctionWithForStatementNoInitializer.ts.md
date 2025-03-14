__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    311
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": true,
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
                  "name": "i",
                  "optional": false,
                  "range": [
                    33,
                    34
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
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    37,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  33,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 13,
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
            "kind": "let",
            "range": [
              29,
              38
            ],
            "loc": {
              "end": {
                "column": 13,
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
                  "name": "limit",
                  "optional": false,
                  "range": [
                    47,
                    52
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
                },
                "init": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    55,
                    57
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 3
                    },
                    "start": {
                      "column": 16,
                      "line": 3
                    }
                  }
                },
                "range": [
                  47,
                  57
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              43,
              57
            ],
            "loc": {
              "end": {
                "column": 18,
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
              "body": [],
              "range": [
                85,
                92
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 5
                },
                "start": {
                  "column": 27,
                  "line": 4
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
                "name": "i",
                "optional": false,
                "range": [
                  69,
                  70
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
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "limit",
                "optional": false,
                "range": [
                  73,
                  78
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                }
              },
              "range": [
                69,
                78
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 4
                },
                "start": {
                  "column": 11,
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
                    "column": 25,
                    "line": 4
                  },
                  "start": {
                    "column": 24,
                    "line": 4
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                80,
                83
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 22,
                  "line": 4
                }
              }
            },
            "range": [
              62,
              92
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 5
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          }
        ],
        "range": [
          23,
          94
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 6
          },
          "start": {
            "column": 23,
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
        "name": "test1",
        "optional": false,
        "range": [
          15,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "params": [],
      "range": [
        0,
        94
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
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
                  "name": "i",
                  "optional": false,
                  "range": [
                    129,
                    130
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
                      "column": 13,
                      "line": 9
                    },
                    "start": {
                      "column": 12,
                      "line": 9
                    }
                  }
                },
                "range": [
                  129,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 13,
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
              125,
              134
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                  "name": "limit",
                  "optional": false,
                  "range": [
                    143,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "10",
                  "value": 10,
                  "range": [
                    151,
                    153
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 10
                    },
                    "start": {
                      "column": 16,
                      "line": 10
                    }
                  }
                },
                "range": [
                  143,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 18,
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
              139,
              153
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                186,
                193
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 32,
                  "line": 11
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
                  163,
                  164
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 11
                  },
                  "start": {
                    "column": 9,
                    "line": 11
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  167,
                  168
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 11
                  },
                  "start": {
                    "column": 13,
                    "line": 11
                  }
                }
              },
              "range": [
                163,
                168
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 11
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
                  170,
                  171
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
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "limit",
                "optional": false,
                "range": [
                  174,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 11
                  },
                  "start": {
                    "column": 20,
                    "line": 11
                  }
                }
              },
              "range": [
                170,
                179
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 11
                },
                "start": {
                  "column": 16,
                  "line": 11
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
                  183,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 11
                  },
                  "start": {
                    "column": 29,
                    "line": 11
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                181,
                184
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 11
                },
                "start": {
                  "column": 27,
                  "line": 11
                }
              }
            },
            "range": [
              158,
              193
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          119,
          195
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 23,
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
        "name": "test2",
        "optional": false,
        "range": [
          111,
          116
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 8
          },
          "start": {
            "column": 15,
            "line": 8
          }
        }
      },
      "params": [],
      "range": [
        96,
        195
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
      "type": "FunctionDeclaration",
      "async": true,
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
                  "name": "i",
                  "optional": false,
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
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    234,
                    235
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
                "range": [
                  230,
                  235
                ],
                "loc": {
                  "end": {
                    "column": 13,
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
              226,
              235
            ],
            "loc": {
              "end": {
                "column": 13,
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
              "body": [],
              "range": [
                253,
                260
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 17,
                  "line": 17
                }
              }
            },
            "init": null,
            "test": null,
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "range": [
                  250,
                  251
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 17
                  },
                  "start": {
                    "column": 14,
                    "line": 17
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                248,
                251
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
              240,
              260
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 17
              }
            }
          }
        ],
        "range": [
          220,
          262
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 23,
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
        "name": "test3",
        "optional": false,
        "range": [
          212,
          217
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 15
          },
          "start": {
            "column": 15,
            "line": 15
          }
        }
      },
      "params": [],
      "range": [
        197,
        262
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [],
              "range": [
                302,
                309
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 13,
                  "line": 22
                }
              }
            },
            "init": null,
            "test": null,
            "update": null,
            "range": [
              293,
              309
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          287,
          311
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 23,
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
        "name": "test4",
        "optional": false,
        "range": [
          279,
          284
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 21
          },
          "start": {
            "column": 15,
            "line": 21
          }
        }
      },
      "params": [],
      "range": [
        264,
        311
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 24
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
