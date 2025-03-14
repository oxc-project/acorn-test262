__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    534
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          533
        ],
        "body": [
          {
            "type": "PropertyDefinition",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "name": "fieldFunc",
              "range": [
                21,
                31
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "range": [
                            48,
                            52
                          ],
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 2
                            },
                            "start": {
                              "column": 38,
                              "line": 2
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "range": [
                            53,
                            54
                          ],
                          "loc": {
                            "end": {
                              "column": 44,
                              "line": 2
                            },
                            "start": {
                              "column": 43,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          48,
                          54
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 2
                          },
                          "start": {
                            "column": 38,
                            "line": 2
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          57,
                          59
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 2
                          },
                          "start": {
                            "column": 47,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        48,
                        59
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 2
                        },
                        "start": {
                          "column": 38,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      48,
                      60
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 2
                      },
                      "start": {
                        "column": 38,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  46,
                  62
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 2
                  },
                  "start": {
                    "column": 36,
                    "line": 2
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "range": [
                34,
                62
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 2
                },
                "start": {
                  "column": 24,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              63
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
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
              "type": "PrivateIdentifier",
              "name": "fieldFunc2",
              "range": [
                75,
                86
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 3
                },
                "start": {
                  "column": 11,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  108,
                  110
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 3
                  },
                  "start": {
                    "column": 44,
                    "line": 3
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
                    99,
                    100
                  ],
                  "loc": {
                    "end": {
                      "column": 36,
                      "line": 3
                    },
                    "start": {
                      "column": 35,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      105,
                      106
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 3
                      },
                      "start": {
                        "column": 41,
                        "line": 3
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "range": [
                    102,
                    106
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
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
                89,
                110
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 3
                },
                "start": {
                  "column": 25,
                  "line": 3
                }
              }
            },
            "range": [
              68,
              111
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
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
              "name": "x",
              "optional": false,
              "range": [
                116,
                117
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                120,
                121
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
            "range": [
              116,
              122
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 4
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
              "name": "test",
              "optional": false,
              "range": [
                127,
                131
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 5
                },
                "start": {
                  "column": 4,
                  "line": 5
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
                131,
                502
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
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            144,
                            145
                          ],
                          "loc": {
                            "end": {
                              "column": 9,
                              "line": 6
                            },
                            "start": {
                              "column": 8,
                              "line": 6
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc",
                          "range": [
                            146,
                            156
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 6
                            },
                            "start": {
                              "column": 10,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          144,
                          156
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 6
                          },
                          "start": {
                            "column": 8,
                            "line": 6
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        144,
                        158
                      ],
                      "loc": {
                        "end": {
                          "column": 22,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      144,
                      159
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 6
                      },
                      "start": {
                        "column": 8,
                        "line": 6
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ChainExpression",
                      "expression": {
                        "type": "CallExpression",
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              168,
                              169
                            ],
                            "loc": {
                              "end": {
                                "column": 9,
                                "line": 7
                              },
                              "start": {
                                "column": 8,
                                "line": 7
                              }
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "fieldFunc",
                            "range": [
                              170,
                              180
                            ],
                            "loc": {
                              "end": {
                                "column": 20,
                                "line": 7
                              },
                              "start": {
                                "column": 10,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            168,
                            180
                          ],
                          "loc": {
                            "end": {
                              "column": 20,
                              "line": 7
                            },
                            "start": {
                              "column": 8,
                              "line": 7
                            }
                          }
                        },
                        "optional": true,
                        "range": [
                          168,
                          184
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        168,
                        184
                      ],
                      "loc": {
                        "end": {
                          "column": 24,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      168,
                      185
                    ],
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 7
                      },
                      "start": {
                        "column": 8,
                        "line": 7
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
                          "name": "func",
                          "optional": false,
                          "range": [
                            200,
                            204
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 8
                            },
                            "start": {
                              "column": 14,
                              "line": 8
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "range": [
                              207,
                              208
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
                          "optional": false,
                          "property": {
                            "type": "PrivateIdentifier",
                            "name": "fieldFunc",
                            "range": [
                              209,
                              219
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 8
                              },
                              "start": {
                                "column": 23,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            207,
                            219
                          ],
                          "loc": {
                            "end": {
                              "column": 33,
                              "line": 8
                            },
                            "start": {
                              "column": 21,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          200,
                          219
                        ],
                        "loc": {
                          "end": {
                            "column": 33,
                            "line": 8
                          },
                          "start": {
                            "column": 14,
                            "line": 8
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      194,
                      220
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 8
                      },
                      "start": {
                        "column": 8,
                        "line": 8
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
                        "name": "func",
                        "optional": false,
                        "range": [
                          229,
                          233
                        ],
                        "loc": {
                          "end": {
                            "column": 12,
                            "line": 9
                          },
                          "start": {
                            "column": 8,
                            "line": 9
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        229,
                        235
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 9
                        },
                        "start": {
                          "column": 8,
                          "line": 9
                        }
                      }
                    },
                    "range": [
                      229,
                      236
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
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
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "range": [
                            249,
                            250
                          ],
                          "loc": {
                            "end": {
                              "column": 13,
                              "line": 10
                            },
                            "start": {
                              "column": 12,
                              "line": 10
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc",
                          "range": [
                            251,
                            261
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 10
                            },
                            "start": {
                              "column": 14,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          249,
                          261
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        245,
                        263
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      245,
                      264
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 10
                      },
                      "start": {
                        "column": 8,
                        "line": 10
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
                          "name": "arr",
                          "optional": false,
                          "range": [
                            280,
                            283
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 12
                            },
                            "start": {
                              "column": 14,
                              "line": 12
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
                                288,
                                289
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 12
                                },
                                "start": {
                                  "column": 22,
                                  "line": 12
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "2",
                              "value": 2,
                              "range": [
                                291,
                                292
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
                                  "line": 12
                                },
                                "start": {
                                  "column": 25,
                                  "line": 12
                                }
                              }
                            }
                          ],
                          "range": [
                            286,
                            294
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 12
                            },
                            "start": {
                              "column": 20,
                              "line": 12
                            }
                          }
                        },
                        "range": [
                          280,
                          294
                        ],
                        "loc": {
                          "end": {
                            "column": 28,
                            "line": 12
                          },
                          "start": {
                            "column": 14,
                            "line": 12
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      274,
                      295
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 12
                      },
                      "start": {
                        "column": 8,
                        "line": 12
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
                            318,
                            319
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 13
                            },
                            "start": {
                              "column": 22,
                              "line": 13
                            }
                          }
                        },
                        {
                          "type": "SpreadElement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arr",
                            "optional": false,
                            "range": [
                              324,
                              327
                            ],
                            "loc": {
                              "end": {
                                "column": 31,
                                "line": 13
                              },
                              "start": {
                                "column": 28,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            321,
                            327
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 13
                            },
                            "start": {
                              "column": 25,
                              "line": 13
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "3",
                          "value": 3,
                          "range": [
                            329,
                            330
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 13
                            },
                            "start": {
                              "column": 33,
                              "line": 13
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
                          "name": "A",
                          "optional": false,
                          "range": [
                            304,
                            305
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
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc2",
                          "range": [
                            306,
                            317
                          ],
                          "loc": {
                            "end": {
                              "column": 21,
                              "line": 13
                            },
                            "start": {
                              "column": 10,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          304,
                          317
                        ],
                        "loc": {
                          "end": {
                            "column": 21,
                            "line": 13
                          },
                          "start": {
                            "column": 8,
                            "line": 13
                          }
                        }
                      },
                      "optional": false,
                      "range": [
                        304,
                        331
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      304,
                      332
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
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
                          "name": "b",
                          "optional": false,
                          "range": [
                            347,
                            348
                          ],
                          "loc": {
                            "end": {
                              "column": 15,
                              "line": 14
                            },
                            "start": {
                              "column": 14,
                              "line": 14
                            }
                          }
                        },
                        "init": {
                          "type": "NewExpression",
                          "arguments": [
                            {
                              "type": "Literal",
                              "raw": "0",
                              "value": 0,
                              "range": [
                                369,
                                370
                              ],
                              "loc": {
                                "end": {
                                  "column": 37,
                                  "line": 14
                                },
                                "start": {
                                  "column": 36,
                                  "line": 14
                                }
                              }
                            },
                            {
                              "type": "SpreadElement",
                              "argument": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arr",
                                "optional": false,
                                "range": [
                                  375,
                                  378
                                ],
                                "loc": {
                                  "end": {
                                    "column": 45,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 42,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                372,
                                378
                              ],
                              "loc": {
                                "end": {
                                  "column": 45,
                                  "line": 14
                                },
                                "start": {
                                  "column": 39,
                                  "line": 14
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "3",
                              "value": 3,
                              "range": [
                                380,
                                381
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 14
                                },
                                "start": {
                                  "column": 47,
                                  "line": 14
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
                              "name": "A",
                              "optional": false,
                              "range": [
                                355,
                                356
                              ],
                              "loc": {
                                "end": {
                                  "column": 23,
                                  "line": 14
                                },
                                "start": {
                                  "column": 22,
                                  "line": 14
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "fieldFunc2",
                              "range": [
                                357,
                                368
                              ],
                              "loc": {
                                "end": {
                                  "column": 35,
                                  "line": 14
                                },
                                "start": {
                                  "column": 24,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              355,
                              368
                            ],
                            "loc": {
                              "end": {
                                "column": 35,
                                "line": 14
                              },
                              "start": {
                                "column": 22,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            351,
                            382
                          ],
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 14
                            },
                            "start": {
                              "column": 18,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          347,
                          382
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 14
                          },
                          "start": {
                            "column": 14,
                            "line": 14
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      341,
                      383
                    ],
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 14
                      },
                      "start": {
                        "column": 8,
                        "line": 14
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
                          "name": "str",
                          "optional": false,
                          "range": [
                            398,
                            401
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 15
                            },
                            "start": {
                              "column": 14,
                              "line": 15
                            }
                          }
                        },
                        "init": {
                          "type": "TaggedTemplateExpression",
                          "quasi": {
                            "type": "TemplateLiteral",
                            "expressions": [
                              {
                                "type": "Literal",
                                "raw": "1",
                                "value": 1,
                                "range": [
                                  424,
                                  425
                                ],
                                "loc": {
                                  "end": {
                                    "column": 41,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 40,
                                    "line": 15
                                  }
                                }
                              },
                              {
                                "type": "Literal",
                                "raw": "2",
                                "value": 2,
                                "range": [
                                  434,
                                  435
                                ],
                                "loc": {
                                  "end": {
                                    "column": 51,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 50,
                                    "line": 15
                                  }
                                }
                              }
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "tail": false,
                                "value": {
                                  "cooked": "head",
                                  "raw": "head"
                                },
                                "range": [
                                  417,
                                  424
                                ],
                                "loc": {
                                  "end": {
                                    "column": 40,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 15
                                  }
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "tail": false,
                                "value": {
                                  "cooked": "middle",
                                  "raw": "middle"
                                },
                                "range": [
                                  425,
                                  434
                                ],
                                "loc": {
                                  "end": {
                                    "column": 50,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 41,
                                    "line": 15
                                  }
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "tail": true,
                                "value": {
                                  "cooked": "tail",
                                  "raw": "tail"
                                },
                                "range": [
                                  435,
                                  441
                                ],
                                "loc": {
                                  "end": {
                                    "column": 57,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 51,
                                    "line": 15
                                  }
                                }
                              }
                            ],
                            "range": [
                              417,
                              441
                            ],
                            "loc": {
                              "end": {
                                "column": 57,
                                "line": 15
                              },
                              "start": {
                                "column": 33,
                                "line": 15
                              }
                            }
                          },
                          "tag": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "range": [
                                404,
                                405
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
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "name": "fieldFunc2",
                              "range": [
                                406,
                                417
                              ],
                              "loc": {
                                "end": {
                                  "column": 33,
                                  "line": 15
                                },
                                "start": {
                                  "column": 22,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              404,
                              417
                            ],
                            "loc": {
                              "end": {
                                "column": 33,
                                "line": 15
                              },
                              "start": {
                                "column": 20,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            404,
                            441
                          ],
                          "loc": {
                            "end": {
                              "column": 57,
                              "line": 15
                            },
                            "start": {
                              "column": 20,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          398,
                          441
                        ],
                        "loc": {
                          "end": {
                            "column": 57,
                            "line": 15
                          },
                          "start": {
                            "column": 14,
                            "line": 15
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const",
                    "range": [
                      392,
                      442
                    ],
                    "loc": {
                      "end": {
                        "column": 58,
                        "line": 15
                      },
                      "start": {
                        "column": 8,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "TaggedTemplateExpression",
                      "quasi": {
                        "type": "TemplateLiteral",
                        "expressions": [
                          {
                            "type": "Literal",
                            "raw": "1",
                            "value": 1,
                            "range": [
                              485,
                              486
                            ],
                            "loc": {
                              "end": {
                                "column": 43,
                                "line": 16
                              },
                              "start": {
                                "column": 42,
                                "line": 16
                              }
                            }
                          },
                          {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              492,
                              493
                            ],
                            "loc": {
                              "end": {
                                "column": 50,
                                "line": 16
                              },
                              "start": {
                                "column": 49,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "tail": false,
                            "value": {
                              "cooked": "test",
                              "raw": "test"
                            },
                            "range": [
                              478,
                              485
                            ],
                            "loc": {
                              "end": {
                                "column": 42,
                                "line": 16
                              },
                              "start": {
                                "column": 35,
                                "line": 16
                              }
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "tail": false,
                            "value": {
                              "cooked": "and",
                              "raw": "and"
                            },
                            "range": [
                              486,
                              492
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 16
                              },
                              "start": {
                                "column": 43,
                                "line": 16
                              }
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "tail": true,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            },
                            "range": [
                              493,
                              495
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 16
                              },
                              "start": {
                                "column": 50,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "range": [
                          478,
                          495
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
                            "line": 16
                          },
                          "start": {
                            "column": 35,
                            "line": 16
                          }
                        }
                      },
                      "tag": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                451,
                                455
                              ],
                              "loc": {
                                "end": {
                                  "column": 12,
                                  "line": 16
                                },
                                "start": {
                                  "column": 8,
                                  "line": 16
                                }
                              }
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "getClass",
                              "optional": false,
                              "range": [
                                456,
                                464
                              ],
                              "loc": {
                                "end": {
                                  "column": 21,
                                  "line": 16
                                },
                                "start": {
                                  "column": 13,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              451,
                              464
                            ],
                            "loc": {
                              "end": {
                                "column": 21,
                                "line": 16
                              },
                              "start": {
                                "column": 8,
                                "line": 16
                              }
                            }
                          },
                          "optional": false,
                          "range": [
                            451,
                            466
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 16
                            },
                            "start": {
                              "column": 8,
                              "line": 16
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "fieldFunc2",
                          "range": [
                            467,
                            478
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 16
                            },
                            "start": {
                              "column": 24,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          451,
                          478
                        ],
                        "loc": {
                          "end": {
                            "column": 35,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        451,
                        495
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      451,
                      496
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
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
                  134,
                  502
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 17
                  },
                  "start": {
                    "column": 11,
                    "line": 5
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
                  "column": 8,
                  "line": 5
                }
              }
            },
            "range": [
              127,
              502
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 17
              },
              "start": {
                "column": 4,
                "line": 5
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
              "name": "getClass",
              "optional": false,
              "range": [
                507,
                515
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 18
                },
                "start": {
                  "column": 4,
                  "line": 18
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
                515,
                531
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "range": [
                        527,
                        528
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 18
                        },
                        "start": {
                          "column": 24,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      520,
                      529
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 18
                      },
                      "start": {
                        "column": 17,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  518,
                  531
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 18
                  },
                  "start": {
                    "column": 15,
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
                  "column": 28,
                  "line": 18
                },
                "start": {
                  "column": 12,
                  "line": 18
                }
              }
            },
            "range": [
              507,
              531
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
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
        533
      ],
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
      "column": 0,
      "line": 20
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
