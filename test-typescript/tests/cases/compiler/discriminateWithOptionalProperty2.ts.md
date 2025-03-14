__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    81,
    1715
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PromiseOrValue",
        "optional": false,
        "range": [
          86,
          100
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                113,
                116
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      114,
                      115
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 3
                      },
                      "start": {
                        "column": 33,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    114,
                    115
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 3
                    },
                    "start": {
                      "column": 33,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 3
                },
                "start": {
                  "column": 32,
                  "line": 3
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "range": [
                106,
                113
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 3
                },
                "start": {
                  "column": 25,
                  "line": 3
                }
              }
            },
            "range": [
              106,
              116
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 3
              },
              "start": {
                "column": 25,
                "line": 3
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                119,
                120
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 3
                },
                "start": {
                  "column": 38,
                  "line": 3
                }
              }
            },
            "range": [
              119,
              120
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 3
              },
              "start": {
                "column": 38,
                "line": 3
              }
            }
          }
        ],
        "range": [
          106,
          120
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 3
          },
          "start": {
            "column": 25,
            "line": 3
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 22,
            "line": 3
          },
          "start": {
            "column": 19,
            "line": 3
          }
        },
        "range": [
          100,
          103
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                101,
                102
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 3
                },
                "start": {
                  "column": 20,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              101,
              102
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 3
              },
              "start": {
                "column": 20,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        81,
        121
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
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
                  "name": "iterator",
                  "optional": false,
                  "range": [
                    334,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "iterable",
                      "optional": false,
                      "range": [
                        345,
                        353
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 9
                        },
                        "start": {
                          "column": 19,
                          "line": 9
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "range": [
                          354,
                          360
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 9
                          },
                          "start": {
                            "column": 28,
                            "line": 9
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "asyncIterator",
                        "optional": false,
                        "range": [
                          361,
                          374
                        ],
                        "loc": {
                          "end": {
                            "column": 48,
                            "line": 9
                          },
                          "start": {
                            "column": 35,
                            "line": 9
                          }
                        }
                      },
                      "range": [
                        354,
                        374
                      ],
                      "loc": {
                        "end": {
                          "column": 48,
                          "line": 9
                        },
                        "start": {
                          "column": 28,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      345,
                      375
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 9
                      },
                      "start": {
                        "column": 19,
                        "line": 9
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    345,
                    377
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 9
                    },
                    "start": {
                      "column": 19,
                      "line": 9
                    }
                  }
                },
                "range": [
                  334,
                  377
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              328,
              378
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 9
              },
              "start": {
                "column": 2,
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
                  "type": "IfStatement",
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "range": [
                            515,
                            521
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 15
                            },
                            "start": {
                              "column": 13,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          508,
                          522
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 15
                          },
                          "start": {
                            "column": 6,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "range": [
                      500,
                      528
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 16
                      },
                      "start": {
                        "column": 21,
                        "line": 14
                      }
                    }
                  },
                  "test": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "range": [
                        487,
                        493
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 14
                        },
                        "start": {
                          "column": 8,
                          "line": 14
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "done",
                      "optional": false,
                      "range": [
                        494,
                        498
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 14
                        },
                        "start": {
                          "column": 15,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      487,
                      498
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    483,
                    528
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 16
                    },
                    "start": {
                      "column": 4,
                      "line": 14
                    }
                  }
                },
                {
                  "type": "TryStatement",
                  "block": {
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
                                "name": "value",
                                "optional": false,
                                "range": [
                                  555,
                                  560
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 15,
                                    "line": 19
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "range": [
                                          577,
                                          583
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 43,
                                            "line": 19
                                          },
                                          "start": {
                                            "column": 37,
                                            "line": 19
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "range": [
                                          584,
                                          589
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 49,
                                            "line": 19
                                          },
                                          "start": {
                                            "column": 44,
                                            "line": 19
                                          }
                                        }
                                      },
                                      "range": [
                                        577,
                                        589
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 49,
                                          "line": 19
                                        },
                                        "start": {
                                          "column": 37,
                                          "line": 19
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "range": [
                                      568,
                                      576
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 36,
                                        "line": 19
                                      },
                                      "start": {
                                        "column": 28,
                                        "line": 19
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    568,
                                    590
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 50,
                                      "line": 19
                                    },
                                    "start": {
                                      "column": 28,
                                      "line": 19
                                    }
                                  }
                                },
                                "range": [
                                  562,
                                  590
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                555,
                                590
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 19
                                },
                                "start": {
                                  "column": 15,
                                  "line": 19
                                }
                              }
                            },
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "done",
                                "optional": false,
                                "range": [
                                  592,
                                  596
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 52,
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
                                "raw": "false",
                                "value": false,
                                "range": [
                                  598,
                                  603
                                ],
                                "loc": {
                                  "end": {
                                    "column": 63,
                                    "line": 19
                                  },
                                  "start": {
                                    "column": 58,
                                    "line": 19
                                  }
                                }
                              },
                              "range": [
                                592,
                                603
                              ],
                              "loc": {
                                "end": {
                                  "column": 63,
                                  "line": 19
                                },
                                "start": {
                                  "column": 52,
                                  "line": 19
                                }
                              }
                            }
                          ],
                          "range": [
                            553,
                            605
                          ],
                          "loc": {
                            "end": {
                              "column": 65,
                              "line": 19
                            },
                            "start": {
                              "column": 13,
                              "line": 19
                            }
                          }
                        },
                        "range": [
                          546,
                          606
                        ],
                        "loc": {
                          "end": {
                            "column": 66,
                            "line": 19
                          },
                          "start": {
                            "column": 6,
                            "line": 19
                          }
                        }
                      }
                    ],
                    "range": [
                      538,
                      612
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 20
                      },
                      "start": {
                        "column": 8,
                        "line": 18
                      }
                    }
                  },
                  "finalizer": null,
                  "handler": {
                    "type": "CatchClause",
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "alternate": null,
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "TryStatement",
                                "block": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AwaitExpression",
                                        "argument": {
                                          "type": "CallExpression",
                                          "arguments": [],
                                          "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "iterator",
                                              "optional": false,
                                              "range": [
                                                710,
                                                718
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 24,
                                                  "line": 23
                                                },
                                                "start": {
                                                  "column": 16,
                                                  "line": 23
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "return",
                                              "optional": false,
                                              "range": [
                                                719,
                                                725
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 31,
                                                  "line": 23
                                                },
                                                "start": {
                                                  "column": 25,
                                                  "line": 23
                                                }
                                              }
                                            },
                                            "range": [
                                              710,
                                              725
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 31,
                                                "line": 23
                                              },
                                              "start": {
                                                "column": 16,
                                                "line": 23
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            710,
                                            727
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 33,
                                              "line": 23
                                            },
                                            "start": {
                                              "column": 16,
                                              "line": 23
                                            }
                                          }
                                        },
                                        "range": [
                                          704,
                                          727
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 33,
                                            "line": 23
                                          },
                                          "start": {
                                            "column": 10,
                                            "line": 23
                                          }
                                        }
                                      },
                                      "range": [
                                        704,
                                        728
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 34,
                                          "line": 23
                                        },
                                        "start": {
                                          "column": 10,
                                          "line": 23
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    692,
                                    738
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 9,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 22
                                    }
                                  }
                                },
                                "finalizer": null,
                                "handler": {
                                  "type": "CatchClause",
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "range": [
                                      750,
                                      752
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 23,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 24
                                      }
                                    }
                                  },
                                  "param": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "_e",
                                    "optional": false,
                                    "range": [
                                      746,
                                      748
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 19,
                                        "line": 24
                                      },
                                      "start": {
                                        "column": 17,
                                        "line": 24
                                      }
                                    }
                                  },
                                  "range": [
                                    739,
                                    752
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 10,
                                      "line": 24
                                    }
                                  }
                                },
                                "range": [
                                  688,
                                  752
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 22
                                  }
                                }
                              }
                            ],
                            "range": [
                              678,
                              760
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 25
                              },
                              "start": {
                                "column": 49,
                                "line": 21
                              }
                            }
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "UnaryExpression",
                              "argument": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "iterator",
                                  "optional": false,
                                  "range": [
                                    646,
                                    654
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 21
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "return",
                                  "optional": false,
                                  "range": [
                                    655,
                                    661
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 32,
                                      "line": 21
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 21
                                    }
                                  }
                                },
                                "range": [
                                  646,
                                  661
                                ],
                                "loc": {
                                  "end": {
                                    "column": 32,
                                    "line": 21
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 21
                                  }
                                }
                              },
                              "operator": "typeof",
                              "prefix": true,
                              "range": [
                                639,
                                661
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 21
                                },
                                "start": {
                                  "column": 10,
                                  "line": 21
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "\"function\"",
                              "value": "function",
                              "range": [
                                666,
                                676
                              ],
                              "loc": {
                                "end": {
                                  "column": 47,
                                  "line": 21
                                },
                                "start": {
                                  "column": 37,
                                  "line": 21
                                }
                              }
                            },
                            "range": [
                              639,
                              676
                            ],
                            "loc": {
                              "end": {
                                "column": 47,
                                "line": 21
                              },
                              "start": {
                                "column": 10,
                                "line": 21
                              }
                            }
                          },
                          "range": [
                            635,
                            760
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 25
                            },
                            "start": {
                              "column": 6,
                              "line": 21
                            }
                          }
                        },
                        {
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "error",
                            "optional": false,
                            "range": [
                              773,
                              778
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 26
                              },
                              "start": {
                                "column": 12,
                                "line": 26
                              }
                            }
                          },
                          "range": [
                            767,
                            779
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 26
                            },
                            "start": {
                              "column": 6,
                              "line": 26
                            }
                          }
                        }
                      ],
                      "range": [
                        627,
                        785
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 27
                        },
                        "start": {
                          "column": 20,
                          "line": 20
                        }
                      }
                    },
                    "param": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "range": [
                        620,
                        625
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 20
                        },
                        "start": {
                          "column": 13,
                          "line": 20
                        }
                      }
                    },
                    "range": [
                      613,
                      785
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 27
                      },
                      "start": {
                        "column": 6,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    534,
                    785
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 27
                    },
                    "start": {
                      "column": 4,
                      "line": 18
                    }
                  }
                }
              ],
              "range": [
                477,
                789
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 28
                },
                "start": {
                  "column": 35,
                  "line": 13
                }
              }
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mapResult",
              "optional": false,
              "range": [
                397,
                406
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 11
                },
                "start": {
                  "column": 17,
                  "line": 11
                }
              }
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  },
                  "range": [
                    418,
                    440
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "range": [
                        434,
                        440
                      ],
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "range": [
                              435,
                              436
                            ],
                            "loc": {
                              "end": {
                                "column": 28,
                                "line": 12
                              },
                              "start": {
                                "column": 27,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            435,
                            436
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 12
                            },
                            "start": {
                              "column": 27,
                              "line": 12
                            }
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "range": [
                              438,
                              439
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 12
                              },
                              "start": {
                                "column": 30,
                                "line": 12
                              }
                            }
                          },
                          "range": [
                            438,
                            439
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 12
                            },
                            "start": {
                              "column": 30,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 12
                        },
                        "start": {
                          "column": 26,
                          "line": 12
                        }
                      }
                    },
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IteratorResult",
                      "optional": false,
                      "range": [
                        420,
                        434
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 12
                        },
                        "start": {
                          "column": 12,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      420,
                      440
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 12
                      },
                      "start": {
                        "column": 12,
                        "line": 12
                      }
                    }
                  }
                },
                "range": [
                  412,
                  440
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 12
                  },
                  "start": {
                    "column": 4,
                    "line": 12
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 34,
                  "line": 13
                },
                "start": {
                  "column": 3,
                  "line": 13
                }
              },
              "range": [
                445,
                476
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "range": [
                    454,
                    476
                  ],
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "range": [
                          469,
                          475
                        ],
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "range": [
                                470,
                                471
                              ],
                              "loc": {
                                "end": {
                                  "column": 29,
                                  "line": 13
                                },
                                "start": {
                                  "column": 28,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              470,
                              471
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 13
                              },
                              "start": {
                                "column": 28,
                                "line": 13
                              }
                            }
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "range": [
                                473,
                                474
                              ],
                              "loc": {
                                "end": {
                                  "column": 32,
                                  "line": 13
                                },
                                "start": {
                                  "column": 31,
                                  "line": 13
                                }
                              }
                            },
                            "range": [
                              473,
                              474
                            ],
                            "loc": {
                              "end": {
                                "column": 32,
                                "line": 13
                              },
                              "start": {
                                "column": 31,
                                "line": 13
                              }
                            }
                          }
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 13
                          },
                          "start": {
                            "column": 27,
                            "line": 13
                          }
                        }
                      },
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IteratorResult",
                        "optional": false,
                        "range": [
                          455,
                          469
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 13
                          },
                          "start": {
                            "column": 13,
                            "line": 13
                          }
                        }
                      },
                      "range": [
                        455,
                        475
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 13
                        },
                        "start": {
                          "column": 13,
                          "line": 13
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 13
                    },
                    "start": {
                      "column": 12,
                      "line": 13
                    }
                  }
                },
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "range": [
                    447,
                    454
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 13
                    },
                    "start": {
                      "column": 5,
                      "line": 13
                    }
                  }
                },
                "range": [
                  447,
                  476
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 13
                  },
                  "start": {
                    "column": 5,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              382,
              789
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 28
              },
              "start": {
                "column": 2,
                "line": 11
              }
            }
          },
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
                    "name": "next",
                    "optional": false,
                    "range": [
                      812,
                      816
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 31
                      },
                      "start": {
                        "column": 10,
                        "line": 31
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
                      816,
                      873
                    ],
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "CallExpression",
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "iterator",
                                      "optional": false,
                                      "range": [
                                        850,
                                        858
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 37,
                                          "line": 32
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 32
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "next",
                                      "optional": false,
                                      "range": [
                                        859,
                                        863
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 32
                                        },
                                        "start": {
                                          "column": 38,
                                          "line": 32
                                        }
                                      }
                                    },
                                    "range": [
                                      850,
                                      863
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 42,
                                        "line": 32
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 32
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    850,
                                    865
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 32
                                    },
                                    "start": {
                                      "column": 29,
                                      "line": 32
                                    }
                                  }
                                },
                                "range": [
                                  844,
                                  865
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 32
                                  },
                                  "start": {
                                    "column": 23,
                                    "line": 32
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mapResult",
                              "optional": false,
                              "range": [
                                834,
                                843
                              ],
                              "loc": {
                                "end": {
                                  "column": 22,
                                  "line": 32
                                },
                                "start": {
                                  "column": 13,
                                  "line": 32
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              834,
                              866
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 32
                              },
                              "start": {
                                "column": 13,
                                "line": 32
                              }
                            }
                          },
                          "range": [
                            827,
                            867
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 32
                            },
                            "start": {
                              "column": 6,
                              "line": 32
                            }
                          }
                        }
                      ],
                      "range": [
                        819,
                        873
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 33
                        },
                        "start": {
                          "column": 17,
                          "line": 31
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
                        "line": 33
                      },
                      "start": {
                        "column": 14,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    806,
                    873
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 33
                    },
                    "start": {
                      "column": 4,
                      "line": 31
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "return",
                    "optional": false,
                    "range": [
                      885,
                      891
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 34
                      },
                      "start": {
                        "column": 10,
                        "line": 34
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
                      891,
                      1092
                    ],
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ConditionalExpression",
                            "alternate": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "range": [
                                      1048,
                                      1053
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 17,
                                        "line": 37
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 37
                                      }
                                    }
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "range": [
                                        1055,
                                        1064
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 37
                                        },
                                        "start": {
                                          "column": 19,
                                          "line": 37
                                        }
                                      }
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "range": [
                                        1068,
                                        1071
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 35,
                                          "line": 37
                                        },
                                        "start": {
                                          "column": 32,
                                          "line": 37
                                        }
                                      }
                                    },
                                    "range": [
                                      1055,
                                      1071
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 37
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 37
                                      }
                                    }
                                  },
                                  "range": [
                                    1048,
                                    1071
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 37
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 37
                                    }
                                  }
                                },
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "done",
                                    "optional": false,
                                    "range": [
                                      1073,
                                      1077
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 41,
                                        "line": 37
                                      },
                                      "start": {
                                        "column": 37,
                                        "line": 37
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
                                      1079,
                                      1083
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 47,
                                        "line": 37
                                      },
                                      "start": {
                                        "column": 43,
                                        "line": 37
                                      }
                                    }
                                  },
                                  "range": [
                                    1073,
                                    1083
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 47,
                                      "line": 37
                                    },
                                    "start": {
                                      "column": 37,
                                      "line": 37
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1046,
                                1085
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 37
                                },
                                "start": {
                                  "column": 10,
                                  "line": 37
                                }
                              }
                            },
                            "consequent": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "CallExpression",
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "range": [
                                          1028,
                                          1033
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 47,
                                            "line": 36
                                          },
                                          "start": {
                                            "column": 42,
                                            "line": 36
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
                                        "name": "iterator",
                                        "optional": false,
                                        "range": [
                                          1012,
                                          1020
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 34,
                                            "line": 36
                                          },
                                          "start": {
                                            "column": 26,
                                            "line": 36
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "return",
                                        "optional": false,
                                        "range": [
                                          1021,
                                          1027
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 41,
                                            "line": 36
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 36
                                          }
                                        }
                                      },
                                      "range": [
                                        1012,
                                        1027
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 41,
                                          "line": 36
                                        },
                                        "start": {
                                          "column": 26,
                                          "line": 36
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "range": [
                                      1012,
                                      1034
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 48,
                                        "line": 36
                                      },
                                      "start": {
                                        "column": 26,
                                        "line": 36
                                      }
                                    }
                                  },
                                  "range": [
                                    1006,
                                    1034
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 48,
                                      "line": 36
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 36
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "mapResult",
                                "optional": false,
                                "range": [
                                  996,
                                  1005
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 36
                                  },
                                  "start": {
                                    "column": 10,
                                    "line": 36
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                996,
                                1035
                              ],
                              "loc": {
                                "end": {
                                  "column": 49,
                                  "line": 36
                                },
                                "start": {
                                  "column": 10,
                                  "line": 36
                                }
                              }
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "===",
                              "left": {
                                "type": "UnaryExpression",
                                "argument": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "iterator",
                                    "optional": false,
                                    "range": [
                                      955,
                                      963
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 28,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 35
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "return",
                                    "optional": false,
                                    "range": [
                                      964,
                                      970
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 35,
                                        "line": 35
                                      },
                                      "start": {
                                        "column": 29,
                                        "line": 35
                                      }
                                    }
                                  },
                                  "range": [
                                    955,
                                    970
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 35,
                                      "line": 35
                                    },
                                    "start": {
                                      "column": 20,
                                      "line": 35
                                    }
                                  }
                                },
                                "operator": "typeof",
                                "prefix": true,
                                "range": [
                                  948,
                                  970
                                ],
                                "loc": {
                                  "end": {
                                    "column": 35,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 13,
                                    "line": 35
                                  }
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "raw": "\"function\"",
                                "value": "function",
                                "range": [
                                  975,
                                  985
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 35
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 35
                                  }
                                }
                              },
                              "range": [
                                948,
                                985
                              ],
                              "loc": {
                                "end": {
                                  "column": 50,
                                  "line": 35
                                },
                                "start": {
                                  "column": 13,
                                  "line": 35
                                }
                              }
                            },
                            "range": [
                              948,
                              1085
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 37
                              },
                              "start": {
                                "column": 13,
                                "line": 35
                              }
                            }
                          },
                          "range": [
                            941,
                            1086
                          ],
                          "loc": {
                            "end": {
                              "column": 50,
                              "line": 37
                            },
                            "start": {
                              "column": 6,
                              "line": 35
                            }
                          }
                        }
                      ],
                      "range": [
                        933,
                        1092
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 38
                        },
                        "start": {
                          "column": 58,
                          "line": 34
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 34
                            },
                            "start": {
                              "column": 22,
                              "line": 34
                            }
                          },
                          "range": [
                            897,
                            900
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "range": [
                                899,
                                900
                              ],
                              "loc": {
                                "end": {
                                  "column": 25,
                                  "line": 34
                                },
                                "start": {
                                  "column": 24,
                                  "line": 34
                                }
                              }
                            },
                            "range": [
                              899,
                              900
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 34
                              },
                              "start": {
                                "column": 24,
                                "line": 34
                              }
                            }
                          }
                        },
                        "range": [
                          892,
                          900
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 34
                          },
                          "start": {
                            "column": 17,
                            "line": 34
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 34
                        },
                        "start": {
                          "column": 26,
                          "line": 34
                        }
                      },
                      "range": [
                        901,
                        932
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "range": [
                            910,
                            932
                          ],
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "range": [
                                  925,
                                  931
                                ],
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "range": [
                                        926,
                                        927
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 52,
                                          "line": 34
                                        },
                                        "start": {
                                          "column": 51,
                                          "line": 34
                                        }
                                      }
                                    },
                                    "range": [
                                      926,
                                      927
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 52,
                                        "line": 34
                                      },
                                      "start": {
                                        "column": 51,
                                        "line": 34
                                      }
                                    }
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "range": [
                                        929,
                                        930
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 55,
                                          "line": 34
                                        },
                                        "start": {
                                          "column": 54,
                                          "line": 34
                                        }
                                      }
                                    },
                                    "range": [
                                      929,
                                      930
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 55,
                                        "line": 34
                                      },
                                      "start": {
                                        "column": 54,
                                        "line": 34
                                      }
                                    }
                                  }
                                ],
                                "loc": {
                                  "end": {
                                    "column": 56,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 50,
                                    "line": 34
                                  }
                                }
                              },
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IteratorResult",
                                "optional": false,
                                "range": [
                                  911,
                                  925
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 34
                                  },
                                  "start": {
                                    "column": 36,
                                    "line": 34
                                  }
                                }
                              },
                              "range": [
                                911,
                                931
                              ],
                              "loc": {
                                "end": {
                                  "column": 56,
                                  "line": 34
                                },
                                "start": {
                                  "column": 36,
                                  "line": 34
                                }
                              }
                            }
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 34
                            },
                            "start": {
                              "column": 35,
                              "line": 34
                            }
                          }
                        },
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "range": [
                            903,
                            910
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 34
                            },
                            "start": {
                              "column": 28,
                              "line": 34
                            }
                          }
                        },
                        "range": [
                          903,
                          932
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 34
                          },
                          "start": {
                            "column": 28,
                            "line": 34
                          }
                        }
                      }
                    },
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 38
                      },
                      "start": {
                        "column": 16,
                        "line": 34
                      }
                    }
                  },
                  "range": [
                    879,
                    1092
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 38
                    },
                    "start": {
                      "column": 4,
                      "line": 34
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "throw",
                    "optional": false,
                    "range": [
                      1104,
                      1109
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 39
                      },
                      "start": {
                        "column": 10,
                        "line": 39
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
                      1109,
                      1266
                    ],
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "alternate": null,
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "AwaitExpression",
                                      "argument": {
                                        "type": "CallExpression",
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "error",
                                            "optional": false,
                                            "range": [
                                              1225,
                                              1230
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 51,
                                                "line": 41
                                              },
                                              "start": {
                                                "column": 46,
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
                                            "name": "iterator",
                                            "optional": false,
                                            "range": [
                                              1210,
                                              1218
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 39,
                                                "line": 41
                                              },
                                              "start": {
                                                "column": 31,
                                                "line": 41
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "throw",
                                            "optional": false,
                                            "range": [
                                              1219,
                                              1224
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 45,
                                                "line": 41
                                              },
                                              "start": {
                                                "column": 40,
                                                "line": 41
                                              }
                                            }
                                          },
                                          "range": [
                                            1210,
                                            1224
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 45,
                                              "line": 41
                                            },
                                            "start": {
                                              "column": 31,
                                              "line": 41
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          1210,
                                          1231
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 52,
                                            "line": 41
                                          },
                                          "start": {
                                            "column": 31,
                                            "line": 41
                                          }
                                        }
                                      },
                                      "range": [
                                        1204,
                                        1231
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 52,
                                          "line": 41
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 41
                                        }
                                      }
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "mapResult",
                                    "optional": false,
                                    "range": [
                                      1194,
                                      1203
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 41
                                      },
                                      "start": {
                                        "column": 15,
                                        "line": 41
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    1194,
                                    1232
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 53,
                                      "line": 41
                                    },
                                    "start": {
                                      "column": 15,
                                      "line": 41
                                    }
                                  }
                                },
                                "range": [
                                  1187,
                                  1233
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 41
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 41
                                  }
                                }
                              }
                            ],
                            "range": [
                              1177,
                              1241
                            ],
                            "loc": {
                              "end": {
                                "column": 7,
                                "line": 42
                              },
                              "start": {
                                "column": 48,
                                "line": 40
                              }
                            }
                          },
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "UnaryExpression",
                              "argument": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "iterator",
                                  "optional": false,
                                  "range": [
                                    1146,
                                    1154
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 25,
                                      "line": 40
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 40
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "throw",
                                  "optional": false,
                                  "range": [
                                    1155,
                                    1160
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 31,
                                      "line": 40
                                    },
                                    "start": {
                                      "column": 26,
                                      "line": 40
                                    }
                                  }
                                },
                                "range": [
                                  1146,
                                  1160
                                ],
                                "loc": {
                                  "end": {
                                    "column": 31,
                                    "line": 40
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 40
                                  }
                                }
                              },
                              "operator": "typeof",
                              "prefix": true,
                              "range": [
                                1139,
                                1160
                              ],
                              "loc": {
                                "end": {
                                  "column": 31,
                                  "line": 40
                                },
                                "start": {
                                  "column": 10,
                                  "line": 40
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "\"function\"",
                              "value": "function",
                              "range": [
                                1165,
                                1175
                              ],
                              "loc": {
                                "end": {
                                  "column": 46,
                                  "line": 40
                                },
                                "start": {
                                  "column": 36,
                                  "line": 40
                                }
                              }
                            },
                            "range": [
                              1139,
                              1175
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 40
                              },
                              "start": {
                                "column": 10,
                                "line": 40
                              }
                            }
                          },
                          "range": [
                            1135,
                            1241
                          ],
                          "loc": {
                            "end": {
                              "column": 7,
                              "line": 42
                            },
                            "start": {
                              "column": 6,
                              "line": 40
                            }
                          }
                        },
                        {
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "error",
                            "optional": false,
                            "range": [
                              1254,
                              1259
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 43
                              },
                              "start": {
                                "column": 12,
                                "line": 43
                              }
                            }
                          },
                          "range": [
                            1248,
                            1260
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 43
                            },
                            "start": {
                              "column": 6,
                              "line": 43
                            }
                          }
                        }
                      ],
                      "range": [
                        1127,
                        1266
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 44
                        },
                        "start": {
                          "column": 33,
                          "line": 39
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
                        "name": "error",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 39
                            },
                            "start": {
                              "column": 22,
                              "line": 39
                            }
                          },
                          "range": [
                            1116,
                            1125
                          ],
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "range": [
                              1118,
                              1125
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 39
                              },
                              "start": {
                                "column": 24,
                                "line": 39
                              }
                            }
                          }
                        },
                        "range": [
                          1110,
                          1125
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 39
                          },
                          "start": {
                            "column": 16,
                            "line": 39
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 44
                      },
                      "start": {
                        "column": 15,
                        "line": 39
                      }
                    }
                  },
                  "range": [
                    1098,
                    1266
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 44
                    },
                    "start": {
                      "column": 4,
                      "line": 39
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "range": [
                        1273,
                        1279
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 45
                        },
                        "start": {
                          "column": 5,
                          "line": 45
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "asyncIterator",
                      "optional": false,
                      "range": [
                        1280,
                        1293
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 45
                        },
                        "start": {
                          "column": 12,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      1273,
                      1293
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 45
                      },
                      "start": {
                        "column": 5,
                        "line": 45
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
                      1294,
                      1323
                    ],
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ThisExpression",
                            "range": [
                              1312,
                              1316
                            ],
                            "loc": {
                              "end": {
                                "column": 17,
                                "line": 46
                              },
                              "start": {
                                "column": 13,
                                "line": 46
                              }
                            }
                          },
                          "range": [
                            1305,
                            1317
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 46
                            },
                            "start": {
                              "column": 6,
                              "line": 46
                            }
                          }
                        }
                      ],
                      "range": [
                        1297,
                        1323
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 47
                        },
                        "start": {
                          "column": 29,
                          "line": 45
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
                        "line": 47
                      },
                      "start": {
                        "column": 26,
                        "line": 45
                      }
                    }
                  },
                  "range": [
                    1272,
                    1323
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 47
                    },
                    "start": {
                      "column": 4,
                      "line": 45
                    }
                  }
                },
                {
                  "type": "Property",
                  "computed": true,
                  "key": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "range": [
                        1336,
                        1342
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 48
                        },
                        "start": {
                          "column": 11,
                          "line": 48
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "asyncDispose",
                      "optional": false,
                      "range": [
                        1343,
                        1355
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 48
                        },
                        "start": {
                          "column": 18,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      1336,
                      1355
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 48
                      },
                      "start": {
                        "column": 11,
                        "line": 48
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
                      1356,
                      1403
                    ],
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "CallExpression",
                              "arguments": [
                                {
                                  "type": "TSNonNullExpression",
                                  "expression": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "undefined",
                                    "optional": false,
                                    "range": [
                                      1385,
                                      1394
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 33,
                                        "line": 49
                                      },
                                      "start": {
                                        "column": 24,
                                        "line": 49
                                      }
                                    }
                                  },
                                  "range": [
                                    1385,
                                    1395
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 34,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 49
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "range": [
                                    1373,
                                    1377
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 16,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 49
                                    }
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "return",
                                  "optional": false,
                                  "range": [
                                    1378,
                                    1384
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 49
                                    },
                                    "start": {
                                      "column": 17,
                                      "line": 49
                                    }
                                  }
                                },
                                "range": [
                                  1373,
                                  1384
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 49
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 49
                                  }
                                }
                              },
                              "optional": false,
                              "range": [
                                1373,
                                1396
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 49
                                },
                                "start": {
                                  "column": 12,
                                  "line": 49
                                }
                              }
                            },
                            "range": [
                              1367,
                              1396
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 49
                              },
                              "start": {
                                "column": 6,
                                "line": 49
                              }
                            }
                          },
                          "range": [
                            1367,
                            1397
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 49
                            },
                            "start": {
                              "column": 6,
                              "line": 49
                            }
                          }
                        }
                      ],
                      "range": [
                        1359,
                        1403
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 50
                        },
                        "start": {
                          "column": 34,
                          "line": 48
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
                        "line": 50
                      },
                      "start": {
                        "column": 31,
                        "line": 48
                      }
                    }
                  },
                  "range": [
                    1329,
                    1403
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 50
                    },
                    "start": {
                      "column": 4,
                      "line": 48
                    }
                  }
                }
              ],
              "range": [
                800,
                1407
              ],
              "loc": {
                "end": {
                  "column": 3,
                  "line": 51
                },
                "start": {
                  "column": 9,
                  "line": 30
                }
              }
            },
            "range": [
              793,
              1408
            ],
            "loc": {
              "end": {
                "column": 4,
                "line": 51
              },
              "start": {
                "column": 2,
                "line": 30
              }
            }
          }
        ],
        "range": [
          324,
          1410
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 52
          },
          "start": {
            "column": 30,
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
        "name": "mapAsyncIterable",
        "optional": false,
        "range": [
          132,
          148
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 5
          },
          "start": {
            "column": 9,
            "line": 5
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "iterable",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 76,
                "line": 6
              },
              "start": {
                "column": 10,
                "line": 6
              }
            },
            "range": [
              181,
              247
            ],
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      197,
                      214
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            198,
                            199
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 6
                            },
                            "start": {
                              "column": 27,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          198,
                          199
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 6
                          },
                          "start": {
                            "column": 27,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "range": [
                            201,
                            202
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 6
                            },
                            "start": {
                              "column": 30,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          201,
                          202
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 6
                          },
                          "start": {
                            "column": 30,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          204,
                          213
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 6
                          },
                          "start": {
                            "column": 33,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 6
                      },
                      "start": {
                        "column": 26,
                        "line": 6
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AsyncGenerator",
                    "optional": false,
                    "range": [
                      183,
                      197
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 6
                      },
                      "start": {
                        "column": 12,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    183,
                    214
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 6
                    },
                    "start": {
                      "column": 12,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      230,
                      247
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "range": [
                            231,
                            232
                          ],
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 6
                            },
                            "start": {
                              "column": 60,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          231,
                          232
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 6
                          },
                          "start": {
                            "column": 60,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "range": [
                            234,
                            235
                          ],
                          "loc": {
                            "end": {
                              "column": 64,
                              "line": 6
                            },
                            "start": {
                              "column": 63,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          234,
                          235
                        ],
                        "loc": {
                          "end": {
                            "column": 64,
                            "line": 6
                          },
                          "start": {
                            "column": 63,
                            "line": 6
                          }
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "range": [
                          237,
                          246
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 6
                          },
                          "start": {
                            "column": 66,
                            "line": 6
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 6
                      },
                      "start": {
                        "column": 59,
                        "line": 6
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AsyncIterable",
                    "optional": false,
                    "range": [
                      217,
                      230
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 6
                      },
                      "start": {
                        "column": 46,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    217,
                    247
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 6
                    },
                    "start": {
                      "column": 46,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                183,
                247
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              }
            }
          },
          "range": [
            173,
            247
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 6
            },
            "start": {
              "column": 2,
              "line": 6
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 43,
                "line": 7
              },
              "start": {
                "column": 10,
                "line": 7
              }
            },
            "range": [
              259,
              292
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 7
                      },
                      "start": {
                        "column": 18,
                        "line": 7
                      }
                    },
                    "range": [
                      267,
                      270
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "range": [
                          269,
                          270
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 7
                          },
                          "start": {
                            "column": 20,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        269,
                        270
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 7
                        },
                        "start": {
                          "column": 20,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    262,
                    270
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 7
                    },
                    "start": {
                      "column": 13,
                      "line": 7
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 7
                  },
                  "start": {
                    "column": 23,
                    "line": 7
                  }
                },
                "range": [
                  272,
                  292
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "range": [
                      289,
                      292
                    ],
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "range": [
                            290,
                            291
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 7
                            },
                            "start": {
                              "column": 41,
                              "line": 7
                            }
                          }
                        },
                        "range": [
                          290,
                          291
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 7
                          },
                          "start": {
                            "column": 41,
                            "line": 7
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 7
                      },
                      "start": {
                        "column": 40,
                        "line": 7
                      }
                    }
                  },
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PromiseOrValue",
                    "optional": false,
                    "range": [
                      275,
                      289
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 7
                      },
                      "start": {
                        "column": 26,
                        "line": 7
                      }
                    }
                  },
                  "range": [
                    275,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 7
                    },
                    "start": {
                      "column": 26,
                      "line": 7
                    }
                  }
                }
              },
              "range": [
                261,
                292
              ],
              "loc": {
                "end": {
                  "column": 43,
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
            251,
            292
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 7
            },
            "start": {
              "column": 2,
              "line": 7
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 29,
            "line": 8
          },
          "start": {
            "column": 1,
            "line": 8
          }
        },
        "range": [
          295,
          323
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              311,
              323
            ],
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "range": [
                    312,
                    313
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 8
                    },
                    "start": {
                      "column": 18,
                      "line": 8
                    }
                  }
                },
                "range": [
                  312,
                  313
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 8
                  },
                  "start": {
                    "column": 18,
                    "line": 8
                  }
                }
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "range": [
                    315,
                    316
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 8
                    },
                    "start": {
                      "column": 21,
                      "line": 8
                    }
                  }
                },
                "range": [
                  315,
                  316
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 8
                  },
                  "start": {
                    "column": 21,
                    "line": 8
                  }
                }
              },
              {
                "type": "TSVoidKeyword",
                "range": [
                  318,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 8
                  },
                  "start": {
                    "column": 24,
                    "line": 8
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 8
              },
              "start": {
                "column": 17,
                "line": 8
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncGenerator",
            "optional": false,
            "range": [
              297,
              311
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 8
              },
              "start": {
                "column": 3,
                "line": 8
              }
            }
          },
          "range": [
            297,
            323
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 8
            },
            "start": {
              "column": 3,
              "line": 8
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 46,
            "line": 5
          },
          "start": {
            "column": 25,
            "line": 5
          }
        },
        "range": [
          148,
          169
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                149,
                150
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 26,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              149,
              150
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 5
              },
              "start": {
                "column": 26,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                152,
                153
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 5
                },
                "start": {
                  "column": 29,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              152,
              153
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 5
              },
              "start": {
                "column": 29,
                "line": 5
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "default": {
              "type": "TSUndefinedKeyword",
              "range": [
                159,
                168
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 5
                },
                "start": {
                  "column": 36,
                  "line": 5
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "range": [
                155,
                156
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 5
                },
                "start": {
                  "column": 32,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              155,
              168
            ],
            "loc": {
              "end": {
                "column": 45,
                "line": 5
              },
              "start": {
                "column": 32,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        123,
        1410
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 52
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
            "name": "items",
            "optional": false,
            "range": [
              1418,
              1423
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 54
              },
              "start": {
                "column": 6,
                "line": 54
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
                  1427,
                  1428
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 54
                  },
                  "start": {
                    "column": 15,
                    "line": 54
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "2",
                "value": 2,
                "range": [
                  1430,
                  1431
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 54
                  },
                  "start": {
                    "column": 18,
                    "line": 54
                  }
                }
              },
              {
                "type": "Literal",
                "raw": "3",
                "value": 3,
                "range": [
                  1433,
                  1434
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 54
                  },
                  "start": {
                    "column": 21,
                    "line": 54
                  }
                }
              }
            ],
            "range": [
              1426,
              1435
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 54
              },
              "start": {
                "column": 14,
                "line": 54
              }
            }
          },
          "range": [
            1418,
            1435
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 54
            },
            "start": {
              "column": 6,
              "line": 54
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1412,
        1436
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 54
        },
        "start": {
          "column": 0,
          "line": 54
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
            "name": "iterable",
            "optional": false,
            "range": [
              1444,
              1452
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 56
              },
              "start": {
                "column": 6,
                "line": 56
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
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "range": [
                      1460,
                      1466
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 57
                      },
                      "start": {
                        "column": 3,
                        "line": 57
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncIterator",
                    "optional": false,
                    "range": [
                      1467,
                      1480
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 57
                      },
                      "start": {
                        "column": 10,
                        "line": 57
                      }
                    }
                  },
                  "range": [
                    1460,
                    1480
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 57
                    },
                    "start": {
                      "column": 3,
                      "line": 57
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
                    1481,
                    1506
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ThisExpression",
                          "range": [
                            1497,
                            1501
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 58
                            },
                            "start": {
                              "column": 11,
                              "line": 58
                            }
                          }
                        },
                        "range": [
                          1490,
                          1502
                        ],
                        "loc": {
                          "end": {
                            "column": 16,
                            "line": 58
                          },
                          "start": {
                            "column": 4,
                            "line": 58
                          }
                        }
                      }
                    ],
                    "range": [
                      1484,
                      1506
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 59
                      },
                      "start": {
                        "column": 27,
                        "line": 57
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
                      "column": 3,
                      "line": 59
                    },
                    "start": {
                      "column": 24,
                      "line": 57
                    }
                  }
                },
                "range": [
                  1459,
                  1506
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 59
                  },
                  "start": {
                    "column": 2,
                    "line": 57
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "range": [
                    1510,
                    1514
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 60
                    },
                    "start": {
                      "column": 2,
                      "line": 60
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
                    1514,
                    1651
                  ],
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
                              "name": "value",
                              "optional": false,
                              "range": [
                                1529,
                                1534
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
                            "init": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "items",
                                "optional": false,
                                "range": [
                                  1537,
                                  1542
                                ],
                                "loc": {
                                  "end": {
                                    "column": 23,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 18,
                                    "line": 61
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Literal",
                                "raw": "0",
                                "value": 0,
                                "range": [
                                  1543,
                                  1544
                                ],
                                "loc": {
                                  "end": {
                                    "column": 25,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 24,
                                    "line": 61
                                  }
                                }
                              },
                              "range": [
                                1537,
                                1545
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 61
                                },
                                "start": {
                                  "column": 18,
                                  "line": 61
                                }
                              }
                            },
                            "range": [
                              1529,
                              1545
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 61
                              },
                              "start": {
                                "column": 10,
                                "line": 61
                              }
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const",
                        "range": [
                          1523,
                          1546
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 61
                          },
                          "start": {
                            "column": 4,
                            "line": 61
                          }
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "items",
                              "optional": false,
                              "range": [
                                1551,
                                1556
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
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
                              "name": "shift",
                              "optional": false,
                              "range": [
                                1557,
                                1562
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 62
                                },
                                "start": {
                                  "column": 10,
                                  "line": 62
                                }
                              }
                            },
                            "range": [
                              1551,
                              1562
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
                            1551,
                            1564
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 62
                            },
                            "start": {
                              "column": 4,
                              "line": 62
                            }
                          }
                        },
                        "range": [
                          1551,
                          1565
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 62
                          },
                          "start": {
                            "column": 4,
                            "line": 62
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "done",
                                    "optional": false,
                                    "range": [
                                      1601,
                                      1605
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 10,
                                        "line": 64
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 64
                                      }
                                    }
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "BinaryExpression",
                                    "operator": "===",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "items",
                                        "optional": false,
                                        "range": [
                                          1607,
                                          1612
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 17,
                                            "line": 64
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 64
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
                                          1613,
                                          1619
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 24,
                                            "line": 64
                                          },
                                          "start": {
                                            "column": 18,
                                            "line": 64
                                          }
                                        }
                                      },
                                      "range": [
                                        1607,
                                        1619
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 64
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 64
                                        }
                                      }
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "raw": "0",
                                      "value": 0,
                                      "range": [
                                        1624,
                                        1625
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 30,
                                          "line": 64
                                        },
                                        "start": {
                                          "column": 29,
                                          "line": 64
                                        }
                                      }
                                    },
                                    "range": [
                                      1607,
                                      1625
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 64
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 64
                                      }
                                    }
                                  },
                                  "range": [
                                    1601,
                                    1625
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 64
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 64
                                    }
                                  }
                                },
                                {
                                  "type": "Property",
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "range": [
                                      1633,
                                      1638
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 11,
                                        "line": 65
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 65
                                      }
                                    }
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": true,
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "range": [
                                      1633,
                                      1638
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 11,
                                        "line": 65
                                      },
                                      "start": {
                                        "column": 6,
                                        "line": 65
                                      }
                                    }
                                  },
                                  "range": [
                                    1633,
                                    1638
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 11,
                                      "line": 65
                                    },
                                    "start": {
                                      "column": 6,
                                      "line": 65
                                    }
                                  }
                                }
                              ],
                              "range": [
                                1593,
                                1645
                              ],
                              "loc": {
                                "end": {
                                  "column": 5,
                                  "line": 66
                                },
                                "start": {
                                  "column": 27,
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
                              "name": "Promise",
                              "optional": false,
                              "range": [
                                1577,
                                1584
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 63
                                },
                                "start": {
                                  "column": 11,
                                  "line": 63
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "range": [
                                1585,
                                1592
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 63
                                },
                                "start": {
                                  "column": 19,
                                  "line": 63
                                }
                              }
                            },
                            "range": [
                              1577,
                              1592
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 63
                              },
                              "start": {
                                "column": 11,
                                "line": 63
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1577,
                            1646
                          ],
                          "loc": {
                            "end": {
                              "column": 6,
                              "line": 66
                            },
                            "start": {
                              "column": 11,
                              "line": 63
                            }
                          }
                        },
                        "range": [
                          1570,
                          1647
                        ],
                        "loc": {
                          "end": {
                            "column": 7,
                            "line": 66
                          },
                          "start": {
                            "column": 4,
                            "line": 63
                          }
                        }
                      }
                    ],
                    "range": [
                      1517,
                      1651
                    ],
                    "loc": {
                      "end": {
                        "column": 3,
                        "line": 67
                      },
                      "start": {
                        "column": 9,
                        "line": 60
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
                      "column": 3,
                      "line": 67
                    },
                    "start": {
                      "column": 6,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1510,
                  1651
                ],
                "loc": {
                  "end": {
                    "column": 3,
                    "line": 67
                  },
                  "start": {
                    "column": 2,
                    "line": 60
                  }
                }
              }
            ],
            "range": [
              1455,
              1654
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 68
              },
              "start": {
                "column": 17,
                "line": 56
              }
            }
          },
          "range": [
            1444,
            1654
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 68
            },
            "start": {
              "column": 6,
              "line": 56
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1438,
        1655
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 56
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
            "name": "doubles",
            "optional": false,
            "range": [
              1663,
              1670
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 70
              },
              "start": {
                "column": 6,
                "line": 70
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "iterable",
                "optional": false,
                "range": [
                  1690,
                  1698
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 70
                  },
                  "start": {
                    "column": 33,
                    "line": 70
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1707,
                      1708
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 70
                      },
                      "start": {
                        "column": 50,
                        "line": 70
                      }
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1711,
                      1712
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 70
                      },
                      "start": {
                        "column": 54,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    1707,
                    1712
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 70
                    },
                    "start": {
                      "column": 50,
                      "line": 70
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      1701,
                      1702
                    ],
                    "loc": {
                      "end": {
                        "column": 45,
                        "line": 70
                      },
                      "start": {
                        "column": 44,
                        "line": 70
                      }
                    }
                  }
                ],
                "range": [
                  1700,
                  1712
                ],
                "loc": {
                  "end": {
                    "column": 55,
                    "line": 70
                  },
                  "start": {
                    "column": 43,
                    "line": 70
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mapAsyncIterable",
              "optional": false,
              "range": [
                1673,
                1689
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 70
                },
                "start": {
                  "column": 16,
                  "line": 70
                }
              }
            },
            "optional": false,
            "range": [
              1673,
              1713
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 70
              },
              "start": {
                "column": 16,
                "line": 70
              }
            }
          },
          "range": [
            1663,
            1713
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 70
            },
            "start": {
              "column": 6,
              "line": 70
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1657,
        1714
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 71
    },
    "start": {
      "column": 0,
      "line": 3
    }
  },
  "hashbang": null
}
```
