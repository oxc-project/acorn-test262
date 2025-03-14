__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    36,
    640
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          47,
          50
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 14,
            "line": 2
          },
          "start": {
            "column": 11,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          42,
          46
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 2
          },
          "start": {
            "column": 6,
            "line": 2
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        36,
        50
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          72,
          256
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                78,
                89
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                89,
                116
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          102,
                          107
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 5
                          },
                          "start": {
                            "column": 8,
                            "line": 5
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        102,
                        109
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 5
                        },
                        "start": {
                          "column": 8,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      102,
                      110
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
                  }
                ],
                "range": [
                  92,
                  116
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 18,
                    "line": 4
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
                  "line": 6
                },
                "start": {
                  "column": 15,
                  "line": 4
                }
              }
            },
            "range": [
              78,
              116
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 6
              },
              "start": {
                "column": 4,
                "line": 4
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
              "name": "foo",
              "optional": false,
              "range": [
                122,
                125
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 8
                },
                "start": {
                  "column": 4,
                  "line": 8
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
                125,
                208
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
                            142,
                            147
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 9
                            },
                            "start": {
                              "column": 12,
                              "line": 9
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            150,
                            154
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
                        "range": [
                          142,
                          154
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 9
                          },
                          "start": {
                            "column": 12,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      138,
                      155
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 9
                      },
                      "start": {
                        "column": 8,
                        "line": 9
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_this",
                              "optional": false,
                              "range": [
                                185,
                                190
                              ],
                              "loc": {
                                "end": {
                                  "column": 17,
                                  "line": 12
                                },
                                "start": {
                                  "column": 12,
                                  "line": 12
                                }
                              }
                            },
                            "range": [
                              185,
                              191
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 12
                              },
                              "start": {
                                "column": 12,
                                "line": 12
                              }
                            }
                          }
                        ],
                        "range": [
                          171,
                          201
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 13
                          },
                          "start": {
                            "column": 14,
                            "line": 11
                          }
                        }
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        165,
                        201
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 11
                        }
                      }
                    },
                    "range": [
                      165,
                      202
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 11
                      }
                    }
                  }
                ],
                "range": [
                  128,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 8
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
                  "column": 7,
                  "line": 8
                }
              }
            },
            "range": [
              122,
              208
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 8
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
              "name": "bar",
              "optional": false,
              "range": [
                214,
                217
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
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
                217,
                254
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
                          "name": "_super",
                          "optional": false,
                          "range": [
                            234,
                            240
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 17
                            },
                            "start": {
                              "column": 12,
                              "line": 17
                            }
                          }
                        },
                        "init": {
                          "type": "ThisExpression",
                          "range": [
                            243,
                            247
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 17
                            },
                            "start": {
                              "column": 21,
                              "line": 17
                            }
                          }
                        },
                        "range": [
                          234,
                          247
                        ],
                        "loc": {
                          "end": {
                            "column": 25,
                            "line": 17
                          },
                          "start": {
                            "column": 12,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      230,
                      248
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 17
                      },
                      "start": {
                        "column": 8,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  220,
                  254
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 10,
                    "line": 16
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
                  "line": 18
                },
                "start": {
                  "column": 7,
                  "line": 16
                }
              }
            },
            "range": [
              214,
              254
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 21,
            "line": 3
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "range": [
          57,
          58
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 3
          },
          "start": {
            "column": 6,
            "line": 3
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          67,
          71
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
          }
        }
      },
      "range": [
        51,
        256
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
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
        "body": [],
        "range": [
          311,
          314
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 24
          },
          "start": {
            "column": 29,
            "line": 23
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
          291,
          293
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 23
          },
          "start": {
            "column": 9,
            "line": 23
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arguments",
          "optional": false,
          "range": [
            294,
            303
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 23
            },
            "start": {
              "column": 12,
              "line": 23
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "range": [
              308,
              309
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 23
              },
              "start": {
                "column": 26,
                "line": 23
              }
            }
          },
          "decorators": [],
          "optional": false,
          "range": [
            305,
            309
          ],
          "loc": {
            "end": {
              "column": 27,
              "line": 23
            },
            "start": {
              "column": 23,
              "line": 23
            }
          }
        }
      ],
      "range": [
        282,
        314
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          338,
          469
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "range": [
                344,
                355
              ],
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "loc": {
                "end": {
                  "column": 15,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                355,
                467
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "range": [
                          368,
                          373
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 28
                          },
                          "start": {
                            "column": 8,
                            "line": 28
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        368,
                        375
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 28
                        },
                        "start": {
                          "column": 8,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      368,
                      376
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 28
                      },
                      "start": {
                        "column": 8,
                        "line": 28
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
                          "name": "_newTarget",
                          "optional": false,
                          "range": [
                            389,
                            399
                          ],
                          "loc": {
                            "end": {
                              "column": 22,
                              "line": 29
                            },
                            "start": {
                              "column": 12,
                              "line": 29
                            }
                          }
                        },
                        "init": {
                          "type": "Literal",
                          "raw": "\"\"",
                          "value": "",
                          "range": [
                            402,
                            404
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 29
                            },
                            "start": {
                              "column": 25,
                              "line": 29
                            }
                          }
                        },
                        "range": [
                          389,
                          404
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 29
                          },
                          "start": {
                            "column": 12,
                            "line": 29
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      385,
                      405
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 29
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
                          "name": "t",
                          "optional": false,
                          "range": [
                            418,
                            419
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 30
                            },
                            "start": {
                              "column": 12,
                              "line": 30
                            }
                          }
                        },
                        "init": {
                          "type": "MetaProperty",
                          "meta": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "new",
                            "optional": false,
                            "range": [
                              422,
                              425
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 30
                              },
                              "start": {
                                "column": 16,
                                "line": 30
                              }
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "range": [
                              426,
                              432
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 30
                              },
                              "start": {
                                "column": 20,
                                "line": 30
                              }
                            }
                          },
                          "range": [
                            422,
                            432
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 30
                            },
                            "start": {
                              "column": 16,
                              "line": 30
                            }
                          }
                        },
                        "range": [
                          418,
                          432
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 30
                          },
                          "start": {
                            "column": 12,
                            "line": 30
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      414,
                      433
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 30
                      },
                      "start": {
                        "column": 8,
                        "line": 30
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
                          "range": [
                            446,
                            447
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 31
                            },
                            "start": {
                              "column": 12,
                              "line": 31
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_newTarget",
                          "optional": false,
                          "range": [
                            450,
                            460
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 31
                            },
                            "start": {
                              "column": 16,
                              "line": 31
                            }
                          }
                        },
                        "range": [
                          446,
                          460
                        ],
                        "loc": {
                          "end": {
                            "column": 26,
                            "line": 31
                          },
                          "start": {
                            "column": 12,
                            "line": 31
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var",
                    "range": [
                      442,
                      461
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 31
                      },
                      "start": {
                        "column": 8,
                        "line": 31
                      }
                    }
                  }
                ],
                "range": [
                  358,
                  467
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 32
                  },
                  "start": {
                    "column": 18,
                    "line": 27
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
                  "line": 32
                },
                "start": {
                  "column": 15,
                  "line": 27
                }
              }
            },
            "range": [
              344,
              467
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 33
          },
          "start": {
            "column": 22,
            "line": 26
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "range": [
          322,
          324
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 26
          },
          "start": {
            "column": 6,
            "line": 26
          }
        }
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "range": [
          333,
          337
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 26
          },
          "start": {
            "column": 17,
            "line": 26
          }
        }
      },
      "range": [
        316,
        469
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 26
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
            "name": "Promise",
            "optional": false,
            "range": [
              496,
              503
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
          "init": {
            "type": "Literal",
            "raw": "null",
            "value": null,
            "range": [
              506,
              510
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 37
              },
              "start": {
                "column": 14,
                "line": 37
              }
            }
          },
          "range": [
            496,
            510
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
      "declare": false,
      "kind": "var",
      "range": [
        492,
        511
      ],
      "loc": {
        "end": {
          "column": 19,
          "line": 37
        },
        "start": {
          "column": 0,
          "line": 37
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
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                545,
                546
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 39
                },
                "start": {
                  "column": 11,
                  "line": 39
                }
              }
            },
            "range": [
              538,
              547
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 39
              }
            }
          }
        ],
        "range": [
          532,
          549
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 40
          },
          "start": {
            "column": 20,
            "line": 38
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
          527,
          529
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 38
          },
          "start": {
            "column": 15,
            "line": 38
          }
        }
      },
      "params": [],
      "range": [
        512,
        549
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 38
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
            "name": "require",
            "optional": false,
            "range": [
              576,
              583
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
          "init": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              586,
              587
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 44
              },
              "start": {
                "column": 14,
                "line": 44
              }
            }
          },
          "range": [
            576,
            587
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        572,
        588
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
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
            "name": "exports",
            "optional": false,
            "range": [
              614,
              621
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
          "init": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              624,
              625
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 47
              },
              "start": {
                "column": 14,
                "line": 47
              }
            }
          },
          "range": [
            614,
            625
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
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        610,
        626
      ],
      "loc": {
        "end": {
          "column": 16,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        629,
        640
      ],
      "loc": {
        "end": {
          "column": 11,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 11,
      "line": 50
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
