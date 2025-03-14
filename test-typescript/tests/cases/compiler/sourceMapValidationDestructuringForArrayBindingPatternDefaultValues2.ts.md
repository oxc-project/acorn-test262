__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3381
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 18
                },
                "start": {
                  "column": 9,
                  "line": 18
                }
              },
              "range": [
                432,
                440
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  434,
                  440
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 18
                  },
                  "start": {
                    "column": 11,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              427,
              440
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            427,
            440
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 18
            },
            "start": {
              "column": 4,
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
            "name": "primarySkillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 18
                },
                "start": {
                  "column": 32,
                  "line": 18
                }
              },
              "range": [
                455,
                463
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  457,
                  463
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 18
                  },
                  "start": {
                    "column": 34,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              442,
              463
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 18
              },
              "start": {
                "column": 19,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            442,
            463
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 18
            },
            "start": {
              "column": 19,
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
            "name": "secondarySkillA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 65,
                  "line": 18
                },
                "start": {
                  "column": 57,
                  "line": 18
                }
              },
              "range": [
                480,
                488
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  482,
                  488
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 18
                  },
                  "start": {
                    "column": 59,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              465,
              488
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 18
              },
              "start": {
                "column": 42,
                "line": 18
              }
            }
          },
          "init": null,
          "range": [
            465,
            488
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 18
            },
            "start": {
              "column": 42,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        423,
        489
      ],
      "loc": {
        "end": {
          "column": 66,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "numberB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 19,
                  "line": 19
                },
                "start": {
                  "column": 11,
                  "line": 19
                }
              },
              "range": [
                501,
                509
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  503,
                  509
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 19
                  },
                  "start": {
                    "column": 13,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              494,
              509
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 19
              },
              "start": {
                "column": 4,
                "line": 19
              }
            }
          },
          "init": null,
          "range": [
            494,
            509
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 19
            },
            "start": {
              "column": 4,
              "line": 19
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 19
                },
                "start": {
                  "column": 26,
                  "line": 19
                }
              },
              "range": [
                516,
                524
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  518,
                  524
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 19
                  },
                  "start": {
                    "column": 28,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              511,
              524
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 19
              },
              "start": {
                "column": 21,
                "line": 19
              }
            }
          },
          "init": null,
          "range": [
            511,
            524
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 19
            },
            "start": {
              "column": 21,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        490,
        525
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "numberA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 20
                },
                "start": {
                  "column": 12,
                  "line": 20
                }
              },
              "range": [
                538,
                546
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  540,
                  546
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 20
                  },
                  "start": {
                    "column": 14,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              530,
              546
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
              }
            }
          },
          "init": null,
          "range": [
            530,
            546
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 20
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 36,
                  "line": 20
                },
                "start": {
                  "column": 28,
                  "line": 20
                }
              },
              "range": [
                554,
                562
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  556,
                  562
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 20
                  },
                  "start": {
                    "column": 30,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              548,
              562
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 20
              },
              "start": {
                "column": 22,
                "line": 20
              }
            }
          },
          "init": null,
          "range": [
            548,
            562
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 20
            },
            "start": {
              "column": 22,
              "line": 20
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "skillA2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 20
                },
                "start": {
                  "column": 45,
                  "line": 20
                }
              },
              "range": [
                571,
                579
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  573,
                  579
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 20
                  },
                  "start": {
                    "column": 47,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              564,
              579
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 20
              },
              "start": {
                "column": 38,
                "line": 20
              }
            }
          },
          "init": null,
          "range": [
            564,
            579
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 20
            },
            "start": {
              "column": 38,
              "line": 20
            }
          }
        },
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "nameMA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 69,
                  "line": 20
                },
                "start": {
                  "column": 61,
                  "line": 20
                }
              },
              "range": [
                587,
                595
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  589,
                  595
                ],
                "loc": {
                  "end": {
                    "column": 69,
                    "line": 20
                  },
                  "start": {
                    "column": 63,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              581,
              595
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 20
              },
              "start": {
                "column": 55,
                "line": 20
              }
            }
          },
          "init": null,
          "range": [
            581,
            595
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 20
            },
            "start": {
              "column": 55,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        526,
        596
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "numberA3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 21
                },
                "start": {
                  "column": 12,
                  "line": 21
                }
              },
              "range": [
                609,
                617
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  611,
                  617
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 21
                  },
                  "start": {
                    "column": 14,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              601,
              617
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          },
          "init": null,
          "range": [
            601,
            617
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 21
            },
            "start": {
              "column": 4,
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
            "name": "robotAInfo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 21
                },
                "start": {
                  "column": 32,
                  "line": 21
                }
              },
              "range": [
                629,
                650
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        632,
                        638
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 21
                        },
                        "start": {
                          "column": 35,
                          "line": 21
                        }
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        641,
                        647
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 21
                        },
                        "start": {
                          "column": 44,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "range": [
                    632,
                    647
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 21
                    },
                    "start": {
                      "column": 35,
                      "line": 21
                    }
                  }
                },
                "range": [
                  631,
                  650
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 21
                  },
                  "start": {
                    "column": 34,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              619,
              650
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 21
              },
              "start": {
                "column": 22,
                "line": 21
              }
            }
          },
          "init": null,
          "range": [
            619,
            650
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 21
            },
            "start": {
              "column": 22,
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
            "name": "multiRobotAInfo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 101,
                  "line": 21
                },
                "start": {
                  "column": 70,
                  "line": 21
                }
              },
              "range": [
                667,
                698
              ],
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        670,
                        676
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 21
                        },
                        "start": {
                          "column": 73,
                          "line": 21
                        }
                      }
                    },
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            680,
                            686
                          ],
                          "loc": {
                            "end": {
                              "column": 89,
                              "line": 21
                            },
                            "start": {
                              "column": 83,
                              "line": 21
                            }
                          }
                        },
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            688,
                            694
                          ],
                          "loc": {
                            "end": {
                              "column": 97,
                              "line": 21
                            },
                            "start": {
                              "column": 91,
                              "line": 21
                            }
                          }
                        }
                      ],
                      "range": [
                        679,
                        695
                      ],
                      "loc": {
                        "end": {
                          "column": 98,
                          "line": 21
                        },
                        "start": {
                          "column": 82,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "range": [
                    670,
                    695
                  ],
                  "loc": {
                    "end": {
                      "column": 98,
                      "line": 21
                    },
                    "start": {
                      "column": 73,
                      "line": 21
                    }
                  }
                },
                "range": [
                  669,
                  698
                ],
                "loc": {
                  "end": {
                    "column": 101,
                    "line": 21
                  },
                  "start": {
                    "column": 72,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              652,
              698
            ],
            "loc": {
              "end": {
                "column": 101,
                "line": 21
              },
              "start": {
                "column": 55,
                "line": 21
              }
            }
          },
          "init": null,
          "range": [
            652,
            698
          ],
          "loc": {
            "end": {
              "column": 101,
              "line": 21
            },
            "start": {
              "column": 55,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        597,
        699
      ],
      "loc": {
        "end": {
          "column": 102,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 22
                },
                "start": {
                  "column": 5,
                  "line": 22
                }
              },
              "range": [
                705,
                713
              ],
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  707,
                  713
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 22
                  },
                  "start": {
                    "column": 7,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              704,
              713
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          },
          "init": null,
          "range": [
            704,
            713
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 22
            },
            "start": {
              "column": 4,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        700,
        714
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
                    787,
                    792
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
                    775,
                    782
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
                    783,
                    786
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
                  775,
                  786
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
                775,
                793
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
              775,
              794
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
          769,
          796
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 53,
            "line": 24
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "range": [
                      724,
                      729
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 24
                      },
                      "start": {
                        "column": 8,
                        "line": 24
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"name\"",
                    "value": "name",
                    "range": [
                      732,
                      738
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 24
                      },
                      "start": {
                        "column": 16,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    724,
                    738
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 24
                    },
                    "start": {
                      "column": 8,
                      "line": 24
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                721,
                739
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 24
                },
                "start": {
                  "column": 5,
                  "line": 24
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "range": [
                742,
                748
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 24
                },
                "start": {
                  "column": 26,
                  "line": 24
                }
              }
            },
            "range": [
              721,
              748
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 24
              },
              "start": {
                "column": 5,
                "line": 24
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
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
                  "column": 35,
                  "line": 24
                },
                "start": {
                  "column": 34,
                  "line": 24
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                754,
                755
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 24
                },
                "start": {
                  "column": 38,
                  "line": 24
                }
              }
            },
            "range": [
              750,
              755
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 24
              },
              "start": {
                "column": 34,
                "line": 24
              }
            }
          }
        ],
        "range": [
          721,
          755
        ],
        "loc": {
          "end": {
            "column": 39,
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
            757,
            758
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 24
            },
            "start": {
              "column": 41,
              "line": 24
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            761,
            762
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 24
            },
            "start": {
              "column": 45,
              "line": 24
            }
          }
        },
        "range": [
          757,
          762
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 24
          },
          "start": {
            "column": 41,
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
            764,
            765
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 24
            },
            "start": {
              "column": 48,
              "line": 24
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          764,
          767
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 24
          },
          "start": {
            "column": 48,
            "line": 24
          }
        }
      },
      "range": [
        716,
        796
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
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    872,
                    877
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
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
                    860,
                    867
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
                    868,
                    871
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
                  860,
                  871
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
                860,
                878
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              860,
              879
            ],
            "loc": {
              "end": {
                "column": 23,
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
          854,
          881
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 57,
            "line": 27
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "range": [
                      805,
                      810
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 27
                      },
                      "start": {
                        "column": 8,
                        "line": 27
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"name\"",
                    "value": "name",
                    "range": [
                      813,
                      819
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 27
                      },
                      "start": {
                        "column": 16,
                        "line": 27
                      }
                    }
                  },
                  "range": [
                    805,
                    819
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 27
                    },
                    "start": {
                      "column": 8,
                      "line": 27
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                802,
                820
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 27
                },
                "start": {
                  "column": 5,
                  "line": 27
                }
              }
            },
            "right": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "range": [
                  823,
                  831
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 27
                  },
                  "start": {
                    "column": 26,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "range": [
                823,
                833
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 27
                },
                "start": {
                  "column": 26,
                  "line": 27
                }
              }
            },
            "range": [
              802,
              833
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 27
              },
              "start": {
                "column": 5,
                "line": 27
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                835,
                836
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 27
                },
                "start": {
                  "column": 38,
                  "line": 27
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                839,
                840
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 27
                },
                "start": {
                  "column": 42,
                  "line": 27
                }
              }
            },
            "range": [
              835,
              840
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 27
              },
              "start": {
                "column": 38,
                "line": 27
              }
            }
          }
        ],
        "range": [
          802,
          840
        ],
        "loc": {
          "end": {
            "column": 43,
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
            842,
            843
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 27
            },
            "start": {
              "column": 45,
              "line": 27
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            846,
            847
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 27
            },
            "start": {
              "column": 49,
              "line": 27
            }
          }
        },
        "range": [
          842,
          847
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 27
          },
          "start": {
            "column": 45,
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
            849,
            850
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 27
            },
            "start": {
              "column": 52,
              "line": 27
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          849,
          852
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 27
          },
          "start": {
            "column": 52,
            "line": 27
          }
        }
      },
      "range": [
        797,
        881
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
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    973,
                    978
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
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
                    961,
                    968
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
                    969,
                    972
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
                  961,
                  972
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
                961,
                979
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "range": [
              961,
              980
            ],
            "loc": {
              "end": {
                "column": 23,
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
          955,
          982
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 73,
            "line": 30
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "range": [
                      890,
                      895
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"name\"",
                    "value": "name",
                    "range": [
                      898,
                      904
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 30
                      },
                      "start": {
                        "column": 16,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    890,
                    904
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 30
                    },
                    "start": {
                      "column": 8,
                      "line": 30
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                887,
                905
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 30
                },
                "start": {
                  "column": 5,
                  "line": 30
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    909,
                    910
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 30
                    },
                    "start": {
                      "column": 27,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    912,
                    921
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 30
                    },
                    "start": {
                      "column": 30,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimming\"",
                  "value": "trimming",
                  "range": [
                    923,
                    933
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 30
                    },
                    "start": {
                      "column": 41,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                908,
                934
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 30
                },
                "start": {
                  "column": 26,
                  "line": 30
                }
              }
            },
            "range": [
              887,
              934
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 30
              },
              "start": {
                "column": 5,
                "line": 30
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                936,
                937
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 30
                },
                "start": {
                  "column": 54,
                  "line": 30
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                940,
                941
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 30
                },
                "start": {
                  "column": 58,
                  "line": 30
                }
              }
            },
            "range": [
              936,
              941
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 30
              },
              "start": {
                "column": 54,
                "line": 30
              }
            }
          }
        ],
        "range": [
          887,
          941
        ],
        "loc": {
          "end": {
            "column": 59,
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
            943,
            944
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 30
            },
            "start": {
              "column": 61,
              "line": 30
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            947,
            948
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
        "range": [
          943,
          948
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 30
          },
          "start": {
            "column": 61,
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
            950,
            951
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 30
            },
            "start": {
              "column": 68,
              "line": 30
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          950,
          953
        ],
        "loc": {
          "end": {
            "column": 71,
            "line": 30
          },
          "start": {
            "column": 68,
            "line": 30
          }
        }
      },
      "range": [
        882,
        982
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
                    1132,
                    1145
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 37
                    },
                    "start": {
                      "column": 16,
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
                  "name": "console",
                  "optional": false,
                  "range": [
                    1120,
                    1127
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 37
                    },
                    "start": {
                      "column": 4,
                      "line": 37
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
                    1128,
                    1131
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 37
                    },
                    "start": {
                      "column": 12,
                      "line": 37
                    }
                  }
                },
                "range": [
                  1120,
                  1131
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 37
                  },
                  "start": {
                    "column": 4,
                    "line": 37
                  }
                }
              },
              "optional": false,
              "range": [
                1120,
                1146
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "range": [
              1120,
              1147
            ],
            "loc": {
              "end": {
                "column": 31,
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
          1114,
          1149
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 56,
            "line": 36
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "range": [
                            997,
                            1010
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 34
                            },
                            "start": {
                              "column": 4,
                              "line": 34
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"primary\"",
                          "value": "primary",
                          "range": [
                            1013,
                            1022
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 34
                            },
                            "start": {
                              "column": 20,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          997,
                          1022
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 34
                          },
                          "start": {
                            "column": 4,
                            "line": 34
                          }
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "range": [
                            1028,
                            1043
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 35
                            },
                            "start": {
                              "column": 4,
                              "line": 35
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"secondary\"",
                          "value": "secondary",
                          "range": [
                            1046,
                            1057
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 35
                            },
                            "start": {
                              "column": 22,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          1028,
                          1057
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 35
                          },
                          "start": {
                            "column": 4,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      991,
                      1059
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 36
                      },
                      "start": {
                        "column": 8,
                        "line": 33
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "\"none\"",
                        "value": "none",
                        "range": [
                          1063,
                          1069
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 36
                          },
                          "start": {
                            "column": 5,
                            "line": 36
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"none\"",
                        "value": "none",
                        "range": [
                          1071,
                          1077
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 36
                          },
                          "start": {
                            "column": 13,
                            "line": 36
                          }
                        }
                      }
                    ],
                    "range": [
                      1062,
                      1078
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 36
                      },
                      "start": {
                        "column": 4,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    991,
                    1078
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 33
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                988,
                1079
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 36
                },
                "start": {
                  "column": 5,
                  "line": 33
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "range": [
                1082,
                1093
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 36
                },
                "start": {
                  "column": 24,
                  "line": 36
                }
              }
            },
            "range": [
              988,
              1093
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 36
              },
              "start": {
                "column": 5,
                "line": 33
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
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
                  "column": 38,
                  "line": 36
                },
                "start": {
                  "column": 37,
                  "line": 36
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1099,
                1100
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
            "range": [
              1095,
              1100
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 36
              },
              "start": {
                "column": 37,
                "line": 36
              }
            }
          }
        ],
        "range": [
          988,
          1100
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 36
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
            1102,
            1103
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 36
            },
            "start": {
              "column": 44,
              "line": 36
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1106,
            1107
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 36
            },
            "start": {
              "column": 48,
              "line": 36
            }
          }
        },
        "range": [
          1102,
          1107
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 36
          },
          "start": {
            "column": 44,
            "line": 36
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
            1109,
            1110
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 36
            },
            "start": {
              "column": 51,
              "line": 36
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1109,
          1112
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 36
          },
          "start": {
            "column": 51,
            "line": 36
          }
        }
      },
      "range": [
        983,
        1149
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
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
                  "name": "primarySkillA",
                  "optional": false,
                  "range": [
                    1303,
                    1316
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 43
                    },
                    "start": {
                      "column": 16,
                      "line": 43
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
                    1291,
                    1298
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 43
                    },
                    "start": {
                      "column": 4,
                      "line": 43
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
                    1299,
                    1302
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 43
                    },
                    "start": {
                      "column": 12,
                      "line": 43
                    }
                  }
                },
                "range": [
                  1291,
                  1302
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 43
                  },
                  "start": {
                    "column": 4,
                    "line": 43
                  }
                }
              },
              "optional": false,
              "range": [
                1291,
                1317
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 43
                }
              }
            },
            "range": [
              1291,
              1318
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          }
        ],
        "range": [
          1285,
          1320
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 60,
            "line": 42
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "range": [
                            1164,
                            1177
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 40
                            },
                            "start": {
                              "column": 4,
                              "line": 40
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"primary\"",
                          "value": "primary",
                          "range": [
                            1180,
                            1189
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 40
                            },
                            "start": {
                              "column": 20,
                              "line": 40
                            }
                          }
                        },
                        "range": [
                          1164,
                          1189
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 40
                          },
                          "start": {
                            "column": 4,
                            "line": 40
                          }
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "range": [
                            1195,
                            1210
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 41
                            },
                            "start": {
                              "column": 4,
                              "line": 41
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"secondary\"",
                          "value": "secondary",
                          "range": [
                            1213,
                            1224
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 41
                            },
                            "start": {
                              "column": 22,
                              "line": 41
                            }
                          }
                        },
                        "range": [
                          1195,
                          1224
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 41
                          },
                          "start": {
                            "column": 4,
                            "line": 41
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      1158,
                      1226
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 42
                      },
                      "start": {
                        "column": 8,
                        "line": 39
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "\"none\"",
                        "value": "none",
                        "range": [
                          1230,
                          1236
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 42
                          },
                          "start": {
                            "column": 5,
                            "line": 42
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"none\"",
                        "value": "none",
                        "range": [
                          1238,
                          1244
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 42
                          },
                          "start": {
                            "column": 13,
                            "line": 42
                          }
                        }
                      }
                    ],
                    "range": [
                      1229,
                      1245
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 42
                      },
                      "start": {
                        "column": 4,
                        "line": 42
                      }
                    }
                  },
                  "range": [
                    1158,
                    1245
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 39
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1155,
                1246
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 42
                },
                "start": {
                  "column": 5,
                  "line": 39
                }
              }
            },
            "right": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "range": [
                  1249,
                  1262
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 42
                  },
                  "start": {
                    "column": 24,
                    "line": 42
                  }
                }
              },
              "optional": false,
              "range": [
                1249,
                1264
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 42
                },
                "start": {
                  "column": 24,
                  "line": 42
                }
              }
            },
            "range": [
              1155,
              1264
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 42
              },
              "start": {
                "column": 5,
                "line": 39
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1266,
                1267
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 42
                },
                "start": {
                  "column": 41,
                  "line": 42
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1270,
                1271
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 42
                },
                "start": {
                  "column": 45,
                  "line": 42
                }
              }
            },
            "range": [
              1266,
              1271
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 42
              },
              "start": {
                "column": 41,
                "line": 42
              }
            }
          }
        ],
        "range": [
          1155,
          1271
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 42
          },
          "start": {
            "column": 5,
            "line": 39
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
            1273,
            1274
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 42
            },
            "start": {
              "column": 48,
              "line": 42
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1277,
            1278
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 42
            },
            "start": {
              "column": 52,
              "line": 42
            }
          }
        },
        "range": [
          1273,
          1278
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 42
          },
          "start": {
            "column": 48,
            "line": 42
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
            1280,
            1281
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 42
            },
            "start": {
              "column": 55,
              "line": 42
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1280,
          1283
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 42
          },
          "start": {
            "column": 55,
            "line": 42
          }
        }
      },
      "range": [
        1150,
        1320
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 39
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
                    1494,
                    1507
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 49
                    },
                    "start": {
                      "column": 16,
                      "line": 49
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
                    1482,
                    1489
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 49
                    },
                    "start": {
                      "column": 4,
                      "line": 49
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
                    1490,
                    1493
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 49
                    },
                    "start": {
                      "column": 12,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1482,
                  1493
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
                  }
                }
              },
              "optional": false,
              "range": [
                1482,
                1508
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
                }
              }
            },
            "range": [
              1482,
              1509
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          }
        ],
        "range": [
          1476,
          1511
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 80,
            "line": 48
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                null,
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "range": [
                            1335,
                            1348
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 46
                            },
                            "start": {
                              "column": 4,
                              "line": 46
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"primary\"",
                          "value": "primary",
                          "range": [
                            1351,
                            1360
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 46
                            },
                            "start": {
                              "column": 20,
                              "line": 46
                            }
                          }
                        },
                        "range": [
                          1335,
                          1360
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 46
                          },
                          "start": {
                            "column": 4,
                            "line": 46
                          }
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "range": [
                            1366,
                            1381
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 47
                            },
                            "start": {
                              "column": 4,
                              "line": 47
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"secondary\"",
                          "value": "secondary",
                          "range": [
                            1384,
                            1395
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 47
                            },
                            "start": {
                              "column": 22,
                              "line": 47
                            }
                          }
                        },
                        "range": [
                          1366,
                          1395
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 47
                          },
                          "start": {
                            "column": 4,
                            "line": 47
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      1329,
                      1397
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 48
                      },
                      "start": {
                        "column": 8,
                        "line": 45
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "\"none\"",
                        "value": "none",
                        "range": [
                          1401,
                          1407
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 48
                          },
                          "start": {
                            "column": 5,
                            "line": 48
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"none\"",
                        "value": "none",
                        "range": [
                          1409,
                          1415
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 48
                          },
                          "start": {
                            "column": 13,
                            "line": 48
                          }
                        }
                      }
                    ],
                    "range": [
                      1400,
                      1416
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 48
                      },
                      "start": {
                        "column": 4,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    1329,
                    1416
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 48
                    },
                    "start": {
                      "column": 8,
                      "line": 45
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1326,
                1417
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 48
                },
                "start": {
                  "column": 5,
                  "line": 45
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    1421,
                    1430
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 48
                    },
                    "start": {
                      "column": 25,
                      "line": 48
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
                        1433,
                        1443
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 48
                        },
                        "start": {
                          "column": 37,
                          "line": 48
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"edging\"",
                      "value": "edging",
                      "range": [
                        1445,
                        1453
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 48
                        },
                        "start": {
                          "column": 49,
                          "line": 48
                        }
                      }
                    }
                  ],
                  "range": [
                    1432,
                    1454
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 48
                    },
                    "start": {
                      "column": 36,
                      "line": 48
                    }
                  }
                }
              ],
              "range": [
                1420,
                1455
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 48
                },
                "start": {
                  "column": 24,
                  "line": 48
                }
              }
            },
            "range": [
              1326,
              1455
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 48
              },
              "start": {
                "column": 5,
                "line": 45
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1457,
                1458
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 48
                },
                "start": {
                  "column": 61,
                  "line": 48
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1461,
                1462
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 48
                },
                "start": {
                  "column": 65,
                  "line": 48
                }
              }
            },
            "range": [
              1457,
              1462
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 48
              },
              "start": {
                "column": 61,
                "line": 48
              }
            }
          }
        ],
        "range": [
          1326,
          1462
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 48
          },
          "start": {
            "column": 5,
            "line": 45
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
            1464,
            1465
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 48
            },
            "start": {
              "column": 68,
              "line": 48
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1468,
            1469
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 48
            },
            "start": {
              "column": 72,
              "line": 48
            }
          }
        },
        "range": [
          1464,
          1469
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 48
          },
          "start": {
            "column": 68,
            "line": 48
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
            1471,
            1472
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 48
            },
            "start": {
              "column": 75,
              "line": 48
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1471,
          1474
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 48
          },
          "start": {
            "column": 75,
            "line": 48
          }
        }
      },
      "range": [
        1321,
        1511
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
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
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1580,
                    1587
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
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
                    1568,
                    1575
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
                    1576,
                    1579
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
                  1568,
                  1579
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
                1568,
                1588
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 53
                },
                "start": {
                  "column": 4,
                  "line": 53
                }
              }
            },
            "range": [
              1568,
              1589
            ],
            "loc": {
              "end": {
                "column": 25,
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
          1562,
          1591
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 49,
            "line": 52
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "range": [
                      1519,
                      1526
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 52
                      },
                      "start": {
                        "column": 6,
                        "line": 52
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1530,
                        1531
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 52
                        },
                        "start": {
                          "column": 17,
                          "line": 52
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1529,
                      1531
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 52
                      },
                      "start": {
                        "column": 16,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    1519,
                    1531
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 52
                    },
                    "start": {
                      "column": 6,
                      "line": 52
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1518,
                1532
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 52
                },
                "start": {
                  "column": 5,
                  "line": 52
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "range": [
                1535,
                1541
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 52
                },
                "start": {
                  "column": 22,
                  "line": 52
                }
              }
            },
            "range": [
              1518,
              1541
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 52
              },
              "start": {
                "column": 5,
                "line": 52
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1543,
                1544
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 52
                },
                "start": {
                  "column": 30,
                  "line": 52
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1547,
                1548
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 52
                },
                "start": {
                  "column": 34,
                  "line": 52
                }
              }
            },
            "range": [
              1543,
              1548
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 52
              },
              "start": {
                "column": 30,
                "line": 52
              }
            }
          }
        ],
        "range": [
          1518,
          1548
        ],
        "loc": {
          "end": {
            "column": 35,
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
            1550,
            1551
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 52
            },
            "start": {
              "column": 37,
              "line": 52
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1554,
            1555
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 52
            },
            "start": {
              "column": 41,
              "line": 52
            }
          }
        },
        "range": [
          1550,
          1555
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 52
          },
          "start": {
            "column": 37,
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
            1557,
            1558
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 52
            },
            "start": {
              "column": 44,
              "line": 52
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1557,
          1560
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 52
          },
          "start": {
            "column": 44,
            "line": 52
          }
        }
      },
      "range": [
        1513,
        1591
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
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1663,
                    1670
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 56
                    },
                    "start": {
                      "column": 16,
                      "line": 56
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
                    1651,
                    1658
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 56
                    },
                    "start": {
                      "column": 4,
                      "line": 56
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
                    1659,
                    1662
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 56
                    },
                    "start": {
                      "column": 12,
                      "line": 56
                    }
                  }
                },
                "range": [
                  1651,
                  1662
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 56
                  },
                  "start": {
                    "column": 4,
                    "line": 56
                  }
                }
              },
              "optional": false,
              "range": [
                1651,
                1671
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            },
            "range": [
              1651,
              1672
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          }
        ],
        "range": [
          1645,
          1674
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 53,
            "line": 55
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "range": [
                      1598,
                      1605
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 55
                      },
                      "start": {
                        "column": 6,
                        "line": 55
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1609,
                        1610
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 55
                        },
                        "start": {
                          "column": 17,
                          "line": 55
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1608,
                      1610
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 55
                      },
                      "start": {
                        "column": 16,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1598,
                    1610
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 55
                    },
                    "start": {
                      "column": 6,
                      "line": 55
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1597,
                1611
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 55
                },
                "start": {
                  "column": 5,
                  "line": 55
                }
              }
            },
            "right": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "range": [
                  1614,
                  1622
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 55
                  },
                  "start": {
                    "column": 22,
                    "line": 55
                  }
                }
              },
              "optional": false,
              "range": [
                1614,
                1624
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 55
                },
                "start": {
                  "column": 22,
                  "line": 55
                }
              }
            },
            "range": [
              1597,
              1624
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 55
              },
              "start": {
                "column": 5,
                "line": 55
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1626,
                1627
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 55
                },
                "start": {
                  "column": 34,
                  "line": 55
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1630,
                1631
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 55
                },
                "start": {
                  "column": 38,
                  "line": 55
                }
              }
            },
            "range": [
              1626,
              1631
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 55
              },
              "start": {
                "column": 34,
                "line": 55
              }
            }
          }
        ],
        "range": [
          1597,
          1631
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 55
          },
          "start": {
            "column": 5,
            "line": 55
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
            1633,
            1634
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 55
            },
            "start": {
              "column": 41,
              "line": 55
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1637,
            1638
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 55
            },
            "start": {
              "column": 45,
              "line": 55
            }
          }
        },
        "range": [
          1633,
          1638
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 55
          },
          "start": {
            "column": 41,
            "line": 55
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
            1640,
            1641
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 55
            },
            "start": {
              "column": 48,
              "line": 55
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1640,
          1643
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 55
          },
          "start": {
            "column": 48,
            "line": 55
          }
        }
      },
      "range": [
        1592,
        1674
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 57
        },
        "start": {
          "column": 0,
          "line": 55
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
                    1762,
                    1769
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 59
                    },
                    "start": {
                      "column": 16,
                      "line": 59
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
                    1750,
                    1757
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 59
                    },
                    "start": {
                      "column": 4,
                      "line": 59
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
                    1758,
                    1761
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 59
                    },
                    "start": {
                      "column": 12,
                      "line": 59
                    }
                  }
                },
                "range": [
                  1750,
                  1761
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 59
                  },
                  "start": {
                    "column": 4,
                    "line": 59
                  }
                }
              },
              "optional": false,
              "range": [
                1750,
                1770
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            },
            "range": [
              1750,
              1771
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          }
        ],
        "range": [
          1744,
          1773
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 60
          },
          "start": {
            "column": 69,
            "line": 58
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "range": [
                      1681,
                      1688
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 58
                      },
                      "start": {
                        "column": 6,
                        "line": 58
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1692,
                        1693
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 58
                        },
                        "start": {
                          "column": 17,
                          "line": 58
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1691,
                      1693
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 58
                      },
                      "start": {
                        "column": 16,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    1681,
                    1693
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 58
                    },
                    "start": {
                      "column": 6,
                      "line": 58
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1680,
                1694
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 58
                },
                "start": {
                  "column": 5,
                  "line": 58
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    1698,
                    1699
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 58
                    },
                    "start": {
                      "column": 23,
                      "line": 58
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    1701,
                    1710
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 58
                    },
                    "start": {
                      "column": 26,
                      "line": 58
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimming\"",
                  "value": "trimming",
                  "range": [
                    1712,
                    1722
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 58
                    },
                    "start": {
                      "column": 37,
                      "line": 58
                    }
                  }
                }
              ],
              "range": [
                1697,
                1723
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 58
                },
                "start": {
                  "column": 22,
                  "line": 58
                }
              }
            },
            "range": [
              1680,
              1723
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 58
              },
              "start": {
                "column": 5,
                "line": 58
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1725,
                1726
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 58
                },
                "start": {
                  "column": 50,
                  "line": 58
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1729,
                1730
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 58
                },
                "start": {
                  "column": 54,
                  "line": 58
                }
              }
            },
            "range": [
              1725,
              1730
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 58
              },
              "start": {
                "column": 50,
                "line": 58
              }
            }
          }
        ],
        "range": [
          1680,
          1730
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 58
          },
          "start": {
            "column": 5,
            "line": 58
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
            1732,
            1733
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 58
            },
            "start": {
              "column": 57,
              "line": 58
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1736,
            1737
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 58
            },
            "start": {
              "column": 61,
              "line": 58
            }
          }
        },
        "range": [
          1732,
          1737
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 58
          },
          "start": {
            "column": 57,
            "line": 58
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
            1739,
            1740
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 58
            },
            "start": {
              "column": 64,
              "line": 58
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1739,
          1742
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 58
          },
          "start": {
            "column": 64,
            "line": 58
          }
        }
      },
      "range": [
        1675,
        1773
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 58
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
                    1848,
                    1853
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 62
                    },
                    "start": {
                      "column": 16,
                      "line": 62
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
                    1836,
                    1843
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 62
                    },
                    "start": {
                      "column": 4,
                      "line": 62
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
                    1844,
                    1847
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 62
                    },
                    "start": {
                      "column": 12,
                      "line": 62
                    }
                  }
                },
                "range": [
                  1836,
                  1847
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 62
                  },
                  "start": {
                    "column": 4,
                    "line": 62
                  }
                }
              },
              "optional": false,
              "range": [
                1836,
                1854
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 62
                },
                "start": {
                  "column": 4,
                  "line": 62
                }
              }
            },
            "range": [
              1836,
              1855
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
              }
            }
          }
        ],
        "range": [
          1830,
          1857
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 63
          },
          "start": {
            "column": 56,
            "line": 61
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "range": [
                      1780,
                      1785
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 61
                      },
                      "start": {
                        "column": 6,
                        "line": 61
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"name\"",
                    "value": "name",
                    "range": [
                      1788,
                      1794
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 61
                      },
                      "start": {
                        "column": 14,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    1780,
                    1794
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 61
                    },
                    "start": {
                      "column": 6,
                      "line": 61
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1779,
                1795
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 61
                },
                "start": {
                  "column": 5,
                  "line": 61
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "range": [
                1798,
                1809
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 61
                },
                "start": {
                  "column": 24,
                  "line": 61
                }
              }
            },
            "range": [
              1779,
              1809
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 61
              },
              "start": {
                "column": 5,
                "line": 61
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1811,
                1812
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 61
                },
                "start": {
                  "column": 37,
                  "line": 61
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1815,
                1816
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 61
                },
                "start": {
                  "column": 41,
                  "line": 61
                }
              }
            },
            "range": [
              1811,
              1816
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 61
              },
              "start": {
                "column": 37,
                "line": 61
              }
            }
          }
        ],
        "range": [
          1779,
          1816
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 61
          },
          "start": {
            "column": 5,
            "line": 61
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
            1818,
            1819
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 61
            },
            "start": {
              "column": 44,
              "line": 61
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1822,
            1823
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 61
            },
            "start": {
              "column": 48,
              "line": 61
            }
          }
        },
        "range": [
          1818,
          1823
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 61
          },
          "start": {
            "column": 44,
            "line": 61
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
            1825,
            1826
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 61
            },
            "start": {
              "column": 51,
              "line": 61
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1825,
          1828
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 61
          },
          "start": {
            "column": 51,
            "line": 61
          }
        }
      },
      "range": [
        1774,
        1857
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 63
        },
        "start": {
          "column": 0,
          "line": 61
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
                    1936,
                    1941
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 65
                    },
                    "start": {
                      "column": 16,
                      "line": 65
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
                    1924,
                    1931
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 65
                    },
                    "start": {
                      "column": 4,
                      "line": 65
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
                    1932,
                    1935
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 65
                    },
                    "start": {
                      "column": 12,
                      "line": 65
                    }
                  }
                },
                "range": [
                  1924,
                  1935
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 65
                  },
                  "start": {
                    "column": 4,
                    "line": 65
                  }
                }
              },
              "optional": false,
              "range": [
                1924,
                1942
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 65
                },
                "start": {
                  "column": 4,
                  "line": 65
                }
              }
            },
            "range": [
              1924,
              1943
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 65
              },
              "start": {
                "column": 4,
                "line": 65
              }
            }
          }
        ],
        "range": [
          1918,
          1945
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 66
          },
          "start": {
            "column": 60,
            "line": 64
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "range": [
                      1864,
                      1869
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 64
                      },
                      "start": {
                        "column": 6,
                        "line": 64
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"name\"",
                    "value": "name",
                    "range": [
                      1872,
                      1878
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 64
                      },
                      "start": {
                        "column": 14,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    1864,
                    1878
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 64
                    },
                    "start": {
                      "column": 6,
                      "line": 64
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1863,
                1879
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 64
                },
                "start": {
                  "column": 5,
                  "line": 64
                }
              }
            },
            "right": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "range": [
                  1882,
                  1895
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 64
                  },
                  "start": {
                    "column": 24,
                    "line": 64
                  }
                }
              },
              "optional": false,
              "range": [
                1882,
                1897
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 64
                },
                "start": {
                  "column": 24,
                  "line": 64
                }
              }
            },
            "range": [
              1863,
              1897
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 64
              },
              "start": {
                "column": 5,
                "line": 64
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1899,
                1900
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 64
                },
                "start": {
                  "column": 41,
                  "line": 64
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1903,
                1904
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 64
                },
                "start": {
                  "column": 45,
                  "line": 64
                }
              }
            },
            "range": [
              1899,
              1904
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 64
              },
              "start": {
                "column": 41,
                "line": 64
              }
            }
          }
        ],
        "range": [
          1863,
          1904
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 64
          },
          "start": {
            "column": 5,
            "line": 64
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
            1906,
            1907
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 64
            },
            "start": {
              "column": 48,
              "line": 64
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1910,
            1911
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 64
            },
            "start": {
              "column": 52,
              "line": 64
            }
          }
        },
        "range": [
          1906,
          1911
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 64
          },
          "start": {
            "column": 48,
            "line": 64
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
            1913,
            1914
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 64
            },
            "start": {
              "column": 55,
              "line": 64
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1913,
          1916
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 64
          },
          "start": {
            "column": 55,
            "line": 64
          }
        }
      },
      "range": [
        1858,
        1945
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 64
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
                    2044,
                    2049
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 68
                    },
                    "start": {
                      "column": 16,
                      "line": 68
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
                    2032,
                    2039
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
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "range": [
                    2040,
                    2043
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 68
                    },
                    "start": {
                      "column": 12,
                      "line": 68
                    }
                  }
                },
                "range": [
                  2032,
                  2043
                ],
                "loc": {
                  "end": {
                    "column": 15,
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
                2032,
                2050
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 68
                },
                "start": {
                  "column": 4,
                  "line": 68
                }
              }
            },
            "range": [
              2032,
              2051
            ],
            "loc": {
              "end": {
                "column": 23,
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
          2026,
          2053
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 69
          },
          "start": {
            "column": 80,
            "line": 67
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameB",
                    "optional": false,
                    "range": [
                      1952,
                      1957
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 67
                      },
                      "start": {
                        "column": 6,
                        "line": 67
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"name\"",
                    "value": "name",
                    "range": [
                      1960,
                      1966
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 67
                      },
                      "start": {
                        "column": 14,
                        "line": 67
                      }
                    }
                  },
                  "range": [
                    1952,
                    1966
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 67
                    },
                    "start": {
                      "column": 6,
                      "line": 67
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1951,
                1967
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 67
                },
                "start": {
                  "column": 5,
                  "line": 67
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    1971,
                    1980
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 67
                    },
                    "start": {
                      "column": 25,
                      "line": 67
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
                        1983,
                        1993
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 67
                        },
                        "start": {
                          "column": 37,
                          "line": 67
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"edging\"",
                      "value": "edging",
                      "range": [
                        1995,
                        2003
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 67
                        },
                        "start": {
                          "column": 49,
                          "line": 67
                        }
                      }
                    }
                  ],
                  "range": [
                    1982,
                    2004
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 67
                    },
                    "start": {
                      "column": 36,
                      "line": 67
                    }
                  }
                }
              ],
              "range": [
                1970,
                2005
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 67
                },
                "start": {
                  "column": 24,
                  "line": 67
                }
              }
            },
            "range": [
              1951,
              2005
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 67
              },
              "start": {
                "column": 5,
                "line": 67
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                2007,
                2008
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 67
                },
                "start": {
                  "column": 61,
                  "line": 67
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2011,
                2012
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 67
                },
                "start": {
                  "column": 65,
                  "line": 67
                }
              }
            },
            "range": [
              2007,
              2012
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 67
              },
              "start": {
                "column": 61,
                "line": 67
              }
            }
          }
        ],
        "range": [
          1951,
          2012
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 67
          },
          "start": {
            "column": 5,
            "line": 67
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
            2014,
            2015
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 67
            },
            "start": {
              "column": 68,
              "line": 67
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2018,
            2019
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 67
            },
            "start": {
              "column": 72,
              "line": 67
            }
          }
        },
        "range": [
          2014,
          2019
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 67
          },
          "start": {
            "column": 68,
            "line": 67
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
            2021,
            2022
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 67
            },
            "start": {
              "column": 75,
              "line": 67
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2021,
          2024
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 67
          },
          "start": {
            "column": 75,
            "line": 67
          }
        }
      },
      "range": [
        1946,
        2053
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 67
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
                    2159,
                    2165
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
                    2147,
                    2154
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
                    2155,
                    2158
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
                  2147,
                  2158
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
                2147,
                2166
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
              2147,
              2167
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
          2141,
          2169
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 73
          },
          "start": {
            "column": 86,
            "line": 71
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "range": [
                      2061,
                      2069
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 71
                      },
                      "start": {
                        "column": 6,
                        "line": 71
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2073,
                        2074
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 71
                        },
                        "start": {
                          "column": 18,
                          "line": 71
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      2072,
                      2074
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 71
                      },
                      "start": {
                        "column": 17,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    2061,
                    2074
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 71
                    },
                    "start": {
                      "column": 6,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "range": [
                      2076,
                      2082
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 71
                      },
                      "start": {
                        "column": 21,
                        "line": 71
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"name\"",
                    "value": "name",
                    "range": [
                      2085,
                      2091
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 71
                      },
                      "start": {
                        "column": 30,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    2076,
                    2091
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 71
                    },
                    "start": {
                      "column": 21,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "range": [
                      2093,
                      2100
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 71
                      },
                      "start": {
                        "column": 38,
                        "line": 71
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"skill\"",
                    "value": "skill",
                    "range": [
                      2103,
                      2110
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 71
                      },
                      "start": {
                        "column": 48,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    2093,
                    2110
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 71
                    },
                    "start": {
                      "column": 38,
                      "line": 71
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2060,
                2111
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 71
                },
                "start": {
                  "column": 5,
                  "line": 71
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "range": [
                2114,
                2120
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 71
                },
                "start": {
                  "column": 59,
                  "line": 71
                }
              }
            },
            "range": [
              2060,
              2120
            ],
            "loc": {
              "end": {
                "column": 65,
                "line": 71
              },
              "start": {
                "column": 5,
                "line": 71
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                2122,
                2123
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 71
                },
                "start": {
                  "column": 67,
                  "line": 71
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2126,
                2127
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 71
                },
                "start": {
                  "column": 71,
                  "line": 71
                }
              }
            },
            "range": [
              2122,
              2127
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 71
              },
              "start": {
                "column": 67,
                "line": 71
              }
            }
          }
        ],
        "range": [
          2060,
          2127
        ],
        "loc": {
          "end": {
            "column": 72,
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
            2129,
            2130
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 71
            },
            "start": {
              "column": 74,
              "line": 71
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2133,
            2134
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 71
            },
            "start": {
              "column": 78,
              "line": 71
            }
          }
        },
        "range": [
          2129,
          2134
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 71
          },
          "start": {
            "column": 74,
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
            2136,
            2137
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 71
            },
            "start": {
              "column": 81,
              "line": 71
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2136,
          2139
        ],
        "loc": {
          "end": {
            "column": 84,
            "line": 71
          },
          "start": {
            "column": 81,
            "line": 71
          }
        }
      },
      "range": [
        2055,
        2169
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
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    2278,
                    2284
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 75
                    },
                    "start": {
                      "column": 16,
                      "line": 75
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
                    2266,
                    2273
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 75
                    },
                    "start": {
                      "column": 4,
                      "line": 75
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
                    2274,
                    2277
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 75
                    },
                    "start": {
                      "column": 12,
                      "line": 75
                    }
                  }
                },
                "range": [
                  2266,
                  2277
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 75
                  },
                  "start": {
                    "column": 4,
                    "line": 75
                  }
                }
              },
              "optional": false,
              "range": [
                2266,
                2285
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 75
                },
                "start": {
                  "column": 4,
                  "line": 75
                }
              }
            },
            "range": [
              2266,
              2286
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 75
              },
              "start": {
                "column": 4,
                "line": 75
              }
            }
          }
        ],
        "range": [
          2260,
          2288
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 76
          },
          "start": {
            "column": 90,
            "line": 74
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "range": [
                      2176,
                      2184
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 74
                      },
                      "start": {
                        "column": 6,
                        "line": 74
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2188,
                        2189
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 74
                        },
                        "start": {
                          "column": 18,
                          "line": 74
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      2187,
                      2189
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 74
                      },
                      "start": {
                        "column": 17,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    2176,
                    2189
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 74
                    },
                    "start": {
                      "column": 6,
                      "line": 74
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "range": [
                      2191,
                      2197
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 74
                      },
                      "start": {
                        "column": 21,
                        "line": 74
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"name\"",
                    "value": "name",
                    "range": [
                      2200,
                      2206
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 74
                      },
                      "start": {
                        "column": 30,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    2191,
                    2206
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 74
                    },
                    "start": {
                      "column": 21,
                      "line": 74
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "range": [
                      2208,
                      2215
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 74
                      },
                      "start": {
                        "column": 38,
                        "line": 74
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"skill\"",
                    "value": "skill",
                    "range": [
                      2218,
                      2225
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 74
                      },
                      "start": {
                        "column": 48,
                        "line": 74
                      }
                    }
                  },
                  "range": [
                    2208,
                    2225
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 74
                    },
                    "start": {
                      "column": 38,
                      "line": 74
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2175,
                2226
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 74
                },
                "start": {
                  "column": 5,
                  "line": 74
                }
              }
            },
            "right": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "range": [
                  2229,
                  2237
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 74
                  },
                  "start": {
                    "column": 59,
                    "line": 74
                  }
                }
              },
              "optional": false,
              "range": [
                2229,
                2239
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 74
                },
                "start": {
                  "column": 59,
                  "line": 74
                }
              }
            },
            "range": [
              2175,
              2239
            ],
            "loc": {
              "end": {
                "column": 69,
                "line": 74
              },
              "start": {
                "column": 5,
                "line": 74
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                2241,
                2242
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 74
                },
                "start": {
                  "column": 71,
                  "line": 74
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2245,
                2246
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 74
                },
                "start": {
                  "column": 75,
                  "line": 74
                }
              }
            },
            "range": [
              2241,
              2246
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 74
              },
              "start": {
                "column": 71,
                "line": 74
              }
            }
          }
        ],
        "range": [
          2175,
          2246
        ],
        "loc": {
          "end": {
            "column": 76,
            "line": 74
          },
          "start": {
            "column": 5,
            "line": 74
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
            2248,
            2249
          ],
          "loc": {
            "end": {
              "column": 79,
              "line": 74
            },
            "start": {
              "column": 78,
              "line": 74
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2252,
            2253
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 74
            },
            "start": {
              "column": 82,
              "line": 74
            }
          }
        },
        "range": [
          2248,
          2253
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 74
          },
          "start": {
            "column": 78,
            "line": 74
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
            2255,
            2256
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 74
            },
            "start": {
              "column": 85,
              "line": 74
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2255,
          2258
        ],
        "loc": {
          "end": {
            "column": 88,
            "line": 74
          },
          "start": {
            "column": 85,
            "line": 74
          }
        }
      },
      "range": [
        2170,
        2288
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 76
        },
        "start": {
          "column": 0,
          "line": 74
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
                    2413,
                    2419
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 78
                    },
                    "start": {
                      "column": 16,
                      "line": 78
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
                    2401,
                    2408
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 78
                    },
                    "start": {
                      "column": 4,
                      "line": 78
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
                    2409,
                    2412
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 78
                    },
                    "start": {
                      "column": 12,
                      "line": 78
                    }
                  }
                },
                "range": [
                  2401,
                  2412
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 78
                  },
                  "start": {
                    "column": 4,
                    "line": 78
                  }
                }
              },
              "optional": false,
              "range": [
                2401,
                2420
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 78
                },
                "start": {
                  "column": 4,
                  "line": 78
                }
              }
            },
            "range": [
              2401,
              2421
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
              }
            }
          }
        ],
        "range": [
          2395,
          2423
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 79
          },
          "start": {
            "column": 106,
            "line": 77
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "range": [
                      2295,
                      2303
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 77
                      },
                      "start": {
                        "column": 6,
                        "line": 77
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        2307,
                        2308
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 77
                        },
                        "start": {
                          "column": 18,
                          "line": 77
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      2306,
                      2308
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 77
                      },
                      "start": {
                        "column": 17,
                        "line": 77
                      }
                    }
                  },
                  "range": [
                    2295,
                    2308
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 77
                    },
                    "start": {
                      "column": 6,
                      "line": 77
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA2",
                    "optional": false,
                    "range": [
                      2310,
                      2316
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 77
                      },
                      "start": {
                        "column": 21,
                        "line": 77
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"name\"",
                    "value": "name",
                    "range": [
                      2319,
                      2325
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 77
                      },
                      "start": {
                        "column": 30,
                        "line": 77
                      }
                    }
                  },
                  "range": [
                    2310,
                    2325
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 77
                    },
                    "start": {
                      "column": 21,
                      "line": 77
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "skillA2",
                    "optional": false,
                    "range": [
                      2327,
                      2334
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 77
                      },
                      "start": {
                        "column": 38,
                        "line": 77
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"skill\"",
                    "value": "skill",
                    "range": [
                      2337,
                      2344
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 77
                      },
                      "start": {
                        "column": 48,
                        "line": 77
                      }
                    }
                  },
                  "range": [
                    2327,
                    2344
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 77
                    },
                    "start": {
                      "column": 38,
                      "line": 77
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2294,
                2345
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 77
                },
                "start": {
                  "column": 5,
                  "line": 77
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "2",
                  "value": 2,
                  "range": [
                    2349,
                    2350
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 77
                    },
                    "start": {
                      "column": 60,
                      "line": 77
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    2352,
                    2361
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 77
                    },
                    "start": {
                      "column": 63,
                      "line": 77
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimming\"",
                  "value": "trimming",
                  "range": [
                    2363,
                    2373
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 77
                    },
                    "start": {
                      "column": 74,
                      "line": 77
                    }
                  }
                }
              ],
              "range": [
                2348,
                2374
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 77
                },
                "start": {
                  "column": 59,
                  "line": 77
                }
              }
            },
            "range": [
              2294,
              2374
            ],
            "loc": {
              "end": {
                "column": 85,
                "line": 77
              },
              "start": {
                "column": 5,
                "line": 77
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                2376,
                2377
              ],
              "loc": {
                "end": {
                  "column": 88,
                  "line": 77
                },
                "start": {
                  "column": 87,
                  "line": 77
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2380,
                2381
              ],
              "loc": {
                "end": {
                  "column": 92,
                  "line": 77
                },
                "start": {
                  "column": 91,
                  "line": 77
                }
              }
            },
            "range": [
              2376,
              2381
            ],
            "loc": {
              "end": {
                "column": 92,
                "line": 77
              },
              "start": {
                "column": 87,
                "line": 77
              }
            }
          }
        ],
        "range": [
          2294,
          2381
        ],
        "loc": {
          "end": {
            "column": 92,
            "line": 77
          },
          "start": {
            "column": 5,
            "line": 77
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
            2383,
            2384
          ],
          "loc": {
            "end": {
              "column": 95,
              "line": 77
            },
            "start": {
              "column": 94,
              "line": 77
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2387,
            2388
          ],
          "loc": {
            "end": {
              "column": 99,
              "line": 77
            },
            "start": {
              "column": 98,
              "line": 77
            }
          }
        },
        "range": [
          2383,
          2388
        ],
        "loc": {
          "end": {
            "column": 99,
            "line": 77
          },
          "start": {
            "column": 94,
            "line": 77
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
            2390,
            2391
          ],
          "loc": {
            "end": {
              "column": 102,
              "line": 77
            },
            "start": {
              "column": 101,
              "line": 77
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2390,
          2393
        ],
        "loc": {
          "end": {
            "column": 104,
            "line": 77
          },
          "start": {
            "column": 101,
            "line": 77
          }
        }
      },
      "range": [
        2289,
        2423
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 77
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
                    2635,
                    2641
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 87
                    },
                    "start": {
                      "column": 16,
                      "line": 87
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
                    2623,
                    2630
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 87
                    },
                    "start": {
                      "column": 4,
                      "line": 87
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
                    2631,
                    2634
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 87
                    },
                    "start": {
                      "column": 12,
                      "line": 87
                    }
                  }
                },
                "range": [
                  2623,
                  2634
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 87
                  },
                  "start": {
                    "column": 4,
                    "line": 87
                  }
                }
              },
              "optional": false,
              "range": [
                2623,
                2642
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 87
                },
                "start": {
                  "column": 4,
                  "line": 87
                }
              }
            },
            "range": [
              2623,
              2643
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 87
              },
              "start": {
                "column": 4,
                "line": 87
              }
            }
          }
        ],
        "range": [
          2617,
          2645
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 88
          },
          "start": {
            "column": 40,
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
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "range": [
                      2438,
                      2444
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 81
                      },
                      "start": {
                        "column": 5,
                        "line": 81
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      2447,
                      2455
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 81
                      },
                      "start": {
                        "column": 14,
                        "line": 81
                      }
                    }
                  },
                  "range": [
                    2438,
                    2455
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 81
                    },
                    "start": {
                      "column": 5,
                      "line": 81
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "range": [
                            2479,
                            2492
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 83
                            },
                            "start": {
                              "column": 12,
                              "line": 83
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"primary\"",
                          "value": "primary",
                          "range": [
                            2495,
                            2504
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 83
                            },
                            "start": {
                              "column": 28,
                              "line": 83
                            }
                          }
                        },
                        "range": [
                          2479,
                          2504
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 83
                          },
                          "start": {
                            "column": 12,
                            "line": 83
                          }
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "range": [
                            2518,
                            2533
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 84
                            },
                            "start": {
                              "column": 12,
                              "line": 84
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"secondary\"",
                          "value": "secondary",
                          "range": [
                            2536,
                            2547
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 84
                            },
                            "start": {
                              "column": 30,
                              "line": 84
                            }
                          }
                        },
                        "range": [
                          2518,
                          2547
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 84
                          },
                          "start": {
                            "column": 12,
                            "line": 84
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      2465,
                      2557
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 85
                      },
                      "start": {
                        "column": 8,
                        "line": 82
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "\"none\"",
                        "value": "none",
                        "range": [
                          2561,
                          2567
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 85
                          },
                          "start": {
                            "column": 13,
                            "line": 85
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"none\"",
                        "value": "none",
                        "range": [
                          2569,
                          2575
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 85
                          },
                          "start": {
                            "column": 21,
                            "line": 85
                          }
                        }
                      }
                    ],
                    "range": [
                      2560,
                      2576
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 85
                      },
                      "start": {
                        "column": 12,
                        "line": 85
                      }
                    }
                  },
                  "range": [
                    2465,
                    2576
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 85
                    },
                    "start": {
                      "column": 8,
                      "line": 82
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2437,
                2582
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 86
                },
                "start": {
                  "column": 4,
                  "line": 81
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "range": [
                2585,
                2596
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 86
                },
                "start": {
                  "column": 8,
                  "line": 86
                }
              }
            },
            "range": [
              2437,
              2596
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 86
              },
              "start": {
                "column": 4,
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
                2598,
                2599
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 86
                },
                "start": {
                  "column": 21,
                  "line": 86
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2602,
                2603
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 86
                },
                "start": {
                  "column": 25,
                  "line": 86
                }
              }
            },
            "range": [
              2598,
              2603
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 86
              },
              "start": {
                "column": 21,
                "line": 86
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2429,
          2603
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 86
          },
          "start": {
            "column": 5,
            "line": 80
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
            2605,
            2606
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 86
            },
            "start": {
              "column": 28,
              "line": 86
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2609,
            2610
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 86
            },
            "start": {
              "column": 32,
              "line": 86
            }
          }
        },
        "range": [
          2605,
          2610
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 86
          },
          "start": {
            "column": 28,
            "line": 86
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
            2612,
            2613
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 86
            },
            "start": {
              "column": 35,
              "line": 86
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2612,
          2615
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 86
          },
          "start": {
            "column": 35,
            "line": 86
          }
        }
      },
      "range": [
        2424,
        2645
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 80
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
                    2833,
                    2839
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 95
                    },
                    "start": {
                      "column": 16,
                      "line": 95
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
                    2821,
                    2828
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
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "range": [
                    2829,
                    2832
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 95
                    },
                    "start": {
                      "column": 12,
                      "line": 95
                    }
                  }
                },
                "range": [
                  2821,
                  2832
                ],
                "loc": {
                  "end": {
                    "column": 15,
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
                2821,
                2840
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 95
                },
                "start": {
                  "column": 4,
                  "line": 95
                }
              }
            },
            "range": [
              2821,
              2841
            ],
            "loc": {
              "end": {
                "column": 24,
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
          2815,
          2843
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 96
          },
          "start": {
            "column": 40,
            "line": 94
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "range": [
                      2652,
                      2658
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 89
                      },
                      "start": {
                        "column": 6,
                        "line": 89
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      2661,
                      2669
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 89
                      },
                      "start": {
                        "column": 15,
                        "line": 89
                      }
                    }
                  },
                  "range": [
                    2652,
                    2669
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 89
                    },
                    "start": {
                      "column": 6,
                      "line": 89
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "range": [
                            2685,
                            2698
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 91
                            },
                            "start": {
                              "column": 8,
                              "line": 91
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"primary\"",
                          "value": "primary",
                          "range": [
                            2701,
                            2710
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 91
                            },
                            "start": {
                              "column": 24,
                              "line": 91
                            }
                          }
                        },
                        "range": [
                          2685,
                          2710
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 91
                          },
                          "start": {
                            "column": 8,
                            "line": 91
                          }
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "range": [
                            2720,
                            2735
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 92
                            },
                            "start": {
                              "column": 8,
                              "line": 92
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"secondary\"",
                          "value": "secondary",
                          "range": [
                            2738,
                            2749
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 92
                            },
                            "start": {
                              "column": 26,
                              "line": 92
                            }
                          }
                        },
                        "range": [
                          2720,
                          2749
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 92
                          },
                          "start": {
                            "column": 8,
                            "line": 92
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      2675,
                      2755
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 93
                      },
                      "start": {
                        "column": 4,
                        "line": 90
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "\"none\"",
                        "value": "none",
                        "range": [
                          2759,
                          2765
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 93
                          },
                          "start": {
                            "column": 9,
                            "line": 93
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"none\"",
                        "value": "none",
                        "range": [
                          2767,
                          2773
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 93
                          },
                          "start": {
                            "column": 17,
                            "line": 93
                          }
                        }
                      }
                    ],
                    "range": [
                      2758,
                      2774
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 93
                      },
                      "start": {
                        "column": 8,
                        "line": 93
                      }
                    }
                  },
                  "range": [
                    2675,
                    2774
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 93
                    },
                    "start": {
                      "column": 4,
                      "line": 90
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2651,
                2776
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 94
                },
                "start": {
                  "column": 5,
                  "line": 89
                }
              }
            },
            "right": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getMultiRobot",
                "optional": false,
                "range": [
                  2779,
                  2792
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 94
                  },
                  "start": {
                    "column": 4,
                    "line": 94
                  }
                }
              },
              "optional": false,
              "range": [
                2779,
                2794
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 94
                },
                "start": {
                  "column": 4,
                  "line": 94
                }
              }
            },
            "range": [
              2651,
              2794
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 94
              },
              "start": {
                "column": 5,
                "line": 89
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                2796,
                2797
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 94
                },
                "start": {
                  "column": 21,
                  "line": 94
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2800,
                2801
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 94
                },
                "start": {
                  "column": 25,
                  "line": 94
                }
              }
            },
            "range": [
              2796,
              2801
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 94
              },
              "start": {
                "column": 21,
                "line": 94
              }
            }
          }
        ],
        "range": [
          2651,
          2801
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 94
          },
          "start": {
            "column": 5,
            "line": 89
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
            2803,
            2804
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 94
            },
            "start": {
              "column": 28,
              "line": 94
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2807,
            2808
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 94
            },
            "start": {
              "column": 32,
              "line": 94
            }
          }
        },
        "range": [
          2803,
          2808
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 94
          },
          "start": {
            "column": 28,
            "line": 94
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
            2810,
            2811
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 94
            },
            "start": {
              "column": 35,
              "line": 94
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2810,
          2813
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 94
          },
          "start": {
            "column": 35,
            "line": 94
          }
        }
      },
      "range": [
        2646,
        2843
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 89
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
                    3051,
                    3057
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 103
                    },
                    "start": {
                      "column": 16,
                      "line": 103
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
                    3039,
                    3046
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 103
                    },
                    "start": {
                      "column": 4,
                      "line": 103
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
                    3047,
                    3050
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 103
                    },
                    "start": {
                      "column": 12,
                      "line": 103
                    }
                  }
                },
                "range": [
                  3039,
                  3050
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 103
                  },
                  "start": {
                    "column": 4,
                    "line": 103
                  }
                }
              },
              "optional": false,
              "range": [
                3039,
                3058
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 103
                },
                "start": {
                  "column": 4,
                  "line": 103
                }
              }
            },
            "range": [
              3039,
              3059
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 103
              },
              "start": {
                "column": 4,
                "line": 103
              }
            }
          }
        ],
        "range": [
          3033,
          3061
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 104
          },
          "start": {
            "column": 60,
            "line": 102
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameMA",
                    "optional": false,
                    "range": [
                      2850,
                      2856
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 97
                      },
                      "start": {
                        "column": 6,
                        "line": 97
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      2859,
                      2867
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 97
                      },
                      "start": {
                        "column": 15,
                        "line": 97
                      }
                    }
                  },
                  "range": [
                    2850,
                    2867
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 97
                    },
                    "start": {
                      "column": 6,
                      "line": 97
                    }
                  }
                },
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "primarySkillA",
                          "optional": false,
                          "range": [
                            2883,
                            2896
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 99
                            },
                            "start": {
                              "column": 8,
                              "line": 99
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"primary\"",
                          "value": "primary",
                          "range": [
                            2899,
                            2908
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 99
                            },
                            "start": {
                              "column": 24,
                              "line": 99
                            }
                          }
                        },
                        "range": [
                          2883,
                          2908
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 99
                          },
                          "start": {
                            "column": 8,
                            "line": 99
                          }
                        }
                      },
                      {
                        "type": "AssignmentPattern",
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "secondarySkillA",
                          "optional": false,
                          "range": [
                            2918,
                            2933
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 100
                            },
                            "start": {
                              "column": 8,
                              "line": 100
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"secondary\"",
                          "value": "secondary",
                          "range": [
                            2936,
                            2947
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 100
                            },
                            "start": {
                              "column": 26,
                              "line": 100
                            }
                          }
                        },
                        "range": [
                          2918,
                          2947
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 100
                          },
                          "start": {
                            "column": 8,
                            "line": 100
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      2873,
                      2953
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 101
                      },
                      "start": {
                        "column": 4,
                        "line": 98
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "raw": "\"none\"",
                        "value": "none",
                        "range": [
                          2957,
                          2963
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 101
                          },
                          "start": {
                            "column": 9,
                            "line": 101
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"none\"",
                        "value": "none",
                        "range": [
                          2965,
                          2971
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 101
                          },
                          "start": {
                            "column": 17,
                            "line": 101
                          }
                        }
                      }
                    ],
                    "range": [
                      2956,
                      2972
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 101
                      },
                      "start": {
                        "column": 8,
                        "line": 101
                      }
                    }
                  },
                  "range": [
                    2873,
                    2972
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 101
                    },
                    "start": {
                      "column": 4,
                      "line": 98
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2849,
                2974
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 102
                },
                "start": {
                  "column": 5,
                  "line": 97
                }
              }
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    2978,
                    2987
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 102
                    },
                    "start": {
                      "column": 5,
                      "line": 102
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
                        2990,
                        3000
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 102
                        },
                        "start": {
                          "column": 17,
                          "line": 102
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"edging\"",
                      "value": "edging",
                      "range": [
                        3002,
                        3010
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 102
                        },
                        "start": {
                          "column": 29,
                          "line": 102
                        }
                      }
                    }
                  ],
                  "range": [
                    2989,
                    3011
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 102
                    },
                    "start": {
                      "column": 16,
                      "line": 102
                    }
                  }
                }
              ],
              "range": [
                2977,
                3012
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 102
                },
                "start": {
                  "column": 4,
                  "line": 102
                }
              }
            },
            "range": [
              2849,
              3012
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 102
              },
              "start": {
                "column": 5,
                "line": 97
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                3014,
                3015
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 102
                },
                "start": {
                  "column": 41,
                  "line": 102
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                3018,
                3019
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 102
                },
                "start": {
                  "column": 45,
                  "line": 102
                }
              }
            },
            "range": [
              3014,
              3019
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 102
              },
              "start": {
                "column": 41,
                "line": 102
              }
            }
          }
        ],
        "range": [
          2849,
          3019
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 102
          },
          "start": {
            "column": 5,
            "line": 97
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
            3021,
            3022
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 102
            },
            "start": {
              "column": 48,
              "line": 102
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
              "column": 53,
              "line": 102
            },
            "start": {
              "column": 52,
              "line": 102
            }
          }
        },
        "range": [
          3021,
          3026
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 102
          },
          "start": {
            "column": 48,
            "line": 102
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
            3028,
            3029
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 102
            },
            "start": {
              "column": 55,
              "line": 102
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          3028,
          3031
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 102
          },
          "start": {
            "column": 55,
            "line": 102
          }
        }
      },
      "range": [
        2844,
        3061
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 104
        },
        "start": {
          "column": 0,
          "line": 97
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
                    3146,
                    3154
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 107
                    },
                    "start": {
                      "column": 16,
                      "line": 107
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
                    3134,
                    3141
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 107
                    },
                    "start": {
                      "column": 4,
                      "line": 107
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
                    3142,
                    3145
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 107
                    },
                    "start": {
                      "column": 12,
                      "line": 107
                    }
                  }
                },
                "range": [
                  3134,
                  3145
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 107
                  },
                  "start": {
                    "column": 4,
                    "line": 107
                  }
                }
              },
              "optional": false,
              "range": [
                3134,
                3155
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 107
                },
                "start": {
                  "column": 4,
                  "line": 107
                }
              }
            },
            "range": [
              3134,
              3156
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 107
              },
              "start": {
                "column": 4,
                "line": 107
              }
            }
          }
        ],
        "range": [
          3128,
          3158
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 108
          },
          "start": {
            "column": 65,
            "line": 106
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "range": [
                      3069,
                      3077
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 106
                      },
                      "start": {
                        "column": 6,
                        "line": 106
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        3081,
                        3082
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 106
                        },
                        "start": {
                          "column": 18,
                          "line": 106
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      3080,
                      3082
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 106
                      },
                      "start": {
                        "column": 17,
                        "line": 106
                      }
                    }
                  },
                  "range": [
                    3069,
                    3082
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 106
                    },
                    "start": {
                      "column": 6,
                      "line": 106
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
                      3087,
                      3097
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 106
                      },
                      "start": {
                        "column": 24,
                        "line": 106
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    3084,
                    3097
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 106
                    },
                    "start": {
                      "column": 21,
                      "line": 106
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                3068,
                3098
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 106
                },
                "start": {
                  "column": 5,
                  "line": 106
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "range": [
                3101,
                3107
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 106
                },
                "start": {
                  "column": 38,
                  "line": 106
                }
              }
            },
            "range": [
              3068,
              3107
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 106
              },
              "start": {
                "column": 5,
                "line": 106
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                3109,
                3110
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 106
                },
                "start": {
                  "column": 46,
                  "line": 106
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                3113,
                3114
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 106
                },
                "start": {
                  "column": 50,
                  "line": 106
                }
              }
            },
            "range": [
              3109,
              3114
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 106
              },
              "start": {
                "column": 46,
                "line": 106
              }
            }
          }
        ],
        "range": [
          3068,
          3114
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 106
          },
          "start": {
            "column": 5,
            "line": 106
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
            3116,
            3117
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 106
            },
            "start": {
              "column": 53,
              "line": 106
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            3120,
            3121
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 106
            },
            "start": {
              "column": 57,
              "line": 106
            }
          }
        },
        "range": [
          3116,
          3121
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 106
          },
          "start": {
            "column": 53,
            "line": 106
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
            3123,
            3124
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 106
            },
            "start": {
              "column": 60,
              "line": 106
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          3123,
          3126
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 106
          },
          "start": {
            "column": 60,
            "line": 106
          }
        }
      },
      "range": [
        3063,
        3158
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 108
        },
        "start": {
          "column": 0,
          "line": 106
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
                    3246,
                    3254
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 110
                    },
                    "start": {
                      "column": 16,
                      "line": 110
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
                    3234,
                    3241
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 110
                    },
                    "start": {
                      "column": 4,
                      "line": 110
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
                    3242,
                    3245
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 110
                    },
                    "start": {
                      "column": 12,
                      "line": 110
                    }
                  }
                },
                "range": [
                  3234,
                  3245
                ],
                "loc": {
                  "end": {
                    "column": 15,
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
                3234,
                3255
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 110
                },
                "start": {
                  "column": 4,
                  "line": 110
                }
              }
            },
            "range": [
              3234,
              3256
            ],
            "loc": {
              "end": {
                "column": 26,
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
          3228,
          3258
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 111
          },
          "start": {
            "column": 69,
            "line": 109
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "range": [
                      3165,
                      3173
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 109
                      },
                      "start": {
                        "column": 6,
                        "line": 109
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        3177,
                        3178
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 109
                        },
                        "start": {
                          "column": 18,
                          "line": 109
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      3176,
                      3178
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 109
                      },
                      "start": {
                        "column": 17,
                        "line": 109
                      }
                    }
                  },
                  "range": [
                    3165,
                    3178
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 109
                    },
                    "start": {
                      "column": 6,
                      "line": 109
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
                      3183,
                      3193
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 109
                      },
                      "start": {
                        "column": 24,
                        "line": 109
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    3180,
                    3193
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 109
                    },
                    "start": {
                      "column": 21,
                      "line": 109
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                3164,
                3194
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 109
                },
                "start": {
                  "column": 5,
                  "line": 109
                }
              }
            },
            "right": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRobot",
                "optional": false,
                "range": [
                  3197,
                  3205
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 109
                  },
                  "start": {
                    "column": 38,
                    "line": 109
                  }
                }
              },
              "optional": false,
              "range": [
                3197,
                3207
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 109
                },
                "start": {
                  "column": 38,
                  "line": 109
                }
              }
            },
            "range": [
              3164,
              3207
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 109
              },
              "start": {
                "column": 5,
                "line": 109
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                3209,
                3210
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 109
                },
                "start": {
                  "column": 50,
                  "line": 109
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                3213,
                3214
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 109
                },
                "start": {
                  "column": 54,
                  "line": 109
                }
              }
            },
            "range": [
              3209,
              3214
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 109
              },
              "start": {
                "column": 50,
                "line": 109
              }
            }
          }
        ],
        "range": [
          3164,
          3214
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 109
          },
          "start": {
            "column": 5,
            "line": 109
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
            3216,
            3217
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 109
            },
            "start": {
              "column": 57,
              "line": 109
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            3220,
            3221
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 109
            },
            "start": {
              "column": 61,
              "line": 109
            }
          }
        },
        "range": [
          3216,
          3221
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 109
          },
          "start": {
            "column": 57,
            "line": 109
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
            3223,
            3224
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 109
            },
            "start": {
              "column": 64,
              "line": 109
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          3223,
          3226
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 109
          },
          "start": {
            "column": 64,
            "line": 109
          }
        }
      },
      "range": [
        3159,
        3258
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 109
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
                    3369,
                    3377
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 113
                    },
                    "start": {
                      "column": 16,
                      "line": 113
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
                    3357,
                    3364
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 113
                    },
                    "start": {
                      "column": 4,
                      "line": 113
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
                    3365,
                    3368
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 113
                    },
                    "start": {
                      "column": 12,
                      "line": 113
                    }
                  }
                },
                "range": [
                  3357,
                  3368
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 113
                  },
                  "start": {
                    "column": 4,
                    "line": 113
                  }
                }
              },
              "optional": false,
              "range": [
                3357,
                3378
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 113
                },
                "start": {
                  "column": 4,
                  "line": 113
                }
              }
            },
            "range": [
              3357,
              3379
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 113
              },
              "start": {
                "column": 4,
                "line": 113
              }
            }
          }
        ],
        "range": [
          3351,
          3381
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 114
          },
          "start": {
            "column": 92,
            "line": 112
          }
        }
      },
      "init": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA3",
                    "optional": false,
                    "range": [
                      3265,
                      3273
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 112
                      },
                      "start": {
                        "column": 6,
                        "line": 112
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        3277,
                        3278
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 112
                        },
                        "start": {
                          "column": 18,
                          "line": 112
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      3276,
                      3278
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 112
                      },
                      "start": {
                        "column": 17,
                        "line": 112
                      }
                    }
                  },
                  "range": [
                    3265,
                    3278
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 112
                    },
                    "start": {
                      "column": 6,
                      "line": 112
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
                      3283,
                      3293
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 112
                      },
                      "start": {
                        "column": 24,
                        "line": 112
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    3280,
                    3293
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 112
                    },
                    "start": {
                      "column": 21,
                      "line": 112
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                3264,
                3294
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 112
                },
                "start": {
                  "column": 5,
                  "line": 112
                }
              }
            },
            "right": {
              "type": "TSTypeAssertion",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "raw": "2",
                    "value": 2,
                    "range": [
                      3305,
                      3306
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 112
                      },
                      "start": {
                        "column": 46,
                        "line": 112
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"trimmer\"",
                    "value": "trimmer",
                    "range": [
                      3308,
                      3317
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 112
                      },
                      "start": {
                        "column": 49,
                        "line": 112
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"trimming\"",
                    "value": "trimming",
                    "range": [
                      3319,
                      3329
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 112
                      },
                      "start": {
                        "column": 60,
                        "line": 112
                      }
                    }
                  }
                ],
                "range": [
                  3304,
                  3330
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 112
                  },
                  "start": {
                    "column": 45,
                    "line": 112
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    3298,
                    3303
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 112
                    },
                    "start": {
                      "column": 39,
                      "line": 112
                    }
                  }
                },
                "range": [
                  3298,
                  3303
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 112
                  },
                  "start": {
                    "column": 39,
                    "line": 112
                  }
                }
              },
              "range": [
                3297,
                3330
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 112
                },
                "start": {
                  "column": 38,
                  "line": 112
                }
              }
            },
            "range": [
              3264,
              3330
            ],
            "loc": {
              "end": {
                "column": 71,
                "line": 112
              },
              "start": {
                "column": 5,
                "line": 112
              }
            }
          },
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                3332,
                3333
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 112
                },
                "start": {
                  "column": 73,
                  "line": 112
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                3336,
                3337
              ],
              "loc": {
                "end": {
                  "column": 78,
                  "line": 112
                },
                "start": {
                  "column": 77,
                  "line": 112
                }
              }
            },
            "range": [
              3332,
              3337
            ],
            "loc": {
              "end": {
                "column": 78,
                "line": 112
              },
              "start": {
                "column": 73,
                "line": 112
              }
            }
          }
        ],
        "range": [
          3264,
          3337
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 112
          },
          "start": {
            "column": 5,
            "line": 112
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
            3339,
            3340
          ],
          "loc": {
            "end": {
              "column": 81,
              "line": 112
            },
            "start": {
              "column": 80,
              "line": 112
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            3343,
            3344
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 112
            },
            "start": {
              "column": 84,
              "line": 112
            }
          }
        },
        "range": [
          3339,
          3344
        ],
        "loc": {
          "end": {
            "column": 85,
            "line": 112
          },
          "start": {
            "column": 80,
            "line": 112
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
            3346,
            3347
          ],
          "loc": {
            "end": {
              "column": 88,
              "line": 112
            },
            "start": {
              "column": 87,
              "line": 112
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          3346,
          3349
        ],
        "loc": {
          "end": {
            "column": 90,
            "line": 112
          },
          "start": {
            "column": 87,
            "line": 112
          }
        }
      },
      "range": [
        3259,
        3381
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 114
        },
        "start": {
          "column": 0,
          "line": 112
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 114
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
