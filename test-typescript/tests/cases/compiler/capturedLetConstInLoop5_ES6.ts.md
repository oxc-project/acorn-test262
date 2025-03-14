__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    4485
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "range": [
          17,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 27,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            },
            "range": [
              22,
              27
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
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
            }
          },
          "range": [
            21,
            27
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 1
            },
            "start": {
              "column": 21,
              "line": 1
            }
          }
        }
      ],
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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          96,
                          97
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 6
                          },
                          "start": {
                            "column": 12,
                            "line": 6
                          }
                        }
                      },
                      "init": {
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
                            "column": 17,
                            "line": 6
                          },
                          "start": {
                            "column": 16,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        96,
                        101
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 6
                        },
                        "start": {
                          "column": 12,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    92,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 6
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                132,
                                133
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 7
                                },
                                "start": {
                                  "column": 29,
                                  "line": 7
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                136,
                                137
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 7
                                },
                                "start": {
                                  "column": 33,
                                  "line": 7
                                }
                              }
                            },
                            "range": [
                              132,
                              137
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 7
                              },
                              "start": {
                                "column": 29,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            125,
                            137
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 7
                            },
                            "start": {
                              "column": 22,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        123,
                        139
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 7
                        },
                        "start": {
                          "column": 20,
                          "line": 7
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      112,
                      139
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 7
                      },
                      "start": {
                        "column": 9,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    111,
                    141
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          157,
                          158
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 8
                          },
                          "start": {
                            "column": 15,
                            "line": 8
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          161,
                          162
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 8
                          },
                          "start": {
                            "column": 19,
                            "line": 8
                          }
                        }
                      },
                      "range": [
                        157,
                        162
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
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      151,
                      162
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    150,
                    164
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          199,
                          206
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 10
                          }
                        }
                      }
                    ],
                    "range": [
                      185,
                      216
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 11
                      },
                      "start": {
                        "column": 20,
                        "line": 9
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
                        177,
                        178
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
                      "raw": "1",
                      "value": 1,
                      "range": [
                        182,
                        183
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 9
                        },
                        "start": {
                          "column": 17,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      177,
                      183
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 9
                      },
                      "start": {
                        "column": 12,
                        "line": 9
                      }
                    }
                  },
                  "range": [
                    173,
                    216
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                }
              ],
              "range": [
                82,
                222
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 12
                },
                "start": {
                  "column": 22,
                  "line": 5
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      73,
                      74
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
                  "init": null,
                  "range": [
                    73,
                    74
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
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                69,
                74
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                78,
                80
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 5
                },
                "start": {
                  "column": 18,
                  "line": 5
                }
              }
            },
            "range": [
              64,
              222
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          },
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
                    232,
                    233
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  228,
                  231
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 14
                  },
                  "start": {
                    "column": 4,
                    "line": 14
                  }
                }
              },
              "optional": false,
              "range": [
                228,
                234
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 14
                },
                "start": {
                  "column": 4,
                  "line": 14
                }
              }
            },
            "range": [
              228,
              235
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          58,
          237
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 17,
            "line": 4
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0",
        "optional": false,
        "range": [
          50,
          54
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 4
          },
          "start": {
            "column": 9,
            "line": 4
          }
        }
      },
      "params": [
        {
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
              "column": 15,
              "line": 4
            },
            "start": {
              "column": 14,
              "line": 4
            }
          }
        }
      ],
      "range": [
        41,
        237
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 4
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
            "type": "ForInStatement",
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          295,
                          296
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
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          299,
                          300
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
                        295,
                        300
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
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    291,
                    301
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 19
                    },
                    "start": {
                      "column": 8,
                      "line": 19
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                331,
                                332
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 20
                                },
                                "start": {
                                  "column": 29,
                                  "line": 20
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                335,
                                336
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 20
                                },
                                "start": {
                                  "column": 33,
                                  "line": 20
                                }
                              }
                            },
                            "range": [
                              331,
                              336
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 20
                              },
                              "start": {
                                "column": 29,
                                "line": 20
                              }
                            }
                          },
                          "range": [
                            324,
                            336
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 20
                            },
                            "start": {
                              "column": 22,
                              "line": 20
                            }
                          }
                        }
                      ],
                      "range": [
                        322,
                        338
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 20
                        },
                        "start": {
                          "column": 20,
                          "line": 20
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      311,
                      338
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 20
                      },
                      "start": {
                        "column": 9,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    310,
                    340
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          356,
                          357
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 21
                          },
                          "start": {
                            "column": 15,
                            "line": 21
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          360,
                          361
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 21
                          },
                          "start": {
                            "column": 19,
                            "line": 21
                          }
                        }
                      },
                      "range": [
                        356,
                        361
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
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      350,
                      361
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 21
                      },
                      "start": {
                        "column": 9,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    349,
                    363
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 21
                    },
                    "start": {
                      "column": 8,
                      "line": 21
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          400,
                          407
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 23
                          },
                          "start": {
                            "column": 12,
                            "line": 23
                          }
                        }
                      }
                    ],
                    "range": [
                      386,
                      417
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 24
                      },
                      "start": {
                        "column": 22,
                        "line": 22
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
                        376,
                        377
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 22
                        },
                        "start": {
                          "column": 12,
                          "line": 22
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"1\"",
                      "value": "1",
                      "range": [
                        381,
                        384
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 22
                        },
                        "start": {
                          "column": 17,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      376,
                      384
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 22
                      },
                      "start": {
                        "column": 12,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    372,
                    417
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                }
              ],
              "range": [
                281,
                423
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 25
                },
                "start": {
                  "column": 22,
                  "line": 18
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      272,
                      273
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
                  "init": null,
                  "range": [
                    272,
                    273
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
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                268,
                273
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
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                277,
                279
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 18
                },
                "start": {
                  "column": 18,
                  "line": 18
                }
              }
            },
            "range": [
              263,
              423
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 25
              },
              "start": {
                "column": 4,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  429,
                  432
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 27
                  },
                  "start": {
                    "column": 4,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "range": [
                429,
                435
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            "range": [
              429,
              436
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "range": [
          257,
          438
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 28
          },
          "start": {
            "column": 18,
            "line": 17
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo00",
        "optional": false,
        "range": [
          248,
          253
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            254,
            255
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 17
            },
            "start": {
              "column": 15,
              "line": 17
            }
          }
        }
      ],
      "range": [
        239,
        438
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 17
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          505,
                          506
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
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          509,
                          510
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 32
                          },
                          "start": {
                            "column": 16,
                            "line": 32
                          }
                        }
                      },
                      "range": [
                        505,
                        510
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
                  "declare": false,
                  "kind": "var",
                  "range": [
                    501,
                    511
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                541,
                                542
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 33
                                },
                                "start": {
                                  "column": 29,
                                  "line": 33
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                545,
                                546
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 33
                                },
                                "start": {
                                  "column": 33,
                                  "line": 33
                                }
                              }
                            },
                            "range": [
                              541,
                              546
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 33
                              },
                              "start": {
                                "column": 29,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            534,
                            546
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 33
                            },
                            "start": {
                              "column": 22,
                              "line": 33
                            }
                          }
                        }
                      ],
                      "range": [
                        532,
                        548
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 33
                        },
                        "start": {
                          "column": 20,
                          "line": 33
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      521,
                      548
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 33
                      },
                      "start": {
                        "column": 9,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    520,
                    550
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 33
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          566,
                          567
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 34
                          },
                          "start": {
                            "column": 15,
                            "line": 34
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          570,
                          571
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 34
                          },
                          "start": {
                            "column": 19,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        566,
                        571
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 34
                        },
                        "start": {
                          "column": 15,
                          "line": 34
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      560,
                      571
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 34
                      },
                      "start": {
                        "column": 9,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    559,
                    573
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 34
                    },
                    "start": {
                      "column": 8,
                      "line": 34
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          608,
                          615
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
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
                      594,
                      625
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 37
                      },
                      "start": {
                        "column": 20,
                        "line": 35
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
                        586,
                        587
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 35
                        },
                        "start": {
                          "column": 12,
                          "line": 35
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        591,
                        592
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 35
                        },
                        "start": {
                          "column": 17,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      586,
                      592
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 35
                      },
                      "start": {
                        "column": 12,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    582,
                    625
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 37
                    },
                    "start": {
                      "column": 8,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                491,
                631
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 38
                },
                "start": {
                  "column": 32,
                  "line": 31
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      472,
                      473
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 31
                      },
                      "start": {
                        "column": 13,
                        "line": 31
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      476,
                      477
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 31
                      },
                      "start": {
                        "column": 17,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    472,
                    477
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 31
                    },
                    "start": {
                      "column": 13,
                      "line": 31
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                468,
                477
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 31
                },
                "start": {
                  "column": 9,
                  "line": 31
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
                  479,
                  480
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 31
                  },
                  "start": {
                    "column": 20,
                    "line": 31
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  483,
                  484
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 31
                  },
                  "start": {
                    "column": 24,
                    "line": 31
                  }
                }
              },
              "range": [
                479,
                484
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 31
                },
                "start": {
                  "column": 20,
                  "line": 31
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  488,
                  489
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 31
                  },
                  "start": {
                    "column": 29,
                    "line": 31
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                486,
                489
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 31
                },
                "start": {
                  "column": 27,
                  "line": 31
                }
              }
            },
            "range": [
              463,
              631
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 38
              },
              "start": {
                "column": 4,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    641,
                    642
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
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  637,
                  640
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 40
                  },
                  "start": {
                    "column": 4,
                    "line": 40
                  }
                }
              },
              "optional": false,
              "range": [
                637,
                643
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
                }
              }
            },
            "range": [
              637,
              644
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          }
        ],
        "range": [
          457,
          646
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 17,
            "line": 30
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "range": [
          449,
          453
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 30
          },
          "start": {
            "column": 9,
            "line": 30
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            454,
            455
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 30
            },
            "start": {
              "column": 14,
              "line": 30
            }
          }
        }
      ],
      "range": [
        440,
        646
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 30
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
            "type": "WhileStatement",
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
                          701,
                          702
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 45
                          },
                          "start": {
                            "column": 12,
                            "line": 45
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          705,
                          706
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 45
                          },
                          "start": {
                            "column": 16,
                            "line": 45
                          }
                        }
                      },
                      "range": [
                        701,
                        706
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 45
                        },
                        "start": {
                          "column": 12,
                          "line": 45
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    697,
                    707
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 45
                    },
                    "start": {
                      "column": 8,
                      "line": 45
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
                          720,
                          721
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 46
                          },
                          "start": {
                            "column": 12,
                            "line": 46
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          724,
                          725
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 46
                          },
                          "start": {
                            "column": 16,
                            "line": 46
                          }
                        }
                      },
                      "range": [
                        720,
                        725
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 46
                        },
                        "start": {
                          "column": 12,
                          "line": 46
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    716,
                    726
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 46
                    },
                    "start": {
                      "column": 8,
                      "line": 46
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                756,
                                757
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 47
                                },
                                "start": {
                                  "column": 29,
                                  "line": 47
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                760,
                                761
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 47
                                },
                                "start": {
                                  "column": 33,
                                  "line": 47
                                }
                              }
                            },
                            "range": [
                              756,
                              761
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 47
                              },
                              "start": {
                                "column": 29,
                                "line": 47
                              }
                            }
                          },
                          "range": [
                            749,
                            761
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 47
                            },
                            "start": {
                              "column": 22,
                              "line": 47
                            }
                          }
                        }
                      ],
                      "range": [
                        747,
                        763
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 47
                        },
                        "start": {
                          "column": 20,
                          "line": 47
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      736,
                      763
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 47
                      },
                      "start": {
                        "column": 9,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    735,
                    765
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          781,
                          782
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 48
                          },
                          "start": {
                            "column": 15,
                            "line": 48
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          785,
                          786
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 48
                          },
                          "start": {
                            "column": 19,
                            "line": 48
                          }
                        }
                      },
                      "range": [
                        781,
                        786
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 48
                        },
                        "start": {
                          "column": 15,
                          "line": 48
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      775,
                      786
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 48
                      },
                      "start": {
                        "column": 9,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    774,
                    788
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 48
                    },
                    "start": {
                      "column": 8,
                      "line": 48
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          823,
                          830
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
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
                      809,
                      840
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 51
                      },
                      "start": {
                        "column": 20,
                        "line": 49
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
                        801,
                        802
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
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        806,
                        807
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 49
                        },
                        "start": {
                          "column": 17,
                          "line": 49
                        }
                      }
                    },
                    "range": [
                      801,
                      807
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 49
                      },
                      "start": {
                        "column": 12,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    797,
                    840
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 49
                    }
                  }
                }
              ],
              "range": [
                687,
                846
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 52
                },
                "start": {
                  "column": 20,
                  "line": 44
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  678,
                  679
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 44
                  },
                  "start": {
                    "column": 11,
                    "line": 44
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  684,
                  685
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 44
                  },
                  "start": {
                    "column": 17,
                    "line": 44
                  }
                }
              },
              "range": [
                678,
                685
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 44
                },
                "start": {
                  "column": 11,
                  "line": 44
                }
              }
            },
            "range": [
              671,
              846
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 52
              },
              "start": {
                "column": 4,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    860,
                    861
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 54
                    },
                    "start": {
                      "column": 8,
                      "line": 54
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  856,
                  859
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 54
                  },
                  "start": {
                    "column": 4,
                    "line": 54
                  }
                }
              },
              "optional": false,
              "range": [
                856,
                862
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 54
                },
                "start": {
                  "column": 4,
                  "line": 54
                }
              }
            },
            "range": [
              856,
              863
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          }
        ],
        "range": [
          665,
          865
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 17,
            "line": 43
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "range": [
          657,
          661
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 43
          },
          "start": {
            "column": 9,
            "line": 43
          }
        }
      },
      "params": [
        {
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
              "column": 15,
              "line": 43
            },
            "start": {
              "column": 14,
              "line": 43
            }
          }
        }
      ],
      "range": [
        648,
        865
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 43
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
            "type": "DoWhileStatement",
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
                          907,
                          908
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
                      "init": null,
                      "range": [
                        907,
                        908
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
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    903,
                    909
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
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
                          922,
                          923
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
                      "init": null,
                      "range": [
                        922,
                        923
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
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    918,
                    924
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 60
                    },
                    "start": {
                      "column": 8,
                      "line": 60
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                954,
                                955
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 61
                                },
                                "start": {
                                  "column": 29,
                                  "line": 61
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                958,
                                959
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 61
                                },
                                "start": {
                                  "column": 33,
                                  "line": 61
                                }
                              }
                            },
                            "range": [
                              954,
                              959
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 61
                              },
                              "start": {
                                "column": 29,
                                "line": 61
                              }
                            }
                          },
                          "range": [
                            947,
                            959
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 61
                            },
                            "start": {
                              "column": 22,
                              "line": 61
                            }
                          }
                        }
                      ],
                      "range": [
                        945,
                        961
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 61
                        },
                        "start": {
                          "column": 20,
                          "line": 61
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      934,
                      961
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 61
                      },
                      "start": {
                        "column": 9,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    933,
                    963
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 61
                    },
                    "start": {
                      "column": 8,
                      "line": 61
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          979,
                          980
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 62
                          },
                          "start": {
                            "column": 15,
                            "line": 62
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          983,
                          984
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 62
                          },
                          "start": {
                            "column": 19,
                            "line": 62
                          }
                        }
                      },
                      "range": [
                        979,
                        984
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 62
                        },
                        "start": {
                          "column": 15,
                          "line": 62
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      973,
                      984
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 62
                      },
                      "start": {
                        "column": 9,
                        "line": 62
                      }
                    }
                  },
                  "range": [
                    972,
                    986
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 62
                    },
                    "start": {
                      "column": 8,
                      "line": 62
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          1021,
                          1028
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 64
                          },
                          "start": {
                            "column": 12,
                            "line": 64
                          }
                        }
                      }
                    ],
                    "range": [
                      1007,
                      1038
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 65
                      },
                      "start": {
                        "column": 20,
                        "line": 63
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
                        999,
                        1000
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 63
                        },
                        "start": {
                          "column": 12,
                          "line": 63
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1004,
                        1005
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 63
                        },
                        "start": {
                          "column": 17,
                          "line": 63
                        }
                      }
                    },
                    "range": [
                      999,
                      1005
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 63
                      },
                      "start": {
                        "column": 12,
                        "line": 63
                      }
                    }
                  },
                  "range": [
                    995,
                    1038
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 65
                    },
                    "start": {
                      "column": 8,
                      "line": 63
                    }
                  }
                }
              ],
              "range": [
                893,
                1044
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 66
                },
                "start": {
                  "column": 7,
                  "line": 58
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1052,
                  1053
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 66
                  },
                  "start": {
                    "column": 13,
                    "line": 66
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1058,
                  1059
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 66
                  },
                  "start": {
                    "column": 19,
                    "line": 66
                  }
                }
              },
              "range": [
                1052,
                1059
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 66
                },
                "start": {
                  "column": 13,
                  "line": 66
                }
              }
            },
            "range": [
              890,
              1060
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 66
              },
              "start": {
                "column": 4,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    1074,
                    1075
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 68
                    },
                    "start": {
                      "column": 8,
                      "line": 68
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  1070,
                  1073
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 68
                  },
                  "start": {
                    "column": 4,
                    "line": 68
                  }
                }
              },
              "optional": false,
              "range": [
                1070,
                1076
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 68
                },
                "start": {
                  "column": 4,
                  "line": 68
                }
              }
            },
            "range": [
              1070,
              1077
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          }
        ],
        "range": [
          884,
          1079
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 17,
            "line": 57
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "range": [
          876,
          880
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 57
          },
          "start": {
            "column": 9,
            "line": 57
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            881,
            882
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 57
            },
            "start": {
              "column": 14,
              "line": 57
            }
          }
        }
      ],
      "range": [
        867,
        1079
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 57
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          1146,
                          1147
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 73
                          },
                          "start": {
                            "column": 12,
                            "line": 73
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          1150,
                          1151
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 73
                          },
                          "start": {
                            "column": 16,
                            "line": 73
                          }
                        }
                      },
                      "range": [
                        1146,
                        1151
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 73
                        },
                        "start": {
                          "column": 12,
                          "line": 73
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1142,
                    1152
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 73
                    },
                    "start": {
                      "column": 8,
                      "line": 73
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
                          1165,
                          1166
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 74
                          },
                          "start": {
                            "column": 12,
                            "line": 74
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          1169,
                          1170
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 74
                          },
                          "start": {
                            "column": 16,
                            "line": 74
                          }
                        }
                      },
                      "range": [
                        1165,
                        1170
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 74
                        },
                        "start": {
                          "column": 12,
                          "line": 74
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1161,
                    1171
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 74
                    },
                    "start": {
                      "column": 8,
                      "line": 74
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                1201,
                                1202
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 75
                                },
                                "start": {
                                  "column": 29,
                                  "line": 75
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                1205,
                                1206
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 75
                                },
                                "start": {
                                  "column": 33,
                                  "line": 75
                                }
                              }
                            },
                            "range": [
                              1201,
                              1206
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 75
                              },
                              "start": {
                                "column": 29,
                                "line": 75
                              }
                            }
                          },
                          "range": [
                            1194,
                            1206
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 75
                            },
                            "start": {
                              "column": 22,
                              "line": 75
                            }
                          }
                        }
                      ],
                      "range": [
                        1192,
                        1208
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 75
                        },
                        "start": {
                          "column": 20,
                          "line": 75
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1181,
                      1208
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 75
                      },
                      "start": {
                        "column": 9,
                        "line": 75
                      }
                    }
                  },
                  "range": [
                    1180,
                    1210
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 75
                    },
                    "start": {
                      "column": 8,
                      "line": 75
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1226,
                          1227
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 76
                          },
                          "start": {
                            "column": 15,
                            "line": 76
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          1230,
                          1231
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 76
                          },
                          "start": {
                            "column": 19,
                            "line": 76
                          }
                        }
                      },
                      "range": [
                        1226,
                        1231
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 76
                        },
                        "start": {
                          "column": 15,
                          "line": 76
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1220,
                      1231
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 76
                      },
                      "start": {
                        "column": 9,
                        "line": 76
                      }
                    }
                  },
                  "range": [
                    1219,
                    1233
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 76
                    },
                    "start": {
                      "column": 8,
                      "line": 76
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          1268,
                          1275
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 78
                          },
                          "start": {
                            "column": 12,
                            "line": 78
                          }
                        }
                      }
                    ],
                    "range": [
                      1254,
                      1285
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 79
                      },
                      "start": {
                        "column": 20,
                        "line": 77
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
                        1246,
                        1247
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 77
                        },
                        "start": {
                          "column": 12,
                          "line": 77
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1251,
                        1252
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 77
                        },
                        "start": {
                          "column": 17,
                          "line": 77
                        }
                      }
                    },
                    "range": [
                      1246,
                      1252
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 77
                      },
                      "start": {
                        "column": 12,
                        "line": 77
                      }
                    }
                  },
                  "range": [
                    1242,
                    1285
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 79
                    },
                    "start": {
                      "column": 8,
                      "line": 77
                    }
                  }
                }
              ],
              "range": [
                1132,
                1291
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 80
                },
                "start": {
                  "column": 32,
                  "line": 72
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
                    "name": "y",
                    "optional": false,
                    "range": [
                      1113,
                      1114
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
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1117,
                      1118
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 72
                      },
                      "start": {
                        "column": 17,
                        "line": 72
                      }
                    }
                  },
                  "range": [
                    1113,
                    1118
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 72
                    },
                    "start": {
                      "column": 13,
                      "line": 72
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                1109,
                1118
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 72
                },
                "start": {
                  "column": 9,
                  "line": 72
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
                  1120,
                  1121
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 72
                  },
                  "start": {
                    "column": 20,
                    "line": 72
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
                    "column": 25,
                    "line": 72
                  },
                  "start": {
                    "column": 24,
                    "line": 72
                  }
                }
              },
              "range": [
                1120,
                1125
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 72
                },
                "start": {
                  "column": 20,
                  "line": 72
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  1129,
                  1130
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 72
                  },
                  "start": {
                    "column": 29,
                    "line": 72
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                1127,
                1130
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 72
                },
                "start": {
                  "column": 27,
                  "line": 72
                }
              }
            },
            "range": [
              1104,
              1291
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 80
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "range": [
                    1305,
                    1306
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 82
                    },
                    "start": {
                      "column": 8,
                      "line": 82
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  1301,
                  1304
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 82
                  },
                  "start": {
                    "column": 4,
                    "line": 82
                  }
                }
              },
              "optional": false,
              "range": [
                1301,
                1307
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 82
                },
                "start": {
                  "column": 4,
                  "line": 82
                }
              }
            },
            "range": [
              1301,
              1308
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 82
              },
              "start": {
                "column": 4,
                "line": 82
              }
            }
          }
        ],
        "range": [
          1098,
          1310
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 83
          },
          "start": {
            "column": 17,
            "line": 71
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "range": [
          1090,
          1094
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 71
          },
          "start": {
            "column": 9,
            "line": 71
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            1095,
            1096
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 71
            },
            "start": {
              "column": 14,
              "line": 71
            }
          }
        }
      ],
      "range": [
        1081,
        1310
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 71
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          1384,
                          1385
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 87
                          },
                          "start": {
                            "column": 12,
                            "line": 87
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1388,
                          1389
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 87
                          },
                          "start": {
                            "column": 16,
                            "line": 87
                          }
                        }
                      },
                      "range": [
                        1384,
                        1389
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 87
                        },
                        "start": {
                          "column": 12,
                          "line": 87
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1380,
                    1390
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 87
                    },
                    "start": {
                      "column": 8,
                      "line": 87
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1420,
                                  1421
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 88
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 88
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  1424,
                                  1425
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 88
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 88
                                  }
                                }
                              },
                              "range": [
                                1420,
                                1425
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 88
                                },
                                "start": {
                                  "column": 29,
                                  "line": 88
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                1428,
                                1429
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 88
                                },
                                "start": {
                                  "column": 37,
                                  "line": 88
                                }
                              }
                            },
                            "range": [
                              1420,
                              1429
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 88
                              },
                              "start": {
                                "column": 29,
                                "line": 88
                              }
                            }
                          },
                          "range": [
                            1413,
                            1429
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 88
                            },
                            "start": {
                              "column": 22,
                              "line": 88
                            }
                          }
                        }
                      ],
                      "range": [
                        1411,
                        1431
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 88
                        },
                        "start": {
                          "column": 20,
                          "line": 88
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1400,
                      1431
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 88
                      },
                      "start": {
                        "column": 9,
                        "line": 88
                      }
                    }
                  },
                  "range": [
                    1399,
                    1433
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 88
                    },
                    "start": {
                      "column": 8,
                      "line": 88
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1449,
                            1450
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 89
                            },
                            "start": {
                              "column": 15,
                              "line": 89
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            1453,
                            1454
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 89
                            },
                            "start": {
                              "column": 19,
                              "line": 89
                            }
                          }
                        },
                        "range": [
                          1449,
                          1454
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 89
                          },
                          "start": {
                            "column": 15,
                            "line": 89
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          1457,
                          1458
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 89
                          },
                          "start": {
                            "column": 23,
                            "line": 89
                          }
                        }
                      },
                      "range": [
                        1449,
                        1458
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 89
                        },
                        "start": {
                          "column": 15,
                          "line": 89
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1443,
                      1458
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 89
                      },
                      "start": {
                        "column": 9,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    1442,
                    1460
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 89
                    },
                    "start": {
                      "column": 8,
                      "line": 89
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          1495,
                          1502
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 91
                          },
                          "start": {
                            "column": 12,
                            "line": 91
                          }
                        }
                      }
                    ],
                    "range": [
                      1481,
                      1512
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 92
                      },
                      "start": {
                        "column": 20,
                        "line": 90
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
                        1473,
                        1474
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 90
                        },
                        "start": {
                          "column": 12,
                          "line": 90
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1478,
                        1479
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 90
                        },
                        "start": {
                          "column": 17,
                          "line": 90
                        }
                      }
                    },
                    "range": [
                      1473,
                      1479
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 90
                      },
                      "start": {
                        "column": 12,
                        "line": 90
                      }
                    }
                  },
                  "range": [
                    1469,
                    1512
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 92
                    },
                    "start": {
                      "column": 8,
                      "line": 90
                    }
                  }
                }
              ],
              "range": [
                1370,
                1518
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 93
                },
                "start": {
                  "column": 39,
                  "line": 86
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      1344,
                      1345
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 86
                      },
                      "start": {
                        "column": 13,
                        "line": 86
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      1348,
                      1349
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 86
                      },
                      "start": {
                        "column": 17,
                        "line": 86
                      }
                    }
                  },
                  "range": [
                    1344,
                    1349
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 86
                    },
                    "start": {
                      "column": 13,
                      "line": 86
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
                      1351,
                      1352
                    ],
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 86
                      },
                      "start": {
                        "column": 20,
                        "line": 86
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1355,
                      1356
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 86
                      },
                      "start": {
                        "column": 24,
                        "line": 86
                      }
                    }
                  },
                  "range": [
                    1351,
                    1356
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 86
                    },
                    "start": {
                      "column": 20,
                      "line": 86
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                1340,
                1356
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 86
                },
                "start": {
                  "column": 9,
                  "line": 86
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
                  1358,
                  1359
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 86
                  },
                  "start": {
                    "column": 27,
                    "line": 86
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1362,
                  1363
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 86
                  },
                  "start": {
                    "column": 31,
                    "line": 86
                  }
                }
              },
              "range": [
                1358,
                1363
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 86
                },
                "start": {
                  "column": 27,
                  "line": 86
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "range": [
                  1367,
                  1368
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 86
                  },
                  "start": {
                    "column": 36,
                    "line": 86
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                1365,
                1368
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 86
                },
                "start": {
                  "column": 34,
                  "line": 86
                }
              }
            },
            "range": [
              1335,
              1518
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 93
              },
              "start": {
                "column": 4,
                "line": 86
              }
            }
          },
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
                    1532,
                    1533
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 95
                    },
                    "start": {
                      "column": 8,
                      "line": 95
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  1528,
                  1531
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 95
                  },
                  "start": {
                    "column": 4,
                    "line": 95
                  }
                }
              },
              "optional": false,
              "range": [
                1528,
                1534
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 95
                },
                "start": {
                  "column": 4,
                  "line": 95
                }
              }
            },
            "range": [
              1528,
              1535
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 95
              },
              "start": {
                "column": 4,
                "line": 95
              }
            }
          }
        ],
        "range": [
          1329,
          1537
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 96
          },
          "start": {
            "column": 17,
            "line": 85
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "range": [
          1321,
          1325
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 85
          },
          "start": {
            "column": 9,
            "line": 85
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            1326,
            1327
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 85
            },
            "start": {
              "column": 14,
              "line": 85
            }
          }
        }
      ],
      "range": [
        1312,
        1537
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 85
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
            "type": "WhileStatement",
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
                          1593,
                          1594
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 101
                          },
                          "start": {
                            "column": 12,
                            "line": 101
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        1593,
                        1594
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 101
                        },
                        "start": {
                          "column": 12,
                          "line": 101
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
                          1596,
                          1597
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 101
                          },
                          "start": {
                            "column": 15,
                            "line": 101
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        1596,
                        1597
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 101
                        },
                        "start": {
                          "column": 15,
                          "line": 101
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1589,
                    1598
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 101
                    },
                    "start": {
                      "column": 8,
                      "line": 101
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
                          1611,
                          1612
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 102
                          },
                          "start": {
                            "column": 12,
                            "line": 102
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1615,
                          1616
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 102
                          },
                          "start": {
                            "column": 16,
                            "line": 102
                          }
                        }
                      },
                      "range": [
                        1611,
                        1616
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 102
                        },
                        "start": {
                          "column": 12,
                          "line": 102
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1607,
                    1617
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 102
                    },
                    "start": {
                      "column": 8,
                      "line": 102
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1647,
                                  1648
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 103
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 103
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  1651,
                                  1652
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 103
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 103
                                  }
                                }
                              },
                              "range": [
                                1647,
                                1652
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 103
                                },
                                "start": {
                                  "column": 29,
                                  "line": 103
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                1655,
                                1656
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 103
                                },
                                "start": {
                                  "column": 37,
                                  "line": 103
                                }
                              }
                            },
                            "range": [
                              1647,
                              1656
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 103
                              },
                              "start": {
                                "column": 29,
                                "line": 103
                              }
                            }
                          },
                          "range": [
                            1640,
                            1656
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 103
                            },
                            "start": {
                              "column": 22,
                              "line": 103
                            }
                          }
                        }
                      ],
                      "range": [
                        1638,
                        1658
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 103
                        },
                        "start": {
                          "column": 20,
                          "line": 103
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1627,
                      1658
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 103
                      },
                      "start": {
                        "column": 9,
                        "line": 103
                      }
                    }
                  },
                  "range": [
                    1626,
                    1660
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 103
                    },
                    "start": {
                      "column": 8,
                      "line": 103
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1676,
                            1677
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 104
                            },
                            "start": {
                              "column": 15,
                              "line": 104
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            1680,
                            1681
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 104
                            },
                            "start": {
                              "column": 19,
                              "line": 104
                            }
                          }
                        },
                        "range": [
                          1676,
                          1681
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 104
                          },
                          "start": {
                            "column": 15,
                            "line": 104
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          1684,
                          1685
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 104
                          },
                          "start": {
                            "column": 23,
                            "line": 104
                          }
                        }
                      },
                      "range": [
                        1676,
                        1685
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 104
                        },
                        "start": {
                          "column": 15,
                          "line": 104
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1670,
                      1685
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 104
                      },
                      "start": {
                        "column": 9,
                        "line": 104
                      }
                    }
                  },
                  "range": [
                    1669,
                    1687
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 104
                    },
                    "start": {
                      "column": 8,
                      "line": 104
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          1722,
                          1729
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 106
                          },
                          "start": {
                            "column": 12,
                            "line": 106
                          }
                        }
                      }
                    ],
                    "range": [
                      1708,
                      1739
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 107
                      },
                      "start": {
                        "column": 20,
                        "line": 105
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
                        1700,
                        1701
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 105
                        },
                        "start": {
                          "column": 12,
                          "line": 105
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1705,
                        1706
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 105
                        },
                        "start": {
                          "column": 17,
                          "line": 105
                        }
                      }
                    },
                    "range": [
                      1700,
                      1706
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 105
                      },
                      "start": {
                        "column": 12,
                        "line": 105
                      }
                    }
                  },
                  "range": [
                    1696,
                    1739
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 107
                    },
                    "start": {
                      "column": 8,
                      "line": 105
                    }
                  }
                }
              ],
              "range": [
                1579,
                1745
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 108
                },
                "start": {
                  "column": 20,
                  "line": 100
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1570,
                  1571
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 100
                  },
                  "start": {
                    "column": 11,
                    "line": 100
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1576,
                  1577
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 100
                  },
                  "start": {
                    "column": 17,
                    "line": 100
                  }
                }
              },
              "range": [
                1570,
                1577
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 100
                },
                "start": {
                  "column": 11,
                  "line": 100
                }
              }
            },
            "range": [
              1563,
              1745
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 108
              },
              "start": {
                "column": 4,
                "line": 100
              }
            }
          },
          {
            "type": "EmptyStatement",
            "range": [
              1745,
              1746
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 108
              },
              "start": {
                "column": 5,
                "line": 108
              }
            }
          },
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
                    1760,
                    1761
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 110
                    },
                    "start": {
                      "column": 8,
                      "line": 110
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  1756,
                  1759
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 110
                  },
                  "start": {
                    "column": 4,
                    "line": 110
                  }
                }
              },
              "optional": false,
              "range": [
                1756,
                1762
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 110
                },
                "start": {
                  "column": 4,
                  "line": 110
                }
              }
            },
            "range": [
              1756,
              1762
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 110
              },
              "start": {
                "column": 4,
                "line": 110
              }
            }
          }
        ],
        "range": [
          1557,
          1764
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 111
          },
          "start": {
            "column": 17,
            "line": 99
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "range": [
          1549,
          1553
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 99
          },
          "start": {
            "column": 9,
            "line": 99
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            1554,
            1555
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 99
            },
            "start": {
              "column": 14,
              "line": 99
            }
          }
        }
      ],
      "range": [
        1540,
        1764
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 99
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
            "type": "DoWhileStatement",
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
                          1806,
                          1807
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 115
                          },
                          "start": {
                            "column": 12,
                            "line": 115
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        1806,
                        1807
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 115
                        },
                        "start": {
                          "column": 12,
                          "line": 115
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
                          1809,
                          1810
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 115
                          },
                          "start": {
                            "column": 15,
                            "line": 115
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        1809,
                        1810
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 115
                        },
                        "start": {
                          "column": 15,
                          "line": 115
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    1802,
                    1811
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 115
                    },
                    "start": {
                      "column": 8,
                      "line": 115
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
                          1824,
                          1825
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 116
                          },
                          "start": {
                            "column": 12,
                            "line": 116
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          1828,
                          1829
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 116
                          },
                          "start": {
                            "column": 16,
                            "line": 116
                          }
                        }
                      },
                      "range": [
                        1824,
                        1829
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 116
                        },
                        "start": {
                          "column": 12,
                          "line": 116
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1820,
                    1830
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 116
                    },
                    "start": {
                      "column": 8,
                      "line": 116
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  1860,
                                  1861
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 117
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 117
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  1864,
                                  1865
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 117
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 117
                                  }
                                }
                              },
                              "range": [
                                1860,
                                1865
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 117
                                },
                                "start": {
                                  "column": 29,
                                  "line": 117
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                1868,
                                1869
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 117
                                },
                                "start": {
                                  "column": 37,
                                  "line": 117
                                }
                              }
                            },
                            "range": [
                              1860,
                              1869
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 117
                              },
                              "start": {
                                "column": 29,
                                "line": 117
                              }
                            }
                          },
                          "range": [
                            1853,
                            1869
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 117
                            },
                            "start": {
                              "column": 22,
                              "line": 117
                            }
                          }
                        }
                      ],
                      "range": [
                        1851,
                        1871
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 117
                        },
                        "start": {
                          "column": 20,
                          "line": 117
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1840,
                      1871
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 117
                      },
                      "start": {
                        "column": 9,
                        "line": 117
                      }
                    }
                  },
                  "range": [
                    1839,
                    1873
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 117
                    },
                    "start": {
                      "column": 8,
                      "line": 117
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            1889,
                            1890
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 118
                            },
                            "start": {
                              "column": 15,
                              "line": 118
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            1893,
                            1894
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 118
                            },
                            "start": {
                              "column": 19,
                              "line": 118
                            }
                          }
                        },
                        "range": [
                          1889,
                          1894
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 118
                          },
                          "start": {
                            "column": 15,
                            "line": 118
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          1897,
                          1898
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 118
                          },
                          "start": {
                            "column": 23,
                            "line": 118
                          }
                        }
                      },
                      "range": [
                        1889,
                        1898
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 118
                        },
                        "start": {
                          "column": 15,
                          "line": 118
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1883,
                      1898
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 118
                      },
                      "start": {
                        "column": 9,
                        "line": 118
                      }
                    }
                  },
                  "range": [
                    1882,
                    1900
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 118
                    },
                    "start": {
                      "column": 8,
                      "line": 118
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          1935,
                          1942
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 120
                          },
                          "start": {
                            "column": 12,
                            "line": 120
                          }
                        }
                      }
                    ],
                    "range": [
                      1921,
                      1952
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 121
                      },
                      "start": {
                        "column": 20,
                        "line": 119
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
                        1913,
                        1914
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 119
                        },
                        "start": {
                          "column": 12,
                          "line": 119
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1918,
                        1919
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 119
                        },
                        "start": {
                          "column": 17,
                          "line": 119
                        }
                      }
                    },
                    "range": [
                      1913,
                      1919
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 119
                      },
                      "start": {
                        "column": 12,
                        "line": 119
                      }
                    }
                  },
                  "range": [
                    1909,
                    1952
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 121
                    },
                    "start": {
                      "column": 8,
                      "line": 119
                    }
                  }
                }
              ],
              "range": [
                1792,
                1958
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 122
                },
                "start": {
                  "column": 7,
                  "line": 114
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1966,
                  1967
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 122
                  },
                  "start": {
                    "column": 13,
                    "line": 122
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  1972,
                  1973
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 122
                  },
                  "start": {
                    "column": 19,
                    "line": 122
                  }
                }
              },
              "range": [
                1966,
                1973
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 122
                },
                "start": {
                  "column": 13,
                  "line": 122
                }
              }
            },
            "range": [
              1789,
              1975
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 122
              },
              "start": {
                "column": 4,
                "line": 114
              }
            }
          },
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
                    1989,
                    1990
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 124
                    },
                    "start": {
                      "column": 8,
                      "line": 124
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  1985,
                  1988
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 124
                  },
                  "start": {
                    "column": 4,
                    "line": 124
                  }
                }
              },
              "optional": false,
              "range": [
                1985,
                1991
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 124
                },
                "start": {
                  "column": 4,
                  "line": 124
                }
              }
            },
            "range": [
              1985,
              1992
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 124
              },
              "start": {
                "column": 4,
                "line": 124
              }
            }
          }
        ],
        "range": [
          1783,
          1994
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 125
          },
          "start": {
            "column": 17,
            "line": 113
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "range": [
          1775,
          1779
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 113
          },
          "start": {
            "column": 9,
            "line": 113
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            1780,
            1781
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 113
            },
            "start": {
              "column": 14,
              "line": 113
            }
          }
        }
      ],
      "range": [
        1766,
        1994
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 125
        },
        "start": {
          "column": 0,
          "line": 113
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          2062,
                          2063
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 130
                          },
                          "start": {
                            "column": 12,
                            "line": 130
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          2066,
                          2067
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 130
                          },
                          "start": {
                            "column": 16,
                            "line": 130
                          }
                        }
                      },
                      "range": [
                        2062,
                        2067
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 130
                        },
                        "start": {
                          "column": 12,
                          "line": 130
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    2058,
                    2068
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 130
                    },
                    "start": {
                      "column": 8,
                      "line": 130
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
                          2081,
                          2082
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 131
                          },
                          "start": {
                            "column": 12,
                            "line": 131
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2085,
                          2086
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 131
                          },
                          "start": {
                            "column": 16,
                            "line": 131
                          }
                        }
                      },
                      "range": [
                        2081,
                        2086
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 131
                        },
                        "start": {
                          "column": 12,
                          "line": 131
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2077,
                    2087
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 131
                    },
                    "start": {
                      "column": 8,
                      "line": 131
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  2117,
                                  2118
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 132
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 132
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  2121,
                                  2122
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 132
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 132
                                  }
                                }
                              },
                              "range": [
                                2117,
                                2122
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 132
                                },
                                "start": {
                                  "column": 29,
                                  "line": 132
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                2125,
                                2126
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 132
                                },
                                "start": {
                                  "column": 37,
                                  "line": 132
                                }
                              }
                            },
                            "range": [
                              2117,
                              2126
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 132
                              },
                              "start": {
                                "column": 29,
                                "line": 132
                              }
                            }
                          },
                          "range": [
                            2110,
                            2126
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 132
                            },
                            "start": {
                              "column": 22,
                              "line": 132
                            }
                          }
                        }
                      ],
                      "range": [
                        2108,
                        2128
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 132
                        },
                        "start": {
                          "column": 20,
                          "line": 132
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2097,
                      2128
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 132
                      },
                      "start": {
                        "column": 9,
                        "line": 132
                      }
                    }
                  },
                  "range": [
                    2096,
                    2130
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 132
                    },
                    "start": {
                      "column": 8,
                      "line": 132
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            2146,
                            2147
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 133
                            },
                            "start": {
                              "column": 15,
                              "line": 133
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            2150,
                            2151
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 133
                            },
                            "start": {
                              "column": 19,
                              "line": 133
                            }
                          }
                        },
                        "range": [
                          2146,
                          2151
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 133
                          },
                          "start": {
                            "column": 15,
                            "line": 133
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          2154,
                          2155
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 133
                          },
                          "start": {
                            "column": 23,
                            "line": 133
                          }
                        }
                      },
                      "range": [
                        2146,
                        2155
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 133
                        },
                        "start": {
                          "column": 15,
                          "line": 133
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2140,
                      2155
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 133
                      },
                      "start": {
                        "column": 9,
                        "line": 133
                      }
                    }
                  },
                  "range": [
                    2139,
                    2157
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 133
                    },
                    "start": {
                      "column": 8,
                      "line": 133
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          2192,
                          2199
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 135
                          },
                          "start": {
                            "column": 12,
                            "line": 135
                          }
                        }
                      }
                    ],
                    "range": [
                      2178,
                      2209
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 136
                      },
                      "start": {
                        "column": 20,
                        "line": 134
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
                        2170,
                        2171
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 134
                        },
                        "start": {
                          "column": 12,
                          "line": 134
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2175,
                        2176
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 134
                        },
                        "start": {
                          "column": 17,
                          "line": 134
                        }
                      }
                    },
                    "range": [
                      2170,
                      2176
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 134
                      },
                      "start": {
                        "column": 12,
                        "line": 134
                      }
                    }
                  },
                  "range": [
                    2166,
                    2209
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 136
                    },
                    "start": {
                      "column": 8,
                      "line": 134
                    }
                  }
                }
              ],
              "range": [
                2048,
                2215
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 137
                },
                "start": {
                  "column": 32,
                  "line": 129
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
                    "name": "y",
                    "optional": false,
                    "range": [
                      2029,
                      2030
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 129
                      },
                      "start": {
                        "column": 13,
                        "line": 129
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      2033,
                      2034
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 129
                      },
                      "start": {
                        "column": 17,
                        "line": 129
                      }
                    }
                  },
                  "range": [
                    2029,
                    2034
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 129
                    },
                    "start": {
                      "column": 13,
                      "line": 129
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "let",
              "range": [
                2025,
                2034
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 129
                },
                "start": {
                  "column": 9,
                  "line": 129
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
                  2036,
                  2037
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 129
                  },
                  "start": {
                    "column": 20,
                    "line": 129
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2040,
                  2041
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 129
                  },
                  "start": {
                    "column": 24,
                    "line": 129
                  }
                }
              },
              "range": [
                2036,
                2041
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 129
                },
                "start": {
                  "column": 20,
                  "line": 129
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "range": [
                  2045,
                  2046
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 129
                  },
                  "start": {
                    "column": 29,
                    "line": 129
                  }
                }
              },
              "operator": "++",
              "prefix": true,
              "range": [
                2043,
                2046
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 129
                },
                "start": {
                  "column": 27,
                  "line": 129
                }
              }
            },
            "range": [
              2020,
              2215
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 137
              },
              "start": {
                "column": 4,
                "line": 129
              }
            }
          },
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
                    2229,
                    2230
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 139
                    },
                    "start": {
                      "column": 8,
                      "line": 139
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  2225,
                  2228
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 139
                  },
                  "start": {
                    "column": 4,
                    "line": 139
                  }
                }
              },
              "optional": false,
              "range": [
                2225,
                2231
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 139
                },
                "start": {
                  "column": 4,
                  "line": 139
                }
              }
            },
            "range": [
              2225,
              2232
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 139
              },
              "start": {
                "column": 4,
                "line": 139
              }
            }
          }
        ],
        "range": [
          2014,
          2234
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 140
          },
          "start": {
            "column": 17,
            "line": 128
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "range": [
          2006,
          2010
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 128
          },
          "start": {
            "column": 9,
            "line": 128
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            2011,
            2012
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 128
            },
            "start": {
              "column": 14,
              "line": 128
            }
          }
        }
      ],
      "range": [
        1997,
        2234
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 140
        },
        "start": {
          "column": 0,
          "line": 128
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
            "type": "ForOfStatement",
            "await": false,
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          2307,
                          2308
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 145
                          },
                          "start": {
                            "column": 12,
                            "line": 145
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2311,
                          2312
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 145
                          },
                          "start": {
                            "column": 16,
                            "line": 145
                          }
                        }
                      },
                      "range": [
                        2307,
                        2312
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 145
                        },
                        "start": {
                          "column": 12,
                          "line": 145
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2303,
                    2313
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 145
                    },
                    "start": {
                      "column": 8,
                      "line": 145
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                2343,
                                2344
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 146
                                },
                                "start": {
                                  "column": 29,
                                  "line": 146
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                2347,
                                2348
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 146
                                },
                                "start": {
                                  "column": 33,
                                  "line": 146
                                }
                              }
                            },
                            "range": [
                              2343,
                              2348
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 146
                              },
                              "start": {
                                "column": 29,
                                "line": 146
                              }
                            }
                          },
                          "range": [
                            2336,
                            2348
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 146
                            },
                            "start": {
                              "column": 22,
                              "line": 146
                            }
                          }
                        }
                      ],
                      "range": [
                        2334,
                        2350
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 146
                        },
                        "start": {
                          "column": 20,
                          "line": 146
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2323,
                      2350
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 146
                      },
                      "start": {
                        "column": 9,
                        "line": 146
                      }
                    }
                  },
                  "range": [
                    2322,
                    2352
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 146
                    },
                    "start": {
                      "column": 8,
                      "line": 146
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2368,
                          2369
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 147
                          },
                          "start": {
                            "column": 15,
                            "line": 147
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          2372,
                          2373
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 147
                          },
                          "start": {
                            "column": 19,
                            "line": 147
                          }
                        }
                      },
                      "range": [
                        2368,
                        2373
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 147
                        },
                        "start": {
                          "column": 15,
                          "line": 147
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2362,
                      2373
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 147
                      },
                      "start": {
                        "column": 9,
                        "line": 147
                      }
                    }
                  },
                  "range": [
                    2361,
                    2375
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 147
                    },
                    "start": {
                      "column": 8,
                      "line": 147
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          2410,
                          2417
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 149
                          },
                          "start": {
                            "column": 12,
                            "line": 149
                          }
                        }
                      }
                    ],
                    "range": [
                      2396,
                      2427
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 150
                      },
                      "start": {
                        "column": 20,
                        "line": 148
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
                        2388,
                        2389
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 148
                        },
                        "start": {
                          "column": 12,
                          "line": 148
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2393,
                        2394
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 148
                        },
                        "start": {
                          "column": 17,
                          "line": 148
                        }
                      }
                    },
                    "range": [
                      2388,
                      2394
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 148
                      },
                      "start": {
                        "column": 12,
                        "line": 148
                      }
                    }
                  },
                  "range": [
                    2384,
                    2427
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 150
                    },
                    "start": {
                      "column": 8,
                      "line": 148
                    }
                  }
                }
              ],
              "range": [
                2293,
                2433
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 151
                },
                "start": {
                  "column": 24,
                  "line": 144
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      2284,
                      2285
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 144
                      },
                      "start": {
                        "column": 15,
                        "line": 144
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    2284,
                    2285
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 144
                    },
                    "start": {
                      "column": 15,
                      "line": 144
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                2278,
                2285
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 144
                },
                "start": {
                  "column": 9,
                  "line": 144
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                2289,
                2291
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 144
                },
                "start": {
                  "column": 20,
                  "line": 144
                }
              }
            },
            "range": [
              2273,
              2433
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 151
              },
              "start": {
                "column": 4,
                "line": 144
              }
            }
          },
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
                    2443,
                    2444
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 153
                    },
                    "start": {
                      "column": 8,
                      "line": 153
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  2439,
                  2442
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 153
                  },
                  "start": {
                    "column": 4,
                    "line": 153
                  }
                }
              },
              "optional": false,
              "range": [
                2439,
                2445
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 153
                },
                "start": {
                  "column": 4,
                  "line": 153
                }
              }
            },
            "range": [
              2439,
              2446
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 153
              },
              "start": {
                "column": 4,
                "line": 153
              }
            }
          }
        ],
        "range": [
          2267,
          2448
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 154
          },
          "start": {
            "column": 19,
            "line": 143
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0_c",
        "optional": false,
        "range": [
          2257,
          2263
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 143
          },
          "start": {
            "column": 9,
            "line": 143
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            2264,
            2265
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 143
            },
            "start": {
              "column": 16,
              "line": 143
            }
          }
        }
      ],
      "range": [
        2248,
        2448
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 154
        },
        "start": {
          "column": 0,
          "line": 143
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
            "type": "ForInStatement",
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          2510,
                          2511
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 158
                          },
                          "start": {
                            "column": 12,
                            "line": 158
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2514,
                          2515
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 158
                          },
                          "start": {
                            "column": 16,
                            "line": 158
                          }
                        }
                      },
                      "range": [
                        2510,
                        2515
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 158
                        },
                        "start": {
                          "column": 12,
                          "line": 158
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2506,
                    2516
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 158
                    },
                    "start": {
                      "column": 8,
                      "line": 158
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                2546,
                                2547
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 159
                                },
                                "start": {
                                  "column": 29,
                                  "line": 159
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                2550,
                                2551
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 159
                                },
                                "start": {
                                  "column": 33,
                                  "line": 159
                                }
                              }
                            },
                            "range": [
                              2546,
                              2551
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 159
                              },
                              "start": {
                                "column": 29,
                                "line": 159
                              }
                            }
                          },
                          "range": [
                            2539,
                            2551
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 159
                            },
                            "start": {
                              "column": 22,
                              "line": 159
                            }
                          }
                        }
                      ],
                      "range": [
                        2537,
                        2553
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 159
                        },
                        "start": {
                          "column": 20,
                          "line": 159
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2526,
                      2553
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 159
                      },
                      "start": {
                        "column": 9,
                        "line": 159
                      }
                    }
                  },
                  "range": [
                    2525,
                    2555
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 159
                    },
                    "start": {
                      "column": 8,
                      "line": 159
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2571,
                          2572
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 160
                          },
                          "start": {
                            "column": 15,
                            "line": 160
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          2575,
                          2576
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 160
                          },
                          "start": {
                            "column": 19,
                            "line": 160
                          }
                        }
                      },
                      "range": [
                        2571,
                        2576
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 160
                        },
                        "start": {
                          "column": 15,
                          "line": 160
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2565,
                      2576
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 160
                      },
                      "start": {
                        "column": 9,
                        "line": 160
                      }
                    }
                  },
                  "range": [
                    2564,
                    2578
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 160
                    },
                    "start": {
                      "column": 8,
                      "line": 160
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          2615,
                          2622
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 162
                          },
                          "start": {
                            "column": 12,
                            "line": 162
                          }
                        }
                      }
                    ],
                    "range": [
                      2601,
                      2632
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 163
                      },
                      "start": {
                        "column": 22,
                        "line": 161
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
                        2591,
                        2592
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 161
                        },
                        "start": {
                          "column": 12,
                          "line": 161
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "\"1\"",
                      "value": "1",
                      "range": [
                        2596,
                        2599
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 161
                        },
                        "start": {
                          "column": 17,
                          "line": 161
                        }
                      }
                    },
                    "range": [
                      2591,
                      2599
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 161
                      },
                      "start": {
                        "column": 12,
                        "line": 161
                      }
                    }
                  },
                  "range": [
                    2587,
                    2632
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 163
                    },
                    "start": {
                      "column": 8,
                      "line": 161
                    }
                  }
                }
              ],
              "range": [
                2496,
                2638
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 164
                },
                "start": {
                  "column": 24,
                  "line": 157
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      2487,
                      2488
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 157
                      },
                      "start": {
                        "column": 15,
                        "line": 157
                      }
                    }
                  },
                  "init": null,
                  "range": [
                    2487,
                    2488
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 157
                    },
                    "start": {
                      "column": 15,
                      "line": 157
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                2481,
                2488
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 157
                },
                "start": {
                  "column": 9,
                  "line": 157
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "range": [
                2492,
                2494
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 157
                },
                "start": {
                  "column": 20,
                  "line": 157
                }
              }
            },
            "range": [
              2476,
              2638
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 164
              },
              "start": {
                "column": 4,
                "line": 157
              }
            }
          },
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
                    2648,
                    2649
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 166
                    },
                    "start": {
                      "column": 8,
                      "line": 166
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  2644,
                  2647
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 166
                  },
                  "start": {
                    "column": 4,
                    "line": 166
                  }
                }
              },
              "optional": false,
              "range": [
                2644,
                2650
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 166
                },
                "start": {
                  "column": 4,
                  "line": 166
                }
              }
            },
            "range": [
              2644,
              2651
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 166
              },
              "start": {
                "column": 4,
                "line": 166
              }
            }
          }
        ],
        "range": [
          2470,
          2653
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 167
          },
          "start": {
            "column": 20,
            "line": 156
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo00_c",
        "optional": false,
        "range": [
          2459,
          2466
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 156
          },
          "start": {
            "column": 9,
            "line": 156
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            2467,
            2468
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 156
            },
            "start": {
              "column": 17,
              "line": 156
            }
          }
        }
      ],
      "range": [
        2450,
        2653
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 167
        },
        "start": {
          "column": 0,
          "line": 156
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          2720,
                          2721
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 171
                          },
                          "start": {
                            "column": 12,
                            "line": 171
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2724,
                          2725
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 171
                          },
                          "start": {
                            "column": 16,
                            "line": 171
                          }
                        }
                      },
                      "range": [
                        2720,
                        2725
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 171
                        },
                        "start": {
                          "column": 12,
                          "line": 171
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2716,
                    2726
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 171
                    },
                    "start": {
                      "column": 8,
                      "line": 171
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                2756,
                                2757
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 172
                                },
                                "start": {
                                  "column": 29,
                                  "line": 172
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                2760,
                                2761
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 172
                                },
                                "start": {
                                  "column": 33,
                                  "line": 172
                                }
                              }
                            },
                            "range": [
                              2756,
                              2761
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 172
                              },
                              "start": {
                                "column": 29,
                                "line": 172
                              }
                            }
                          },
                          "range": [
                            2749,
                            2761
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 172
                            },
                            "start": {
                              "column": 22,
                              "line": 172
                            }
                          }
                        }
                      ],
                      "range": [
                        2747,
                        2763
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 172
                        },
                        "start": {
                          "column": 20,
                          "line": 172
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2736,
                      2763
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 172
                      },
                      "start": {
                        "column": 9,
                        "line": 172
                      }
                    }
                  },
                  "range": [
                    2735,
                    2765
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 172
                    },
                    "start": {
                      "column": 8,
                      "line": 172
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2781,
                          2782
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 173
                          },
                          "start": {
                            "column": 15,
                            "line": 173
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          2785,
                          2786
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 173
                          },
                          "start": {
                            "column": 19,
                            "line": 173
                          }
                        }
                      },
                      "range": [
                        2781,
                        2786
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 173
                        },
                        "start": {
                          "column": 15,
                          "line": 173
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2775,
                      2786
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 173
                      },
                      "start": {
                        "column": 9,
                        "line": 173
                      }
                    }
                  },
                  "range": [
                    2774,
                    2788
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 173
                    },
                    "start": {
                      "column": 8,
                      "line": 173
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          2823,
                          2830
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 175
                          },
                          "start": {
                            "column": 12,
                            "line": 175
                          }
                        }
                      }
                    ],
                    "range": [
                      2809,
                      2840
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 176
                      },
                      "start": {
                        "column": 20,
                        "line": 174
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
                        2801,
                        2802
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 174
                        },
                        "start": {
                          "column": 12,
                          "line": 174
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2806,
                        2807
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 174
                        },
                        "start": {
                          "column": 17,
                          "line": 174
                        }
                      }
                    },
                    "range": [
                      2801,
                      2807
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 174
                      },
                      "start": {
                        "column": 12,
                        "line": 174
                      }
                    }
                  },
                  "range": [
                    2797,
                    2840
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 176
                    },
                    "start": {
                      "column": 8,
                      "line": 174
                    }
                  }
                }
              ],
              "range": [
                2706,
                2846
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 177
                },
                "start": {
                  "column": 30,
                  "line": 170
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      2691,
                      2692
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 170
                      },
                      "start": {
                        "column": 15,
                        "line": 170
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      2695,
                      2696
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 170
                      },
                      "start": {
                        "column": 19,
                        "line": 170
                      }
                    }
                  },
                  "range": [
                    2691,
                    2696
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 170
                    },
                    "start": {
                      "column": 15,
                      "line": 170
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                2685,
                2696
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 170
                },
                "start": {
                  "column": 9,
                  "line": 170
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
                  2698,
                  2699
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 170
                  },
                  "start": {
                    "column": 22,
                    "line": 170
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2702,
                  2703
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 170
                  },
                  "start": {
                    "column": 26,
                    "line": 170
                  }
                }
              },
              "range": [
                2698,
                2703
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 170
                },
                "start": {
                  "column": 22,
                  "line": 170
                }
              }
            },
            "update": null,
            "range": [
              2680,
              2846
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 177
              },
              "start": {
                "column": 4,
                "line": 170
              }
            }
          },
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
                    2856,
                    2857
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 179
                    },
                    "start": {
                      "column": 8,
                      "line": 179
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  2852,
                  2855
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 179
                  },
                  "start": {
                    "column": 4,
                    "line": 179
                  }
                }
              },
              "optional": false,
              "range": [
                2852,
                2858
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 179
                },
                "start": {
                  "column": 4,
                  "line": 179
                }
              }
            },
            "range": [
              2852,
              2859
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 179
              },
              "start": {
                "column": 4,
                "line": 179
              }
            }
          }
        ],
        "range": [
          2674,
          2861
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 180
          },
          "start": {
            "column": 19,
            "line": 169
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1_c",
        "optional": false,
        "range": [
          2664,
          2670
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 169
          },
          "start": {
            "column": 9,
            "line": 169
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            2671,
            2672
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 169
            },
            "start": {
              "column": 16,
              "line": 169
            }
          }
        }
      ],
      "range": [
        2655,
        2861
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 180
        },
        "start": {
          "column": 0,
          "line": 169
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
            "type": "WhileStatement",
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
                          2920,
                          2921
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 184
                          },
                          "start": {
                            "column": 14,
                            "line": 184
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          2924,
                          2925
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 184
                          },
                          "start": {
                            "column": 18,
                            "line": 184
                          }
                        }
                      },
                      "range": [
                        2920,
                        2925
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 184
                        },
                        "start": {
                          "column": 14,
                          "line": 184
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    2914,
                    2926
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 184
                    },
                    "start": {
                      "column": 8,
                      "line": 184
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
                          2939,
                          2940
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 185
                          },
                          "start": {
                            "column": 12,
                            "line": 185
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          2943,
                          2944
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 185
                          },
                          "start": {
                            "column": 16,
                            "line": 185
                          }
                        }
                      },
                      "range": [
                        2939,
                        2944
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 185
                        },
                        "start": {
                          "column": 12,
                          "line": 185
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    2935,
                    2945
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 185
                    },
                    "start": {
                      "column": 8,
                      "line": 185
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                2975,
                                2976
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 186
                                },
                                "start": {
                                  "column": 29,
                                  "line": 186
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                2979,
                                2980
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 186
                                },
                                "start": {
                                  "column": 33,
                                  "line": 186
                                }
                              }
                            },
                            "range": [
                              2975,
                              2980
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 186
                              },
                              "start": {
                                "column": 29,
                                "line": 186
                              }
                            }
                          },
                          "range": [
                            2968,
                            2980
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 186
                            },
                            "start": {
                              "column": 22,
                              "line": 186
                            }
                          }
                        }
                      ],
                      "range": [
                        2966,
                        2982
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 186
                        },
                        "start": {
                          "column": 20,
                          "line": 186
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2955,
                      2982
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 186
                      },
                      "start": {
                        "column": 9,
                        "line": 186
                      }
                    }
                  },
                  "range": [
                    2954,
                    2984
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 186
                    },
                    "start": {
                      "column": 8,
                      "line": 186
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          3000,
                          3001
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 187
                          },
                          "start": {
                            "column": 15,
                            "line": 187
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          3004,
                          3005
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 187
                          },
                          "start": {
                            "column": 19,
                            "line": 187
                          }
                        }
                      },
                      "range": [
                        3000,
                        3005
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 187
                        },
                        "start": {
                          "column": 15,
                          "line": 187
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      2994,
                      3005
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 187
                      },
                      "start": {
                        "column": 9,
                        "line": 187
                      }
                    }
                  },
                  "range": [
                    2993,
                    3007
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 187
                    },
                    "start": {
                      "column": 8,
                      "line": 187
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          3042,
                          3049
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 189
                          },
                          "start": {
                            "column": 12,
                            "line": 189
                          }
                        }
                      }
                    ],
                    "range": [
                      3028,
                      3059
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 190
                      },
                      "start": {
                        "column": 20,
                        "line": 188
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
                        3020,
                        3021
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 188
                        },
                        "start": {
                          "column": 12,
                          "line": 188
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        3025,
                        3026
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 188
                        },
                        "start": {
                          "column": 17,
                          "line": 188
                        }
                      }
                    },
                    "range": [
                      3020,
                      3026
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 188
                      },
                      "start": {
                        "column": 12,
                        "line": 188
                      }
                    }
                  },
                  "range": [
                    3016,
                    3059
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 190
                    },
                    "start": {
                      "column": 8,
                      "line": 188
                    }
                  }
                }
              ],
              "range": [
                2904,
                3065
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 191
                },
                "start": {
                  "column": 20,
                  "line": 183
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2895,
                  2896
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 183
                  },
                  "start": {
                    "column": 11,
                    "line": 183
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  2901,
                  2902
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 183
                  },
                  "start": {
                    "column": 17,
                    "line": 183
                  }
                }
              },
              "range": [
                2895,
                2902
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 183
                },
                "start": {
                  "column": 11,
                  "line": 183
                }
              }
            },
            "range": [
              2888,
              3065
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 191
              },
              "start": {
                "column": 4,
                "line": 183
              }
            }
          },
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
                    3079,
                    3080
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 193
                    },
                    "start": {
                      "column": 8,
                      "line": 193
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  3075,
                  3078
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 193
                  },
                  "start": {
                    "column": 4,
                    "line": 193
                  }
                }
              },
              "optional": false,
              "range": [
                3075,
                3081
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 193
                },
                "start": {
                  "column": 4,
                  "line": 193
                }
              }
            },
            "range": [
              3075,
              3082
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 193
              },
              "start": {
                "column": 4,
                "line": 193
              }
            }
          }
        ],
        "range": [
          2882,
          3084
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 194
          },
          "start": {
            "column": 19,
            "line": 182
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2_c",
        "optional": false,
        "range": [
          2872,
          2878
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 182
          },
          "start": {
            "column": 9,
            "line": 182
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            2879,
            2880
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 182
            },
            "start": {
              "column": 16,
              "line": 182
            }
          }
        }
      ],
      "range": [
        2863,
        3084
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 194
        },
        "start": {
          "column": 0,
          "line": 182
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
            "type": "DoWhileStatement",
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
                          3130,
                          3131
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 198
                          },
                          "start": {
                            "column": 14,
                            "line": 198
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          3134,
                          3135
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 198
                          },
                          "start": {
                            "column": 18,
                            "line": 198
                          }
                        }
                      },
                      "range": [
                        3130,
                        3135
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 198
                        },
                        "start": {
                          "column": 14,
                          "line": 198
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    3124,
                    3136
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 198
                    },
                    "start": {
                      "column": 8,
                      "line": 198
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
                          3149,
                          3150
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 199
                          },
                          "start": {
                            "column": 12,
                            "line": 199
                          }
                        }
                      },
                      "init": null,
                      "range": [
                        3149,
                        3150
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 199
                        },
                        "start": {
                          "column": 12,
                          "line": 199
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    3145,
                    3151
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 199
                    },
                    "start": {
                      "column": 8,
                      "line": 199
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                3181,
                                3182
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 200
                                },
                                "start": {
                                  "column": 29,
                                  "line": 200
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                3185,
                                3186
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 200
                                },
                                "start": {
                                  "column": 33,
                                  "line": 200
                                }
                              }
                            },
                            "range": [
                              3181,
                              3186
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 200
                              },
                              "start": {
                                "column": 29,
                                "line": 200
                              }
                            }
                          },
                          "range": [
                            3174,
                            3186
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 200
                            },
                            "start": {
                              "column": 22,
                              "line": 200
                            }
                          }
                        }
                      ],
                      "range": [
                        3172,
                        3188
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 200
                        },
                        "start": {
                          "column": 20,
                          "line": 200
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      3161,
                      3188
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 200
                      },
                      "start": {
                        "column": 9,
                        "line": 200
                      }
                    }
                  },
                  "range": [
                    3160,
                    3190
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 200
                    },
                    "start": {
                      "column": 8,
                      "line": 200
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          3206,
                          3207
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 201
                          },
                          "start": {
                            "column": 15,
                            "line": 201
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          3210,
                          3211
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 201
                          },
                          "start": {
                            "column": 19,
                            "line": 201
                          }
                        }
                      },
                      "range": [
                        3206,
                        3211
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 201
                        },
                        "start": {
                          "column": 15,
                          "line": 201
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      3200,
                      3211
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 201
                      },
                      "start": {
                        "column": 9,
                        "line": 201
                      }
                    }
                  },
                  "range": [
                    3199,
                    3213
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 201
                    },
                    "start": {
                      "column": 8,
                      "line": 201
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          3248,
                          3255
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 203
                          },
                          "start": {
                            "column": 12,
                            "line": 203
                          }
                        }
                      }
                    ],
                    "range": [
                      3234,
                      3265
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 204
                      },
                      "start": {
                        "column": 20,
                        "line": 202
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
                        3226,
                        3227
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 202
                        },
                        "start": {
                          "column": 12,
                          "line": 202
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        3231,
                        3232
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 202
                        },
                        "start": {
                          "column": 17,
                          "line": 202
                        }
                      }
                    },
                    "range": [
                      3226,
                      3232
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 202
                      },
                      "start": {
                        "column": 12,
                        "line": 202
                      }
                    }
                  },
                  "range": [
                    3222,
                    3265
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 204
                    },
                    "start": {
                      "column": 8,
                      "line": 202
                    }
                  }
                }
              ],
              "range": [
                3114,
                3271
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 205
                },
                "start": {
                  "column": 7,
                  "line": 197
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  3279,
                  3280
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 205
                  },
                  "start": {
                    "column": 13,
                    "line": 205
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  3285,
                  3286
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 205
                  },
                  "start": {
                    "column": 19,
                    "line": 205
                  }
                }
              },
              "range": [
                3279,
                3286
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 205
                },
                "start": {
                  "column": 13,
                  "line": 205
                }
              }
            },
            "range": [
              3111,
              3287
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 205
              },
              "start": {
                "column": 4,
                "line": 197
              }
            }
          },
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
                    3301,
                    3302
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 207
                    },
                    "start": {
                      "column": 8,
                      "line": 207
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  3297,
                  3300
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 207
                  },
                  "start": {
                    "column": 4,
                    "line": 207
                  }
                }
              },
              "optional": false,
              "range": [
                3297,
                3303
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 207
                },
                "start": {
                  "column": 4,
                  "line": 207
                }
              }
            },
            "range": [
              3297,
              3304
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 207
              },
              "start": {
                "column": 4,
                "line": 207
              }
            }
          }
        ],
        "range": [
          3105,
          3306
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 208
          },
          "start": {
            "column": 19,
            "line": 196
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3_c",
        "optional": false,
        "range": [
          3095,
          3101
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 196
          },
          "start": {
            "column": 9,
            "line": 196
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            3102,
            3103
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 196
            },
            "start": {
              "column": 16,
              "line": 196
            }
          }
        }
      ],
      "range": [
        3086,
        3306
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 208
        },
        "start": {
          "column": 0,
          "line": 196
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          3373,
                          3374
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 212
                          },
                          "start": {
                            "column": 12,
                            "line": 212
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "range": [
                          3377,
                          3378
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 212
                          },
                          "start": {
                            "column": 16,
                            "line": 212
                          }
                        }
                      },
                      "range": [
                        3373,
                        3378
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 212
                        },
                        "start": {
                          "column": 12,
                          "line": 212
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    3369,
                    3379
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 212
                    },
                    "start": {
                      "column": 8,
                      "line": 212
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
                          3392,
                          3393
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 213
                          },
                          "start": {
                            "column": 12,
                            "line": 213
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          3396,
                          3397
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 213
                          },
                          "start": {
                            "column": 16,
                            "line": 213
                          }
                        }
                      },
                      "range": [
                        3392,
                        3397
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 213
                        },
                        "start": {
                          "column": 12,
                          "line": 213
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    3388,
                    3398
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 213
                    },
                    "start": {
                      "column": 8,
                      "line": 213
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "range": [
                                3428,
                                3429
                              ],
                              "loc": {
                                "end": {
                                  "column": 30,
                                  "line": 214
                                },
                                "start": {
                                  "column": 29,
                                  "line": 214
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                3432,
                                3433
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 214
                                },
                                "start": {
                                  "column": 33,
                                  "line": 214
                                }
                              }
                            },
                            "range": [
                              3428,
                              3433
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 214
                              },
                              "start": {
                                "column": 29,
                                "line": 214
                              }
                            }
                          },
                          "range": [
                            3421,
                            3433
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 214
                            },
                            "start": {
                              "column": 22,
                              "line": 214
                            }
                          }
                        }
                      ],
                      "range": [
                        3419,
                        3435
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 214
                        },
                        "start": {
                          "column": 20,
                          "line": 214
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      3408,
                      3435
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 214
                      },
                      "start": {
                        "column": 9,
                        "line": 214
                      }
                    }
                  },
                  "range": [
                    3407,
                    3437
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 214
                    },
                    "start": {
                      "column": 8,
                      "line": 214
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          3453,
                          3454
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 215
                          },
                          "start": {
                            "column": 15,
                            "line": 215
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          3457,
                          3458
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 215
                          },
                          "start": {
                            "column": 19,
                            "line": 215
                          }
                        }
                      },
                      "range": [
                        3453,
                        3458
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 215
                        },
                        "start": {
                          "column": 15,
                          "line": 215
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      3447,
                      3458
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 215
                      },
                      "start": {
                        "column": 9,
                        "line": 215
                      }
                    }
                  },
                  "range": [
                    3446,
                    3460
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 215
                    },
                    "start": {
                      "column": 8,
                      "line": 215
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          3495,
                          3502
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 217
                          },
                          "start": {
                            "column": 12,
                            "line": 217
                          }
                        }
                      }
                    ],
                    "range": [
                      3481,
                      3512
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 218
                      },
                      "start": {
                        "column": 20,
                        "line": 216
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
                        3473,
                        3474
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 216
                        },
                        "start": {
                          "column": 12,
                          "line": 216
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        3478,
                        3479
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 216
                        },
                        "start": {
                          "column": 17,
                          "line": 216
                        }
                      }
                    },
                    "range": [
                      3473,
                      3479
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 216
                      },
                      "start": {
                        "column": 12,
                        "line": 216
                      }
                    }
                  },
                  "range": [
                    3469,
                    3512
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 218
                    },
                    "start": {
                      "column": 8,
                      "line": 216
                    }
                  }
                }
              ],
              "range": [
                3359,
                3518
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 219
                },
                "start": {
                  "column": 30,
                  "line": 211
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
                    "name": "y",
                    "optional": false,
                    "range": [
                      3344,
                      3345
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 211
                      },
                      "start": {
                        "column": 15,
                        "line": 211
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      3348,
                      3349
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 211
                      },
                      "start": {
                        "column": 19,
                        "line": 211
                      }
                    }
                  },
                  "range": [
                    3344,
                    3349
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 211
                    },
                    "start": {
                      "column": 15,
                      "line": 211
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                3338,
                3349
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 211
                },
                "start": {
                  "column": 9,
                  "line": 211
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
                  3351,
                  3352
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 211
                  },
                  "start": {
                    "column": 22,
                    "line": 211
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  3355,
                  3356
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 211
                  },
                  "start": {
                    "column": 26,
                    "line": 211
                  }
                }
              },
              "range": [
                3351,
                3356
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 211
                },
                "start": {
                  "column": 22,
                  "line": 211
                }
              }
            },
            "update": null,
            "range": [
              3333,
              3518
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 219
              },
              "start": {
                "column": 4,
                "line": 211
              }
            }
          },
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
                    3532,
                    3533
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 221
                    },
                    "start": {
                      "column": 8,
                      "line": 221
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  3528,
                  3531
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 221
                  },
                  "start": {
                    "column": 4,
                    "line": 221
                  }
                }
              },
              "optional": false,
              "range": [
                3528,
                3534
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 221
                },
                "start": {
                  "column": 4,
                  "line": 221
                }
              }
            },
            "range": [
              3528,
              3535
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 221
              },
              "start": {
                "column": 4,
                "line": 221
              }
            }
          }
        ],
        "range": [
          3327,
          3537
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 222
          },
          "start": {
            "column": 19,
            "line": 210
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4_c",
        "optional": false,
        "range": [
          3317,
          3323
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 210
          },
          "start": {
            "column": 9,
            "line": 210
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            3324,
            3325
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 210
            },
            "start": {
              "column": 16,
              "line": 210
            }
          }
        }
      ],
      "range": [
        3308,
        3537
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 222
        },
        "start": {
          "column": 0,
          "line": 210
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
                        "name": "v",
                        "optional": false,
                        "range": [
                          3611,
                          3612
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 226
                          },
                          "start": {
                            "column": 12,
                            "line": 226
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          3615,
                          3616
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 226
                          },
                          "start": {
                            "column": 16,
                            "line": 226
                          }
                        }
                      },
                      "range": [
                        3611,
                        3616
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 226
                        },
                        "start": {
                          "column": 12,
                          "line": 226
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    3607,
                    3617
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 226
                    },
                    "start": {
                      "column": 8,
                      "line": 226
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  3647,
                                  3648
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 227
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 227
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  3651,
                                  3652
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 227
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 227
                                  }
                                }
                              },
                              "range": [
                                3647,
                                3652
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 227
                                },
                                "start": {
                                  "column": 29,
                                  "line": 227
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                3655,
                                3656
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 227
                                },
                                "start": {
                                  "column": 37,
                                  "line": 227
                                }
                              }
                            },
                            "range": [
                              3647,
                              3656
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 227
                              },
                              "start": {
                                "column": 29,
                                "line": 227
                              }
                            }
                          },
                          "range": [
                            3640,
                            3656
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 227
                            },
                            "start": {
                              "column": 22,
                              "line": 227
                            }
                          }
                        }
                      ],
                      "range": [
                        3638,
                        3658
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 227
                        },
                        "start": {
                          "column": 20,
                          "line": 227
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      3627,
                      3658
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 227
                      },
                      "start": {
                        "column": 9,
                        "line": 227
                      }
                    }
                  },
                  "range": [
                    3626,
                    3660
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 227
                    },
                    "start": {
                      "column": 8,
                      "line": 227
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3676,
                            3677
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 228
                            },
                            "start": {
                              "column": 15,
                              "line": 228
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            3680,
                            3681
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 228
                            },
                            "start": {
                              "column": 19,
                              "line": 228
                            }
                          }
                        },
                        "range": [
                          3676,
                          3681
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 228
                          },
                          "start": {
                            "column": 15,
                            "line": 228
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          3684,
                          3685
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 228
                          },
                          "start": {
                            "column": 23,
                            "line": 228
                          }
                        }
                      },
                      "range": [
                        3676,
                        3685
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 228
                        },
                        "start": {
                          "column": 15,
                          "line": 228
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      3670,
                      3685
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 228
                      },
                      "start": {
                        "column": 9,
                        "line": 228
                      }
                    }
                  },
                  "range": [
                    3669,
                    3687
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 228
                    },
                    "start": {
                      "column": 8,
                      "line": 228
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          3722,
                          3729
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 230
                          },
                          "start": {
                            "column": 12,
                            "line": 230
                          }
                        }
                      }
                    ],
                    "range": [
                      3708,
                      3739
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 231
                      },
                      "start": {
                        "column": 20,
                        "line": 229
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
                        3700,
                        3701
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 229
                        },
                        "start": {
                          "column": 12,
                          "line": 229
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        3705,
                        3706
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 229
                        },
                        "start": {
                          "column": 17,
                          "line": 229
                        }
                      }
                    },
                    "range": [
                      3700,
                      3706
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 229
                      },
                      "start": {
                        "column": 12,
                        "line": 229
                      }
                    }
                  },
                  "range": [
                    3696,
                    3739
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 231
                    },
                    "start": {
                      "column": 8,
                      "line": 229
                    }
                  }
                }
              ],
              "range": [
                3597,
                3745
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 232
                },
                "start": {
                  "column": 37,
                  "line": 225
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      3575,
                      3576
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 225
                      },
                      "start": {
                        "column": 15,
                        "line": 225
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      3579,
                      3580
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 225
                      },
                      "start": {
                        "column": 19,
                        "line": 225
                      }
                    }
                  },
                  "range": [
                    3575,
                    3580
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 225
                    },
                    "start": {
                      "column": 15,
                      "line": 225
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
                      3582,
                      3583
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 225
                      },
                      "start": {
                        "column": 22,
                        "line": 225
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      3586,
                      3587
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 225
                      },
                      "start": {
                        "column": 26,
                        "line": 225
                      }
                    }
                  },
                  "range": [
                    3582,
                    3587
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 225
                    },
                    "start": {
                      "column": 22,
                      "line": 225
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                3569,
                3587
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 225
                },
                "start": {
                  "column": 9,
                  "line": 225
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
                  3589,
                  3590
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 225
                  },
                  "start": {
                    "column": 29,
                    "line": 225
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  3593,
                  3594
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 225
                  },
                  "start": {
                    "column": 33,
                    "line": 225
                  }
                }
              },
              "range": [
                3589,
                3594
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 225
                },
                "start": {
                  "column": 29,
                  "line": 225
                }
              }
            },
            "update": null,
            "range": [
              3564,
              3745
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 232
              },
              "start": {
                "column": 4,
                "line": 225
              }
            }
          },
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
                    3759,
                    3760
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 234
                    },
                    "start": {
                      "column": 8,
                      "line": 234
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  3755,
                  3758
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 234
                  },
                  "start": {
                    "column": 4,
                    "line": 234
                  }
                }
              },
              "optional": false,
              "range": [
                3755,
                3761
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 234
                },
                "start": {
                  "column": 4,
                  "line": 234
                }
              }
            },
            "range": [
              3755,
              3762
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 234
              },
              "start": {
                "column": 4,
                "line": 234
              }
            }
          }
        ],
        "range": [
          3558,
          3764
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 235
          },
          "start": {
            "column": 19,
            "line": 224
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5_c",
        "optional": false,
        "range": [
          3548,
          3554
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 224
          },
          "start": {
            "column": 9,
            "line": 224
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            3555,
            3556
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 224
            },
            "start": {
              "column": 16,
              "line": 224
            }
          }
        }
      ],
      "range": [
        3539,
        3764
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 235
        },
        "start": {
          "column": 0,
          "line": 224
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
            "type": "WhileStatement",
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
                          3824,
                          3825
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 240
                          },
                          "start": {
                            "column": 14,
                            "line": 240
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          3828,
                          3829
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 240
                          },
                          "start": {
                            "column": 18,
                            "line": 240
                          }
                        }
                      },
                      "range": [
                        3824,
                        3829
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 240
                        },
                        "start": {
                          "column": 14,
                          "line": 240
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
                          3831,
                          3832
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 240
                          },
                          "start": {
                            "column": 21,
                            "line": 240
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          3835,
                          3836
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 240
                          },
                          "start": {
                            "column": 25,
                            "line": 240
                          }
                        }
                      },
                      "range": [
                        3831,
                        3836
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 240
                        },
                        "start": {
                          "column": 21,
                          "line": 240
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    3818,
                    3837
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 240
                    },
                    "start": {
                      "column": 8,
                      "line": 240
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
                          3850,
                          3851
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 241
                          },
                          "start": {
                            "column": 12,
                            "line": 241
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          3854,
                          3855
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 241
                          },
                          "start": {
                            "column": 16,
                            "line": 241
                          }
                        }
                      },
                      "range": [
                        3850,
                        3855
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 241
                        },
                        "start": {
                          "column": 12,
                          "line": 241
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    3846,
                    3856
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 241
                    },
                    "start": {
                      "column": 8,
                      "line": 241
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  3886,
                                  3887
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 242
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 242
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  3890,
                                  3891
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 242
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 242
                                  }
                                }
                              },
                              "range": [
                                3886,
                                3891
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 242
                                },
                                "start": {
                                  "column": 29,
                                  "line": 242
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                3894,
                                3895
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 242
                                },
                                "start": {
                                  "column": 37,
                                  "line": 242
                                }
                              }
                            },
                            "range": [
                              3886,
                              3895
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 242
                              },
                              "start": {
                                "column": 29,
                                "line": 242
                              }
                            }
                          },
                          "range": [
                            3879,
                            3895
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 242
                            },
                            "start": {
                              "column": 22,
                              "line": 242
                            }
                          }
                        }
                      ],
                      "range": [
                        3877,
                        3897
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 242
                        },
                        "start": {
                          "column": 20,
                          "line": 242
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      3866,
                      3897
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 242
                      },
                      "start": {
                        "column": 9,
                        "line": 242
                      }
                    }
                  },
                  "range": [
                    3865,
                    3899
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 242
                    },
                    "start": {
                      "column": 8,
                      "line": 242
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            3915,
                            3916
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 243
                            },
                            "start": {
                              "column": 15,
                              "line": 243
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            3919,
                            3920
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 243
                            },
                            "start": {
                              "column": 19,
                              "line": 243
                            }
                          }
                        },
                        "range": [
                          3915,
                          3920
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 243
                          },
                          "start": {
                            "column": 15,
                            "line": 243
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          3923,
                          3924
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 243
                          },
                          "start": {
                            "column": 23,
                            "line": 243
                          }
                        }
                      },
                      "range": [
                        3915,
                        3924
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 243
                        },
                        "start": {
                          "column": 15,
                          "line": 243
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      3909,
                      3924
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 243
                      },
                      "start": {
                        "column": 9,
                        "line": 243
                      }
                    }
                  },
                  "range": [
                    3908,
                    3926
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 243
                    },
                    "start": {
                      "column": 8,
                      "line": 243
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          3961,
                          3968
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 245
                          },
                          "start": {
                            "column": 12,
                            "line": 245
                          }
                        }
                      }
                    ],
                    "range": [
                      3947,
                      3978
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 246
                      },
                      "start": {
                        "column": 20,
                        "line": 244
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
                        3939,
                        3940
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 244
                        },
                        "start": {
                          "column": 12,
                          "line": 244
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        3944,
                        3945
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 244
                        },
                        "start": {
                          "column": 17,
                          "line": 244
                        }
                      }
                    },
                    "range": [
                      3939,
                      3945
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 244
                      },
                      "start": {
                        "column": 12,
                        "line": 244
                      }
                    }
                  },
                  "range": [
                    3935,
                    3978
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 246
                    },
                    "start": {
                      "column": 8,
                      "line": 244
                    }
                  }
                }
              ],
              "range": [
                3808,
                3984
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 247
                },
                "start": {
                  "column": 20,
                  "line": 239
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  3799,
                  3800
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 239
                  },
                  "start": {
                    "column": 11,
                    "line": 239
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  3805,
                  3806
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 239
                  },
                  "start": {
                    "column": 17,
                    "line": 239
                  }
                }
              },
              "range": [
                3799,
                3806
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 239
                },
                "start": {
                  "column": 11,
                  "line": 239
                }
              }
            },
            "range": [
              3792,
              3984
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 247
              },
              "start": {
                "column": 4,
                "line": 239
              }
            }
          },
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
                    3998,
                    3999
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 249
                    },
                    "start": {
                      "column": 8,
                      "line": 249
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  3994,
                  3997
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 249
                  },
                  "start": {
                    "column": 4,
                    "line": 249
                  }
                }
              },
              "optional": false,
              "range": [
                3994,
                4000
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 249
                },
                "start": {
                  "column": 4,
                  "line": 249
                }
              }
            },
            "range": [
              3994,
              4000
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 249
              },
              "start": {
                "column": 4,
                "line": 249
              }
            }
          }
        ],
        "range": [
          3786,
          4002
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 250
          },
          "start": {
            "column": 19,
            "line": 238
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6_c",
        "optional": false,
        "range": [
          3776,
          3782
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 238
          },
          "start": {
            "column": 9,
            "line": 238
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            3783,
            3784
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 238
            },
            "start": {
              "column": 16,
              "line": 238
            }
          }
        }
      ],
      "range": [
        3767,
        4002
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 250
        },
        "start": {
          "column": 0,
          "line": 238
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
            "type": "DoWhileStatement",
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
                          4048,
                          4049
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 254
                          },
                          "start": {
                            "column": 14,
                            "line": 254
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          4052,
                          4053
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 254
                          },
                          "start": {
                            "column": 18,
                            "line": 254
                          }
                        }
                      },
                      "range": [
                        4048,
                        4053
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 254
                        },
                        "start": {
                          "column": 14,
                          "line": 254
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
                          4055,
                          4056
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 254
                          },
                          "start": {
                            "column": 21,
                            "line": 254
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          4059,
                          4060
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 254
                          },
                          "start": {
                            "column": 25,
                            "line": 254
                          }
                        }
                      },
                      "range": [
                        4055,
                        4060
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 254
                        },
                        "start": {
                          "column": 21,
                          "line": 254
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    4042,
                    4061
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 254
                    },
                    "start": {
                      "column": 8,
                      "line": 254
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
                          4074,
                          4075
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 255
                          },
                          "start": {
                            "column": 12,
                            "line": 255
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          4078,
                          4079
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 255
                          },
                          "start": {
                            "column": 16,
                            "line": 255
                          }
                        }
                      },
                      "range": [
                        4074,
                        4079
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 255
                        },
                        "start": {
                          "column": 12,
                          "line": 255
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    4070,
                    4080
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 255
                    },
                    "start": {
                      "column": 8,
                      "line": 255
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  4110,
                                  4111
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 256
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 256
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  4114,
                                  4115
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 256
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 256
                                  }
                                }
                              },
                              "range": [
                                4110,
                                4115
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 256
                                },
                                "start": {
                                  "column": 29,
                                  "line": 256
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                4118,
                                4119
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 256
                                },
                                "start": {
                                  "column": 37,
                                  "line": 256
                                }
                              }
                            },
                            "range": [
                              4110,
                              4119
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 256
                              },
                              "start": {
                                "column": 29,
                                "line": 256
                              }
                            }
                          },
                          "range": [
                            4103,
                            4119
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 256
                            },
                            "start": {
                              "column": 22,
                              "line": 256
                            }
                          }
                        }
                      ],
                      "range": [
                        4101,
                        4121
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 256
                        },
                        "start": {
                          "column": 20,
                          "line": 256
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      4090,
                      4121
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 256
                      },
                      "start": {
                        "column": 9,
                        "line": 256
                      }
                    }
                  },
                  "range": [
                    4089,
                    4123
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 256
                    },
                    "start": {
                      "column": 8,
                      "line": 256
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            4139,
                            4140
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 257
                            },
                            "start": {
                              "column": 15,
                              "line": 257
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            4143,
                            4144
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 257
                            },
                            "start": {
                              "column": 19,
                              "line": 257
                            }
                          }
                        },
                        "range": [
                          4139,
                          4144
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 257
                          },
                          "start": {
                            "column": 15,
                            "line": 257
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          4147,
                          4148
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 257
                          },
                          "start": {
                            "column": 23,
                            "line": 257
                          }
                        }
                      },
                      "range": [
                        4139,
                        4148
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 257
                        },
                        "start": {
                          "column": 15,
                          "line": 257
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      4133,
                      4148
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 257
                      },
                      "start": {
                        "column": 9,
                        "line": 257
                      }
                    }
                  },
                  "range": [
                    4132,
                    4150
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 257
                    },
                    "start": {
                      "column": 8,
                      "line": 257
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          4185,
                          4192
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 259
                          },
                          "start": {
                            "column": 12,
                            "line": 259
                          }
                        }
                      }
                    ],
                    "range": [
                      4171,
                      4202
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 260
                      },
                      "start": {
                        "column": 20,
                        "line": 258
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
                        4163,
                        4164
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 258
                        },
                        "start": {
                          "column": 12,
                          "line": 258
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        4168,
                        4169
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 258
                        },
                        "start": {
                          "column": 17,
                          "line": 258
                        }
                      }
                    },
                    "range": [
                      4163,
                      4169
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 258
                      },
                      "start": {
                        "column": 12,
                        "line": 258
                      }
                    }
                  },
                  "range": [
                    4159,
                    4202
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 260
                    },
                    "start": {
                      "column": 8,
                      "line": 258
                    }
                  }
                }
              ],
              "range": [
                4032,
                4208
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 261
                },
                "start": {
                  "column": 7,
                  "line": 253
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  4216,
                  4217
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 261
                  },
                  "start": {
                    "column": 13,
                    "line": 261
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  4222,
                  4223
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 261
                  },
                  "start": {
                    "column": 19,
                    "line": 261
                  }
                }
              },
              "range": [
                4216,
                4223
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 261
                },
                "start": {
                  "column": 13,
                  "line": 261
                }
              }
            },
            "range": [
              4029,
              4224
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 261
              },
              "start": {
                "column": 4,
                "line": 253
              }
            }
          },
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
                    4238,
                    4239
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 263
                    },
                    "start": {
                      "column": 8,
                      "line": 263
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  4234,
                  4237
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 263
                  },
                  "start": {
                    "column": 4,
                    "line": 263
                  }
                }
              },
              "optional": false,
              "range": [
                4234,
                4240
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 263
                },
                "start": {
                  "column": 4,
                  "line": 263
                }
              }
            },
            "range": [
              4234,
              4241
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 263
              },
              "start": {
                "column": 4,
                "line": 263
              }
            }
          }
        ],
        "range": [
          4023,
          4243
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 264
          },
          "start": {
            "column": 19,
            "line": 252
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7_c",
        "optional": false,
        "range": [
          4013,
          4019
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 252
          },
          "start": {
            "column": 9,
            "line": 252
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            4020,
            4021
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 252
            },
            "start": {
              "column": 16,
              "line": 252
            }
          }
        }
      ],
      "range": [
        4004,
        4243
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 264
        },
        "start": {
          "column": 0,
          "line": 252
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
                        "name": "x",
                        "optional": false,
                        "range": [
                          4313,
                          4314
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 269
                          },
                          "start": {
                            "column": 14,
                            "line": 269
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "1",
                        "value": 1,
                        "range": [
                          4317,
                          4318
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 269
                          },
                          "start": {
                            "column": 18,
                            "line": 269
                          }
                        }
                      },
                      "range": [
                        4313,
                        4318
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 269
                        },
                        "start": {
                          "column": 14,
                          "line": 269
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    4307,
                    4319
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 269
                    },
                    "start": {
                      "column": 8,
                      "line": 269
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
                          4332,
                          4333
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 270
                          },
                          "start": {
                            "column": 12,
                            "line": 270
                          }
                        }
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "range": [
                          4336,
                          4337
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 270
                          },
                          "start": {
                            "column": 16,
                            "line": 270
                          }
                        }
                      },
                      "range": [
                        4332,
                        4337
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 270
                        },
                        "start": {
                          "column": 12,
                          "line": 270
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    4328,
                    4338
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 270
                    },
                    "start": {
                      "column": 8,
                      "line": 270
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "FunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "range": [
                                  4368,
                                  4369
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 271
                                  },
                                  "start": {
                                    "column": 29,
                                    "line": 271
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  4372,
                                  4373
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 271
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 271
                                  }
                                }
                              },
                              "range": [
                                4368,
                                4373
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 271
                                },
                                "start": {
                                  "column": 29,
                                  "line": 271
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "range": [
                                4376,
                                4377
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 271
                                },
                                "start": {
                                  "column": 37,
                                  "line": 271
                                }
                              }
                            },
                            "range": [
                              4368,
                              4377
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 271
                              },
                              "start": {
                                "column": 29,
                                "line": 271
                              }
                            }
                          },
                          "range": [
                            4361,
                            4377
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 271
                            },
                            "start": {
                              "column": 22,
                              "line": 271
                            }
                          }
                        }
                      ],
                      "range": [
                        4359,
                        4379
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 271
                        },
                        "start": {
                          "column": 20,
                          "line": 271
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      4348,
                      4379
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 271
                      },
                      "start": {
                        "column": 9,
                        "line": 271
                      }
                    }
                  },
                  "range": [
                    4347,
                    4381
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 271
                    },
                    "start": {
                      "column": 8,
                      "line": 271
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "async": false,
                    "body": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            4397,
                            4398
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 272
                            },
                            "start": {
                              "column": 15,
                              "line": 272
                            }
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "range": [
                            4401,
                            4402
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 272
                            },
                            "start": {
                              "column": 19,
                              "line": 272
                            }
                          }
                        },
                        "range": [
                          4397,
                          4402
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 272
                          },
                          "start": {
                            "column": 15,
                            "line": 272
                          }
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "range": [
                          4405,
                          4406
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 272
                          },
                          "start": {
                            "column": 23,
                            "line": 272
                          }
                        }
                      },
                      "range": [
                        4397,
                        4406
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 272
                        },
                        "start": {
                          "column": 15,
                          "line": 272
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      4391,
                      4406
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 272
                      },
                      "start": {
                        "column": 9,
                        "line": 272
                      }
                    }
                  },
                  "range": [
                    4390,
                    4408
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 272
                    },
                    "start": {
                      "column": 8,
                      "line": 272
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
                        "type": "ReturnStatement",
                        "argument": null,
                        "range": [
                          4443,
                          4450
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 274
                          },
                          "start": {
                            "column": 12,
                            "line": 274
                          }
                        }
                      }
                    ],
                    "range": [
                      4429,
                      4460
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 275
                      },
                      "start": {
                        "column": 20,
                        "line": 273
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
                        4421,
                        4422
                      ],
                      "loc": {
                        "end": {
                          "column": 13,
                          "line": 273
                        },
                        "start": {
                          "column": 12,
                          "line": 273
                        }
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        4426,
                        4427
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 273
                        },
                        "start": {
                          "column": 17,
                          "line": 273
                        }
                      }
                    },
                    "range": [
                      4421,
                      4427
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 273
                      },
                      "start": {
                        "column": 12,
                        "line": 273
                      }
                    }
                  },
                  "range": [
                    4417,
                    4460
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 275
                    },
                    "start": {
                      "column": 8,
                      "line": 273
                    }
                  }
                }
              ],
              "range": [
                4297,
                4466
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 276
                },
                "start": {
                  "column": 30,
                  "line": 268
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
                    "name": "y",
                    "optional": false,
                    "range": [
                      4282,
                      4283
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 268
                      },
                      "start": {
                        "column": 15,
                        "line": 268
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "0",
                    "value": 0,
                    "range": [
                      4286,
                      4287
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 268
                      },
                      "start": {
                        "column": 19,
                        "line": 268
                      }
                    }
                  },
                  "range": [
                    4282,
                    4287
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 268
                    },
                    "start": {
                      "column": 15,
                      "line": 268
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                4276,
                4287
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 268
                },
                "start": {
                  "column": 9,
                  "line": 268
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
                  4289,
                  4290
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 268
                  },
                  "start": {
                    "column": 22,
                    "line": 268
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  4293,
                  4294
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 268
                  },
                  "start": {
                    "column": 26,
                    "line": 268
                  }
                }
              },
              "range": [
                4289,
                4294
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 268
                },
                "start": {
                  "column": 22,
                  "line": 268
                }
              }
            },
            "update": null,
            "range": [
              4271,
              4466
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 276
              },
              "start": {
                "column": 4,
                "line": 268
              }
            }
          },
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
                    4480,
                    4481
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 278
                    },
                    "start": {
                      "column": 8,
                      "line": 278
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "range": [
                  4476,
                  4479
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 278
                  },
                  "start": {
                    "column": 4,
                    "line": 278
                  }
                }
              },
              "optional": false,
              "range": [
                4476,
                4482
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 278
                },
                "start": {
                  "column": 4,
                  "line": 278
                }
              }
            },
            "range": [
              4476,
              4483
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 278
              },
              "start": {
                "column": 4,
                "line": 278
              }
            }
          }
        ],
        "range": [
          4265,
          4485
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 279
          },
          "start": {
            "column": 19,
            "line": 267
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8_c",
        "optional": false,
        "range": [
          4255,
          4261
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 267
          },
          "start": {
            "column": 9,
            "line": 267
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            4262,
            4263
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 267
            },
            "start": {
              "column": 16,
              "line": 267
            }
          }
        }
      ],
      "range": [
        4246,
        4485
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 279
        },
        "start": {
          "column": 0,
          "line": 267
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 279
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
