__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    792
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        59
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldName",
              "optional": false,
              "range": [
                13,
                22
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 1
                },
                "start": {
                  "column": 13,
                  "line": 1
                }
              }
            },
            "init": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "\"f2\"",
                "value": "f2",
                "range": [
                  54,
                  58
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 1
                  },
                  "start": {
                    "column": 54,
                    "line": 1
                  }
                }
              },
              "consequent": {
                "type": "Literal",
                "raw": "\"f1\"",
                "value": "f1",
                "range": [
                  47,
                  51
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 1
                  },
                  "start": {
                    "column": 47,
                    "line": 1
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
                        25,
                        29
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 1
                        },
                        "start": {
                          "column": 25,
                          "line": 1
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
                        30,
                        36
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 1
                        },
                        "start": {
                          "column": 30,
                          "line": 1
                        }
                      }
                    },
                    "range": [
                      25,
                      36
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 1
                      },
                      "start": {
                        "column": 25,
                        "line": 1
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    25,
                    38
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 1
                    },
                    "start": {
                      "column": 25,
                      "line": 1
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0.5",
                  "value": 0.5,
                  "range": [
                    41,
                    44
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 1
                    },
                    "start": {
                      "column": 41,
                      "line": 1
                    }
                  }
                },
                "range": [
                  25,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 1
                  },
                  "start": {
                    "column": 25,
                    "line": 1
                  }
                }
              },
              "range": [
                25,
                58
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 1
                },
                "start": {
                  "column": 25,
                  "line": 1
                }
              }
            },
            "range": [
              13,
              58
            ],
            "loc": {
              "end": {
                "column": 58,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          7,
          59
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 1
          },
          "start": {
            "column": 7,
            "line": 1
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 59,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        60,
        141
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "conatainer",
              "optional": false,
              "range": [
                73,
                83
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 2
                },
                "start": {
                  "column": 13,
                  "line": 2
                }
              }
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fieldName",
                    "optional": false,
                    "range": [
                      93,
                      102
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 3
                      },
                      "start": {
                        "column": 5,
                        "line": 3
                      }
                    }
                  },
                  "kind": "init",
                  "method": true,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "range": [
                      103,
                      138
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "raw": "\"result\"",
                            "value": "result",
                            "range": [
                              123,
                              131
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 4
                              },
                              "start": {
                                "column": 15,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            116,
                            132
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 4
                            },
                            "start": {
                              "column": 8,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        106,
                        138
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 5
                        },
                        "start": {
                          "column": 18,
                          "line": 3
                        }
                      }
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 5
                      },
                      "start": {
                        "column": 15,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    92,
                    138
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 5
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                86,
                140
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 6
                },
                "start": {
                  "column": 26,
                  "line": 2
                }
              }
            },
            "range": [
              73,
              140
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 6
              },
              "start": {
                "column": 13,
                "line": 2
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          67,
          141
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 6
          },
          "start": {
            "column": 7,
            "line": 2
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 2,
          "line": 6
        },
        "start": {
          "column": 0,
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
            "name": "classFieldName",
            "optional": false,
            "range": [
              149,
              163
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 8
              },
              "start": {
                "column": 6,
                "line": 8
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "Literal",
              "raw": "\"g2\"",
              "value": "g2",
              "range": [
                195,
                199
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 8
                },
                "start": {
                  "column": 52,
                  "line": 8
                }
              }
            },
            "consequent": {
              "type": "Literal",
              "raw": "\"g1\"",
              "value": "g1",
              "range": [
                188,
                192
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 8
                },
                "start": {
                  "column": 45,
                  "line": 8
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
                      166,
                      170
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 8
                      },
                      "start": {
                        "column": 23,
                        "line": 8
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
                      171,
                      177
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 8
                      },
                      "start": {
                        "column": 28,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    166,
                    177
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 8
                    },
                    "start": {
                      "column": 23,
                      "line": 8
                    }
                  }
                },
                "optional": false,
                "range": [
                  166,
                  179
                ],
                "loc": {
                  "end": {
                    "column": 36,
                    "line": 8
                  },
                  "start": {
                    "column": 23,
                    "line": 8
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0.5",
                "value": 0.5,
                "range": [
                  182,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 8
                  },
                  "start": {
                    "column": 39,
                    "line": 8
                  }
                }
              },
              "range": [
                166,
                185
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 8
                },
                "start": {
                  "column": 23,
                  "line": 8
                }
              }
            },
            "range": [
              166,
              199
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 8
              },
              "start": {
                "column": 23,
                "line": 8
              }
            }
          },
          "range": [
            149,
            199
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 8
            },
            "start": {
              "column": 6,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        143,
        200
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 8
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
            "name": "otherField",
            "optional": false,
            "range": [
              207,
              217
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 9
              },
              "start": {
                "column": 6,
                "line": 9
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "Literal",
              "raw": "\"g1\"",
              "value": "g1",
              "range": [
                253,
                257
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 9
                },
                "start": {
                  "column": 52,
                  "line": 9
                }
              }
            },
            "consequent": {
              "type": "Literal",
              "raw": "\"g2\"",
              "value": "g2",
              "range": [
                246,
                250
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 9
                },
                "start": {
                  "column": 45,
                  "line": 9
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "classFieldName",
                "optional": false,
                "range": [
                  220,
                  234
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 9
                  },
                  "start": {
                    "column": 19,
                    "line": 9
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"g1\"",
                "value": "g1",
                "range": [
                  239,
                  243
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 9
                  },
                  "start": {
                    "column": 38,
                    "line": 9
                  }
                }
              },
              "range": [
                220,
                243
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 9
                },
                "start": {
                  "column": 19,
                  "line": 9
                }
              }
            },
            "range": [
              220,
              257
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 9
              },
              "start": {
                "column": 19,
                "line": 9
              }
            }
          },
          "range": [
            207,
            257
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 9
            },
            "start": {
              "column": 6,
              "line": 9
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        201,
        258
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
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
            "name": "staticField",
            "optional": false,
            "range": [
              265,
              276
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
          "init": {
            "type": "ConditionalExpression",
            "alternate": {
              "type": "Literal",
              "raw": "\"s2\"",
              "value": "s2",
              "range": [
                308,
                312
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 10
                },
                "start": {
                  "column": 49,
                  "line": 10
                }
              }
            },
            "consequent": {
              "type": "Literal",
              "raw": "\"s1\"",
              "value": "s1",
              "range": [
                301,
                305
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 10
                },
                "start": {
                  "column": 42,
                  "line": 10
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
                      279,
                      283
                    ],
                    "loc": {
                      "end": {
                        "column": 24,
                        "line": 10
                      },
                      "start": {
                        "column": 20,
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
                      284,
                      290
                    ],
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 10
                      },
                      "start": {
                        "column": 25,
                        "line": 10
                      }
                    }
                  },
                  "range": [
                    279,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 10
                    },
                    "start": {
                      "column": 20,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "range": [
                  279,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 10
                  },
                  "start": {
                    "column": 20,
                    "line": 10
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "0.5",
                "value": 0.5,
                "range": [
                  295,
                  298
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 10
                  },
                  "start": {
                    "column": 36,
                    "line": 10
                  }
                }
              },
              "range": [
                279,
                298
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 10
                },
                "start": {
                  "column": 20,
                  "line": 10
                }
              }
            },
            "range": [
              279,
              312
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 10
              },
              "start": {
                "column": 20,
                "line": 10
              }
            }
          },
          "range": [
            265,
            312
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 10
            },
            "start": {
              "column": 6,
              "line": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        259,
        313
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        314,
        581
      ],
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "range": [
            334,
            581
          ],
          "body": [
            {
              "type": "MethodDefinition",
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "classFieldName",
                "optional": false,
                "range": [
                  341,
                  355
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 12
                  },
                  "start": {
                    "column": 5,
                    "line": 12
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  356,
                  390
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "\"value\"",
                        "value": "value",
                        "range": [
                          376,
                          383
                        ],
                        "loc": {
                          "end": {
                            "column": 22,
                            "line": 13
                          },
                          "start": {
                            "column": 15,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        369,
                        384
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
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
                    359,
                    390
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 14
                    },
                    "start": {
                      "column": 23,
                      "line": 12
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 20,
                    "line": 12
                  }
                }
              },
              "range": [
                340,
                390
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
              "type": "MethodDefinition",
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "otherField",
                "optional": false,
                "range": [
                  396,
                  406
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 15
                  },
                  "start": {
                    "column": 5,
                    "line": 15
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  407,
                  436
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "raw": "42",
                        "value": 42,
                        "range": [
                          427,
                          429
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 16
                          },
                          "start": {
                            "column": 15,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        420,
                        430
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    }
                  ],
                  "range": [
                    410,
                    436
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 17
                    },
                    "start": {
                      "column": 19,
                      "line": 15
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 16,
                    "line": 15
                  }
                }
              },
              "range": [
                395,
                436
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 17
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticField",
                "optional": false,
                "range": [
                  449,
                  460
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 18
                  },
                  "start": {
                    "column": 12,
                    "line": 18
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  461,
                  504
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "static",
                              "optional": false,
                              "range": [
                                483,
                                489
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 19
                                },
                                "start": {
                                  "column": 17,
                                  "line": 19
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "raw": "true",
                              "value": true,
                              "range": [
                                491,
                                495
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 19
                                },
                                "start": {
                                  "column": 25,
                                  "line": 19
                                }
                              }
                            },
                            "range": [
                              483,
                              495
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 19
                              },
                              "start": {
                                "column": 17,
                                "line": 19
                              }
                            }
                          }
                        ],
                        "range": [
                          481,
                          497
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 19
                          },
                          "start": {
                            "column": 15,
                            "line": 19
                          }
                        }
                      },
                      "range": [
                        474,
                        498
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 19
                        },
                        "start": {
                          "column": 8,
                          "line": 19
                        }
                      }
                    }
                  ],
                  "range": [
                    464,
                    504
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 20
                    },
                    "start": {
                      "column": 27,
                      "line": 18
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 24,
                    "line": 18
                  }
                }
              },
              "range": [
                441,
                504
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 4,
                  "line": 18
                }
              }
            },
            {
              "type": "MethodDefinition",
              "computed": true,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "staticField",
                "optional": false,
                "range": [
                  517,
                  528
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 21
                  },
                  "start": {
                    "column": 12,
                    "line": 21
                  }
                }
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "range": [
                  529,
                  579
                ],
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "static",
                              "optional": false,
                              "range": [
                                551,
                                557
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 22
                                },
                                "start": {
                                  "column": 17,
                                  "line": 22
                                }
                              }
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "raw": "\"sometimes\"",
                              "value": "sometimes",
                              "range": [
                                559,
                                570
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 22
                                },
                                "start": {
                                  "column": 25,
                                  "line": 22
                                }
                              }
                            },
                            "range": [
                              551,
                              570
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 22
                              },
                              "start": {
                                "column": 17,
                                "line": 22
                              }
                            }
                          }
                        ],
                        "range": [
                          549,
                          572
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 22
                          },
                          "start": {
                            "column": 15,
                            "line": 22
                          }
                        }
                      },
                      "range": [
                        542,
                        573
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 22
                        },
                        "start": {
                          "column": 8,
                          "line": 22
                        }
                      }
                    }
                  ],
                  "range": [
                    532,
                    579
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 23
                    },
                    "start": {
                      "column": 27,
                      "line": 21
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 23
                  },
                  "start": {
                    "column": 24,
                    "line": 21
                  }
                }
              },
              "range": [
                509,
                579
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 23
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 24
            },
            "start": {
              "column": 20,
              "line": 11
            }
          }
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Holder",
          "optional": false,
          "range": [
            327,
            333
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 11
            },
            "start": {
              "column": 13,
              "line": 11
            }
          }
        },
        "implements": [],
        "superClass": null,
        "range": [
          321,
          581
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 7,
            "line": 11
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        674,
        727
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "staticLookup",
              "optional": false,
              "range": [
                687,
                699
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 29
                },
                "start": {
                  "column": 13,
                  "line": 29
                }
              }
            },
            "init": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Holder",
                "optional": false,
                "range": [
                  702,
                  708
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 29
                  },
                  "start": {
                    "column": 28,
                    "line": 29
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "raw": "\"some\"",
                  "value": "some",
                  "range": [
                    709,
                    715
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 29
                    },
                    "start": {
                      "column": 35,
                      "line": 29
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "\"thing\"",
                  "value": "thing",
                  "range": [
                    718,
                    725
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 29
                    },
                    "start": {
                      "column": 44,
                      "line": 29
                    }
                  }
                },
                "range": [
                  709,
                  725
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 29
                  },
                  "start": {
                    "column": 35,
                    "line": 29
                  }
                }
              },
              "range": [
                702,
                726
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 29
                },
                "start": {
                  "column": 28,
                  "line": 29
                }
              }
            },
            "range": [
              687,
              726
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 29
              },
              "start": {
                "column": 13,
                "line": 29
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          681,
          727
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 29
          },
          "start": {
            "column": 7,
            "line": 29
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 53,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        728,
        791
      ],
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "definite": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "instanceLookup",
              "optional": false,
              "range": [
                741,
                755
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 30
                },
                "start": {
                  "column": 13,
                  "line": 30
                }
              }
            },
            "init": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Holder",
                  "optional": false,
                  "range": [
                    763,
                    769
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 30
                    },
                    "start": {
                      "column": 35,
                      "line": 30
                    }
                  }
                },
                "range": [
                  759,
                  771
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 30
                  },
                  "start": {
                    "column": 31,
                    "line": 30
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "BinaryExpression",
                "operator": "+",
                "left": {
                  "type": "Literal",
                  "raw": "\"some\"",
                  "value": "some",
                  "range": [
                    773,
                    779
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
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
                  "raw": "\"thing\"",
                  "value": "thing",
                  "range": [
                    782,
                    789
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 30
                    },
                    "start": {
                      "column": 54,
                      "line": 30
                    }
                  }
                },
                "range": [
                  773,
                  789
                ],
                "loc": {
                  "end": {
                    "column": 61,
                    "line": 30
                  },
                  "start": {
                    "column": 45,
                    "line": 30
                  }
                }
              },
              "range": [
                758,
                790
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 30
                },
                "start": {
                  "column": 30,
                  "line": 30
                }
              }
            },
            "range": [
              741,
              790
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 30
              },
              "start": {
                "column": 13,
                "line": 30
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          735,
          791
        ],
        "loc": {
          "end": {
            "column": 63,
            "line": 30
          },
          "start": {
            "column": 7,
            "line": 30
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 63,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 31
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
