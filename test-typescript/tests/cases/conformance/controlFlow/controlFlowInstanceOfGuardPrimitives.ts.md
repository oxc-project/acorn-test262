__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    433
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "alternate": {
              "type": "IfStatement",
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "raw": "\"Aha!! It's the number \"",
                            "value": "Aha!! It's the number ",
                            "range": [
                              304,
                              328
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 7
                              },
                              "start": {
                                "column": 20,
                                "line": 7
                              }
                            }
                          },
                          "right": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "Literal",
                                "raw": "3",
                                "value": 3,
                                "range": [
                                  349,
                                  350
                                ],
                                "loc": {
                                  "end": {
                                    "column": 66,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 65,
                                    "line": 7
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
                                "name": "thing",
                                "optional": false,
                                "range": [
                                  331,
                                  336
                                ],
                                "loc": {
                                  "end": {
                                    "column": 52,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 47,
                                    "line": 7
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toPrecision",
                                "optional": false,
                                "range": [
                                  337,
                                  348
                                ],
                                "loc": {
                                  "end": {
                                    "column": 64,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 53,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                331,
                                348
                              ],
                              "loc": {
                                "end": {
                                  "column": 64,
                                  "line": 7
                                },
                                "start": {
                                  "column": 47,
                                  "line": 7
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              331,
                              351
                            ],
                            "loc": {
                              "end": {
                                "column": 67,
                                "line": 7
                              },
                              "start": {
                                "column": 47,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            304,
                            351
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 7
                            },
                            "start": {
                              "column": 20,
                              "line": 7
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
                          "name": "console",
                          "optional": false,
                          "range": [
                            292,
                            299
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 7
                            },
                            "start": {
                              "column": 8,
                              "line": 7
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "range": [
                            300,
                            303
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
                          292,
                          303
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        292,
                        352
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      292,
                      353
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
                      }
                    }
                  }
                ],
                "range": [
                  282,
                  359
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 8
                  },
                  "start": {
                    "column": 11,
                    "line": 6
                  }
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "Literal",
                            "raw": "\"Aha!! It's a string of length \"",
                            "value": "Aha!! It's a string of length ",
                            "range": [
                              221,
                              253
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 5
                              },
                              "start": {
                                "column": 20,
                                "line": 5
                              }
                            }
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "range": [
                                256,
                                261
                              ],
                              "loc": {
                                "end": {
                                  "column": 60,
                                  "line": 5
                                },
                                "start": {
                                  "column": 55,
                                  "line": 5
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "range": [
                                262,
                                268
                              ],
                              "loc": {
                                "end": {
                                  "column": 67,
                                  "line": 5
                                },
                                "start": {
                                  "column": 61,
                                  "line": 5
                                }
                              }
                            },
                            "range": [
                              256,
                              268
                            ],
                            "loc": {
                              "end": {
                                "column": 67,
                                "line": 5
                              },
                              "start": {
                                "column": 55,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            221,
                            268
                          ],
                          "loc": {
                            "end": {
                              "column": 67,
                              "line": 5
                            },
                            "start": {
                              "column": 20,
                              "line": 5
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
                          "name": "console",
                          "optional": false,
                          "range": [
                            209,
                            216
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
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "range": [
                            217,
                            220
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 5
                            },
                            "start": {
                              "column": 16,
                              "line": 5
                            }
                          }
                        },
                        "range": [
                          209,
                          220
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        209,
                        269
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      209,
                      270
                    ],
                    "loc": {
                      "end": {
                        "column": 69,
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
                  199,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 42,
                    "line": 4
                  }
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "UnaryExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thing",
                    "optional": false,
                    "range": [
                      179,
                      184
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 4
                      },
                      "start": {
                        "column": 22,
                        "line": 4
                      }
                    }
                  },
                  "operator": "typeof",
                  "prefix": true,
                  "range": [
                    172,
                    184
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 4
                    },
                    "start": {
                      "column": 15,
                      "line": 4
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "'string'",
                  "value": "string",
                  "range": [
                    189,
                    197
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 4
                    },
                    "start": {
                      "column": 32,
                      "line": 4
                    }
                  }
                },
                "range": [
                  172,
                  197
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 4
                  },
                  "start": {
                    "column": 15,
                    "line": 4
                  }
                }
              },
              "range": [
                168,
                359
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 8
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Literal",
                          "raw": "\"Aha!! It's a Date in \"",
                          "value": "Aha!! It's a Date in ",
                          "range": [
                            109,
                            132
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 3
                            },
                            "start": {
                              "column": 20,
                              "line": 3
                            }
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "thing",
                              "optional": false,
                              "range": [
                                135,
                                140
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 3
                                },
                                "start": {
                                  "column": 46,
                                  "line": 3
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getFullYear",
                              "optional": false,
                              "range": [
                                141,
                                152
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 3
                                },
                                "start": {
                                  "column": 52,
                                  "line": 3
                                }
                              }
                            },
                            "range": [
                              135,
                              152
                            ],
                            "loc": {
                              "end": {
                                "column": 63,
                                "line": 3
                              },
                              "start": {
                                "column": 46,
                                "line": 3
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            135,
                            154
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 3
                            },
                            "start": {
                              "column": 46,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          109,
                          154
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 3
                          },
                          "start": {
                            "column": 20,
                            "line": 3
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
                        "name": "console",
                        "optional": false,
                        "range": [
                          97,
                          104
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 3
                          },
                          "start": {
                            "column": 8,
                            "line": 3
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "range": [
                          105,
                          108
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
                      "range": [
                        97,
                        108
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 3
                        },
                        "start": {
                          "column": 8,
                          "line": 3
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      97,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    97,
                    156
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                87,
                162
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 33,
                  "line": 2
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "thing",
                "optional": false,
                "range": [
                  62,
                  67
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
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "range": [
                  79,
                  85
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 2
                  },
                  "start": {
                    "column": 25,
                    "line": 2
                  }
                }
              },
              "range": [
                62,
                85
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 2
                },
                "start": {
                  "column": 8,
                  "line": 2
                }
              }
            },
            "range": [
              58,
              359
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          52,
          361
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 52,
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
        "name": "distinguish",
        "optional": false,
        "range": [
          9,
          20
        ],
        "loc": {
          "end": {
            "column": 20,
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
          "name": "thing",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 1
              },
              "start": {
                "column": 26,
                "line": 1
              }
            },
            "range": [
              26,
              50
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    28,
                    34
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 1
                    },
                    "start": {
                      "column": 28,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    37,
                    43
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 1
                    },
                    "start": {
                      "column": 37,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Date",
                    "optional": false,
                    "range": [
                      46,
                      50
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 1
                      },
                      "start": {
                        "column": 46,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    46,
                    50
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 1
                    },
                    "start": {
                      "column": 46,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                28,
                50
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 1
                },
                "start": {
                  "column": 28,
                  "line": 1
                }
              }
            }
          },
          "range": [
            21,
            50
          ],
          "loc": {
            "end": {
              "column": 50,
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
        361
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
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
        "arguments": [
          {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Date",
              "optional": false,
              "range": [
                379,
                383
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 11
                },
                "start": {
                  "column": 16,
                  "line": 11
                }
              }
            },
            "range": [
              375,
              385
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 11
              },
              "start": {
                "column": 12,
                "line": 11
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "distinguish",
          "optional": false,
          "range": [
            363,
            374
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 11
            },
            "start": {
              "column": 0,
              "line": 11
            }
          }
        },
        "optional": false,
        "range": [
          363,
          386
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 11
          },
          "start": {
            "column": 0,
            "line": 11
          }
        }
      },
      "range": [
        363,
        387
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 11
        },
        "start": {
          "column": 0,
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
            "type": "Literal",
            "raw": "\"beef\"",
            "value": "beef",
            "range": [
              400,
              406
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 12
              },
              "start": {
                "column": 12,
                "line": 12
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "distinguish",
          "optional": false,
          "range": [
            388,
            399
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 12
            },
            "start": {
              "column": 0,
              "line": 12
            }
          }
        },
        "optional": false,
        "range": [
          388,
          407
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 12
          },
          "start": {
            "column": 0,
            "line": 12
          }
        }
      },
      "range": [
        388,
        408
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 12
        },
        "start": {
          "column": 0,
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
            "type": "Literal",
            "raw": "3.14159265",
            "value": 3.14159265,
            "range": [
              421,
              431
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 13
              },
              "start": {
                "column": 12,
                "line": 13
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "distinguish",
          "optional": false,
          "range": [
            409,
            420
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "optional": false,
        "range": [
          409,
          432
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        409,
        433
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 24,
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
