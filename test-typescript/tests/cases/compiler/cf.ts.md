__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    844
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
                  "name": "z",
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
                  "raw": "10",
                  "value": 10,
                  "range": [
                    36,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                },
                "range": [
                  34,
                  38
                ],
                "loc": {
                  "end": {
                    "column": 12,
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
              39
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
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
                  "name": "y",
                  "optional": false,
                  "range": [
                    48,
                    49
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
                "init": {
                  "type": "Literal",
                  "raw": "3",
                  "value": 3,
                  "range": [
                    50,
                    51
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                },
                "range": [
                  48,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              44,
              52
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          {
            "type": "LabeledStatement",
            "body": {
              "type": "ForStatement",
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
                          "type": "ContinueStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "L1",
                            "optional": false,
                            "range": [
                              128,
                              130
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 8
                              },
                              "start": {
                                "column": 21,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            119,
                            131
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
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
                                144,
                                145
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
                            "right": {
                              "type": "Literal",
                              "raw": "11",
                              "value": 11,
                              "range": [
                                146,
                                148
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 9
                                },
                                "start": {
                                  "column": 14,
                                  "line": 9
                                }
                              }
                            },
                            "range": [
                              144,
                              148
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 9
                              },
                              "start": {
                                "column": 12,
                                "line": 9
                              }
                            }
                          },
                          "range": [
                            144,
                            149
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 9
                            },
                            "start": {
                              "column": 12,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        105,
                        159
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 10
                        },
                        "start": {
                          "column": 18,
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
                          99,
                          100
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
                        "raw": "7",
                        "value": 7,
                        "range": [
                          102,
                          103
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
                      "range": [
                        99,
                        103
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      95,
                      159
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 7
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
                            "type": "UpdateExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                234,
                                235
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
                            "operator": "--",
                            "prefix": false,
                            "range": [
                              234,
                              237
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 15
                              },
                              "start": {
                                "column": 12,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            234,
                            238
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 15
                            },
                            "start": {
                              "column": 12,
                              "line": 15
                            }
                          }
                        }
                      ],
                      "range": [
                        220,
                        248
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 16
                        },
                        "start": {
                          "column": 13,
                          "line": 14
                        }
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "UpdateExpression",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                192,
                                193
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
                            "operator": "++",
                            "prefix": false,
                            "range": [
                              192,
                              195
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 12
                              },
                              "start": {
                                "column": 12,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            192,
                            196
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 12
                            },
                            "start": {
                              "column": 12,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "range": [
                        178,
                        206
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 13
                        },
                        "start": {
                          "column": 18,
                          "line": 11
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
                          172,
                          173
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 11
                          },
                          "start": {
                            "column": 12,
                            "line": 11
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          175,
                          176
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 11
                          },
                          "start": {
                            "column": 15,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        172,
                        176
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 11
                        },
                        "start": {
                          "column": 12,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      168,
                      248
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 16
                      },
                      "start": {
                        "column": 8,
                        "line": 11
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
                            "type": "AssignmentExpression",
                            "operator": "+=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                274,
                                275
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
                            "right": {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                277,
                                278
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 18
                                },
                                "start": {
                                  "column": 15,
                                  "line": 18
                                }
                              }
                            },
                            "range": [
                              274,
                              278
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 18
                              },
                              "start": {
                                "column": 12,
                                "line": 18
                              }
                            }
                          },
                          "range": [
                            274,
                            279
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 18
                            },
                            "start": {
                              "column": 12,
                              "line": 18
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
                                "type": "BreakStatement",
                                "label": null,
                                "range": [
                                  321,
                                  327
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 20
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 20
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
                                      344,
                                      345
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 17,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 21
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "raw": "12",
                                    "value": 12,
                                    "range": [
                                      346,
                                      348
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 21
                                      },
                                      "start": {
                                        "column": 18,
                                        "line": 21
                                      }
                                    }
                                  },
                                  "range": [
                                    344,
                                    348
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 20,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 21
                                    }
                                  }
                                },
                                "range": [
                                  344,
                                  349
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 21
                                  }
                                }
                              }
                            ],
                            "range": [
                              303,
                              363
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 22
                              },
                              "start": {
                                "column": 23,
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
                                296,
                                297
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
                            "right": {
                              "type": "Literal",
                              "raw": "20",
                              "value": 20,
                              "range": [
                                299,
                                301
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 19
                                },
                                "start": {
                                  "column": 19,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              296,
                              301
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 19
                              },
                              "start": {
                                "column": 16,
                                "line": 19
                              }
                            }
                          },
                          "range": [
                            292,
                            363
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 22
                            },
                            "start": {
                              "column": 12,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "range": [
                        260,
                        373
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 23
                        },
                        "start": {
                          "column": 11,
                          "line": 17
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          381,
                          382
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 23
                          },
                          "start": {
                            "column": 17,
                            "line": 23
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "41",
                        "value": 41,
                        "range": [
                          383,
                          385
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 23
                          },
                          "start": {
                            "column": 19,
                            "line": 23
                          }
                        }
                      },
                      "range": [
                        381,
                        385
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 23
                        },
                        "start": {
                          "column": 17,
                          "line": 23
                        }
                      }
                    },
                    "range": [
                      257,
                      387
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 23
                      },
                      "start": {
                        "column": 8,
                        "line": 17
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
                        "name": "y",
                        "optional": false,
                        "range": [
                          396,
                          397
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 24
                          },
                          "start": {
                            "column": 8,
                            "line": 24
                          }
                        }
                      },
                      "operator": "++",
                      "prefix": false,
                      "range": [
                        396,
                        399
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
                    "range": [
                      396,
                      400
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  }
                ],
                "range": [
                  85,
                  406
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 25
                  },
                  "start": {
                    "column": 31,
                    "line": 6
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
                        71,
                        72
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
                    "init": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        73,
                        74
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 6
                        },
                        "start": {
                          "column": 19,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      71,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 6
                      },
                      "start": {
                        "column": 17,
                        "line": 6
                      }
                    }
                  }
                ],
                "declare": false,
                "kind": "var",
                "range": [
                  67,
                  74
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 6
                  },
                  "start": {
                    "column": 13,
                    "line": 6
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
                    75,
                    76
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 6
                    },
                    "start": {
                      "column": 21,
                      "line": 6
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "19",
                  "value": 19,
                  "range": [
                    77,
                    79
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 6
                    },
                    "start": {
                      "column": 23,
                      "line": 6
                    }
                  }
                },
                "range": [
                  75,
                  79
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 6
                  },
                  "start": {
                    "column": 21,
                    "line": 6
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
                    80,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 6
                    },
                    "start": {
                      "column": 26,
                      "line": 6
                    }
                  }
                },
                "operator": "++",
                "prefix": false,
                "range": [
                  80,
                  83
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 6
                  },
                  "start": {
                    "column": 26,
                    "line": 6
                  }
                }
              },
              "range": [
                62,
                406
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 8,
                  "line": 6
                }
              }
            },
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "L1",
              "optional": false,
              "range": [
                58,
                60
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 6
                },
                "start": {
                  "column": 4,
                  "line": 6
                }
              }
            },
            "range": [
              58,
              406
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 6
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
                      "name": "y",
                      "optional": false,
                      "range": [
                        433,
                        434
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 27
                        },
                        "start": {
                          "column": 8,
                          "line": 27
                        }
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": ">>",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          435,
                          436
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 27
                          },
                          "start": {
                            "column": 10,
                            "line": 27
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          438,
                          439
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 27
                          },
                          "start": {
                            "column": 13,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        435,
                        439
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 27
                        },
                        "start": {
                          "column": 10,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      433,
                      439
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    433,
                    440
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                }
              ],
              "range": [
                423,
                446
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 28
                },
                "start": {
                  "column": 16,
                  "line": 26
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": ">",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  418,
                  419
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 26
                  },
                  "start": {
                    "column": 11,
                    "line": 26
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  420,
                  421
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 26
                  },
                  "start": {
                    "column": 13,
                    "line": 26
                  }
                }
              },
              "range": [
                418,
                421
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 26
                },
                "start": {
                  "column": 11,
                  "line": 26
                }
              }
            },
            "range": [
              411,
              446
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          },
          {
            "type": "LabeledStatement",
            "body": {
              "type": "TryStatement",
              "block": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "LabeledStatement",
                    "body": {
                      "type": "IfStatement",
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "BreakStatement",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "L3",
                              "optional": false,
                              "range": [
                                567,
                                569
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 35
                                },
                                "start": {
                                  "column": 18,
                                  "line": 35
                                }
                              }
                            },
                            "range": [
                              561,
                              570
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 35
                              },
                              "start": {
                                "column": 12,
                                "line": 35
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
                                  583,
                                  584
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 36
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "14",
                                "value": 14,
                                "range": [
                                  585,
                                  587
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 36
                                  }
                                }
                              },
                              "range": [
                                583,
                                587
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 36
                                },
                                "start": {
                                  "column": 12,
                                  "line": 36
                                }
                              }
                            },
                            "range": [
                              583,
                              588
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 36
                              },
                              "start": {
                                "column": 12,
                                "line": 36
                              }
                            }
                          }
                        ],
                        "range": [
                          547,
                          598
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 37
                          },
                          "start": {
                            "column": 13,
                            "line": 34
                          }
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "BreakStatement",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "L2",
                              "optional": false,
                              "range": [
                                502,
                                504
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
                            "range": [
                              496,
                              505
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 31
                              },
                              "start": {
                                "column": 12,
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
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  518,
                                  519
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
                                "raw": "13",
                                "value": 13,
                                "range": [
                                  520,
                                  522
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 32
                                  },
                                  "start": {
                                    "column": 14,
                                    "line": 32
                                  }
                                }
                              },
                              "range": [
                                518,
                                522
                              ],
                              "loc": {
                                "end": {
                                  "column": 16,
                                  "line": 32
                                },
                                "start": {
                                  "column": 12,
                                  "line": 32
                                }
                              }
                            },
                            "range": [
                              518,
                              523
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
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
                          482,
                          533
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 33
                          },
                          "start": {
                            "column": 21,
                            "line": 30
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
                            477,
                            478
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
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            479,
                            480
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 30
                            },
                            "start": {
                              "column": 18,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          477,
                          480
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
                        473,
                        598
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 37
                        },
                        "start": {
                          "column": 12,
                          "line": 30
                        }
                      }
                    },
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "L3",
                      "optional": false,
                      "range": [
                        469,
                        471
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
                      469,
                      598
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 37
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  }
                ],
                "range": [
                  459,
                  604
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 38
                  },
                  "start": {
                    "column": 12,
                    "line": 29
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
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          662,
                          663
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 43
                          },
                          "start": {
                            "column": 8,
                            "line": 43
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "3",
                        "value": 3,
                        "range": [
                          665,
                          666
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 43
                          },
                          "start": {
                            "column": 11,
                            "line": 43
                          }
                        }
                      },
                      "range": [
                        662,
                        666
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 43
                        },
                        "start": {
                          "column": 8,
                          "line": 43
                        }
                      }
                    },
                    "range": [
                      662,
                      667
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 43
                      },
                      "start": {
                        "column": 8,
                        "line": 43
                      }
                    }
                  }
                ],
                "range": [
                  652,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 44
                  },
                  "start": {
                    "column": 12,
                    "line": 42
                  }
                }
              },
              "handler": {
                "type": "CatchClause",
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
                            629,
                            630
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
                        "operator": "++",
                        "prefix": false,
                        "range": [
                          629,
                          632
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 40
                          },
                          "start": {
                            "column": 8,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        629,
                        633
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 40
                        },
                        "start": {
                          "column": 8,
                          "line": 40
                        }
                      }
                    }
                  ],
                  "range": [
                    619,
                    639
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 41
                    },
                    "start": {
                      "column": 14,
                      "line": 39
                    }
                  }
                },
                "param": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "range": [
                    616,
                    617
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 39
                    },
                    "start": {
                      "column": 11,
                      "line": 39
                    }
                  }
                },
                "range": [
                  609,
                  639
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 41
                  },
                  "start": {
                    "column": 4,
                    "line": 39
                  }
                }
              },
              "range": [
                455,
                673
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 44
                },
                "start": {
                  "column": 8,
                  "line": 29
                }
              }
            },
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "L2",
              "optional": false,
              "range": [
                451,
                453
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 29
                },
                "start": {
                  "column": 4,
                  "line": 29
                }
              }
            },
            "range": [
              451,
              673
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 44
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
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  678,
                  679
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 45
                  },
                  "start": {
                    "column": 4,
                    "line": 45
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                678,
                681
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 45
                },
                "start": {
                  "column": 4,
                  "line": 45
                }
              }
            },
            "range": [
              678,
              682
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "range": [
                      720,
                      721
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 47
                      },
                      "start": {
                        "column": 8,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    720,
                    722
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "range": [
                    731,
                    737
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 48
                    },
                    "start": {
                      "column": 8,
                      "line": 48
                    }
                  }
                }
              ],
              "range": [
                710,
                743
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 49
                },
                "start": {
                  "column": 27,
                  "line": 46
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
                      696,
                      697
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 46
                      },
                      "start": {
                        "column": 13,
                        "line": 46
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      698,
                      699
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 46
                      },
                      "start": {
                        "column": 15,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    696,
                    699
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 46
                    },
                    "start": {
                      "column": 13,
                      "line": 46
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "var",
              "range": [
                692,
                699
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 46
                },
                "start": {
                  "column": 9,
                  "line": 46
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "range": [
                  700,
                  701
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 46
                  },
                  "start": {
                    "column": 17,
                    "line": 46
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "10",
                "value": 10,
                "range": [
                  702,
                  704
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 46
                  },
                  "start": {
                    "column": 19,
                    "line": 46
                  }
                }
              },
              "range": [
                700,
                704
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 46
                },
                "start": {
                  "column": 17,
                  "line": 46
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
                  705,
                  706
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 46
                  },
                  "start": {
                    "column": 22,
                    "line": 46
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                705,
                708
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 46
                },
                "start": {
                  "column": 22,
                  "line": 46
                }
              }
            },
            "range": [
              687,
              743
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 46
              }
            }
          },
          {
            "type": "ForStatement",
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
                        "type": "ContinueStatement",
                        "label": null,
                        "range": [
                          801,
                          810
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
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
                      787,
                      820
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 53
                      },
                      "start": {
                        "column": 18,
                        "line": 51
                      }
                    }
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "==",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "range": [
                        781,
                        782
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
                      "raw": "6",
                      "value": 6,
                      "range": [
                        784,
                        785
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 51
                        },
                        "start": {
                          "column": 15,
                          "line": 51
                        }
                      }
                    },
                    "range": [
                      781,
                      785
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 51
                      },
                      "start": {
                        "column": 12,
                        "line": 51
                      }
                    }
                  },
                  "range": [
                    777,
                    820
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 53
                    },
                    "start": {
                      "column": 8,
                      "line": 51
                    }
                  }
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "range": [
                    829,
                    835
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 54
                    },
                    "start": {
                      "column": 8,
                      "line": 54
                    }
                  }
                }
              ],
              "range": [
                767,
                841
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 55
                },
                "start": {
                  "column": 23,
                  "line": 50
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
                  753,
                  754
                ],
                "loc": {
                  "end": {
                    "column": 10,
                    "line": 50
                  },
                  "start": {
                    "column": 9,
                    "line": 50
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  755,
                  756
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 50
                  },
                  "start": {
                    "column": 11,
                    "line": 50
                  }
                }
              },
              "range": [
                753,
                756
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 50
                },
                "start": {
                  "column": 9,
                  "line": 50
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "range": [
                  757,
                  758
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 50
                  },
                  "start": {
                    "column": 13,
                    "line": 50
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "10",
                "value": 10,
                "range": [
                  759,
                  761
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 50
                  },
                  "start": {
                    "column": 15,
                    "line": 50
                  }
                }
              },
              "range": [
                757,
                761
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 50
                },
                "start": {
                  "column": 13,
                  "line": 50
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
                  762,
                  763
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 50
                  },
                  "start": {
                    "column": 18,
                    "line": 50
                  }
                }
              },
              "operator": "++",
              "prefix": false,
              "range": [
                762,
                765
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 50
                },
                "start": {
                  "column": 18,
                  "line": 50
                }
              }
            },
            "range": [
              748,
              841
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          }
        ],
        "range": [
          13,
          843
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
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
        843
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 57
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
