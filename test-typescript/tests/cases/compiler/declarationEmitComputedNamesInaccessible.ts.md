__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    584
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "range": [
        0,
        584
      ],
      "attributes": [],
      "declaration": {
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
                    "name": "localClassFieldName",
                    "optional": false,
                    "range": [
                      33,
                      52
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 2
                      },
                      "start": {
                        "column": 10,
                        "line": 2
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
                        84,
                        88
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 2
                        },
                        "start": {
                          "column": 61,
                          "line": 2
                        }
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "raw": "\"g1\"",
                      "value": "g1",
                      "range": [
                        77,
                        81
                      ],
                      "loc": {
                        "end": {
                          "column": 58,
                          "line": 2
                        },
                        "start": {
                          "column": 54,
                          "line": 2
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
                              55,
                              59
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 2
                              },
                              "start": {
                                "column": 32,
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
                              60,
                              66
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 2
                              },
                              "start": {
                                "column": 37,
                                "line": 2
                              }
                            }
                          },
                          "range": [
                            55,
                            66
                          ],
                          "loc": {
                            "end": {
                              "column": 43,
                              "line": 2
                            },
                            "start": {
                              "column": 32,
                              "line": 2
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          55,
                          68
                        ],
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 2
                          },
                          "start": {
                            "column": 32,
                            "line": 2
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0.5",
                        "value": 0.5,
                        "range": [
                          71,
                          74
                        ],
                        "loc": {
                          "end": {
                            "column": 51,
                            "line": 2
                          },
                          "start": {
                            "column": 48,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        55,
                        74
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 2
                        },
                        "start": {
                          "column": 32,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      55,
                      88
                    ],
                    "loc": {
                      "end": {
                        "column": 65,
                        "line": 2
                      },
                      "start": {
                        "column": 32,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    33,
                    88
                  ],
                  "loc": {
                    "end": {
                      "column": 65,
                      "line": 2
                    },
                    "start": {
                      "column": 10,
                      "line": 2
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                27,
                89
              ],
              "loc": {
                "end": {
                  "column": 66,
                  "line": 2
                },
                "start": {
                  "column": 4,
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
                    "name": "localOtherField",
                    "optional": false,
                    "range": [
                      100,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 3
                      },
                      "start": {
                        "column": 10,
                        "line": 3
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
                        156,
                        160
                      ],
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 3
                        },
                        "start": {
                          "column": 66,
                          "line": 3
                        }
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "raw": "\"g2\"",
                      "value": "g2",
                      "range": [
                        149,
                        153
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 3
                        },
                        "start": {
                          "column": 59,
                          "line": 3
                        }
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localClassFieldName",
                        "optional": false,
                        "range": [
                          118,
                          137
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 3
                          },
                          "start": {
                            "column": 28,
                            "line": 3
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "\"g1\"",
                        "value": "g1",
                        "range": [
                          142,
                          146
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 3
                          },
                          "start": {
                            "column": 52,
                            "line": 3
                          }
                        }
                      },
                      "range": [
                        118,
                        146
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 3
                        },
                        "start": {
                          "column": 28,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      118,
                      160
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 3
                      },
                      "start": {
                        "column": 28,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    100,
                    160
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                94,
                161
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
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
                    "name": "localStaticField",
                    "optional": false,
                    "range": [
                      172,
                      188
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 4
                      },
                      "start": {
                        "column": 10,
                        "line": 4
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
                        220,
                        224
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 4
                        },
                        "start": {
                          "column": 58,
                          "line": 4
                        }
                      }
                    },
                    "consequent": {
                      "type": "Literal",
                      "raw": "\"s1\"",
                      "value": "s1",
                      "range": [
                        213,
                        217
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 4
                        },
                        "start": {
                          "column": 51,
                          "line": 4
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
                              191,
                              195
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 4
                              },
                              "start": {
                                "column": 29,
                                "line": 4
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
                              196,
                              202
                            ],
                            "loc": {
                              "end": {
                                "column": 40,
                                "line": 4
                              },
                              "start": {
                                "column": 34,
                                "line": 4
                              }
                            }
                          },
                          "range": [
                            191,
                            202
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 4
                            },
                            "start": {
                              "column": 29,
                              "line": 4
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          191,
                          204
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 4
                          },
                          "start": {
                            "column": 29,
                            "line": 4
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "0.5",
                        "value": 0.5,
                        "range": [
                          207,
                          210
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 4
                          },
                          "start": {
                            "column": 45,
                            "line": 4
                          }
                        }
                      },
                      "range": [
                        191,
                        210
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 4
                        },
                        "start": {
                          "column": 29,
                          "line": 4
                        }
                      }
                    },
                    "range": [
                      191,
                      224
                    ],
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 4
                      },
                      "start": {
                        "column": 29,
                        "line": 4
                      }
                    }
                  },
                  "range": [
                    172,
                    224
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                166,
                225
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ClassExpression",
                "abstract": false,
                "body": {
                  "type": "ClassBody",
                  "range": [
                    263,
                    582
                  ],
                  "body": [
                    {
                      "type": "MethodDefinition",
                      "computed": true,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localClassFieldName",
                        "optional": false,
                        "range": [
                          274,
                          293
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 6
                          },
                          "start": {
                            "column": 9,
                            "line": 6
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
                          294,
                          336
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
                                  318,
                                  325
                                ],
                                "loc": {
                                  "end": {
                                    "column": 26,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 7
                                  }
                                }
                              },
                              "range": [
                                311,
                                326
                              ],
                              "loc": {
                                "end": {
                                  "column": 27,
                                  "line": 7
                                },
                                "start": {
                                  "column": 12,
                                  "line": 7
                                }
                              }
                            }
                          ],
                          "range": [
                            297,
                            336
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 8
                            },
                            "start": {
                              "column": 32,
                              "line": 6
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
                            "column": 9,
                            "line": 8
                          },
                          "start": {
                            "column": 29,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        273,
                        336
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 8
                        },
                        "start": {
                          "column": 8,
                          "line": 6
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
                        "name": "localOtherField",
                        "optional": false,
                        "range": [
                          346,
                          361
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 9
                          },
                          "start": {
                            "column": 9,
                            "line": 9
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
                          362,
                          399
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
                                  386,
                                  388
                                ],
                                "loc": {
                                  "end": {
                                    "column": 21,
                                    "line": 10
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 10
                                  }
                                }
                              },
                              "range": [
                                379,
                                389
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
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
                            365,
                            399
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 11
                            },
                            "start": {
                              "column": 28,
                              "line": 9
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
                            "column": 9,
                            "line": 11
                          },
                          "start": {
                            "column": 25,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        345,
                        399
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
                    },
                    {
                      "type": "MethodDefinition",
                      "computed": true,
                      "decorators": [],
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localStaticField",
                        "optional": false,
                        "range": [
                          416,
                          432
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 12
                          },
                          "start": {
                            "column": 16,
                            "line": 12
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
                          433,
                          484
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
                                        459,
                                        465
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 27,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 13
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
                                        467,
                                        471
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 33,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 13
                                        }
                                      }
                                    },
                                    "range": [
                                      459,
                                      471
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 13
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 13
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  457,
                                  473
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 13
                                  }
                                }
                              },
                              "range": [
                                450,
                                474
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 13
                                },
                                "start": {
                                  "column": 12,
                                  "line": 13
                                }
                              }
                            }
                          ],
                          "range": [
                            436,
                            484
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 14
                            },
                            "start": {
                              "column": 36,
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
                            "column": 9,
                            "line": 14
                          },
                          "start": {
                            "column": 33,
                            "line": 12
                          }
                        }
                      },
                      "range": [
                        408,
                        484
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
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
                        "name": "localStaticField",
                        "optional": false,
                        "range": [
                          501,
                          517
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 15
                          },
                          "start": {
                            "column": 16,
                            "line": 15
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
                          518,
                          576
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
                                        544,
                                        550
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 27,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 16
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
                                        552,
                                        563
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 40,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "range": [
                                      544,
                                      563
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 40,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 16
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  542,
                                  565
                                ],
                                "loc": {
                                  "end": {
                                    "column": 42,
                                    "line": 16
                                  },
                                  "start": {
                                    "column": 19,
                                    "line": 16
                                  }
                                }
                              },
                              "range": [
                                535,
                                566
                              ],
                              "loc": {
                                "end": {
                                  "column": 43,
                                  "line": 16
                                },
                                "start": {
                                  "column": 12,
                                  "line": 16
                                }
                              }
                            }
                          ],
                          "range": [
                            521,
                            576
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 17
                            },
                            "start": {
                              "column": 36,
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
                            "column": 9,
                            "line": 17
                          },
                          "start": {
                            "column": 33,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        493,
                        576
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 17
                        },
                        "start": {
                          "column": 8,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 18
                    },
                    "start": {
                      "column": 37,
                      "line": 5
                    }
                  }
                },
                "declare": false,
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ParameterizedHolder",
                  "optional": false,
                  "range": [
                    243,
                    262
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 5
                    },
                    "start": {
                      "column": 17,
                      "line": 5
                    }
                  }
                },
                "implements": [],
                "superClass": null,
                "range": [
                  237,
                  582
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 11,
                    "line": 5
                  }
                }
              },
              "range": [
                230,
                582
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            21,
            584
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 19
            },
            "start": {
              "column": 21,
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
          "name": "f1",
          "optional": false,
          "range": [
            16,
            18
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 1
            },
            "start": {
              "column": 16,
              "line": 1
            }
          }
        },
        "params": [],
        "range": [
          7,
          584
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
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
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 19
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
