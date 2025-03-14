__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3154
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
            "type": "TSArrayType",
            "elementType": {
              "type": "TSStringKeyword",
              "range": [
                123,
                129
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 5
                },
                "start": {
                  "column": 34,
                  "line": 5
                }
              }
            },
            "range": [
              123,
              131
            ],
            "loc": {
              "end": {
                "column": 42,
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
          132
        ],
        "loc": {
          "end": {
            "column": 43,
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
        133
      ],
      "loc": {
        "end": {
          "column": 44,
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
                145,
                152
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "range": [
                    147,
                    152
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
                  147,
                  152
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
              139,
              152
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
                  156,
                  157
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
                  159,
                  166
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
                  168,
                  176
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
              155,
              177
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
            139,
            177
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
        135,
        178
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
                212,
                218
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
              205,
              219
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
          199,
          221
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
          188,
          196
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
        179,
        221
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
                238,
                257
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "range": [
                    240,
                    257
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
                  240,
                  257
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
              227,
              257
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
                  261,
                  268
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
                      271,
                      279
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
                      281,
                      283
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
                  270,
                  284
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
              260,
              285
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
            227,
            285
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
        223,
        286
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
                302,
                321
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MultiSkilledRobot",
                  "optional": false,
                  "range": [
                    304,
                    321
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
                  304,
                  321
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
              291,
              321
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
                  325,
                  334
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
                      337,
                      347
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
                      349,
                      357
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
                  336,
                  358
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
              324,
              359
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
            291,
            359
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
        287,
        360
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
                399,
                410
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
              392,
              411
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
          386,
          413
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
          370,
          383
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
        361,
        413
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
            "column": 56,
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "range": [
                      427,
                      432
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
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"name\"",
                    "value": "name",
                    "range": [
                      434,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 18
                      },
                      "start": {
                        "column": 19,
                        "line": 18
                      }
                    }
                  },
                  "range": [
                    427,
                    440
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
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
                424,
                441
              ],
              "loc": {
                "end": {
                  "column": 26,
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
                  "column": 35,
                  "line": 18
                },
                "start": {
                  "column": 29,
                  "line": 18
                }
              }
            },
            "range": [
              424,
              450
            ],
            "loc": {
              "end": {
                "column": 35,
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
                  "column": 38,
                  "line": 18
                },
                "start": {
                  "column": 37,
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
                  "column": 42,
                  "line": 18
                },
                "start": {
                  "column": 41,
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
                "column": 42,
                "line": 18
              },
              "start": {
                "column": 37,
                "line": 18
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          420,
          457
        ],
        "loc": {
          "end": {
            "column": 42,
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
              "column": 45,
              "line": 18
            },
            "start": {
              "column": 44,
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
              "column": 49,
              "line": 18
            },
            "start": {
              "column": 48,
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
            "column": 49,
            "line": 18
          },
          "start": {
            "column": 44,
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
              "column": 52,
              "line": 18
            },
            "start": {
              "column": 51,
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
            "column": 54,
            "line": 18
          },
          "start": {
            "column": 51,
            "line": 18
          }
        }
      },
      "range": [
        415,
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
                    578,
                    583
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
                    566,
                    573
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
                    574,
                    577
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
                  566,
                  577
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
                566,
                584
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
              566,
              585
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
          560,
          587
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 61,
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
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
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"name\"",
                    "value": "name",
                    "range": [
                      519,
                      525
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 21
                      },
                      "start": {
                        "column": 20,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    511,
                    525
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
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
                526
              ],
              "loc": {
                "end": {
                  "column": 27,
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
                  529,
                  537
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 21
                  },
                  "start": {
                    "column": 30,
                    "line": 21
                  }
                }
              },
              "optional": false,
              "range": [
                529,
                539
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 21
                },
                "start": {
                  "column": 30,
                  "line": 21
                }
              }
            },
            "range": [
              508,
              539
            ],
            "loc": {
              "end": {
                "column": 40,
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
                541,
                542
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 21
                },
                "start": {
                  "column": 42,
                  "line": 21
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                545,
                546
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 21
                },
                "start": {
                  "column": 46,
                  "line": 21
                }
              }
            },
            "range": [
              541,
              546
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 21
              },
              "start": {
                "column": 42,
                "line": 21
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          504,
          546
        ],
        "loc": {
          "end": {
            "column": 47,
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
            548,
            549
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 21
            },
            "start": {
              "column": 49,
              "line": 21
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            552,
            553
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 21
            },
            "start": {
              "column": 53,
              "line": 21
            }
          }
        },
        "range": [
          548,
          553
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 21
          },
          "start": {
            "column": 49,
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
            555,
            556
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 21
            },
            "start": {
              "column": 56,
              "line": 21
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          555,
          558
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 21
          },
          "start": {
            "column": 56,
            "line": 21
          }
        }
      },
      "range": [
        499,
        587
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
                    683,
                    688
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
                    671,
                    678
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
                    679,
                    682
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
                  671,
                  682
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
                671,
                689
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
              671,
              690
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
          665,
          692
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 77,
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nameA",
                    "optional": false,
                    "range": [
                      600,
                      605
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
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"name\"",
                    "value": "name",
                    "range": [
                      608,
                      614
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 24
                      },
                      "start": {
                        "column": 20,
                        "line": 24
                      }
                    }
                  },
                  "range": [
                    600,
                    614
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
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
                597,
                615
              ],
              "loc": {
                "end": {
                  "column": 27,
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
                    619,
                    620
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 24
                    },
                    "start": {
                      "column": 31,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    622,
                    631
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 24
                    },
                    "start": {
                      "column": 34,
                      "line": 24
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimming\"",
                  "value": "trimming",
                  "range": [
                    633,
                    643
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 24
                    },
                    "start": {
                      "column": 45,
                      "line": 24
                    }
                  }
                }
              ],
              "range": [
                618,
                644
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 24
                },
                "start": {
                  "column": 30,
                  "line": 24
                }
              }
            },
            "range": [
              597,
              644
            ],
            "loc": {
              "end": {
                "column": 56,
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
                646,
                647
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 24
                },
                "start": {
                  "column": 58,
                  "line": 24
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                650,
                651
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 24
                },
                "start": {
                  "column": 62,
                  "line": 24
                }
              }
            },
            "range": [
              646,
              651
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 24
              },
              "start": {
                "column": 58,
                "line": 24
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          593,
          651
        ],
        "loc": {
          "end": {
            "column": 63,
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
            653,
            654
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 24
            },
            "start": {
              "column": 65,
              "line": 24
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            657,
            658
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 24
            },
            "start": {
              "column": 69,
              "line": 24
            }
          }
        },
        "range": [
          653,
          658
        ],
        "loc": {
          "end": {
            "column": 70,
            "line": 24
          },
          "start": {
            "column": 65,
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
            660,
            661
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 24
            },
            "start": {
              "column": 72,
              "line": 24
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          660,
          663
        ],
        "loc": {
          "end": {
            "column": 75,
            "line": 24
          },
          "start": {
            "column": 72,
            "line": 24
          }
        }
      },
      "range": [
        588,
        692
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
                    846,
                    859
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
                    834,
                    841
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
                    842,
                    845
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
                  834,
                  845
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
                834,
                860
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
              834,
              861
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
          828,
          863
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 56,
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
                            711,
                            724
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 28
                            },
                            "start": {
                              "column": 4,
                              "line": 28
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"primary\"",
                          "value": "primary",
                          "range": [
                            727,
                            736
                          ],
                          "loc": {
                            "end": {
                              "column": 29,
                              "line": 28
                            },
                            "start": {
                              "column": 20,
                              "line": 28
                            }
                          }
                        },
                        "range": [
                          711,
                          736
                        ],
                        "loc": {
                          "end": {
                            "column": 29,
                            "line": 28
                          },
                          "start": {
                            "column": 4,
                            "line": 28
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
                            742,
                            757
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
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"secondary\"",
                          "value": "secondary",
                          "range": [
                            760,
                            771
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 29
                            },
                            "start": {
                              "column": 22,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          742,
                          771
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 29
                          },
                          "start": {
                            "column": 4,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      705,
                      773
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 30
                      },
                      "start": {
                        "column": 12,
                        "line": 27
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
                          777,
                          783
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 30
                          },
                          "start": {
                            "column": 5,
                            "line": 30
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"none\"",
                        "value": "none",
                        "range": [
                          785,
                          791
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 30
                          },
                          "start": {
                            "column": 13,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "range": [
                      776,
                      792
                    ],
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 30
                      },
                      "start": {
                        "column": 4,
                        "line": 30
                      }
                    }
                  },
                  "range": [
                    705,
                    792
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 30
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
                702,
                793
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 30
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
                796,
                807
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 30
                },
                "start": {
                  "column": 24,
                  "line": 30
                }
              }
            },
            "range": [
              702,
              807
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 30
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
                809,
                810
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 30
                },
                "start": {
                  "column": 37,
                  "line": 30
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                813,
                814
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 30
                },
                "start": {
                  "column": 41,
                  "line": 30
                }
              }
            },
            "range": [
              809,
              814
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 30
              },
              "start": {
                "column": 37,
                "line": 30
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          698,
          814
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 30
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
            816,
            817
          ],
          "loc": {
            "end": {
              "column": 45,
              "line": 30
            },
            "start": {
              "column": 44,
              "line": 30
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            820,
            821
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 30
            },
            "start": {
              "column": 48,
              "line": 30
            }
          }
        },
        "range": [
          816,
          821
        ],
        "loc": {
          "end": {
            "column": 49,
            "line": 30
          },
          "start": {
            "column": 44,
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
            823,
            824
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 30
            },
            "start": {
              "column": 51,
              "line": 30
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          823,
          826
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 30
          },
          "start": {
            "column": 51,
            "line": 30
          }
        }
      },
      "range": [
        693,
        863
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
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
                    1021,
                    1034
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
                    1009,
                    1016
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
                    1017,
                    1020
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
                  1009,
                  1020
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
                1009,
                1035
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
              1009,
              1036
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
          1003,
          1038
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 60,
            "line": 36
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
                            882,
                            895
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
                            898,
                            907
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
                          882,
                          907
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
                            913,
                            928
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
                            931,
                            942
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
                          913,
                          942
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
                      876,
                      944
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 36
                      },
                      "start": {
                        "column": 12,
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
                          948,
                          954
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
                          956,
                          962
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
                      947,
                      963
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
                    876,
                    963
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 36
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
                873,
                964
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 36
                },
                "start": {
                  "column": 9,
                  "line": 33
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
                  967,
                  980
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 36
                  },
                  "start": {
                    "column": 24,
                    "line": 36
                  }
                }
              },
              "optional": false,
              "range": [
                967,
                982
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
            },
            "range": [
              873,
              982
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 36
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
                984,
                985
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
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                988,
                989
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
            },
            "range": [
              984,
              989
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 36
              },
              "start": {
                "column": 41,
                "line": 36
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          869,
          989
        ],
        "loc": {
          "end": {
            "column": 46,
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
            991,
            992
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
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            995,
            996
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 36
            },
            "start": {
              "column": 52,
              "line": 36
            }
          }
        },
        "range": [
          991,
          996
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 36
          },
          "start": {
            "column": 48,
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
            998,
            999
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 36
            },
            "start": {
              "column": 55,
              "line": 36
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          998,
          1001
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 36
          },
          "start": {
            "column": 55,
            "line": 36
          }
        }
      },
      "range": [
        864,
        1038
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
                    1216,
                    1229
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
                    1204,
                    1211
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
                    1212,
                    1215
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
                  1204,
                  1215
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
                1204,
                1230
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
              1204,
              1231
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
          1198,
          1233
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 80,
            "line": 42
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
                            1057,
                            1070
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
                            1073,
                            1082
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
                          1057,
                          1082
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
                            1088,
                            1103
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
                            1106,
                            1117
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
                          1088,
                          1117
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
                      1051,
                      1119
                    ],
                    "loc": {
                      "end": {
                        "column": 1,
                        "line": 42
                      },
                      "start": {
                        "column": 12,
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
                          1123,
                          1129
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
                          1131,
                          1137
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
                      1122,
                      1138
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
                    1051,
                    1138
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 42
                    },
                    "start": {
                      "column": 12,
                      "line": 39
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1048,
                1139
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 42
                },
                "start": {
                  "column": 9,
                  "line": 39
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
                    1143,
                    1152
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 42
                    },
                    "start": {
                      "column": 25,
                      "line": 42
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
                        1155,
                        1165
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 42
                        },
                        "start": {
                          "column": 37,
                          "line": 42
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"edging\"",
                      "value": "edging",
                      "range": [
                        1167,
                        1175
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 42
                        },
                        "start": {
                          "column": 49,
                          "line": 42
                        }
                      }
                    }
                  ],
                  "range": [
                    1154,
                    1176
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 42
                    },
                    "start": {
                      "column": 36,
                      "line": 42
                    }
                  }
                }
              ],
              "range": [
                1142,
                1177
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 42
                },
                "start": {
                  "column": 24,
                  "line": 42
                }
              }
            },
            "range": [
              1048,
              1177
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 42
              },
              "start": {
                "column": 9,
                "line": 39
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
                1179,
                1180
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 42
                },
                "start": {
                  "column": 61,
                  "line": 42
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1183,
                1184
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 42
                },
                "start": {
                  "column": 65,
                  "line": 42
                }
              }
            },
            "range": [
              1179,
              1184
            ],
            "loc": {
              "end": {
                "column": 66,
                "line": 42
              },
              "start": {
                "column": 61,
                "line": 42
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1044,
          1184
        ],
        "loc": {
          "end": {
            "column": 66,
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
            1186,
            1187
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 42
            },
            "start": {
              "column": 68,
              "line": 42
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1190,
            1191
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 42
            },
            "start": {
              "column": 72,
              "line": 42
            }
          }
        },
        "range": [
          1186,
          1191
        ],
        "loc": {
          "end": {
            "column": 73,
            "line": 42
          },
          "start": {
            "column": 68,
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
            1193,
            1194
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 42
            },
            "start": {
              "column": 75,
              "line": 42
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1193,
          1196
        ],
        "loc": {
          "end": {
            "column": 78,
            "line": 42
          },
          "start": {
            "column": 75,
            "line": 42
          }
        }
      },
      "range": [
        1039,
        1233
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
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1306,
                    1313
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
                    1294,
                    1301
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
                    1302,
                    1305
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
                  1294,
                  1305
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
                1294,
                1314
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
              1294,
              1315
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
          1288,
          1317
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 48
          },
          "start": {
            "column": 53,
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "range": [
                      1245,
                      1252
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 46
                      },
                      "start": {
                        "column": 10,
                        "line": 46
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
                        1256,
                        1257
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 46
                        },
                        "start": {
                          "column": 21,
                          "line": 46
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1255,
                      1257
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 46
                      },
                      "start": {
                        "column": 20,
                        "line": 46
                      }
                    }
                  },
                  "range": [
                    1245,
                    1257
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
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
                1244,
                1258
              ],
              "loc": {
                "end": {
                  "column": 23,
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
              "name": "robotA",
              "optional": false,
              "range": [
                1261,
                1267
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 46
                },
                "start": {
                  "column": 26,
                  "line": 46
                }
              }
            },
            "range": [
              1244,
              1267
            ],
            "loc": {
              "end": {
                "column": 32,
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
                1269,
                1270
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 46
                },
                "start": {
                  "column": 34,
                  "line": 46
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1273,
                1274
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 46
                },
                "start": {
                  "column": 38,
                  "line": 46
                }
              }
            },
            "range": [
              1269,
              1274
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 46
              },
              "start": {
                "column": 34,
                "line": 46
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1240,
          1274
        ],
        "loc": {
          "end": {
            "column": 39,
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
            1276,
            1277
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 46
            },
            "start": {
              "column": 41,
              "line": 46
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1280,
            1281
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 46
            },
            "start": {
              "column": 45,
              "line": 46
            }
          }
        },
        "range": [
          1276,
          1281
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 46
          },
          "start": {
            "column": 41,
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
            1283,
            1284
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 46
            },
            "start": {
              "column": 48,
              "line": 46
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1283,
          1286
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 46
          },
          "start": {
            "column": 48,
            "line": 46
          }
        }
      },
      "range": [
        1235,
        1317
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
                    1393,
                    1400
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
                    1381,
                    1388
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
                    1389,
                    1392
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
                  1381,
                  1392
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
                1381,
                1401
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
              1381,
              1402
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
          1375,
          1404
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 51
          },
          "start": {
            "column": 57,
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "range": [
                      1328,
                      1335
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 49
                      },
                      "start": {
                        "column": 10,
                        "line": 49
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
                        1339,
                        1340
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 49
                        },
                        "start": {
                          "column": 21,
                          "line": 49
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1338,
                      1340
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 49
                      },
                      "start": {
                        "column": 20,
                        "line": 49
                      }
                    }
                  },
                  "range": [
                    1328,
                    1340
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
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
                1327,
                1341
              ],
              "loc": {
                "end": {
                  "column": 23,
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
                "name": "getRobot",
                "optional": false,
                "range": [
                  1344,
                  1352
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 49
                  },
                  "start": {
                    "column": 26,
                    "line": 49
                  }
                }
              },
              "optional": false,
              "range": [
                1344,
                1354
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 49
                },
                "start": {
                  "column": 26,
                  "line": 49
                }
              }
            },
            "range": [
              1327,
              1354
            ],
            "loc": {
              "end": {
                "column": 36,
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
                1356,
                1357
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 49
                },
                "start": {
                  "column": 38,
                  "line": 49
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1360,
                1361
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 49
                },
                "start": {
                  "column": 42,
                  "line": 49
                }
              }
            },
            "range": [
              1356,
              1361
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 49
              },
              "start": {
                "column": 38,
                "line": 49
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1323,
          1361
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
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            1363,
            1364
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
          "raw": "1",
          "value": 1,
          "range": [
            1367,
            1368
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
          1363,
          1368
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
      },
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            1370,
            1371
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
        "operator": "++",
        "prefix": false,
        "range": [
          1370,
          1373
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 49
          },
          "start": {
            "column": 52,
            "line": 49
          }
        }
      },
      "range": [
        1318,
        1404
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
                  "name": "numberB",
                  "optional": false,
                  "range": [
                    1496,
                    1503
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
                    1484,
                    1491
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
                    1492,
                    1495
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
                  1484,
                  1495
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
                1484,
                1504
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
              1484,
              1505
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
          1478,
          1507
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 54
          },
          "start": {
            "column": 73,
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberB",
                    "optional": false,
                    "range": [
                      1415,
                      1422
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 52
                      },
                      "start": {
                        "column": 10,
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
                        1426,
                        1427
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 52
                        },
                        "start": {
                          "column": 21,
                          "line": 52
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1425,
                      1427
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 52
                      },
                      "start": {
                        "column": 20,
                        "line": 52
                      }
                    }
                  },
                  "range": [
                    1415,
                    1427
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
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
                1414,
                1428
              ],
              "loc": {
                "end": {
                  "column": 23,
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
                  "raw": "2",
                  "value": 2,
                  "range": [
                    1432,
                    1433
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 52
                    },
                    "start": {
                      "column": 27,
                      "line": 52
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    1435,
                    1444
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 52
                    },
                    "start": {
                      "column": 30,
                      "line": 52
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimming\"",
                  "value": "trimming",
                  "range": [
                    1446,
                    1456
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 52
                    },
                    "start": {
                      "column": 41,
                      "line": 52
                    }
                  }
                }
              ],
              "range": [
                1431,
                1457
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 52
                },
                "start": {
                  "column": 26,
                  "line": 52
                }
              }
            },
            "range": [
              1414,
              1457
            ],
            "loc": {
              "end": {
                "column": 52,
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
                1459,
                1460
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 52
                },
                "start": {
                  "column": 54,
                  "line": 52
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1463,
                1464
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 52
                },
                "start": {
                  "column": 58,
                  "line": 52
                }
              }
            },
            "range": [
              1459,
              1464
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 52
              },
              "start": {
                "column": 54,
                "line": 52
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1410,
          1464
        ],
        "loc": {
          "end": {
            "column": 59,
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
            1466,
            1467
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 52
            },
            "start": {
              "column": 61,
              "line": 52
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1470,
            1471
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 52
            },
            "start": {
              "column": 65,
              "line": 52
            }
          }
        },
        "range": [
          1466,
          1471
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 52
          },
          "start": {
            "column": 61,
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
            1473,
            1474
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 52
            },
            "start": {
              "column": 68,
              "line": 52
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1473,
          1476
        ],
        "loc": {
          "end": {
            "column": 71,
            "line": 52
          },
          "start": {
            "column": 68,
            "line": 52
          }
        }
      },
      "range": [
        1405,
        1507
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
                    1586,
                    1591
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
                    1574,
                    1581
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
                    1582,
                    1585
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
                  1574,
                  1585
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
                1574,
                1592
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
              1574,
              1593
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
          1568,
          1595
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 57
          },
          "start": {
            "column": 60,
            "line": 55
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
                    "name": "nameB",
                    "optional": false,
                    "range": [
                      1518,
                      1523
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 55
                      },
                      "start": {
                        "column": 10,
                        "line": 55
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"name\"",
                    "value": "name",
                    "range": [
                      1526,
                      1532
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 55
                      },
                      "start": {
                        "column": 18,
                        "line": 55
                      }
                    }
                  },
                  "range": [
                    1518,
                    1532
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 55
                    },
                    "start": {
                      "column": 10,
                      "line": 55
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1517,
                1533
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 55
                },
                "start": {
                  "column": 9,
                  "line": 55
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "range": [
                1536,
                1547
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 55
                },
                "start": {
                  "column": 28,
                  "line": 55
                }
              }
            },
            "range": [
              1517,
              1547
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 55
              },
              "start": {
                "column": 9,
                "line": 55
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
                1549,
                1550
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
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1553,
                1554
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
              1549,
              1554
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
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1513,
          1554
        ],
        "loc": {
          "end": {
            "column": 46,
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
            1556,
            1557
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
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1560,
            1561
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 55
            },
            "start": {
              "column": 52,
              "line": 55
            }
          }
        },
        "range": [
          1556,
          1561
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 55
          },
          "start": {
            "column": 48,
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
            1563,
            1564
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 55
            },
            "start": {
              "column": 55,
              "line": 55
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1563,
          1566
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 55
          },
          "start": {
            "column": 55,
            "line": 55
          }
        }
      },
      "range": [
        1508,
        1595
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
                    1678,
                    1683
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
                    1666,
                    1673
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
                    1674,
                    1677
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
                  1666,
                  1677
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
                1666,
                1684
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
              1666,
              1685
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
          1660,
          1687
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 60
          },
          "start": {
            "column": 64,
            "line": 58
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
                    "name": "nameB",
                    "optional": false,
                    "range": [
                      1606,
                      1611
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 58
                      },
                      "start": {
                        "column": 10,
                        "line": 58
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"name\"",
                    "value": "name",
                    "range": [
                      1614,
                      1620
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 58
                      },
                      "start": {
                        "column": 18,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    1606,
                    1620
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 58
                    },
                    "start": {
                      "column": 10,
                      "line": 58
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1605,
                1621
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 58
                },
                "start": {
                  "column": 9,
                  "line": 58
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
                  1624,
                  1637
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 58
                  },
                  "start": {
                    "column": 28,
                    "line": 58
                  }
                }
              },
              "optional": false,
              "range": [
                1624,
                1639
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 58
                },
                "start": {
                  "column": 28,
                  "line": 58
                }
              }
            },
            "range": [
              1605,
              1639
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 58
              },
              "start": {
                "column": 9,
                "line": 58
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
                1641,
                1642
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 58
                },
                "start": {
                  "column": 45,
                  "line": 58
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1645,
                1646
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 58
                },
                "start": {
                  "column": 49,
                  "line": 58
                }
              }
            },
            "range": [
              1641,
              1646
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 58
              },
              "start": {
                "column": 45,
                "line": 58
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1601,
          1646
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
      "test": {
        "type": "BinaryExpression",
        "operator": "<",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            1648,
            1649
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
          "raw": "1",
          "value": 1,
          "range": [
            1652,
            1653
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
          1648,
          1653
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
      },
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            1655,
            1656
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
        "operator": "++",
        "prefix": false,
        "range": [
          1655,
          1658
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 58
          },
          "start": {
            "column": 59,
            "line": 58
          }
        }
      },
      "range": [
        1596,
        1687
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
                    1790,
                    1795
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
                    1778,
                    1785
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
                    1786,
                    1789
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
                  1778,
                  1789
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
                1778,
                1796
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
              1778,
              1797
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
          1772,
          1799
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 63
          },
          "start": {
            "column": 84,
            "line": 61
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
                    "name": "nameB",
                    "optional": false,
                    "range": [
                      1698,
                      1703
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 61
                      },
                      "start": {
                        "column": 10,
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
                      1706,
                      1712
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 61
                      },
                      "start": {
                        "column": 18,
                        "line": 61
                      }
                    }
                  },
                  "range": [
                    1698,
                    1712
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 61
                    },
                    "start": {
                      "column": 10,
                      "line": 61
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1697,
                1713
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 61
                },
                "start": {
                  "column": 9,
                  "line": 61
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
                    1717,
                    1726
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 61
                    },
                    "start": {
                      "column": 29,
                      "line": 61
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
                        1729,
                        1739
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 61
                        },
                        "start": {
                          "column": 41,
                          "line": 61
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"edging\"",
                      "value": "edging",
                      "range": [
                        1741,
                        1749
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 61
                        },
                        "start": {
                          "column": 53,
                          "line": 61
                        }
                      }
                    }
                  ],
                  "range": [
                    1728,
                    1750
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 61
                    },
                    "start": {
                      "column": 40,
                      "line": 61
                    }
                  }
                }
              ],
              "range": [
                1716,
                1751
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 61
                },
                "start": {
                  "column": 28,
                  "line": 61
                }
              }
            },
            "range": [
              1697,
              1751
            ],
            "loc": {
              "end": {
                "column": 63,
                "line": 61
              },
              "start": {
                "column": 9,
                "line": 61
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
                1753,
                1754
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 61
                },
                "start": {
                  "column": 65,
                  "line": 61
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1757,
                1758
              ],
              "loc": {
                "end": {
                  "column": 70,
                  "line": 61
                },
                "start": {
                  "column": 69,
                  "line": 61
                }
              }
            },
            "range": [
              1753,
              1758
            ],
            "loc": {
              "end": {
                "column": 70,
                "line": 61
              },
              "start": {
                "column": 65,
                "line": 61
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1693,
          1758
        ],
        "loc": {
          "end": {
            "column": 70,
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
            1760,
            1761
          ],
          "loc": {
            "end": {
              "column": 73,
              "line": 61
            },
            "start": {
              "column": 72,
              "line": 61
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1764,
            1765
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 61
            },
            "start": {
              "column": 76,
              "line": 61
            }
          }
        },
        "range": [
          1760,
          1765
        ],
        "loc": {
          "end": {
            "column": 77,
            "line": 61
          },
          "start": {
            "column": 72,
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
            1767,
            1768
          ],
          "loc": {
            "end": {
              "column": 80,
              "line": 61
            },
            "start": {
              "column": 79,
              "line": 61
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1767,
          1770
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 61
          },
          "start": {
            "column": 79,
            "line": 61
          }
        }
      },
      "range": [
        1688,
        1799
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
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    1909,
                    1915
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
                    1897,
                    1904
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
                    1905,
                    1908
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
                  1897,
                  1908
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
                1897,
                1916
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
              1897,
              1917
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
          1891,
          1919
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 67
          },
          "start": {
            "column": 90,
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "range": [
                      1811,
                      1819
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 65
                      },
                      "start": {
                        "column": 10,
                        "line": 65
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
                        1823,
                        1824
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 65
                        },
                        "start": {
                          "column": 22,
                          "line": 65
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1822,
                      1824
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 65
                      },
                      "start": {
                        "column": 21,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    1811,
                    1824
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 65
                    },
                    "start": {
                      "column": 10,
                      "line": 65
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
                      1826,
                      1832
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 65
                      },
                      "start": {
                        "column": 25,
                        "line": 65
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"name\"",
                    "value": "name",
                    "range": [
                      1835,
                      1841
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 65
                      },
                      "start": {
                        "column": 34,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    1826,
                    1841
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 65
                    },
                    "start": {
                      "column": 25,
                      "line": 65
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
                      1843,
                      1850
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 65
                      },
                      "start": {
                        "column": 42,
                        "line": 65
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"skill\"",
                    "value": "skill",
                    "range": [
                      1853,
                      1860
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 65
                      },
                      "start": {
                        "column": 52,
                        "line": 65
                      }
                    }
                  },
                  "range": [
                    1843,
                    1860
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 65
                    },
                    "start": {
                      "column": 42,
                      "line": 65
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1810,
                1861
              ],
              "loc": {
                "end": {
                  "column": 60,
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
              "name": "robotA",
              "optional": false,
              "range": [
                1864,
                1870
              ],
              "loc": {
                "end": {
                  "column": 69,
                  "line": 65
                },
                "start": {
                  "column": 63,
                  "line": 65
                }
              }
            },
            "range": [
              1810,
              1870
            ],
            "loc": {
              "end": {
                "column": 69,
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
                1872,
                1873
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
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1876,
                1877
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 65
                },
                "start": {
                  "column": 75,
                  "line": 65
                }
              }
            },
            "range": [
              1872,
              1877
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 65
              },
              "start": {
                "column": 71,
                "line": 65
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1806,
          1877
        ],
        "loc": {
          "end": {
            "column": 76,
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
            1879,
            1880
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
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            1883,
            1884
          ],
          "loc": {
            "end": {
              "column": 83,
              "line": 65
            },
            "start": {
              "column": 82,
              "line": 65
            }
          }
        },
        "range": [
          1879,
          1884
        ],
        "loc": {
          "end": {
            "column": 83,
            "line": 65
          },
          "start": {
            "column": 78,
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
            1886,
            1887
          ],
          "loc": {
            "end": {
              "column": 86,
              "line": 65
            },
            "start": {
              "column": 85,
              "line": 65
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1886,
          1889
        ],
        "loc": {
          "end": {
            "column": 88,
            "line": 65
          },
          "start": {
            "column": 85,
            "line": 65
          }
        }
      },
      "range": [
        1801,
        1919
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
                    2032,
                    2038
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
                    2020,
                    2027
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
                    2028,
                    2031
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
                  2020,
                  2031
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
                2020,
                2039
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
              2020,
              2040
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
          2014,
          2042
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 70
          },
          "start": {
            "column": 94,
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "range": [
                      1930,
                      1938
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 68
                      },
                      "start": {
                        "column": 10,
                        "line": 68
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
                        1942,
                        1943
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 68
                        },
                        "start": {
                          "column": 22,
                          "line": 68
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      1941,
                      1943
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 68
                      },
                      "start": {
                        "column": 21,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1930,
                    1943
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 68
                    },
                    "start": {
                      "column": 10,
                      "line": 68
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
                      1945,
                      1951
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 68
                      },
                      "start": {
                        "column": 25,
                        "line": 68
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"name\"",
                    "value": "name",
                    "range": [
                      1954,
                      1960
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 68
                      },
                      "start": {
                        "column": 34,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1945,
                    1960
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 68
                    },
                    "start": {
                      "column": 25,
                      "line": 68
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
                      1962,
                      1969
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 68
                      },
                      "start": {
                        "column": 42,
                        "line": 68
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"skill\"",
                    "value": "skill",
                    "range": [
                      1972,
                      1979
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 68
                      },
                      "start": {
                        "column": 52,
                        "line": 68
                      }
                    }
                  },
                  "range": [
                    1962,
                    1979
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 68
                    },
                    "start": {
                      "column": 42,
                      "line": 68
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                1929,
                1980
              ],
              "loc": {
                "end": {
                  "column": 60,
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
                "name": "getRobot",
                "optional": false,
                "range": [
                  1983,
                  1991
                ],
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 68
                  },
                  "start": {
                    "column": 63,
                    "line": 68
                  }
                }
              },
              "optional": false,
              "range": [
                1983,
                1993
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 68
                },
                "start": {
                  "column": 63,
                  "line": 68
                }
              }
            },
            "range": [
              1929,
              1993
            ],
            "loc": {
              "end": {
                "column": 73,
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
                1995,
                1996
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
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1999,
                2000
              ],
              "loc": {
                "end": {
                  "column": 80,
                  "line": 68
                },
                "start": {
                  "column": 79,
                  "line": 68
                }
              }
            },
            "range": [
              1995,
              2000
            ],
            "loc": {
              "end": {
                "column": 80,
                "line": 68
              },
              "start": {
                "column": 75,
                "line": 68
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1925,
          2000
        ],
        "loc": {
          "end": {
            "column": 80,
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
            2002,
            2003
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
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2006,
            2007
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 68
            },
            "start": {
              "column": 86,
              "line": 68
            }
          }
        },
        "range": [
          2002,
          2007
        ],
        "loc": {
          "end": {
            "column": 87,
            "line": 68
          },
          "start": {
            "column": 82,
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
            2009,
            2010
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 68
            },
            "start": {
              "column": 89,
              "line": 68
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2009,
          2012
        ],
        "loc": {
          "end": {
            "column": 92,
            "line": 68
          },
          "start": {
            "column": 89,
            "line": 68
          }
        }
      },
      "range": [
        1920,
        2042
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
                  "name": "nameA2",
                  "optional": false,
                  "range": [
                    2171,
                    2177
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
                    2159,
                    2166
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
                    2167,
                    2170
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
                  2159,
                  2170
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
                2159,
                2178
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
              2159,
              2179
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
          2153,
          2181
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "numberA2",
                    "optional": false,
                    "range": [
                      2053,
                      2061
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 71
                      },
                      "start": {
                        "column": 10,
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
                        2065,
                        2066
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 71
                        },
                        "start": {
                          "column": 22,
                          "line": 71
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      2064,
                      2066
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 71
                      },
                      "start": {
                        "column": 21,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    2053,
                    2066
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 71
                    },
                    "start": {
                      "column": 10,
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
                      2068,
                      2074
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 71
                      },
                      "start": {
                        "column": 25,
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
                      2077,
                      2083
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 71
                      },
                      "start": {
                        "column": 34,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    2068,
                    2083
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 71
                    },
                    "start": {
                      "column": 25,
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
                      2085,
                      2092
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 71
                      },
                      "start": {
                        "column": 42,
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
                      2095,
                      2102
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 71
                      },
                      "start": {
                        "column": 52,
                        "line": 71
                      }
                    }
                  },
                  "range": [
                    2085,
                    2102
                  ],
                  "loc": {
                    "end": {
                      "column": 59,
                      "line": 71
                    },
                    "start": {
                      "column": 42,
                      "line": 71
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2052,
                2103
              ],
              "loc": {
                "end": {
                  "column": 60,
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
                  "raw": "2",
                  "value": 2,
                  "range": [
                    2107,
                    2108
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 71
                    },
                    "start": {
                      "column": 64,
                      "line": 71
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    2110,
                    2119
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
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
                  "raw": "\"trimming\"",
                  "value": "trimming",
                  "range": [
                    2121,
                    2131
                  ],
                  "loc": {
                    "end": {
                      "column": 88,
                      "line": 71
                    },
                    "start": {
                      "column": 78,
                      "line": 71
                    }
                  }
                }
              ],
              "range": [
                2106,
                2132
              ],
              "loc": {
                "end": {
                  "column": 89,
                  "line": 71
                },
                "start": {
                  "column": 63,
                  "line": 71
                }
              }
            },
            "range": [
              2052,
              2132
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
                2134,
                2135
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
                2138,
                2139
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
              2134,
              2139
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
          2048,
          2139
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
            2141,
            2142
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
            2145,
            2146
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
          2141,
          2146
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
            2148,
            2149
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
          2148,
          2151
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
        2043,
        2181
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
                    2393,
                    2399
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 81
                    },
                    "start": {
                      "column": 16,
                      "line": 81
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
                    2381,
                    2388
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 81
                    },
                    "start": {
                      "column": 4,
                      "line": 81
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
                    2389,
                    2392
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 81
                    },
                    "start": {
                      "column": 12,
                      "line": 81
                    }
                  }
                },
                "range": [
                  2381,
                  2392
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 81
                  },
                  "start": {
                    "column": 4,
                    "line": 81
                  }
                }
              },
              "optional": false,
              "range": [
                2381,
                2400
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 81
                },
                "start": {
                  "column": 4,
                  "line": 81
                }
              }
            },
            "range": [
              2381,
              2401
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 81
              },
              "start": {
                "column": 4,
                "line": 81
              }
            }
          }
        ],
        "range": [
          2375,
          2403
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 82
          },
          "start": {
            "column": 40,
            "line": 80
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
                      2196,
                      2202
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 75
                      },
                      "start": {
                        "column": 5,
                        "line": 75
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      2205,
                      2213
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 75
                      },
                      "start": {
                        "column": 14,
                        "line": 75
                      }
                    }
                  },
                  "range": [
                    2196,
                    2213
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 75
                    },
                    "start": {
                      "column": 5,
                      "line": 75
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
                            2237,
                            2250
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 77
                            },
                            "start": {
                              "column": 12,
                              "line": 77
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"primary\"",
                          "value": "primary",
                          "range": [
                            2253,
                            2262
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 77
                            },
                            "start": {
                              "column": 28,
                              "line": 77
                            }
                          }
                        },
                        "range": [
                          2237,
                          2262
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 77
                          },
                          "start": {
                            "column": 12,
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
                          "name": "secondarySkillA",
                          "optional": false,
                          "range": [
                            2276,
                            2291
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 78
                            },
                            "start": {
                              "column": 12,
                              "line": 78
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"secondary\"",
                          "value": "secondary",
                          "range": [
                            2294,
                            2305
                          ],
                          "loc": {
                            "end": {
                              "column": 41,
                              "line": 78
                            },
                            "start": {
                              "column": 30,
                              "line": 78
                            }
                          }
                        },
                        "range": [
                          2276,
                          2305
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 78
                          },
                          "start": {
                            "column": 12,
                            "line": 78
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      2223,
                      2315
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 79
                      },
                      "start": {
                        "column": 8,
                        "line": 76
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
                          2319,
                          2325
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 79
                          },
                          "start": {
                            "column": 13,
                            "line": 79
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"none\"",
                        "value": "none",
                        "range": [
                          2327,
                          2333
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 79
                          },
                          "start": {
                            "column": 21,
                            "line": 79
                          }
                        }
                      }
                    ],
                    "range": [
                      2318,
                      2334
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 79
                      },
                      "start": {
                        "column": 12,
                        "line": 79
                      }
                    }
                  },
                  "range": [
                    2223,
                    2334
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 79
                    },
                    "start": {
                      "column": 8,
                      "line": 76
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2195,
                2340
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 80
                },
                "start": {
                  "column": 4,
                  "line": 75
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "multiRobotA",
              "optional": false,
              "range": [
                2343,
                2354
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 80
                },
                "start": {
                  "column": 8,
                  "line": 80
                }
              }
            },
            "range": [
              2195,
              2354
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 80
              },
              "start": {
                "column": 4,
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
                2356,
                2357
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 80
                },
                "start": {
                  "column": 21,
                  "line": 80
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2360,
                2361
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 80
                },
                "start": {
                  "column": 25,
                  "line": 80
                }
              }
            },
            "range": [
              2356,
              2361
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 80
              },
              "start": {
                "column": 21,
                "line": 80
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2187,
          2361
        ],
        "loc": {
          "end": {
            "column": 26,
            "line": 80
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
            2363,
            2364
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 80
            },
            "start": {
              "column": 28,
              "line": 80
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2367,
            2368
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 80
            },
            "start": {
              "column": 32,
              "line": 80
            }
          }
        },
        "range": [
          2363,
          2368
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 80
          },
          "start": {
            "column": 28,
            "line": 80
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
            2370,
            2371
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 80
            },
            "start": {
              "column": 35,
              "line": 80
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2370,
          2373
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 80
          },
          "start": {
            "column": 35,
            "line": 80
          }
        }
      },
      "range": [
        2182,
        2403
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 82
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
                    2596,
                    2602
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 89
                    },
                    "start": {
                      "column": 16,
                      "line": 89
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
                    2584,
                    2591
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 89
                    },
                    "start": {
                      "column": 4,
                      "line": 89
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
                    2592,
                    2595
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 89
                    },
                    "start": {
                      "column": 12,
                      "line": 89
                    }
                  }
                },
                "range": [
                  2584,
                  2595
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 89
                  },
                  "start": {
                    "column": 4,
                    "line": 89
                  }
                }
              },
              "optional": false,
              "range": [
                2584,
                2603
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 89
                },
                "start": {
                  "column": 4,
                  "line": 89
                }
              }
            },
            "range": [
              2584,
              2604
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 89
              },
              "start": {
                "column": 4,
                "line": 89
              }
            }
          }
        ],
        "range": [
          2578,
          2606
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 90
          },
          "start": {
            "column": 41,
            "line": 88
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
                      2414,
                      2420
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 83
                      },
                      "start": {
                        "column": 10,
                        "line": 83
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      2423,
                      2431
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 83
                      },
                      "start": {
                        "column": 19,
                        "line": 83
                      }
                    }
                  },
                  "range": [
                    2414,
                    2431
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 83
                    },
                    "start": {
                      "column": 10,
                      "line": 83
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
                            2447,
                            2460
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 85
                            },
                            "start": {
                              "column": 8,
                              "line": 85
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"primary\"",
                          "value": "primary",
                          "range": [
                            2463,
                            2472
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 85
                            },
                            "start": {
                              "column": 24,
                              "line": 85
                            }
                          }
                        },
                        "range": [
                          2447,
                          2472
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 85
                          },
                          "start": {
                            "column": 8,
                            "line": 85
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
                            2482,
                            2497
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 86
                            },
                            "start": {
                              "column": 8,
                              "line": 86
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"secondary\"",
                          "value": "secondary",
                          "range": [
                            2500,
                            2511
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 86
                            },
                            "start": {
                              "column": 26,
                              "line": 86
                            }
                          }
                        },
                        "range": [
                          2482,
                          2511
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 86
                          },
                          "start": {
                            "column": 8,
                            "line": 86
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      2437,
                      2517
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 87
                      },
                      "start": {
                        "column": 4,
                        "line": 84
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
                          2521,
                          2527
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 87
                          },
                          "start": {
                            "column": 9,
                            "line": 87
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"none\"",
                        "value": "none",
                        "range": [
                          2529,
                          2535
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 87
                          },
                          "start": {
                            "column": 17,
                            "line": 87
                          }
                        }
                      }
                    ],
                    "range": [
                      2520,
                      2536
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 87
                      },
                      "start": {
                        "column": 8,
                        "line": 87
                      }
                    }
                  },
                  "range": [
                    2437,
                    2536
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 87
                    },
                    "start": {
                      "column": 4,
                      "line": 84
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2413,
                2538
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 88
                },
                "start": {
                  "column": 9,
                  "line": 83
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
                  2542,
                  2555
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 88
                  },
                  "start": {
                    "column": 5,
                    "line": 88
                  }
                }
              },
              "optional": false,
              "range": [
                2542,
                2557
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 88
                },
                "start": {
                  "column": 5,
                  "line": 88
                }
              }
            },
            "range": [
              2413,
              2557
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 88
              },
              "start": {
                "column": 9,
                "line": 83
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
                2559,
                2560
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 88
                },
                "start": {
                  "column": 22,
                  "line": 88
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2563,
                2564
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 88
                },
                "start": {
                  "column": 26,
                  "line": 88
                }
              }
            },
            "range": [
              2559,
              2564
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 88
              },
              "start": {
                "column": 22,
                "line": 88
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2409,
          2564
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 88
          },
          "start": {
            "column": 5,
            "line": 83
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
            2566,
            2567
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
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2570,
            2571
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
          2566,
          2571
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
      "update": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "range": [
            2573,
            2574
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 88
            },
            "start": {
              "column": 36,
              "line": 88
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2573,
          2576
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 88
          },
          "start": {
            "column": 36,
            "line": 88
          }
        }
      },
      "range": [
        2404,
        2606
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 83
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
                    2819,
                    2825
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
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
                    2807,
                    2814
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
                    2815,
                    2818
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
                  2807,
                  2818
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
                2807,
                2826
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 97
                },
                "start": {
                  "column": 4,
                  "line": 97
                }
              }
            },
            "range": [
              2807,
              2827
            ],
            "loc": {
              "end": {
                "column": 24,
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
          2801,
          2829
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 98
          },
          "start": {
            "column": 61,
            "line": 96
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
                      2617,
                      2623
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 91
                      },
                      "start": {
                        "column": 10,
                        "line": 91
                      }
                    }
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "raw": "\"noName\"",
                    "value": "noName",
                    "range": [
                      2626,
                      2634
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 91
                      },
                      "start": {
                        "column": 19,
                        "line": 91
                      }
                    }
                  },
                  "range": [
                    2617,
                    2634
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 91
                    },
                    "start": {
                      "column": 10,
                      "line": 91
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
                            2650,
                            2663
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 93
                            },
                            "start": {
                              "column": 8,
                              "line": 93
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"primary\"",
                          "value": "primary",
                          "range": [
                            2666,
                            2675
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 93
                            },
                            "start": {
                              "column": 24,
                              "line": 93
                            }
                          }
                        },
                        "range": [
                          2650,
                          2675
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 93
                          },
                          "start": {
                            "column": 8,
                            "line": 93
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
                            2685,
                            2700
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 94
                            },
                            "start": {
                              "column": 8,
                              "line": 94
                            }
                          }
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "raw": "\"secondary\"",
                          "value": "secondary",
                          "range": [
                            2703,
                            2714
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 94
                            },
                            "start": {
                              "column": 26,
                              "line": 94
                            }
                          }
                        },
                        "range": [
                          2685,
                          2714
                        ],
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 94
                          },
                          "start": {
                            "column": 8,
                            "line": 94
                          }
                        }
                      }
                    ],
                    "optional": false,
                    "range": [
                      2640,
                      2720
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 95
                      },
                      "start": {
                        "column": 4,
                        "line": 92
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
                          2724,
                          2730
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 95
                          },
                          "start": {
                            "column": 9,
                            "line": 95
                          }
                        }
                      },
                      {
                        "type": "Literal",
                        "raw": "\"none\"",
                        "value": "none",
                        "range": [
                          2732,
                          2738
                        ],
                        "loc": {
                          "end": {
                            "column": 23,
                            "line": 95
                          },
                          "start": {
                            "column": 17,
                            "line": 95
                          }
                        }
                      }
                    ],
                    "range": [
                      2723,
                      2739
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 95
                      },
                      "start": {
                        "column": 8,
                        "line": 95
                      }
                    }
                  },
                  "range": [
                    2640,
                    2739
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 95
                    },
                    "start": {
                      "column": 4,
                      "line": 92
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2616,
                2741
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 96
                },
                "start": {
                  "column": 9,
                  "line": 91
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
                    2746,
                    2755
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 96
                    },
                    "start": {
                      "column": 6,
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
                        2758,
                        2768
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 96
                        },
                        "start": {
                          "column": 18,
                          "line": 96
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"edging\"",
                      "value": "edging",
                      "range": [
                        2770,
                        2778
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 96
                        },
                        "start": {
                          "column": 30,
                          "line": 96
                        }
                      }
                    }
                  ],
                  "range": [
                    2757,
                    2779
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 96
                    },
                    "start": {
                      "column": 17,
                      "line": 96
                    }
                  }
                }
              ],
              "range": [
                2745,
                2780
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 96
                },
                "start": {
                  "column": 5,
                  "line": 96
                }
              }
            },
            "range": [
              2616,
              2780
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 96
              },
              "start": {
                "column": 9,
                "line": 91
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
                2782,
                2783
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 96
                },
                "start": {
                  "column": 42,
                  "line": 96
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2786,
                2787
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 96
                },
                "start": {
                  "column": 46,
                  "line": 96
                }
              }
            },
            "range": [
              2782,
              2787
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 96
              },
              "start": {
                "column": 42,
                "line": 96
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2612,
          2787
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 96
          },
          "start": {
            "column": 5,
            "line": 91
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
            2789,
            2790
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 96
            },
            "start": {
              "column": 49,
              "line": 96
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2793,
            2794
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 96
            },
            "start": {
              "column": 53,
              "line": 96
            }
          }
        },
        "range": [
          2789,
          2794
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 96
          },
          "start": {
            "column": 49,
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
            2796,
            2797
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 96
            },
            "start": {
              "column": 56,
              "line": 96
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2796,
          2799
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 96
          },
          "start": {
            "column": 56,
            "line": 96
          }
        }
      },
      "range": [
        2607,
        2829
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 98
        },
        "start": {
          "column": 0,
          "line": 91
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
                    2918,
                    2926
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 101
                    },
                    "start": {
                      "column": 16,
                      "line": 101
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
                    2906,
                    2913
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 101
                    },
                    "start": {
                      "column": 4,
                      "line": 101
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
                    2914,
                    2917
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 101
                    },
                    "start": {
                      "column": 12,
                      "line": 101
                    }
                  }
                },
                "range": [
                  2906,
                  2917
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 101
                  },
                  "start": {
                    "column": 4,
                    "line": 101
                  }
                }
              },
              "optional": false,
              "range": [
                2906,
                2927
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 101
                },
                "start": {
                  "column": 4,
                  "line": 101
                }
              }
            },
            "range": [
              2906,
              2928
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 101
              },
              "start": {
                "column": 4,
                "line": 101
              }
            }
          }
        ],
        "range": [
          2900,
          2930
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 102
          },
          "start": {
            "column": 69,
            "line": 100
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
                    "name": "numberA3",
                    "optional": false,
                    "range": [
                      2841,
                      2849
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 100
                      },
                      "start": {
                        "column": 10,
                        "line": 100
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
                        2853,
                        2854
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 100
                        },
                        "start": {
                          "column": 22,
                          "line": 100
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      2852,
                      2854
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 100
                      },
                      "start": {
                        "column": 21,
                        "line": 100
                      }
                    }
                  },
                  "range": [
                    2841,
                    2854
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 100
                    },
                    "start": {
                      "column": 10,
                      "line": 100
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
                      2859,
                      2869
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 100
                      },
                      "start": {
                        "column": 28,
                        "line": 100
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2856,
                    2869
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 100
                    },
                    "start": {
                      "column": 25,
                      "line": 100
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2840,
                2870
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 100
                },
                "start": {
                  "column": 9,
                  "line": 100
                }
              }
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "robotA",
              "optional": false,
              "range": [
                2873,
                2879
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 100
                },
                "start": {
                  "column": 42,
                  "line": 100
                }
              }
            },
            "range": [
              2840,
              2879
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 100
              },
              "start": {
                "column": 9,
                "line": 100
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
                2881,
                2882
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 100
                },
                "start": {
                  "column": 50,
                  "line": 100
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2885,
                2886
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 100
                },
                "start": {
                  "column": 54,
                  "line": 100
                }
              }
            },
            "range": [
              2881,
              2886
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 100
              },
              "start": {
                "column": 50,
                "line": 100
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2836,
          2886
        ],
        "loc": {
          "end": {
            "column": 55,
            "line": 100
          },
          "start": {
            "column": 5,
            "line": 100
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
            2888,
            2889
          ],
          "loc": {
            "end": {
              "column": 58,
              "line": 100
            },
            "start": {
              "column": 57,
              "line": 100
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2892,
            2893
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 100
            },
            "start": {
              "column": 61,
              "line": 100
            }
          }
        },
        "range": [
          2888,
          2893
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 100
          },
          "start": {
            "column": 57,
            "line": 100
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
            2895,
            2896
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 100
            },
            "start": {
              "column": 64,
              "line": 100
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2895,
          2898
        ],
        "loc": {
          "end": {
            "column": 67,
            "line": 100
          },
          "start": {
            "column": 64,
            "line": 100
          }
        }
      },
      "range": [
        2831,
        2930
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 102
        },
        "start": {
          "column": 0,
          "line": 100
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
                    3022,
                    3030
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 104
                    },
                    "start": {
                      "column": 16,
                      "line": 104
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
                    3010,
                    3017
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 104
                    },
                    "start": {
                      "column": 4,
                      "line": 104
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
                    3018,
                    3021
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 104
                    },
                    "start": {
                      "column": 12,
                      "line": 104
                    }
                  }
                },
                "range": [
                  3010,
                  3021
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 104
                  },
                  "start": {
                    "column": 4,
                    "line": 104
                  }
                }
              },
              "optional": false,
              "range": [
                3010,
                3031
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 104
                },
                "start": {
                  "column": 4,
                  "line": 104
                }
              }
            },
            "range": [
              3010,
              3032
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 104
              },
              "start": {
                "column": 4,
                "line": 104
              }
            }
          }
        ],
        "range": [
          3004,
          3034
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 105
          },
          "start": {
            "column": 73,
            "line": 103
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
                    "name": "numberA3",
                    "optional": false,
                    "range": [
                      2941,
                      2949
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 103
                      },
                      "start": {
                        "column": 10,
                        "line": 103
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
                        2953,
                        2954
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 103
                        },
                        "start": {
                          "column": 22,
                          "line": 103
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      2952,
                      2954
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 103
                      },
                      "start": {
                        "column": 21,
                        "line": 103
                      }
                    }
                  },
                  "range": [
                    2941,
                    2954
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 103
                    },
                    "start": {
                      "column": 10,
                      "line": 103
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
                      2959,
                      2969
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 103
                      },
                      "start": {
                        "column": 28,
                        "line": 103
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    2956,
                    2969
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 103
                    },
                    "start": {
                      "column": 25,
                      "line": 103
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                2940,
                2970
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 103
                },
                "start": {
                  "column": 9,
                  "line": 103
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
                  2973,
                  2981
                ],
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 103
                  },
                  "start": {
                    "column": 42,
                    "line": 103
                  }
                }
              },
              "optional": false,
              "range": [
                2973,
                2983
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 103
                },
                "start": {
                  "column": 42,
                  "line": 103
                }
              }
            },
            "range": [
              2940,
              2983
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 103
              },
              "start": {
                "column": 9,
                "line": 103
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
                2985,
                2986
              ],
              "loc": {
                "end": {
                  "column": 55,
                  "line": 103
                },
                "start": {
                  "column": 54,
                  "line": 103
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2989,
                2990
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 103
                },
                "start": {
                  "column": 58,
                  "line": 103
                }
              }
            },
            "range": [
              2985,
              2990
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 103
              },
              "start": {
                "column": 54,
                "line": 103
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          2936,
          2990
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 103
          },
          "start": {
            "column": 5,
            "line": 103
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
            2992,
            2993
          ],
          "loc": {
            "end": {
              "column": 62,
              "line": 103
            },
            "start": {
              "column": 61,
              "line": 103
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            2996,
            2997
          ],
          "loc": {
            "end": {
              "column": 66,
              "line": 103
            },
            "start": {
              "column": 65,
              "line": 103
            }
          }
        },
        "range": [
          2992,
          2997
        ],
        "loc": {
          "end": {
            "column": 66,
            "line": 103
          },
          "start": {
            "column": 61,
            "line": 103
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
            2999,
            3000
          ],
          "loc": {
            "end": {
              "column": 69,
              "line": 103
            },
            "start": {
              "column": 68,
              "line": 103
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          2999,
          3002
        ],
        "loc": {
          "end": {
            "column": 71,
            "line": 103
          },
          "start": {
            "column": 68,
            "line": 103
          }
        }
      },
      "range": [
        2931,
        3034
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 105
        },
        "start": {
          "column": 0,
          "line": 103
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
                    3142,
                    3150
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
                    3130,
                    3137
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
                    3138,
                    3141
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
                  3130,
                  3141
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
                3130,
                3151
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
              3130,
              3152
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
          3124,
          3154
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 108
          },
          "start": {
            "column": 89,
            "line": 106
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
                    "name": "numberA3",
                    "optional": false,
                    "range": [
                      3045,
                      3053
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 106
                      },
                      "start": {
                        "column": 10,
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
                        3057,
                        3058
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 106
                        },
                        "start": {
                          "column": 22,
                          "line": 106
                        }
                      }
                    },
                    "operator": "-",
                    "prefix": true,
                    "range": [
                      3056,
                      3058
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 106
                      },
                      "start": {
                        "column": 21,
                        "line": 106
                      }
                    }
                  },
                  "range": [
                    3045,
                    3058
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 106
                    },
                    "start": {
                      "column": 10,
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
                      3063,
                      3073
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 106
                      },
                      "start": {
                        "column": 28,
                        "line": 106
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    3060,
                    3073
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 106
                    },
                    "start": {
                      "column": 25,
                      "line": 106
                    }
                  }
                }
              ],
              "optional": false,
              "range": [
                3044,
                3074
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 106
                },
                "start": {
                  "column": 9,
                  "line": 106
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
                    3078,
                    3079
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 106
                    },
                    "start": {
                      "column": 43,
                      "line": 106
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimmer\"",
                  "value": "trimmer",
                  "range": [
                    3081,
                    3090
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 106
                    },
                    "start": {
                      "column": 46,
                      "line": 106
                    }
                  }
                },
                {
                  "type": "Literal",
                  "raw": "\"trimming\"",
                  "value": "trimming",
                  "range": [
                    3092,
                    3102
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 106
                    },
                    "start": {
                      "column": 57,
                      "line": 106
                    }
                  }
                }
              ],
              "range": [
                3077,
                3103
              ],
              "loc": {
                "end": {
                  "column": 68,
                  "line": 106
                },
                "start": {
                  "column": 42,
                  "line": 106
                }
              }
            },
            "range": [
              3044,
              3103
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 106
              },
              "start": {
                "column": 9,
                "line": 106
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
                3105,
                3106
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 106
                },
                "start": {
                  "column": 70,
                  "line": 106
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                3109,
                3110
              ],
              "loc": {
                "end": {
                  "column": 75,
                  "line": 106
                },
                "start": {
                  "column": 74,
                  "line": 106
                }
              }
            },
            "range": [
              3105,
              3110
            ],
            "loc": {
              "end": {
                "column": 75,
                "line": 106
              },
              "start": {
                "column": 70,
                "line": 106
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          3040,
          3110
        ],
        "loc": {
          "end": {
            "column": 75,
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
            3112,
            3113
          ],
          "loc": {
            "end": {
              "column": 78,
              "line": 106
            },
            "start": {
              "column": 77,
              "line": 106
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "1",
          "value": 1,
          "range": [
            3116,
            3117
          ],
          "loc": {
            "end": {
              "column": 82,
              "line": 106
            },
            "start": {
              "column": 81,
              "line": 106
            }
          }
        },
        "range": [
          3112,
          3117
        ],
        "loc": {
          "end": {
            "column": 82,
            "line": 106
          },
          "start": {
            "column": 77,
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
            3119,
            3120
          ],
          "loc": {
            "end": {
              "column": 85,
              "line": 106
            },
            "start": {
              "column": 84,
              "line": 106
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          3119,
          3122
        ],
        "loc": {
          "end": {
            "column": 87,
            "line": 106
          },
          "start": {
            "column": 84,
            "line": 106
          }
        }
      },
      "range": [
        3035,
        3154
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
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 108
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
