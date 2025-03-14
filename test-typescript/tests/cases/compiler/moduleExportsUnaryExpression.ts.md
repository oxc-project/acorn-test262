__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    239
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
              4,
              5
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 1
              },
              "start": {
                "column": 4,
                "line": 1
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              8,
              9
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 1
              },
              "start": {
                "column": 8,
                "line": 1
              }
            }
          },
          "range": [
            4,
            9
          ],
          "loc": {
            "end": {
              "column": 9,
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
        10
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        12,
        223
      ],
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "async": false,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "alternate": null,
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "<=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      70,
                      71
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 4
                      },
                      "start": {
                        "column": 25,
                        "line": 4
                      }
                    }
                  },
                  "right": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        75,
                        76
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 4
                        },
                        "start": {
                          "column": 30,
                          "line": 4
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": false,
                    "range": [
                      75,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 4
                      },
                      "start": {
                        "column": 30,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    70,
                    78
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 4
                    },
                    "start": {
                      "column": 25,
                      "line": 4
                    }
                  }
                },
                "range": [
                  63,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 4
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "<=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    53,
                    54
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "right": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      58,
                      59
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
                  "operator": "++",
                  "prefix": false,
                  "range": [
                    58,
                    61
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 4
                    },
                    "start": {
                      "column": 13,
                      "line": 4
                    }
                  }
                },
                "range": [
                  53,
                  61
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              },
              "range": [
                49,
                79
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            {
              "type": "IfStatement",
              "alternate": null,
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "<=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      105,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 5
                      },
                      "start": {
                        "column": 25,
                        "line": 5
                      }
                    }
                  },
                  "right": {
                    "type": "UpdateExpression",
                    "argument": {
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
                          "column": 31,
                          "line": 5
                        },
                        "start": {
                          "column": 30,
                          "line": 5
                        }
                      }
                    },
                    "operator": "--",
                    "prefix": false,
                    "range": [
                      110,
                      113
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 5
                      },
                      "start": {
                        "column": 30,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    105,
                    113
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 5
                    },
                    "start": {
                      "column": 25,
                      "line": 5
                    }
                  }
                },
                "range": [
                  98,
                  114
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 5
                  },
                  "start": {
                    "column": 18,
                    "line": 5
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "<=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    88,
                    89
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
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      93,
                      94
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
                  "operator": "--",
                  "prefix": false,
                  "range": [
                    93,
                    96
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 5
                    },
                    "start": {
                      "column": 13,
                      "line": 5
                    }
                  }
                },
                "range": [
                  88,
                  96
                ],
                "loc": {
                  "end": {
                    "column": 16,
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
                114
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            },
            {
              "type": "IfStatement",
              "alternate": null,
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "<=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      140,
                      141
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
                  "right": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        147,
                        148
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 6
                        },
                        "start": {
                          "column": 32,
                          "line": 6
                        }
                      }
                    },
                    "operator": "++",
                    "prefix": true,
                    "range": [
                      145,
                      148
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 6
                      },
                      "start": {
                        "column": 30,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    140,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 6
                    },
                    "start": {
                      "column": 25,
                      "line": 6
                    }
                  }
                },
                "range": [
                  133,
                  149
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 6
                  },
                  "start": {
                    "column": 18,
                    "line": 6
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "<=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    123,
                    124
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
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      130,
                      131
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 6
                      },
                      "start": {
                        "column": 15,
                        "line": 6
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": true,
                  "range": [
                    128,
                    131
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 6
                    },
                    "start": {
                      "column": 13,
                      "line": 6
                    }
                  }
                },
                "range": [
                  123,
                  131
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 6
                  },
                  "start": {
                    "column": 8,
                    "line": 6
                  }
                }
              },
              "range": [
                119,
                149
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            {
              "type": "IfStatement",
              "alternate": null,
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "<=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      175,
                      176
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 7
                      },
                      "start": {
                        "column": 25,
                        "line": 7
                      }
                    }
                  },
                  "right": {
                    "type": "UpdateExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        182,
                        183
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 7
                        },
                        "start": {
                          "column": 32,
                          "line": 7
                        }
                      }
                    },
                    "operator": "--",
                    "prefix": true,
                    "range": [
                      180,
                      183
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 7
                      },
                      "start": {
                        "column": 30,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    175,
                    183
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 7
                    },
                    "start": {
                      "column": 25,
                      "line": 7
                    }
                  }
                },
                "range": [
                  168,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 7
                  },
                  "start": {
                    "column": 18,
                    "line": 7
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "<=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "range": [
                    158,
                    159
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "right": {
                  "type": "UpdateExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      165,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 7
                      },
                      "start": {
                        "column": 15,
                        "line": 7
                      }
                    }
                  },
                  "operator": "--",
                  "prefix": true,
                  "range": [
                    163,
                    166
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 7
                    },
                    "start": {
                      "column": 13,
                      "line": 7
                    }
                  }
                },
                "range": [
                  158,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              },
              "range": [
                154,
                184
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 7
                },
                "start": {
                  "column": 4,
                  "line": 7
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
                    190,
                    191
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
                  190,
                  193
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
                190,
                194
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "UpdateExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    199,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                },
                "operator": "--",
                "prefix": false,
                "range": [
                  199,
                  202
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "range": [
                199,
                203
              ],
              "loc": {
                "end": {
                  "column": 8,
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
                "type": "UpdateExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    210,
                    211
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 11
                    },
                    "start": {
                      "column": 6,
                      "line": 11
                    }
                  }
                },
                "operator": "++",
                "prefix": true,
                "range": [
                  208,
                  211
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 11
                  },
                  "start": {
                    "column": 4,
                    "line": 11
                  }
                }
              },
              "range": [
                208,
                212
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 11
                },
                "start": {
                  "column": 4,
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
                    219,
                    220
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 12
                    },
                    "start": {
                      "column": 6,
                      "line": 12
                    }
                  }
                },
                "operator": "--",
                "prefix": true,
                "range": [
                  217,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              },
              "range": [
                217,
                221
              ],
              "loc": {
                "end": {
                  "column": 8,
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
            43,
            223
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 31,
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
          "name": "foo",
          "optional": false,
          "range": [
            28,
            31
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 3
            },
            "start": {
              "column": 16,
              "line": 3
            }
          }
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 29,
                  "line": 3
                },
                "start": {
                  "column": 21,
                  "line": 3
                }
              },
              "range": [
                33,
                41
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  35,
                  41
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 3
                  },
                  "start": {
                    "column": 23,
                    "line": 3
                  }
                }
              }
            },
            "range": [
              32,
              41
            ],
            "loc": {
              "end": {
                "column": 29,
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
          19,
          223
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 7,
            "line": 3
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              234,
              235
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
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "range": [
              234,
              235
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
          "range": [
            234,
            235
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
        }
      ],
      "range": [
        225,
        238
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 16
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
