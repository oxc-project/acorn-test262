__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1320
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        0,
        11
      ],
      "loc": {
        "end": {
          "column": 11,
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
            "type": "ForStatement",
            "body": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "YieldExpression",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "range": [
                      88,
                      89
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
                    "raw": "2",
                    "value": 2,
                    "range": [
                      92,
                      93
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 4
                      },
                      "start": {
                        "column": 16,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    88,
                    93
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                "delegate": false,
                "range": [
                  82,
                  93
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 4
                  },
                  "start": {
                    "column": 6,
                    "line": 4
                  }
                }
              },
              "range": [
                82,
                94
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 4
                },
                "start": {
                  "column": 6,
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
                      57,
                      58
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 3
                      },
                      "start": {
                        "column": 13,
                        "line": 3
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      61,
                      62
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 3
                      },
                      "start": {
                        "column": 17,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    57,
                    62
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 3
                    },
                    "start": {
                      "column": 13,
                      "line": 3
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                53,
                62
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
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
                  64,
                  65
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "range": [
                  68,
                  69
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 3
                  },
                  "start": {
                    "column": 24,
                    "line": 3
                  }
                }
              },
              "range": [
                64,
                69
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
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
                  71,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 27,
                    "line": 3
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                71,
                74
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 27,
                  "line": 3
                }
              }
            },
            "range": [
              48,
              94
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          42,
          98
        ],
        "loc": {
          "end": {
            "column": 3,
            "line": 5
          },
          "start": {
            "column": 30,
            "line": 2
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "asyncGen",
        "optional": false,
        "range": [
          29,
          37
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 2
          },
          "start": {
            "column": 17,
            "line": 2
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "range": [
            39,
            40
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 2
            },
            "start": {
              "column": 27,
              "line": 2
            }
          }
        }
      ],
      "range": [
        12,
        98
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 5
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
            "type": "ForStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "i",
                            "optional": false,
                            "range": [
                              193,
                              194
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 9
                              },
                              "start": {
                                "column": 30,
                                "line": 9
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              197,
                              198
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 9
                              },
                              "start": {
                                "column": 34,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            193,
                            198
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 9
                            },
                            "start": {
                              "column": 30,
                              "line": 9
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
                          "name": "Promise",
                          "optional": false,
                          "range": [
                            177,
                            184
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 9
                            },
                            "start": {
                              "column": 14,
                              "line": 9
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "range": [
                            185,
                            192
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 9
                            },
                            "start": {
                              "column": 22,
                              "line": 9
                            }
                          }
                        },
                        "range": [
                          177,
                          192
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 9
                          },
                          "start": {
                            "column": 14,
                            "line": 9
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        177,
                        199
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 9
                        },
                        "start": {
                          "column": 14,
                          "line": 9
                        }
                      }
                    },
                    "delegate": false,
                    "range": [
                      171,
                      199
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    171,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
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
                161,
                206
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 10
                },
                "start": {
                  "column": 32,
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
                    "name": "i",
                    "optional": false,
                    "range": [
                      142,
                      143
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
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      146,
                      147
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 8
                      },
                      "start": {
                        "column": 17,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    142,
                    147
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 8
                    },
                    "start": {
                      "column": 13,
                      "line": 8
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                138,
                147
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 8
                },
                "start": {
                  "column": 9,
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
                "name": "i",
                "optional": false,
                "range": [
                  149,
                  150
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 8
                  },
                  "start": {
                    "column": 20,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "range": [
                  153,
                  154
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 8
                  },
                  "start": {
                    "column": 24,
                    "line": 8
                  }
                }
              },
              "range": [
                149,
                154
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 8
                },
                "start": {
                  "column": 20,
                  "line": 8
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
                  156,
                  157
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 8
                  },
                  "start": {
                    "column": 27,
                    "line": 8
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                156,
                159
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 8
                },
                "start": {
                  "column": 27,
                  "line": 8
                }
              }
            },
            "range": [
              133,
              206
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          }
        ],
        "range": [
          127,
          208
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 27,
            "line": 7
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "genPromises",
        "optional": false,
        "range": [
          111,
          122
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 7
          },
          "start": {
            "column": 11,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "range": [
            124,
            125
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 7
            },
            "start": {
              "column": 24,
              "line": 7
            }
          }
        }
      ],
      "range": [
        100,
        208
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 7
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
            "name": "arrLike",
            "optional": false,
            "range": [
              216,
              223
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
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
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    232,
                    233
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        251,
                        252
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 14
                        },
                        "start": {
                          "column": 23,
                          "line": 14
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
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        235,
                        242
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 14
                        },
                        "start": {
                          "column": 7,
                          "line": 14
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "range": [
                        243,
                        250
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 14
                        },
                        "start": {
                          "column": 15,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      235,
                      250
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 14
                      },
                      "start": {
                        "column": 7,
                        "line": 14
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    235,
                    253
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 14
                    },
                    "start": {
                      "column": 7,
                      "line": 14
                    }
                  }
                },
                "range": [
                  232,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Literal",
                  "raw": "1",
                  "value": 1,
                  "range": [
                    259,
                    260
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 15
                    },
                    "start": {
                      "column": 4,
                      "line": 15
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        278,
                        279
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 15
                        },
                        "start": {
                          "column": 23,
                          "line": 15
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
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        262,
                        269
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 15
                        },
                        "start": {
                          "column": 7,
                          "line": 15
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "range": [
                        270,
                        277
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 15
                        },
                        "start": {
                          "column": 15,
                          "line": 15
                        }
                      }
                    },
                    "range": [
                      262,
                      277
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 15
                      },
                      "start": {
                        "column": 7,
                        "line": 15
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    262,
                    280
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 15
                    },
                    "start": {
                      "column": 7,
                      "line": 15
                    }
                  }
                },
                "range": [
                  259,
                  280
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    286,
                    287
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
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        305,
                        306
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 16
                        },
                        "start": {
                          "column": 23,
                          "line": 16
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
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        289,
                        296
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 16
                        },
                        "start": {
                          "column": 7,
                          "line": 16
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "range": [
                        297,
                        304
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 16
                        },
                        "start": {
                          "column": 15,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      289,
                      304
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 16
                      },
                      "start": {
                        "column": 7,
                        "line": 16
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    289,
                    307
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 16
                    },
                    "start": {
                      "column": 7,
                      "line": 16
                    }
                  }
                },
                "range": [
                  286,
                  307
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    313,
                    314
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 17
                    },
                    "start": {
                      "column": 4,
                      "line": 17
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "6",
                      "value": 6,
                      "range": [
                        332,
                        333
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 17
                        },
                        "start": {
                          "column": 23,
                          "line": 17
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
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        316,
                        323
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 17
                        },
                        "start": {
                          "column": 7,
                          "line": 17
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "range": [
                        324,
                        331
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 17
                        },
                        "start": {
                          "column": 15,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      316,
                      331
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 17
                      },
                      "start": {
                        "column": 7,
                        "line": 17
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    316,
                    334
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 17
                    },
                    "start": {
                      "column": 7,
                      "line": 17
                    }
                  }
                },
                "range": [
                  313,
                  334
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 17
                  },
                  "start": {
                    "column": 4,
                    "line": 17
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "range": [
                    340,
                    346
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 18
                    },
                    "start": {
                      "column": 4,
                      "line": 18
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "raw": "4",
                  "value": 4,
                  "range": [
                    348,
                    349
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 18
                    },
                    "start": {
                      "column": 12,
                      "line": 18
                    }
                  }
                },
                "range": [
                  340,
                  349
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 18
                  },
                  "start": {
                    "column": 4,
                    "line": 18
                  }
                }
              }
            ],
            "range": [
              226,
              352
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 19
              },
              "start": {
                "column": 16,
                "line": 13
              }
            }
          },
          "range": [
            216,
            352
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 19
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        210,
        352
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 21
                },
                "start": {
                  "column": 10,
                  "line": 21
                }
              },
              "range": [
                364,
                374
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "range": [
                    366,
                    372
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 21
                    },
                    "start": {
                      "column": 12,
                      "line": 21
                    }
                  }
                },
                "range": [
                  366,
                  374
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 21
                  },
                  "start": {
                    "column": 12,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              360,
              374
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "range": [
              377,
              379
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 21
              },
              "start": {
                "column": 23,
                "line": 21
              }
            }
          },
          "range": [
            360,
            379
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        354,
        380
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    429,
                    430
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 23
                    },
                    "start": {
                      "column": 11,
                      "line": 23
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
                  "name": "arr",
                  "optional": false,
                  "range": [
                    420,
                    423
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 23
                    },
                    "start": {
                      "column": 2,
                      "line": 23
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "range": [
                    424,
                    428
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 23
                    },
                    "start": {
                      "column": 6,
                      "line": 23
                    }
                  }
                },
                "range": [
                  420,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 10,
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
                420,
                431
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 23
                },
                "start": {
                  "column": 2,
                  "line": 23
                }
              }
            },
            "range": [
              420,
              432
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 23
              },
              "start": {
                "column": 2,
                "line": 23
              }
            }
          }
        ],
        "range": [
          416,
          434
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 35,
            "line": 22
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
              "name": "v",
              "optional": false,
              "range": [
                398,
                399
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 22
                },
                "start": {
                  "column": 17,
                  "line": 22
                }
              }
            },
            "init": null,
            "range": [
              398,
              399
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 22
              },
              "start": {
                "column": 17,
                "line": 22
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          392,
          399
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 22
          },
          "start": {
            "column": 11,
            "line": 22
          }
        }
      },
      "right": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "4",
            "value": 4,
            "range": [
              412,
              413
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 22
              },
              "start": {
                "column": 31,
                "line": 22
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "asyncGen",
          "optional": false,
          "range": [
            403,
            411
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 22
            },
            "start": {
              "column": 22,
              "line": 22
            }
          }
        },
        "optional": false,
        "range": [
          403,
          414
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 22
          },
          "start": {
            "column": 22,
            "line": 22
          }
        }
      },
      "range": [
        381,
        434
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 22
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
            "name": "sameArr1",
            "optional": false,
            "range": [
              442,
              450
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 26
              },
              "start": {
                "column": 6,
                "line": 26
              }
            }
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arrLike",
                  "optional": false,
                  "range": [
                    475,
                    482
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 26
                    },
                    "start": {
                      "column": 39,
                      "line": 26
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
                  "name": "Array",
                  "optional": false,
                  "range": [
                    459,
                    464
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "range": [
                    465,
                    474
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 26
                    },
                    "start": {
                      "column": 29,
                      "line": 26
                    }
                  }
                },
                "range": [
                  459,
                  474
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 26
                  },
                  "start": {
                    "column": 23,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "range": [
                459,
                483
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 26
                },
                "start": {
                  "column": 23,
                  "line": 26
                }
              }
            },
            "range": [
              453,
              483
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 26
              },
              "start": {
                "column": 17,
                "line": 26
              }
            }
          },
          "range": [
            442,
            483
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 26
            },
            "start": {
              "column": 6,
              "line": 26
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        436,
        484
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "sameArr2",
            "optional": false,
            "range": [
              491,
              499
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 27
              },
              "start": {
                "column": 6,
                "line": 27
              }
            }
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            541,
                            542
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 27
                            },
                            "start": {
                              "column": 56,
                              "line": 27
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
                          "name": "Promise",
                          "optional": false,
                          "range": [
                            525,
                            532
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 27
                            },
                            "start": {
                              "column": 40,
                              "line": 27
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "range": [
                            533,
                            540
                          ],
                          "loc": {
                            "end": {
                              "column": 55,
                              "line": 27
                            },
                            "start": {
                              "column": 48,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          525,
                          540
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 27
                          },
                          "start": {
                            "column": 40,
                            "line": 27
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        525,
                        543
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 27
                        },
                        "start": {
                          "column": 40,
                          "line": 27
                        }
                      }
                    },
                    {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            561,
                            562
                          ],
                          "loc": {
                            "end": {
                              "column": 77,
                              "line": 27
                            },
                            "start": {
                              "column": 76,
                              "line": 27
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
                          "name": "Promise",
                          "optional": false,
                          "range": [
                            545,
                            552
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 27
                            },
                            "start": {
                              "column": 60,
                              "line": 27
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "range": [
                            553,
                            560
                          ],
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 27
                            },
                            "start": {
                              "column": 68,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          545,
                          560
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 27
                          },
                          "start": {
                            "column": 60,
                            "line": 27
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        545,
                        563
                      ],
                      "loc": {
                        "end": {
                          "column": 78,
                          "line": 27
                        },
                        "start": {
                          "column": 60,
                          "line": 27
                        }
                      }
                    },
                    {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "4",
                          "value": 4,
                          "range": [
                            581,
                            582
                          ],
                          "loc": {
                            "end": {
                              "column": 97,
                              "line": 27
                            },
                            "start": {
                              "column": 96,
                              "line": 27
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
                          "name": "Promise",
                          "optional": false,
                          "range": [
                            565,
                            572
                          ],
                          "loc": {
                            "end": {
                              "column": 87,
                              "line": 27
                            },
                            "start": {
                              "column": 80,
                              "line": 27
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "range": [
                            573,
                            580
                          ],
                          "loc": {
                            "end": {
                              "column": 95,
                              "line": 27
                            },
                            "start": {
                              "column": 88,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          565,
                          580
                        ],
                        "loc": {
                          "end": {
                            "column": 95,
                            "line": 27
                          },
                          "start": {
                            "column": 80,
                            "line": 27
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        565,
                        583
                      ],
                      "loc": {
                        "end": {
                          "column": 98,
                          "line": 27
                        },
                        "start": {
                          "column": 80,
                          "line": 27
                        }
                      }
                    },
                    {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "Literal",
                          "raw": "6",
                          "value": 6,
                          "range": [
                            601,
                            602
                          ],
                          "loc": {
                            "end": {
                              "column": 117,
                              "line": 27
                            },
                            "start": {
                              "column": 116,
                              "line": 27
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
                          "name": "Promise",
                          "optional": false,
                          "range": [
                            585,
                            592
                          ],
                          "loc": {
                            "end": {
                              "column": 107,
                              "line": 27
                            },
                            "start": {
                              "column": 100,
                              "line": 27
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "resolve",
                          "optional": false,
                          "range": [
                            593,
                            600
                          ],
                          "loc": {
                            "end": {
                              "column": 115,
                              "line": 27
                            },
                            "start": {
                              "column": 108,
                              "line": 27
                            }
                          }
                        },
                        "range": [
                          585,
                          600
                        ],
                        "loc": {
                          "end": {
                            "column": 115,
                            "line": 27
                          },
                          "start": {
                            "column": 100,
                            "line": 27
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        585,
                        603
                      ],
                      "loc": {
                        "end": {
                          "column": 118,
                          "line": 27
                        },
                        "start": {
                          "column": 100,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "range": [
                    524,
                    604
                  ],
                  "loc": {
                    "end": {
                      "column": 119,
                      "line": 27
                    },
                    "start": {
                      "column": 39,
                      "line": 27
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
                  "name": "Array",
                  "optional": false,
                  "range": [
                    508,
                    513
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "range": [
                    514,
                    523
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 27
                    },
                    "start": {
                      "column": 29,
                      "line": 27
                    }
                  }
                },
                "range": [
                  508,
                  523
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 27
                  },
                  "start": {
                    "column": 23,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "range": [
                508,
                605
              ],
              "loc": {
                "end": {
                  "column": 120,
                  "line": 27
                },
                "start": {
                  "column": 23,
                  "line": 27
                }
              }
            },
            "range": [
              502,
              605
            ],
            "loc": {
              "end": {
                "column": 120,
                "line": 27
              },
              "start": {
                "column": 17,
                "line": 27
              }
            }
          },
          "range": [
            491,
            605
          ],
          "loc": {
            "end": {
              "column": 120,
              "line": 27
            },
            "start": {
              "column": 6,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        485,
        606
      ],
      "loc": {
        "end": {
          "column": 121,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
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
            "name": "sameArr3",
            "optional": false,
            "range": [
              613,
              621
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 28
              },
              "start": {
                "column": 6,
                "line": 28
              }
            }
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        658,
                        659
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 28
                        },
                        "start": {
                          "column": 51,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "genPromises",
                    "optional": false,
                    "range": [
                      646,
                      657
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 28
                      },
                      "start": {
                        "column": 39,
                        "line": 28
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    646,
                    660
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 28
                    },
                    "start": {
                      "column": 39,
                      "line": 28
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
                  "name": "Array",
                  "optional": false,
                  "range": [
                    630,
                    635
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "range": [
                    636,
                    645
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 28
                    },
                    "start": {
                      "column": 29,
                      "line": 28
                    }
                  }
                },
                "range": [
                  630,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 28
                  },
                  "start": {
                    "column": 23,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "range": [
                630,
                661
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 28
                },
                "start": {
                  "column": 23,
                  "line": 28
                }
              }
            },
            "range": [
              624,
              661
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 28
              },
              "start": {
                "column": 17,
                "line": 28
              }
            }
          },
          "range": [
            613,
            661
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 28
            },
            "start": {
              "column": 6,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        607,
        662
      ],
      "loc": {
        "end": {
          "column": 55,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "sameArr4",
            "optional": false,
            "range": [
              669,
              677
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
              }
            }
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        711,
                        712
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 29
                        },
                        "start": {
                          "column": 48,
                          "line": 29
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncGen",
                    "optional": false,
                    "range": [
                      702,
                      710
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 29
                      },
                      "start": {
                        "column": 39,
                        "line": 29
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    702,
                    713
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 29
                    },
                    "start": {
                      "column": 39,
                      "line": 29
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
                  "name": "Array",
                  "optional": false,
                  "range": [
                    686,
                    691
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "range": [
                    692,
                    701
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 29
                    },
                    "start": {
                      "column": 29,
                      "line": 29
                    }
                  }
                },
                "range": [
                  686,
                  701
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 29
                  },
                  "start": {
                    "column": 23,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "range": [
                686,
                714
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 29
                },
                "start": {
                  "column": 23,
                  "line": 29
                }
              }
            },
            "range": [
              680,
              714
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 29
              },
              "start": {
                "column": 17,
                "line": 29
              }
            }
          },
          "range": [
            669,
            714
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        663,
        715
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          735,
          737
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 31
          },
          "start": {
            "column": 18,
            "line": 31
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Data",
        "optional": false,
        "range": [
          726,
          730
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 31
          },
          "start": {
            "column": 9,
            "line": 31
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "range": [
            732,
            733
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
        }
      ],
      "range": [
        717,
        737
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 31
        },
        "start": {
          "column": 0,
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
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Data",
            "optional": false,
            "range": [
              738,
              742
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 32
              },
              "start": {
                "column": 0,
                "line": 32
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromAsync",
            "optional": false,
            "range": [
              743,
              752
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 32
              },
              "start": {
                "column": 5,
                "line": 32
              }
            }
          },
          "range": [
            738,
            752
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 32
            },
            "start": {
              "column": 0,
              "line": 32
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "range": [
              755,
              760
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 32
              },
              "start": {
                "column": 17,
                "line": 32
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "fromAsync",
            "optional": false,
            "range": [
              761,
              770
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 32
              },
              "start": {
                "column": 23,
                "line": 32
              }
            }
          },
          "range": [
            755,
            770
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 32
            },
            "start": {
              "column": 17,
              "line": 32
            }
          }
        },
        "range": [
          738,
          770
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 32
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        738,
        771
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
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
            "name": "sameArr5",
            "optional": false,
            "range": [
              778,
              786
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 33
              },
              "start": {
                "column": 6,
                "line": 33
              }
            }
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        819,
                        820
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 33
                        },
                        "start": {
                          "column": 47,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncGen",
                    "optional": false,
                    "range": [
                      810,
                      818
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 33
                      },
                      "start": {
                        "column": 38,
                        "line": 33
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    810,
                    821
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 33
                    },
                    "start": {
                      "column": 38,
                      "line": 33
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
                  "name": "Data",
                  "optional": false,
                  "range": [
                    795,
                    799
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 33
                    },
                    "start": {
                      "column": 23,
                      "line": 33
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "range": [
                    800,
                    809
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 33
                    },
                    "start": {
                      "column": 28,
                      "line": 33
                    }
                  }
                },
                "range": [
                  795,
                  809
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 33
                  },
                  "start": {
                    "column": 23,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "range": [
                795,
                822
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 33
                },
                "start": {
                  "column": 23,
                  "line": 33
                }
              }
            },
            "range": [
              789,
              822
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 33
              },
              "start": {
                "column": 17,
                "line": 33
              }
            }
          },
          "range": [
            778,
            822
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 33
            },
            "start": {
              "column": 6,
              "line": 33
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        772,
        823
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
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
            "name": "mapArr1",
            "optional": false,
            "range": [
              831,
              838
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 35
              },
              "start": {
                "column": 6,
                "line": 35
              }
            }
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        872,
                        873
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 35
                        },
                        "start": {
                          "column": 47,
                          "line": 35
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncGen",
                    "optional": false,
                    "range": [
                      863,
                      871
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 35
                      },
                      "start": {
                        "column": 38,
                        "line": 35
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    863,
                    874
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 35
                    },
                    "start": {
                      "column": 38,
                      "line": 35
                    }
                  }
                },
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "operator": "**",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "range": [
                        881,
                        882
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 35
                        },
                        "start": {
                          "column": 56,
                          "line": 35
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        886,
                        887
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 35
                        },
                        "start": {
                          "column": 61,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      881,
                      887
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 35
                      },
                      "start": {
                        "column": 56,
                        "line": 35
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "range": [
                        876,
                        877
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 35
                        },
                        "start": {
                          "column": 51,
                          "line": 35
                        }
                      }
                    }
                  ],
                  "range": [
                    876,
                    887
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 35
                    },
                    "start": {
                      "column": 51,
                      "line": 35
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
                  "name": "Array",
                  "optional": false,
                  "range": [
                    847,
                    852
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 35
                    },
                    "start": {
                      "column": 22,
                      "line": 35
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "range": [
                    853,
                    862
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 35
                    },
                    "start": {
                      "column": 28,
                      "line": 35
                    }
                  }
                },
                "range": [
                  847,
                  862
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 35
                  },
                  "start": {
                    "column": 22,
                    "line": 35
                  }
                }
              },
              "optional": false,
              "range": [
                847,
                888
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 35
                },
                "start": {
                  "column": 22,
                  "line": 35
                }
              }
            },
            "range": [
              841,
              888
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 35
              },
              "start": {
                "column": 16,
                "line": 35
              }
            }
          },
          "range": [
            831,
            888
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 35
            },
            "start": {
              "column": 6,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        825,
        889
      ],
      "loc": {
        "end": {
          "column": 64,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
            "name": "mapArr2",
            "optional": false,
            "range": [
              896,
              903
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 36
              },
              "start": {
                "column": 6,
                "line": 36
              }
            }
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        929,
                        930
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 36
                        },
                        "start": {
                          "column": 39,
                          "line": 36
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        931,
                        932
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 36
                        },
                        "start": {
                          "column": 41,
                          "line": 36
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        933,
                        934
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 36
                        },
                        "start": {
                          "column": 43,
                          "line": 36
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "6",
                      "value": 6,
                      "range": [
                        935,
                        936
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 36
                        },
                        "start": {
                          "column": 45,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "range": [
                    928,
                    937
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 36
                    },
                    "start": {
                      "column": 38,
                      "line": 36
                    }
                  }
                },
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "**",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "range": [
                            960,
                            961
                          ],
                          "loc": {
                            "end": {
                              "column": 71,
                              "line": 36
                            },
                            "start": {
                              "column": 70,
                              "line": 36
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            965,
                            966
                          ],
                          "loc": {
                            "end": {
                              "column": 76,
                              "line": 36
                            },
                            "start": {
                              "column": 75,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          960,
                          966
                        ],
                        "loc": {
                          "end": {
                            "column": 76,
                            "line": 36
                          },
                          "start": {
                            "column": 70,
                            "line": 36
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
                        "name": "Promise",
                        "optional": false,
                        "range": [
                          944,
                          951
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 36
                          },
                          "start": {
                            "column": 54,
                            "line": 36
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "range": [
                          952,
                          959
                        ],
                        "loc": {
                          "end": {
                            "column": 69,
                            "line": 36
                          },
                          "start": {
                            "column": 62,
                            "line": 36
                          }
                        }
                      },
                      "range": [
                        944,
                        959
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 36
                        },
                        "start": {
                          "column": 54,
                          "line": 36
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      944,
                      967
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 36
                      },
                      "start": {
                        "column": 54,
                        "line": 36
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "range": [
                        939,
                        940
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 36
                        },
                        "start": {
                          "column": 49,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "range": [
                    939,
                    967
                  ],
                  "loc": {
                    "end": {
                      "column": 77,
                      "line": 36
                    },
                    "start": {
                      "column": 49,
                      "line": 36
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
                  "name": "Array",
                  "optional": false,
                  "range": [
                    912,
                    917
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 36
                    },
                    "start": {
                      "column": 22,
                      "line": 36
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "range": [
                    918,
                    927
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 36
                    },
                    "start": {
                      "column": 28,
                      "line": 36
                    }
                  }
                },
                "range": [
                  912,
                  927
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 36
                  },
                  "start": {
                    "column": 22,
                    "line": 36
                  }
                }
              },
              "optional": false,
              "range": [
                912,
                968
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 36
                },
                "start": {
                  "column": 22,
                  "line": 36
                }
              }
            },
            "range": [
              906,
              968
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 36
              },
              "start": {
                "column": 16,
                "line": 36
              }
            }
          },
          "range": [
            896,
            968
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 36
            },
            "start": {
              "column": 6,
              "line": 36
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        890,
        969
      ],
      "loc": {
        "end": {
          "column": 79,
          "line": 36
        },
        "start": {
          "column": 0,
          "line": 36
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
            "name": "mapArr3",
            "optional": false,
            "range": [
              976,
              983
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 37
              },
              "start": {
                "column": 6,
                "line": 37
              }
            }
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        1009,
                        1010
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 37
                        },
                        "start": {
                          "column": 39,
                          "line": 37
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        1011,
                        1012
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 37
                        },
                        "start": {
                          "column": 41,
                          "line": 37
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "4",
                      "value": 4,
                      "range": [
                        1013,
                        1014
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 37
                        },
                        "start": {
                          "column": 43,
                          "line": 37
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "6",
                      "value": 6,
                      "range": [
                        1015,
                        1016
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 37
                        },
                        "start": {
                          "column": 45,
                          "line": 37
                        }
                      }
                    }
                  ],
                  "range": [
                    1008,
                    1017
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 37
                    },
                    "start": {
                      "column": 38,
                      "line": 37
                    }
                  }
                },
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "operator": "**",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "range": [
                        1024,
                        1025
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 37
                        },
                        "start": {
                          "column": 54,
                          "line": 37
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "2",
                      "value": 2,
                      "range": [
                        1029,
                        1030
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 37
                        },
                        "start": {
                          "column": 59,
                          "line": 37
                        }
                      }
                    },
                    "range": [
                      1024,
                      1030
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 37
                      },
                      "start": {
                        "column": 54,
                        "line": 37
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "range": [
                        1019,
                        1020
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 37
                        },
                        "start": {
                          "column": 49,
                          "line": 37
                        }
                      }
                    }
                  ],
                  "range": [
                    1019,
                    1030
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 37
                    },
                    "start": {
                      "column": 49,
                      "line": 37
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
                  "name": "Array",
                  "optional": false,
                  "range": [
                    992,
                    997
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 37
                    },
                    "start": {
                      "column": 22,
                      "line": 37
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "range": [
                    998,
                    1007
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 37
                    },
                    "start": {
                      "column": 28,
                      "line": 37
                    }
                  }
                },
                "range": [
                  992,
                  1007
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 37
                  },
                  "start": {
                    "column": 22,
                    "line": 37
                  }
                }
              },
              "optional": false,
              "range": [
                992,
                1031
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 37
                },
                "start": {
                  "column": 22,
                  "line": 37
                }
              }
            },
            "range": [
              986,
              1031
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 37
              },
              "start": {
                "column": 16,
                "line": 37
              }
            }
          },
          "range": [
            976,
            1031
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 37
            },
            "start": {
              "column": 6,
              "line": 37
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        970,
        1032
      ],
      "loc": {
        "end": {
          "column": 62,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
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
            "name": "err",
            "optional": false,
            "range": [
              1040,
              1043
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 39
              },
              "start": {
                "column": 6,
                "line": 39
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Error",
              "optional": false,
              "range": [
                1050,
                1055
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 39
                },
                "start": {
                  "column": 16,
                  "line": 39
                }
              }
            },
            "range": [
              1046,
              1055
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 39
              },
              "start": {
                "column": 12,
                "line": 39
              }
            }
          },
          "range": [
            1040,
            1055
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 39
            },
            "start": {
              "column": 6,
              "line": 39
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1034,
        1056
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
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
            "name": "badIterable",
            "optional": false,
            "range": [
              1063,
              1074
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 40
              },
              "start": {
                "column": 6,
                "line": 40
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      1080,
                      1086
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 40
                      },
                      "start": {
                        "column": 23,
                        "line": 40
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "range": [
                      1087,
                      1095
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 40
                      },
                      "start": {
                        "column": 30,
                        "line": 40
                      }
                    }
                  },
                  "range": [
                    1080,
                    1095
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 40
                    },
                    "start": {
                      "column": 23,
                      "line": 40
                    }
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1097,
                    1114
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "range": [
                            1108,
                            1111
                          ],
                          "loc": {
                            "end": {
                              "column": 54,
                              "line": 40
                            },
                            "start": {
                              "column": 51,
                              "line": 40
                            }
                          }
                        },
                        "range": [
                          1102,
                          1112
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 40
                          },
                          "start": {
                            "column": 45,
                            "line": 40
                          }
                        }
                      }
                    ],
                    "range": [
                      1100,
                      1114
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 40
                      },
                      "start": {
                        "column": 43,
                        "line": 40
                      }
                    }
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 40
                    },
                    "start": {
                      "column": 40,
                      "line": 40
                    }
                  }
                },
                "range": [
                  1079,
                  1114
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 40
                  },
                  "start": {
                    "column": 22,
                    "line": 40
                  }
                }
              }
            ],
            "range": [
              1077,
              1116
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 40
              },
              "start": {
                "column": 20,
                "line": 40
              }
            }
          },
          "range": [
            1063,
            1116
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 40
            },
            "start": {
              "column": 6,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1057,
        1117
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
            "name": "badArray",
            "optional": false,
            "range": [
              1179,
              1187
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 42
              },
              "start": {
                "column": 6,
                "line": 42
              }
            }
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "badIterable",
                  "optional": false,
                  "range": [
                    1212,
                    1223
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 42
                    },
                    "start": {
                      "column": 39,
                      "line": 42
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
                  "name": "Array",
                  "optional": false,
                  "range": [
                    1196,
                    1201
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
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "range": [
                    1202,
                    1211
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 42
                    },
                    "start": {
                      "column": 29,
                      "line": 42
                    }
                  }
                },
                "range": [
                  1196,
                  1211
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 42
                  },
                  "start": {
                    "column": 23,
                    "line": 42
                  }
                }
              },
              "optional": false,
              "range": [
                1196,
                1224
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 42
                },
                "start": {
                  "column": 23,
                  "line": 42
                }
              }
            },
            "range": [
              1190,
              1224
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 42
              },
              "start": {
                "column": 17,
                "line": 42
              }
            }
          },
          "range": [
            1179,
            1224
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 42
            },
            "start": {
              "column": 6,
              "line": 42
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1173,
        1225
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
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
            "name": "withIndexResult",
            "optional": false,
            "range": [
              1233,
              1248
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 44
              },
              "start": {
                "column": 6,
                "line": 44
              }
            }
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "\"a\"",
                      "value": "a",
                      "range": [
                        1274,
                        1277
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 44
                        },
                        "start": {
                          "column": 47,
                          "line": 44
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"b\"",
                      "value": "b",
                      "range": [
                        1279,
                        1282
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 44
                        },
                        "start": {
                          "column": 52,
                          "line": 44
                        }
                      }
                    }
                  ],
                  "range": [
                    1273,
                    1283
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 44
                    },
                    "start": {
                      "column": 46,
                      "line": 44
                    }
                  }
                },
                {
                  "type": "ArrowFunctionExpression",
                  "async": false,
                  "body": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "range": [
                            1304,
                            1309
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 44
                            },
                            "start": {
                              "column": 77,
                              "line": 44
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "range": [
                            1304,
                            1309
                          ],
                          "loc": {
                            "end": {
                              "column": 82,
                              "line": 44
                            },
                            "start": {
                              "column": 77,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          1304,
                          1309
                        ],
                        "loc": {
                          "end": {
                            "column": 82,
                            "line": 44
                          },
                          "start": {
                            "column": 77,
                            "line": 44
                          }
                        }
                      },
                      {
                        "type": "Property",
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "range": [
                            1311,
                            1314
                          ],
                          "loc": {
                            "end": {
                              "column": 87,
                              "line": 44
                            },
                            "start": {
                              "column": 84,
                              "line": 44
                            }
                          }
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "str",
                          "optional": false,
                          "range": [
                            1311,
                            1314
                          ],
                          "loc": {
                            "end": {
                              "column": 87,
                              "line": 44
                            },
                            "start": {
                              "column": 84,
                              "line": 44
                            }
                          }
                        },
                        "range": [
                          1311,
                          1314
                        ],
                        "loc": {
                          "end": {
                            "column": 87,
                            "line": 44
                          },
                          "start": {
                            "column": 84,
                            "line": 44
                          }
                        }
                      }
                    ],
                    "range": [
                      1302,
                      1316
                    ],
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 44
                      },
                      "start": {
                        "column": 75,
                        "line": 44
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "range": [
                        1286,
                        1289
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 44
                        },
                        "start": {
                          "column": 59,
                          "line": 44
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "range": [
                        1291,
                        1296
                      ],
                      "loc": {
                        "end": {
                          "column": 69,
                          "line": 44
                        },
                        "start": {
                          "column": 64,
                          "line": 44
                        }
                      }
                    }
                  ],
                  "range": [
                    1285,
                    1317
                  ],
                  "loc": {
                    "end": {
                      "column": 90,
                      "line": 44
                    },
                    "start": {
                      "column": 58,
                      "line": 44
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
                  "name": "Array",
                  "optional": false,
                  "range": [
                    1257,
                    1262
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 44
                    },
                    "start": {
                      "column": 30,
                      "line": 44
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fromAsync",
                  "optional": false,
                  "range": [
                    1263,
                    1272
                  ],
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 44
                    },
                    "start": {
                      "column": 36,
                      "line": 44
                    }
                  }
                },
                "range": [
                  1257,
                  1272
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 44
                  },
                  "start": {
                    "column": 30,
                    "line": 44
                  }
                }
              },
              "optional": false,
              "range": [
                1257,
                1318
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 44
                },
                "start": {
                  "column": 30,
                  "line": 44
                }
              }
            },
            "range": [
              1251,
              1318
            ],
            "loc": {
              "end": {
                "column": 91,
                "line": 44
              },
              "start": {
                "column": 24,
                "line": 44
              }
            }
          },
          "range": [
            1233,
            1318
          ],
          "loc": {
            "end": {
              "column": 91,
              "line": 44
            },
            "start": {
              "column": 6,
              "line": 44
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1227,
        1319
      ],
      "loc": {
        "end": {
          "column": 92,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 45
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
