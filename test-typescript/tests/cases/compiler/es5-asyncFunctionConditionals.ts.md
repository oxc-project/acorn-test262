__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    211
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
            "name": "x",
            "optional": false,
            "range": [
              12,
              13
            ],
            "loc": {
              "end": {
                "column": 13,
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
            13
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "range": [
              15,
              16
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 1
              },
              "start": {
                "column": 15,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            15,
            16
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 1
            },
            "start": {
              "column": 15,
              "line": 1
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "range": [
              18,
              19
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 1
              },
              "start": {
                "column": 18,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            18,
            19
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 1
            },
            "start": {
              "column": 18,
              "line": 1
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              21,
              22
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 1
              },
              "start": {
                "column": 21,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            21,
            22
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
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
          "init": null,
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
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              27,
              28
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 27,
                "line": 1
              }
            }
          },
          "init": null,
          "range": [
            27,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 27,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        29
      ],
      "loc": {
        "end": {
          "column": 29,
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
      "async": true,
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
                "name": "a",
                "optional": false,
                "range": [
                  67,
                  68
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
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    87,
                    88
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
                "consequent": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    83,
                    84
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
                "test": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      78,
                      79
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 4
                      },
                      "start": {
                        "column": 15,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    72,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 4
                    },
                    "start": {
                      "column": 9,
                      "line": 4
                    }
                  }
                },
                "range": [
                  71,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              },
              "range": [
                67,
                88
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              67,
              89
            ],
            "loc": {
              "end": {
                "column": 26,
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
          61,
          91
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 30,
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
        "name": "conditional0",
        "optional": false,
        "range": [
          46,
          58
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 3
          },
          "start": {
            "column": 15,
            "line": 3
          }
        }
      },
      "params": [],
      "range": [
        31,
        91
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
      "async": true,
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
                "name": "a",
                "optional": false,
                "range": [
                  129,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    147,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 8
                    },
                    "start": {
                      "column": 22,
                      "line": 8
                    }
                  }
                },
                "consequent": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      143,
                      144
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 8
                      },
                      "start": {
                        "column": 18,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    137,
                    144
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  }
                },
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    133,
                    134
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
                "range": [
                  133,
                  148
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              },
              "range": [
                129,
                148
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
                }
              }
            },
            "range": [
              129,
              149
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          123,
          151
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 30,
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
        "name": "conditional1",
        "optional": false,
        "range": [
          108,
          120
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 7
          },
          "start": {
            "column": 15,
            "line": 7
          }
        }
      },
      "params": [],
      "range": [
        93,
        151
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  189,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "right": {
                "type": "ConditionalExpression",
                "alternate": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "range": [
                      207,
                      208
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 12
                      },
                      "start": {
                        "column": 22,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    201,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 12
                    },
                    "start": {
                      "column": 16,
                      "line": 12
                    }
                  }
                },
                "consequent": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    197,
                    198
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 12
                    },
                    "start": {
                      "column": 12,
                      "line": 12
                    }
                  }
                },
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    193,
                    194
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
                  193,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              },
              "range": [
                189,
                208
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 12
                },
                "start": {
                  "column": 4,
                  "line": 12
                }
              }
            },
            "range": [
              189,
              209
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          183,
          211
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 30,
            "line": 11
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conditional2",
        "optional": false,
        "range": [
          168,
          180
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 11
          },
          "start": {
            "column": 15,
            "line": 11
          }
        }
      },
      "params": [],
      "range": [
        153,
        211
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 13
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
