__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2901
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 1,
                  "line": 3
                },
                "start": {
                  "column": 19,
                  "line": 1
                }
              },
              "range": [
                19,
                49
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "range": [
                        27,
                        30
                      ],
                      "loc": {
                        "end": {
                          "column": 7,
                          "line": 2
                        },
                        "start": {
                          "column": 4,
                          "line": 2
                        }
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 2
                            },
                            "start": {
                              "column": 11,
                              "line": 2
                            }
                          },
                          "range": [
                            34,
                            39
                          ],
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "range": [
                              36,
                              39
                            ],
                            "loc": {
                              "end": {
                                "column": 16,
                                "line": 2
                              },
                              "start": {
                                "column": 13,
                                "line": 2
                              }
                            }
                          }
                        },
                        "range": [
                          31,
                          39
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 2
                          },
                          "start": {
                            "column": 8,
                            "line": 2
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 2
                        },
                        "start": {
                          "column": 17,
                          "line": 2
                        }
                      },
                      "range": [
                        40,
                        46
                      ],
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "range": [
                          42,
                          46
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 2
                          },
                          "start": {
                            "column": 19,
                            "line": 2
                          }
                        }
                      }
                    },
                    "static": false,
                    "range": [
                      27,
                      47
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 2
                      },
                      "start": {
                        "column": 4,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  21,
                  49
                ],
                "loc": {
                  "end": {
                    "column": 1,
                    "line": 3
                  },
                  "start": {
                    "column": 21,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              12,
              49
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 3
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
            49
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 3
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        0,
        49
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "range": [
          55,
          60
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "range": [
              64,
              70
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 4
              },
              "start": {
                "column": 14,
                "line": 4
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              72,
              78
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 4
              },
              "start": {
                "column": 22,
                "line": 4
              }
            }
          },
          {
            "type": "TSStringKeyword",
            "range": [
              80,
              86
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 4
              },
              "start": {
                "column": 30,
                "line": 4
              }
            }
          }
        ],
        "range": [
          63,
          87
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 4
          },
          "start": {
            "column": 13,
            "line": 4
          }
        }
      },
      "range": [
        50,
        88
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MultiSkilledRobot",
        "optional": false,
        "range": [
          94,
          111
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "range": [
              115,
              121
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 5
              },
              "start": {
                "column": 26,
                "line": 5
              }
            }
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSStringKeyword",
                "range": [
                  124,
                  130
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 5
                  },
                  "start": {
                    "column": 35,
                    "line": 5
                  }
                }
              },
              {
                "type": "TSStringKeyword",
                "range": [
                  132,
                  138
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 5
                  },
                  "start": {
                    "column": 43,
                    "line": 5
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
                "column": 50,
                "line": 5
              },
              "start": {
                "column": 34,
                "line": 5
              }
            }
          }
        ],
        "range": [
          114,
          140
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 5
          },
          "start": {
            "column": 25,
            "line": 5
          }
        }
      },
      "range": [
        89,
        141
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
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
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 7
                },
                "start": {
                  "column": 10,
                  "line": 7
                }
              },
              "range": [
                153,
                160
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    155,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 7
                    },
                    "start": {
                      "column": 12,
                      "line": 7
                    }
                  }
                },
                "range": [
                  155,
                  160
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 7
                  },
                  "start": {
                    "column": 12,
                    "line": 7
                  }
                }
              }
            },
            "range": [
              147,
              160
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  164,
                  165
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 7
                  },
                  "start": {
                    "column": 21,
                    "line": 7
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"mower\"",
                "value": "mower",
                "range": [
                  167,
                  174
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 7
                  },
                  "start": {
                    "column": 24,
                    "line": 7
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "\"mowing\"",
                "value": "mowing",
                "range": [
                  176,
                  184
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 7
                  },
                  "start": {
                    "column": 33,
                    "line": 7
                  }
                }
              }
            ],
            "range": [
              163,
              185
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 20,
                "line": 7
              }
            }
          },
          "range": [
            147,
            185
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 7
            },
            "start": {
              "column": 4,
              "line": 7
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        143,
        186
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "range": [
                220,
                226
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 9
                },
                "start": {
                  "column": 11,
                  "line": 9
                }
              }
            },
            "range": [
              213,
              227
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          207,
          229
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 20,
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
        "name": "getRobot",
        "optional": false,
        "range": [
          196,
          204
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [],
      "range": [
        187,
        229
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 8
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
            "name": "multiRobotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 12
                },
                "start": {
                  "column": 15,
                  "line": 12
                }
              },
              "range": [
                246,
                265
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "range": [
                    248,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 12
                    },
                    "start": {
                      "column": 17,
                      "line": 12
                    }
                  }
                },
                "range": [
                  248,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 12
                  },
                  "start": {
                    "column": 17,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              235,
              265
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"mower\"",
                "value": "mower",
                "range": [
                  269,
                  276
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 12
                  },
                  "start": {
                    "column": 38,
                    "line": 12
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"mowing\"",
                    "value": "mowing",
                    "range": [
                      279,
                      287
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 12
                      },
                      "start": {
                        "column": 48,
                        "line": 12
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"\"",
                    "value": "",
                    "range": [
                      289,
                      291
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 12
                      },
                      "start": {
                        "column": 58,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  278,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 12
                  },
                  "start": {
                    "column": 47,
                    "line": 12
                  }
                }
              }
            ],
            "range": [
              268,
              293
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 12
              },
              "start": {
                "column": 37,
                "line": 12
              }
            }
          },
          "range": [
            235,
            293
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 12
            },
            "start": {
              "column": 4,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        231,
        294
      ],
      "loc": {
        "end": {
          "column": 63,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "multiRobotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              },
              "range": [
                310,
                329
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "range": [
                    312,
                    329
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 13
                    },
                    "start": {
                      "column": 17,
                      "line": 13
                    }
                  }
                },
                "range": [
                  312,
                  329
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 13
                  },
                  "start": {
                    "column": 17,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              299,
              329
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "raw": "\"trimmer\"",
                "value": "trimmer",
                "range": [
                  333,
                  342
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 13
                  },
                  "start": {
                    "column": 38,
                    "line": 13
                  }
                }
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "\"trimming\"",
                    "value": "trimming",
                    "range": [
                      345,
                      355
                    ],
                    "loc": {
                      "end": {
                        "column": 60,
                        "line": 13
                      },
                      "start": {
                        "column": 50,
                        "line": 13
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"edging\"",
                    "value": "edging",
                    "range": [
                      357,
                      365
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 13
                      },
                      "start": {
                        "column": 62,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  344,
                  366
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 13
                  },
                  "start": {
                    "column": 49,
                    "line": 13
                  }
                }
              }
            ],
            "range": [
              332,
              367
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 13
              },
              "start": {
                "column": 37,
                "line": 13
              }
            }
          },
          "range": [
            299,
            367
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        295,
        368
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "range": [
                407,
                418
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "range": [
              400,
              419
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          }
        ],
        "range": [
          394,
          421
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 16
          },
          "start": {
            "column": 25,
            "line": 14
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getMultiRobot",
        "optional": false,
        "range": [
          378,
          391
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 14
          },
          "start": {
            "column": 9,
            "line": 14
          }
        }
      },
      "params": [],
      "range": [
        369,
        421
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 14
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    489,
                    494
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
                    477,
                    484
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 19
                    },
                    "start": {
                      "column": 4,
                      "line": 19
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
                    485,
                    488
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 19
                    },
                    "start": {
                      "column": 12,
                      "line": 19
                    }
                  }
                },
                "range": [
                  477,
                  488
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 19
                  },
                  "start": {
                    "column": 4,
                    "line": 19
                  }
                }
              },
              "optional": false,
              "range": [
                477,
                495
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 19
                },
                "start": {
                  "column": 4,
                  "line": 19
                }
              }
            },
            "range": [
              477,
              496
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          }
        ],
        "range": [
          471,
          498
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 20
          },
          "start": {
            "column": 48,
            "line": 18
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    435,
                    440
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
                }
              ],
              "optional": false,
              "range": [
                432,
                441
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 18
                },
                "start": {
                  "column": 9,
                  "line": 18
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "range": [
                444,
                450
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 18
                },
                "start": {
                  "column": 21,
                  "line": 18
                }
              }
            },
            "range": [
              432,
              450
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 18
              },
              "start": {
                "column": 9,
                "line": 18
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                452,
                453
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 18
                },
                "start": {
                  "column": 29,
                  "line": 18
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                456,
                457
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 18
                },
                "start": {
                  "column": 33,
                  "line": 18
                }
              }
            },
            "range": [
              452,
              457
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 18
              },
              "start": {
                "column": 29,
                "line": 18
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          428,
          457
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 18
          },
          "start": {
            "column": 5,
            "line": 18
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
            459,
            460
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 18
            },
            "start": {
              "column": 36,
              "line": 18
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            463,
            464
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 18
            },
            "start": {
              "column": 40,
              "line": 18
            }
          }
        },
        "range": [
          459,
          464
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 18
          },
          "start": {
            "column": 36,
            "line": 18
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
            466,
            467
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 18
            },
            "start": {
              "column": 43,
              "line": 18
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          466,
          469
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 18
          },
          "start": {
            "column": 43,
            "line": 18
          }
        }
      },
      "range": [
        423,
        498
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 18
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    569,
                    574
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 22
                    },
                    "start": {
                      "column": 16,
                      "line": 22
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
                    557,
                    564
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 22
                    },
                    "start": {
                      "column": 4,
                      "line": 22
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
                    565,
                    568
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 22
                    },
                    "start": {
                      "column": 12,
                      "line": 22
                    }
                  }
                },
                "range": [
                  557,
                  568
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              "optional": false,
              "range": [
                557,
                575
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "range": [
              557,
              576
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          551,
          578
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 52,
            "line": 21
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    511,
                    516
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 21
                    },
                    "start": {
                      "column": 12,
                      "line": 21
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                508,
                517
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 21
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "range": [
                  520,
                  528
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 21
                  },
                  "start": {
                    "column": 21,
                    "line": 21
                  }
                }
              },
              "optional": false,
              "range": [
                520,
                530
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 21
                },
                "start": {
                  "column": 21,
                  "line": 21
                }
              }
            },
            "range": [
              508,
              530
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 21
              },
              "start": {
                "column": 9,
                "line": 21
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                532,
                533
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 21
                },
                "start": {
                  "column": 33,
                  "line": 21
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                536,
                537
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 21
                },
                "start": {
                  "column": 37,
                  "line": 21
                }
              }
            },
            "range": [
              532,
              537
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 21
              },
              "start": {
                "column": 33,
                "line": 21
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          504,
          537
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 21
          },
          "start": {
            "column": 5,
            "line": 21
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
            539,
            540
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 21
            },
            "start": {
              "column": 40,
              "line": 21
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            543,
            544
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 21
            },
            "start": {
              "column": 44,
              "line": 21
            }
          }
        },
        "range": [
          539,
          544
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 21
          },
          "start": {
            "column": 40,
            "line": 21
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
            546,
            547
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 21
            },
            "start": {
              "column": 47,
              "line": 21
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          546,
          549
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 21
          },
          "start": {
            "column": 47,
            "line": 21
          }
        }
      },
      "range": [
        499,
        578
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
      "type": "ForStatement",
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
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    665,
                    670
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 25
                    },
                    "start": {
                      "column": 16,
                      "line": 25
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
                    653,
                    660
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 25
                    },
                    "start": {
                      "column": 4,
                      "line": 25
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
                    661,
                    664
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 25
                    },
                    "start": {
                      "column": 12,
                      "line": 25
                    }
                  }
                },
                "range": [
                  653,
                  664
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 25
                  },
                  "start": {
                    "column": 4,
                    "line": 25
                  }
                }
              },
              "optional": false,
              "range": [
                653,
                671
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 25
                },
                "start": {
                  "column": 4,
                  "line": 25
                }
              }
            },
            "range": [
              653,
              672
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 25
              },
              "start": {
                "column": 4,
                "line": 25
              }
            }
          }
        ],
        "range": [
          647,
          674
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 68,
            "line": 24
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    591,
                    596
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 24
                    },
                    "start": {
                      "column": 12,
                      "line": 24
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                588,
                597
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    601,
                    602
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 24
                    },
                    "start": {
                      "column": 22,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    604,
                    613
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 24
                    },
                    "start": {
                      "column": 25,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimming\"",
                  "value": "trimming",
                  "range": [
                    615,
                    625
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 24
                    },
                    "start": {
                      "column": 36,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                600,
                626
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 24
                },
                "start": {
                  "column": 21,
                  "line": 24
                }
              }
            },
            "range": [
              588,
              626
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 24
              },
              "start": {
                "column": 9,
                "line": 24
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                628,
                629
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 24
                },
                "start": {
                  "column": 49,
                  "line": 24
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                632,
                633
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 24
                },
                "start": {
                  "column": 53,
                  "line": 24
                }
              }
            },
            "range": [
              628,
              633
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 24
              },
              "start": {
                "column": 49,
                "line": 24
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          584,
          633
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 24
          },
          "start": {
            "column": 5,
            "line": 24
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
            635,
            636
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 24
            },
            "start": {
              "column": 56,
              "line": 24
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            639,
            640
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 24
            },
            "start": {
              "column": 60,
              "line": 24
            }
          }
        },
        "range": [
          635,
          640
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 24
          },
          "start": {
            "column": 56,
            "line": 24
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
            642,
            643
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 24
            },
            "start": {
              "column": 63,
              "line": 24
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          642,
          645
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 24
          },
          "start": {
            "column": 63,
            "line": 24
          }
        }
      },
      "range": [
        579,
        674
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 24
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "range": [
                    773,
                    786
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 28
                    },
                    "start": {
                      "column": 16,
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
                  "name": "console",
                  "optional": false,
                  "range": [
                    761,
                    768
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 28
                    },
                    "start": {
                      "column": 4,
                      "line": 28
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
                    769,
                    772
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 28
                    },
                    "start": {
                      "column": 12,
                      "line": 28
                    }
                  }
                },
                "range": [
                  761,
                  772
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "range": [
                761,
                787
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              761,
              788
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "range": [
          755,
          790
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 80,
            "line": 27
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "range": [
                        688,
                        701
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 27
                        },
                        "start": {
                          "column": 13,
                          "line": 27
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "range": [
                        703,
                        718
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 27
                        },
                        "start": {
                          "column": 28,
                          "line": 27
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    687,
                    719
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 27
                    },
                    "start": {
                      "column": 12,
                      "line": 27
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                684,
                720
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 27
                },
                "start": {
                  "column": 9,
                  "line": 27
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "range": [
                723,
                734
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 27
                },
                "start": {
                  "column": 48,
                  "line": 27
                }
              }
            },
            "range": [
              684,
              734
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 27
              },
              "start": {
                "column": 9,
                "line": 27
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                736,
                737
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 27
                },
                "start": {
                  "column": 61,
                  "line": 27
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                740,
                741
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 27
                },
                "start": {
                  "column": 65,
                  "line": 27
                }
              }
            },
            "range": [
              736,
              741
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 27
              },
              "start": {
                "column": 61,
                "line": 27
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          680,
          741
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 27
          },
          "start": {
            "column": 5,
            "line": 27
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
            743,
            744
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 27
            },
            "start": {
              "column": 68,
              "line": 27
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            747,
            748
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 27
            },
            "start": {
              "column": 72,
              "line": 27
            }
          }
        },
        "range": [
          743,
          748
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 27
          },
          "start": {
            "column": 68,
            "line": 27
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
            750,
            751
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 27
            },
            "start": {
              "column": 75,
              "line": 27
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          750,
          753
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 27
          },
          "start": {
            "column": 75,
            "line": 27
          }
        }
      },
      "range": [
        675,
        790
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 27
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "range": [
                    893,
                    906
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 31
                    },
                    "start": {
                      "column": 16,
                      "line": 31
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
                    881,
                    888
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 31
                    },
                    "start": {
                      "column": 4,
                      "line": 31
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
                    889,
                    892
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 31
                    },
                    "start": {
                      "column": 12,
                      "line": 31
                    }
                  }
                },
                "range": [
                  881,
                  892
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 31
                  },
                  "start": {
                    "column": 4,
                    "line": 31
                  }
                }
              },
              "optional": false,
              "range": [
                881,
                907
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "range": [
              881,
              908
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "range": [
          875,
          910
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 84,
            "line": 30
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "range": [
                        804,
                        817
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 30
                        },
                        "start": {
                          "column": 13,
                          "line": 30
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "range": [
                        819,
                        834
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 30
                        },
                        "start": {
                          "column": 28,
                          "line": 30
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    803,
                    835
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 30
                    },
                    "start": {
                      "column": 12,
                      "line": 30
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                800,
                836
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 30
                },
                "start": {
                  "column": 9,
                  "line": 30
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "range": [
                  839,
                  852
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 30
                  },
                  "start": {
                    "column": 48,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "range": [
                839,
                854
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 30
                },
                "start": {
                  "column": 48,
                  "line": 30
                }
              }
            },
            "range": [
              800,
              854
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 30
              },
              "start": {
                "column": 9,
                "line": 30
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                856,
                857
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 30
                },
                "start": {
                  "column": 65,
                  "line": 30
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                860,
                861
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 30
                },
                "start": {
                  "column": 69,
                  "line": 30
                }
              }
            },
            "range": [
              856,
              861
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 30
              },
              "start": {
                "column": 65,
                "line": 30
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          796,
          861
        ],
        "loc": {
          "end": {
            "column": 70,
            "line": 30
          },
          "start": {
            "column": 5,
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
          "name": "i",
          "optional": false,
          "range": [
            863,
            864
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 30
            },
            "start": {
              "column": 72,
              "line": 30
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            867,
            868
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 30
            },
            "start": {
              "column": 76,
              "line": 30
            }
          }
        },
        "range": [
          863,
          868
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 30
          },
          "start": {
            "column": 72,
            "line": 30
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
            870,
            871
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 30
            },
            "start": {
              "column": 79,
              "line": 30
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          870,
          873
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 30
          },
          "start": {
            "column": 79,
            "line": 30
          }
        }
      },
      "range": [
        791,
        910
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 30
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "primarySkillA",
                  "optional": false,
                  "range": [
                    1033,
                    1046
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 34
                    },
                    "start": {
                      "column": 16,
                      "line": 34
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
                    1021,
                    1028
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 34
                    },
                    "start": {
                      "column": 4,
                      "line": 34
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
                    1029,
                    1032
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 34
                    },
                    "start": {
                      "column": 12,
                      "line": 34
                    }
                  }
                },
                "range": [
                  1021,
                  1032
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "range": [
                1021,
                1047
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "range": [
              1021,
              1048
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          1015,
          1050
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 104,
            "line": 33
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "range": [
                        924,
                        937
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 33
                        },
                        "start": {
                          "column": 13,
                          "line": 33
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "range": [
                        939,
                        954
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 33
                        },
                        "start": {
                          "column": 28,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    923,
                    955
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 33
                    },
                    "start": {
                      "column": 12,
                      "line": 33
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                920,
                956
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 33
                }
              }
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    960,
                    969
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 33
                    },
                    "start": {
                      "column": 49,
                      "line": 33
                    }
                  }
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "\"trimming\"",
                      "value": "trimming",
                      "range": [
                        972,
                        982
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 33
                        },
                        "start": {
                          "column": 61,
                          "line": 33
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"edging\"",
                      "value": "edging",
                      "range": [
                        984,
                        992
                      ],
                      "loc": {
                        "end": {
                          "column": 81,
                          "line": 33
                        },
                        "start": {
                          "column": 73,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "range": [
                    971,
                    993
                  ],
                  "loc": {
                    "end": {
                      "column": 82,
                      "line": 33
                    },
                    "start": {
                      "column": 60,
                      "line": 33
                    }
                  }
                }
              ],
              "range": [
                959,
                994
              ],
              "loc": {
                "end": {
                  "column": 83,
                  "line": 33
                },
                "start": {
                  "column": 48,
                  "line": 33
                }
              }
            },
            "range": [
              920,
              994
            ],
            "loc": {
              "end": {
                "column": 83,
                "line": 33
              },
              "start": {
                "column": 9,
                "line": 33
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                996,
                997
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 33
                },
                "start": {
                  "column": 85,
                  "line": 33
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1000,
                1001
              ],
              "loc": {
                "end": {
                  "column": 90,
                  "line": 33
                },
                "start": {
                  "column": 89,
                  "line": 33
                }
              }
            },
            "range": [
              996,
              1001
            ],
            "loc": {
              "end": {
                "column": 90,
                "line": 33
              },
              "start": {
                "column": 85,
                "line": 33
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          916,
          1001
        ],
        "loc": {
          "end": {
            "column": 90,
            "line": 33
          },
          "start": {
            "column": 5,
            "line": 33
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
            1003,
            1004
          ],
          "loc": {
            "end": {
              "column": 93,
              "line": 33
            },
            "start": {
              "column": 92,
              "line": 33
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1007,
            1008
          ],
          "loc": {
            "end": {
              "column": 97,
              "line": 33
            },
            "start": {
              "column": 96,
              "line": 33
            }
          }
        },
        "range": [
          1003,
          1008
        ],
        "loc": {
          "end": {
            "column": 97,
            "line": 33
          },
          "start": {
            "column": 92,
            "line": 33
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
            1010,
            1011
          ],
          "loc": {
            "end": {
              "column": 100,
              "line": 33
            },
            "start": {
              "column": 99,
              "line": 33
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1010,
          1013
        ],
        "loc": {
          "end": {
            "column": 102,
            "line": 33
          },
          "start": {
            "column": 99,
            "line": 33
          }
        }
      },
      "range": [
        911,
        1050
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 33
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1118,
                    1125
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 38
                    },
                    "start": {
                      "column": 16,
                      "line": 38
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
                    1106,
                    1113
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 38
                    },
                    "start": {
                      "column": 4,
                      "line": 38
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
                    1114,
                    1117
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 38
                    },
                    "start": {
                      "column": 12,
                      "line": 38
                    }
                  }
                },
                "range": [
                  1106,
                  1117
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 38
                  },
                  "start": {
                    "column": 4,
                    "line": 38
                  }
                }
              },
              "optional": false,
              "range": [
                1106,
                1126
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "range": [
              1106,
              1127
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          1100,
          1129
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 48,
            "line": 37
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1062,
                    1069
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 37
                    },
                    "start": {
                      "column": 10,
                      "line": 37
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1061,
                1070
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 37
                },
                "start": {
                  "column": 9,
                  "line": 37
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "range": [
                1073,
                1079
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 37
                },
                "start": {
                  "column": 21,
                  "line": 37
                }
              }
            },
            "range": [
              1061,
              1079
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 37
              },
              "start": {
                "column": 9,
                "line": 37
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1081,
                1082
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 37
                },
                "start": {
                  "column": 29,
                  "line": 37
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1085,
                1086
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 37
                },
                "start": {
                  "column": 33,
                  "line": 37
                }
              }
            },
            "range": [
              1081,
              1086
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 37
              },
              "start": {
                "column": 29,
                "line": 37
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1057,
          1086
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 37
          },
          "start": {
            "column": 5,
            "line": 37
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
            1088,
            1089
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 37
            },
            "start": {
              "column": 36,
              "line": 37
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1092,
            1093
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 37
            },
            "start": {
              "column": 40,
              "line": 37
            }
          }
        },
        "range": [
          1088,
          1093
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 37
          },
          "start": {
            "column": 36,
            "line": 37
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
            1095,
            1096
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
        "operator": "++",
        "prefix": false,
        "range": [
          1095,
          1098
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 37
          },
          "start": {
            "column": 43,
            "line": 37
          }
        }
      },
      "range": [
        1052,
        1129
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 37
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1200,
                    1207
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 41
                    },
                    "start": {
                      "column": 16,
                      "line": 41
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
                    1188,
                    1195
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 41
                    },
                    "start": {
                      "column": 4,
                      "line": 41
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
                    1196,
                    1199
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 41
                    },
                    "start": {
                      "column": 12,
                      "line": 41
                    }
                  }
                },
                "range": [
                  1188,
                  1199
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 41
                  },
                  "start": {
                    "column": 4,
                    "line": 41
                  }
                }
              },
              "optional": false,
              "range": [
                1188,
                1208
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 41
                }
              }
            },
            "range": [
              1188,
              1209
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          }
        ],
        "range": [
          1182,
          1211
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 42
          },
          "start": {
            "column": 52,
            "line": 40
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1140,
                    1147
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 40
                    },
                    "start": {
                      "column": 10,
                      "line": 40
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1139,
                1148
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 40
                },
                "start": {
                  "column": 9,
                  "line": 40
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "range": [
                  1151,
                  1159
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 40
                  },
                  "start": {
                    "column": 21,
                    "line": 40
                  }
                }
              },
              "optional": false,
              "range": [
                1151,
                1161
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 40
                },
                "start": {
                  "column": 21,
                  "line": 40
                }
              }
            },
            "range": [
              1139,
              1161
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 40
              },
              "start": {
                "column": 9,
                "line": 40
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1163,
                1164
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 40
                },
                "start": {
                  "column": 33,
                  "line": 40
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1167,
                1168
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 40
                },
                "start": {
                  "column": 37,
                  "line": 40
                }
              }
            },
            "range": [
              1163,
              1168
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 40
              },
              "start": {
                "column": 33,
                "line": 40
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1135,
          1168
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 40
          },
          "start": {
            "column": 5,
            "line": 40
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
            1170,
            1171
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 40
            },
            "start": {
              "column": 40,
              "line": 40
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1174,
            1175
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 40
            },
            "start": {
              "column": 44,
              "line": 40
            }
          }
        },
        "range": [
          1170,
          1175
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 40
          },
          "start": {
            "column": 40,
            "line": 40
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
            1177,
            1178
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 40
            },
            "start": {
              "column": 47,
              "line": 40
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1177,
          1180
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 40
          },
          "start": {
            "column": 47,
            "line": 40
          }
        }
      },
      "range": [
        1130,
        1211
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 40
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1298,
                    1305
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 44
                    },
                    "start": {
                      "column": 16,
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
                  "name": "console",
                  "optional": false,
                  "range": [
                    1286,
                    1293
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 44
                    },
                    "start": {
                      "column": 4,
                      "line": 44
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
                    1294,
                    1297
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 44
                    },
                    "start": {
                      "column": 12,
                      "line": 44
                    }
                  }
                },
                "range": [
                  1286,
                  1297
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 44
                  },
                  "start": {
                    "column": 4,
                    "line": 44
                  }
                }
              },
              "optional": false,
              "range": [
                1286,
                1306
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "range": [
              1286,
              1307
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 44
              }
            }
          }
        ],
        "range": [
          1280,
          1309
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 68,
            "line": 43
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1222,
                    1229
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 43
                    },
                    "start": {
                      "column": 10,
                      "line": 43
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1221,
                1230
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 43
                },
                "start": {
                  "column": 9,
                  "line": 43
                }
              }
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    1234,
                    1235
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 43
                    },
                    "start": {
                      "column": 22,
                      "line": 43
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    1237,
                    1246
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 43
                    },
                    "start": {
                      "column": 25,
                      "line": 43
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimming\"",
                  "value": "trimming",
                  "range": [
                    1248,
                    1258
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 43
                    },
                    "start": {
                      "column": 36,
                      "line": 43
                    }
                  }
                }
              ],
              "range": [
                1233,
                1259
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 43
                },
                "start": {
                  "column": 21,
                  "line": 43
                }
              }
            },
            "range": [
              1221,
              1259
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 43
              },
              "start": {
                "column": 9,
                "line": 43
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1261,
                1262
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 43
                },
                "start": {
                  "column": 49,
                  "line": 43
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1265,
                1266
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 43
                },
                "start": {
                  "column": 53,
                  "line": 43
                }
              }
            },
            "range": [
              1261,
              1266
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 43
              },
              "start": {
                "column": 49,
                "line": 43
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1217,
          1266
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 43
          },
          "start": {
            "column": 5,
            "line": 43
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
            1268,
            1269
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 43
            },
            "start": {
              "column": 56,
              "line": 43
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1272,
            1273
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 43
            },
            "start": {
              "column": 60,
              "line": 43
            }
          }
        },
        "range": [
          1268,
          1273
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 43
          },
          "start": {
            "column": 56,
            "line": 43
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
            1275,
            1276
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 43
            },
            "start": {
              "column": 63,
              "line": 43
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1275,
          1278
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 43
          },
          "start": {
            "column": 63,
            "line": 43
          }
        }
      },
      "range": [
        1212,
        1309
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 43
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1379,
                    1384
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 47
                    },
                    "start": {
                      "column": 16,
                      "line": 47
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
                    1367,
                    1374
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 47
                    },
                    "start": {
                      "column": 4,
                      "line": 47
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
                    1375,
                    1378
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 47
                    },
                    "start": {
                      "column": 12,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1367,
                  1378
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 47
                  },
                  "start": {
                    "column": 4,
                    "line": 47
                  }
                }
              },
              "optional": false,
              "range": [
                1367,
                1385
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "range": [
              1367,
              1386
            ],
            "loc": {
              "end": {
                "column": 23,
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
          1361,
          1388
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 51,
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1320,
                    1325
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 46
                    },
                    "start": {
                      "column": 10,
                      "line": 46
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1319,
                1326
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
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "range": [
                1329,
                1340
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 46
                },
                "start": {
                  "column": 19,
                  "line": 46
                }
              }
            },
            "range": [
              1319,
              1340
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 46
              },
              "start": {
                "column": 9,
                "line": 46
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1342,
                1343
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 46
                },
                "start": {
                  "column": 32,
                  "line": 46
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1346,
                1347
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 46
                },
                "start": {
                  "column": 36,
                  "line": 46
                }
              }
            },
            "range": [
              1342,
              1347
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 46
              },
              "start": {
                "column": 32,
                "line": 46
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1315,
          1347
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 46
          },
          "start": {
            "column": 5,
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
          "name": "i",
          "optional": false,
          "range": [
            1349,
            1350
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 46
            },
            "start": {
              "column": 39,
              "line": 46
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1353,
            1354
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 46
            },
            "start": {
              "column": 43,
              "line": 46
            }
          }
        },
        "range": [
          1349,
          1354
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 46
          },
          "start": {
            "column": 39,
            "line": 46
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
            1356,
            1357
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 46
            },
            "start": {
              "column": 46,
              "line": 46
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1356,
          1359
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 46
          },
          "start": {
            "column": 46,
            "line": 46
          }
        }
      },
      "range": [
        1310,
        1388
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 48
        },
        "start": {
          "column": 0,
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1462,
                    1467
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 50
                    },
                    "start": {
                      "column": 16,
                      "line": 50
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
                    1450,
                    1457
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 50
                    },
                    "start": {
                      "column": 4,
                      "line": 50
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
                    1458,
                    1461
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 50
                    },
                    "start": {
                      "column": 12,
                      "line": 50
                    }
                  }
                },
                "range": [
                  1450,
                  1461
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 50
                  },
                  "start": {
                    "column": 4,
                    "line": 50
                  }
                }
              },
              "optional": false,
              "range": [
                1450,
                1468
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
                }
              }
            },
            "range": [
              1450,
              1469
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 50
              },
              "start": {
                "column": 4,
                "line": 50
              }
            }
          }
        ],
        "range": [
          1444,
          1471
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 55,
            "line": 49
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1399,
                    1404
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 49
                    },
                    "start": {
                      "column": 10,
                      "line": 49
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1398,
                1405
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 49
                },
                "start": {
                  "column": 9,
                  "line": 49
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "range": [
                  1408,
                  1421
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 49
                  },
                  "start": {
                    "column": 19,
                    "line": 49
                  }
                }
              },
              "optional": false,
              "range": [
                1408,
                1423
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 49
                },
                "start": {
                  "column": 19,
                  "line": 49
                }
              }
            },
            "range": [
              1398,
              1423
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 49
              },
              "start": {
                "column": 9,
                "line": 49
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1425,
                1426
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 49
                },
                "start": {
                  "column": 36,
                  "line": 49
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1429,
                1430
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 49
                },
                "start": {
                  "column": 40,
                  "line": 49
                }
              }
            },
            "range": [
              1425,
              1430
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 49
              },
              "start": {
                "column": 36,
                "line": 49
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1394,
          1430
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 49
          },
          "start": {
            "column": 5,
            "line": 49
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
            1432,
            1433
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 49
            },
            "start": {
              "column": 43,
              "line": 49
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1436,
            1437
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 49
            },
            "start": {
              "column": 47,
              "line": 49
            }
          }
        },
        "range": [
          1432,
          1437
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 49
          },
          "start": {
            "column": 43,
            "line": 49
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
            1439,
            1440
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 49
            },
            "start": {
              "column": 50,
              "line": 49
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1439,
          1442
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 49
          },
          "start": {
            "column": 50,
            "line": 49
          }
        }
      },
      "range": [
        1389,
        1471
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 51
        },
        "start": {
          "column": 0,
          "line": 49
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1565,
                    1570
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 53
                    },
                    "start": {
                      "column": 16,
                      "line": 53
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
                    1553,
                    1560
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 53
                    },
                    "start": {
                      "column": 4,
                      "line": 53
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
                    1561,
                    1564
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 53
                    },
                    "start": {
                      "column": 12,
                      "line": 53
                    }
                  }
                },
                "range": [
                  1553,
                  1564
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 53
                  },
                  "start": {
                    "column": 4,
                    "line": 53
                  }
                }
              },
              "optional": false,
              "range": [
                1553,
                1571
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
                }
              }
            },
            "range": [
              1553,
              1572
            ],
            "loc": {
              "end": {
                "column": 23,
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
          1547,
          1574
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 75,
            "line": 52
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1482,
                    1487
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 52
                    },
                    "start": {
                      "column": 10,
                      "line": 52
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1481,
                1488
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 52
                },
                "start": {
                  "column": 9,
                  "line": 52
                }
              }
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    1492,
                    1501
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 52
                    },
                    "start": {
                      "column": 20,
                      "line": 52
                    }
                  }
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "\"trimming\"",
                      "value": "trimming",
                      "range": [
                        1504,
                        1514
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 52
                        },
                        "start": {
                          "column": 32,
                          "line": 52
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"edging\"",
                      "value": "edging",
                      "range": [
                        1516,
                        1524
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 52
                        },
                        "start": {
                          "column": 44,
                          "line": 52
                        }
                      }
                    }
                  ],
                  "range": [
                    1503,
                    1525
                  ],
                  "loc": {
                    "end": {
                      "column": 53,
                      "line": 52
                    },
                    "start": {
                      "column": 31,
                      "line": 52
                    }
                  }
                }
              ],
              "range": [
                1491,
                1526
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 52
                },
                "start": {
                  "column": 19,
                  "line": 52
                }
              }
            },
            "range": [
              1481,
              1526
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 52
              },
              "start": {
                "column": 9,
                "line": 52
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1528,
                1529
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 52
                },
                "start": {
                  "column": 56,
                  "line": 52
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1532,
                1533
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 52
                },
                "start": {
                  "column": 60,
                  "line": 52
                }
              }
            },
            "range": [
              1528,
              1533
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 52
              },
              "start": {
                "column": 56,
                "line": 52
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1477,
          1533
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 52
          },
          "start": {
            "column": 5,
            "line": 52
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
            1535,
            1536
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 52
            },
            "start": {
              "column": 63,
              "line": 52
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1539,
            1540
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 52
            },
            "start": {
              "column": 67,
              "line": 52
            }
          }
        },
        "range": [
          1535,
          1540
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 52
          },
          "start": {
            "column": 63,
            "line": 52
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
            1542,
            1543
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 52
            },
            "start": {
              "column": 70,
              "line": 52
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1542,
          1545
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 52
          },
          "start": {
            "column": 70,
            "line": 52
          }
        }
      },
      "range": [
        1472,
        1574
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 52
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    1660,
                    1666
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 57
                    },
                    "start": {
                      "column": 16,
                      "line": 57
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
                    1648,
                    1655
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 57
                    },
                    "start": {
                      "column": 4,
                      "line": 57
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
                    1656,
                    1659
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 57
                    },
                    "start": {
                      "column": 12,
                      "line": 57
                    }
                  }
                },
                "range": [
                  1648,
                  1659
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 57
                  },
                  "start": {
                    "column": 4,
                    "line": 57
                  }
                }
              },
              "optional": false,
              "range": [
                1648,
                1667
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 57
                },
                "start": {
                  "column": 4,
                  "line": 57
                }
              }
            },
            "range": [
              1648,
              1668
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 57
              },
              "start": {
                "column": 4,
                "line": 57
              }
            }
          }
        ],
        "range": [
          1642,
          1670
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 58
          },
          "start": {
            "column": 66,
            "line": 56
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "range": [
                    1586,
                    1594
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 56
                    },
                    "start": {
                      "column": 10,
                      "line": 56
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    1596,
                    1602
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 56
                    },
                    "start": {
                      "column": 20,
                      "line": 56
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "range": [
                    1604,
                    1611
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 56
                    },
                    "start": {
                      "column": 28,
                      "line": 56
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1585,
                1612
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 56
                },
                "start": {
                  "column": 9,
                  "line": 56
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "range": [
                1615,
                1621
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 56
                },
                "start": {
                  "column": 39,
                  "line": 56
                }
              }
            },
            "range": [
              1585,
              1621
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 56
              },
              "start": {
                "column": 9,
                "line": 56
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1623,
                1624
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 56
                },
                "start": {
                  "column": 47,
                  "line": 56
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1627,
                1628
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 56
                },
                "start": {
                  "column": 51,
                  "line": 56
                }
              }
            },
            "range": [
              1623,
              1628
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 56
              },
              "start": {
                "column": 47,
                "line": 56
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1581,
          1628
        ],
        "loc": {
          "end": {
            "column": 52,
            "line": 56
          },
          "start": {
            "column": 5,
            "line": 56
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
            1630,
            1631
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 56
            },
            "start": {
              "column": 54,
              "line": 56
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1634,
            1635
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 56
            },
            "start": {
              "column": 58,
              "line": 56
            }
          }
        },
        "range": [
          1630,
          1635
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 56
          },
          "start": {
            "column": 54,
            "line": 56
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
            1637,
            1638
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 56
            },
            "start": {
              "column": 61,
              "line": 56
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1637,
          1640
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 56
          },
          "start": {
            "column": 61,
            "line": 56
          }
        }
      },
      "range": [
        1576,
        1670
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 56
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    1759,
                    1765
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 60
                    },
                    "start": {
                      "column": 16,
                      "line": 60
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
                    1747,
                    1754
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 60
                    },
                    "start": {
                      "column": 4,
                      "line": 60
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
                    1755,
                    1758
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 60
                    },
                    "start": {
                      "column": 12,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1747,
                  1758
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 60
                  },
                  "start": {
                    "column": 4,
                    "line": 60
                  }
                }
              },
              "optional": false,
              "range": [
                1747,
                1766
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 60
                },
                "start": {
                  "column": 4,
                  "line": 60
                }
              }
            },
            "range": [
              1747,
              1767
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          }
        ],
        "range": [
          1741,
          1769
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 70,
            "line": 59
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "range": [
                    1681,
                    1689
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 59
                    },
                    "start": {
                      "column": 10,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    1691,
                    1697
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 59
                    },
                    "start": {
                      "column": 20,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "range": [
                    1699,
                    1706
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 59
                    },
                    "start": {
                      "column": 28,
                      "line": 59
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1680,
                1707
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 59
                },
                "start": {
                  "column": 9,
                  "line": 59
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "range": [
                  1710,
                  1718
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 59
                  },
                  "start": {
                    "column": 39,
                    "line": 59
                  }
                }
              },
              "optional": false,
              "range": [
                1710,
                1720
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 59
                },
                "start": {
                  "column": 39,
                  "line": 59
                }
              }
            },
            "range": [
              1680,
              1720
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 59
              },
              "start": {
                "column": 9,
                "line": 59
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1722,
                1723
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 59
                },
                "start": {
                  "column": 51,
                  "line": 59
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1726,
                1727
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 59
                },
                "start": {
                  "column": 55,
                  "line": 59
                }
              }
            },
            "range": [
              1722,
              1727
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 59
              },
              "start": {
                "column": 51,
                "line": 59
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1676,
          1727
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 59
          },
          "start": {
            "column": 5,
            "line": 59
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
            1729,
            1730
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 59
            },
            "start": {
              "column": 58,
              "line": 59
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1733,
            1734
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 59
            },
            "start": {
              "column": 62,
              "line": 59
            }
          }
        },
        "range": [
          1729,
          1734
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 59
          },
          "start": {
            "column": 58,
            "line": 59
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
            1736,
            1737
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 59
            },
            "start": {
              "column": 65,
              "line": 59
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1736,
          1739
        ],
        "loc": {
          "end": {
            "column": 68,
            "line": 59
          },
          "start": {
            "column": 65,
            "line": 59
          }
        }
      },
      "range": [
        1671,
        1769
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 59
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    1874,
                    1880
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 63
                    },
                    "start": {
                      "column": 16,
                      "line": 63
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
                    1862,
                    1869
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 63
                    },
                    "start": {
                      "column": 4,
                      "line": 63
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
                    1870,
                    1873
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 63
                    },
                    "start": {
                      "column": 12,
                      "line": 63
                    }
                  }
                },
                "range": [
                  1862,
                  1873
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 63
                  },
                  "start": {
                    "column": 4,
                    "line": 63
                  }
                }
              },
              "optional": false,
              "range": [
                1862,
                1881
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 63
                },
                "start": {
                  "column": 4,
                  "line": 63
                }
              }
            },
            "range": [
              1862,
              1882
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          }
        ],
        "range": [
          1856,
          1884
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 64
          },
          "start": {
            "column": 86,
            "line": 62
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "range": [
                    1780,
                    1788
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 62
                    },
                    "start": {
                      "column": 10,
                      "line": 62
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    1790,
                    1796
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 62
                    },
                    "start": {
                      "column": 20,
                      "line": 62
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "range": [
                    1798,
                    1805
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 62
                    },
                    "start": {
                      "column": 28,
                      "line": 62
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1779,
                1806
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 62
                },
                "start": {
                  "column": 9,
                  "line": 62
                }
              }
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    1810,
                    1811
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 62
                    },
                    "start": {
                      "column": 40,
                      "line": 62
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    1813,
                    1822
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 62
                    },
                    "start": {
                      "column": 43,
                      "line": 62
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimming\"",
                  "value": "trimming",
                  "range": [
                    1824,
                    1834
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 62
                    },
                    "start": {
                      "column": 54,
                      "line": 62
                    }
                  }
                }
              ],
              "range": [
                1809,
                1835
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 62
                },
                "start": {
                  "column": 39,
                  "line": 62
                }
              }
            },
            "range": [
              1779,
              1835
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 62
              },
              "start": {
                "column": 9,
                "line": 62
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1837,
                1838
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 62
                },
                "start": {
                  "column": 67,
                  "line": 62
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1841,
                1842
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 62
                },
                "start": {
                  "column": 71,
                  "line": 62
                }
              }
            },
            "range": [
              1837,
              1842
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 62
              },
              "start": {
                "column": 67,
                "line": 62
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1775,
          1842
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 62
          },
          "start": {
            "column": 5,
            "line": 62
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
            1844,
            1845
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 62
            },
            "start": {
              "column": 74,
              "line": 62
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1848,
            1849
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 62
            },
            "start": {
              "column": 78,
              "line": 62
            }
          }
        },
        "range": [
          1844,
          1849
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 62
          },
          "start": {
            "column": 74,
            "line": 62
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
            1851,
            1852
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 62
            },
            "start": {
              "column": 81,
              "line": 62
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1851,
          1854
        ],
        "loc": {
          "end": {
            "column": 84,
            "line": 62
          },
          "start": {
            "column": 81,
            "line": 62
          }
        }
      },
      "range": [
        1770,
        1884
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 62
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    1989,
                    1995
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 66
                    },
                    "start": {
                      "column": 16,
                      "line": 66
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
                    1977,
                    1984
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 66
                    },
                    "start": {
                      "column": 4,
                      "line": 66
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
                    1985,
                    1988
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 66
                    },
                    "start": {
                      "column": 12,
                      "line": 66
                    }
                  }
                },
                "range": [
                  1977,
                  1988
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 66
                  },
                  "start": {
                    "column": 4,
                    "line": 66
                  }
                }
              },
              "optional": false,
              "range": [
                1977,
                1996
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 66
                },
                "start": {
                  "column": 4,
                  "line": 66
                }
              }
            },
            "range": [
              1977,
              1997
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 66
              },
              "start": {
                "column": 4,
                "line": 66
              }
            }
          }
        ],
        "range": [
          1971,
          1999
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 86,
            "line": 65
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    1895,
                    1901
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 65
                    },
                    "start": {
                      "column": 10,
                      "line": 65
                    }
                  }
                },
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "range": [
                        1904,
                        1917
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 65
                        },
                        "start": {
                          "column": 19,
                          "line": 65
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "range": [
                        1919,
                        1934
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 65
                        },
                        "start": {
                          "column": 34,
                          "line": 65
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    1903,
                    1935
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 65
                    },
                    "start": {
                      "column": 18,
                      "line": 65
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1894,
                1936
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 65
                },
                "start": {
                  "column": 9,
                  "line": 65
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "range": [
                1939,
                1950
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 65
                },
                "start": {
                  "column": 54,
                  "line": 65
                }
              }
            },
            "range": [
              1894,
              1950
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 65
              },
              "start": {
                "column": 9,
                "line": 65
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1952,
                1953
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 65
                },
                "start": {
                  "column": 67,
                  "line": 65
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1956,
                1957
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 65
                },
                "start": {
                  "column": 71,
                  "line": 65
                }
              }
            },
            "range": [
              1952,
              1957
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 65
              },
              "start": {
                "column": 67,
                "line": 65
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1890,
          1957
        ],
        "loc": {
          "end": {
            "column": 72,
            "line": 65
          },
          "start": {
            "column": 5,
            "line": 65
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
            1959,
            1960
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 65
            },
            "start": {
              "column": 74,
              "line": 65
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1963,
            1964
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 65
            },
            "start": {
              "column": 78,
              "line": 65
            }
          }
        },
        "range": [
          1959,
          1964
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 65
          },
          "start": {
            "column": 74,
            "line": 65
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
            1966,
            1967
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 65
            },
            "start": {
              "column": 81,
              "line": 65
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1966,
          1969
        ],
        "loc": {
          "end": {
            "column": 84,
            "line": 65
          },
          "start": {
            "column": 81,
            "line": 65
          }
        }
      },
      "range": [
        1885,
        1999
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 65
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    2108,
                    2114
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 69
                    },
                    "start": {
                      "column": 16,
                      "line": 69
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
                    2096,
                    2103
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 69
                    },
                    "start": {
                      "column": 4,
                      "line": 69
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
                    2104,
                    2107
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 69
                    },
                    "start": {
                      "column": 12,
                      "line": 69
                    }
                  }
                },
                "range": [
                  2096,
                  2107
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 69
                  },
                  "start": {
                    "column": 4,
                    "line": 69
                  }
                }
              },
              "optional": false,
              "range": [
                2096,
                2115
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 69
                },
                "start": {
                  "column": 4,
                  "line": 69
                }
              }
            },
            "range": [
              2096,
              2116
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          }
        ],
        "range": [
          2090,
          2118
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 90,
            "line": 68
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    2010,
                    2016
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 68
                    },
                    "start": {
                      "column": 10,
                      "line": 68
                    }
                  }
                },
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "range": [
                        2019,
                        2032
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 68
                        },
                        "start": {
                          "column": 19,
                          "line": 68
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "range": [
                        2034,
                        2049
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 68
                        },
                        "start": {
                          "column": 34,
                          "line": 68
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    2018,
                    2050
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 68
                    },
                    "start": {
                      "column": 18,
                      "line": 68
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2009,
                2051
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 68
                },
                "start": {
                  "column": 9,
                  "line": 68
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "range": [
                  2054,
                  2067
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 68
                  },
                  "start": {
                    "column": 54,
                    "line": 68
                  }
                }
              },
              "optional": false,
              "range": [
                2054,
                2069
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 68
                },
                "start": {
                  "column": 54,
                  "line": 68
                }
              }
            },
            "range": [
              2009,
              2069
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 68
              },
              "start": {
                "column": 9,
                "line": 68
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                2071,
                2072
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 68
                },
                "start": {
                  "column": 71,
                  "line": 68
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2075,
                2076
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 68
                },
                "start": {
                  "column": 75,
                  "line": 68
                }
              }
            },
            "range": [
              2071,
              2076
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 68
              },
              "start": {
                "column": 71,
                "line": 68
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2005,
          2076
        ],
        "loc": {
          "end": {
            "column": 76,
            "line": 68
          },
          "start": {
            "column": 5,
            "line": 68
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
            2078,
            2079
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 68
            },
            "start": {
              "column": 78,
              "line": 68
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2082,
            2083
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 68
            },
            "start": {
              "column": 82,
              "line": 68
            }
          }
        },
        "range": [
          2078,
          2083
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 68
          },
          "start": {
            "column": 78,
            "line": 68
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
            2085,
            2086
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 68
            },
            "start": {
              "column": 85,
              "line": 68
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2085,
          2088
        ],
        "loc": {
          "end": {
            "column": 88,
            "line": 68
          },
          "start": {
            "column": 85,
            "line": 68
          }
        }
      },
      "range": [
        2000,
        2118
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 68
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    2247,
                    2253
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 72
                    },
                    "start": {
                      "column": 16,
                      "line": 72
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
                    2235,
                    2242
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 72
                    },
                    "start": {
                      "column": 4,
                      "line": 72
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
                    2243,
                    2246
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 72
                    },
                    "start": {
                      "column": 12,
                      "line": 72
                    }
                  }
                },
                "range": [
                  2235,
                  2246
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 72
                  },
                  "start": {
                    "column": 4,
                    "line": 72
                  }
                }
              },
              "optional": false,
              "range": [
                2235,
                2254
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 72
                },
                "start": {
                  "column": 4,
                  "line": 72
                }
              }
            },
            "range": [
              2235,
              2255
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 72
              },
              "start": {
                "column": 4,
                "line": 72
              }
            }
          }
        ],
        "range": [
          2229,
          2257
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 73
          },
          "start": {
            "column": 110,
            "line": 71
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    2129,
                    2135
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 71
                    },
                    "start": {
                      "column": 10,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "range": [
                        2138,
                        2151
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 71
                        },
                        "start": {
                          "column": 19,
                          "line": 71
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "range": [
                        2153,
                        2168
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 71
                        },
                        "start": {
                          "column": 34,
                          "line": 71
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    2137,
                    2169
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 71
                    },
                    "start": {
                      "column": 18,
                      "line": 71
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2128,
                2170
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 71
                },
                "start": {
                  "column": 9,
                  "line": 71
                }
              }
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    2174,
                    2183
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 71
                    },
                    "start": {
                      "column": 55,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "\"trimming\"",
                      "value": "trimming",
                      "range": [
                        2186,
                        2196
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 71
                        },
                        "start": {
                          "column": 67,
                          "line": 71
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"edging\"",
                      "value": "edging",
                      "range": [
                        2198,
                        2206
                      ],
                      "loc": {
                        "end": {
                          "column": 87,
                          "line": 71
                        },
                        "start": {
                          "column": 79,
                          "line": 71
                        }
                      }
                    }
                  ],
                  "range": [
                    2185,
                    2207
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 71
                    },
                    "start": {
                      "column": 66,
                      "line": 71
                    }
                  }
                }
              ],
              "range": [
                2173,
                2208
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 71
                },
                "start": {
                  "column": 54,
                  "line": 71
                }
              }
            },
            "range": [
              2128,
              2208
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 71
              },
              "start": {
                "column": 9,
                "line": 71
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                2210,
                2211
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 71
                },
                "start": {
                  "column": 91,
                  "line": 71
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2214,
                2215
              ],
              "loc": {
                "end": {
                  "column": 96,
                  "line": 71
                },
                "start": {
                  "column": 95,
                  "line": 71
                }
              }
            },
            "range": [
              2210,
              2215
            ],
            "loc": {
              "end": {
                "column": 96,
                "line": 71
              },
              "start": {
                "column": 91,
                "line": 71
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2124,
          2215
        ],
        "loc": {
          "end": {
            "column": 96,
            "line": 71
          },
          "start": {
            "column": 5,
            "line": 71
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
            2217,
            2218
          ],
          "loc": {
            "end": {
              "column": 99,
              "line": 71
            },
            "start": {
              "column": 98,
              "line": 71
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2221,
            2222
          ],
          "loc": {
            "end": {
              "column": 103,
              "line": 71
            },
            "start": {
              "column": 102,
              "line": 71
            }
          }
        },
        "range": [
          2217,
          2222
        ],
        "loc": {
          "end": {
            "column": 103,
            "line": 71
          },
          "start": {
            "column": 98,
            "line": 71
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
            2224,
            2225
          ],
          "loc": {
            "end": {
              "column": 106,
              "line": 71
            },
            "start": {
              "column": 105,
              "line": 71
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2224,
          2227
        ],
        "loc": {
          "end": {
            "column": 108,
            "line": 71
          },
          "start": {
            "column": 105,
            "line": 71
          }
        }
      },
      "range": [
        2119,
        2257
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 71
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2341,
                    2349
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 76
                    },
                    "start": {
                      "column": 16,
                      "line": 76
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
                    2329,
                    2336
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 76
                    },
                    "start": {
                      "column": 4,
                      "line": 76
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
                    2337,
                    2340
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 76
                    },
                    "start": {
                      "column": 12,
                      "line": 76
                    }
                  }
                },
                "range": [
                  2329,
                  2340
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 76
                  },
                  "start": {
                    "column": 4,
                    "line": 76
                  }
                }
              },
              "optional": false,
              "range": [
                2329,
                2350
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 76
                },
                "start": {
                  "column": 4,
                  "line": 76
                }
              }
            },
            "range": [
              2329,
              2351
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 76
              },
              "start": {
                "column": 4,
                "line": 76
              }
            }
          }
        ],
        "range": [
          2323,
          2353
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 77
          },
          "start": {
            "column": 64,
            "line": 75
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2269,
                    2277
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 75
                    },
                    "start": {
                      "column": 10,
                      "line": 75
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "range": [
                      2282,
                      2292
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 75
                      },
                      "start": {
                        "column": 23,
                        "line": 75
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2279,
                    2292
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 75
                    },
                    "start": {
                      "column": 20,
                      "line": 75
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2268,
                2293
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 75
                },
                "start": {
                  "column": 9,
                  "line": 75
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "range": [
                2296,
                2302
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 75
                },
                "start": {
                  "column": 37,
                  "line": 75
                }
              }
            },
            "range": [
              2268,
              2302
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 75
              },
              "start": {
                "column": 9,
                "line": 75
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                2304,
                2305
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 75
                },
                "start": {
                  "column": 45,
                  "line": 75
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2308,
                2309
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 75
                },
                "start": {
                  "column": 49,
                  "line": 75
                }
              }
            },
            "range": [
              2304,
              2309
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 75
              },
              "start": {
                "column": 45,
                "line": 75
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2264,
          2309
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 75
          },
          "start": {
            "column": 5,
            "line": 75
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
            2311,
            2312
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 75
            },
            "start": {
              "column": 52,
              "line": 75
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2315,
            2316
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 75
            },
            "start": {
              "column": 56,
              "line": 75
            }
          }
        },
        "range": [
          2311,
          2316
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 75
          },
          "start": {
            "column": 52,
            "line": 75
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
            2318,
            2319
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 75
            },
            "start": {
              "column": 59,
              "line": 75
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2318,
          2321
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 75
          },
          "start": {
            "column": 59,
            "line": 75
          }
        }
      },
      "range": [
        2259,
        2353
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 75
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2440,
                    2448
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 79
                    },
                    "start": {
                      "column": 16,
                      "line": 79
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
                    2428,
                    2435
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 79
                    },
                    "start": {
                      "column": 4,
                      "line": 79
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
                    2436,
                    2439
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 79
                    },
                    "start": {
                      "column": 12,
                      "line": 79
                    }
                  }
                },
                "range": [
                  2428,
                  2439
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 79
                  },
                  "start": {
                    "column": 4,
                    "line": 79
                  }
                }
              },
              "optional": false,
              "range": [
                2428,
                2449
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 79
                },
                "start": {
                  "column": 4,
                  "line": 79
                }
              }
            },
            "range": [
              2428,
              2450
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 79
              },
              "start": {
                "column": 4,
                "line": 79
              }
            }
          }
        ],
        "range": [
          2422,
          2452
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 80
          },
          "start": {
            "column": 68,
            "line": 78
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2364,
                    2372
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 78
                    },
                    "start": {
                      "column": 10,
                      "line": 78
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "range": [
                      2377,
                      2387
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 78
                      },
                      "start": {
                        "column": 23,
                        "line": 78
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2374,
                    2387
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 78
                    },
                    "start": {
                      "column": 20,
                      "line": 78
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2363,
                2388
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 78
                },
                "start": {
                  "column": 9,
                  "line": 78
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "range": [
                  2391,
                  2399
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 78
                  },
                  "start": {
                    "column": 37,
                    "line": 78
                  }
                }
              },
              "optional": false,
              "range": [
                2391,
                2401
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 78
                },
                "start": {
                  "column": 37,
                  "line": 78
                }
              }
            },
            "range": [
              2363,
              2401
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 78
              },
              "start": {
                "column": 9,
                "line": 78
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                2403,
                2404
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 78
                },
                "start": {
                  "column": 49,
                  "line": 78
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2407,
                2408
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 78
                },
                "start": {
                  "column": 53,
                  "line": 78
                }
              }
            },
            "range": [
              2403,
              2408
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 78
              },
              "start": {
                "column": 49,
                "line": 78
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2359,
          2408
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 78
          },
          "start": {
            "column": 5,
            "line": 78
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
            2410,
            2411
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 78
            },
            "start": {
              "column": 56,
              "line": 78
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2414,
            2415
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 78
            },
            "start": {
              "column": 60,
              "line": 78
            }
          }
        },
        "range": [
          2410,
          2415
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 78
          },
          "start": {
            "column": 56,
            "line": 78
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
            2417,
            2418
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 78
            },
            "start": {
              "column": 63,
              "line": 78
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2417,
          2420
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 78
          },
          "start": {
            "column": 63,
            "line": 78
          }
        }
      },
      "range": [
        2354,
        2452
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 80
        },
        "start": {
          "column": 0,
          "line": 78
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2555,
                    2563
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 82
                    },
                    "start": {
                      "column": 16,
                      "line": 82
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
                    2543,
                    2550
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
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "range": [
                    2551,
                    2554
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 82
                    },
                    "start": {
                      "column": 12,
                      "line": 82
                    }
                  }
                },
                "range": [
                  2543,
                  2554
                ],
                "loc": {
                  "end": {
                    "column": 15,
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
                2543,
                2564
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 82
                },
                "start": {
                  "column": 4,
                  "line": 82
                }
              }
            },
            "range": [
              2543,
              2565
            ],
            "loc": {
              "end": {
                "column": 26,
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
          2537,
          2567
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 83
          },
          "start": {
            "column": 84,
            "line": 81
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2463,
                    2471
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 81
                    },
                    "start": {
                      "column": 10,
                      "line": 81
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "robotAInfo",
                    "optional": false,
                    "range": [
                      2476,
                      2486
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 81
                      },
                      "start": {
                        "column": 23,
                        "line": 81
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2473,
                    2486
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 81
                    },
                    "start": {
                      "column": 20,
                      "line": 81
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2462,
                2487
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 81
                },
                "start": {
                  "column": 9,
                  "line": 81
                }
              }
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    2491,
                    2492
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 81
                    },
                    "start": {
                      "column": 38,
                      "line": 81
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    2494,
                    2503
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 81
                    },
                    "start": {
                      "column": 41,
                      "line": 81
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimming\"",
                  "value": "trimming",
                  "range": [
                    2505,
                    2515
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 81
                    },
                    "start": {
                      "column": 52,
                      "line": 81
                    }
                  }
                }
              ],
              "range": [
                2490,
                2516
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 81
                },
                "start": {
                  "column": 37,
                  "line": 81
                }
              }
            },
            "range": [
              2462,
              2516
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 81
              },
              "start": {
                "column": 9,
                "line": 81
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                2518,
                2519
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 81
                },
                "start": {
                  "column": 65,
                  "line": 81
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2522,
                2523
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 81
                },
                "start": {
                  "column": 69,
                  "line": 81
                }
              }
            },
            "range": [
              2518,
              2523
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 81
              },
              "start": {
                "column": 65,
                "line": 81
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2458,
          2523
        ],
        "loc": {
          "end": {
            "column": 70,
            "line": 81
          },
          "start": {
            "column": 5,
            "line": 81
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
            2525,
            2526
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 81
            },
            "start": {
              "column": 72,
              "line": 81
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2529,
            2530
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 81
            },
            "start": {
              "column": 76,
              "line": 81
            }
          }
        },
        "range": [
          2525,
          2530
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 81
          },
          "start": {
            "column": 72,
            "line": 81
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
            2532,
            2533
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 81
            },
            "start": {
              "column": 79,
              "line": 81
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2532,
          2535
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 81
          },
          "start": {
            "column": 79,
            "line": 81
          }
        }
      },
      "range": [
        2453,
        2567
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 81
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "range": [
                    2650,
                    2665
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 85
                    },
                    "start": {
                      "column": 16,
                      "line": 85
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
                    2638,
                    2645
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 85
                    },
                    "start": {
                      "column": 4,
                      "line": 85
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
                    2646,
                    2649
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 85
                    },
                    "start": {
                      "column": 12,
                      "line": 85
                    }
                  }
                },
                "range": [
                  2638,
                  2649
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 85
                  },
                  "start": {
                    "column": 4,
                    "line": 85
                  }
                }
              },
              "optional": false,
              "range": [
                2638,
                2666
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 85
                },
                "start": {
                  "column": 4,
                  "line": 85
                }
              }
            },
            "range": [
              2638,
              2667
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 85
              },
              "start": {
                "column": 4,
                "line": 85
              }
            }
          }
        ],
        "range": [
          2632,
          2669
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 86
          },
          "start": {
            "column": 64,
            "line": 84
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "range": [
                      2581,
                      2596
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 84
                      },
                      "start": {
                        "column": 13,
                        "line": 84
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2578,
                    2596
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 84
                    },
                    "start": {
                      "column": 10,
                      "line": 84
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2577,
                2597
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 84
                },
                "start": {
                  "column": 9,
                  "line": 84
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "range": [
                2600,
                2611
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 84
                },
                "start": {
                  "column": 32,
                  "line": 84
                }
              }
            },
            "range": [
              2577,
              2611
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 84
              },
              "start": {
                "column": 9,
                "line": 84
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                2613,
                2614
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 84
                },
                "start": {
                  "column": 45,
                  "line": 84
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2617,
                2618
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 84
                },
                "start": {
                  "column": 49,
                  "line": 84
                }
              }
            },
            "range": [
              2613,
              2618
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 84
              },
              "start": {
                "column": 45,
                "line": 84
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2573,
          2618
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 84
          },
          "start": {
            "column": 5,
            "line": 84
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
            2620,
            2621
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 84
            },
            "start": {
              "column": 52,
              "line": 84
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2624,
            2625
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 84
            },
            "start": {
              "column": 56,
              "line": 84
            }
          }
        },
        "range": [
          2620,
          2625
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 84
          },
          "start": {
            "column": 52,
            "line": 84
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
            2627,
            2628
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 84
            },
            "start": {
              "column": 59,
              "line": 84
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2627,
          2630
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 84
          },
          "start": {
            "column": 59,
            "line": 84
          }
        }
      },
      "range": [
        2568,
        2669
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 86
        },
        "start": {
          "column": 0,
          "line": 84
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "range": [
                    2756,
                    2771
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 88
                    },
                    "start": {
                      "column": 16,
                      "line": 88
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
                    2744,
                    2751
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 88
                    },
                    "start": {
                      "column": 4,
                      "line": 88
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
                    2752,
                    2755
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 88
                    },
                    "start": {
                      "column": 12,
                      "line": 88
                    }
                  }
                },
                "range": [
                  2744,
                  2755
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 88
                  },
                  "start": {
                    "column": 4,
                    "line": 88
                  }
                }
              },
              "optional": false,
              "range": [
                2744,
                2772
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 88
                },
                "start": {
                  "column": 4,
                  "line": 88
                }
              }
            },
            "range": [
              2744,
              2773
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 88
              },
              "start": {
                "column": 4,
                "line": 88
              }
            }
          }
        ],
        "range": [
          2738,
          2775
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 89
          },
          "start": {
            "column": 68,
            "line": 87
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "range": [
                      2683,
                      2698
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 87
                      },
                      "start": {
                        "column": 13,
                        "line": 87
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2680,
                    2698
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 87
                    },
                    "start": {
                      "column": 10,
                      "line": 87
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2679,
                2699
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 87
                },
                "start": {
                  "column": 9,
                  "line": 87
                }
              }
            },
            "init": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "range": [
                  2702,
                  2715
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 87
                  },
                  "start": {
                    "column": 32,
                    "line": 87
                  }
                }
              },
              "optional": false,
              "range": [
                2702,
                2717
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 87
                },
                "start": {
                  "column": 32,
                  "line": 87
                }
              }
            },
            "range": [
              2679,
              2717
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 87
              },
              "start": {
                "column": 9,
                "line": 87
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                2719,
                2720
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 87
                },
                "start": {
                  "column": 49,
                  "line": 87
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2723,
                2724
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 87
                },
                "start": {
                  "column": 53,
                  "line": 87
                }
              }
            },
            "range": [
              2719,
              2724
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 87
              },
              "start": {
                "column": 49,
                "line": 87
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2675,
          2724
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 87
          },
          "start": {
            "column": 5,
            "line": 87
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
            2726,
            2727
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 87
            },
            "start": {
              "column": 56,
              "line": 87
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2730,
            2731
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 87
            },
            "start": {
              "column": 60,
              "line": 87
            }
          }
        },
        "range": [
          2726,
          2731
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 87
          },
          "start": {
            "column": 56,
            "line": 87
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
            2733,
            2734
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 87
            },
            "start": {
              "column": 63,
              "line": 87
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2733,
          2736
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 87
          },
          "start": {
            "column": 63,
            "line": 87
          }
        }
      },
      "range": [
        2670,
        2775
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 87
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
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "multiRobotAInfo",
                  "optional": false,
                  "range": [
                    2882,
                    2897
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 91
                    },
                    "start": {
                      "column": 16,
                      "line": 91
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
                    2870,
                    2877
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 91
                    },
                    "start": {
                      "column": 4,
                      "line": 91
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
                    2878,
                    2881
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 91
                    },
                    "start": {
                      "column": 12,
                      "line": 91
                    }
                  }
                },
                "range": [
                  2870,
                  2881
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 91
                  },
                  "start": {
                    "column": 4,
                    "line": 91
                  }
                }
              },
              "optional": false,
              "range": [
                2870,
                2898
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 91
                },
                "start": {
                  "column": 4,
                  "line": 91
                }
              }
            },
            "range": [
              2870,
              2899
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 91
              },
              "start": {
                "column": 4,
                "line": 91
              }
            }
          }
        ],
        "range": [
          2864,
          2901
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 92
          },
          "start": {
            "column": 88,
            "line": 90
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "range": [
                      2789,
                      2804
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 90
                      },
                      "start": {
                        "column": 13,
                        "line": 90
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2786,
                    2804
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 90
                    },
                    "start": {
                      "column": 10,
                      "line": 90
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2785,
                2805
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 90
                },
                "start": {
                  "column": 9,
                  "line": 90
                }
              }
            },
            "init": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    2809,
                    2818
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 90
                    },
                    "start": {
                      "column": 33,
                      "line": 90
                    }
                  }
                },
                {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "raw": "\"trimming\"",
                      "value": "trimming",
                      "range": [
                        2821,
                        2831
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 90
                        },
                        "start": {
                          "column": 45,
                          "line": 90
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"edging\"",
                      "value": "edging",
                      "range": [
                        2833,
                        2841
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 90
                        },
                        "start": {
                          "column": 57,
                          "line": 90
                        }
                      }
                    }
                  ],
                  "range": [
                    2820,
                    2842
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 90
                    },
                    "start": {
                      "column": 44,
                      "line": 90
                    }
                  }
                }
              ],
              "range": [
                2808,
                2843
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 90
                },
                "start": {
                  "column": 32,
                  "line": 90
                }
              }
            },
            "range": [
              2785,
              2843
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 90
              },
              "start": {
                "column": 9,
                "line": 90
              }
            }
          },
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                2845,
                2846
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 90
                },
                "start": {
                  "column": 69,
                  "line": 90
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2849,
                2850
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 90
                },
                "start": {
                  "column": 73,
                  "line": 90
                }
              }
            },
            "range": [
              2845,
              2850
            ],
            "loc": {
              "end": {
                "column": 74,
                "line": 90
              },
              "start": {
                "column": 69,
                "line": 90
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2781,
          2850
        ],
        "loc": {
          "end": {
            "column": 74,
            "line": 90
          },
          "start": {
            "column": 5,
            "line": 90
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
            2852,
            2853
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 90
            },
            "start": {
              "column": 76,
              "line": 90
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2856,
            2857
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 90
            },
            "start": {
              "column": 80,
              "line": 90
            }
          }
        },
        "range": [
          2852,
          2857
        ],
        "loc": {
          "end": {
            "column": 81,
            "line": 90
          },
          "start": {
            "column": 76,
            "line": 90
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
            2859,
            2860
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 90
            },
            "start": {
              "column": 83,
              "line": 90
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2859,
          2862
        ],
        "loc": {
          "end": {
            "column": 86,
            "line": 90
          },
          "start": {
            "column": 83,
            "line": 90
          }
        }
      },
      "range": [
        2776,
        2901
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 92
        },
        "start": {
          "column": 0,
          "line": 90
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 92
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
