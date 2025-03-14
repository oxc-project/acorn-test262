__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    551
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          8,
          550
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
                14,
                24
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 2
                },
                "start": {
                  "column": 4,
                  "line": 2
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                            40,
                            44
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 2
                            },
                            "start": {
                              "column": 30,
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
                            45,
                            46
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 2
                            },
                            "start": {
                              "column": 35,
                              "line": 2
                            }
                          }
                        },
                        "range": [
                          40,
                          46
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 2
                          },
                          "start": {
                            "column": 30,
                            "line": 2
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "raw": "10",
                        "value": 10,
                        "range": [
                          49,
                          51
                        ],
                        "loc": {
                          "end": {
                            "column": 41,
                            "line": 2
                          },
                          "start": {
                            "column": 39,
                            "line": 2
                          }
                        }
                      },
                      "range": [
                        40,
                        51
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 2
                        },
                        "start": {
                          "column": 30,
                          "line": 2
                        }
                      }
                    },
                    "range": [
                      40,
                      52
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 2
                      },
                      "start": {
                        "column": 30,
                        "line": 2
                      }
                    }
                  }
                ],
                "range": [
                  38,
                  54
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 2
                  },
                  "start": {
                    "column": 28,
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
                27,
                54
              ],
              "loc": {
                "end": {
                  "column": 44,
                  "line": 2
                },
                "start": {
                  "column": 17,
                  "line": 2
                }
              }
            },
            "range": [
              14,
              55
            ],
            "loc": {
              "end": {
                "column": 45,
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
                60,
                71
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  92,
                  94
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 3
                  },
                  "start": {
                    "column": 36,
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
                    83,
                    84
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 3
                    },
                    "start": {
                      "column": 27,
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
                      89,
                      90
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
                  "decorators": [],
                  "optional": false,
                  "range": [
                    86,
                    90
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 3
                    },
                    "start": {
                      "column": 30,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                74,
                94
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 3
                },
                "start": {
                  "column": 18,
                  "line": 3
                }
              }
            },
            "range": [
              60,
              95
            ],
            "loc": {
              "end": {
                "column": 39,
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
                100,
                101
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
                104,
                105
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
              100,
              106
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
                111,
                115
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
                115,
                510
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
                          "type": "ThisExpression",
                          "range": [
                            128,
                            132
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
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
                            133,
                            143
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
                              "line": 6
                            },
                            "start": {
                              "column": 13,
                              "line": 6
                            }
                          }
                        },
                        "range": [
                          128,
                          143
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
                      "optional": false,
                      "range": [
                        128,
                        145
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 6
                        },
                        "start": {
                          "column": 8,
                          "line": 6
                        }
                      }
                    },
                    "range": [
                      128,
                      146
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
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
                            "type": "ThisExpression",
                            "range": [
                              155,
                              159
                            ],
                            "loc": {
                              "end": {
                                "column": 12,
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
                              160,
                              170
                            ],
                            "loc": {
                              "end": {
                                "column": 23,
                                "line": 7
                              },
                              "start": {
                                "column": 13,
                                "line": 7
                              }
                            }
                          },
                          "range": [
                            155,
                            170
                          ],
                          "loc": {
                            "end": {
                              "column": 23,
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
                          155,
                          174
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 7
                          },
                          "start": {
                            "column": 8,
                            "line": 7
                          }
                        }
                      },
                      "range": [
                        155,
                        174
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 7
                        },
                        "start": {
                          "column": 8,
                          "line": 7
                        }
                      }
                    },
                    "range": [
                      155,
                      175
                    ],
                    "loc": {
                      "end": {
                        "column": 28,
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
                            190,
                            194
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
                            "type": "ThisExpression",
                            "range": [
                              197,
                              201
                            ],
                            "loc": {
                              "end": {
                                "column": 25,
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
                              202,
                              212
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 8
                              },
                              "start": {
                                "column": 26,
                                "line": 8
                              }
                            }
                          },
                          "range": [
                            197,
                            212
                          ],
                          "loc": {
                            "end": {
                              "column": 36,
                              "line": 8
                            },
                            "start": {
                              "column": 21,
                              "line": 8
                            }
                          }
                        },
                        "range": [
                          190,
                          212
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
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
                      184,
                      213
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
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
                          222,
                          226
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
                        222,
                        228
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
                      222,
                      229
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
                          "type": "ThisExpression",
                          "range": [
                            242,
                            246
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
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
                            247,
                            257
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 10
                            },
                            "start": {
                              "column": 17,
                              "line": 10
                            }
                          }
                        },
                        "range": [
                          242,
                          257
                        ],
                        "loc": {
                          "end": {
                            "column": 27,
                            "line": 10
                          },
                          "start": {
                            "column": 12,
                            "line": 10
                          }
                        }
                      },
                      "range": [
                        238,
                        259
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 10
                        },
                        "start": {
                          "column": 8,
                          "line": 10
                        }
                      }
                    },
                    "range": [
                      238,
                      260
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
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
                            276,
                            279
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
                                284,
                                285
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
                                287,
                                288
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
                            282,
                            290
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
                          276,
                          290
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
                      270,
                      291
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
                            317,
                            318
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 13
                            },
                            "start": {
                              "column": 25,
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
                              323,
                              326
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 13
                              },
                              "start": {
                                "column": 31,
                                "line": 13
                              }
                            }
                          },
                          "range": [
                            320,
                            326
                          ],
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 13
                            },
                            "start": {
                              "column": 28,
                              "line": 13
                            }
                          }
                        },
                        {
                          "type": "Literal",
                          "raw": "3",
                          "value": 3,
                          "range": [
                            328,
                            329
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 13
                            },
                            "start": {
                              "column": 36,
                              "line": 13
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
                            300,
                            304
                          ],
                          "loc": {
                            "end": {
                              "column": 12,
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
                            305,
                            316
                          ],
                          "loc": {
                            "end": {
                              "column": 24,
                              "line": 13
                            },
                            "start": {
                              "column": 13,
                              "line": 13
                            }
                          }
                        },
                        "range": [
                          300,
                          316
                        ],
                        "loc": {
                          "end": {
                            "column": 24,
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
                        300,
                        330
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 13
                        },
                        "start": {
                          "column": 8,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      300,
                      331
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
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
                            346,
                            347
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
                                371,
                                372
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 14
                                },
                                "start": {
                                  "column": 39,
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
                                  377,
                                  380
                                ],
                                "loc": {
                                  "end": {
                                    "column": 48,
                                    "line": 14
                                  },
                                  "start": {
                                    "column": 45,
                                    "line": 14
                                  }
                                }
                              },
                              "range": [
                                374,
                                380
                              ],
                              "loc": {
                                "end": {
                                  "column": 48,
                                  "line": 14
                                },
                                "start": {
                                  "column": 42,
                                  "line": 14
                                }
                              }
                            },
                            {
                              "type": "Literal",
                              "raw": "3",
                              "value": 3,
                              "range": [
                                382,
                                383
                              ],
                              "loc": {
                                "end": {
                                  "column": 51,
                                  "line": 14
                                },
                                "start": {
                                  "column": 50,
                                  "line": 14
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
                                354,
                                358
                              ],
                              "loc": {
                                "end": {
                                  "column": 26,
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
                                359,
                                370
                              ],
                              "loc": {
                                "end": {
                                  "column": 38,
                                  "line": 14
                                },
                                "start": {
                                  "column": 27,
                                  "line": 14
                                }
                              }
                            },
                            "range": [
                              354,
                              370
                            ],
                            "loc": {
                              "end": {
                                "column": 38,
                                "line": 14
                              },
                              "start": {
                                "column": 22,
                                "line": 14
                              }
                            }
                          },
                          "range": [
                            350,
                            384
                          ],
                          "loc": {
                            "end": {
                              "column": 52,
                              "line": 14
                            },
                            "start": {
                              "column": 18,
                              "line": 14
                            }
                          }
                        },
                        "range": [
                          346,
                          384
                        ],
                        "loc": {
                          "end": {
                            "column": 52,
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
                      340,
                      385
                    ],
                    "loc": {
                      "end": {
                        "column": 53,
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
                            400,
                            403
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
                                  429,
                                  430
                                ],
                                "loc": {
                                  "end": {
                                    "column": 44,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 43,
                                    "line": 15
                                  }
                                }
                              },
                              {
                                "type": "Literal",
                                "raw": "2",
                                "value": 2,
                                "range": [
                                  439,
                                  440
                                ],
                                "loc": {
                                  "end": {
                                    "column": 54,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 53,
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
                                  422,
                                  429
                                ],
                                "loc": {
                                  "end": {
                                    "column": 43,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 36,
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
                                  430,
                                  439
                                ],
                                "loc": {
                                  "end": {
                                    "column": 53,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 44,
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
                                  440,
                                  446
                                ],
                                "loc": {
                                  "end": {
                                    "column": 60,
                                    "line": 15
                                  },
                                  "start": {
                                    "column": 54,
                                    "line": 15
                                  }
                                }
                              }
                            ],
                            "range": [
                              422,
                              446
                            ],
                            "loc": {
                              "end": {
                                "column": 60,
                                "line": 15
                              },
                              "start": {
                                "column": 36,
                                "line": 15
                              }
                            }
                          },
                          "tag": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "range": [
                                406,
                                410
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
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
                                411,
                                422
                              ],
                              "loc": {
                                "end": {
                                  "column": 36,
                                  "line": 15
                                },
                                "start": {
                                  "column": 25,
                                  "line": 15
                                }
                              }
                            },
                            "range": [
                              406,
                              422
                            ],
                            "loc": {
                              "end": {
                                "column": 36,
                                "line": 15
                              },
                              "start": {
                                "column": 20,
                                "line": 15
                              }
                            }
                          },
                          "range": [
                            406,
                            446
                          ],
                          "loc": {
                            "end": {
                              "column": 60,
                              "line": 15
                            },
                            "start": {
                              "column": 20,
                              "line": 15
                            }
                          }
                        },
                        "range": [
                          400,
                          446
                        ],
                        "loc": {
                          "end": {
                            "column": 60,
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
                      394,
                      447
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
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
                              493,
                              494
                            ],
                            "loc": {
                              "end": {
                                "column": 46,
                                "line": 16
                              },
                              "start": {
                                "column": 45,
                                "line": 16
                              }
                            }
                          },
                          {
                            "type": "Literal",
                            "raw": "2",
                            "value": 2,
                            "range": [
                              500,
                              501
                            ],
                            "loc": {
                              "end": {
                                "column": 53,
                                "line": 16
                              },
                              "start": {
                                "column": 52,
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
                              486,
                              493
                            ],
                            "loc": {
                              "end": {
                                "column": 45,
                                "line": 16
                              },
                              "start": {
                                "column": 38,
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
                              494,
                              500
                            ],
                            "loc": {
                              "end": {
                                "column": 52,
                                "line": 16
                              },
                              "start": {
                                "column": 46,
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
                              501,
                              503
                            ],
                            "loc": {
                              "end": {
                                "column": 55,
                                "line": 16
                              },
                              "start": {
                                "column": 53,
                                "line": 16
                              }
                            }
                          }
                        ],
                        "range": [
                          486,
                          503
                        ],
                        "loc": {
                          "end": {
                            "column": 55,
                            "line": 16
                          },
                          "start": {
                            "column": 38,
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
                                456,
                                460
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
                              "name": "getInstance",
                              "optional": false,
                              "range": [
                                461,
                                472
                              ],
                              "loc": {
                                "end": {
                                  "column": 24,
                                  "line": 16
                                },
                                "start": {
                                  "column": 13,
                                  "line": 16
                                }
                              }
                            },
                            "range": [
                              456,
                              472
                            ],
                            "loc": {
                              "end": {
                                "column": 24,
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
                            456,
                            474
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
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
                            475,
                            486
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 16
                            },
                            "start": {
                              "column": 27,
                              "line": 16
                            }
                          }
                        },
                        "range": [
                          456,
                          486
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 16
                          },
                          "start": {
                            "column": 8,
                            "line": 16
                          }
                        }
                      },
                      "range": [
                        456,
                        503
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 16
                        },
                        "start": {
                          "column": 8,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      456,
                      504
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
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
                  118,
                  510
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
              111,
              510
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
              "name": "getInstance",
              "optional": false,
              "range": [
                515,
                526
              ],
              "loc": {
                "end": {
                  "column": 15,
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
                526,
                548
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "range": [
                          542,
                          543
                        ],
                        "loc": {
                          "end": {
                            "column": 32,
                            "line": 18
                          },
                          "start": {
                            "column": 31,
                            "line": 18
                          }
                        }
                      },
                      "range": [
                        538,
                        545
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 18
                        },
                        "start": {
                          "column": 27,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      531,
                      546
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 18
                      },
                      "start": {
                        "column": 20,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  529,
                  548
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 18
                  },
                  "start": {
                    "column": 18,
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
                  "column": 37,
                  "line": 18
                },
                "start": {
                  "column": 15,
                  "line": 18
                }
              }
            },
            "range": [
              515,
              548
            ],
            "loc": {
              "end": {
                "column": 37,
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
        550
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
