__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    814
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": true,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      94,
                      101
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 5
                      },
                      "start": {
                        "column": 11,
                        "line": 5
                      }
                    }
                  },
                  "range": [
                    87,
                    102
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 5
                    }
                  }
                }
              ],
              "range": [
                81,
                106
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rec1",
                      "optional": false,
                      "range": [
                        64,
                        68
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 3
                        },
                        "start": {
                          "column": 11,
                          "line": 3
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      64,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 3
                      },
                      "start": {
                        "column": 11,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    57,
                    71
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
                }
              ],
              "range": [
                51,
                75
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 4
                },
                "start": {
                  "column": 27,
                  "line": 2
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "range": [
                      30,
                      34
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 2
                      },
                      "start": {
                        "column": 6,
                        "line": 2
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "range": [
                      35,
                      41
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 2
                      },
                      "start": {
                        "column": 11,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    30,
                    41
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 2
                    },
                    "start": {
                      "column": 6,
                      "line": 2
                    }
                  }
                },
                "optional": false,
                "range": [
                  30,
                  43
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 6,
                    "line": 2
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0.5",
                "value": 0.5,
                "range": [
                  46,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 2
                  },
                  "start": {
                    "column": 22,
                    "line": 2
                  }
                }
              },
              "range": [
                30,
                49
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 2
                },
                "start": {
                  "column": 6,
                  "line": 2
                }
              }
            },
            "range": [
              26,
              106
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 6
              },
              "start": {
                "column": 2,
                "line": 2
              }
            }
          }
        ],
        "range": [
          22,
          108
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 22,
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
        "name": "rec1",
        "optional": false,
        "range": [
          15,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
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
        108
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      210,
                      217
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 13
                      },
                      "start": {
                        "column": 11,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    203,
                    218
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 13
                    },
                    "start": {
                      "column": 4,
                      "line": 13
                    }
                  }
                }
              ],
              "range": [
                197,
                222
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 14
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rec2",
                        "optional": false,
                        "range": [
                          180,
                          184
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 11
                          },
                          "start": {
                            "column": 17,
                            "line": 11
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        180,
                        186
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 11
                        },
                        "start": {
                          "column": 17,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      174,
                      186
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 11
                      },
                      "start": {
                        "column": 11,
                        "line": 11
                      }
                    }
                  },
                  "range": [
                    167,
                    187
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 11
                    },
                    "start": {
                      "column": 4,
                      "line": 11
                    }
                  }
                }
              ],
              "range": [
                161,
                191
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 12
                },
                "start": {
                  "column": 27,
                  "line": 10
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "range": [
                      140,
                      144
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 10
                      },
                      "start": {
                        "column": 6,
                        "line": 10
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "range": [
                      145,
                      151
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 10
                      },
                      "start": {
                        "column": 11,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    140,
                    151
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 10
                    },
                    "start": {
                      "column": 6,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "range": [
                  140,
                  153
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 10
                  },
                  "start": {
                    "column": 6,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0.5",
                "value": 0.5,
                "range": [
                  156,
                  159
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 10
                  },
                  "start": {
                    "column": 22,
                    "line": 10
                  }
                }
              },
              "range": [
                140,
                159
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 10
                },
                "start": {
                  "column": 6,
                  "line": 10
                }
              }
            },
            "range": [
              136,
              222
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          }
        ],
        "range": [
          132,
          224
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 22,
            "line": 9
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rec2",
        "optional": false,
        "range": [
          125,
          129
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 9
          },
          "start": {
            "column": 15,
            "line": 9
          }
        }
      },
      "params": [],
      "range": [
        110,
        224
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 9
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "rec3",
                "optional": false,
                "range": [
                  259,
                  263
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 18
                  },
                  "start": {
                    "column": 9,
                    "line": 18
                  }
                }
              },
              "optional": false,
              "range": [
                259,
                265
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 18
                },
                "start": {
                  "column": 9,
                  "line": 18
                }
              }
            },
            "range": [
              252,
              266
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 18
              },
              "start": {
                "column": 2,
                "line": 18
              }
            }
          }
        ],
        "range": [
          248,
          268
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 22,
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
        "name": "rec3",
        "optional": false,
        "range": [
          241,
          245
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 17
          },
          "start": {
            "column": 15,
            "line": 17
          }
        }
      },
      "params": [],
      "range": [
        226,
        268
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 17
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
            "type": "ReturnStatement",
            "argument": {
              "type": "AwaitExpression",
              "argument": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rec4",
                  "optional": false,
                  "range": [
                    309,
                    313
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 22
                    },
                    "start": {
                      "column": 15,
                      "line": 22
                    }
                  }
                },
                "optional": false,
                "range": [
                  309,
                  315
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 22
                  },
                  "start": {
                    "column": 15,
                    "line": 22
                  }
                }
              },
              "range": [
                303,
                315
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 22
                },
                "start": {
                  "column": 9,
                  "line": 22
                }
              }
            },
            "range": [
              296,
              316
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 22
              },
              "start": {
                "column": 2,
                "line": 22
              }
            }
          }
        ],
        "range": [
          292,
          318
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 22,
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
        "name": "rec4",
        "optional": false,
        "range": [
          285,
          289
        ],
        "loc": {
          "end": {
            "column": 19,
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
        270,
        318
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 21
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      418,
                      425
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 29
                      },
                      "start": {
                        "column": 11,
                        "line": 29
                      }
                    }
                  },
                  "range": [
                    411,
                    426
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 29
                    },
                    "start": {
                      "column": 4,
                      "line": 29
                    }
                  }
                }
              ],
              "range": [
                405,
                430
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 30
                },
                "start": {
                  "column": 9,
                  "line": 28
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rec1",
                      "optional": false,
                      "range": [
                        386,
                        390
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 27
                        },
                        "start": {
                          "column": 13,
                          "line": 27
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      386,
                      392
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 27
                      },
                      "start": {
                        "column": 13,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    377,
                    395
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
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
                371,
                399
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 28
                },
                "start": {
                  "column": 27,
                  "line": 26
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "range": [
                      350,
                      354
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 26
                      },
                      "start": {
                        "column": 6,
                        "line": 26
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "range": [
                      355,
                      361
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 26
                      },
                      "start": {
                        "column": 11,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    350,
                    361
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 26
                    },
                    "start": {
                      "column": 6,
                      "line": 26
                    }
                  }
                },
                "optional": false,
                "range": [
                  350,
                  363
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 26
                  },
                  "start": {
                    "column": 6,
                    "line": 26
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0.5",
                "value": 0.5,
                "range": [
                  366,
                  369
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 26
                  },
                  "start": {
                    "column": 22,
                    "line": 26
                  }
                }
              },
              "range": [
                350,
                369
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 26
                },
                "start": {
                  "column": 6,
                  "line": 26
                }
              }
            },
            "range": [
              346,
              430
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 30
              },
              "start": {
                "column": 2,
                "line": 26
              }
            }
          }
        ],
        "range": [
          342,
          432
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 31
          },
          "start": {
            "column": 22,
            "line": 25
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rec5",
        "optional": false,
        "range": [
          335,
          339
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 25
          },
          "start": {
            "column": 15,
            "line": 25
          }
        }
      },
      "params": [],
      "range": [
        320,
        432
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 25
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "\"hello\"",
                    "value": "hello",
                    "range": [
                      538,
                      545
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 37
                      },
                      "start": {
                        "column": 11,
                        "line": 37
                      }
                    }
                  },
                  "range": [
                    531,
                    546
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 37
                    },
                    "start": {
                      "column": 4,
                      "line": 37
                    }
                  }
                }
              ],
              "range": [
                525,
                550
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 38
                },
                "start": {
                  "column": 9,
                  "line": 36
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "rec1",
                        "optional": false,
                        "range": [
                          506,
                          510
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 35
                          },
                          "start": {
                            "column": 19,
                            "line": 35
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        506,
                        512
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 35
                        },
                        "start": {
                          "column": 19,
                          "line": 35
                        }
                      }
                    },
                    "range": [
                      498,
                      514
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 35
                      },
                      "start": {
                        "column": 11,
                        "line": 35
                      }
                    }
                  },
                  "range": [
                    491,
                    515
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 35
                    },
                    "start": {
                      "column": 4,
                      "line": 35
                    }
                  }
                }
              ],
              "range": [
                485,
                519
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 36
                },
                "start": {
                  "column": 27,
                  "line": 34
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "<",
              "left": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "range": [
                      464,
                      468
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 34
                      },
                      "start": {
                        "column": 6,
                        "line": 34
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "range": [
                      469,
                      475
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 34
                      },
                      "start": {
                        "column": 11,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    464,
                    475
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 34
                    },
                    "start": {
                      "column": 6,
                      "line": 34
                    }
                  }
                },
                "optional": false,
                "range": [
                  464,
                  477
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 34
                  },
                  "start": {
                    "column": 6,
                    "line": 34
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0.5",
                "value": 0.5,
                "range": [
                  480,
                  483
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 34
                  },
                  "start": {
                    "column": 22,
                    "line": 34
                  }
                }
              },
              "range": [
                464,
                483
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 34
                },
                "start": {
                  "column": 6,
                  "line": 34
                }
              }
            },
            "range": [
              460,
              550
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 38
              },
              "start": {
                "column": 2,
                "line": 34
              }
            }
          }
        ],
        "range": [
          456,
          552
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 22,
            "line": 33
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "rec6",
        "optional": false,
        "range": [
          449,
          453
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 33
          },
          "start": {
            "column": 15,
            "line": 33
          }
        }
      },
      "params": [],
      "range": [
        434,
        552
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
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
            "name": "ps",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 42,
                  "line": 41
                },
                "start": {
                  "column": 16,
                  "line": 41
                }
              },
              "range": [
                570,
                596
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        579,
                        587
                      ],
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            580,
                            586
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 41
                            },
                            "start": {
                              "column": 26,
                              "line": 41
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 41
                        },
                        "start": {
                          "column": 25,
                          "line": 41
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "range": [
                        572,
                        579
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 41
                        },
                        "start": {
                          "column": 18,
                          "line": 41
                        }
                      }
                    },
                    "range": [
                      572,
                      587
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 41
                      },
                      "start": {
                        "column": 18,
                        "line": 41
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      590,
                      596
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 41
                      },
                      "start": {
                        "column": 36,
                        "line": 41
                      }
                    }
                  }
                ],
                "range": [
                  572,
                  596
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 41
                  },
                  "start": {
                    "column": 18,
                    "line": 41
                  }
                }
              }
            },
            "range": [
              568,
              596
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 41
              },
              "start": {
                "column": 14,
                "line": 41
              }
            }
          },
          "init": null,
          "range": [
            568,
            596
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 41
            },
            "start": {
              "column": 14,
              "line": 41
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        554,
        597
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo1",
                        "optional": false,
                        "range": [
                          695,
                          699
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 47
                          },
                          "start": {
                            "column": 17,
                            "line": 47
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        695,
                        701
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 47
                        },
                        "start": {
                          "column": 17,
                          "line": 47
                        }
                      }
                    },
                    "range": [
                      689,
                      701
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 47
                      },
                      "start": {
                        "column": 11,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    682,
                    702
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 47
                    },
                    "start": {
                      "column": 4,
                      "line": 47
                    }
                  }
                }
              ],
              "range": [
                676,
                706
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 48
                },
                "start": {
                  "column": 9,
                  "line": 46
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ps",
                    "optional": false,
                    "range": [
                      663,
                      665
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 45
                      },
                      "start": {
                        "column": 11,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    656,
                    666
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 45
                    },
                    "start": {
                      "column": 4,
                      "line": 45
                    }
                  }
                }
              ],
              "range": [
                650,
                670
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 46
                },
                "start": {
                  "column": 27,
                  "line": 44
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": ">",
              "left": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "range": [
                      629,
                      633
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 44
                      },
                      "start": {
                        "column": 6,
                        "line": 44
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "range": [
                      634,
                      640
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 44
                      },
                      "start": {
                        "column": 11,
                        "line": 44
                      }
                    }
                  },
                  "range": [
                    629,
                    640
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 44
                    },
                    "start": {
                      "column": 6,
                      "line": 44
                    }
                  }
                },
                "optional": false,
                "range": [
                  629,
                  642
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 44
                  },
                  "start": {
                    "column": 6,
                    "line": 44
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0.5",
                "value": 0.5,
                "range": [
                  645,
                  648
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 44
                  },
                  "start": {
                    "column": 22,
                    "line": 44
                  }
                }
              },
              "range": [
                629,
                648
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 44
                },
                "start": {
                  "column": 6,
                  "line": 44
                }
              }
            },
            "range": [
              625,
              706
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 48
              },
              "start": {
                "column": 2,
                "line": 44
              }
            }
          }
        ],
        "range": [
          621,
          708
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 22,
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
        "name": "foo1",
        "optional": false,
        "range": [
          614,
          618
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 43
          },
          "start": {
            "column": 15,
            "line": 43
          }
        }
      },
      "params": [],
      "range": [
        599,
        708
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 43
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
            "type": "IfStatement",
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "range": [
                        800,
                        804
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 55
                        },
                        "start": {
                          "column": 11,
                          "line": 55
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      800,
                      806
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 55
                      },
                      "start": {
                        "column": 11,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    793,
                    807
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 55
                    },
                    "start": {
                      "column": 4,
                      "line": 55
                    }
                  }
                }
              ],
              "range": [
                787,
                811
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 56
                },
                "start": {
                  "column": 9,
                  "line": 54
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ps",
                    "optional": false,
                    "range": [
                      774,
                      776
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 53
                      },
                      "start": {
                        "column": 11,
                        "line": 53
                      }
                    }
                  },
                  "range": [
                    767,
                    777
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 53
                    },
                    "start": {
                      "column": 4,
                      "line": 53
                    }
                  }
                }
              ],
              "range": [
                761,
                781
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 54
                },
                "start": {
                  "column": 27,
                  "line": 52
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": ">",
              "left": {
                "type": "CallExpression",
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "range": [
                      740,
                      744
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 52
                      },
                      "start": {
                        "column": 6,
                        "line": 52
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "range": [
                      745,
                      751
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 52
                      },
                      "start": {
                        "column": 11,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    740,
                    751
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 52
                    },
                    "start": {
                      "column": 6,
                      "line": 52
                    }
                  }
                },
                "optional": false,
                "range": [
                  740,
                  753
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 52
                  },
                  "start": {
                    "column": 6,
                    "line": 52
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0.5",
                "value": 0.5,
                "range": [
                  756,
                  759
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 52
                  },
                  "start": {
                    "column": 22,
                    "line": 52
                  }
                }
              },
              "range": [
                740,
                759
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 52
                },
                "start": {
                  "column": 6,
                  "line": 52
                }
              }
            },
            "range": [
              736,
              811
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 56
              },
              "start": {
                "column": 2,
                "line": 52
              }
            }
          }
        ],
        "range": [
          732,
          813
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 22,
            "line": 51
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
          725,
          729
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 51
          },
          "start": {
            "column": 15,
            "line": 51
          }
        }
      },
      "params": [],
      "range": [
        710,
        813
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 58
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
