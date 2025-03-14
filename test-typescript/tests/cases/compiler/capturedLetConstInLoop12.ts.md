__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    230
  ],
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "directive": "use strict",
                "expression": {
                  "type": "Literal",
                  "raw": "\"use strict\"",
                  "value": "use strict",
                  "range": [
                    18,
                    30
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
                "range": [
                  18,
                  31
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 2
                  },
                  "start": {
                    "column": 4,
                    "line": 2
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
                        "arguments": [],
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "ArrayPattern",
                              "decorators": [],
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "i",
                                  "optional": false,
                                  "range": [
                                    83,
                                    84
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 5
                                    }
                                  }
                                }
                              ],
                              "optional": false,
                              "range": [
                                82,
                                85
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 5
                                },
                                "start": {
                                  "column": 15,
                                  "line": 5
                                }
                              }
                            },
                            "right": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
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
                                        "column": 23,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "raw": "1",
                                    "value": 1,
                                    "range": [
                                      93,
                                      94
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 5
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 5
                                      }
                                    }
                                  },
                                  "range": [
                                    89,
                                    94
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 5
                                    }
                                  }
                                }
                              ],
                              "range": [
                                88,
                                95
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 5
                                },
                                "start": {
                                  "column": 21,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              82,
                              95
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 5
                              },
                              "start": {
                                "column": 15,
                                "line": 5
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            76,
                            95
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 5
                            },
                            "start": {
                              "column": 9,
                              "line": 5
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          75,
                          98
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "range": [
                        75,
                        99
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
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
                    65,
                    105
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 6
                    },
                    "start": {
                      "column": 32,
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
                          46,
                          47
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
                          50,
                          51
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
                        46,
                        51
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
                  "kind": "let",
                  "range": [
                    42,
                    51
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
                      53,
                      54
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
                    "raw": "4",
                    "value": 4,
                    "range": [
                      57,
                      58
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
                  "range": [
                    53,
                    58
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
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
                      60,
                      61
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
                  "operator": "++",
                  "prefix": false,
                  "range": [
                    60,
                    63
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 4
                    },
                    "start": {
                      "column": 27,
                      "line": 4
                    }
                  }
                },
                "range": [
                  37,
                  105
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
              12,
              107
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            1,
            107
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 7
            },
            "start": {
              "column": 1,
              "line": 1
            }
          }
        },
        "optional": false,
        "range": [
          0,
          110
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 7
          },
          "start": {
            "column": 0,
            "line": 1
          }
        }
      },
      "range": [
        0,
        111
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "directive": "use strict",
                "expression": {
                  "type": "Literal",
                  "raw": "\"use strict\"",
                  "value": "use strict",
                  "range": [
                    131,
                    143
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                },
                "range": [
                  131,
                  144
                ],
                "loc": {
                  "end": {
                    "column": 17,
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
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
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
                                      197,
                                      198
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 18,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 13
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
                                    "name": "i",
                                    "optional": false,
                                    "range": [
                                      199,
                                      200
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "range": [
                                    197,
                                    200
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 13
                                    }
                                  }
                                }
                              ],
                              "range": [
                                196,
                                201
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 13
                                },
                                "start": {
                                  "column": 16,
                                  "line": 13
                                }
                              }
                            },
                            "right": {
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
                                      205,
                                      206
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 26,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 25,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "i",
                                      "optional": false,
                                      "range": [
                                        207,
                                        208
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 27,
                                          "line": 13
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "raw": "1",
                                      "value": 1,
                                      "range": [
                                        211,
                                        212
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 13
                                        }
                                      }
                                    },
                                    "range": [
                                      207,
                                      212
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 32,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 27,
                                        "line": 13
                                      }
                                    }
                                  },
                                  "range": [
                                    205,
                                    212
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 25,
                                      "line": 13
                                    }
                                  }
                                }
                              ],
                              "range": [
                                204,
                                213
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 13
                                },
                                "start": {
                                  "column": 24,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              196,
                              213
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 13
                              },
                              "start": {
                                "column": 16,
                                "line": 13
                              }
                            }
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            189,
                            214
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 13
                            },
                            "start": {
                              "column": 9,
                              "line": 13
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          188,
                          217
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        188,
                        218
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "range": [
                    178,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 14
                    },
                    "start": {
                      "column": 32,
                      "line": 12
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
                          159,
                          160
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 12
                          },
                          "start": {
                            "column": 13,
                            "line": 12
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "0",
                        "value": 0,
                        "range": [
                          163,
                          164
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 12
                          },
                          "start": {
                            "column": 17,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        159,
                        164
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 12
                        },
                        "start": {
                          "column": 13,
                          "line": 12
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    155,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 12
                    },
                    "start": {
                      "column": 9,
                      "line": 12
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
                      166,
                      167
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 12
                      },
                      "start": {
                        "column": 20,
                        "line": 12
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "4",
                    "value": 4,
                    "range": [
                      170,
                      171
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 12
                      },
                      "start": {
                        "column": 24,
                        "line": 12
                      }
                    }
                  },
                  "range": [
                    166,
                    171
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 12
                    },
                    "start": {
                      "column": 20,
                      "line": 12
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
                      173,
                      174
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 12
                      },
                      "start": {
                        "column": 27,
                        "line": 12
                      }
                    }
                  },
                  "operator": "++",
                  "prefix": false,
                  "range": [
                    173,
                    176
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 12
                    },
                    "start": {
                      "column": 27,
                      "line": 12
                    }
                  }
                },
                "range": [
                  150,
                  224
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              125,
              226
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 15
              },
              "start": {
                "column": 12,
                "line": 9
              }
            }
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            114,
            226
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 15
            },
            "start": {
              "column": 1,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          113,
          229
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 15
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        113,
        230
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 5,
      "line": 15
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
