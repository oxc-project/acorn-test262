__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3124
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
                    778,
                    783
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
                    766,
                    773
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
                    774,
                    777
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
                  766,
                  777
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
                766,
                784
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
              766,
              785
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
          760,
          787
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 44,
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
                }
              ],
              "optional": false,
              "range": [
                721,
                730
              ],
              "loc": {
                "end": {
                  "column": 14,
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
                733,
                739
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 24
                },
                "start": {
                  "column": 17,
                  "line": 24
                }
              }
            },
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
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                741,
                742
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 24
                },
                "start": {
                  "column": 25,
                  "line": 24
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                745,
                746
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 24
                },
                "start": {
                  "column": 29,
                  "line": 24
                }
              }
            },
            "range": [
              741,
              746
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 24
              },
              "start": {
                "column": 25,
                "line": 24
              }
            }
          }
        ],
        "range": [
          721,
          746
        ],
        "loc": {
          "end": {
            "column": 30,
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
            748,
            749
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 24
            },
            "start": {
              "column": 32,
              "line": 24
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            752,
            753
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 24
            },
            "start": {
              "column": 36,
              "line": 24
            }
          }
        },
        "range": [
          748,
          753
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 24
          },
          "start": {
            "column": 32,
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
            755,
            756
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 24
            },
            "start": {
              "column": 39,
              "line": 24
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          755,
          758
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 24
          },
          "start": {
            "column": 39,
            "line": 24
          }
        }
      },
      "range": [
        716,
        787
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
                    854,
                    859
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
                    842,
                    849
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
                    850,
                    853
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
                  842,
                  853
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
                842,
                860
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
              842,
              861
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
          836,
          863
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 48,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "range": [
                    796,
                    801
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
                }
              ],
              "optional": false,
              "range": [
                793,
                802
              ],
              "loc": {
                "end": {
                  "column": 14,
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
                  805,
                  813
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 27
                  },
                  "start": {
                    "column": 17,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "range": [
                805,
                815
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 27
                },
                "start": {
                  "column": 17,
                  "line": 27
                }
              }
            },
            "range": [
              793,
              815
            ],
            "loc": {
              "end": {
                "column": 27,
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
                817,
                818
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 27
                },
                "start": {
                  "column": 29,
                  "line": 27
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                821,
                822
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 27
                },
                "start": {
                  "column": 33,
                  "line": 27
                }
              }
            },
            "range": [
              817,
              822
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 27
              },
              "start": {
                "column": 29,
                "line": 27
              }
            }
          }
        ],
        "range": [
          793,
          822
        ],
        "loc": {
          "end": {
            "column": 34,
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
            824,
            825
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 27
            },
            "start": {
              "column": 36,
              "line": 27
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            828,
            829
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 27
            },
            "start": {
              "column": 40,
              "line": 27
            }
          }
        },
        "range": [
          824,
          829
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 27
          },
          "start": {
            "column": 36,
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
            831,
            832
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 27
            },
            "start": {
              "column": 43,
              "line": 27
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          831,
          834
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 27
          },
          "start": {
            "column": 43,
            "line": 27
          }
        }
      },
      "range": [
        788,
        863
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
                    946,
                    951
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
                    934,
                    941
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
                    942,
                    945
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
                  934,
                  945
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
                934,
                952
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
              934,
              953
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
          928,
          955
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 64,
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
                      "column": 13,
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
                869,
                878
              ],
              "loc": {
                "end": {
                  "column": 14,
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
                    882,
                    883
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
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    885,
                    894
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 30
                    },
                    "start": {
                      "column": 21,
                      "line": 30
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimming\"",
                  "value": "trimming",
                  "range": [
                    896,
                    906
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 30
                    },
                    "start": {
                      "column": 32,
                      "line": 30
                    }
                  }
                }
              ],
              "range": [
                881,
                907
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 30
                },
                "start": {
                  "column": 17,
                  "line": 30
                }
              }
            },
            "range": [
              869,
              907
            ],
            "loc": {
              "end": {
                "column": 43,
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
                909,
                910
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 30
                },
                "start": {
                  "column": 45,
                  "line": 30
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                913,
                914
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 30
                },
                "start": {
                  "column": 49,
                  "line": 30
                }
              }
            },
            "range": [
              909,
              914
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 30
              },
              "start": {
                "column": 45,
                "line": 30
              }
            }
          }
        ],
        "range": [
          869,
          914
        ],
        "loc": {
          "end": {
            "column": 50,
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
            916,
            917
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 30
            },
            "start": {
              "column": 52,
              "line": 30
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            920,
            921
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 30
            },
            "start": {
              "column": 56,
              "line": 30
            }
          }
        },
        "range": [
          916,
          921
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 30
          },
          "start": {
            "column": 52,
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
            923,
            924
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 30
            },
            "start": {
              "column": 59,
              "line": 30
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          923,
          926
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 30
          },
          "start": {
            "column": 59,
            "line": 30
          }
        }
      },
      "range": [
        864,
        955
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
                    1050,
                    1063
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
                    1038,
                    1045
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
                    1046,
                    1049
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
                  1038,
                  1049
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
                1038,
                1064
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
              1038,
              1065
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
          1032,
          1067
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 76,
            "line": 33
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "range": [
                        965,
                        978
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 33
                        },
                        "start": {
                          "column": 9,
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
                        980,
                        995
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 33
                        },
                        "start": {
                          "column": 24,
                          "line": 33
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    964,
                    996
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 33
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
                961,
                997
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 33
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
                1000,
                1011
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 33
                },
                "start": {
                  "column": 44,
                  "line": 33
                }
              }
            },
            "range": [
              961,
              1011
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 33
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
                1013,
                1014
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 33
                },
                "start": {
                  "column": 57,
                  "line": 33
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1017,
                1018
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 33
                },
                "start": {
                  "column": 61,
                  "line": 33
                }
              }
            },
            "range": [
              1013,
              1018
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 33
              },
              "start": {
                "column": 57,
                "line": 33
              }
            }
          }
        ],
        "range": [
          961,
          1018
        ],
        "loc": {
          "end": {
            "column": 62,
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
            1020,
            1021
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 33
            },
            "start": {
              "column": 64,
              "line": 33
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1024,
            1025
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 33
            },
            "start": {
              "column": 68,
              "line": 33
            }
          }
        },
        "range": [
          1020,
          1025
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 33
          },
          "start": {
            "column": 64,
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
            1027,
            1028
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 33
            },
            "start": {
              "column": 71,
              "line": 33
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1027,
          1030
        ],
        "loc": {
          "end": {
            "column": 74,
            "line": 33
          },
          "start": {
            "column": 71,
            "line": 33
          }
        }
      },
      "range": [
        956,
        1067
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
                  "name": "primarySkillA",
                  "optional": false,
                  "range": [
                    1166,
                    1179
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
                    1154,
                    1161
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
                    1162,
                    1165
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
                  1154,
                  1165
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
                1154,
                1180
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
              1154,
              1181
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
          1148,
          1183
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 80,
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "range": [
                        1077,
                        1090
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 36
                        },
                        "start": {
                          "column": 9,
                          "line": 36
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "range": [
                        1092,
                        1107
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 36
                        },
                        "start": {
                          "column": 24,
                          "line": 36
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    1076,
                    1108
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 36
                    },
                    "start": {
                      "column": 8,
                      "line": 36
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1073,
                1109
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 36
                },
                "start": {
                  "column": 5,
                  "line": 36
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
                  1112,
                  1125
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 36
                  },
                  "start": {
                    "column": 44,
                    "line": 36
                  }
                }
              },
              "optional": false,
              "range": [
                1112,
                1127
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 36
                },
                "start": {
                  "column": 44,
                  "line": 36
                }
              }
            },
            "range": [
              1073,
              1127
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 36
              },
              "start": {
                "column": 5,
                "line": 36
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
                1129,
                1130
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 36
                },
                "start": {
                  "column": 61,
                  "line": 36
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1133,
                1134
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 36
                },
                "start": {
                  "column": 65,
                  "line": 36
                }
              }
            },
            "range": [
              1129,
              1134
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 36
              },
              "start": {
                "column": 61,
                "line": 36
              }
            }
          }
        ],
        "range": [
          1073,
          1134
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 36
          },
          "start": {
            "column": 5,
            "line": 36
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
            1136,
            1137
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 36
            },
            "start": {
              "column": 68,
              "line": 36
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1140,
            1141
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 36
            },
            "start": {
              "column": 72,
              "line": 36
            }
          }
        },
        "range": [
          1136,
          1141
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 36
          },
          "start": {
            "column": 68,
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
            1143,
            1144
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
        "operator": "++",
        "prefix": false,
        "range": [
          1143,
          1146
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 36
          },
          "start": {
            "column": 75,
            "line": 36
          }
        }
      },
      "range": [
        1068,
        1183
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 36
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
                    1302,
                    1315
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 40
                    },
                    "start": {
                      "column": 16,
                      "line": 40
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
                    1290,
                    1297
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
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "range": [
                    1298,
                    1301
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 40
                    },
                    "start": {
                      "column": 12,
                      "line": 40
                    }
                  }
                },
                "range": [
                  1290,
                  1301
                ],
                "loc": {
                  "end": {
                    "column": 15,
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
                1290,
                1316
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 40
                },
                "start": {
                  "column": 4,
                  "line": 40
                }
              }
            },
            "range": [
              1290,
              1317
            ],
            "loc": {
              "end": {
                "column": 31,
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
          1284,
          1319
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 41
          },
          "start": {
            "column": 100,
            "line": 39
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "primarySkillA",
                      "optional": false,
                      "range": [
                        1193,
                        1206
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 39
                        },
                        "start": {
                          "column": 9,
                          "line": 39
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "range": [
                        1208,
                        1223
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 39
                        },
                        "start": {
                          "column": 24,
                          "line": 39
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    1192,
                    1224
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 39
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
                1189,
                1225
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 39
                },
                "start": {
                  "column": 5,
                  "line": 39
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
                    1229,
                    1238
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 39
                    },
                    "start": {
                      "column": 45,
                      "line": 39
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
                        1241,
                        1251
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 39
                        },
                        "start": {
                          "column": 57,
                          "line": 39
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"edging\"",
                      "value": "edging",
                      "range": [
                        1253,
                        1261
                      ],
                      "loc": {
                        "end": {
                          "column": 77,
                          "line": 39
                        },
                        "start": {
                          "column": 69,
                          "line": 39
                        }
                      }
                    }
                  ],
                  "range": [
                    1240,
                    1262
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 39
                    },
                    "start": {
                      "column": 56,
                      "line": 39
                    }
                  }
                }
              ],
              "range": [
                1228,
                1263
              ],
              "loc": {
                "end": {
                  "column": 79,
                  "line": 39
                },
                "start": {
                  "column": 44,
                  "line": 39
                }
              }
            },
            "range": [
              1189,
              1263
            ],
            "loc": {
              "end": {
                "column": 79,
                "line": 39
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
                1265,
                1266
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 39
                },
                "start": {
                  "column": 81,
                  "line": 39
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1269,
                1270
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 39
                },
                "start": {
                  "column": 85,
                  "line": 39
                }
              }
            },
            "range": [
              1265,
              1270
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 39
              },
              "start": {
                "column": 81,
                "line": 39
              }
            }
          }
        ],
        "range": [
          1189,
          1270
        ],
        "loc": {
          "end": {
            "column": 86,
            "line": 39
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
            1272,
            1273
          ],
          "loc": {
            "end": {
              "column": 89,
              "line": 39
            },
            "start": {
              "column": 88,
              "line": 39
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1276,
            1277
          ],
          "loc": {
            "end": {
              "column": 93,
              "line": 39
            },
            "start": {
              "column": 92,
              "line": 39
            }
          }
        },
        "range": [
          1272,
          1277
        ],
        "loc": {
          "end": {
            "column": 93,
            "line": 39
          },
          "start": {
            "column": 88,
            "line": 39
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
            1279,
            1280
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 39
            },
            "start": {
              "column": 95,
              "line": 39
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1279,
          1282
        ],
        "loc": {
          "end": {
            "column": 98,
            "line": 39
          },
          "start": {
            "column": 95,
            "line": 39
          }
        }
      },
      "range": [
        1184,
        1319
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 41
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
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1383,
                    1390
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
                    1371,
                    1378
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
                    1379,
                    1382
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
                  1371,
                  1382
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
                1371,
                1391
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
              1371,
              1392
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
          1365,
          1394
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 44,
            "line": 43
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1327,
                    1334
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 43
                    },
                    "start": {
                      "column": 6,
                      "line": 43
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1326,
                1335
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 43
                },
                "start": {
                  "column": 5,
                  "line": 43
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "range": [
                1338,
                1344
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 43
                },
                "start": {
                  "column": 17,
                  "line": 43
                }
              }
            },
            "range": [
              1326,
              1344
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 43
              },
              "start": {
                "column": 5,
                "line": 43
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
                1346,
                1347
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 43
                },
                "start": {
                  "column": 25,
                  "line": 43
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1350,
                1351
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 43
                },
                "start": {
                  "column": 29,
                  "line": 43
                }
              }
            },
            "range": [
              1346,
              1351
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 43
              },
              "start": {
                "column": 25,
                "line": 43
              }
            }
          }
        ],
        "range": [
          1326,
          1351
        ],
        "loc": {
          "end": {
            "column": 30,
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
            1353,
            1354
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 43
            },
            "start": {
              "column": 32,
              "line": 43
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1357,
            1358
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 43
            },
            "start": {
              "column": 36,
              "line": 43
            }
          }
        },
        "range": [
          1353,
          1358
        ],
        "loc": {
          "end": {
            "column": 37,
            "line": 43
          },
          "start": {
            "column": 32,
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
            1360,
            1361
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 43
            },
            "start": {
              "column": 39,
              "line": 43
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1360,
          1363
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 43
          },
          "start": {
            "column": 39,
            "line": 43
          }
        }
      },
      "range": [
        1321,
        1394
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
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1461,
                    1468
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
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
                    1449,
                    1456
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
                    1457,
                    1460
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
                  1449,
                  1460
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
                1449,
                1469
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
            },
            "range": [
              1449,
              1470
            ],
            "loc": {
              "end": {
                "column": 25,
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
          1443,
          1472
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 48,
            "line": 46
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1401,
                    1408
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 46
                    },
                    "start": {
                      "column": 6,
                      "line": 46
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1400,
                1409
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 46
                },
                "start": {
                  "column": 5,
                  "line": 46
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
                  1412,
                  1420
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 46
                  },
                  "start": {
                    "column": 17,
                    "line": 46
                  }
                }
              },
              "optional": false,
              "range": [
                1412,
                1422
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 46
                },
                "start": {
                  "column": 17,
                  "line": 46
                }
              }
            },
            "range": [
              1400,
              1422
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 46
              },
              "start": {
                "column": 5,
                "line": 46
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
                1424,
                1425
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 46
                },
                "start": {
                  "column": 29,
                  "line": 46
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1428,
                1429
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 46
                },
                "start": {
                  "column": 33,
                  "line": 46
                }
              }
            },
            "range": [
              1424,
              1429
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 46
              },
              "start": {
                "column": 29,
                "line": 46
              }
            }
          }
        ],
        "range": [
          1400,
          1429
        ],
        "loc": {
          "end": {
            "column": 34,
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
            1431,
            1432
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
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1435,
            1436
          ],
          "loc": {
            "end": {
              "column": 41,
              "line": 46
            },
            "start": {
              "column": 40,
              "line": 46
            }
          }
        },
        "range": [
          1431,
          1436
        ],
        "loc": {
          "end": {
            "column": 41,
            "line": 46
          },
          "start": {
            "column": 36,
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
            1438,
            1439
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
        "operator": "++",
        "prefix": false,
        "range": [
          1438,
          1441
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 46
          },
          "start": {
            "column": 43,
            "line": 46
          }
        }
      },
      "range": [
        1395,
        1472
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
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1555,
                    1562
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
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
                    1543,
                    1550
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
                    1551,
                    1554
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
                  1543,
                  1554
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
                1543,
                1563
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 50
                },
                "start": {
                  "column": 4,
                  "line": 50
                }
              }
            },
            "range": [
              1543,
              1564
            ],
            "loc": {
              "end": {
                "column": 25,
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
          1537,
          1566
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 64,
            "line": 49
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1479,
                    1486
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 49
                    },
                    "start": {
                      "column": 6,
                      "line": 49
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1478,
                1487
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 49
                },
                "start": {
                  "column": 5,
                  "line": 49
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
                    1491,
                    1492
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 49
                    },
                    "start": {
                      "column": 18,
                      "line": 49
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    1494,
                    1503
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 49
                    },
                    "start": {
                      "column": 21,
                      "line": 49
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimming\"",
                  "value": "trimming",
                  "range": [
                    1505,
                    1515
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 49
                    },
                    "start": {
                      "column": 32,
                      "line": 49
                    }
                  }
                }
              ],
              "range": [
                1490,
                1516
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 49
                },
                "start": {
                  "column": 17,
                  "line": 49
                }
              }
            },
            "range": [
              1478,
              1516
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 49
              },
              "start": {
                "column": 5,
                "line": 49
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
                1518,
                1519
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 49
                },
                "start": {
                  "column": 45,
                  "line": 49
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1522,
                1523
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 49
                },
                "start": {
                  "column": 49,
                  "line": 49
                }
              }
            },
            "range": [
              1518,
              1523
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 49
              },
              "start": {
                "column": 45,
                "line": 49
              }
            }
          }
        ],
        "range": [
          1478,
          1523
        ],
        "loc": {
          "end": {
            "column": 50,
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
            1525,
            1526
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 49
            },
            "start": {
              "column": 52,
              "line": 49
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1529,
            1530
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 49
            },
            "start": {
              "column": 56,
              "line": 49
            }
          }
        },
        "range": [
          1525,
          1530
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 49
          },
          "start": {
            "column": 52,
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
            1532,
            1533
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 49
            },
            "start": {
              "column": 59,
              "line": 49
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1532,
          1535
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 49
          },
          "start": {
            "column": 59,
            "line": 49
          }
        }
      },
      "range": [
        1473,
        1566
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
                    1632,
                    1637
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
                    1620,
                    1627
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
                    1628,
                    1631
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
                  1620,
                  1631
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
                1620,
                1638
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
              1620,
              1639
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
          1614,
          1641
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 47,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1573,
                    1578
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
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
                1572,
                1579
              ],
              "loc": {
                "end": {
                  "column": 12,
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
              "name": "multiRobotA",
              "optional": false,
              "range": [
                1582,
                1593
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 52
                },
                "start": {
                  "column": 15,
                  "line": 52
                }
              }
            },
            "range": [
              1572,
              1593
            ],
            "loc": {
              "end": {
                "column": 26,
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
                1595,
                1596
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 52
                },
                "start": {
                  "column": 28,
                  "line": 52
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1599,
                1600
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 52
                },
                "start": {
                  "column": 32,
                  "line": 52
                }
              }
            },
            "range": [
              1595,
              1600
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 52
              },
              "start": {
                "column": 28,
                "line": 52
              }
            }
          }
        ],
        "range": [
          1572,
          1600
        ],
        "loc": {
          "end": {
            "column": 33,
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
            1602,
            1603
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 52
            },
            "start": {
              "column": 35,
              "line": 52
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1606,
            1607
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 52
            },
            "start": {
              "column": 39,
              "line": 52
            }
          }
        },
        "range": [
          1602,
          1607
        ],
        "loc": {
          "end": {
            "column": 40,
            "line": 52
          },
          "start": {
            "column": 35,
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
            1609,
            1610
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 52
            },
            "start": {
              "column": 42,
              "line": 52
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1609,
          1612
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 52
          },
          "start": {
            "column": 42,
            "line": 52
          }
        }
      },
      "range": [
        1567,
        1641
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
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1711,
                    1716
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
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
                    1699,
                    1706
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
                    1707,
                    1710
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
                  1699,
                  1710
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
                1699,
                1717
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 56
                },
                "start": {
                  "column": 4,
                  "line": 56
                }
              }
            },
            "range": [
              1699,
              1718
            ],
            "loc": {
              "end": {
                "column": 23,
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
          1693,
          1720
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 51,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1648,
                    1653
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
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
                1647,
                1654
              ],
              "loc": {
                "end": {
                  "column": 12,
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
                "name": "getMultiRobot",
                "optional": false,
                "range": [
                  1657,
                  1670
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 55
                  },
                  "start": {
                    "column": 15,
                    "line": 55
                  }
                }
              },
              "optional": false,
              "range": [
                1657,
                1672
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 55
                },
                "start": {
                  "column": 15,
                  "line": 55
                }
              }
            },
            "range": [
              1647,
              1672
            ],
            "loc": {
              "end": {
                "column": 30,
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
                1674,
                1675
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 55
                },
                "start": {
                  "column": 32,
                  "line": 55
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1678,
                1679
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 55
                },
                "start": {
                  "column": 36,
                  "line": 55
                }
              }
            },
            "range": [
              1674,
              1679
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 55
              },
              "start": {
                "column": 32,
                "line": 55
              }
            }
          }
        ],
        "range": [
          1647,
          1679
        ],
        "loc": {
          "end": {
            "column": 37,
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
            1681,
            1682
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 55
            },
            "start": {
              "column": 39,
              "line": 55
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1685,
            1686
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 55
            },
            "start": {
              "column": 43,
              "line": 55
            }
          }
        },
        "range": [
          1681,
          1686
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 55
          },
          "start": {
            "column": 39,
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
            1688,
            1689
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 55
            },
            "start": {
              "column": 46,
              "line": 55
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1688,
          1691
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 55
          },
          "start": {
            "column": 46,
            "line": 55
          }
        }
      },
      "range": [
        1642,
        1720
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
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1810,
                    1815
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
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
                    1798,
                    1805
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
                    1806,
                    1809
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
                  1798,
                  1809
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
                1798,
                1816
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 59
                },
                "start": {
                  "column": 4,
                  "line": 59
                }
              }
            },
            "range": [
              1798,
              1817
            ],
            "loc": {
              "end": {
                "column": 23,
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
          1792,
          1819
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 60
          },
          "start": {
            "column": 71,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "range": [
                    1727,
                    1732
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
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
                1726,
                1733
              ],
              "loc": {
                "end": {
                  "column": 12,
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
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    1737,
                    1746
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 58
                    },
                    "start": {
                      "column": 16,
                      "line": 58
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
                        1749,
                        1759
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 58
                        },
                        "start": {
                          "column": 28,
                          "line": 58
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"edging\"",
                      "value": "edging",
                      "range": [
                        1761,
                        1769
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 58
                        },
                        "start": {
                          "column": 40,
                          "line": 58
                        }
                      }
                    }
                  ],
                  "range": [
                    1748,
                    1770
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 58
                    },
                    "start": {
                      "column": 27,
                      "line": 58
                    }
                  }
                }
              ],
              "range": [
                1736,
                1771
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 58
                },
                "start": {
                  "column": 15,
                  "line": 58
                }
              }
            },
            "range": [
              1726,
              1771
            ],
            "loc": {
              "end": {
                "column": 50,
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
                1773,
                1774
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 58
                },
                "start": {
                  "column": 52,
                  "line": 58
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1777,
                1778
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 58
                },
                "start": {
                  "column": 56,
                  "line": 58
                }
              }
            },
            "range": [
              1773,
              1778
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 58
              },
              "start": {
                "column": 52,
                "line": 58
              }
            }
          }
        ],
        "range": [
          1726,
          1778
        ],
        "loc": {
          "end": {
            "column": 57,
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
            1780,
            1781
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 58
            },
            "start": {
              "column": 59,
              "line": 58
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1784,
            1785
          ],
          "loc": {
            "end": {
              "column": 64,
              "line": 58
            },
            "start": {
              "column": 63,
              "line": 58
            }
          }
        },
        "range": [
          1780,
          1785
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 58
          },
          "start": {
            "column": 59,
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
            1787,
            1788
          ],
          "loc": {
            "end": {
              "column": 67,
              "line": 58
            },
            "start": {
              "column": 66,
              "line": 58
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1787,
          1790
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 58
          },
          "start": {
            "column": 66,
            "line": 58
          }
        }
      },
      "range": [
        1721,
        1819
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
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    1901,
                    1907
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
                    1889,
                    1896
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
                    1897,
                    1900
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
                  1889,
                  1900
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
                1889,
                1908
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
              1889,
              1909
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
          1883,
          1911
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 64
          },
          "start": {
            "column": 62,
            "line": 62
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "range": [
                    1827,
                    1835
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 62
                    },
                    "start": {
                      "column": 6,
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
                    1837,
                    1843
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 62
                    },
                    "start": {
                      "column": 16,
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
                    1845,
                    1852
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 62
                    },
                    "start": {
                      "column": 24,
                      "line": 62
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1826,
                1853
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 62
                },
                "start": {
                  "column": 5,
                  "line": 62
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "range": [
                1856,
                1862
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 62
                },
                "start": {
                  "column": 35,
                  "line": 62
                }
              }
            },
            "range": [
              1826,
              1862
            ],
            "loc": {
              "end": {
                "column": 41,
                "line": 62
              },
              "start": {
                "column": 5,
                "line": 62
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
                1864,
                1865
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 62
                },
                "start": {
                  "column": 43,
                  "line": 62
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1868,
                1869
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 62
                },
                "start": {
                  "column": 47,
                  "line": 62
                }
              }
            },
            "range": [
              1864,
              1869
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 62
              },
              "start": {
                "column": 43,
                "line": 62
              }
            }
          }
        ],
        "range": [
          1826,
          1869
        ],
        "loc": {
          "end": {
            "column": 48,
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
            1871,
            1872
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 62
            },
            "start": {
              "column": 50,
              "line": 62
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1875,
            1876
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 62
            },
            "start": {
              "column": 54,
              "line": 62
            }
          }
        },
        "range": [
          1871,
          1876
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 62
          },
          "start": {
            "column": 50,
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
            1878,
            1879
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 62
            },
            "start": {
              "column": 57,
              "line": 62
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1878,
          1881
        ],
        "loc": {
          "end": {
            "column": 60,
            "line": 62
          },
          "start": {
            "column": 57,
            "line": 62
          }
        }
      },
      "range": [
        1821,
        1911
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
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    1996,
                    2002
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
                    1984,
                    1991
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
                    1992,
                    1995
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
                  1984,
                  1995
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
                1984,
                2003
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
              1984,
              2004
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
          1978,
          2006
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 66,
            "line": 65
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "range": [
                    1918,
                    1926
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 65
                    },
                    "start": {
                      "column": 6,
                      "line": 65
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    1928,
                    1934
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 65
                    },
                    "start": {
                      "column": 16,
                      "line": 65
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "range": [
                    1936,
                    1943
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 65
                    },
                    "start": {
                      "column": 24,
                      "line": 65
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1917,
                1944
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 65
                },
                "start": {
                  "column": 5,
                  "line": 65
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
                  1947,
                  1955
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 65
                  },
                  "start": {
                    "column": 35,
                    "line": 65
                  }
                }
              },
              "optional": false,
              "range": [
                1947,
                1957
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 65
                },
                "start": {
                  "column": 35,
                  "line": 65
                }
              }
            },
            "range": [
              1917,
              1957
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 65
              },
              "start": {
                "column": 5,
                "line": 65
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
                1959,
                1960
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 65
                },
                "start": {
                  "column": 47,
                  "line": 65
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1963,
                1964
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 65
                },
                "start": {
                  "column": 51,
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
                "column": 52,
                "line": 65
              },
              "start": {
                "column": 47,
                "line": 65
              }
            }
          }
        ],
        "range": [
          1917,
          1964
        ],
        "loc": {
          "end": {
            "column": 52,
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
            1966,
            1967
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 65
            },
            "start": {
              "column": 54,
              "line": 65
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1970,
            1971
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 65
            },
            "start": {
              "column": 58,
              "line": 65
            }
          }
        },
        "range": [
          1966,
          1971
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 65
          },
          "start": {
            "column": 54,
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
            1973,
            1974
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 65
            },
            "start": {
              "column": 61,
              "line": 65
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1973,
          1976
        ],
        "loc": {
          "end": {
            "column": 64,
            "line": 65
          },
          "start": {
            "column": 61,
            "line": 65
          }
        }
      },
      "range": [
        1912,
        2006
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
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    2107,
                    2113
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
                    2095,
                    2102
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
                    2103,
                    2106
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
                  2095,
                  2106
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
                2095,
                2114
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
              2095,
              2115
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
          2089,
          2117
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 82,
            "line": 68
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA2",
                  "optional": false,
                  "range": [
                    2013,
                    2021
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 68
                    },
                    "start": {
                      "column": 6,
                      "line": 68
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    2023,
                    2029
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 68
                    },
                    "start": {
                      "column": 16,
                      "line": 68
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "range": [
                    2031,
                    2038
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 68
                    },
                    "start": {
                      "column": 24,
                      "line": 68
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2012,
                2039
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 68
                },
                "start": {
                  "column": 5,
                  "line": 68
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
                    2043,
                    2044
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 68
                    },
                    "start": {
                      "column": 36,
                      "line": 68
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    2046,
                    2055
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 68
                    },
                    "start": {
                      "column": 39,
                      "line": 68
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimming\"",
                  "value": "trimming",
                  "range": [
                    2057,
                    2067
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 68
                    },
                    "start": {
                      "column": 50,
                      "line": 68
                    }
                  }
                }
              ],
              "range": [
                2042,
                2068
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 68
                },
                "start": {
                  "column": 35,
                  "line": 68
                }
              }
            },
            "range": [
              2012,
              2068
            ],
            "loc": {
              "end": {
                "column": 61,
                "line": 68
              },
              "start": {
                "column": 5,
                "line": 68
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
                2070,
                2071
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 68
                },
                "start": {
                  "column": 63,
                  "line": 68
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2074,
                2075
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 68
                },
                "start": {
                  "column": 67,
                  "line": 68
                }
              }
            },
            "range": [
              2070,
              2075
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 68
              },
              "start": {
                "column": 63,
                "line": 68
              }
            }
          }
        ],
        "range": [
          2012,
          2075
        ],
        "loc": {
          "end": {
            "column": 68,
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
            2077,
            2078
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 68
            },
            "start": {
              "column": 70,
              "line": 68
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2081,
            2082
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 68
            },
            "start": {
              "column": 74,
              "line": 68
            }
          }
        },
        "range": [
          2077,
          2082
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 68
          },
          "start": {
            "column": 70,
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
            2084,
            2085
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 68
            },
            "start": {
              "column": 77,
              "line": 68
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2084,
          2087
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 68
          },
          "start": {
            "column": 77,
            "line": 68
          }
        }
      },
      "range": [
        2007,
        2117
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
                    2218,
                    2224
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
                    2206,
                    2213
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
                    2214,
                    2217
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
                  2206,
                  2217
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
                2206,
                2225
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
              2206,
              2226
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
          2200,
          2228
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 73
          },
          "start": {
            "column": 82,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    2124,
                    2130
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 71
                    },
                    "start": {
                      "column": 6,
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
                        2133,
                        2146
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 71
                        },
                        "start": {
                          "column": 15,
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
                        2148,
                        2163
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 71
                        },
                        "start": {
                          "column": 30,
                          "line": 71
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    2132,
                    2164
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 71
                    },
                    "start": {
                      "column": 14,
                      "line": 71
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2123,
                2165
              ],
              "loc": {
                "end": {
                  "column": 47,
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
              "name": "multiRobotA",
              "optional": false,
              "range": [
                2168,
                2179
              ],
              "loc": {
                "end": {
                  "column": 61,
                  "line": 71
                },
                "start": {
                  "column": 50,
                  "line": 71
                }
              }
            },
            "range": [
              2123,
              2179
            ],
            "loc": {
              "end": {
                "column": 61,
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
                2181,
                2182
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 71
                },
                "start": {
                  "column": 63,
                  "line": 71
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2185,
                2186
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
            "range": [
              2181,
              2186
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 71
              },
              "start": {
                "column": 63,
                "line": 71
              }
            }
          }
        ],
        "range": [
          2123,
          2186
        ],
        "loc": {
          "end": {
            "column": 68,
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
            2188,
            2189
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 71
            },
            "start": {
              "column": 70,
              "line": 71
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2192,
            2193
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
        "range": [
          2188,
          2193
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 71
          },
          "start": {
            "column": 70,
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
            2195,
            2196
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 71
            },
            "start": {
              "column": 77,
              "line": 71
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2195,
          2198
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 71
          },
          "start": {
            "column": 77,
            "line": 71
          }
        }
      },
      "range": [
        2118,
        2228
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
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    2333,
                    2339
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
                    2321,
                    2328
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
                    2329,
                    2332
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
                  2321,
                  2332
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
                2321,
                2340
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
              2321,
              2341
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
          2315,
          2343
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 76
          },
          "start": {
            "column": 86,
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    2235,
                    2241
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 74
                    },
                    "start": {
                      "column": 6,
                      "line": 74
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
                        2244,
                        2257
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 74
                        },
                        "start": {
                          "column": 15,
                          "line": 74
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "range": [
                        2259,
                        2274
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 74
                        },
                        "start": {
                          "column": 30,
                          "line": 74
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    2243,
                    2275
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 74
                    },
                    "start": {
                      "column": 14,
                      "line": 74
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2234,
                2276
              ],
              "loc": {
                "end": {
                  "column": 47,
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
                "name": "getMultiRobot",
                "optional": false,
                "range": [
                  2279,
                  2292
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 74
                  },
                  "start": {
                    "column": 50,
                    "line": 74
                  }
                }
              },
              "optional": false,
              "range": [
                2279,
                2294
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 74
                },
                "start": {
                  "column": 50,
                  "line": 74
                }
              }
            },
            "range": [
              2234,
              2294
            ],
            "loc": {
              "end": {
                "column": 65,
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
                2296,
                2297
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 74
                },
                "start": {
                  "column": 67,
                  "line": 74
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2300,
                2301
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
            "range": [
              2296,
              2301
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 74
              },
              "start": {
                "column": 67,
                "line": 74
              }
            }
          }
        ],
        "range": [
          2234,
          2301
        ],
        "loc": {
          "end": {
            "column": 72,
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
            2303,
            2304
          ],
          "loc": {
            "end": {
              "column": 75,
              "line": 74
            },
            "start": {
              "column": 74,
              "line": 74
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2307,
            2308
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
        "range": [
          2303,
          2308
        ],
        "loc": {
          "end": {
            "column": 79,
            "line": 74
          },
          "start": {
            "column": 74,
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
            2310,
            2311
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 74
            },
            "start": {
              "column": 81,
              "line": 74
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2310,
          2313
        ],
        "loc": {
          "end": {
            "column": 84,
            "line": 74
          },
          "start": {
            "column": 81,
            "line": 74
          }
        }
      },
      "range": [
        2229,
        2343
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
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    2468,
                    2474
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
                    2456,
                    2463
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
                    2464,
                    2467
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
                  2456,
                  2467
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
                2456,
                2475
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
              2456,
              2476
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
          2450,
          2478
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameMA",
                  "optional": false,
                  "range": [
                    2350,
                    2356
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 77
                    },
                    "start": {
                      "column": 6,
                      "line": 77
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
                        2359,
                        2372
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 77
                        },
                        "start": {
                          "column": 15,
                          "line": 77
                        }
                      }
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondarySkillA",
                      "optional": false,
                      "range": [
                        2374,
                        2389
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 77
                        },
                        "start": {
                          "column": 30,
                          "line": 77
                        }
                      }
                    }
                  ],
                  "optional": false,
                  "range": [
                    2358,
                    2390
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 77
                    },
                    "start": {
                      "column": 14,
                      "line": 77
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2349,
                2391
              ],
              "loc": {
                "end": {
                  "column": 47,
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
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    2395,
                    2404
                  ],
                  "loc": {
                    "end": {
                      "column": 60,
                      "line": 77
                    },
                    "start": {
                      "column": 51,
                      "line": 77
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
                        2407,
                        2417
                      ],
                      "loc": {
                        "end": {
                          "column": 73,
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
                      "raw": "\"edging\"",
                      "value": "edging",
                      "range": [
                        2419,
                        2427
                      ],
                      "loc": {
                        "end": {
                          "column": 83,
                          "line": 77
                        },
                        "start": {
                          "column": 75,
                          "line": 77
                        }
                      }
                    }
                  ],
                  "range": [
                    2406,
                    2428
                  ],
                  "loc": {
                    "end": {
                      "column": 84,
                      "line": 77
                    },
                    "start": {
                      "column": 62,
                      "line": 77
                    }
                  }
                }
              ],
              "range": [
                2394,
                2429
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 77
                },
                "start": {
                  "column": 50,
                  "line": 77
                }
              }
            },
            "range": [
              2349,
              2429
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
                2431,
                2432
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
                2435,
                2436
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
              2431,
              2436
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
          2349,
          2436
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
            2438,
            2439
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
            2442,
            2443
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
          2438,
          2443
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
            2445,
            2446
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
          2445,
          2448
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
        2344,
        2478
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
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2558,
                    2566
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
                    2546,
                    2553
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
                    2554,
                    2557
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
                  2546,
                  2557
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
                2546,
                2567
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
              2546,
              2568
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
          2540,
          2570
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 83
          },
          "start": {
            "column": 60,
            "line": 81
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2486,
                    2494
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 81
                    },
                    "start": {
                      "column": 6,
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
                      2499,
                      2509
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 81
                      },
                      "start": {
                        "column": 19,
                        "line": 81
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2496,
                    2509
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 81
                    },
                    "start": {
                      "column": 16,
                      "line": 81
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2485,
                2510
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 81
                },
                "start": {
                  "column": 5,
                  "line": 81
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "range": [
                2513,
                2519
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 81
                },
                "start": {
                  "column": 33,
                  "line": 81
                }
              }
            },
            "range": [
              2485,
              2519
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 81
              },
              "start": {
                "column": 5,
                "line": 81
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
                2521,
                2522
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 81
                },
                "start": {
                  "column": 41,
                  "line": 81
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2525,
                2526
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 81
                },
                "start": {
                  "column": 45,
                  "line": 81
                }
              }
            },
            "range": [
              2521,
              2526
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 81
              },
              "start": {
                "column": 41,
                "line": 81
              }
            }
          }
        ],
        "range": [
          2485,
          2526
        ],
        "loc": {
          "end": {
            "column": 46,
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
            2528,
            2529
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 81
            },
            "start": {
              "column": 48,
              "line": 81
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2532,
            2533
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 81
            },
            "start": {
              "column": 52,
              "line": 81
            }
          }
        },
        "range": [
          2528,
          2533
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 81
          },
          "start": {
            "column": 48,
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
            2535,
            2536
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 81
            },
            "start": {
              "column": 55,
              "line": 81
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2535,
          2538
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 81
          },
          "start": {
            "column": 55,
            "line": 81
          }
        }
      },
      "range": [
        2480,
        2570
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
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2653,
                    2661
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
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
                    2641,
                    2648
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
                    2649,
                    2652
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
                  2641,
                  2652
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
                2641,
                2662
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 85
                },
                "start": {
                  "column": 4,
                  "line": 85
                }
              }
            },
            "range": [
              2641,
              2663
            ],
            "loc": {
              "end": {
                "column": 26,
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
          2635,
          2665
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2577,
                    2585
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 84
                    },
                    "start": {
                      "column": 6,
                      "line": 84
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
                      2590,
                      2600
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 84
                      },
                      "start": {
                        "column": 19,
                        "line": 84
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2587,
                    2600
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 84
                    },
                    "start": {
                      "column": 16,
                      "line": 84
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2576,
                2601
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 84
                },
                "start": {
                  "column": 5,
                  "line": 84
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
                  2604,
                  2612
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 84
                  },
                  "start": {
                    "column": 33,
                    "line": 84
                  }
                }
              },
              "optional": false,
              "range": [
                2604,
                2614
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 84
                },
                "start": {
                  "column": 33,
                  "line": 84
                }
              }
            },
            "range": [
              2576,
              2614
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 84
              },
              "start": {
                "column": 5,
                "line": 84
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
                2616,
                2617
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
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2620,
                2621
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
              2616,
              2621
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
        "range": [
          2576,
          2621
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
            2623,
            2624
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
            2627,
            2628
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
          2623,
          2628
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
            2630,
            2631
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
          2630,
          2633
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
        2571,
        2665
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
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2771,
                    2779
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
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
                    2759,
                    2766
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
                    2767,
                    2770
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
                  2759,
                  2770
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
                2759,
                2780
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 88
                },
                "start": {
                  "column": 4,
                  "line": 88
                }
              }
            },
            "range": [
              2759,
              2781
            ],
            "loc": {
              "end": {
                "column": 26,
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
          2753,
          2783
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 89
          },
          "start": {
            "column": 87,
            "line": 87
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "numberA3",
                  "optional": false,
                  "range": [
                    2672,
                    2680
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 87
                    },
                    "start": {
                      "column": 6,
                      "line": 87
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
                      2685,
                      2695
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 87
                      },
                      "start": {
                        "column": 19,
                        "line": 87
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2682,
                    2695
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 87
                    },
                    "start": {
                      "column": 16,
                      "line": 87
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2671,
                2696
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 87
                },
                "start": {
                  "column": 5,
                  "line": 87
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
                      2707,
                      2708
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 87
                      },
                      "start": {
                        "column": 41,
                        "line": 87
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"trimmer\"",
                    "value": "trimmer",
                    "range": [
                      2710,
                      2719
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
                        "line": 87
                      },
                      "start": {
                        "column": 44,
                        "line": 87
                      }
                    }
                  },
                  {
                    "type": "Literal",
                    "raw": "\"trimming\"",
                    "value": "trimming",
                    "range": [
                      2721,
                      2731
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 87
                      },
                      "start": {
                        "column": 55,
                        "line": 87
                      }
                    }
                  }
                ],
                "range": [
                  2706,
                  2732
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 87
                  },
                  "start": {
                    "column": 40,
                    "line": 87
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
                    2700,
                    2705
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 87
                    },
                    "start": {
                      "column": 34,
                      "line": 87
                    }
                  }
                },
                "range": [
                  2700,
                  2705
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 87
                  },
                  "start": {
                    "column": 34,
                    "line": 87
                  }
                }
              },
              "range": [
                2699,
                2732
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 87
                },
                "start": {
                  "column": 33,
                  "line": 87
                }
              }
            },
            "range": [
              2671,
              2732
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 87
              },
              "start": {
                "column": 5,
                "line": 87
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
                2734,
                2735
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 87
                },
                "start": {
                  "column": 68,
                  "line": 87
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2738,
                2739
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 87
                },
                "start": {
                  "column": 72,
                  "line": 87
                }
              }
            },
            "range": [
              2734,
              2739
            ],
            "loc": {
              "end": {
                "column": 73,
                "line": 87
              },
              "start": {
                "column": 68,
                "line": 87
              }
            }
          }
        ],
        "range": [
          2671,
          2739
        ],
        "loc": {
          "end": {
            "column": 73,
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
            2741,
            2742
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 87
            },
            "start": {
              "column": 75,
              "line": 87
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2745,
            2746
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 87
            },
            "start": {
              "column": 79,
              "line": 87
            }
          }
        },
        "range": [
          2741,
          2746
        ],
        "loc": {
          "end": {
            "column": 80,
            "line": 87
          },
          "start": {
            "column": 75,
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
            2748,
            2749
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 87
            },
            "start": {
              "column": 82,
              "line": 87
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2748,
          2751
        ],
        "loc": {
          "end": {
            "column": 85,
            "line": 87
          },
          "start": {
            "column": 82,
            "line": 87
          }
        }
      },
      "range": [
        2666,
        2783
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
                    2862,
                    2877
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
                    2850,
                    2857
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
                    2858,
                    2861
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
                  2850,
                  2861
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
                2850,
                2878
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
              2850,
              2879
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
          2844,
          2881
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 92
          },
          "start": {
            "column": 60,
            "line": 90
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
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "range": [
                      2793,
                      2808
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 90
                      },
                      "start": {
                        "column": 9,
                        "line": 90
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2790,
                    2808
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 90
                    },
                    "start": {
                      "column": 6,
                      "line": 90
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2789,
                2809
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 90
                },
                "start": {
                  "column": 5,
                  "line": 90
                }
              }
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "range": [
                2812,
                2823
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 90
                },
                "start": {
                  "column": 28,
                  "line": 90
                }
              }
            },
            "range": [
              2789,
              2823
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 90
              },
              "start": {
                "column": 5,
                "line": 90
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
                2825,
                2826
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 90
                },
                "start": {
                  "column": 41,
                  "line": 90
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2829,
                2830
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 90
                },
                "start": {
                  "column": 45,
                  "line": 90
                }
              }
            },
            "range": [
              2825,
              2830
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 90
              },
              "start": {
                "column": 41,
                "line": 90
              }
            }
          }
        ],
        "range": [
          2789,
          2830
        ],
        "loc": {
          "end": {
            "column": 46,
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
            2832,
            2833
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 90
            },
            "start": {
              "column": 48,
              "line": 90
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2836,
            2837
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 90
            },
            "start": {
              "column": 52,
              "line": 90
            }
          }
        },
        "range": [
          2832,
          2837
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 90
          },
          "start": {
            "column": 48,
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
            2839,
            2840
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 90
            },
            "start": {
              "column": 55,
              "line": 90
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2839,
          2842
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 90
          },
          "start": {
            "column": 55,
            "line": 90
          }
        }
      },
      "range": [
        2784,
        2881
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
                    2964,
                    2979
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 94
                    },
                    "start": {
                      "column": 16,
                      "line": 94
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
                    2952,
                    2959
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 94
                    },
                    "start": {
                      "column": 4,
                      "line": 94
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
                    2960,
                    2963
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 94
                    },
                    "start": {
                      "column": 12,
                      "line": 94
                    }
                  }
                },
                "range": [
                  2952,
                  2963
                ],
                "loc": {
                  "end": {
                    "column": 15,
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
                2952,
                2980
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 94
                },
                "start": {
                  "column": 4,
                  "line": 94
                }
              }
            },
            "range": [
              2952,
              2981
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 94
              },
              "start": {
                "column": 4,
                "line": 94
              }
            }
          }
        ],
        "range": [
          2946,
          2983
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 95
          },
          "start": {
            "column": 64,
            "line": 93
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
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "range": [
                      2891,
                      2906
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 93
                      },
                      "start": {
                        "column": 9,
                        "line": 93
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2888,
                    2906
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 93
                    },
                    "start": {
                      "column": 6,
                      "line": 93
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2887,
                2907
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 93
                },
                "start": {
                  "column": 5,
                  "line": 93
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
                  2910,
                  2923
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 93
                  },
                  "start": {
                    "column": 28,
                    "line": 93
                  }
                }
              },
              "optional": false,
              "range": [
                2910,
                2925
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 93
                },
                "start": {
                  "column": 28,
                  "line": 93
                }
              }
            },
            "range": [
              2887,
              2925
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 93
              },
              "start": {
                "column": 5,
                "line": 93
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
                2927,
                2928
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 93
                },
                "start": {
                  "column": 45,
                  "line": 93
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2931,
                2932
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 93
                },
                "start": {
                  "column": 49,
                  "line": 93
                }
              }
            },
            "range": [
              2927,
              2932
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 93
              },
              "start": {
                "column": 45,
                "line": 93
              }
            }
          }
        ],
        "range": [
          2887,
          2932
        ],
        "loc": {
          "end": {
            "column": 50,
            "line": 93
          },
          "start": {
            "column": 5,
            "line": 93
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
            2934,
            2935
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 93
            },
            "start": {
              "column": 52,
              "line": 93
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2938,
            2939
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 93
            },
            "start": {
              "column": 56,
              "line": 93
            }
          }
        },
        "range": [
          2934,
          2939
        ],
        "loc": {
          "end": {
            "column": 57,
            "line": 93
          },
          "start": {
            "column": 52,
            "line": 93
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
            2941,
            2942
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 93
            },
            "start": {
              "column": 59,
              "line": 93
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2941,
          2944
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 93
          },
          "start": {
            "column": 59,
            "line": 93
          }
        }
      },
      "range": [
        2882,
        2983
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 95
        },
        "start": {
          "column": 0,
          "line": 93
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
                    3105,
                    3120
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 97
                    },
                    "start": {
                      "column": 16,
                      "line": 97
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
                    3093,
                    3100
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 97
                    },
                    "start": {
                      "column": 4,
                      "line": 97
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
                    3101,
                    3104
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 97
                    },
                    "start": {
                      "column": 12,
                      "line": 97
                    }
                  }
                },
                "range": [
                  3093,
                  3104
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 97
                  },
                  "start": {
                    "column": 4,
                    "line": 97
                  }
                }
              },
              "optional": false,
              "range": [
                3093,
                3121
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 97
                },
                "start": {
                  "column": 4,
                  "line": 97
                }
              }
            },
            "range": [
              3093,
              3122
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 97
              },
              "start": {
                "column": 4,
                "line": 97
              }
            }
          }
        ],
        "range": [
          3087,
          3124
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 98
          },
          "start": {
            "column": 103,
            "line": 96
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
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "multiRobotAInfo",
                    "optional": false,
                    "range": [
                      2993,
                      3008
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 96
                      },
                      "start": {
                        "column": 9,
                        "line": 96
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2990,
                    3008
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 96
                    },
                    "start": {
                      "column": 6,
                      "line": 96
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2989,
                3009
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 96
                },
                "start": {
                  "column": 5,
                  "line": 96
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
                    "raw": "\"trimmer\"",
                    "value": "trimmer",
                    "range": [
                      3032,
                      3041
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 96
                      },
                      "start": {
                        "column": 48,
                        "line": 96
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
                          3044,
                          3054
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 96
                          },
                          "start": {
                            "column": 60,
                            "line": 96
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"edging\"",
                        "value": "edging",
                        "range": [
                          3056,
                          3064
                        ],
                        "loc": {
                          "end": {
                            "column": 80,
                            "line": 96
                          },
                          "start": {
                            "column": 72,
                            "line": 96
                          }
                        }
                      }
                    ],
                    "range": [
                      3043,
                      3065
                    ],
                    "loc": {
                      "end": {
                        "column": 81,
                        "line": 96
                      },
                      "start": {
                        "column": 59,
                        "line": 96
                      }
                    }
                  }
                ],
                "range": [
                  3031,
                  3066
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 96
                  },
                  "start": {
                    "column": 47,
                    "line": 96
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "range": [
                    3013,
                    3030
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 96
                    },
                    "start": {
                      "column": 29,
                      "line": 96
                    }
                  }
                },
                "range": [
                  3013,
                  3030
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 96
                  },
                  "start": {
                    "column": 29,
                    "line": 96
                  }
                }
              },
              "range": [
                3012,
                3066
              ],
              "loc": {
                "end": {
                  "column": 82,
                  "line": 96
                },
                "start": {
                  "column": 28,
                  "line": 96
                }
              }
            },
            "range": [
              2989,
              3066
            ],
            "loc": {
              "end": {
                "column": 82,
                "line": 96
              },
              "start": {
                "column": 5,
                "line": 96
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
                3068,
                3069
              ],
              "loc": {
                "end": {
                  "column": 85,
                  "line": 96
                },
                "start": {
                  "column": 84,
                  "line": 96
                }
              }
            },
            "right": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                3072,
                3073
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 96
                },
                "start": {
                  "column": 88,
                  "line": 96
                }
              }
            },
            "range": [
              3068,
              3073
            ],
            "loc": {
              "end": {
                "column": 89,
                "line": 96
              },
              "start": {
                "column": 84,
                "line": 96
              }
            }
          }
        ],
        "range": [
          2989,
          3073
        ],
        "loc": {
          "end": {
            "column": 89,
            "line": 96
          },
          "start": {
            "column": 5,
            "line": 96
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
            3075,
            3076
          ],
          "loc": {
            "end": {
              "column": 92,
              "line": 96
            },
            "start": {
              "column": 91,
              "line": 96
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            3079,
            3080
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 96
            },
            "start": {
              "column": 95,
              "line": 96
            }
          }
        },
        "range": [
          3075,
          3080
        ],
        "loc": {
          "end": {
            "column": 96,
            "line": 96
          },
          "start": {
            "column": 91,
            "line": 96
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
            3082,
            3083
          ],
          "loc": {
            "end": {
              "column": 99,
              "line": 96
            },
            "start": {
              "column": 98,
              "line": 96
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          3082,
          3085
        ],
        "loc": {
          "end": {
            "column": 101,
            "line": 96
          },
          "start": {
            "column": 98,
            "line": 96
          }
        }
      },
      "range": [
        2984,
        3124
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 96
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 98
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
