__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    806
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          13,
          410
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                23,
                24
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
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                24,
                219
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
                          "name": "x2",
                          "optional": false,
                          "range": [
                            49,
                            51
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 3
                            },
                            "start": {
                              "column": 12,
                              "line": 3
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "range": [
                                  68,
                                  75
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 4
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
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
                                              "name": "_this",
                                              "optional": false,
                                              "range": [
                                                119,
                                                124
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 25,
                                                  "line": 5
                                                },
                                                "start": {
                                                  "column": 20,
                                                  "line": 5
                                                }
                                              }
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "raw": "2",
                                              "value": 2,
                                              "range": [
                                                127,
                                                128
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 29,
                                                  "line": 5
                                                },
                                                "start": {
                                                  "column": 28,
                                                  "line": 5
                                                }
                                              }
                                            },
                                            "range": [
                                              119,
                                              128
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 29,
                                                "line": 5
                                              },
                                              "start": {
                                                "column": 20,
                                                "line": 5
                                              }
                                            }
                                          }
                                        ],
                                        "declare": false,
                                        "kind": "var",
                                        "range": [
                                          115,
                                          129
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 5
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 5
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
                                              "name": "_this",
                                              "optional": false,
                                              "range": [
                                                162,
                                                167
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 37,
                                                  "line": 6
                                                },
                                                "start": {
                                                  "column": 32,
                                                  "line": 6
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
                                              153,
                                              161
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 31,
                                                "line": 6
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 6
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            153,
                                            168
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 38,
                                              "line": 6
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 6
                                            }
                                          }
                                        },
                                        "range": [
                                          146,
                                          169
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 39,
                                            "line": 6
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 6
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      97,
                                      183
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 4
                                      }
                                    }
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "range": [
                                    91,
                                    183
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 4
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
                                    "name": "callback",
                                    "optional": false,
                                    "range": [
                                      78,
                                      86
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 4
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 4
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  77,
                                  183
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 7
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                68,
                                183
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 7
                                },
                                "start": {
                                  "column": 12,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "range": [
                            54,
                            193
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 8
                            },
                            "start": {
                              "column": 17,
                              "line": 3
                            }
                          }
                        },
                        "range": [
                          49,
                          193
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 8
                          },
                          "start": {
                            "column": 12,
                            "line": 3
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      45,
                      193
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        210,
                        212
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 10
                        },
                        "start": {
                          "column": 15,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      203,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
                      }
                    }
                  }
                ],
                "range": [
                  35,
                  219
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 11
                  },
                  "start": {
                    "column": 20,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 2
                  },
                  "start": {
                    "column": 11,
                    "line": 2
                  }
                },
                "range": [
                  26,
                  34
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    28,
                    34
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 2
                    },
                    "start": {
                      "column": 13,
                      "line": 2
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 11
                },
                "start": {
                  "column": 9,
                  "line": 2
                }
              }
            },
            "range": [
              19,
              219
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                228,
                229
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                229,
                408
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
                          "name": "x2",
                          "optional": false,
                          "range": [
                            257,
                            259
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 13
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "range": [
                                  276,
                                  283
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 14
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
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
                                              "name": "_this",
                                              "optional": false,
                                              "range": [
                                                327,
                                                332
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 25,
                                                  "line": 15
                                                },
                                                "start": {
                                                  "column": 20,
                                                  "line": 15
                                                }
                                              }
                                            },
                                            "init": {
                                              "type": "Literal",
                                              "raw": "2",
                                              "value": 2,
                                              "range": [
                                                335,
                                                336
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 29,
                                                  "line": 15
                                                },
                                                "start": {
                                                  "column": 28,
                                                  "line": 15
                                                }
                                              }
                                            },
                                            "range": [
                                              327,
                                              336
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 29,
                                                "line": 15
                                              },
                                              "start": {
                                                "column": 20,
                                                "line": 15
                                              }
                                            }
                                          }
                                        ],
                                        "declare": false,
                                        "kind": "var",
                                        "range": [
                                          323,
                                          337
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 30,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 15
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
                                              "name": "_this",
                                              "optional": false,
                                              "range": [
                                                370,
                                                375
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 37,
                                                  "line": 16
                                                },
                                                "start": {
                                                  "column": 32,
                                                  "line": 16
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
                                              361,
                                              369
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 31,
                                                "line": 16
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 16
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            361,
                                            376
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 38,
                                              "line": 16
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 16
                                            }
                                          }
                                        },
                                        "range": [
                                          354,
                                          377
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 39,
                                            "line": 16
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 16
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      305,
                                      391
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 17
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 14
                                      }
                                    }
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "range": [
                                    299,
                                    391
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 17
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 14
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
                                    "name": "callback",
                                    "optional": false,
                                    "range": [
                                      286,
                                      294
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 14
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 14
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  285,
                                  391
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 17
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                276,
                                391
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 17
                                },
                                "start": {
                                  "column": 12,
                                  "line": 14
                                }
                              }
                            }
                          ],
                          "range": [
                            262,
                            401
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 18
                            },
                            "start": {
                              "column": 17,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          257,
                          401
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 18
                          },
                          "start": {
                            "column": 12,
                            "line": 13
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      253,
                      401
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 18
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  243,
                  408
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
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
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 12
                      },
                      "start": {
                        "column": 13,
                        "line": 12
                      }
                    },
                    "range": [
                      233,
                      241
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        235,
                        241
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 12
                        },
                        "start": {
                          "column": 15,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    230,
                    241
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 12
                    },
                    "start": {
                      "column": 10,
                      "line": 12
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 20
                },
                "start": {
                  "column": 9,
                  "line": 12
                }
              }
            },
            "range": [
              224,
              408
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 21
          },
          "start": {
            "column": 13,
            "line": 1
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "class1",
        "optional": false,
        "range": [
          6,
          12
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 1
          },
          "start": {
            "column": 6,
            "line": 1
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        0,
        410
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          425,
          806
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                435,
                436
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 24
                },
                "start": {
                  "column": 8,
                  "line": 24
                }
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                436,
                623
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
                          "name": "_this",
                          "optional": false,
                          "range": [
                            461,
                            466
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 25
                            },
                            "start": {
                              "column": 12,
                              "line": 25
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            469,
                            470
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 25
                            },
                            "start": {
                              "column": 20,
                              "line": 25
                            }
                          }
                        },
                        "range": [
                          461,
                          470
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 25
                          },
                          "start": {
                            "column": 12,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      457,
                      471
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 25
                      },
                      "start": {
                        "column": 8,
                        "line": 25
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
                          "name": "x2",
                          "optional": false,
                          "range": [
                            484,
                            486
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 26
                            },
                            "start": {
                              "column": 12,
                              "line": 26
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "range": [
                                  503,
                                  510
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 27
                                  }
                                }
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "ArrowFunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
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
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "range": [
                                                566,
                                                571
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 37,
                                                  "line": 28
                                                },
                                                "start": {
                                                  "column": 32,
                                                  "line": 28
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
                                              557,
                                              565
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 31,
                                                "line": 28
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 28
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            557,
                                            572
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 38,
                                              "line": 28
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 28
                                            }
                                          }
                                        },
                                        "range": [
                                          550,
                                          573
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 39,
                                            "line": 28
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 28
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      532,
                                      587
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 29
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 27
                                      }
                                    }
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "range": [
                                    526,
                                    587
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 29
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 27
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
                                    "name": "callback",
                                    "optional": false,
                                    "range": [
                                      513,
                                      521
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 27
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 27
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  512,
                                  587
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 29
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 27
                                  }
                                }
                              },
                              "range": [
                                503,
                                587
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 29
                                },
                                "start": {
                                  "column": 12,
                                  "line": 27
                                }
                              }
                            }
                          ],
                          "range": [
                            489,
                            597
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 30
                            },
                            "start": {
                              "column": 17,
                              "line": 26
                            }
                          }
                        },
                        "range": [
                          484,
                          597
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 30
                          },
                          "start": {
                            "column": 12,
                            "line": 26
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      480,
                      597
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "raw": "10",
                      "value": 10,
                      "range": [
                        614,
                        616
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 32
                        },
                        "start": {
                          "column": 15,
                          "line": 32
                        }
                      }
                    },
                    "range": [
                      607,
                      617
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 32
                      },
                      "start": {
                        "column": 8,
                        "line": 32
                      }
                    }
                  }
                ],
                "range": [
                  447,
                  623
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 33
                  },
                  "start": {
                    "column": 20,
                    "line": 24
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 24
                  },
                  "start": {
                    "column": 11,
                    "line": 24
                  }
                },
                "range": [
                  438,
                  446
                ],
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "range": [
                    440,
                    446
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 24
                    },
                    "start": {
                      "column": 13,
                      "line": 24
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 33
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              }
            },
            "range": [
              431,
              623
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                632,
                633
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 34
                },
                "start": {
                  "column": 8,
                  "line": 34
                }
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                633,
                804
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
                          "name": "_this",
                          "optional": false,
                          "range": [
                            661,
                            666
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 35
                            },
                            "start": {
                              "column": 12,
                              "line": 35
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "2",
                          "value": 2,
                          "range": [
                            669,
                            670
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 35
                            },
                            "start": {
                              "column": 20,
                              "line": 35
                            }
                          }
                        },
                        "range": [
                          661,
                          670
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 35
                          },
                          "start": {
                            "column": 12,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      657,
                      671
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 35
                      },
                      "start": {
                        "column": 8,
                        "line": 35
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
                          "name": "x2",
                          "optional": false,
                          "range": [
                            684,
                            686
                          ],
                          "loc": {
                            "end": {
                              "column": 14,
                              "line": 36
                            },
                            "start": {
                              "column": 12,
                              "line": 36
                            }
                          }
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "doStuff",
                                "optional": false,
                                "range": [
                                  703,
                                  710
                                ],
                                "loc": {
                                  "end": {
                                    "column": 19,
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
                                "type": "ArrowFunctionExpression",
                                "async": false,
                                "body": {
                                  "type": "ArrowFunctionExpression",
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
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "_this",
                                              "optional": false,
                                              "range": [
                                                766,
                                                771
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 37,
                                                  "line": 38
                                                },
                                                "start": {
                                                  "column": 32,
                                                  "line": 38
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
                                              757,
                                              765
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 31,
                                                "line": 38
                                              },
                                              "start": {
                                                "column": 23,
                                                "line": 38
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "range": [
                                            757,
                                            772
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 38,
                                              "line": 38
                                            },
                                            "start": {
                                              "column": 23,
                                              "line": 38
                                            }
                                          }
                                        },
                                        "range": [
                                          750,
                                          773
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 39,
                                            "line": 38
                                          },
                                          "start": {
                                            "column": 16,
                                            "line": 38
                                          }
                                        }
                                      }
                                    ],
                                    "range": [
                                      732,
                                      787
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 13,
                                        "line": 39
                                      },
                                      "start": {
                                        "column": 41,
                                        "line": 37
                                      }
                                    }
                                  },
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "range": [
                                    726,
                                    787
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 39
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 37
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
                                    "name": "callback",
                                    "optional": false,
                                    "range": [
                                      713,
                                      721
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 30,
                                        "line": 37
                                      },
                                      "start": {
                                        "column": 22,
                                        "line": 37
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  712,
                                  787
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 39
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 37
                                  }
                                }
                              },
                              "range": [
                                703,
                                787
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 39
                                },
                                "start": {
                                  "column": 12,
                                  "line": 37
                                }
                              }
                            }
                          ],
                          "range": [
                            689,
                            797
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 40
                            },
                            "start": {
                              "column": 17,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          684,
                          797
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 40
                          },
                          "start": {
                            "column": 12,
                            "line": 36
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      680,
                      797
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 40
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  }
                ],
                "range": [
                  647,
                  804
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 42
                  },
                  "start": {
                    "column": 23,
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
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 21,
                        "line": 34
                      },
                      "start": {
                        "column": 13,
                        "line": 34
                      }
                    },
                    "range": [
                      637,
                      645
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        639,
                        645
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 34
                        },
                        "start": {
                          "column": 15,
                          "line": 34
                        }
                      }
                    }
                  },
                  "range": [
                    634,
                    645
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 34
                    },
                    "start": {
                      "column": 10,
                      "line": 34
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 9,
                  "line": 34
                }
              }
            },
            "range": [
              628,
              804
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 13,
            "line": 23
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "class2",
        "optional": false,
        "range": [
          418,
          424
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 23
          },
          "start": {
            "column": 6,
            "line": 23
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        412,
        806
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
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
      "column": 1,
      "line": 43
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
