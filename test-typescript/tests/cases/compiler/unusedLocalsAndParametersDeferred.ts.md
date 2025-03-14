__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    2109
  ],
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "range": [
        0,
        11
      ],
      "loc": {
        "end": {
          "column": 11,
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
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  61,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 12,
                    "line": 4
                  },
                  "start": {
                    "column": 11,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "range": [
                61,
                64
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 4
                },
                "start": {
                  "column": 11,
                  "line": 4
                }
              }
            },
            "range": [
              54,
              65
            ],
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
          }
        ],
        "range": [
          48,
          67
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 35,
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
        "name": "defered",
        "optional": false,
        "range": [
          22,
          29
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 3
          },
          "start": {
            "column": 9,
            "line": 3
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 3
              },
              "start": {
                "column": 21,
                "line": 3
              }
            },
            "range": [
              34,
              43
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 26,
                    "line": 3
                  }
                },
                "range": [
                  39,
                  43
                ],
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      42,
                      43
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 3
                      },
                      "start": {
                        "column": 29,
                        "line": 3
                      }
                    }
                  },
                  "range": [
                    42,
                    43
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 3
                    },
                    "start": {
                      "column": 29,
                      "line": 3
                    }
                  }
                }
              },
              "range": [
                36,
                43
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 3
                },
                "start": {
                  "column": 23,
                  "line": 3
                }
              }
            }
          },
          "range": [
            33,
            43
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 3
            },
            "start": {
              "column": 20,
              "line": 3
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 34,
            "line": 3
          },
          "start": {
            "column": 31,
            "line": 3
          }
        },
        "range": [
          44,
          47
        ],
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              46,
              47
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
            46,
            47
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
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 3
          },
          "start": {
            "column": 16,
            "line": 3
          }
        },
        "range": [
          29,
          32
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
                30,
                31
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 3
                },
                "start": {
                  "column": 17,
                  "line": 3
                }
              }
            },
            "out": false,
            "range": [
              30,
              31
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 3
              },
              "start": {
                "column": 17,
                "line": 3
              }
            }
          }
        ]
      },
      "range": [
        13,
        67
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            146,
                            147
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 10
                            },
                            "start": {
                              "column": 8,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          146,
                          148
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
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
                      136,
                      154
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 11
                      },
                      "start": {
                        "column": 18,
                        "line": 9
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    130,
                    154
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 11
                    },
                    "start": {
                      "column": 12,
                      "line": 9
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "range": [
                  122,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 9
                  },
                  "start": {
                    "column": 4,
                    "line": 9
                  }
                }
              },
              "optional": false,
              "range": [
                122,
                155
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              122,
              156
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          }
        ],
        "range": [
          116,
          158
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 14,
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
        "name": "f",
        "optional": false,
        "range": [
          111,
          112
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 8
          },
          "start": {
            "column": 9,
            "line": 8
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "range": [
            113,
            114
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 8
            },
            "start": {
              "column": 11,
              "line": 8
            }
          }
        }
      ],
      "range": [
        102,
        158
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              161,
              162
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 13
              },
              "start": {
                "column": 2,
                "line": 13
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
            159,
            160
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 13
            },
            "start": {
              "column": 0,
              "line": 13
            }
          }
        },
        "optional": false,
        "range": [
          159,
          163
        ],
        "loc": {
          "end": {
            "column": 4,
            "line": 13
          },
          "start": {
            "column": 0,
            "line": 13
          }
        }
      },
      "range": [
        159,
        164
      ],
      "loc": {
        "end": {
          "column": 5,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "fexp",
            "optional": false,
            "range": [
              202,
              206
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
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
                                "name": "a",
                                "optional": false,
                                "range": [
                                  252,
                                  253
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                252,
                                254
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 18
                                },
                                "start": {
                                  "column": 8,
                                  "line": 18
                                }
                              }
                            }
                          ],
                          "range": [
                            242,
                            260
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 19
                            },
                            "start": {
                              "column": 18,
                              "line": 17
                            }
                          }
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          236,
                          260
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 19
                          },
                          "start": {
                            "column": 12,
                            "line": 17
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "defered",
                      "optional": false,
                      "range": [
                        228,
                        235
                      ],
                      "loc": {
                        "end": {
                          "column": 11,
                          "line": 17
                        },
                        "start": {
                          "column": 4,
                          "line": 17
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      228,
                      261
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 19
                      },
                      "start": {
                        "column": 4,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    228,
                    262
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 19
                    },
                    "start": {
                      "column": 4,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                222,
                264
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 20
                },
                "start": {
                  "column": 24,
                  "line": 16
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
                "name": "a",
                "optional": false,
                "range": [
                  219,
                  220
                ],
                "loc": {
                  "end": {
                    "column": 22,
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
              209,
              264
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 20
              },
              "start": {
                "column": 11,
                "line": 16
              }
            }
          },
          "range": [
            202,
            264
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 20
            },
            "start": {
              "column": 4,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        198,
        265
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 16
        }
      }
    },
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
              271,
              272
            ],
            "loc": {
              "end": {
                "column": 6,
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
          "name": "fexp",
          "optional": false,
          "range": [
            266,
            270
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
          266,
          273
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 21
          },
          "start": {
            "column": 0,
            "line": 21
          }
        }
      },
      "range": [
        266,
        274
      ],
      "loc": {
        "end": {
          "column": 8,
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
            "name": "farrow",
            "optional": false,
            "range": [
              307,
              313
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 24
              },
              "start": {
                "column": 4,
                "line": 24
              }
            }
          },
          "init": {
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
                                "name": "a",
                                "optional": false,
                                "range": [
                                  353,
                                  354
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 26
                                  }
                                }
                              },
                              "range": [
                                353,
                                355
                              ],
                              "loc": {
                                "end": {
                                  "column": 10,
                                  "line": 26
                                },
                                "start": {
                                  "column": 8,
                                  "line": 26
                                }
                              }
                            }
                          ],
                          "range": [
                            343,
                            361
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 27
                            },
                            "start": {
                              "column": 18,
                              "line": 25
                            }
                          }
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          337,
                          361
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 27
                          },
                          "start": {
                            "column": 12,
                            "line": 25
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "defered",
                      "optional": false,
                      "range": [
                        329,
                        336
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
                    "range": [
                      329,
                      362
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 27
                      },
                      "start": {
                        "column": 4,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    329,
                    363
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 27
                    },
                    "start": {
                      "column": 4,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                323,
                365
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 28
                },
                "start": {
                  "column": 20,
                  "line": 24
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
                "name": "a",
                "optional": false,
                "range": [
                  317,
                  318
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 24
                  },
                  "start": {
                    "column": 14,
                    "line": 24
                  }
                }
              }
            ],
            "range": [
              316,
              365
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 28
              },
              "start": {
                "column": 13,
                "line": 24
              }
            }
          },
          "range": [
            307,
            365
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 28
            },
            "start": {
              "column": 4,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        303,
        366
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 24
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              374,
              375
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 29
              },
              "start": {
                "column": 7,
                "line": 29
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "farrow",
          "optional": false,
          "range": [
            367,
            373
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 29
            },
            "start": {
              "column": 0,
              "line": 29
            }
          }
        },
        "optional": false,
        "range": [
          367,
          376
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 29
          },
          "start": {
            "column": 0,
            "line": 29
          }
        }
      },
      "range": [
        367,
        377
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 29
        },
        "start": {
          "column": 0,
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
            "name": "prop1",
            "optional": false,
            "range": [
              383,
              388
            ],
            "loc": {
              "end": {
                "column": 9,
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
            383,
            388
          ],
          "loc": {
            "end": {
              "column": 9,
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
        379,
        389
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          399,
          706
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "range": [
                440,
                446
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 35
                },
                "start": {
                  "column": 4,
                  "line": 35
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
                446,
                508
              ],
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
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    488,
                                    489
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 37
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 37
                                    }
                                  }
                                },
                                "range": [
                                  488,
                                  490
                                ],
                                "loc": {
                                  "end": {
                                    "column": 14,
                                    "line": 37
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 37
                                  }
                                }
                              }
                            ],
                            "range": [
                              474,
                              500
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 38
                              },
                              "start": {
                                "column": 22,
                                "line": 36
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            468,
                            500
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 38
                            },
                            "start": {
                              "column": 16,
                              "line": 36
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defered",
                        "optional": false,
                        "range": [
                          460,
                          467
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 36
                          },
                          "start": {
                            "column": 8,
                            "line": 36
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        460,
                        501
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 38
                        },
                        "start": {
                          "column": 8,
                          "line": 36
                        }
                      }
                    },
                    "range": [
                      460,
                      502
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 38
                      },
                      "start": {
                        "column": 8,
                        "line": 36
                      }
                    }
                  }
                ],
                "range": [
                  450,
                  508
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 39
                  },
                  "start": {
                    "column": 14,
                    "line": 35
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    447,
                    448
                  ],
                  "loc": {
                    "end": {
                      "column": 12,
                      "line": 35
                    },
                    "start": {
                      "column": 11,
                      "line": 35
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 39
                },
                "start": {
                  "column": 10,
                  "line": 35
                }
              }
            },
            "range": [
              440,
              508
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 39
              },
              "start": {
                "column": 4,
                "line": 35
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
              "name": "x",
              "optional": false,
              "range": [
                554,
                555
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 41
                },
                "start": {
                  "column": 8,
                  "line": 41
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
                555,
                625
              ],
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
                                  "name": "v",
                                  "optional": false,
                                  "range": [
                                    605,
                                    606
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 13,
                                      "line": 43
                                    },
                                    "start": {
                                      "column": 12,
                                      "line": 43
                                    }
                                  }
                                },
                                "range": [
                                  605,
                                  607
                                ],
                                "loc": {
                                  "end": {
                                    "column": 14,
                                    "line": 43
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 43
                                  }
                                }
                              }
                            ],
                            "range": [
                              591,
                              617
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 44
                              },
                              "start": {
                                "column": 22,
                                "line": 42
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            585,
                            617
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 44
                            },
                            "start": {
                              "column": 16,
                              "line": 42
                            }
                          }
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "defered",
                        "optional": false,
                        "range": [
                          577,
                          584
                        ],
                        "loc": {
                          "end": {
                            "column": 15,
                            "line": 42
                          },
                          "start": {
                            "column": 8,
                            "line": 42
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        577,
                        618
                      ],
                      "loc": {
                        "end": {
                          "column": 10,
                          "line": 44
                        },
                        "start": {
                          "column": 8,
                          "line": 42
                        }
                      }
                    },
                    "range": [
                      577,
                      619
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 44
                      },
                      "start": {
                        "column": 8,
                        "line": 42
                      }
                    }
                  }
                ],
                "range": [
                  567,
                  625
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 45
                  },
                  "start": {
                    "column": 21,
                    "line": 41
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 41
                      },
                      "start": {
                        "column": 11,
                        "line": 41
                      }
                    },
                    "range": [
                      557,
                      565
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        559,
                        565
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 41
                        },
                        "start": {
                          "column": 13,
                          "line": 41
                        }
                      }
                    }
                  },
                  "range": [
                    556,
                    565
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 41
                    },
                    "start": {
                      "column": 10,
                      "line": 41
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 45
                },
                "start": {
                  "column": 9,
                  "line": 41
                }
              }
            },
            "range": [
              550,
              625
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 41
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "range": [
                662,
                663
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 47
                },
                "start": {
                  "column": 4,
                  "line": 47
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "CallExpression",
              "arguments": [
                {
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
                          "name": "prop1",
                          "optional": false,
                          "range": [
                            690,
                            695
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 48
                            },
                            "start": {
                              "column": 8,
                              "line": 48
                            }
                          }
                        },
                        "range": [
                          690,
                          696
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 48
                          },
                          "start": {
                            "column": 8,
                            "line": 48
                          }
                        }
                      }
                    ],
                    "range": [
                      680,
                      702
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 49
                      },
                      "start": {
                        "column": 22,
                        "line": 47
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    674,
                    702
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 49
                    },
                    "start": {
                      "column": 16,
                      "line": 47
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "range": [
                  666,
                  673
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 47
                  },
                  "start": {
                    "column": 8,
                    "line": 47
                  }
                }
              },
              "optional": false,
              "range": [
                666,
                703
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 49
                },
                "start": {
                  "column": 8,
                  "line": 47
                }
              }
            },
            "range": [
              662,
              704
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 8,
            "line": 33
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
          397,
          398
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 33
          },
          "start": {
            "column": 6,
            "line": 33
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        391,
        706
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "range": [
            712,
            713
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 52
            },
            "start": {
              "column": 4,
              "line": 52
            }
          }
        },
        "range": [
          708,
          715
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 52
          },
          "start": {
            "column": 0,
            "line": 52
          }
        }
      },
      "range": [
        708,
        716
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 52
        },
        "start": {
          "column": 0,
          "line": 52
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
            "name": "prop2",
            "optional": false,
            "range": [
              722,
              727
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          },
          "init": null,
          "range": [
            722,
            727
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 54
            },
            "start": {
              "column": 4,
              "line": 54
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        718,
        728
      ],
      "loc": {
        "end": {
          "column": 10,
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
            "name": "E",
            "optional": false,
            "range": [
              734,
              735
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 56
              },
              "start": {
                "column": 4,
                "line": 56
              }
            }
          },
          "init": {
            "type": "ClassExpression",
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "range": [
                744,
                1051
              ],
              "body": [
                {
                  "type": "MethodDefinition",
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "range": [
                      785,
                      791
                    ],
                    "loc": {
                      "end": {
                        "column": 10,
                        "line": 58
                      },
                      "start": {
                        "column": 4,
                        "line": 58
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
                      791,
                      853
                    ],
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
                                        "name": "a",
                                        "optional": false,
                                        "range": [
                                          833,
                                          834
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 13,
                                            "line": 60
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 60
                                          }
                                        }
                                      },
                                      "range": [
                                        833,
                                        835
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 14,
                                          "line": 60
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 60
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    819,
                                    845
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 9,
                                      "line": 61
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 59
                                    }
                                  }
                                },
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [],
                                "range": [
                                  813,
                                  845
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 61
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 59
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "defered",
                              "optional": false,
                              "range": [
                                805,
                                812
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 59
                                },
                                "start": {
                                  "column": 8,
                                  "line": 59
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              805,
                              846
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 61
                              },
                              "start": {
                                "column": 8,
                                "line": 59
                              }
                            }
                          },
                          "range": [
                            805,
                            847
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 61
                            },
                            "start": {
                              "column": 8,
                              "line": 59
                            }
                          }
                        }
                      ],
                      "range": [
                        795,
                        853
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 62
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
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "range": [
                          792,
                          793
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 58
                          },
                          "start": {
                            "column": 11,
                            "line": 58
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 62
                      },
                      "start": {
                        "column": 10,
                        "line": 58
                      }
                    }
                  },
                  "range": [
                    785,
                    853
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 62
                    },
                    "start": {
                      "column": 4,
                      "line": 58
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
                    "name": "x",
                    "optional": false,
                    "range": [
                      899,
                      900
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 64
                      },
                      "start": {
                        "column": 8,
                        "line": 64
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
                      900,
                      970
                    ],
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
                                        "name": "v",
                                        "optional": false,
                                        "range": [
                                          950,
                                          951
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 13,
                                            "line": 66
                                          },
                                          "start": {
                                            "column": 12,
                                            "line": 66
                                          }
                                        }
                                      },
                                      "range": [
                                        950,
                                        952
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 14,
                                          "line": 66
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 66
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    936,
                                    962
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 9,
                                      "line": 67
                                    },
                                    "start": {
                                      "column": 22,
                                      "line": 65
                                    }
                                  }
                                },
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [],
                                "range": [
                                  930,
                                  962
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 67
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 65
                                  }
                                }
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "defered",
                              "optional": false,
                              "range": [
                                922,
                                929
                              ],
                              "loc": {
                                "end": {
                                  "column": 15,
                                  "line": 65
                                },
                                "start": {
                                  "column": 8,
                                  "line": 65
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              922,
                              963
                            ],
                            "loc": {
                              "end": {
                                "column": 10,
                                "line": 67
                              },
                              "start": {
                                "column": 8,
                                "line": 65
                              }
                            }
                          },
                          "range": [
                            922,
                            964
                          ],
                          "loc": {
                            "end": {
                              "column": 11,
                              "line": 67
                            },
                            "start": {
                              "column": 8,
                              "line": 65
                            }
                          }
                        }
                      ],
                      "range": [
                        912,
                        970
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 68
                        },
                        "start": {
                          "column": 21,
                          "line": 64
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 64
                            },
                            "start": {
                              "column": 11,
                              "line": 64
                            }
                          },
                          "range": [
                            902,
                            910
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              904,
                              910
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 64
                              },
                              "start": {
                                "column": 13,
                                "line": 64
                              }
                            }
                          }
                        },
                        "range": [
                          901,
                          910
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 64
                          },
                          "start": {
                            "column": 10,
                            "line": 64
                          }
                        }
                      }
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 68
                      },
                      "start": {
                        "column": 9,
                        "line": 64
                      }
                    }
                  },
                  "range": [
                    895,
                    970
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 68
                    },
                    "start": {
                      "column": 4,
                      "line": 64
                    }
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "range": [
                      1007,
                      1008
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 70
                      },
                      "start": {
                        "column": 4,
                        "line": 70
                      }
                    }
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "CallExpression",
                    "arguments": [
                      {
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
                                "name": "prop2",
                                "optional": false,
                                "range": [
                                  1035,
                                  1040
                                ],
                                "loc": {
                                  "end": {
                                    "column": 13,
                                    "line": 71
                                  },
                                  "start": {
                                    "column": 8,
                                    "line": 71
                                  }
                                }
                              },
                              "range": [
                                1035,
                                1041
                              ],
                              "loc": {
                                "end": {
                                  "column": 14,
                                  "line": 71
                                },
                                "start": {
                                  "column": 8,
                                  "line": 71
                                }
                              }
                            }
                          ],
                          "range": [
                            1025,
                            1047
                          ],
                          "loc": {
                            "end": {
                              "column": 5,
                              "line": 72
                            },
                            "start": {
                              "column": 22,
                              "line": 70
                            }
                          }
                        },
                        "expression": false,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "range": [
                          1019,
                          1047
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 72
                          },
                          "start": {
                            "column": 16,
                            "line": 70
                          }
                        }
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "defered",
                      "optional": false,
                      "range": [
                        1011,
                        1018
                      ],
                      "loc": {
                        "end": {
                          "column": 15,
                          "line": 70
                        },
                        "start": {
                          "column": 8,
                          "line": 70
                        }
                      }
                    },
                    "optional": false,
                    "range": [
                      1011,
                      1048
                    ],
                    "loc": {
                      "end": {
                        "column": 6,
                        "line": 72
                      },
                      "start": {
                        "column": 8,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    1007,
                    1049
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 72
                    },
                    "start": {
                      "column": 4,
                      "line": 70
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 73
                },
                "start": {
                  "column": 14,
                  "line": 56
                }
              }
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null,
            "range": [
              738,
              1051
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 73
              },
              "start": {
                "column": 8,
                "line": 56
              }
            }
          },
          "range": [
            734,
            1051
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 73
            },
            "start": {
              "column": 4,
              "line": 56
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        730,
        1051
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 56
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "E",
          "optional": false,
          "range": [
            1057,
            1058
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 75
            },
            "start": {
              "column": 4,
              "line": 75
            }
          }
        },
        "range": [
          1053,
          1060
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 75
          },
          "start": {
            "column": 0,
            "line": 75
          }
        }
      },
      "range": [
        1053,
        1061
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 75
        },
        "start": {
          "column": 0,
          "line": 75
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
            "name": "o",
            "optional": false,
            "range": [
              1068,
              1069
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 78
              },
              "start": {
                "column": 4,
                "line": 78
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
                  "name": "method",
                  "optional": false,
                  "range": [
                    1128,
                    1134
                  ],
                  "loc": {
                    "end": {
                      "column": 10,
                      "line": 80
                    },
                    "start": {
                      "column": 4,
                      "line": 80
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
                    1134,
                    1196
                  ],
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
                                      "name": "a",
                                      "optional": false,
                                      "range": [
                                        1176,
                                        1177
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 13,
                                          "line": 82
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 82
                                        }
                                      }
                                    },
                                    "range": [
                                      1176,
                                      1178
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 14,
                                        "line": 82
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 82
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  1162,
                                  1188
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 83
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 81
                                  }
                                }
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                1156,
                                1188
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 83
                                },
                                "start": {
                                  "column": 16,
                                  "line": 81
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "defered",
                            "optional": false,
                            "range": [
                              1148,
                              1155
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 81
                              },
                              "start": {
                                "column": 8,
                                "line": 81
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1148,
                            1189
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 83
                            },
                            "start": {
                              "column": 8,
                              "line": 81
                            }
                          }
                        },
                        "range": [
                          1148,
                          1190
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 83
                          },
                          "start": {
                            "column": 8,
                            "line": 81
                          }
                        }
                      }
                    ],
                    "range": [
                      1138,
                      1196
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 84
                      },
                      "start": {
                        "column": 14,
                        "line": 80
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
                      "name": "a",
                      "optional": false,
                      "range": [
                        1135,
                        1136
                      ],
                      "loc": {
                        "end": {
                          "column": 12,
                          "line": 80
                        },
                        "start": {
                          "column": 11,
                          "line": 80
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 84
                    },
                    "start": {
                      "column": 10,
                      "line": 80
                    }
                  }
                },
                "range": [
                  1128,
                  1196
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 84
                  },
                  "start": {
                    "column": 4,
                    "line": 80
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    1243,
                    1244
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 86
                    },
                    "start": {
                      "column": 8,
                      "line": 86
                    }
                  }
                },
                "kind": "set",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "range": [
                    1244,
                    1314
                  ],
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
                                      "name": "v",
                                      "optional": false,
                                      "range": [
                                        1294,
                                        1295
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 13,
                                          "line": 88
                                        },
                                        "start": {
                                          "column": 12,
                                          "line": 88
                                        }
                                      }
                                    },
                                    "range": [
                                      1294,
                                      1296
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 14,
                                        "line": 88
                                      },
                                      "start": {
                                        "column": 12,
                                        "line": 88
                                      }
                                    }
                                  }
                                ],
                                "range": [
                                  1280,
                                  1306
                                ],
                                "loc": {
                                  "end": {
                                    "column": 9,
                                    "line": 89
                                  },
                                  "start": {
                                    "column": 22,
                                    "line": 87
                                  }
                                }
                              },
                              "expression": false,
                              "generator": false,
                              "id": null,
                              "params": [],
                              "range": [
                                1274,
                                1306
                              ],
                              "loc": {
                                "end": {
                                  "column": 9,
                                  "line": 89
                                },
                                "start": {
                                  "column": 16,
                                  "line": 87
                                }
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "defered",
                            "optional": false,
                            "range": [
                              1266,
                              1273
                            ],
                            "loc": {
                              "end": {
                                "column": 15,
                                "line": 87
                              },
                              "start": {
                                "column": 8,
                                "line": 87
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            1266,
                            1307
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 89
                            },
                            "start": {
                              "column": 8,
                              "line": 87
                            }
                          }
                        },
                        "range": [
                          1266,
                          1308
                        ],
                        "loc": {
                          "end": {
                            "column": 11,
                            "line": 89
                          },
                          "start": {
                            "column": 8,
                            "line": 87
                          }
                        }
                      }
                    ],
                    "range": [
                      1256,
                      1314
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 90
                      },
                      "start": {
                        "column": 21,
                        "line": 86
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
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 86
                          },
                          "start": {
                            "column": 11,
                            "line": 86
                          }
                        },
                        "range": [
                          1246,
                          1254
                        ],
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "range": [
                            1248,
                            1254
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 86
                            },
                            "start": {
                              "column": 13,
                              "line": 86
                            }
                          }
                        }
                      },
                      "range": [
                        1245,
                        1254
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 86
                        },
                        "start": {
                          "column": 10,
                          "line": 86
                        }
                      }
                    }
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 90
                    },
                    "start": {
                      "column": 9,
                      "line": 86
                    }
                  }
                },
                "range": [
                  1239,
                  1314
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 90
                  },
                  "start": {
                    "column": 4,
                    "line": 86
                  }
                }
              },
              {
                "type": "Property",
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "range": [
                    1352,
                    1353
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 92
                    },
                    "start": {
                      "column": 4,
                      "line": 92
                    }
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "CallExpression",
                  "arguments": [
                    {
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
                              "name": "prop1",
                              "optional": false,
                              "range": [
                                1379,
                                1384
                              ],
                              "loc": {
                                "end": {
                                  "column": 13,
                                  "line": 93
                                },
                                "start": {
                                  "column": 8,
                                  "line": 93
                                }
                              }
                            },
                            "range": [
                              1379,
                              1385
                            ],
                            "loc": {
                              "end": {
                                "column": 14,
                                "line": 93
                              },
                              "start": {
                                "column": 8,
                                "line": 93
                              }
                            }
                          }
                        ],
                        "range": [
                          1369,
                          1391
                        ],
                        "loc": {
                          "end": {
                            "column": 5,
                            "line": 94
                          },
                          "start": {
                            "column": 21,
                            "line": 92
                          }
                        }
                      },
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "range": [
                        1363,
                        1391
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 94
                        },
                        "start": {
                          "column": 15,
                          "line": 92
                        }
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "defered",
                    "optional": false,
                    "range": [
                      1355,
                      1362
                    ],
                    "loc": {
                      "end": {
                        "column": 14,
                        "line": 92
                      },
                      "start": {
                        "column": 7,
                        "line": 92
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    1355,
                    1392
                  ],
                  "loc": {
                    "end": {
                      "column": 6,
                      "line": 94
                    },
                    "start": {
                      "column": 7,
                      "line": 92
                    }
                  }
                },
                "range": [
                  1352,
                  1392
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 94
                  },
                  "start": {
                    "column": 4,
                    "line": 92
                  }
                }
              }
            ],
            "range": [
              1072,
              1394
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 95
              },
              "start": {
                "column": 8,
                "line": 78
              }
            }
          },
          "range": [
            1068,
            1394
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 95
            },
            "start": {
              "column": 4,
              "line": 78
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1064,
        1395
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 95
        },
        "start": {
          "column": 0,
          "line": 78
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "o",
        "optional": false,
        "range": [
          1397,
          1398
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 97
          },
          "start": {
            "column": 0,
            "line": 97
          }
        }
      },
      "range": [
        1397,
        1399
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 97
        },
        "start": {
          "column": 0,
          "line": 97
        }
      }
    },
    {
      "type": "ForInStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
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
                          "name": "i",
                          "optional": false,
                          "range": [
                            1473,
                            1474
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 102
                            },
                            "start": {
                              "column": 8,
                              "line": 102
                            }
                          }
                        },
                        "range": [
                          1473,
                          1475
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 102
                          },
                          "start": {
                            "column": 8,
                            "line": 102
                          }
                        }
                      }
                    ],
                    "range": [
                      1463,
                      1481
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 103
                      },
                      "start": {
                        "column": 18,
                        "line": 101
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1457,
                    1481
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 103
                    },
                    "start": {
                      "column": 12,
                      "line": 101
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "range": [
                  1449,
                  1456
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
              "range": [
                1449,
                1482
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 103
                },
                "start": {
                  "column": 4,
                  "line": 101
                }
              }
            },
            "range": [
              1449,
              1483
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 103
              },
              "start": {
                "column": 4,
                "line": 101
              }
            }
          }
        ],
        "range": [
          1443,
          1485
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 104
          },
          "start": {
            "column": 17,
            "line": 100
          }
        }
      },
      "left": {
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
              "range": [
                1435,
                1436
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 100
                },
                "start": {
                  "column": 9,
                  "line": 100
                }
              }
            },
            "init": null,
            "range": [
              1435,
              1436
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 100
              },
              "start": {
                "column": 9,
                "line": 100
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1431,
          1436
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 100
          },
          "start": {
            "column": 5,
            "line": 100
          }
        }
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "o",
        "optional": false,
        "range": [
          1440,
          1441
        ],
        "loc": {
          "end": {
            "column": 15,
            "line": 100
          },
          "start": {
            "column": 14,
            "line": 100
          }
        }
      },
      "range": [
        1426,
        1485
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 104
        },
        "start": {
          "column": 0,
          "line": 100
        }
      }
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
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
                          "name": "i",
                          "optional": false,
                          "range": [
                            1565,
                            1566
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 109
                            },
                            "start": {
                              "column": 8,
                              "line": 109
                            }
                          }
                        },
                        "range": [
                          1565,
                          1567
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 109
                          },
                          "start": {
                            "column": 8,
                            "line": 109
                          }
                        }
                      }
                    ],
                    "range": [
                      1555,
                      1573
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 110
                      },
                      "start": {
                        "column": 18,
                        "line": 108
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1549,
                    1573
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 110
                    },
                    "start": {
                      "column": 12,
                      "line": 108
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "range": [
                  1541,
                  1548
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 108
                  },
                  "start": {
                    "column": 4,
                    "line": 108
                  }
                }
              },
              "optional": false,
              "range": [
                1541,
                1574
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 110
                },
                "start": {
                  "column": 4,
                  "line": 108
                }
              }
            },
            "range": [
              1541,
              1575
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 110
              },
              "start": {
                "column": 4,
                "line": 108
              }
            }
          }
        ],
        "range": [
          1535,
          1577
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 111
          },
          "start": {
            "column": 23,
            "line": 107
          }
        }
      },
      "left": {
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
              "range": [
                1521,
                1522
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 107
                },
                "start": {
                  "column": 9,
                  "line": 107
                }
              }
            },
            "init": null,
            "range": [
              1521,
              1522
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 107
              },
              "start": {
                "column": 9,
                "line": 107
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1517,
          1522
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 107
          },
          "start": {
            "column": 5,
            "line": 107
          }
        }
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "raw": "1",
            "value": 1,
            "range": [
              1527,
              1528
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 107
              },
              "start": {
                "column": 15,
                "line": 107
              }
            }
          },
          {
            "type": "Literal",
            "raw": "2",
            "value": 2,
            "range": [
              1529,
              1530
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 107
              },
              "start": {
                "column": 17,
                "line": 107
              }
            }
          },
          {
            "type": "Literal",
            "raw": "3",
            "value": 3,
            "range": [
              1531,
              1532
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 107
              },
              "start": {
                "column": 19,
                "line": 107
              }
            }
          }
        ],
        "range": [
          1526,
          1533
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 107
          },
          "start": {
            "column": 14,
            "line": 107
          }
        }
      },
      "range": [
        1512,
        1577
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 111
        },
        "start": {
          "column": 0,
          "line": 107
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
                          "name": "i",
                          "optional": false,
                          "range": [
                            1660,
                            1661
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 116
                            },
                            "start": {
                              "column": 8,
                              "line": 116
                            }
                          }
                        },
                        "range": [
                          1660,
                          1662
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 116
                          },
                          "start": {
                            "column": 8,
                            "line": 116
                          }
                        }
                      }
                    ],
                    "range": [
                      1650,
                      1668
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 117
                      },
                      "start": {
                        "column": 18,
                        "line": 115
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1644,
                    1668
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 117
                    },
                    "start": {
                      "column": 12,
                      "line": 115
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "range": [
                  1636,
                  1643
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 115
                  },
                  "start": {
                    "column": 4,
                    "line": 115
                  }
                }
              },
              "optional": false,
              "range": [
                1636,
                1669
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 117
                },
                "start": {
                  "column": 4,
                  "line": 115
                }
              }
            },
            "range": [
              1636,
              1670
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 117
              },
              "start": {
                "column": 4,
                "line": 115
              }
            }
          }
        ],
        "range": [
          1630,
          1672
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 118
          },
          "start": {
            "column": 29,
            "line": 114
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
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "range": [
                1610,
                1611
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 114
                },
                "start": {
                  "column": 9,
                  "line": 114
                }
              }
            },
            "init": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1614,
                1615
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 114
                },
                "start": {
                  "column": 13,
                  "line": 114
                }
              }
            },
            "range": [
              1610,
              1615
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 114
              },
              "start": {
                "column": 9,
                "line": 114
              }
            }
          }
        ],
        "declare": false,
        "kind": "let",
        "range": [
          1606,
          1615
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 114
          },
          "start": {
            "column": 5,
            "line": 114
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
            1617,
            1618
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 114
            },
            "start": {
              "column": 16,
              "line": 114
            }
          }
        },
        "right": {
          "type": "Literal",
          "raw": "10",
          "value": 10,
          "range": [
            1621,
            1623
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 114
            },
            "start": {
              "column": 20,
              "line": 114
            }
          }
        },
        "range": [
          1617,
          1623
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 114
          },
          "start": {
            "column": 16,
            "line": 114
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
            1625,
            1626
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 114
            },
            "start": {
              "column": 24,
              "line": 114
            }
          }
        },
        "operator": "++",
        "prefix": false,
        "range": [
          1625,
          1628
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 114
          },
          "start": {
            "column": 24,
            "line": 114
          }
        }
      },
      "range": [
        1601,
        1672
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 118
        },
        "start": {
          "column": 0,
          "line": 114
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
            "name": "condition",
            "optional": false,
            "range": [
              1695,
              1704
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 122
              },
              "start": {
                "column": 6,
                "line": 122
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "false",
            "value": false,
            "range": [
              1707,
              1712
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 122
              },
              "start": {
                "column": 18,
                "line": 122
              }
            }
          },
          "range": [
            1695,
            1712
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 122
            },
            "start": {
              "column": 6,
              "line": 122
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1689,
        1713
      ],
      "loc": {
        "end": {
          "column": 24,
          "line": 122
        },
        "start": {
          "column": 0,
          "line": 122
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
                  "name": "c",
                  "optional": false,
                  "range": [
                    1741,
                    1742
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 124
                    },
                    "start": {
                      "column": 10,
                      "line": 124
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    1745,
                    1746
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 124
                    },
                    "start": {
                      "column": 14,
                      "line": 124
                    }
                  }
                },
                "range": [
                  1741,
                  1746
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 124
                  },
                  "start": {
                    "column": 10,
                    "line": 124
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1735,
              1747
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 124
              },
              "start": {
                "column": 4,
                "line": 124
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
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
                          "name": "c",
                          "optional": false,
                          "range": [
                            1776,
                            1777
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 126
                            },
                            "start": {
                              "column": 8,
                              "line": 126
                            }
                          }
                        },
                        "range": [
                          1776,
                          1778
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 126
                          },
                          "start": {
                            "column": 8,
                            "line": 126
                          }
                        }
                      }
                    ],
                    "range": [
                      1766,
                      1784
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 127
                      },
                      "start": {
                        "column": 18,
                        "line": 125
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1760,
                    1784
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 127
                    },
                    "start": {
                      "column": 12,
                      "line": 125
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "range": [
                  1752,
                  1759
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 125
                  },
                  "start": {
                    "column": 4,
                    "line": 125
                  }
                }
              },
              "optional": false,
              "range": [
                1752,
                1785
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 127
                },
                "start": {
                  "column": 4,
                  "line": 125
                }
              }
            },
            "range": [
              1752,
              1786
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 127
              },
              "start": {
                "column": 4,
                "line": 125
              }
            }
          }
        ],
        "range": [
          1729,
          1788
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 128
          },
          "start": {
            "column": 15,
            "line": 123
          }
        }
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "condition",
        "optional": false,
        "range": [
          1718,
          1727
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 123
          },
          "start": {
            "column": 4,
            "line": 123
          }
        }
      },
      "range": [
        1714,
        1788
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 128
        },
        "start": {
          "column": 0,
          "line": 123
        }
      }
    },
    {
      "type": "TryStatement",
      "block": {
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
                  "name": "a",
                  "optional": false,
                  "range": [
                    1830,
                    1831
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 132
                    },
                    "start": {
                      "column": 10,
                      "line": 132
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    1834,
                    1835
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 132
                    },
                    "start": {
                      "column": 14,
                      "line": 132
                    }
                  }
                },
                "range": [
                  1830,
                  1835
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 132
                  },
                  "start": {
                    "column": 10,
                    "line": 132
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1824,
              1836
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 132
              },
              "start": {
                "column": 4,
                "line": 132
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            1865,
                            1866
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 134
                            },
                            "start": {
                              "column": 8,
                              "line": 134
                            }
                          }
                        },
                        "range": [
                          1865,
                          1867
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 134
                          },
                          "start": {
                            "column": 8,
                            "line": 134
                          }
                        }
                      }
                    ],
                    "range": [
                      1855,
                      1873
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 135
                      },
                      "start": {
                        "column": 18,
                        "line": 133
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1849,
                    1873
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 135
                    },
                    "start": {
                      "column": 12,
                      "line": 133
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "range": [
                  1841,
                  1848
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 133
                  },
                  "start": {
                    "column": 4,
                    "line": 133
                  }
                }
              },
              "optional": false,
              "range": [
                1841,
                1874
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 135
                },
                "start": {
                  "column": 4,
                  "line": 133
                }
              }
            },
            "range": [
              1841,
              1875
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 135
              },
              "start": {
                "column": 4,
                "line": 133
              }
            }
          }
        ],
        "range": [
          1818,
          1877
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 136
          },
          "start": {
            "column": 4,
            "line": 131
          }
        }
      },
      "finalizer": {
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
                  "name": "c",
                  "optional": false,
                  "range": [
                    1968,
                    1969
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 144
                    },
                    "start": {
                      "column": 10,
                      "line": 144
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "raw": "0",
                  "value": 0,
                  "range": [
                    1972,
                    1973
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 144
                    },
                    "start": {
                      "column": 14,
                      "line": 144
                    }
                  }
                },
                "range": [
                  1968,
                  1973
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 144
                  },
                  "start": {
                    "column": 10,
                    "line": 144
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1962,
              1974
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 144
              },
              "start": {
                "column": 4,
                "line": 144
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
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
                          "name": "c",
                          "optional": false,
                          "range": [
                            2003,
                            2004
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 146
                            },
                            "start": {
                              "column": 8,
                              "line": 146
                            }
                          }
                        },
                        "range": [
                          2003,
                          2005
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 146
                          },
                          "start": {
                            "column": 8,
                            "line": 146
                          }
                        }
                      }
                    ],
                    "range": [
                      1993,
                      2011
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 147
                      },
                      "start": {
                        "column": 18,
                        "line": 145
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    1987,
                    2011
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 147
                    },
                    "start": {
                      "column": 12,
                      "line": 145
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "range": [
                  1979,
                  1986
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 145
                  },
                  "start": {
                    "column": 4,
                    "line": 145
                  }
                }
              },
              "optional": false,
              "range": [
                1979,
                2012
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 147
                },
                "start": {
                  "column": 4,
                  "line": 145
                }
              }
            },
            "range": [
              1979,
              2013
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 147
              },
              "start": {
                "column": 4,
                "line": 145
              }
            }
          }
        ],
        "range": [
          1956,
          2015
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 148
          },
          "start": {
            "column": 8,
            "line": 143
          }
        }
      },
      "handler": {
        "type": "CatchClause",
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
                    "name": "c",
                    "optional": false,
                    "range": [
                      1900,
                      1901
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 138
                      },
                      "start": {
                        "column": 10,
                        "line": 138
                      }
                    }
                  },
                  "init": {
                    "type": "Literal",
                    "raw": "1",
                    "value": 1,
                    "range": [
                      1904,
                      1905
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 138
                      },
                      "start": {
                        "column": 14,
                        "line": 138
                      }
                    }
                  },
                  "range": [
                    1900,
                    1905
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 138
                    },
                    "start": {
                      "column": 10,
                      "line": 138
                    }
                  }
                }
              ],
              "declare": false,
              "kind": "const",
              "range": [
                1894,
                1906
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 138
                },
                "start": {
                  "column": 4,
                  "line": 138
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "arguments": [
                  {
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
                            "name": "c",
                            "optional": false,
                            "range": [
                              1935,
                              1936
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 140
                              },
                              "start": {
                                "column": 8,
                                "line": 140
                              }
                            }
                          },
                          "range": [
                            1935,
                            1937
                          ],
                          "loc": {
                            "end": {
                              "column": 10,
                              "line": 140
                            },
                            "start": {
                              "column": 8,
                              "line": 140
                            }
                          }
                        }
                      ],
                      "range": [
                        1925,
                        1943
                      ],
                      "loc": {
                        "end": {
                          "column": 5,
                          "line": 141
                        },
                        "start": {
                          "column": 18,
                          "line": 139
                        }
                      }
                    },
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [],
                    "range": [
                      1919,
                      1943
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 141
                      },
                      "start": {
                        "column": 12,
                        "line": 139
                      }
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "defered",
                  "optional": false,
                  "range": [
                    1911,
                    1918
                  ],
                  "loc": {
                    "end": {
                      "column": 11,
                      "line": 139
                    },
                    "start": {
                      "column": 4,
                      "line": 139
                    }
                  }
                },
                "optional": false,
                "range": [
                  1911,
                  1944
                ],
                "loc": {
                  "end": {
                    "column": 6,
                    "line": 141
                  },
                  "start": {
                    "column": 4,
                    "line": 139
                  }
                }
              },
              "range": [
                1911,
                1945
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 141
                },
                "start": {
                  "column": 4,
                  "line": 139
                }
              }
            }
          ],
          "range": [
            1888,
            1947
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 142
            },
            "start": {
              "column": 10,
              "line": 137
            }
          }
        },
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "range": [
            1885,
            1886
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 137
            },
            "start": {
              "column": 7,
              "line": 137
            }
          }
        },
        "range": [
          1878,
          1947
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 142
          },
          "start": {
            "column": 0,
            "line": 137
          }
        }
      },
      "range": [
        1814,
        2015
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 148
        },
        "start": {
          "column": 0,
          "line": 131
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
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
                    2058,
                    2059
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 153
                    },
                    "start": {
                      "column": 8,
                      "line": 153
                    }
                  }
                },
                "init": null,
                "range": [
                  2058,
                  2059
                ],
                "loc": {
                  "end": {
                    "column": 9,
                    "line": 153
                  },
                  "start": {
                    "column": 8,
                    "line": 153
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var",
            "range": [
              2054,
              2060
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 153
              },
              "start": {
                "column": 4,
                "line": 153
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
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
                          "name": "x",
                          "optional": false,
                          "range": [
                            2089,
                            2090
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 155
                            },
                            "start": {
                              "column": 8,
                              "line": 155
                            }
                          }
                        },
                        "range": [
                          2089,
                          2091
                        ],
                        "loc": {
                          "end": {
                            "column": 10,
                            "line": 155
                          },
                          "start": {
                            "column": 8,
                            "line": 155
                          }
                        }
                      }
                    ],
                    "range": [
                      2079,
                      2097
                    ],
                    "loc": {
                      "end": {
                        "column": 5,
                        "line": 156
                      },
                      "start": {
                        "column": 18,
                        "line": 154
                      }
                    }
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "range": [
                    2073,
                    2097
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 156
                    },
                    "start": {
                      "column": 12,
                      "line": 154
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "defered",
                "optional": false,
                "range": [
                  2065,
                  2072
                ],
                "loc": {
                  "end": {
                    "column": 11,
                    "line": 154
                  },
                  "start": {
                    "column": 4,
                    "line": 154
                  }
                }
              },
              "optional": false,
              "range": [
                2065,
                2098
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 156
                },
                "start": {
                  "column": 4,
                  "line": 154
                }
              }
            },
            "range": [
              2065,
              2099
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 156
              },
              "start": {
                "column": 4,
                "line": 154
              }
            }
          }
        ],
        "range": [
          2048,
          2101
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 157
          },
          "start": {
            "column": 12,
            "line": 152
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          2046,
          2047
        ],
        "decorators": [],
        "name": "N",
        "optional": false,
        "loc": {
          "end": {
            "column": 11,
            "line": 152
          },
          "start": {
            "column": 10,
            "line": 152
          }
        }
      },
      "kind": "namespace",
      "range": [
        2036,
        2101
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 157
        },
        "start": {
          "column": 0,
          "line": 152
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "range": [
          2102,
          2103
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 158
          },
          "start": {
            "column": 0,
            "line": 158
          }
        }
      },
      "range": [
        2102,
        2104
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 158
        },
        "start": {
          "column": 0,
          "line": 158
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 4,
      "line": 159
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
