__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    923
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          688
        ],
        "body": [
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
                14,
                17
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
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "range": [
                17,
                139
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": false,
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
                                "name": "f",
                                "optional": false,
                                "range": [
                                  67,
                                  68
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 4
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
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "range": [
                                          91,
                                          92
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 41,
                                            "line": 4
                                          },
                                          "start": {
                                            "column": 40,
                                            "line": 4
                                          }
                                        }
                                      },
                                      "range": [
                                        84,
                                        93
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 42,
                                          "line": 4
                                        },
                                        "start": {
                                          "column": 33,
                                          "line": 4
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    82,
                                    95
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 44,
                                      "line": 4
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 4
                                    }
                                  }
                                },
                                "declare": false,
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [],
                                "range": [
                                  71,
                                  95
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 4
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 4
                                  }
                                }
                              },
                              "range": [
                                67,
                                95
                              ],
                              "loc": {
                                "end": {
                                  "column": 44,
                                  "line": 4
                                },
                                "start": {
                                  "column": 16,
                                  "line": 4
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let",
                          "range": [
                            63,
                            96
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 4
                            },
                            "start": {
                              "column": 12,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "range": [
                                    118,
                                    119
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 5
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 5
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  118,
                                  121
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 5
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
                                  109,
                                  113
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 5
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "range": [
                                  114,
                                  117
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 5
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 5
                                  }
                                }
                              },
                              "range": [
                                109,
                                117
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 5
                                },
                                "start": {
                                  "column": 12,
                                  "line": 5
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              109,
                              122
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 5
                              },
                              "start": {
                                "column": 12,
                                "line": 5
                              }
                            }
                          },
                          "range": [
                            109,
                            123
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 5
                            },
                            "start": {
                              "column": 12,
                              "line": 5
                            }
                          }
                        }
                      ],
                      "range": [
                        49,
                        133
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 6
                        },
                        "start": {
                          "column": 27,
                          "line": 3
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
                            "name": "x",
                            "optional": false,
                            "range": [
                              39,
                              40
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
                          "init": null,
                          "range": [
                            39,
                            40
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
                      ],
                      "declare": false,
                      "kind": "let",
                      "range": [
                        35,
                        40
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 3
                        },
                        "start": {
                          "column": 13,
                          "line": 3
                        }
                      }
                    },
                    "right": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "raw": "0",
                          "value": 0,
                          "range": [
                            45,
                            46
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 3
                            },
                            "start": {
                              "column": 23,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        44,
                        47
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 3
                        },
                        "start": {
                          "column": 22,
                          "line": 3
                        }
                      }
                    },
                    "range": [
                      30,
                      133
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 3
                      }
                    }
                  }
                ],
                "range": [
                  20,
                  139
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 7
                  },
                  "start": {
                    "column": 10,
                    "line": 2
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
                  "line": 7
                },
                "start": {
                  "column": 7,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              139
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 7
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
              "name": "bar",
              "optional": false,
              "range": [
                144,
                147
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
                147,
                166
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  159,
                  166
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 9
                  },
                  "start": {
                    "column": 19,
                    "line": 8
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 8
                      },
                      "start": {
                        "column": 9,
                        "line": 8
                      }
                    },
                    "range": [
                      149,
                      157
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        151,
                        157
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 8
                        },
                        "start": {
                          "column": 11,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    148,
                    157
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 9
                },
                "start": {
                  "column": 7,
                  "line": 8
                }
              }
            },
            "range": [
              144,
              166
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 9
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
              "name": "baz",
              "optional": false,
              "range": [
                172,
                175
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 11
                },
                "start": {
                  "column": 4,
                  "line": 11
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
                175,
                426
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": false,
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
                                "name": "a",
                                "optional": false,
                                "range": [
                                  225,
                                  226
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 13
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
                                      "type": "ReturnStatement",
                                      "argument": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "range": [
                                          250,
                                          251
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 42,
                                            "line": 13
                                          },
                                          "start": {
                                            "column": 41,
                                            "line": 13
                                          }
                                        }
                                      },
                                      "range": [
                                        243,
                                        252
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 13
                                        },
                                        "start": {
                                          "column": 34,
                                          "line": 13
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    240,
                                    254
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
                                      "line": 13
                                    },
                                    "start": {
                                      "column": 31,
                                      "line": 13
                                    }
                                  }
                                },
                                "declare": false,
                                "expression": false,
                                "generator": false,
                                "id": null,
                                "params": [],
                                "range": [
                                  229,
                                  254
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 13
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 13
                                  }
                                }
                              },
                              "range": [
                                225,
                                254
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 13
                                },
                                "start": {
                                  "column": 16,
                                  "line": 13
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let",
                          "range": [
                            221,
                            255
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 13
                            },
                            "start": {
                              "column": 12,
                              "line": 13
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
                                "type": "VariableDeclaration",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "b",
                                      "optional": false,
                                      "range": [
                                        309,
                                        310
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 15
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
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "y",
                                              "optional": false,
                                              "range": [
                                                333,
                                                334
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 45,
                                                  "line": 15
                                                },
                                                "start": {
                                                  "column": 44,
                                                  "line": 15
                                                }
                                              }
                                            },
                                            "range": [
                                              326,
                                              335
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 46,
                                                "line": 15
                                              },
                                              "start": {
                                                "column": 37,
                                                "line": 15
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          324,
                                          337
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 48,
                                            "line": 15
                                          },
                                          "start": {
                                            "column": 35,
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
                                        313,
                                        337
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 48,
                                          "line": 15
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 15
                                        }
                                      }
                                    },
                                    "range": [
                                      309,
                                      337
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 48,
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
                                "kind": "let",
                                "range": [
                                  305,
                                  338
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 15
                                  }
                                }
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "arguments": [],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "b",
                                        "optional": false,
                                        "range": [
                                          364,
                                          365
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 26,
                                            "line": 16
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 16
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        364,
                                        367
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 16
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
                                        355,
                                        359
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bar",
                                      "optional": false,
                                      "range": [
                                        360,
                                        363
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 16
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 16
                                        }
                                      }
                                    },
                                    "range": [
                                      355,
                                      363
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 16
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 16
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    355,
                                    368
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 16
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 16
                                    }
                                  }
                                },
                                "range": [
                                  355,
                                  369
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
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
                              287,
                              383
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 17
                              },
                              "start": {
                                "column": 31,
                                "line": 14
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
                                  "name": "y",
                                  "optional": false,
                                  "range": [
                                    277,
                                    278
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 14
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 14
                                    }
                                  }
                                },
                                "init": null,
                                "range": [
                                  277,
                                  278
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 14
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "let",
                            "range": [
                              273,
                              278
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 14
                              },
                              "start": {
                                "column": 17,
                                "line": 14
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
                                  283,
                                  284
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 14
                                  }
                                }
                              }
                            ],
                            "range": [
                              282,
                              285
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 14
                              },
                              "start": {
                                "column": 26,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            268,
                            383
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
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    405,
                                    406
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 18
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 18
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  405,
                                  408
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 18
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
                                  396,
                                  400
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 18
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "range": [
                                  401,
                                  404
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 18
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 18
                                  }
                                }
                              },
                              "range": [
                                396,
                                404
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 18
                                },
                                "start": {
                                  "column": 12,
                                  "line": 18
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              396,
                              409
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
                          },
                          "range": [
                            396,
                            410
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 18
                            },
                            "start": {
                              "column": 12,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "range": [
                        207,
                        420
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 19
                        },
                        "start": {
                          "column": 27,
                          "line": 12
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
                            "name": "x",
                            "optional": false,
                            "range": [
                              197,
                              198
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 12
                              },
                              "start": {
                                "column": 17,
                                "line": 12
                              }
                            }
                          },
                          "init": null,
                          "range": [
                            197,
                            198
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 12
                            },
                            "start": {
                              "column": 17,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "let",
                      "range": [
                        193,
                        198
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 12
                        },
                        "start": {
                          "column": 13,
                          "line": 12
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
                            203,
                            204
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 12
                            },
                            "start": {
                              "column": 23,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "range": [
                        202,
                        205
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 12
                        },
                        "start": {
                          "column": 22,
                          "line": 12
                        }
                      }
                    },
                    "range": [
                      188,
                      420
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 19
                      },
                      "start": {
                        "column": 8,
                        "line": 12
                      }
                    }
                  }
                ],
                "range": [
                  178,
                  426
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 20
                  },
                  "start": {
                    "column": 10,
                    "line": 11
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
                  "column": 7,
                  "line": 11
                }
              }
            },
            "range": [
              172,
              426
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 11
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
              "name": "baz2",
              "optional": false,
              "range": [
                431,
                435
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
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
                435,
                686
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ForOfStatement",
                    "await": false,
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
                                "name": "a",
                                "optional": false,
                                "range": [
                                  485,
                                  486
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 23
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
                                            "column": 42,
                                            "line": 23
                                          },
                                          "start": {
                                            "column": 41,
                                            "line": 23
                                          }
                                        }
                                      },
                                      "range": [
                                        503,
                                        512
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 43,
                                          "line": 23
                                        },
                                        "start": {
                                          "column": 34,
                                          "line": 23
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    500,
                                    514
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 45,
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
                                "params": [],
                                "range": [
                                  489,
                                  514
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 23
                                  },
                                  "start": {
                                    "column": 20,
                                    "line": 23
                                  }
                                }
                              },
                              "range": [
                                485,
                                514
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 23
                                },
                                "start": {
                                  "column": 16,
                                  "line": 23
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "let",
                          "range": [
                            481,
                            515
                          ],
                          "loc": {
                            "end": {
                              "column": 46,
                              "line": 23
                            },
                            "start": {
                              "column": 12,
                              "line": 23
                            }
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "arguments": [],
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "range": [
                                    537,
                                    538
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 24
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 24
                                    }
                                  }
                                },
                                "optional": false,
                                "range": [
                                  537,
                                  540
                                ],
                                "loc": {
                                  "end": {
                                    "column": 24,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 24
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
                                  528,
                                  532
                                ],
                                "loc": {
                                  "end": {
                                    "column": 16,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 12,
                                    "line": 24
                                  }
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "bar",
                                "optional": false,
                                "range": [
                                  533,
                                  536
                                ],
                                "loc": {
                                  "end": {
                                    "column": 20,
                                    "line": 24
                                  },
                                  "start": {
                                    "column": 17,
                                    "line": 24
                                  }
                                }
                              },
                              "range": [
                                528,
                                536
                              ],
                              "loc": {
                                "end": {
                                  "column": 20,
                                  "line": 24
                                },
                                "start": {
                                  "column": 12,
                                  "line": 24
                                }
                              }
                            },
                            "optional": false,
                            "range": [
                              528,
                              541
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
                                "line": 24
                              },
                              "start": {
                                "column": 12,
                                "line": 24
                              }
                            }
                          },
                          "range": [
                            528,
                            542
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
                        },
                        {
                          "type": "ForOfStatement",
                          "await": false,
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
                                      "name": "b",
                                      "optional": false,
                                      "range": [
                                        596,
                                        597
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 21,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 26
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
                                            "type": "ReturnStatement",
                                            "argument": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "y",
                                              "optional": false,
                                              "range": [
                                                620,
                                                621
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 45,
                                                  "line": 26
                                                },
                                                "start": {
                                                  "column": 44,
                                                  "line": 26
                                                }
                                              }
                                            },
                                            "range": [
                                              613,
                                              622
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 46,
                                                "line": 26
                                              },
                                              "start": {
                                                "column": 37,
                                                "line": 26
                                              }
                                            }
                                          }
                                        ],
                                        "range": [
                                          611,
                                          624
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 48,
                                            "line": 26
                                          },
                                          "start": {
                                            "column": 35,
                                            "line": 26
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
                                        624
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 48,
                                          "line": 26
                                        },
                                        "start": {
                                          "column": 24,
                                          "line": 26
                                        }
                                      }
                                    },
                                    "range": [
                                      596,
                                      624
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 48,
                                        "line": 26
                                      },
                                      "start": {
                                        "column": 20,
                                        "line": 26
                                      }
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "let",
                                "range": [
                                  592,
                                  625
                                ],
                                "loc": {
                                  "end": {
                                    "column": 49,
                                    "line": 26
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 26
                                  }
                                }
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "arguments": [
                                    {
                                      "type": "CallExpression",
                                      "arguments": [],
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "b",
                                        "optional": false,
                                        "range": [
                                          651,
                                          652
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 26,
                                            "line": 27
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 27
                                          }
                                        }
                                      },
                                      "optional": false,
                                      "range": [
                                        651,
                                        654
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 28,
                                          "line": 27
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 27
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
                                        642,
                                        646
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 20,
                                          "line": 27
                                        },
                                        "start": {
                                          "column": 16,
                                          "line": 27
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bar",
                                      "optional": false,
                                      "range": [
                                        647,
                                        650
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 24,
                                          "line": 27
                                        },
                                        "start": {
                                          "column": 21,
                                          "line": 27
                                        }
                                      }
                                    },
                                    "range": [
                                      642,
                                      650
                                    ],
                                    "loc": {
                                      "end": {
                                        "column": 24,
                                        "line": 27
                                      },
                                      "start": {
                                        "column": 16,
                                        "line": 27
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "range": [
                                    642,
                                    655
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 29,
                                      "line": 27
                                    },
                                    "start": {
                                      "column": 16,
                                      "line": 27
                                    }
                                  }
                                },
                                "range": [
                                  642,
                                  656
                                ],
                                "loc": {
                                  "end": {
                                    "column": 30,
                                    "line": 27
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 27
                                  }
                                }
                              }
                            ],
                            "range": [
                              574,
                              670
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 28
                              },
                              "start": {
                                "column": 31,
                                "line": 25
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
                                  "name": "y",
                                  "optional": false,
                                  "range": [
                                    564,
                                    565
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 22,
                                      "line": 25
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 25
                                    }
                                  }
                                },
                                "init": null,
                                "range": [
                                  564,
                                  565
                                ],
                                "loc": {
                                  "end": {
                                    "column": 22,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 21,
                                    "line": 25
                                  }
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "let",
                            "range": [
                              560,
                              565
                            ],
                            "loc": {
                              "end": {
                                "column": 22,
                                "line": 25
                              },
                              "start": {
                                "column": 17,
                                "line": 25
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
                                  570,
                                  571
                                ],
                                "loc": {
                                  "end": {
                                    "column": 28,
                                    "line": 25
                                  },
                                  "start": {
                                    "column": 27,
                                    "line": 25
                                  }
                                }
                              }
                            ],
                            "range": [
                              569,
                              572
                            ],
                            "loc": {
                              "end": {
                                "column": 29,
                                "line": 25
                              },
                              "start": {
                                "column": 26,
                                "line": 25
                              }
                            }
                          },
                          "range": [
                            555,
                            670
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 28
                            },
                            "start": {
                              "column": 12,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        467,
                        680
                      ],
                      "loc": {
                        "end": {
                          "column": 9,
                          "line": 29
                        },
                        "start": {
                          "column": 27,
                          "line": 22
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
                            "name": "x",
                            "optional": false,
                            "range": [
                              457,
                              458
                            ],
                            "loc": {
                              "end": {
                                "column": 18,
                                "line": 22
                              },
                              "start": {
                                "column": 17,
                                "line": 22
                              }
                            }
                          },
                          "init": null,
                          "range": [
                            457,
                            458
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 22
                            },
                            "start": {
                              "column": 17,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "let",
                      "range": [
                        453,
                        458
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 22
                        },
                        "start": {
                          "column": 13,
                          "line": 22
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
                            463,
                            464
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 22
                            },
                            "start": {
                              "column": 23,
                              "line": 22
                            }
                          }
                        }
                      ],
                      "range": [
                        462,
                        465
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 22
                        },
                        "start": {
                          "column": 22,
                          "line": 22
                        }
                      }
                    },
                    "range": [
                      448,
                      680
                    ],
                    "loc": {
                      "end": {
                        "column": 9,
                        "line": 29
                      },
                      "start": {
                        "column": 8,
                        "line": 22
                      }
                    }
                  }
                ],
                "range": [
                  438,
                  686
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 30
                  },
                  "start": {
                    "column": 11,
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
                  "line": 30
                },
                "start": {
                  "column": 8,
                  "line": 21
                }
              }
            },
            "range": [
              431,
              686
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 30
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
            "line": 31
          },
          "start": {
            "column": 8,
            "line": 1
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
          6,
          7
        ],
        "loc": {
          "end": {
            "column": 7,
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
        688
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 31
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
          698,
          923
        ],
        "body": [
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
                704,
                707
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
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
                707,
                894
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
                          "name": "a",
                          "optional": false,
                          "range": [
                            724,
                            725
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 35
                            },
                            "start": {
                              "column": 12,
                              "line": 35
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
                                "type": "ForOfStatement",
                                "await": false,
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
                                            "name": "f",
                                            "optional": false,
                                            "range": [
                                              809,
                                              810
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 25,
                                                "line": 38
                                              },
                                              "start": {
                                                "column": 24,
                                                "line": 38
                                              }
                                            }
                                          },
                                          "init": {
                                            "type": "ArrowFunctionExpression",
                                            "async": false,
                                            "body": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "x",
                                              "optional": false,
                                              "range": [
                                                819,
                                                820
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 35,
                                                  "line": 38
                                                },
                                                "start": {
                                                  "column": 34,
                                                  "line": 38
                                                }
                                              }
                                            },
                                            "expression": true,
                                            "generator": false,
                                            "id": null,
                                            "params": [],
                                            "range": [
                                              813,
                                              820
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 35,
                                                "line": 38
                                              },
                                              "start": {
                                                "column": 28,
                                                "line": 38
                                              }
                                            }
                                          },
                                          "range": [
                                            809,
                                            820
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 35,
                                              "line": 38
                                            },
                                            "start": {
                                              "column": 24,
                                              "line": 38
                                            }
                                          }
                                        }
                                      ],
                                      "declare": false,
                                      "kind": "let",
                                      "range": [
                                        805,
                                        821
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 36,
                                          "line": 38
                                        },
                                        "start": {
                                          "column": 20,
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
                                            "type": "CallExpression",
                                            "arguments": [],
                                            "callee": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "f",
                                              "optional": false,
                                              "range": [
                                                851,
                                                852
                                              ],
                                              "loc": {
                                                "end": {
                                                  "column": 30,
                                                  "line": 39
                                                },
                                                "start": {
                                                  "column": 29,
                                                  "line": 39
                                                }
                                              }
                                            },
                                            "optional": false,
                                            "range": [
                                              851,
                                              854
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 32,
                                                "line": 39
                                              },
                                              "start": {
                                                "column": 29,
                                                "line": 39
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
                                              842,
                                              846
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 24,
                                                "line": 39
                                              },
                                              "start": {
                                                "column": 20,
                                                "line": 39
                                              }
                                            }
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "bar",
                                            "optional": false,
                                            "range": [
                                              847,
                                              850
                                            ],
                                            "loc": {
                                              "end": {
                                                "column": 28,
                                                "line": 39
                                              },
                                              "start": {
                                                "column": 25,
                                                "line": 39
                                              }
                                            }
                                          },
                                          "range": [
                                            842,
                                            850
                                          ],
                                          "loc": {
                                            "end": {
                                              "column": 28,
                                              "line": 39
                                            },
                                            "start": {
                                              "column": 20,
                                              "line": 39
                                            }
                                          }
                                        },
                                        "optional": false,
                                        "range": [
                                          842,
                                          855
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 33,
                                            "line": 39
                                          },
                                          "start": {
                                            "column": 20,
                                            "line": 39
                                          }
                                        }
                                      },
                                      "range": [
                                        842,
                                        856
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 34,
                                          "line": 39
                                        },
                                        "start": {
                                          "column": 20,
                                          "line": 39
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    783,
                                    874
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 17,
                                      "line": 40
                                    },
                                    "start": {
                                      "column": 35,
                                      "line": 37
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
                                        "name": "x",
                                        "optional": false,
                                        "range": [
                                          773,
                                          774
                                        ],
                                        "loc": {
                                          "end": {
                                            "column": 26,
                                            "line": 37
                                          },
                                          "start": {
                                            "column": 25,
                                            "line": 37
                                          }
                                        }
                                      },
                                      "init": null,
                                      "range": [
                                        773,
                                        774
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 26,
                                          "line": 37
                                        },
                                        "start": {
                                          "column": 25,
                                          "line": 37
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "let",
                                  "range": [
                                    769,
                                    774
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 26,
                                      "line": 37
                                    },
                                    "start": {
                                      "column": 21,
                                      "line": 37
                                    }
                                  }
                                },
                                "right": {
                                  "type": "ArrayExpression",
                                  "elements": [
                                    {
                                      "type": "Literal",
                                      "raw": "0",
                                      "value": 0,
                                      "range": [
                                        779,
                                        780
                                      ],
                                      "loc": {
                                        "end": {
                                          "column": 32,
                                          "line": 37
                                        },
                                        "start": {
                                          "column": 31,
                                          "line": 37
                                        }
                                      }
                                    }
                                  ],
                                  "range": [
                                    778,
                                    781
                                  ],
                                  "loc": {
                                    "end": {
                                      "column": 33,
                                      "line": 37
                                    },
                                    "start": {
                                      "column": 30,
                                      "line": 37
                                    }
                                  }
                                },
                                "range": [
                                  764,
                                  874
                                ],
                                "loc": {
                                  "end": {
                                    "column": 17,
                                    "line": 40
                                  },
                                  "start": {
                                    "column": 16,
                                    "line": 37
                                  }
                                }
                              }
                            ],
                            "range": [
                              746,
                              888
                            ],
                            "loc": {
                              "end": {
                                "column": 13,
                                "line": 41
                              },
                              "start": {
                                "column": 18,
                                "line": 36
                              }
                            }
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "range": [
                            740,
                            888
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 41
                            },
                            "start": {
                              "column": 12,
                              "line": 36
                            }
                          }
                        },
                        "range": [
                          724,
                          888
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 41
                          },
                          "start": {
                            "column": 12,
                            "line": 35
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let",
                    "range": [
                      720,
                      888
                    ],
                    "loc": {
                      "end": {
                        "column": 13,
                        "line": 41
                      },
                      "start": {
                        "column": 8,
                        "line": 35
                      }
                    }
                  }
                ],
                "range": [
                  710,
                  894
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 42
                  },
                  "start": {
                    "column": 10,
                    "line": 34
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
                  "line": 42
                },
                "start": {
                  "column": 7,
                  "line": 34
                }
              }
            },
            "range": [
              704,
              894
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
                899,
                902
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 43
                },
                "start": {
                  "column": 4,
                  "line": 43
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
                902,
                921
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  914,
                  921
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 44
                  },
                  "start": {
                    "column": 19,
                    "line": 43
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
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 43
                      },
                      "start": {
                        "column": 9,
                        "line": 43
                      }
                    },
                    "range": [
                      904,
                      912
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        906,
                        912
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 43
                        },
                        "start": {
                          "column": 11,
                          "line": 43
                        }
                      }
                    }
                  },
                  "range": [
                    903,
                    912
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 43
                    },
                    "start": {
                      "column": 8,
                      "line": 43
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
                  "column": 7,
                  "line": 43
                }
              }
            },
            "range": [
              899,
              921
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 44
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 45
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
        "name": "B",
        "optional": false,
        "range": [
          696,
          697
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
        690,
        923
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 45
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 45
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
