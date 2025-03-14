__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    210,
    2374
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
                  "column": 24,
                  "line": 6
                },
                "start": {
                  "column": 19,
                  "line": 6
                }
              },
              "range": [
                229,
                234
              ],
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  231,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 6
                  },
                  "start": {
                    "column": 21,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              222,
              234
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 6
              },
              "start": {
                "column": 12,
                "line": 6
              }
            }
          },
          "init": null,
          "range": [
            222,
            234
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 6
            },
            "start": {
              "column": 12,
              "line": 6
            }
          }
        }
      ],
      "declare": true,
      "kind": "var",
      "range": [
        210,
        235
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ts",
        "optional": false,
        "range": [
          244,
          246
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 8
          },
          "start": {
            "column": 7,
            "line": 8
          }
        }
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "raw": "\"typescript\"",
          "value": "typescript",
          "range": [
            257,
            269
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 8
            },
            "start": {
              "column": 20,
              "line": 8
            }
          }
        },
        "range": [
          249,
          270
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 8
          },
          "start": {
            "column": 12,
            "line": 8
          }
        }
      },
      "range": [
        237,
        271
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "configPath",
                  "optional": false,
                  "range": [
                    306,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 11
                    },
                    "start": {
                      "column": 10,
                      "line": 11
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Literal",
                      "raw": "\"./\"",
                      "value": "./",
                      "range": [
                        352,
                        356
                      ],
                      "loc": {
                        "end": {
                          "column": 60,
                          "line": 11
                        },
                        "start": {
                          "column": 56,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ts",
                          "optional": false,
                          "range": [
                            358,
                            360
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 11
                            },
                            "start": {
                              "column": 62,
                              "line": 11
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "sys",
                          "optional": false,
                          "range": [
                            361,
                            364
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 11
                            },
                            "start": {
                              "column": 65,
                              "line": 11
                            }
                          }
                        },
                        "range": [
                          358,
                          364
                        ],
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 11
                          },
                          "start": {
                            "column": 62,
                            "line": 11
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fileExists",
                        "optional": false,
                        "range": [
                          365,
                          375
                        ],
                        "loc": {
                          "end": {
                            "column": 79,
                            "line": 11
                          },
                          "start": {
                            "column": 69,
                            "line": 11
                          }
                        }
                      },
                      "range": [
                        358,
                        375
                      ],
                      "loc": {
                        "end": {
                          "column": 79,
                          "line": 11
                        },
                        "start": {
                          "column": 62,
                          "line": 11
                        }
                      }
                    },
                    {
                      "type": "Literal",
                      "raw": "\"tsconfig.json\"",
                      "value": "tsconfig.json",
                      "range": [
                        377,
                        392
                      ],
                      "loc": {
                        "end": {
                          "column": 96,
                          "line": 11
                        },
                        "start": {
                          "column": 81,
                          "line": 11
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
                      "name": "ts",
                      "optional": false,
                      "range": [
                        319,
                        321
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 11
                        },
                        "start": {
                          "column": 23,
                          "line": 11
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "findConfigFile",
                      "optional": false,
                      "range": [
                        322,
                        336
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 11
                        },
                        "start": {
                          "column": 26,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      319,
                      336
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 11
                      },
                      "start": {
                        "column": 23,
                        "line": 11
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    319,
                    393
                  ],
                  "loc": {
                    "end": {
                      "column": 97,
                      "line": 11
                    },
                    "start": {
                      "column": 23,
                      "line": 11
                    }
                  }
                },
                "range": [
                  306,
                  393
                ],
                "loc": {
                  "end": {
                    "column": 97,
                    "line": 11
                  },
                  "start": {
                    "column": 10,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              300,
              394
            ],
            "loc": {
              "end": {
                "column": 98,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
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
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "arguments": [
                      {
                        "type": "Literal",
                        "raw": "\"Could not find a valid 'tsconfig.json'.\"",
                        "value": "Could not find a valid 'tsconfig.json'.",
                        "range": [
                          442,
                          483
                        ],
                        "loc": {
                          "end": {
                            "column": 65,
                            "line": 13
                          },
                          "start": {
                            "column": 24,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "range": [
                        436,
                        441
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 13
                        },
                        "start": {
                          "column": 18,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      432,
                      484
                    ],
                    "loc": {
                      "end": {
                        "column": 66,
                        "line": 13
                      },
                      "start": {
                        "column": 14,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    426,
                    485
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
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
                416,
                491
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 21,
                  "line": 12
                }
              }
            },
            "test": {
              "type": "UnaryExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "configPath",
                "optional": false,
                "range": [
                  404,
                  414
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 12
                  },
                  "start": {
                    "column": 9,
                    "line": 12
                  }
                }
              },
              "operator": "!",
              "prefix": true,
              "range": [
                403,
                414
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "range": [
              399,
              491
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
                  "name": "host",
                  "optional": false,
                  "range": [
                    1477,
                    1481
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
                "init": {
                  "type": "CallExpression",
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "configPath",
                      "optional": false,
                      "range": [
                        1511,
                        1521
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 27
                        },
                        "start": {
                          "column": 44,
                          "line": 27
                        }
                      }
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [],
                      "range": [
                        1523,
                        1525
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 27
                        },
                        "start": {
                          "column": 56,
                          "line": 27
                        }
                      }
                    },
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ts",
                        "optional": false,
                        "range": [
                          1527,
                          1529
                        ],
                        "loc": {
                          "end": {
                            "column": 62,
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
                        "name": "sys",
                        "optional": false,
                        "range": [
                          1530,
                          1533
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 27
                          },
                          "start": {
                            "column": 63,
                            "line": 27
                          }
                        }
                      },
                      "range": [
                        1527,
                        1533
                      ],
                      "loc": {
                        "end": {
                          "column": 66,
                          "line": 27
                        },
                        "start": {
                          "column": 60,
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
                      "name": "ts",
                      "optional": false,
                      "range": [
                        1484,
                        1486
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 27
                        },
                        "start": {
                          "column": 17,
                          "line": 27
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "createWatchCompilerHost",
                      "optional": false,
                      "range": [
                        1487,
                        1510
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 27
                        },
                        "start": {
                          "column": 20,
                          "line": 27
                        }
                      }
                    },
                    "range": [
                      1484,
                      1510
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
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
                    1484,
                    1534
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 27
                    },
                    "start": {
                      "column": 17,
                      "line": 27
                    }
                  }
                },
                "range": [
                  1477,
                  1534
                ],
                "loc": {
                  "end": {
                    "column": 67,
                    "line": 27
                  },
                  "start": {
                    "column": 10,
                    "line": 27
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1471,
              1535
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 27
              },
              "start": {
                "column": 4,
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
                  "name": "origCreateProgram",
                  "optional": false,
                  "range": [
                    1753,
                    1770
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 31
                    },
                    "start": {
                      "column": 10,
                      "line": 31
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "range": [
                      1773,
                      1777
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 31
                      },
                      "start": {
                        "column": 30,
                        "line": 31
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "createProgram",
                    "optional": false,
                    "range": [
                      1778,
                      1791
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 31
                      },
                      "start": {
                        "column": 35,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    1773,
                    1791
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 31
                    },
                    "start": {
                      "column": 30,
                      "line": 31
                    }
                  }
                },
                "range": [
                  1753,
                  1791
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 31
                  },
                  "start": {
                    "column": 10,
                    "line": 31
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1747,
              1792
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 31
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
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "host",
                  "optional": false,
                  "range": [
                    1797,
                    1801
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
                      "line": 32
                    },
                    "start": {
                      "column": 4,
                      "line": 32
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "createProgram",
                  "optional": false,
                  "range": [
                    1802,
                    1815
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 32
                    },
                    "start": {
                      "column": 9,
                      "line": 32
                    }
                  }
                },
                "range": [
                  1797,
                  1815
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 32
                  },
                  "start": {
                    "column": 4,
                    "line": 32
                  }
                }
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "\"** We're about to create the program! **\"",
                            "value": "** We're about to create the program! **",
                            "range": [
                              1882,
                              1924
                            ],
                            "loc": {
                              "end": {
                                "column": 62,
                                "line": 33
                              },
                              "start": {
                                "column": 20,
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
                            "name": "console",
                            "optional": false,
                            "range": [
                              1870,
                              1877
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 33
                              },
                              "start": {
                                "column": 8,
                                "line": 33
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
                              1878,
                              1881
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 33
                              },
                              "start": {
                                "column": 16,
                                "line": 33
                              }
                            }
                          },
                          "range": [
                            1870,
                            1881
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 33
                            },
                            "start": {
                              "column": 8,
                              "line": 33
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1870,
                          1925
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 33
                          },
                          "start": {
                            "column": 8,
                            "line": 33
                          }
                        }
                      },
                      "range": [
                        1870,
                        1926
                      ],
                      "loc": {
                        "end": {
                          "column": 64,
                          "line": 33
                        },
                        "start": {
                          "column": 8,
                          "line": 33
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rootNames",
                            "optional": false,
                            "range": [
                              1960,
                              1969
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 34
                              },
                              "start": {
                                "column": 33,
                                "line": 34
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "options",
                            "optional": false,
                            "range": [
                              1971,
                              1978
                            ],
                            "loc": {
                              "end": {
                                "column": 51,
                                "line": 34
                              },
                              "start": {
                                "column": 44,
                                "line": 34
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "host",
                            "optional": false,
                            "range": [
                              1980,
                              1984
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 34
                              },
                              "start": {
                                "column": 53,
                                "line": 34
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "oldProgram",
                            "optional": false,
                            "range": [
                              1986,
                              1996
                            ],
                            "loc": {
                              "end": {
                                "column": 69,
                                "line": 34
                              },
                              "start": {
                                "column": 59,
                                "line": 34
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "origCreateProgram",
                          "optional": false,
                          "range": [
                            1942,
                            1959
                          ],
                          "loc": {
                            "end": {
                              "column": 32,
                              "line": 34
                            },
                            "start": {
                              "column": 15,
                              "line": 34
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          1942,
                          1997
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 34
                          },
                          "start": {
                            "column": 15,
                            "line": 34
                          }
                        }
                      },
                      "range": [
                        1935,
                        1998
                      ],
                      "loc": {
                        "end": {
                          "column": 71,
                          "line": 34
                        },
                        "start": {
                          "column": 8,
                          "line": 34
                        }
                      }
                    }
                  ],
                  "range": [
                    1860,
                    2004
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 35
                    },
                    "start": {
                      "column": 67,
                      "line": 32
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rootNames",
                    "optional": false,
                    "range": [
                      1819,
                      1828
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 32
                      },
                      "start": {
                        "column": 26,
                        "line": 32
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "range": [
                      1830,
                      1837
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 32
                      },
                      "start": {
                        "column": 37,
                        "line": 32
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "range": [
                      1839,
                      1843
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 32
                      },
                      "start": {
                        "column": 46,
                        "line": 32
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "oldProgram",
                    "optional": false,
                    "range": [
                      1845,
                      1855
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 32
                      },
                      "start": {
                        "column": 52,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  1818,
                  2004
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 35
                  },
                  "start": {
                    "column": 25,
                    "line": 32
                  }
                }
              },
              "range": [
                1797,
                2004
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 32
                }
              }
            },
            "range": [
              1797,
              2004
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 35
              },
              "start": {
                "column": 4,
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
                  "name": "origPostProgramCreate",
                  "optional": false,
                  "range": [
                    2015,
                    2036
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 36
                    },
                    "start": {
                      "column": 10,
                      "line": 36
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "host",
                    "optional": false,
                    "range": [
                      2039,
                      2043
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 36
                      },
                      "start": {
                        "column": 34,
                        "line": 36
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "afterProgramCreate",
                    "optional": false,
                    "range": [
                      2044,
                      2062
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 36
                      },
                      "start": {
                        "column": 39,
                        "line": 36
                      }
                    }
                  },
                  "range": [
                    2039,
                    2062
                  ],
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 36
                    },
                    "start": {
                      "column": 34,
                      "line": 36
                    }
                  }
                },
                "range": [
                  2015,
                  2062
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 36
                  },
                  "start": {
                    "column": 10,
                    "line": 36
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              2009,
              2063
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
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
                  "name": "host",
                  "optional": false,
                  "range": [
                    2069,
                    2073
                  ],
                  "loc": {
                    "end": {
                      "column": 8,
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
                  "name": "afterProgramCreate",
                  "optional": false,
                  "range": [
                    2074,
                    2092
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 38
                    },
                    "start": {
                      "column": 9,
                      "line": 38
                    }
                  }
                },
                "range": [
                  2069,
                  2092
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 38
                  },
                  "start": {
                    "column": 4,
                    "line": 38
                  }
                }
              },
              "right": {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "\"** We finished making the program! **\"",
                            "value": "** We finished making the program! **",
                            "range": [
                              2128,
                              2167
                            ],
                            "loc": {
                              "end": {
                                "column": 59,
                                "line": 39
                              },
                              "start": {
                                "column": 20,
                                "line": 39
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
                              2116,
                              2123
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 39
                              },
                              "start": {
                                "column": 8,
                                "line": 39
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
                              2124,
                              2127
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 39
                              },
                              "start": {
                                "column": 16,
                                "line": 39
                              }
                            }
                          },
                          "range": [
                            2116,
                            2127
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 39
                            },
                            "start": {
                              "column": 8,
                              "line": 39
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          2116,
                          2168
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
                            "line": 39
                          },
                          "start": {
                            "column": 8,
                            "line": 39
                          }
                        }
                      },
                      "range": [
                        2116,
                        2169
                      ],
                      "loc": {
                        "end": {
                          "column": 61,
                          "line": 39
                        },
                        "start": {
                          "column": 8,
                          "line": 39
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
                            "name": "program",
                            "optional": false,
                            "range": [
                              2201,
                              2208
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 40
                              },
                              "start": {
                                "column": 31,
                                "line": 40
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "origPostProgramCreate",
                            "optional": false,
                            "range": [
                              2178,
                              2199
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 40
                              },
                              "start": {
                                "column": 8,
                                "line": 40
                              }
                            }
                          },
                          "range": [
                            2178,
                            2200
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 40
                            },
                            "start": {
                              "column": 8,
                              "line": 40
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          2178,
                          2209
                        ],
                        "loc": {
                          "end": {
                            "column": 39,
                            "line": 40
                          },
                          "start": {
                            "column": 8,
                            "line": 40
                          }
                        }
                      },
                      "range": [
                        2178,
                        2210
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
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
                    2106,
                    2216
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 41
                    },
                    "start": {
                      "column": 41,
                      "line": 38
                    }
                  }
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "program",
                    "optional": false,
                    "range": [
                      2095,
                      2102
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 38
                      },
                      "start": {
                        "column": 30,
                        "line": 38
                      }
                    }
                  }
                ],
                "range": [
                  2095,
                  2216
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 41
                  },
                  "start": {
                    "column": 30,
                    "line": 38
                  }
                }
              },
              "range": [
                2069,
                2216
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 41
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "range": [
              2069,
              2217
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 41
              },
              "start": {
                "column": 4,
                "line": 38
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
                  "name": "host",
                  "optional": false,
                  "range": [
                    2351,
                    2355
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 44
                    },
                    "start": {
                      "column": 26,
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
                  "name": "ts",
                  "optional": false,
                  "range": [
                    2329,
                    2331
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
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
                  "name": "createWatchProgram",
                  "optional": false,
                  "range": [
                    2332,
                    2350
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 44
                    },
                    "start": {
                      "column": 7,
                      "line": 44
                    }
                  }
                },
                "range": [
                  2329,
                  2350
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
              },
              "optional": false,
              "range": [
                2329,
                2356
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 44
                },
                "start": {
                  "column": 4,
                  "line": 44
                }
              }
            },
            "range": [
              2329,
              2357
            ],
            "loc": {
              "end": {
                "column": 32,
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
          294,
          2359
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
          },
          "start": {
            "column": 21,
            "line": 10
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "watchMain",
        "optional": false,
        "range": [
          282,
          291
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [],
      "range": [
        273,
        2359
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "watchMain",
          "optional": false,
          "range": [
            2361,
            2370
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 47
            },
            "start": {
              "column": 0,
              "line": 47
            }
          }
        },
        "optional": false,
        "range": [
          2361,
          2372
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 47
          },
          "start": {
            "column": 0,
            "line": 47
          }
        }
      },
      "range": [
        2361,
        2373
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    }
  ],
  "sourceType": "module",
  "loc": {
    "end": {
      "column": 0,
      "line": 48
    },
    "start": {
      "column": 0,
      "line": 6
    }
  },
  "hashbang": null
}
```
