__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1199
  ],
  "body": [
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getStringOrNumber",
        "optional": false,
        "range": [
          17,
          34
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 1
          },
          "start": {
            "column": 17,
            "line": 1
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 53,
            "line": 1
          },
          "start": {
            "column": 36,
            "line": 1
          }
        },
        "range": [
          36,
          53
        ],
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "range": [
                38,
                44
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 1
                },
                "start": {
                  "column": 38,
                  "line": 1
                }
              }
            },
            {
              "type": "TSNumberKeyword",
              "range": [
                47,
                53
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 1
                },
                "start": {
                  "column": 47,
                  "line": 1
                }
              }
            }
          ],
          "range": [
            38,
            53
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 1
            },
            "start": {
              "column": 38,
              "line": 1
            }
          }
        }
      },
      "range": [
        0,
        54
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 1
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
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    80,
                    81
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "range": [
                      84,
                      101
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 4
                      },
                      "start": {
                        "column": 12,
                        "line": 4
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    84,
                    103
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 4
                    },
                    "start": {
                      "column": 12,
                      "line": 4
                    }
                  }
                },
                "range": [
                  80,
                  103
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 4
                  },
                  "start": {
                    "column": 8,
                    "line": 4
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              76,
              104
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "range": [
                          150,
                          151
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 6
                          },
                          "start": {
                            "column": 12,
                            "line": 6
                          }
                        }
                      },
                      "init": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "FunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "range": [
                                      186,
                                      187
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 7
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
                                      188,
                                      194
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 27,
                                        "line": 7
                                      },
                                      "start": {
                                        "column": 21,
                                        "line": 7
                                      }
                                    }
                                  },
                                  "range": [
                                    186,
                                    194
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 7
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 7
                                    }
                                  }
                                },
                                "range": [
                                  179,
                                  195
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
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
                              165,
                              205
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 8
                              },
                              "start": {
                                "column": 27,
                                "line": 6
                              }
                            }
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            154,
                            205
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 8
                            },
                            "start": {
                              "column": 16,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          154,
                          207
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 8
                          },
                          "start": {
                            "column": 16,
                            "line": 6
                          }
                        }
                      },
                      "range": [
                        150,
                        207
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 8
                        },
                        "start": {
                          "column": 12,
                          "line": 6
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    146,
                    208
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                136,
                214
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 31,
                  "line": 5
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    120,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 5
                    },
                    "start": {
                      "column": 15,
                      "line": 5
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  113,
                  121
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 5
                  },
                  "start": {
                    "column": 8,
                    "line": 5
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  126,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              "range": [
                113,
                134
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 5
                },
                "start": {
                  "column": 8,
                  "line": 5
                }
              }
            },
            "range": [
              109,
              214
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 5
              }
            }
          }
        ],
        "range": [
          70,
          216
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 10
          },
          "start": {
            "column": 14,
            "line": 3
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
          65,
          67
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [],
      "range": [
        56,
        216
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 10
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    242,
                    243
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 13
                    },
                    "start": {
                      "column": 8,
                      "line": 13
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "range": [
                      246,
                      263
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 13
                      },
                      "start": {
                        "column": 12,
                        "line": 13
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    246,
                    265
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 13
                    },
                    "start": {
                      "column": 12,
                      "line": 13
                    }
                  }
                },
                "range": [
                  242,
                  265
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 13
                  },
                  "start": {
                    "column": 8,
                    "line": 13
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              238,
              266
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "range": [
                          312,
                          313
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 15
                          },
                          "start": {
                            "column": 12,
                            "line": 15
                          }
                        }
                      },
                      "init": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "FunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "range": [
                                      349,
                                      350
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 20,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 19,
                                        "line": 16
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
                                      351,
                                      357
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
                                  "range": [
                                    349,
                                    357
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 27,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 19,
                                      "line": 16
                                    }
                                  }
                                },
                                "range": [
                                  342,
                                  358
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
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
                              328,
                              368
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 17
                              },
                              "start": {
                                "column": 28,
                                "line": 15
                              }
                            }
                          },
                          "declare": false,
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            317,
                            368
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 17
                            },
                            "start": {
                              "column": 17,
                              "line": 15
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          316,
                          371
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 17
                          },
                          "start": {
                            "column": 16,
                            "line": 15
                          }
                        }
                      },
                      "range": [
                        312,
                        371
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 17
                        },
                        "start": {
                          "column": 12,
                          "line": 15
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let",
                  "range": [
                    308,
                    372
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 17
                    },
                    "start": {
                      "column": 8,
                      "line": 15
                    }
                  }
                }
              ],
              "range": [
                298,
                378
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 18
                },
                "start": {
                  "column": 31,
                  "line": 14
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    282,
                    283
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 14
                    },
                    "start": {
                      "column": 15,
                      "line": 14
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  275,
                  283
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  288,
                  296
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 14
                  },
                  "start": {
                    "column": 21,
                    "line": 14
                  }
                }
              },
              "range": [
                275,
                296
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              }
            },
            "range": [
              271,
              378
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          }
        ],
        "range": [
          232,
          380
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 14,
            "line": 12
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          227,
          229
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 12
          },
          "start": {
            "column": 9,
            "line": 12
          }
        }
      },
      "params": [],
      "range": [
        218,
        380
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 12
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
                  "name": "x",
                  "optional": false,
                  "range": [
                    406,
                    407
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 22
                    },
                    "start": {
                      "column": 8,
                      "line": 22
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "range": [
                      410,
                      427
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 22
                      },
                      "start": {
                        "column": 12,
                        "line": 22
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    410,
                    429
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 22
                    },
                    "start": {
                      "column": 12,
                      "line": 22
                    }
                  }
                },
                "range": [
                  406,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 22
                  },
                  "start": {
                    "column": 8,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              402,
              430
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 23
                      },
                      "start": {
                        "column": 9,
                        "line": 23
                      }
                    },
                    "range": [
                      440,
                      448
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        442,
                        448
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 23
                        },
                        "start": {
                          "column": 11,
                          "line": 23
                        }
                      }
                    }
                  },
                  "range": [
                    439,
                    448
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 23
                    },
                    "start": {
                      "column": 8,
                      "line": 23
                    }
                  }
                },
                "init": null,
                "range": [
                  439,
                  448
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 23
                  },
                  "start": {
                    "column": 8,
                    "line": 23
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              435,
              449
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
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
                  "type": "VariableDeclaration",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "range": [
                          495,
                          496
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 25
                          },
                          "start": {
                            "column": 12,
                            "line": 25
                          }
                        }
                      },
                      "init": {
                        "type": "CallExpression",
                        "arguments": [
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "range": [
                                523,
                                524
                              ],
                              "loc": {
                                "end": {
                                  "column": 41,
                                  "line": 25
                                },
                                "start": {
                                  "column": 40,
                                  "line": 25
                                }
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "raw": "1",
                              "value": 1,
                              "range": [
                                527,
                                528
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 25
                                },
                                "start": {
                                  "column": 44,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              523,
                              528
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 25
                              },
                              "start": {
                                "column": 40,
                                "line": 25
                              }
                            }
                          }
                        ],
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "async": false,
                          "body": {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "range": [
                                    505,
                                    506
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 23,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 25
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
                                    507,
                                    513
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 30,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 24,
                                      "line": 25
                                    }
                                  }
                                },
                                "range": [
                                  505,
                                  513
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 25
                                  }
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "range": [
                                  516,
                                  517
                                ],
                                "loc": {
                                  "end": {
                                    "column": 34,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 25
                                  }
                                }
                              },
                              "range": [
                                505,
                                517
                              ],
                              "loc": {
                                "end": {
                                  "column": 34,
                                  "line": 25
                                },
                                "start": {
                                  "column": 22,
                                  "line": 25
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "range": [
                                520,
                                521
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 25
                                },
                                "start": {
                                  "column": 37,
                                  "line": 25
                                }
                              }
                            },
                            "range": [
                              505,
                              521
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 25
                              },
                              "start": {
                                "column": 22,
                                "line": 25
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
                              "name": "z",
                              "optional": false,
                              "range": [
                                500,
                                501
                              ],
                              "loc": {
                                "end": {
                                  "column": 18,
                                  "line": 25
                                },
                                "start": {
                                  "column": 17,
                                  "line": 25
                                }
                              }
                            }
                          ],
                          "range": [
                            500,
                            521
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 25
                            },
                            "start": {
                              "column": 17,
                              "line": 25
                            }
                          }
                        },
                        "optional": false,
                        "range": [
                          499,
                          529
                        ],
                        "loc": {
                          "end": {
                            "column": 46,
                            "line": 25
                          },
                          "start": {
                            "column": 16,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        495,
                        529
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
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
                  "kind": "let",
                  "range": [
                    491,
                    530
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 25
                    },
                    "start": {
                      "column": 8,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                481,
                536
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 26
                },
                "start": {
                  "column": 31,
                  "line": 24
                }
              }
            },
            "test": {
              "type": "BinaryExpression",
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    465,
                    466
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 24
                    },
                    "start": {
                      "column": 15,
                      "line": 24
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true,
                "range": [
                  458,
                  466
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 24
                  },
                  "start": {
                    "column": 8,
                    "line": 24
                  }
                }
              },
              "right": {
                "type": "Literal",
                "raw": "\"string\"",
                "value": "string",
                "range": [
                  471,
                  479
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 24
                  },
                  "start": {
                    "column": 21,
                    "line": 24
                  }
                }
              },
              "range": [
                458,
                479
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 24
                },
                "start": {
                  "column": 8,
                  "line": 24
                }
              }
            },
            "range": [
              454,
              536
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          }
        ],
        "range": [
          396,
          538
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 14,
            "line": 21
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          391,
          393
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
      "params": [],
      "range": [
        382,
        538
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
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
            "name": "maybeNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 35,
                  "line": 31
                },
                "start": {
                  "column": 15,
                  "line": 31
                }
              },
              "range": [
                577,
                597
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      579,
                      585
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 31
                      },
                      "start": {
                        "column": 17,
                        "line": 31
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      588,
                      597
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 31
                      },
                      "start": {
                        "column": 26,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  579,
                  597
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 31
                  },
                  "start": {
                    "column": 17,
                    "line": 31
                  }
                }
              }
            },
            "range": [
              566,
              597
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          "init": null,
          "range": [
            566,
            597
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        562,
        598
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "maybeNumber",
                    "optional": false,
                    "range": [
                      618,
                      629
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 33
                      },
                      "start": {
                        "column": 4,
                        "line": 33
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      632,
                      633
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 33
                      },
                      "start": {
                        "column": 18,
                        "line": 33
                      }
                    }
                  },
                  "range": [
                    618,
                    633
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 33
                    },
                    "start": {
                      "column": 4,
                      "line": 33
                    }
                  }
                },
                "range": [
                  618,
                  634
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 33
                  },
                  "start": {
                    "column": 4,
                    "line": 33
                  }
                }
              }
            ],
            "range": [
              612,
              636
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 34
              },
              "start": {
                "column": 13,
                "line": 32
              }
            }
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            600,
            636
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 34
            },
            "start": {
              "column": 1,
              "line": 32
            }
          }
        },
        "optional": false,
        "range": [
          599,
          639
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 34
          },
          "start": {
            "column": 0,
            "line": 32
          }
        }
      },
      "range": [
        599,
        640
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeNumber",
          "optional": false,
          "range": [
            641,
            652
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 35
            },
            "start": {
              "column": 0,
              "line": 35
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          641,
          654
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 35
          },
          "start": {
            "column": 0,
            "line": 35
          }
        }
      },
      "range": [
        641,
        655
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "maybeNumber",
                "optional": false,
                "range": [
                  693,
                  704
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
              "operator": "++",
              "prefix": false,
              "range": [
                693,
                706
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 37
                },
                "start": {
                  "column": 4,
                  "line": 37
                }
              }
            },
            "range": [
              693,
              707
            ],
            "loc": {
              "end": {
                "column": 18,
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
          687,
          709
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 38
          },
          "start": {
            "column": 31,
            "line": 36
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "!==",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeNumber",
          "optional": false,
          "range": [
            660,
            671
          ],
          "loc": {
            "end": {
              "column": 15,
              "line": 36
            },
            "start": {
              "column": 4,
              "line": 36
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "range": [
            676,
            685
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 36
            },
            "start": {
              "column": 20,
              "line": 36
            }
          }
        },
        "range": [
          660,
          685
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 36
          },
          "start": {
            "column": 4,
            "line": 36
          }
        }
      },
      "range": [
        656,
        709
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
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "definite": false,
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 40
                },
                "start": {
                  "column": 8,
                  "line": 40
                }
              },
              "range": [
                719,
                739
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      721,
                      727
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 40
                      },
                      "start": {
                        "column": 10,
                        "line": 40
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      730,
                      739
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 40
                      },
                      "start": {
                        "column": 19,
                        "line": 40
                      }
                    }
                  }
                ],
                "range": [
                  721,
                  739
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 40
                  },
                  "start": {
                    "column": 10,
                    "line": 40
                  }
                }
              }
            },
            "range": [
              715,
              739
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          "init": null,
          "range": [
            715,
            739
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 40
            },
            "start": {
              "column": 4,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        711,
        740
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
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
                  "raw": "'Test is not defined'",
                  "value": "Test is not defined",
                  "range": [
                    774,
                    795
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 42
                    },
                    "start": {
                      "column": 20,
                      "line": 42
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
                  768,
                  773
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 42
                  },
                  "start": {
                    "column": 14,
                    "line": 42
                  }
                }
              },
              "range": [
                764,
                796
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 42
                },
                "start": {
                  "column": 10,
                  "line": 42
                }
              }
            },
            "range": [
              758,
              797
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          }
        ],
        "range": [
          752,
          799
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 43
          },
          "start": {
            "column": 11,
            "line": 41
          }
        }
      },
      "test": {
        "type": "UnaryExpression",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "range": [
            746,
            750
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 41
            },
            "start": {
              "column": 5,
              "line": 41
            }
          }
        },
        "operator": "!",
        "prefix": true,
        "range": [
          745,
          750
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 41
          },
          "start": {
            "column": 4,
            "line": 41
          }
        }
      },
      "range": [
        741,
        799
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 41
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [],
        "callee": {
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
                      "raw": "1",
                      "value": 1,
                      "range": [
                        824,
                        825
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 45
                        },
                        "start": {
                          "column": 15,
                          "line": 45
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
                      "name": "test",
                      "optional": false,
                      "range": [
                        813,
                        817
                      ],
                      "loc": {
                        "end": {
                          "column": 8,
                          "line": 45
                        },
                        "start": {
                          "column": 4,
                          "line": 45
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "slice",
                      "optional": false,
                      "range": [
                        818,
                        823
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 45
                        },
                        "start": {
                          "column": 9,
                          "line": 45
                        }
                      }
                    },
                    "range": [
                      813,
                      823
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 45
                      },
                      "start": {
                        "column": 4,
                        "line": 45
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    813,
                    826
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 45
                    },
                    "start": {
                      "column": 4,
                      "line": 45
                    }
                  }
                },
                "range": [
                  813,
                  827
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 45
                  },
                  "start": {
                    "column": 4,
                    "line": 45
                  }
                }
              }
            ],
            "range": [
              807,
              841
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 46
              },
              "start": {
                "column": 7,
                "line": 44
              }
            }
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            801,
            841
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 46
            },
            "start": {
              "column": 1,
              "line": 44
            }
          }
        },
        "optional": false,
        "range": [
          800,
          844
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 46
          },
          "start": {
            "column": 0,
            "line": 44
          }
        }
      },
      "range": [
        800,
        845
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 44
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 51
                      },
                      "start": {
                        "column": 9,
                        "line": 51
                      }
                    },
                    "range": [
                      894,
                      902
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        896,
                        902
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 51
                        },
                        "start": {
                          "column": 11,
                          "line": 51
                        }
                      }
                    }
                  },
                  "range": [
                    893,
                    902
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 51
                    },
                    "start": {
                      "column": 8,
                      "line": 51
                    }
                  }
                },
                "init": null,
                "range": [
                  893,
                  902
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 51
                  },
                  "start": {
                    "column": 8,
                    "line": 51
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              889,
              903
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 51
              },
              "start": {
                "column": 4,
                "line": 51
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "FunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "range": [
                            930,
                            931
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 53
                            },
                            "start": {
                              "column": 8,
                              "line": 53
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            934,
                            935
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 53
                            },
                            "start": {
                              "column": 12,
                              "line": 53
                            }
                          }
                        },
                        "range": [
                          930,
                          935
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 53
                          },
                          "start": {
                            "column": 8,
                            "line": 53
                          }
                        }
                      },
                      "range": [
                        930,
                        936
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 53
                        },
                        "start": {
                          "column": 8,
                          "line": 53
                        }
                      }
                    }
                  ],
                  "range": [
                    920,
                    942
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 54
                    },
                    "start": {
                      "column": 16,
                      "line": 52
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  909,
                  942
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 54
                  },
                  "start": {
                    "column": 5,
                    "line": 52
                  }
                }
              },
              "optional": false,
              "range": [
                908,
                945
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 54
                },
                "start": {
                  "column": 4,
                  "line": 52
                }
              }
            },
            "range": [
              908,
              946
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "range": [
                951,
                952
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
                }
              }
            },
            "range": [
              951,
              953
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          }
        ],
        "range": [
          883,
          955
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 14,
            "line": 50
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          878,
          880
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 50
          },
          "start": {
            "column": 9,
            "line": 50
          }
        }
      },
      "params": [],
      "range": [
        869,
        955
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 50
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 59
                      },
                      "start": {
                        "column": 9,
                        "line": 59
                      }
                    },
                    "range": [
                      982,
                      990
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        984,
                        990
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 59
                        },
                        "start": {
                          "column": 11,
                          "line": 59
                        }
                      }
                    }
                  },
                  "range": [
                    981,
                    990
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 59
                    },
                    "start": {
                      "column": 8,
                      "line": 59
                    }
                  }
                },
                "init": null,
                "range": [
                  981,
                  990
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 59
                  },
                  "start": {
                    "column": 8,
                    "line": 59
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              977,
              991
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "FunctionExpression",
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "YieldExpression",
                        "argument": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            1025,
                            1026
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 61
                            },
                            "start": {
                              "column": 14,
                              "line": 61
                            }
                          }
                        },
                        "delegate": false,
                        "range": [
                          1019,
                          1026
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 61
                          },
                          "start": {
                            "column": 8,
                            "line": 61
                          }
                        }
                      },
                      "range": [
                        1019,
                        1027
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 61
                        },
                        "start": {
                          "column": 8,
                          "line": 61
                        }
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "range": [
                            1036,
                            1037
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 62
                            },
                            "start": {
                              "column": 8,
                              "line": 62
                            }
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "raw": "1",
                          "value": 1,
                          "range": [
                            1040,
                            1041
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 62
                            },
                            "start": {
                              "column": 12,
                              "line": 62
                            }
                          }
                        },
                        "range": [
                          1036,
                          1041
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 62
                          },
                          "start": {
                            "column": 8,
                            "line": 62
                          }
                        }
                      },
                      "range": [
                        1036,
                        1042
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 62
                        },
                        "start": {
                          "column": 8,
                          "line": 62
                        }
                      }
                    }
                  ],
                  "range": [
                    1009,
                    1048
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 63
                    },
                    "start": {
                      "column": 17,
                      "line": 60
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": true,
                "id": null,
                "params": [],
                "range": [
                  997,
                  1048
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 63
                  },
                  "start": {
                    "column": 5,
                    "line": 60
                  }
                }
              },
              "optional": false,
              "range": [
                996,
                1051
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 63
                },
                "start": {
                  "column": 4,
                  "line": 60
                }
              }
            },
            "range": [
              996,
              1052
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "range": [
                1057,
                1058
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 64
                },
                "start": {
                  "column": 4,
                  "line": 64
                }
              }
            },
            "range": [
              1057,
              1059
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 64
              },
              "start": {
                "column": 4,
                "line": 64
              }
            }
          }
        ],
        "range": [
          971,
          1080
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 65
          },
          "start": {
            "column": 14,
            "line": 58
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          966,
          968
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 58
          },
          "start": {
            "column": 9,
            "line": 58
          }
        }
      },
      "params": [],
      "range": [
        957,
        1080
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 65
        },
        "start": {
          "column": 0,
          "line": 58
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 68
                      },
                      "start": {
                        "column": 9,
                        "line": 68
                      }
                    },
                    "range": [
                      1107,
                      1115
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        1109,
                        1115
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 68
                        },
                        "start": {
                          "column": 11,
                          "line": 68
                        }
                      }
                    }
                  },
                  "range": [
                    1106,
                    1115
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 68
                    },
                    "start": {
                      "column": 8,
                      "line": 68
                    }
                  }
                },
                "init": null,
                "range": [
                  1106,
                  1115
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 68
                  },
                  "start": {
                    "column": 8,
                    "line": 68
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1102,
              1116
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 68
              },
              "start": {
                "column": 4,
                "line": 68
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "FunctionExpression",
                "async": true,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "range": [
                            1149,
                            1150
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 70
                            },
                            "start": {
                              "column": 8,
                              "line": 70
                            }
                          }
                        },
                        "right": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              1159,
                              1160
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 70
                              },
                              "start": {
                                "column": 18,
                                "line": 70
                              }
                            }
                          },
                          "range": [
                            1153,
                            1160
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 70
                            },
                            "start": {
                              "column": 12,
                              "line": 70
                            }
                          }
                        },
                        "range": [
                          1149,
                          1160
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 70
                          },
                          "start": {
                            "column": 8,
                            "line": 70
                          }
                        }
                      },
                      "range": [
                        1149,
                        1161
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 70
                        },
                        "start": {
                          "column": 8,
                          "line": 70
                        }
                      }
                    }
                  ],
                  "range": [
                    1139,
                    1167
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 71
                    },
                    "start": {
                      "column": 22,
                      "line": 69
                    }
                  }
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "range": [
                  1122,
                  1167
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 71
                  },
                  "start": {
                    "column": 5,
                    "line": 69
                  }
                }
              },
              "optional": false,
              "range": [
                1121,
                1170
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 71
                },
                "start": {
                  "column": 4,
                  "line": 69
                }
              }
            },
            "range": [
              1121,
              1171
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 69
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "range": [
                1176,
                1177
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 72
                },
                "start": {
                  "column": 4,
                  "line": 72
                }
              }
            },
            "range": [
              1176,
              1178
            ],
            "loc": {
              "end": {
                "column": 6,
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
          1096,
          1199
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 73
          },
          "start": {
            "column": 14,
            "line": 67
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "range": [
          1091,
          1093
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 67
          },
          "start": {
            "column": 9,
            "line": 67
          }
        }
      },
      "params": [],
      "range": [
        1082,
        1199
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 67
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 73
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
