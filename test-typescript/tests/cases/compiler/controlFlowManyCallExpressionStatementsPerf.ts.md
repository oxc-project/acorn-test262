__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1820
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                44,
                45
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 1
                },
                "start": {
                  "column": 44,
                  "line": 1
                }
              }
            },
            "range": [
              37,
              46
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 1
              },
              "start": {
                "column": 37,
                "line": 1
              }
            }
          }
        ],
        "range": [
          35,
          48
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 1
          },
          "start": {
            "column": 35,
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
        "name": "test",
        "optional": false,
        "range": [
          9,
          13
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
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
                "column": 24,
                "line": 1
              },
              "start": {
                "column": 15,
                "line": 1
              }
            },
            "range": [
              15,
              24
            ],
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "range": [
                17,
                24
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 1
                },
                "start": {
                  "column": 17,
                  "line": 1
                }
              }
            }
          },
          "range": [
            14,
            24
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 1
            },
            "start": {
              "column": 14,
              "line": 1
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 25,
            "line": 1
          }
        },
        "range": [
          25,
          34
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            27,
            34
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 1
            },
            "start": {
              "column": 27,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        48
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 1
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
            "name": "state",
            "optional": false,
            "range": [
              54,
              59
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "true",
            "value": true,
            "range": [
              62,
              66
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 3
              },
              "start": {
                "column": 12,
                "line": 3
              }
            }
          },
          "range": [
            54,
            66
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 3
            },
            "start": {
              "column": 4,
              "line": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        50,
        67
      ],
      "loc": {
        "end": {
          "column": 17,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        89,
                        94
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 6
                        },
                        "start": {
                          "column": 7,
                          "line": 6
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        98,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 6
                        },
                        "start": {
                          "column": 16,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      89,
                      101
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 6
                      },
                      "start": {
                        "column": 7,
                        "line": 6
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      105,
                      110
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 6
                      },
                      "start": {
                        "column": 23,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    89,
                    110
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 6
                    },
                    "start": {
                      "column": 7,
                      "line": 6
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  84,
                  88
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 6
                  },
                  "start": {
                    "column": 2,
                    "line": 6
                  }
                }
              },
              "optional": false,
              "range": [
                84,
                111
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 6
                },
                "start": {
                  "column": 2,
                  "line": 6
                }
              }
            },
            "range": [
              84,
              112
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        120,
                        125
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 7
                        },
                        "start": {
                          "column": 7,
                          "line": 7
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        129,
                        132
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 7
                        },
                        "start": {
                          "column": 16,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      120,
                      132
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 7
                      },
                      "start": {
                        "column": 7,
                        "line": 7
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      136,
                      141
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 7
                      },
                      "start": {
                        "column": 23,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    120,
                    141
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 7
                    },
                    "start": {
                      "column": 7,
                      "line": 7
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  115,
                  119
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 7
                  },
                  "start": {
                    "column": 2,
                    "line": 7
                  }
                }
              },
              "optional": false,
              "range": [
                115,
                142
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 2,
                  "line": 7
                }
              }
            },
            "range": [
              115,
              143
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 7
              },
              "start": {
                "column": 2,
                "line": 7
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        151,
                        156
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 8
                        },
                        "start": {
                          "column": 7,
                          "line": 8
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        160,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 8
                        },
                        "start": {
                          "column": 16,
                          "line": 8
                        }
                      }
                    },
                    "range": [
                      151,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 8
                      },
                      "start": {
                        "column": 7,
                        "line": 8
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      167,
                      172
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 8
                      },
                      "start": {
                        "column": 23,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    151,
                    172
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 8
                    },
                    "start": {
                      "column": 7,
                      "line": 8
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  146,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 8
                  },
                  "start": {
                    "column": 2,
                    "line": 8
                  }
                }
              },
              "optional": false,
              "range": [
                146,
                173
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 8
                },
                "start": {
                  "column": 2,
                  "line": 8
                }
              }
            },
            "range": [
              146,
              174
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 8
              },
              "start": {
                "column": 2,
                "line": 8
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        182,
                        187
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 9
                        },
                        "start": {
                          "column": 7,
                          "line": 9
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        191,
                        194
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 9
                        },
                        "start": {
                          "column": 16,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      182,
                      194
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 9
                      },
                      "start": {
                        "column": 7,
                        "line": 9
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      198,
                      203
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 9
                      },
                      "start": {
                        "column": 23,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    182,
                    203
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 9
                    },
                    "start": {
                      "column": 7,
                      "line": 9
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  177,
                  181
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 9
                  },
                  "start": {
                    "column": 2,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "range": [
                177,
                204
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 9
                },
                "start": {
                  "column": 2,
                  "line": 9
                }
              }
            },
            "range": [
              177,
              205
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 9
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        213,
                        218
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 10
                        },
                        "start": {
                          "column": 7,
                          "line": 10
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        222,
                        225
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 10
                        },
                        "start": {
                          "column": 16,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      213,
                      225
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 10
                      },
                      "start": {
                        "column": 7,
                        "line": 10
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      229,
                      234
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 10
                      },
                      "start": {
                        "column": 23,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    213,
                    234
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 10
                    },
                    "start": {
                      "column": 7,
                      "line": 10
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  208,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 10
                  },
                  "start": {
                    "column": 2,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "range": [
                208,
                235
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 10
                },
                "start": {
                  "column": 2,
                  "line": 10
                }
              }
            },
            "range": [
              208,
              236
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        244,
                        249
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 11
                        },
                        "start": {
                          "column": 7,
                          "line": 11
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        253,
                        256
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 11
                        },
                        "start": {
                          "column": 16,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      244,
                      256
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 11
                      },
                      "start": {
                        "column": 7,
                        "line": 11
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      260,
                      265
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 11
                      },
                      "start": {
                        "column": 23,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    244,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 11
                    },
                    "start": {
                      "column": 7,
                      "line": 11
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  239,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 11
                  },
                  "start": {
                    "column": 2,
                    "line": 11
                  }
                }
              },
              "optional": false,
              "range": [
                239,
                266
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 11
                },
                "start": {
                  "column": 2,
                  "line": 11
                }
              }
            },
            "range": [
              239,
              267
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 11
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        275,
                        280
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 12
                        },
                        "start": {
                          "column": 7,
                          "line": 12
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        284,
                        287
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 12
                        },
                        "start": {
                          "column": 16,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      275,
                      287
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 12
                      },
                      "start": {
                        "column": 7,
                        "line": 12
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      291,
                      296
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 12
                      },
                      "start": {
                        "column": 23,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    275,
                    296
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 12
                    },
                    "start": {
                      "column": 7,
                      "line": 12
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  270,
                  274
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 12
                  },
                  "start": {
                    "column": 2,
                    "line": 12
                  }
                }
              },
              "optional": false,
              "range": [
                270,
                297
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 12
                },
                "start": {
                  "column": 2,
                  "line": 12
                }
              }
            },
            "range": [
              270,
              298
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 12
              },
              "start": {
                "column": 2,
                "line": 12
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        306,
                        311
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 13
                        },
                        "start": {
                          "column": 7,
                          "line": 13
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        315,
                        318
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 13
                        },
                        "start": {
                          "column": 16,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      306,
                      318
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 13
                      },
                      "start": {
                        "column": 7,
                        "line": 13
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      322,
                      327
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 13
                      },
                      "start": {
                        "column": 23,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    306,
                    327
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 13
                    },
                    "start": {
                      "column": 7,
                      "line": 13
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  301,
                  305
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 13
                  },
                  "start": {
                    "column": 2,
                    "line": 13
                  }
                }
              },
              "optional": false,
              "range": [
                301,
                328
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 13
                },
                "start": {
                  "column": 2,
                  "line": 13
                }
              }
            },
            "range": [
              301,
              329
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 13
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        337,
                        342
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 14
                        },
                        "start": {
                          "column": 7,
                          "line": 14
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        346,
                        349
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 14
                        },
                        "start": {
                          "column": 16,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      337,
                      349
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 14
                      },
                      "start": {
                        "column": 7,
                        "line": 14
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      353,
                      358
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 14
                      },
                      "start": {
                        "column": 23,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    337,
                    358
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 14
                    },
                    "start": {
                      "column": 7,
                      "line": 14
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  332,
                  336
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 14
                  },
                  "start": {
                    "column": 2,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "range": [
                332,
                359
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 14
                },
                "start": {
                  "column": 2,
                  "line": 14
                }
              }
            },
            "range": [
              332,
              360
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 14
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        368,
                        373
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 15
                        },
                        "start": {
                          "column": 7,
                          "line": 15
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        377,
                        380
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 15
                        },
                        "start": {
                          "column": 16,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      368,
                      380
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 15
                      },
                      "start": {
                        "column": 7,
                        "line": 15
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      384,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 15
                      },
                      "start": {
                        "column": 23,
                        "line": 15
                      }
                    }
                  },
                  "range": [
                    368,
                    389
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 15
                    },
                    "start": {
                      "column": 7,
                      "line": 15
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  363,
                  367
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 15
                  },
                  "start": {
                    "column": 2,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "range": [
                363,
                390
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 15
                },
                "start": {
                  "column": 2,
                  "line": 15
                }
              }
            },
            "range": [
              363,
              391
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 15
              },
              "start": {
                "column": 2,
                "line": 15
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        399,
                        404
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 16
                        },
                        "start": {
                          "column": 7,
                          "line": 16
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        408,
                        411
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 16
                        },
                        "start": {
                          "column": 16,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      399,
                      411
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 16
                      },
                      "start": {
                        "column": 7,
                        "line": 16
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      415,
                      420
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 16
                      },
                      "start": {
                        "column": 23,
                        "line": 16
                      }
                    }
                  },
                  "range": [
                    399,
                    420
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 16
                    },
                    "start": {
                      "column": 7,
                      "line": 16
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  394,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 16
                  },
                  "start": {
                    "column": 2,
                    "line": 16
                  }
                }
              },
              "optional": false,
              "range": [
                394,
                421
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 16
                },
                "start": {
                  "column": 2,
                  "line": 16
                }
              }
            },
            "range": [
              394,
              422
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 16
              },
              "start": {
                "column": 2,
                "line": 16
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        430,
                        435
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 17
                        },
                        "start": {
                          "column": 7,
                          "line": 17
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        439,
                        442
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 17
                        },
                        "start": {
                          "column": 16,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      430,
                      442
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 17
                      },
                      "start": {
                        "column": 7,
                        "line": 17
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      446,
                      451
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 17
                      },
                      "start": {
                        "column": 23,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    430,
                    451
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 17
                    },
                    "start": {
                      "column": 7,
                      "line": 17
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  425,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 17
                  },
                  "start": {
                    "column": 2,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "range": [
                425,
                452
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 17
                },
                "start": {
                  "column": 2,
                  "line": 17
                }
              }
            },
            "range": [
              425,
              453
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 17
              },
              "start": {
                "column": 2,
                "line": 17
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        461,
                        466
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 18
                        },
                        "start": {
                          "column": 7,
                          "line": 18
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        470,
                        473
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 18
                        },
                        "start": {
                          "column": 16,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      461,
                      473
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 18
                      },
                      "start": {
                        "column": 7,
                        "line": 18
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      477,
                      482
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 18
                      },
                      "start": {
                        "column": 23,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    461,
                    482
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 18
                    },
                    "start": {
                      "column": 7,
                      "line": 18
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  456,
                  460
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 18
                  },
                  "start": {
                    "column": 2,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "range": [
                456,
                483
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 18
                },
                "start": {
                  "column": 2,
                  "line": 18
                }
              }
            },
            "range": [
              456,
              484
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 18
              },
              "start": {
                "column": 2,
                "line": 18
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        492,
                        497
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 19
                        },
                        "start": {
                          "column": 7,
                          "line": 19
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        501,
                        504
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 19
                        },
                        "start": {
                          "column": 16,
                          "line": 19
                        }
                      }
                    },
                    "range": [
                      492,
                      504
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 19
                      },
                      "start": {
                        "column": 7,
                        "line": 19
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      508,
                      513
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 19
                      },
                      "start": {
                        "column": 23,
                        "line": 19
                      }
                    }
                  },
                  "range": [
                    492,
                    513
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 19
                    },
                    "start": {
                      "column": 7,
                      "line": 19
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  487,
                  491
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 19
                  },
                  "start": {
                    "column": 2,
                    "line": 19
                  }
                }
              },
              "optional": false,
              "range": [
                487,
                514
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 19
                },
                "start": {
                  "column": 2,
                  "line": 19
                }
              }
            },
            "range": [
              487,
              515
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 19
              },
              "start": {
                "column": 2,
                "line": 19
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        523,
                        528
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 20
                        },
                        "start": {
                          "column": 7,
                          "line": 20
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        532,
                        535
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 20
                        },
                        "start": {
                          "column": 16,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      523,
                      535
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 20
                      },
                      "start": {
                        "column": 7,
                        "line": 20
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      539,
                      544
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 20
                      },
                      "start": {
                        "column": 23,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    523,
                    544
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 20
                    },
                    "start": {
                      "column": 7,
                      "line": 20
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  518,
                  522
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 20
                  },
                  "start": {
                    "column": 2,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "range": [
                518,
                545
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 20
                },
                "start": {
                  "column": 2,
                  "line": 20
                }
              }
            },
            "range": [
              518,
              546
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 20
              },
              "start": {
                "column": 2,
                "line": 20
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        554,
                        559
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 21
                        },
                        "start": {
                          "column": 7,
                          "line": 21
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        563,
                        566
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 21
                        },
                        "start": {
                          "column": 16,
                          "line": 21
                        }
                      }
                    },
                    "range": [
                      554,
                      566
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 21
                      },
                      "start": {
                        "column": 7,
                        "line": 21
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      570,
                      575
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 21
                      },
                      "start": {
                        "column": 23,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    554,
                    575
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 21
                    },
                    "start": {
                      "column": 7,
                      "line": 21
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  549,
                  553
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 21
                  },
                  "start": {
                    "column": 2,
                    "line": 21
                  }
                }
              },
              "optional": false,
              "range": [
                549,
                576
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 21
                },
                "start": {
                  "column": 2,
                  "line": 21
                }
              }
            },
            "range": [
              549,
              577
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 21
              },
              "start": {
                "column": 2,
                "line": 21
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        585,
                        590
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 22
                        },
                        "start": {
                          "column": 7,
                          "line": 22
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        594,
                        597
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 22
                        },
                        "start": {
                          "column": 16,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      585,
                      597
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 22
                      },
                      "start": {
                        "column": 7,
                        "line": 22
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      601,
                      606
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 22
                      },
                      "start": {
                        "column": 23,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    585,
                    606
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 22
                    },
                    "start": {
                      "column": 7,
                      "line": 22
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  580,
                  584
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 22
                  },
                  "start": {
                    "column": 2,
                    "line": 22
                  }
                }
              },
              "optional": false,
              "range": [
                580,
                607
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 22
                },
                "start": {
                  "column": 2,
                  "line": 22
                }
              }
            },
            "range": [
              580,
              608
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 22
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        616,
                        621
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 23
                        },
                        "start": {
                          "column": 7,
                          "line": 23
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        625,
                        628
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 23
                        },
                        "start": {
                          "column": 16,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      616,
                      628
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 23
                      },
                      "start": {
                        "column": 7,
                        "line": 23
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      632,
                      637
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 23
                      },
                      "start": {
                        "column": 23,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    616,
                    637
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 23
                    },
                    "start": {
                      "column": 7,
                      "line": 23
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  611,
                  615
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 23
                  },
                  "start": {
                    "column": 2,
                    "line": 23
                  }
                }
              },
              "optional": false,
              "range": [
                611,
                638
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 23
                },
                "start": {
                  "column": 2,
                  "line": 23
                }
              }
            },
            "range": [
              611,
              639
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 23
              },
              "start": {
                "column": 2,
                "line": 23
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        647,
                        652
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 24
                        },
                        "start": {
                          "column": 7,
                          "line": 24
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        656,
                        659
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 24
                        },
                        "start": {
                          "column": 16,
                          "line": 24
                        }
                      }
                    },
                    "range": [
                      647,
                      659
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 24
                      },
                      "start": {
                        "column": 7,
                        "line": 24
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      663,
                      668
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 24
                      },
                      "start": {
                        "column": 23,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    647,
                    668
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 24
                    },
                    "start": {
                      "column": 7,
                      "line": 24
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  642,
                  646
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 24
                  },
                  "start": {
                    "column": 2,
                    "line": 24
                  }
                }
              },
              "optional": false,
              "range": [
                642,
                669
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 24
                },
                "start": {
                  "column": 2,
                  "line": 24
                }
              }
            },
            "range": [
              642,
              670
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 24
              },
              "start": {
                "column": 2,
                "line": 24
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        678,
                        683
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 25
                        },
                        "start": {
                          "column": 7,
                          "line": 25
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        687,
                        690
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 25
                        },
                        "start": {
                          "column": 16,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      678,
                      690
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 25
                      },
                      "start": {
                        "column": 7,
                        "line": 25
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      694,
                      699
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 25
                      },
                      "start": {
                        "column": 23,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    678,
                    699
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 25
                    },
                    "start": {
                      "column": 7,
                      "line": 25
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  673,
                  677
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 25
                  },
                  "start": {
                    "column": 2,
                    "line": 25
                  }
                }
              },
              "optional": false,
              "range": [
                673,
                700
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 25
                },
                "start": {
                  "column": 2,
                  "line": 25
                }
              }
            },
            "range": [
              673,
              701
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 25
              },
              "start": {
                "column": 2,
                "line": 25
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        709,
                        714
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 26
                        },
                        "start": {
                          "column": 7,
                          "line": 26
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        718,
                        721
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 26
                        },
                        "start": {
                          "column": 16,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      709,
                      721
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 26
                      },
                      "start": {
                        "column": 7,
                        "line": 26
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      725,
                      730
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 26
                      },
                      "start": {
                        "column": 23,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    709,
                    730
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 26
                    },
                    "start": {
                      "column": 7,
                      "line": 26
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  704,
                  708
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 26
                  },
                  "start": {
                    "column": 2,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "range": [
                704,
                731
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 26
                },
                "start": {
                  "column": 2,
                  "line": 26
                }
              }
            },
            "range": [
              704,
              732
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 26
              },
              "start": {
                "column": 2,
                "line": 26
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        740,
                        745
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 27
                        },
                        "start": {
                          "column": 7,
                          "line": 27
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        749,
                        752
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 27
                        },
                        "start": {
                          "column": 16,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      740,
                      752
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 27
                      },
                      "start": {
                        "column": 7,
                        "line": 27
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      756,
                      761
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 27
                      },
                      "start": {
                        "column": 23,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    740,
                    761
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 27
                    },
                    "start": {
                      "column": 7,
                      "line": 27
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  735,
                  739
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 27
                  },
                  "start": {
                    "column": 2,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "range": [
                735,
                762
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 27
                },
                "start": {
                  "column": 2,
                  "line": 27
                }
              }
            },
            "range": [
              735,
              763
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 27
              },
              "start": {
                "column": 2,
                "line": 27
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        771,
                        776
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 28
                        },
                        "start": {
                          "column": 7,
                          "line": 28
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        780,
                        783
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 28
                        },
                        "start": {
                          "column": 16,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      771,
                      783
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 28
                      },
                      "start": {
                        "column": 7,
                        "line": 28
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      787,
                      792
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 28
                      },
                      "start": {
                        "column": 23,
                        "line": 28
                      }
                    }
                  },
                  "range": [
                    771,
                    792
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 28
                    },
                    "start": {
                      "column": 7,
                      "line": 28
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  766,
                  770
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 28
                  },
                  "start": {
                    "column": 2,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "range": [
                766,
                793
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 28
                },
                "start": {
                  "column": 2,
                  "line": 28
                }
              }
            },
            "range": [
              766,
              794
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 28
              },
              "start": {
                "column": 2,
                "line": 28
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        802,
                        807
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 29
                        },
                        "start": {
                          "column": 7,
                          "line": 29
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        811,
                        814
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 29
                        },
                        "start": {
                          "column": 16,
                          "line": 29
                        }
                      }
                    },
                    "range": [
                      802,
                      814
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 29
                      },
                      "start": {
                        "column": 7,
                        "line": 29
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      818,
                      823
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 29
                      },
                      "start": {
                        "column": 23,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    802,
                    823
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 29
                    },
                    "start": {
                      "column": 7,
                      "line": 29
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  797,
                  801
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 29
                  },
                  "start": {
                    "column": 2,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "range": [
                797,
                824
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 29
                },
                "start": {
                  "column": 2,
                  "line": 29
                }
              }
            },
            "range": [
              797,
              825
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 29
              },
              "start": {
                "column": 2,
                "line": 29
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        833,
                        838
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 30
                        },
                        "start": {
                          "column": 7,
                          "line": 30
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        842,
                        845
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 30
                        },
                        "start": {
                          "column": 16,
                          "line": 30
                        }
                      }
                    },
                    "range": [
                      833,
                      845
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 30
                      },
                      "start": {
                        "column": 7,
                        "line": 30
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      849,
                      854
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 30
                      },
                      "start": {
                        "column": 23,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    833,
                    854
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 30
                    },
                    "start": {
                      "column": 7,
                      "line": 30
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  828,
                  832
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 30
                  },
                  "start": {
                    "column": 2,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "range": [
                828,
                855
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 30
                },
                "start": {
                  "column": 2,
                  "line": 30
                }
              }
            },
            "range": [
              828,
              856
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 30
              },
              "start": {
                "column": 2,
                "line": 30
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        864,
                        869
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 31
                        },
                        "start": {
                          "column": 7,
                          "line": 31
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        873,
                        876
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 31
                        },
                        "start": {
                          "column": 16,
                          "line": 31
                        }
                      }
                    },
                    "range": [
                      864,
                      876
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 31
                      },
                      "start": {
                        "column": 7,
                        "line": 31
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      880,
                      885
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 31
                      },
                      "start": {
                        "column": 23,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    864,
                    885
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 31
                    },
                    "start": {
                      "column": 7,
                      "line": 31
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  859,
                  863
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 31
                  },
                  "start": {
                    "column": 2,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "range": [
                859,
                886
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 31
                },
                "start": {
                  "column": 2,
                  "line": 31
                }
              }
            },
            "range": [
              859,
              887
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 31
              },
              "start": {
                "column": 2,
                "line": 31
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        895,
                        900
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 32
                        },
                        "start": {
                          "column": 7,
                          "line": 32
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        904,
                        907
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 32
                        },
                        "start": {
                          "column": 16,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      895,
                      907
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 32
                      },
                      "start": {
                        "column": 7,
                        "line": 32
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      911,
                      916
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 32
                      },
                      "start": {
                        "column": 23,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    895,
                    916
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 32
                    },
                    "start": {
                      "column": 7,
                      "line": 32
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  890,
                  894
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 32
                  },
                  "start": {
                    "column": 2,
                    "line": 32
                  }
                }
              },
              "optional": false,
              "range": [
                890,
                917
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 32
                },
                "start": {
                  "column": 2,
                  "line": 32
                }
              }
            },
            "range": [
              890,
              918
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 32
              },
              "start": {
                "column": 2,
                "line": 32
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        926,
                        931
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 33
                        },
                        "start": {
                          "column": 7,
                          "line": 33
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        935,
                        938
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 33
                        },
                        "start": {
                          "column": 16,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      926,
                      938
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 33
                      },
                      "start": {
                        "column": 7,
                        "line": 33
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      942,
                      947
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 33
                      },
                      "start": {
                        "column": 23,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    926,
                    947
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 33
                    },
                    "start": {
                      "column": 7,
                      "line": 33
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  921,
                  925
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 33
                  },
                  "start": {
                    "column": 2,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "range": [
                921,
                948
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 33
                },
                "start": {
                  "column": 2,
                  "line": 33
                }
              }
            },
            "range": [
              921,
              949
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 33
              },
              "start": {
                "column": 2,
                "line": 33
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        957,
                        962
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 34
                        },
                        "start": {
                          "column": 7,
                          "line": 34
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        966,
                        969
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 34
                        },
                        "start": {
                          "column": 16,
                          "line": 34
                        }
                      }
                    },
                    "range": [
                      957,
                      969
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 34
                      },
                      "start": {
                        "column": 7,
                        "line": 34
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      973,
                      978
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 34
                      },
                      "start": {
                        "column": 23,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    957,
                    978
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 34
                    },
                    "start": {
                      "column": 7,
                      "line": 34
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  952,
                  956
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 34
                  },
                  "start": {
                    "column": 2,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "range": [
                952,
                979
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 34
                },
                "start": {
                  "column": 2,
                  "line": 34
                }
              }
            },
            "range": [
              952,
              980
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 34
              },
              "start": {
                "column": 2,
                "line": 34
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        988,
                        993
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 35
                        },
                        "start": {
                          "column": 7,
                          "line": 35
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        997,
                        1000
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 35
                        },
                        "start": {
                          "column": 16,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      988,
                      1000
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 35
                      },
                      "start": {
                        "column": 7,
                        "line": 35
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1004,
                      1009
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 35
                      },
                      "start": {
                        "column": 23,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    988,
                    1009
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 35
                    },
                    "start": {
                      "column": 7,
                      "line": 35
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  983,
                  987
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 35
                  },
                  "start": {
                    "column": 2,
                    "line": 35
                  }
                }
              },
              "optional": false,
              "range": [
                983,
                1010
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 35
                },
                "start": {
                  "column": 2,
                  "line": 35
                }
              }
            },
            "range": [
              983,
              1011
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 35
              },
              "start": {
                "column": 2,
                "line": 35
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1019,
                        1024
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 36
                        },
                        "start": {
                          "column": 7,
                          "line": 36
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1028,
                        1031
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 36
                        },
                        "start": {
                          "column": 16,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      1019,
                      1031
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 36
                      },
                      "start": {
                        "column": 7,
                        "line": 36
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1035,
                      1040
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 36
                      },
                      "start": {
                        "column": 23,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    1019,
                    1040
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 36
                    },
                    "start": {
                      "column": 7,
                      "line": 36
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1014,
                  1018
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 36
                  },
                  "start": {
                    "column": 2,
                    "line": 36
                  }
                }
              },
              "optional": false,
              "range": [
                1014,
                1041
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 36
                },
                "start": {
                  "column": 2,
                  "line": 36
                }
              }
            },
            "range": [
              1014,
              1042
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 36
              },
              "start": {
                "column": 2,
                "line": 36
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1050,
                        1055
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 37
                        },
                        "start": {
                          "column": 7,
                          "line": 37
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1059,
                        1062
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 37
                        },
                        "start": {
                          "column": 16,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      1050,
                      1062
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 37
                      },
                      "start": {
                        "column": 7,
                        "line": 37
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1066,
                      1071
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 37
                      },
                      "start": {
                        "column": 23,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    1050,
                    1071
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 37
                    },
                    "start": {
                      "column": 7,
                      "line": 37
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1045,
                  1049
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 37
                  },
                  "start": {
                    "column": 2,
                    "line": 37
                  }
                }
              },
              "optional": false,
              "range": [
                1045,
                1072
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 37
                },
                "start": {
                  "column": 2,
                  "line": 37
                }
              }
            },
            "range": [
              1045,
              1073
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 37
              },
              "start": {
                "column": 2,
                "line": 37
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1081,
                        1086
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 38
                        },
                        "start": {
                          "column": 7,
                          "line": 38
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1090,
                        1093
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 38
                        },
                        "start": {
                          "column": 16,
                          "line": 38
                        }
                      }
                    },
                    "range": [
                      1081,
                      1093
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 38
                      },
                      "start": {
                        "column": 7,
                        "line": 38
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1097,
                      1102
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 38
                      },
                      "start": {
                        "column": 23,
                        "line": 38
                      }
                    }
                  },
                  "range": [
                    1081,
                    1102
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 38
                    },
                    "start": {
                      "column": 7,
                      "line": 38
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1076,
                  1080
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 38
                  },
                  "start": {
                    "column": 2,
                    "line": 38
                  }
                }
              },
              "optional": false,
              "range": [
                1076,
                1103
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 38
                },
                "start": {
                  "column": 2,
                  "line": 38
                }
              }
            },
            "range": [
              1076,
              1104
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 38
              },
              "start": {
                "column": 2,
                "line": 38
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1112,
                        1117
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 39
                        },
                        "start": {
                          "column": 7,
                          "line": 39
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1121,
                        1124
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 39
                        },
                        "start": {
                          "column": 16,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      1112,
                      1124
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 39
                      },
                      "start": {
                        "column": 7,
                        "line": 39
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1128,
                      1133
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 39
                      },
                      "start": {
                        "column": 23,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    1112,
                    1133
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 39
                    },
                    "start": {
                      "column": 7,
                      "line": 39
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1107,
                  1111
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 39
                  },
                  "start": {
                    "column": 2,
                    "line": 39
                  }
                }
              },
              "optional": false,
              "range": [
                1107,
                1134
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 39
                },
                "start": {
                  "column": 2,
                  "line": 39
                }
              }
            },
            "range": [
              1107,
              1135
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 39
              },
              "start": {
                "column": 2,
                "line": 39
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1143,
                        1148
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 40
                        },
                        "start": {
                          "column": 7,
                          "line": 40
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1152,
                        1155
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 40
                        },
                        "start": {
                          "column": 16,
                          "line": 40
                        }
                      }
                    },
                    "range": [
                      1143,
                      1155
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 40
                      },
                      "start": {
                        "column": 7,
                        "line": 40
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1159,
                      1164
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 40
                      },
                      "start": {
                        "column": 23,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    1143,
                    1164
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 40
                    },
                    "start": {
                      "column": 7,
                      "line": 40
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1138,
                  1142
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 40
                  },
                  "start": {
                    "column": 2,
                    "line": 40
                  }
                }
              },
              "optional": false,
              "range": [
                1138,
                1165
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 40
                },
                "start": {
                  "column": 2,
                  "line": 40
                }
              }
            },
            "range": [
              1138,
              1166
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 40
              },
              "start": {
                "column": 2,
                "line": 40
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1174,
                        1179
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 41
                        },
                        "start": {
                          "column": 7,
                          "line": 41
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1183,
                        1186
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 41
                        },
                        "start": {
                          "column": 16,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      1174,
                      1186
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 41
                      },
                      "start": {
                        "column": 7,
                        "line": 41
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1190,
                      1195
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 41
                      },
                      "start": {
                        "column": 23,
                        "line": 41
                      }
                    }
                  },
                  "range": [
                    1174,
                    1195
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 41
                    },
                    "start": {
                      "column": 7,
                      "line": 41
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1169,
                  1173
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 41
                  },
                  "start": {
                    "column": 2,
                    "line": 41
                  }
                }
              },
              "optional": false,
              "range": [
                1169,
                1196
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 41
                },
                "start": {
                  "column": 2,
                  "line": 41
                }
              }
            },
            "range": [
              1169,
              1197
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 41
              },
              "start": {
                "column": 2,
                "line": 41
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1205,
                        1210
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 42
                        },
                        "start": {
                          "column": 7,
                          "line": 42
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1214,
                        1217
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 42
                        },
                        "start": {
                          "column": 16,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      1205,
                      1217
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 42
                      },
                      "start": {
                        "column": 7,
                        "line": 42
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1221,
                      1226
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 42
                      },
                      "start": {
                        "column": 23,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    1205,
                    1226
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 42
                    },
                    "start": {
                      "column": 7,
                      "line": 42
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1200,
                  1204
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 42
                  },
                  "start": {
                    "column": 2,
                    "line": 42
                  }
                }
              },
              "optional": false,
              "range": [
                1200,
                1227
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 42
                },
                "start": {
                  "column": 2,
                  "line": 42
                }
              }
            },
            "range": [
              1200,
              1228
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 42
              },
              "start": {
                "column": 2,
                "line": 42
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1236,
                        1241
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 43
                        },
                        "start": {
                          "column": 7,
                          "line": 43
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1245,
                        1248
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 43
                        },
                        "start": {
                          "column": 16,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      1236,
                      1248
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 43
                      },
                      "start": {
                        "column": 7,
                        "line": 43
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1252,
                      1257
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 43
                      },
                      "start": {
                        "column": 23,
                        "line": 43
                      }
                    }
                  },
                  "range": [
                    1236,
                    1257
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 43
                    },
                    "start": {
                      "column": 7,
                      "line": 43
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1231,
                  1235
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 43
                  },
                  "start": {
                    "column": 2,
                    "line": 43
                  }
                }
              },
              "optional": false,
              "range": [
                1231,
                1258
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 43
                },
                "start": {
                  "column": 2,
                  "line": 43
                }
              }
            },
            "range": [
              1231,
              1259
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 43
              },
              "start": {
                "column": 2,
                "line": 43
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1267,
                        1272
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 44
                        },
                        "start": {
                          "column": 7,
                          "line": 44
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1276,
                        1279
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 44
                        },
                        "start": {
                          "column": 16,
                          "line": 44
                        }
                      }
                    },
                    "range": [
                      1267,
                      1279
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 44
                      },
                      "start": {
                        "column": 7,
                        "line": 44
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1283,
                      1288
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 44
                      },
                      "start": {
                        "column": 23,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    1267,
                    1288
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 44
                    },
                    "start": {
                      "column": 7,
                      "line": 44
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1262,
                  1266
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 44
                  },
                  "start": {
                    "column": 2,
                    "line": 44
                  }
                }
              },
              "optional": false,
              "range": [
                1262,
                1289
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 44
                },
                "start": {
                  "column": 2,
                  "line": 44
                }
              }
            },
            "range": [
              1262,
              1290
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 44
              },
              "start": {
                "column": 2,
                "line": 44
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1298,
                        1303
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 45
                        },
                        "start": {
                          "column": 7,
                          "line": 45
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1307,
                        1310
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 45
                        },
                        "start": {
                          "column": 16,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      1298,
                      1310
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 45
                      },
                      "start": {
                        "column": 7,
                        "line": 45
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1314,
                      1319
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 45
                      },
                      "start": {
                        "column": 23,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    1298,
                    1319
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 45
                    },
                    "start": {
                      "column": 7,
                      "line": 45
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1293,
                  1297
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 45
                  },
                  "start": {
                    "column": 2,
                    "line": 45
                  }
                }
              },
              "optional": false,
              "range": [
                1293,
                1320
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 45
                },
                "start": {
                  "column": 2,
                  "line": 45
                }
              }
            },
            "range": [
              1293,
              1321
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 45
              },
              "start": {
                "column": 2,
                "line": 45
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1329,
                        1334
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 46
                        },
                        "start": {
                          "column": 7,
                          "line": 46
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1338,
                        1341
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 46
                        },
                        "start": {
                          "column": 16,
                          "line": 46
                        }
                      }
                    },
                    "range": [
                      1329,
                      1341
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 46
                      },
                      "start": {
                        "column": 7,
                        "line": 46
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1345,
                      1350
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 46
                      },
                      "start": {
                        "column": 23,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    1329,
                    1350
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 46
                    },
                    "start": {
                      "column": 7,
                      "line": 46
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1324,
                  1328
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 46
                  },
                  "start": {
                    "column": 2,
                    "line": 46
                  }
                }
              },
              "optional": false,
              "range": [
                1324,
                1351
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 46
                },
                "start": {
                  "column": 2,
                  "line": 46
                }
              }
            },
            "range": [
              1324,
              1352
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 46
              },
              "start": {
                "column": 2,
                "line": 46
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1360,
                        1365
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 47
                        },
                        "start": {
                          "column": 7,
                          "line": 47
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1369,
                        1372
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 47
                        },
                        "start": {
                          "column": 16,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      1360,
                      1372
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 47
                      },
                      "start": {
                        "column": 7,
                        "line": 47
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1376,
                      1381
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 47
                      },
                      "start": {
                        "column": 23,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    1360,
                    1381
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 47
                    },
                    "start": {
                      "column": 7,
                      "line": 47
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1355,
                  1359
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 47
                  },
                  "start": {
                    "column": 2,
                    "line": 47
                  }
                }
              },
              "optional": false,
              "range": [
                1355,
                1382
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 47
                },
                "start": {
                  "column": 2,
                  "line": 47
                }
              }
            },
            "range": [
              1355,
              1383
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 47
              },
              "start": {
                "column": 2,
                "line": 47
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1391,
                        1396
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 48
                        },
                        "start": {
                          "column": 7,
                          "line": 48
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1400,
                        1403
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 48
                        },
                        "start": {
                          "column": 16,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      1391,
                      1403
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 48
                      },
                      "start": {
                        "column": 7,
                        "line": 48
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1407,
                      1412
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 48
                      },
                      "start": {
                        "column": 23,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    1391,
                    1412
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 48
                    },
                    "start": {
                      "column": 7,
                      "line": 48
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1386,
                  1390
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 48
                  },
                  "start": {
                    "column": 2,
                    "line": 48
                  }
                }
              },
              "optional": false,
              "range": [
                1386,
                1413
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 48
                },
                "start": {
                  "column": 2,
                  "line": 48
                }
              }
            },
            "range": [
              1386,
              1414
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 48
              },
              "start": {
                "column": 2,
                "line": 48
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1422,
                        1427
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 49
                        },
                        "start": {
                          "column": 7,
                          "line": 49
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1431,
                        1434
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 49
                        },
                        "start": {
                          "column": 16,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      1422,
                      1434
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 49
                      },
                      "start": {
                        "column": 7,
                        "line": 49
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1438,
                      1443
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 49
                      },
                      "start": {
                        "column": 23,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    1422,
                    1443
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 49
                    },
                    "start": {
                      "column": 7,
                      "line": 49
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1417,
                  1421
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 49
                  },
                  "start": {
                    "column": 2,
                    "line": 49
                  }
                }
              },
              "optional": false,
              "range": [
                1417,
                1444
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 49
                },
                "start": {
                  "column": 2,
                  "line": 49
                }
              }
            },
            "range": [
              1417,
              1445
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 49
              },
              "start": {
                "column": 2,
                "line": 49
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1453,
                        1458
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 50
                        },
                        "start": {
                          "column": 7,
                          "line": 50
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1462,
                        1465
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 50
                        },
                        "start": {
                          "column": 16,
                          "line": 50
                        }
                      }
                    },
                    "range": [
                      1453,
                      1465
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 50
                      },
                      "start": {
                        "column": 7,
                        "line": 50
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1469,
                      1474
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 50
                      },
                      "start": {
                        "column": 23,
                        "line": 50
                      }
                    }
                  },
                  "range": [
                    1453,
                    1474
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 50
                    },
                    "start": {
                      "column": 7,
                      "line": 50
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1448,
                  1452
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 50
                  },
                  "start": {
                    "column": 2,
                    "line": 50
                  }
                }
              },
              "optional": false,
              "range": [
                1448,
                1475
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 50
                },
                "start": {
                  "column": 2,
                  "line": 50
                }
              }
            },
            "range": [
              1448,
              1476
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 50
              },
              "start": {
                "column": 2,
                "line": 50
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1484,
                        1489
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 51
                        },
                        "start": {
                          "column": 7,
                          "line": 51
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1493,
                        1496
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 51
                        },
                        "start": {
                          "column": 16,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      1484,
                      1496
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 51
                      },
                      "start": {
                        "column": 7,
                        "line": 51
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1500,
                      1505
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 51
                      },
                      "start": {
                        "column": 23,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    1484,
                    1505
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 51
                    },
                    "start": {
                      "column": 7,
                      "line": 51
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1479,
                  1483
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 51
                  },
                  "start": {
                    "column": 2,
                    "line": 51
                  }
                }
              },
              "optional": false,
              "range": [
                1479,
                1506
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 51
                },
                "start": {
                  "column": 2,
                  "line": 51
                }
              }
            },
            "range": [
              1479,
              1507
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 51
              },
              "start": {
                "column": 2,
                "line": 51
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1515,
                        1520
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 52
                        },
                        "start": {
                          "column": 7,
                          "line": 52
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1524,
                        1527
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 52
                        },
                        "start": {
                          "column": 16,
                          "line": 52
                        }
                      }
                    },
                    "range": [
                      1515,
                      1527
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 52
                      },
                      "start": {
                        "column": 7,
                        "line": 52
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1531,
                      1536
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 52
                      },
                      "start": {
                        "column": 23,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    1515,
                    1536
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 52
                    },
                    "start": {
                      "column": 7,
                      "line": 52
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1510,
                  1514
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 52
                  },
                  "start": {
                    "column": 2,
                    "line": 52
                  }
                }
              },
              "optional": false,
              "range": [
                1510,
                1537
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 52
                },
                "start": {
                  "column": 2,
                  "line": 52
                }
              }
            },
            "range": [
              1510,
              1538
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 52
              },
              "start": {
                "column": 2,
                "line": 52
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1546,
                        1551
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 53
                        },
                        "start": {
                          "column": 7,
                          "line": 53
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1555,
                        1558
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 53
                        },
                        "start": {
                          "column": 16,
                          "line": 53
                        }
                      }
                    },
                    "range": [
                      1546,
                      1558
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 53
                      },
                      "start": {
                        "column": 7,
                        "line": 53
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1562,
                      1567
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 53
                      },
                      "start": {
                        "column": 23,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    1546,
                    1567
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 53
                    },
                    "start": {
                      "column": 7,
                      "line": 53
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1541,
                  1545
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 53
                  },
                  "start": {
                    "column": 2,
                    "line": 53
                  }
                }
              },
              "optional": false,
              "range": [
                1541,
                1568
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 53
                },
                "start": {
                  "column": 2,
                  "line": 53
                }
              }
            },
            "range": [
              1541,
              1569
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 53
              },
              "start": {
                "column": 2,
                "line": 53
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1577,
                        1582
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 54
                        },
                        "start": {
                          "column": 7,
                          "line": 54
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1586,
                        1589
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 54
                        },
                        "start": {
                          "column": 16,
                          "line": 54
                        }
                      }
                    },
                    "range": [
                      1577,
                      1589
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 54
                      },
                      "start": {
                        "column": 7,
                        "line": 54
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1593,
                      1598
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 54
                      },
                      "start": {
                        "column": 23,
                        "line": 54
                      }
                    }
                  },
                  "range": [
                    1577,
                    1598
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 54
                    },
                    "start": {
                      "column": 7,
                      "line": 54
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1572,
                  1576
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 54
                  },
                  "start": {
                    "column": 2,
                    "line": 54
                  }
                }
              },
              "optional": false,
              "range": [
                1572,
                1599
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 54
                },
                "start": {
                  "column": 2,
                  "line": 54
                }
              }
            },
            "range": [
              1572,
              1600
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 54
              },
              "start": {
                "column": 2,
                "line": 54
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1608,
                        1613
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 55
                        },
                        "start": {
                          "column": 7,
                          "line": 55
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1617,
                        1620
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 55
                        },
                        "start": {
                          "column": 16,
                          "line": 55
                        }
                      }
                    },
                    "range": [
                      1608,
                      1620
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 55
                      },
                      "start": {
                        "column": 7,
                        "line": 55
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1624,
                      1629
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 55
                      },
                      "start": {
                        "column": 23,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1608,
                    1629
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 55
                    },
                    "start": {
                      "column": 7,
                      "line": 55
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1603,
                  1607
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 55
                  },
                  "start": {
                    "column": 2,
                    "line": 55
                  }
                }
              },
              "optional": false,
              "range": [
                1603,
                1630
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 55
                },
                "start": {
                  "column": 2,
                  "line": 55
                }
              }
            },
            "range": [
              1603,
              1631
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 55
              },
              "start": {
                "column": 2,
                "line": 55
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1639,
                        1644
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 56
                        },
                        "start": {
                          "column": 7,
                          "line": 56
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1648,
                        1651
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 56
                        },
                        "start": {
                          "column": 16,
                          "line": 56
                        }
                      }
                    },
                    "range": [
                      1639,
                      1651
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 56
                      },
                      "start": {
                        "column": 7,
                        "line": 56
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1655,
                      1660
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 56
                      },
                      "start": {
                        "column": 23,
                        "line": 56
                      }
                    }
                  },
                  "range": [
                    1639,
                    1660
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 56
                    },
                    "start": {
                      "column": 7,
                      "line": 56
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1634,
                  1638
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 56
                  },
                  "start": {
                    "column": 2,
                    "line": 56
                  }
                }
              },
              "optional": false,
              "range": [
                1634,
                1661
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 56
                },
                "start": {
                  "column": 2,
                  "line": 56
                }
              }
            },
            "range": [
              1634,
              1662
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 56
              },
              "start": {
                "column": 2,
                "line": 56
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1670,
                        1675
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 57
                        },
                        "start": {
                          "column": 7,
                          "line": 57
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1679,
                        1682
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 57
                        },
                        "start": {
                          "column": 16,
                          "line": 57
                        }
                      }
                    },
                    "range": [
                      1670,
                      1682
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 57
                      },
                      "start": {
                        "column": 7,
                        "line": 57
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1686,
                      1691
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 57
                      },
                      "start": {
                        "column": 23,
                        "line": 57
                      }
                    }
                  },
                  "range": [
                    1670,
                    1691
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 57
                    },
                    "start": {
                      "column": 7,
                      "line": 57
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1665,
                  1669
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 57
                  },
                  "start": {
                    "column": 2,
                    "line": 57
                  }
                }
              },
              "optional": false,
              "range": [
                1665,
                1692
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 57
                },
                "start": {
                  "column": 2,
                  "line": 57
                }
              }
            },
            "range": [
              1665,
              1693
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 57
              },
              "start": {
                "column": 2,
                "line": 57
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1701,
                        1706
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 58
                        },
                        "start": {
                          "column": 7,
                          "line": 58
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1710,
                        1713
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 58
                        },
                        "start": {
                          "column": 16,
                          "line": 58
                        }
                      }
                    },
                    "range": [
                      1701,
                      1713
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 58
                      },
                      "start": {
                        "column": 7,
                        "line": 58
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1717,
                      1722
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 58
                      },
                      "start": {
                        "column": 23,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    1701,
                    1722
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 58
                    },
                    "start": {
                      "column": 7,
                      "line": 58
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1696,
                  1700
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 58
                  },
                  "start": {
                    "column": 2,
                    "line": 58
                  }
                }
              },
              "optional": false,
              "range": [
                1696,
                1723
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 58
                },
                "start": {
                  "column": 2,
                  "line": 58
                }
              }
            },
            "range": [
              1696,
              1724
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 58
              },
              "start": {
                "column": 2,
                "line": 58
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1732,
                        1737
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 59
                        },
                        "start": {
                          "column": 7,
                          "line": 59
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1741,
                        1744
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 59
                        },
                        "start": {
                          "column": 16,
                          "line": 59
                        }
                      }
                    },
                    "range": [
                      1732,
                      1744
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 59
                      },
                      "start": {
                        "column": 7,
                        "line": 59
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1748,
                      1753
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 59
                      },
                      "start": {
                        "column": 23,
                        "line": 59
                      }
                    }
                  },
                  "range": [
                    1732,
                    1753
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 59
                    },
                    "start": {
                      "column": 7,
                      "line": 59
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1727,
                  1731
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 59
                  },
                  "start": {
                    "column": 2,
                    "line": 59
                  }
                }
              },
              "optional": false,
              "range": [
                1727,
                1754
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 59
                },
                "start": {
                  "column": 2,
                  "line": 59
                }
              }
            },
            "range": [
              1727,
              1755
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 59
              },
              "start": {
                "column": 2,
                "line": 59
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1763,
                        1768
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 60
                        },
                        "start": {
                          "column": 7,
                          "line": 60
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1772,
                        1775
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 60
                        },
                        "start": {
                          "column": 16,
                          "line": 60
                        }
                      }
                    },
                    "range": [
                      1763,
                      1775
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 60
                      },
                      "start": {
                        "column": 7,
                        "line": 60
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1779,
                      1784
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 60
                      },
                      "start": {
                        "column": 23,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    1763,
                    1784
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 60
                    },
                    "start": {
                      "column": 7,
                      "line": 60
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1758,
                  1762
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 60
                  },
                  "start": {
                    "column": 2,
                    "line": 60
                  }
                }
              },
              "optional": false,
              "range": [
                1758,
                1785
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 60
                },
                "start": {
                  "column": 2,
                  "line": 60
                }
              }
            },
            "range": [
              1758,
              1786
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 60
              },
              "start": {
                "column": 2,
                "line": 60
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "range": [
                        1794,
                        1799
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 61
                        },
                        "start": {
                          "column": 7,
                          "line": 61
                        }
                      }
                    },
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "range": [
                        1803,
                        1806
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 61
                        },
                        "start": {
                          "column": 16,
                          "line": 61
                        }
                      }
                    },
                    "range": [
                      1794,
                      1806
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 61
                      },
                      "start": {
                        "column": 7,
                        "line": 61
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "range": [
                      1810,
                      1815
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 61
                      },
                      "start": {
                        "column": 23,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    1794,
                    1815
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 61
                    },
                    "start": {
                      "column": 7,
                      "line": 61
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "test",
                "optional": false,
                "range": [
                  1789,
                  1793
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 61
                  },
                  "start": {
                    "column": 2,
                    "line": 61
                  }
                }
              },
              "optional": false,
              "range": [
                1789,
                1816
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 61
                },
                "start": {
                  "column": 2,
                  "line": 61
                }
              }
            },
            "range": [
              1789,
              1817
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 61
              },
              "start": {
                "column": 2,
                "line": 61
              }
            }
          }
        ],
        "range": [
          80,
          1819
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 62
          },
          "start": {
            "column": 11,
            "line": 5
          }
        }
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "state",
        "optional": false,
        "range": [
          73,
          78
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 5
          },
          "start": {
            "column": 4,
            "line": 5
          }
        }
      },
      "range": [
        69,
        1819
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 62
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 63
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
