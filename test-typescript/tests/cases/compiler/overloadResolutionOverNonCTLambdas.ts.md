__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    577
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                24,
                29
              ],
              "body": [],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 3
                },
                "start": {
                  "column": 10,
                  "line": 2
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                22,
                23
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
            "implements": [],
            "superClass": null,
            "range": [
              16,
              29
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 3
              },
              "start": {
                "column": 2,
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "range": [
                          201,
                          207
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "init": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "Literal",
                            "raw": "/\\{(\\d+)\\}/g",
                            "regex": {
                              "flags": "g",
                              "pattern": "\\{(\\d+)\\}"
                            },
                            "value": null,
                            "range": [
                              225,
                              237
                            ],
                            "loc": {
                              "end": {
                                "column": 44,
                                "line": 7
                              },
                              "start": {
                                "column": 32,
                                "line": 7
                              }
                            }
                          },
                          {
                            "type": "FunctionExpression",
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
                                        "name": "index",
                                        "optional": false,
                                        "range": [
                                          276,
                                          281
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 15,
                                            "line": 8
                                          },
                                          "start": {
                                            "column": 10,
                                            "line": 8
                                          }
                                        }
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "computed": true,
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "rest",
                                          "optional": false,
                                          "range": [
                                            283,
                                            287
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 21,
                                              "line": 8
                                            },
                                            "start": {
                                              "column": 17,
                                              "line": 8
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Literal",
                                          "raw": "0",
                                          "value": 0,
                                          "range": [
                                            288,
                                            289
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 23,
                                              "line": 8
                                            },
                                            "start": {
                                              "column": 22,
                                              "line": 8
                                            }
                                          }
                                        },
                                        "range": [
                                          283,
                                          290
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 24,
                                            "line": 8
                                          },
                                          "start": {
                                            "column": 17,
                                            "line": 8
                                          }
                                        }
                                      },
                                      "range": [
                                        276,
                                        290
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 8
                                        },
                                        "start": {
                                          "column": 10,
                                          "line": 8
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var",
                                  "range": [
                                    272,
                                    291
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 8
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 8
                                    }
                                  }
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "ConditionalExpression",
                                    "alternate": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "match",
                                      "optional": false,
                                      "range": [
                                        372,
                                        377
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 15,
                                          "line": 11
                                        },
                                        "start": {
                                          "column": 10,
                                          "line": 11
                                        }
                                      }
                                    },
                                    "consequent": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "args",
                                        "optional": false,
                                        "range": [
                                          350,
                                          354
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 14,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 10,
                                            "line": 10
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "index",
                                        "optional": false,
                                        "range": [
                                          355,
                                          360
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 20,
                                            "line": 10
                                          },
                                          "start": {
                                            "column": 15,
                                            "line": 10
                                          }
                                        }
                                      },
                                      "range": [
                                        350,
                                        361
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 10
                                        },
                                        "start": {
                                          "column": 10,
                                          "line": 10
                                        }
                                      }
                                    },
                                    "test": {
                                      "type": "BinaryExpression",
                                      "operator": "!==",
                                      "left": {
                                        "type": "UnaryExpression",
                                        "argument": {
                                          "type": "MemberExpression",
                                          "computed": true,
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "args",
                                            "optional": false,
                                            "range": [
                                              312,
                                              316
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 24,
                                                "line": 9
                                              },
                                              "start": {
                                                "column": 20,
                                                "line": 9
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "index",
                                            "optional": false,
                                            "range": [
                                              317,
                                              322
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 30,
                                                "line": 9
                                              },
                                              "start": {
                                                "column": 25,
                                                "line": 9
                                              }
                                            }
                                          },
                                          "range": [
                                            312,
                                            323
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 31,
                                              "line": 9
                                            },
                                            "start": {
                                              "column": 20,
                                              "line": 9
                                            }
                                          }
                                        },
                                        "operator": "typeof",
                                        "prefix": true,
                                        "range": [
                                          305,
                                          323
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 31,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 13,
                                            "line": 9
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "raw": "'undefined'",
                                        "value": "undefined",
                                        "range": [
                                          328,
                                          339
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 47,
                                            "line": 9
                                          },
                                          "start": {
                                            "column": 36,
                                            "line": 9
                                          }
                                        }
                                      },
                                      "range": [
                                        305,
                                        339
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 47,
                                          "line": 9
                                        },
                                        "start": {
                                          "column": 13,
                                          "line": 9
                                        }
                                      }
                                    },
                                    "range": [
                                      305,
                                      377
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 15,
                                        "line": 11
                                      },
                                      "start": {
                                        "column": 13,
                                        "line": 9
                                      }
                                    }
                                  },
                                  "range": [
                                    298,
                                    378
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 11
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 9
                                    }
                                  }
                                }
                              ],
                              "range": [
                                264,
                                384
                              ],
                              "loc": {
                                "end": {
                                  "column": 5,
                                  "line": 12
                                },
                                "start": {
                                  "column": 71,
                                  "line": 7
                                }
                              }
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "match",
                                "optional": false,
                                "range": [
                                  248,
                                  253
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 55,
                                    "line": 7
                                  }
                                }
                              },
                              {
                                "type": "RestElement",
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "rest",
                                  "optional": false,
                                  "range": [
                                    258,
                                    262
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 69,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 65,
                                      "line": 7
                                    }
                                  }
                                },
                                "decorators": [],
                                "optional": false,
                                "range": [
                                  255,
                                  262
                                ],
                                "loc": {
                                  "end": {
                                    "column": 69,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 62,
                                    "line": 7
                                  }
                                }
                              }
                            ],
                            "range": [
                              239,
                              384
                            ],
                            "loc": {
                              "end": {
                                "column": 5,
                                "line": 12
                              },
                              "start": {
                                "column": 46,
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
                            "name": "message",
                            "optional": false,
                            "range": [
                              209,
                              216
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 7
                              },
                              "start": {
                                "column": 16,
                                "line": 7
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "replace",
                            "optional": false,
                            "range": [
                              217,
                              224
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
                          "range": [
                            209,
                            224
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 7
                            },
                            "start": {
                              "column": 16,
                              "line": 7
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          209,
                          385
                        ],
                        "loc": {
                          "end": {
                            "column": 6,
                            "line": 12
                          },
                          "start": {
                            "column": 16,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        201,
                        385
                      ],
                      "loc": {
                        "end": {
                          "column": 6,
                          "line": 12
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    197,
                    386
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 12
                    },
                    "start": {
                      "column": 4,
                      "line": 7
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "result",
                    "optional": false,
                    "range": [
                      398,
                      404
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 13
                      },
                      "start": {
                        "column": 11,
                        "line": 13
                      }
                    }
                  },
                  "range": [
                    391,
                    405
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
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
                191,
                409
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 14
                },
                "start": {
                  "column": 54,
                  "line": 6
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bug2",
              "optional": false,
              "range": [
                148,
                152
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 6
                },
                "start": {
                  "column": 11,
                  "line": 6
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 6
                    },
                    "start": {
                      "column": 23,
                      "line": 6
                    }
                  },
                  "range": [
                    160,
                    167
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      161,
                      167
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 6
                      },
                      "start": {
                        "column": 24,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  153,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 6
                  },
                  "start": {
                    "column": 16,
                    "line": 6
                  }
                }
              },
              {
                "type": "RestElement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "range": [
                    172,
                    176
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 6
                    },
                    "start": {
                      "column": 35,
                      "line": 6
                    }
                  }
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 45,
                      "line": 6
                    },
                    "start": {
                      "column": 39,
                      "line": 6
                    }
                  },
                  "range": [
                    176,
                    182
                  ],
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "range": [
                        177,
                        180
                      ],
                      "loc": {
                        "end": {
                          "column": 43,
                          "line": 6
                        },
                        "start": {
                          "column": 40,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      177,
                      182
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 6
                      },
                      "start": {
                        "column": 40,
                        "line": 6
                      }
                    }
                  }
                },
                "range": [
                  169,
                  182
                ],
                "loc": {
                  "end": {
                    "column": 45,
                    "line": 6
                  },
                  "start": {
                    "column": 32,
                    "line": 6
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 53,
                  "line": 6
                },
                "start": {
                  "column": 46,
                  "line": 6
                }
              },
              "range": [
                183,
                190
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  184,
                  190
                ],
                "loc": {
                  "end": {
                    "column": 53,
                    "line": 6
                  },
                  "start": {
                    "column": 47,
                    "line": 6
                  }
                }
              }
            },
            "range": [
              139,
              409
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 14
              },
              "start": {
                "column": 2,
                "line": 6
              }
            }
          }
        ],
        "range": [
          12,
          411
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 15
          },
          "start": {
            "column": 12,
            "line": 1
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          7,
          11
        ],
        "decorators": [],
        "name": "Bugs",
        "optional": false,
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "kind": "module",
      "range": [
        0,
        411
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 15
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "\"s\"",
                  "value": "s",
                  "range": [
                    460,
                    463
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 17
                    },
                    "start": {
                      "column": 47,
                      "line": 17
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "range": [
                  458,
                  459
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 17
                  },
                  "start": {
                    "column": 45,
                    "line": 17
                  }
                }
              },
              "optional": false,
              "range": [
                458,
                464
              ],
              "loc": {
                "end": {
                  "column": 51,
                  "line": 17
                },
                "start": {
                  "column": 45,
                  "line": 17
                }
              }
            },
            "range": [
              451,
              464
            ],
            "loc": {
              "end": {
                "column": 51,
                "line": 17
              },
              "start": {
                "column": 38,
                "line": 17
              }
            }
          }
        ],
        "range": [
          449,
          466
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 17
          },
          "start": {
            "column": 36,
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
        "name": "bug3",
        "optional": false,
        "range": [
          422,
          426
        ],
        "loc": {
          "end": {
            "column": 13,
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
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 34,
                "line": 17
              },
              "start": {
                "column": 15,
                "line": 17
              }
            },
            "range": [
              428,
              447
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 17
                      },
                      "start": {
                        "column": 18,
                        "line": 17
                      }
                    },
                    "range": [
                      431,
                      438
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        432,
                        438
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 17
                        },
                        "start": {
                          "column": 19,
                          "line": 17
                        }
                      }
                    }
                  },
                  "range": [
                    430,
                    438
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 17
                    },
                    "start": {
                      "column": 17,
                      "line": 17
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 17
                  },
                  "start": {
                    "column": 26,
                    "line": 17
                  }
                },
                "range": [
                  439,
                  447
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    441,
                    447
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 17
                    },
                    "start": {
                      "column": 28,
                      "line": 17
                    }
                  }
                }
              },
              "range": [
                429,
                447
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 17
                },
                "start": {
                  "column": 16,
                  "line": 17
                }
              }
            }
          },
          "range": [
            427,
            447
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 17
            },
            "start": {
              "column": 14,
              "line": 17
            }
          }
        }
      ],
      "range": [
        413,
        466
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 17
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "range": [
                510,
                511
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 19
                },
                "start": {
                  "column": 42,
                  "line": 19
                }
              }
            },
            "range": [
              503,
              512
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 19
              },
              "start": {
                "column": 35,
                "line": 19
              }
            }
          }
        ],
        "range": [
          501,
          514
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 19
          },
          "start": {
            "column": 33,
            "line": 19
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fprime",
        "optional": false,
        "range": [
          477,
          483
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 19
              },
              "start": {
                "column": 17,
                "line": 19
              }
            },
            "range": [
              485,
              492
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                486,
                492
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 19
                },
                "start": {
                  "column": 18,
                  "line": 19
                }
              }
            }
          },
          "range": [
            484,
            492
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 19
            },
            "start": {
              "column": 16,
              "line": 19
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 32,
            "line": 19
          },
          "start": {
            "column": 25,
            "line": 19
          }
        },
        "range": [
          493,
          500
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            494,
            500
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 19
            },
            "start": {
              "column": 26,
              "line": 19
            }
          }
        }
      },
      "range": [
        468,
        514
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "fprime",
            "optional": false,
            "range": [
              521,
              527
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 21
              },
              "start": {
                "column": 5,
                "line": 21
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bug3",
          "optional": false,
          "range": [
            516,
            520
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 21
            },
            "start": {
              "column": 0,
              "line": 21
            }
          }
        },
        "optional": false,
        "range": [
          516,
          528
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        516,
        529
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "FunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      571,
                      572
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 23
                      },
                      "start": {
                        "column": 40,
                        "line": 23
                      }
                    }
                  },
                  "range": [
                    564,
                    573
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 23
                    },
                    "start": {
                      "column": 33,
                      "line": 23
                    }
                  }
                }
              ],
              "range": [
                562,
                575
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 23
                },
                "start": {
                  "column": 31,
                  "line": 23
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 23
                    },
                    "start": {
                      "column": 15,
                      "line": 23
                    }
                  },
                  "range": [
                    546,
                    553
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      547,
                      553
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 23
                      },
                      "start": {
                        "column": 16,
                        "line": 23
                      }
                    }
                  }
                },
                "range": [
                  545,
                  553
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 23
                  },
                  "start": {
                    "column": 14,
                    "line": 23
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 23
                },
                "start": {
                  "column": 23,
                  "line": 23
                }
              },
              "range": [
                554,
                561
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  555,
                  561
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 23
                  },
                  "start": {
                    "column": 24,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              536,
              575
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 23
              },
              "start": {
                "column": 5,
                "line": 23
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bug3",
          "optional": false,
          "range": [
            531,
            535
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 23
            },
            "start": {
              "column": 0,
              "line": 23
            }
          }
        },
        "optional": false,
        "range": [
          531,
          576
        ],
        "loc": {
          "end": {
            "column": 45,
            "line": 23
          },
          "start": {
            "column": 0,
            "line": 23
          }
        }
      },
      "range": [
        531,
        577
      ],
      "loc": {
        "end": {
          "column": 46,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 46,
      "line": 23
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
