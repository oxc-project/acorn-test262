__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1404
  ],
  "body": [
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    68,
                    69
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
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      85,
                      86
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 2
                      },
                      "start": {
                        "column": 25,
                        "line": 2
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      81,
                      82
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 2
                      },
                      "start": {
                        "column": 21,
                        "line": 2
                      }
                    }
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          74,
                          78
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 2
                          },
                          "start": {
                            "column": 14,
                            "line": 2
                          }
                        }
                      },
                      "operator": "!",
                      "prefix": true,
                      "range": [
                        73,
                        78
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 2
                        },
                        "start": {
                          "column": 13,
                          "line": 2
                        }
                      }
                    },
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      72,
                      78
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 2
                      },
                      "start": {
                        "column": 12,
                        "line": 2
                      }
                    }
                  },
                  "range": [
                    72,
                    86
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 2
                    },
                    "start": {
                      "column": 12,
                      "line": 2
                    }
                  }
                },
                "range": [
                  68,
                  86
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 2
                  },
                  "start": {
                    "column": 8,
                    "line": 2
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              64,
              87
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    120,
                    121
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 3
                    },
                    "start": {
                      "column": 4,
                      "line": 3
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    122,
                    123
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
                "range": [
                  120,
                  123
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 3
                  },
                  "start": {
                    "column": 4,
                    "line": 3
                  }
                }
              },
              "optional": false,
              "range": [
                120,
                125
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 3
                },
                "start": {
                  "column": 4,
                  "line": 3
                }
              }
            },
            "range": [
              120,
              126
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
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
                  "raw": "'hello'",
                  "value": "hello",
                  "range": [
                    135,
                    142
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 4
                    },
                    "start": {
                      "column": 8,
                      "line": 4
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    131,
                    132
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
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    133,
                    134
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 4
                    },
                    "start": {
                      "column": 6,
                      "line": 4
                    }
                  }
                },
                "range": [
                  131,
                  134
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 4
                  },
                  "start": {
                    "column": 4,
                    "line": 4
                  }
                }
              },
              "optional": false,
              "range": [
                131,
                143
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 4
                },
                "start": {
                  "column": 4,
                  "line": 4
                }
              }
            },
            "range": [
              131,
              144
            ],
            "loc": {
              "end": {
                "column": 17,
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
          58,
          146
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 58,
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
          9,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 1
              },
              "start": {
                "column": 13,
                "line": 1
              }
            },
            "range": [
              13,
              28
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      17,
                      18
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 1
                      },
                      "start": {
                        "column": 17,
                        "line": 1
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 1
                      },
                      "start": {
                        "column": 20,
                        "line": 1
                      }
                    },
                    "range": [
                      20,
                      26
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        22,
                        26
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 1
                        },
                        "start": {
                          "column": 22,
                          "line": 1
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    17,
                    26
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 1
                    },
                    "start": {
                      "column": 17,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                15,
                28
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 1
                },
                "start": {
                  "column": 15,
                  "line": 1
                }
              }
            }
          },
          "range": [
            12,
            28
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 1
            },
            "start": {
              "column": 12,
              "line": 1
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 56,
                "line": 1
              },
              "start": {
                "column": 31,
                "line": 1
              }
            },
            "range": [
              31,
              56
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      35,
                      36
                    ],
                    "loc": {
                      "end": {
                        "column": 36,
                        "line": 1
                      },
                      "start": {
                        "column": 35,
                        "line": 1
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 1
                          },
                          "start": {
                            "column": 39,
                            "line": 1
                          }
                        },
                        "range": [
                          39,
                          47
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            41,
                            47
                          ],
                          "loc": {
                            "end": {
                              "column": 47,
                              "line": 1
                            },
                            "start": {
                              "column": 41,
                              "line": 1
                            }
                          }
                        }
                      },
                      "range": [
                        37,
                        47
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 1
                        },
                        "start": {
                          "column": 37,
                          "line": 1
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 54,
                        "line": 1
                      },
                      "start": {
                        "column": 48,
                        "line": 1
                      }
                    },
                    "range": [
                      48,
                      54
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        50,
                        54
                      ],
                      "loc": {
                        "end": {
                          "column": 54,
                          "line": 1
                        },
                        "start": {
                          "column": 50,
                          "line": 1
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    35,
                    54
                  ],
                  "loc": {
                    "end": {
                      "column": 54,
                      "line": 1
                    },
                    "start": {
                      "column": 35,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                33,
                56
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 1
                },
                "start": {
                  "column": 33,
                  "line": 1
                }
              }
            }
          },
          "range": [
            30,
            56
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 1
            },
            "start": {
              "column": 30,
              "line": 1
            }
          }
        }
      ],
      "range": [
        0,
        146
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 5
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    237,
                    238
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      254,
                      255
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 8
                      },
                      "start": {
                        "column": 25,
                        "line": 8
                      }
                    }
                  },
                  "consequent": {
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
                        "column": 22,
                        "line": 8
                      },
                      "start": {
                        "column": 21,
                        "line": 8
                      }
                    }
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          243,
                          247
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
                      "operator": "!",
                      "prefix": true,
                      "range": [
                        242,
                        247
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 8
                        },
                        "start": {
                          "column": 13,
                          "line": 8
                        }
                      }
                    },
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      241,
                      247
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 8
                      },
                      "start": {
                        "column": 12,
                        "line": 8
                      }
                    }
                  },
                  "range": [
                    241,
                    255
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 8
                    },
                    "start": {
                      "column": 12,
                      "line": 8
                    }
                  }
                },
                "range": [
                  237,
                  255
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              233,
              256
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 8
              },
              "start": {
                "column": 4,
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
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "range": [
                    289,
                    290
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 9
                    },
                    "start": {
                      "column": 4,
                      "line": 9
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    291,
                    292
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 9
                    },
                    "start": {
                      "column": 6,
                      "line": 9
                    }
                  }
                },
                "range": [
                  289,
                  292
                ],
                "loc": {
                  "end": {
                    "column": 7,
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
                289,
                294
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 9
                },
                "start": {
                  "column": 4,
                  "line": 9
                }
              }
            },
            "range": [
              289,
              295
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
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
                  "raw": "'hello'",
                  "value": "hello",
                  "range": [
                    304,
                    311
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    300,
                    301
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 10
                    },
                    "start": {
                      "column": 4,
                      "line": 10
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    302,
                    303
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 10
                    },
                    "start": {
                      "column": 6,
                      "line": 10
                    }
                  }
                },
                "range": [
                  300,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 10
                  },
                  "start": {
                    "column": 4,
                    "line": 10
                  }
                }
              },
              "optional": false,
              "range": [
                300,
                312
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 4,
                  "line": 10
                }
              }
            },
            "range": [
              300,
              313
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          }
        ],
        "range": [
          227,
          315
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 11
          },
          "start": {
            "column": 79,
            "line": 7
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
          157,
          159
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 7
          },
          "start": {
            "column": 9,
            "line": 7
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 7
              },
              "start": {
                "column": 13,
                "line": 7
              }
            },
            "range": [
              161,
              197
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      165,
                      166
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 7
                      },
                      "start": {
                        "column": 17,
                        "line": 7
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 7
                          },
                          "start": {
                            "column": 20,
                            "line": 7
                          }
                        },
                        "range": [
                          168,
                          188
                        ],
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSStringKeyword",
                              "range": [
                                170,
                                176
                              ],
                              "loc": {
                                "end": {
                                  "column": 28,
                                  "line": 7
                                },
                                "start": {
                                  "column": 22,
                                  "line": 7
                                }
                              }
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "range": [
                                179,
                                188
                              ],
                              "loc": {
                                "end": {
                                  "column": 40,
                                  "line": 7
                                },
                                "start": {
                                  "column": 31,
                                  "line": 7
                                }
                              }
                            }
                          ],
                          "range": [
                            170,
                            188
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 7
                            },
                            "start": {
                              "column": 22,
                              "line": 7
                            }
                          }
                        }
                      },
                      "range": [
                        167,
                        188
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 7
                        },
                        "start": {
                          "column": 19,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 7
                      },
                      "start": {
                        "column": 41,
                        "line": 7
                      }
                    },
                    "range": [
                      189,
                      195
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        191,
                        195
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 7
                        },
                        "start": {
                          "column": 43,
                          "line": 7
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    165,
                    195
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 7
                    },
                    "start": {
                      "column": 17,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                163,
                197
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 7
                },
                "start": {
                  "column": 15,
                  "line": 7
                }
              }
            }
          },
          "range": [
            160,
            197
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 7
            },
            "start": {
              "column": 12,
              "line": 7
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 77,
                "line": 7
              },
              "start": {
                "column": 52,
                "line": 7
              }
            },
            "range": [
              200,
              225
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f",
                    "optional": false,
                    "range": [
                      204,
                      205
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 7
                      },
                      "start": {
                        "column": 56,
                        "line": 7
                      }
                    }
                  },
                  "kind": "method",
                  "optional": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 68,
                            "line": 7
                          },
                          "start": {
                            "column": 60,
                            "line": 7
                          }
                        },
                        "range": [
                          208,
                          216
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            210,
                            216
                          ],
                          "loc": {
                            "end": {
                              "column": 68,
                              "line": 7
                            },
                            "start": {
                              "column": 62,
                              "line": 7
                            }
                          }
                        }
                      },
                      "range": [
                        206,
                        216
                      ],
                      "loc": {
                        "end": {
                          "column": 68,
                          "line": 7
                        },
                        "start": {
                          "column": 58,
                          "line": 7
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 75,
                        "line": 7
                      },
                      "start": {
                        "column": 69,
                        "line": 7
                      }
                    },
                    "range": [
                      217,
                      223
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        219,
                        223
                      ],
                      "loc": {
                        "end": {
                          "column": 75,
                          "line": 7
                        },
                        "start": {
                          "column": 71,
                          "line": 7
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    204,
                    223
                  ],
                  "loc": {
                    "end": {
                      "column": 75,
                      "line": 7
                    },
                    "start": {
                      "column": 56,
                      "line": 7
                    }
                  }
                }
              ],
              "range": [
                202,
                225
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 7
                },
                "start": {
                  "column": 54,
                  "line": 7
                }
              }
            }
          },
          "range": [
            199,
            225
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 7
            },
            "start": {
              "column": 51,
              "line": 7
            }
          }
        }
      ],
      "range": [
        148,
        315
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 11
        },
        "start": {
          "column": 0,
          "line": 7
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
                  "name": "f",
                  "optional": false,
                  "range": [
                    379,
                    380
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 14
                    },
                    "start": {
                      "column": 8,
                      "line": 14
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      396,
                      397
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 14
                      },
                      "start": {
                        "column": 25,
                        "line": 14
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      392,
                      393
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
                  "test": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          385,
                          389
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 14
                          },
                          "start": {
                            "column": 14,
                            "line": 14
                          }
                        }
                      },
                      "operator": "!",
                      "prefix": true,
                      "range": [
                        384,
                        389
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 14
                        },
                        "start": {
                          "column": 13,
                          "line": 14
                        }
                      }
                    },
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      383,
                      389
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 14
                      },
                      "start": {
                        "column": 12,
                        "line": 14
                      }
                    }
                  },
                  "range": [
                    383,
                    397
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 14
                    },
                    "start": {
                      "column": 12,
                      "line": 14
                    }
                  }
                },
                "range": [
                  379,
                  397
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 14
                  },
                  "start": {
                    "column": 8,
                    "line": 14
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              375,
              398
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
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
                "name": "f",
                "optional": false,
                "range": [
                  428,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 15
                  },
                  "start": {
                    "column": 4,
                    "line": 15
                  }
                }
              },
              "optional": false,
              "range": [
                428,
                431
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 15
                },
                "start": {
                  "column": 4,
                  "line": 15
                }
              }
            },
            "range": [
              428,
              432
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 15
              },
              "start": {
                "column": 4,
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
                  "type": "Literal",
                  "raw": "'hello'",
                  "value": "hello",
                  "range": [
                    439,
                    446
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 16
                    },
                    "start": {
                      "column": 6,
                      "line": 16
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
                  437,
                  438
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 16
                  },
                  "start": {
                    "column": 4,
                    "line": 16
                  }
                }
              },
              "optional": false,
              "range": [
                437,
                447
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 16
                },
                "start": {
                  "column": 4,
                  "line": 16
                }
              }
            },
            "range": [
              437,
              448
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          369,
          450
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 52,
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
        "name": "f3",
        "optional": false,
        "range": [
          326,
          328
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 13
          },
          "start": {
            "column": 9,
            "line": 13
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 25,
                "line": 13
              },
              "start": {
                "column": 13,
                "line": 13
              }
            },
            "range": [
              330,
              342
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 13
                  },
                  "start": {
                    "column": 18,
                    "line": 13
                  }
                },
                "range": [
                  335,
                  342
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    338,
                    342
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 13
                    },
                    "start": {
                      "column": 21,
                      "line": 13
                    }
                  }
                }
              },
              "range": [
                332,
                342
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 13
                },
                "start": {
                  "column": 15,
                  "line": 13
                }
              }
            }
          },
          "range": [
            329,
            342
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 13
            },
            "start": {
              "column": 12,
              "line": 13
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 50,
                "line": 13
              },
              "start": {
                "column": 28,
                "line": 13
              }
            },
            "range": [
              345,
              367
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 13
                      },
                      "start": {
                        "column": 33,
                        "line": 13
                      }
                    },
                    "range": [
                      350,
                      358
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        352,
                        358
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 13
                        },
                        "start": {
                          "column": 35,
                          "line": 13
                        }
                      }
                    }
                  },
                  "range": [
                    348,
                    358
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 13
                    },
                    "start": {
                      "column": 31,
                      "line": 13
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 50,
                    "line": 13
                  },
                  "start": {
                    "column": 43,
                    "line": 13
                  }
                },
                "range": [
                  360,
                  367
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    363,
                    367
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 13
                    },
                    "start": {
                      "column": 46,
                      "line": 13
                    }
                  }
                }
              },
              "range": [
                347,
                367
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 13
                },
                "start": {
                  "column": 30,
                  "line": 13
                }
              }
            }
          },
          "range": [
            344,
            367
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 13
            },
            "start": {
              "column": 27,
              "line": 13
            }
          }
        }
      ],
      "range": [
        317,
        450
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 13
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
                  "name": "f",
                  "optional": false,
                  "range": [
                    535,
                    536
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 20
                    },
                    "start": {
                      "column": 8,
                      "line": 20
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      552,
                      553
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 20
                      },
                      "start": {
                        "column": 25,
                        "line": 20
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      548,
                      549
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 20
                      },
                      "start": {
                        "column": 21,
                        "line": 20
                      }
                    }
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          541,
                          545
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 20
                          },
                          "start": {
                            "column": 14,
                            "line": 20
                          }
                        }
                      },
                      "operator": "!",
                      "prefix": true,
                      "range": [
                        540,
                        545
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
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      539,
                      545
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 20
                      },
                      "start": {
                        "column": 12,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    539,
                    553
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 20
                    },
                    "start": {
                      "column": 12,
                      "line": 20
                    }
                  }
                },
                "range": [
                  535,
                  553
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 20
                  },
                  "start": {
                    "column": 8,
                    "line": 20
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              531,
              554
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 20
              },
              "start": {
                "column": 4,
                "line": 20
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
                "name": "f",
                "optional": false,
                "range": [
                  584,
                  585
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 21
                  },
                  "start": {
                    "column": 4,
                    "line": 21
                  }
                }
              },
              "optional": false,
              "range": [
                584,
                587
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 21
                },
                "start": {
                  "column": 4,
                  "line": 21
                }
              }
            },
            "range": [
              584,
              588
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
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "arguments": [
                {
                  "type": "Literal",
                  "raw": "'hello'",
                  "value": "hello",
                  "range": [
                    595,
                    602
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 22
                    },
                    "start": {
                      "column": 6,
                      "line": 22
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
                  593,
                  594
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 22
                  },
                  "start": {
                    "column": 4,
                    "line": 22
                  }
                }
              },
              "optional": false,
              "range": [
                593,
                603
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 22
                },
                "start": {
                  "column": 4,
                  "line": 22
                }
              }
            },
            "range": [
              593,
              604
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          525,
          606
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 73,
            "line": 19
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
          461,
          463
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 19
          },
          "start": {
            "column": 9,
            "line": 19
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 46,
                "line": 19
              },
              "start": {
                "column": 13,
                "line": 19
              }
            },
            "range": [
              465,
              498
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 19
                      },
                      "start": {
                        "column": 17,
                        "line": 19
                      }
                    },
                    "range": [
                      469,
                      489
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            471,
                            477
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 19
                            },
                            "start": {
                              "column": 19,
                              "line": 19
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            480,
                            489
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 19
                            },
                            "start": {
                              "column": 28,
                              "line": 19
                            }
                          }
                        }
                      ],
                      "range": [
                        471,
                        489
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 19
                        },
                        "start": {
                          "column": 19,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    468,
                    489
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 19
                    },
                    "start": {
                      "column": 16,
                      "line": 19
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 19
                  },
                  "start": {
                    "column": 39,
                    "line": 19
                  }
                },
                "range": [
                  491,
                  498
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    494,
                    498
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 19
                    },
                    "start": {
                      "column": 42,
                      "line": 19
                    }
                  }
                }
              },
              "range": [
                467,
                498
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 19
                },
                "start": {
                  "column": 15,
                  "line": 19
                }
              }
            }
          },
          "range": [
            464,
            498
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 19
            },
            "start": {
              "column": 12,
              "line": 19
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 71,
                "line": 19
              },
              "start": {
                "column": 49,
                "line": 19
              }
            },
            "range": [
              501,
              523
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 62,
                        "line": 19
                      },
                      "start": {
                        "column": 54,
                        "line": 19
                      }
                    },
                    "range": [
                      506,
                      514
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        508,
                        514
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 19
                        },
                        "start": {
                          "column": 56,
                          "line": 19
                        }
                      }
                    }
                  },
                  "range": [
                    504,
                    514
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 19
                    },
                    "start": {
                      "column": 52,
                      "line": 19
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 71,
                    "line": 19
                  },
                  "start": {
                    "column": 64,
                    "line": 19
                  }
                },
                "range": [
                  516,
                  523
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    519,
                    523
                  ],
                  "loc": {
                    "end": {
                      "column": 71,
                      "line": 19
                    },
                    "start": {
                      "column": 67,
                      "line": 19
                    }
                  }
                }
              },
              "range": [
                503,
                523
              ],
              "loc": {
                "end": {
                  "column": 71,
                  "line": 19
                },
                "start": {
                  "column": 51,
                  "line": 19
                }
              }
            }
          },
          "range": [
            500,
            523
          ],
          "loc": {
            "end": {
              "column": 71,
              "line": 19
            },
            "start": {
              "column": 48,
              "line": 19
            }
          }
        }
      ],
      "range": [
        452,
        606
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 19
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
                  "name": "f",
                  "optional": false,
                  "range": [
                    692,
                    693
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
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      709,
                      710
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 26
                      },
                      "start": {
                        "column": 25,
                        "line": 26
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      705,
                      706
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 26
                      },
                      "start": {
                        "column": 21,
                        "line": 26
                      }
                    }
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          698,
                          702
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 26
                          },
                          "start": {
                            "column": 14,
                            "line": 26
                          }
                        }
                      },
                      "operator": "!",
                      "prefix": true,
                      "range": [
                        697,
                        702
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 26
                        },
                        "start": {
                          "column": 13,
                          "line": 26
                        }
                      }
                    },
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      696,
                      702
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 26
                      },
                      "start": {
                        "column": 12,
                        "line": 26
                      }
                    }
                  },
                  "range": [
                    696,
                    710
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 26
                    },
                    "start": {
                      "column": 12,
                      "line": 26
                    }
                  }
                },
                "range": [
                  692,
                  710
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              688,
              711
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
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
                "name": "f",
                "optional": false,
                "range": [
                  742,
                  743
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 27
                  },
                  "start": {
                    "column": 4,
                    "line": 27
                  }
                }
              },
              "optional": false,
              "range": [
                742,
                745
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 27
                },
                "start": {
                  "column": 4,
                  "line": 27
                }
              }
            },
            "range": [
              742,
              746
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
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
                  "raw": "'hello'",
                  "value": "hello",
                  "range": [
                    753,
                    760
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 28
                    },
                    "start": {
                      "column": 6,
                      "line": 28
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
                  751,
                  752
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 28
                  },
                  "start": {
                    "column": 4,
                    "line": 28
                  }
                }
              },
              "optional": false,
              "range": [
                751,
                761
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 28
                },
                "start": {
                  "column": 4,
                  "line": 28
                }
              }
            },
            "range": [
              751,
              762
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          }
        ],
        "range": [
          682,
          764
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 29
          },
          "start": {
            "column": 74,
            "line": 25
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
          617,
          619
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 25
          },
          "start": {
            "column": 9,
            "line": 25
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 46,
                "line": 25
              },
              "start": {
                "column": 13,
                "line": 25
              }
            },
            "range": [
              621,
              654
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 25
                      },
                      "start": {
                        "column": 17,
                        "line": 25
                      }
                    },
                    "range": [
                      625,
                      645
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            627,
                            633
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 25
                            },
                            "start": {
                              "column": 19,
                              "line": 25
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            636,
                            645
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 25
                            },
                            "start": {
                              "column": 28,
                              "line": 25
                            }
                          }
                        }
                      ],
                      "range": [
                        627,
                        645
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 25
                        },
                        "start": {
                          "column": 19,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    624,
                    645
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 25
                    },
                    "start": {
                      "column": 16,
                      "line": 25
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 25
                  },
                  "start": {
                    "column": 39,
                    "line": 25
                  }
                },
                "range": [
                  647,
                  654
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    650,
                    654
                  ],
                  "loc": {
                    "end": {
                      "column": 46,
                      "line": 25
                    },
                    "start": {
                      "column": 42,
                      "line": 25
                    }
                  }
                }
              },
              "range": [
                623,
                654
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 25
                },
                "start": {
                  "column": 15,
                  "line": 25
                }
              }
            }
          },
          "range": [
            620,
            654
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
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 72,
                "line": 25
              },
              "start": {
                "column": 49,
                "line": 25
              }
            },
            "range": [
              657,
              680
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 25
                      },
                      "start": {
                        "column": 54,
                        "line": 25
                      }
                    },
                    "range": [
                      662,
                      671
                    ],
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "raw": "'hello'",
                        "value": "hello",
                        "range": [
                          664,
                          671
                        ],
                        "loc": {
                          "end": {
                            "column": 63,
                            "line": 25
                          },
                          "start": {
                            "column": 56,
                            "line": 25
                          }
                        }
                      },
                      "range": [
                        664,
                        671
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 25
                        },
                        "start": {
                          "column": 56,
                          "line": 25
                        }
                      }
                    }
                  },
                  "range": [
                    660,
                    671
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 25
                    },
                    "start": {
                      "column": 52,
                      "line": 25
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 25
                  },
                  "start": {
                    "column": 65,
                    "line": 25
                  }
                },
                "range": [
                  673,
                  680
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    676,
                    680
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 25
                    },
                    "start": {
                      "column": 68,
                      "line": 25
                    }
                  }
                }
              },
              "range": [
                659,
                680
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 25
                },
                "start": {
                  "column": 51,
                  "line": 25
                }
              }
            }
          },
          "range": [
            656,
            680
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 25
            },
            "start": {
              "column": 48,
              "line": 25
            }
          }
        }
      ],
      "range": [
        608,
        764
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 25
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
                  "name": "f",
                  "optional": false,
                  "range": [
                    850,
                    851
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 32
                    },
                    "start": {
                      "column": 8,
                      "line": 32
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "range": [
                      867,
                      868
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 32
                      },
                      "start": {
                        "column": 25,
                        "line": 32
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "range": [
                      863,
                      864
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 32
                      },
                      "start": {
                        "column": 21,
                        "line": 32
                      }
                    }
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          856,
                          860
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 32
                          },
                          "start": {
                            "column": 14,
                            "line": 32
                          }
                        }
                      },
                      "operator": "!",
                      "prefix": true,
                      "range": [
                        855,
                        860
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 32
                        },
                        "start": {
                          "column": 13,
                          "line": 32
                        }
                      }
                    },
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      854,
                      860
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 32
                      },
                      "start": {
                        "column": 12,
                        "line": 32
                      }
                    }
                  },
                  "range": [
                    854,
                    868
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 32
                    },
                    "start": {
                      "column": 12,
                      "line": 32
                    }
                  }
                },
                "range": [
                  850,
                  868
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 32
                  },
                  "start": {
                    "column": 8,
                    "line": 32
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              846,
              869
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 32
              },
              "start": {
                "column": 4,
                "line": 32
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
                "name": "f",
                "optional": false,
                "range": [
                  911,
                  912
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 33
                  },
                  "start": {
                    "column": 4,
                    "line": 33
                  }
                }
              },
              "optional": false,
              "range": [
                911,
                914
              ],
              "loc": {
                "end": {
                  "column": 7,
                  "line": 33
                },
                "start": {
                  "column": 4,
                  "line": 33
                }
              }
            },
            "range": [
              911,
              915
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 33
              },
              "start": {
                "column": 4,
                "line": 33
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
                  "raw": "'hello'",
                  "value": "hello",
                  "range": [
                    932,
                    939
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 34
                    },
                    "start": {
                      "column": 6,
                      "line": 34
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
                  930,
                  931
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 34
                  },
                  "start": {
                    "column": 4,
                    "line": 34
                  }
                }
              },
              "optional": false,
              "range": [
                930,
                940
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 34
                },
                "start": {
                  "column": 4,
                  "line": 34
                }
              }
            },
            "range": [
              930,
              941
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 34
              },
              "start": {
                "column": 4,
                "line": 34
              }
            }
          }
        ],
        "range": [
          840,
          943
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 35
          },
          "start": {
            "column": 74,
            "line": 31
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
          775,
          777
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 31
          },
          "start": {
            "column": 9,
            "line": 31
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 47,
                "line": 31
              },
              "start": {
                "column": 13,
                "line": 31
              }
            },
            "range": [
              779,
              813
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 31
                      },
                      "start": {
                        "column": 17,
                        "line": 31
                      }
                    },
                    "range": [
                      783,
                      804
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "raw": "'hello'",
                            "value": "hello",
                            "range": [
                              785,
                              792
                            ],
                            "loc": {
                              "end": {
                                "column": 26,
                                "line": 31
                              },
                              "start": {
                                "column": 19,
                                "line": 31
                              }
                            }
                          },
                          "range": [
                            785,
                            792
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 31
                            },
                            "start": {
                              "column": 19,
                              "line": 31
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            795,
                            804
                          ],
                          "loc": {
                            "end": {
                              "column": 38,
                              "line": 31
                            },
                            "start": {
                              "column": 29,
                              "line": 31
                            }
                          }
                        }
                      ],
                      "range": [
                        785,
                        804
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 31
                        },
                        "start": {
                          "column": 19,
                          "line": 31
                        }
                      }
                    }
                  },
                  "range": [
                    782,
                    804
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 31
                    },
                    "start": {
                      "column": 16,
                      "line": 31
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 31
                  },
                  "start": {
                    "column": 40,
                    "line": 31
                  }
                },
                "range": [
                  806,
                  813
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    809,
                    813
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 31
                    },
                    "start": {
                      "column": 43,
                      "line": 31
                    }
                  }
                }
              },
              "range": [
                781,
                813
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 31
                },
                "start": {
                  "column": 15,
                  "line": 31
                }
              }
            }
          },
          "range": [
            778,
            813
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 31
            },
            "start": {
              "column": 12,
              "line": 31
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 72,
                "line": 31
              },
              "start": {
                "column": 50,
                "line": 31
              }
            },
            "range": [
              816,
              838
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 63,
                        "line": 31
                      },
                      "start": {
                        "column": 55,
                        "line": 31
                      }
                    },
                    "range": [
                      821,
                      829
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        823,
                        829
                      ],
                      "loc": {
                        "end": {
                          "column": 63,
                          "line": 31
                        },
                        "start": {
                          "column": 57,
                          "line": 31
                        }
                      }
                    }
                  },
                  "range": [
                    819,
                    829
                  ],
                  "loc": {
                    "end": {
                      "column": 63,
                      "line": 31
                    },
                    "start": {
                      "column": 53,
                      "line": 31
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 31
                  },
                  "start": {
                    "column": 65,
                    "line": 31
                  }
                },
                "range": [
                  831,
                  838
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    834,
                    838
                  ],
                  "loc": {
                    "end": {
                      "column": 72,
                      "line": 31
                    },
                    "start": {
                      "column": 68,
                      "line": 31
                    }
                  }
                }
              },
              "range": [
                818,
                838
              ],
              "loc": {
                "end": {
                  "column": 72,
                  "line": 31
                },
                "start": {
                  "column": 52,
                  "line": 31
                }
              }
            }
          },
          "range": [
            815,
            838
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 31
            },
            "start": {
              "column": 49,
              "line": 31
            }
          }
        }
      ],
      "range": [
        766,
        943
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          950,
          951
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 37
          },
          "start": {
            "column": 5,
            "line": 37
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                960,
                961
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 38
                },
                "start": {
                  "column": 4,
                  "line": 38
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 38
                },
                "start": {
                  "column": 7,
                  "line": 38
                }
              },
              "range": [
                963,
                969
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  965,
                  969
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 38
                  },
                  "start": {
                    "column": 9,
                    "line": 38
                  }
                }
              }
            },
            "static": false,
            "range": [
              960,
              970
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          954,
          972
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 9,
            "line": 37
          }
        }
      },
      "range": [
        945,
        972
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 37
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          979,
          980
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 41
          },
          "start": {
            "column": 5,
            "line": 41
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "range": [
                989,
                990
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 42
                },
                "start": {
                  "column": 4,
                  "line": 42
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 42
                    },
                    "start": {
                      "column": 8,
                      "line": 42
                    }
                  },
                  "range": [
                    993,
                    1001
                  ],
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "range": [
                      995,
                      1001
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 42
                      },
                      "start": {
                        "column": 10,
                        "line": 42
                      }
                    }
                  }
                },
                "range": [
                  991,
                  1001
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 42
                  },
                  "start": {
                    "column": 6,
                    "line": 42
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 23,
                  "line": 42
                },
                "start": {
                  "column": 17,
                  "line": 42
                }
              },
              "range": [
                1002,
                1008
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  1004,
                  1008
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 42
                  },
                  "start": {
                    "column": 19,
                    "line": 42
                  }
                }
              }
            },
            "static": false,
            "range": [
              989,
              1009
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "g",
              "optional": false,
              "range": [
                1014,
                1015
              ],
              "loc": {
                "end": {
                  "column": 5,
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
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 13,
                  "line": 43
                },
                "start": {
                  "column": 7,
                  "line": 43
                }
              },
              "range": [
                1017,
                1023
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  1019,
                  1023
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 43
                  },
                  "start": {
                    "column": 9,
                    "line": 43
                  }
                }
              }
            },
            "static": false,
            "range": [
              1014,
              1024
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 43
              },
              "start": {
                "column": 4,
                "line": 43
              }
            }
          }
        ],
        "range": [
          983,
          1026
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 44
          },
          "start": {
            "column": 9,
            "line": 41
          }
        }
      },
      "range": [
        974,
        1026
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 41
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    1063,
                    1064
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 47
                    },
                    "start": {
                      "column": 8,
                      "line": 47
                    }
                  }
                },
                "init": {
                  "type": "ConditionalExpression",
                  "alternate": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      1080,
                      1081
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 47
                      },
                      "start": {
                        "column": 25,
                        "line": 47
                      }
                    }
                  },
                  "consequent": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "range": [
                      1076,
                      1077
                    ],
                    "loc": {
                      "end": {
                        "column": 22,
                        "line": 47
                      },
                      "start": {
                        "column": 21,
                        "line": 47
                      }
                    }
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "argument": {
                      "type": "UnaryExpression",
                      "argument": {
                        "type": "Literal",
                        "raw": "true",
                        "value": true,
                        "range": [
                          1069,
                          1073
                        ],
                        "loc": {
                          "end": {
                            "column": 18,
                            "line": 47
                          },
                          "start": {
                            "column": 14,
                            "line": 47
                          }
                        }
                      },
                      "operator": "!",
                      "prefix": true,
                      "range": [
                        1068,
                        1073
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 47
                        },
                        "start": {
                          "column": 13,
                          "line": 47
                        }
                      }
                    },
                    "operator": "!",
                    "prefix": true,
                    "range": [
                      1067,
                      1073
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 47
                      },
                      "start": {
                        "column": 12,
                        "line": 47
                      }
                    }
                  },
                  "range": [
                    1067,
                    1081
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 47
                    },
                    "start": {
                      "column": 12,
                      "line": 47
                    }
                  }
                },
                "range": [
                  1063,
                  1081
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 47
                  },
                  "start": {
                    "column": 8,
                    "line": 47
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              1059,
              1082
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    1097,
                    1098
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 48
                    },
                    "start": {
                      "column": 4,
                      "line": 48
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    1099,
                    1100
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 48
                    },
                    "start": {
                      "column": 6,
                      "line": 48
                    }
                  }
                },
                "range": [
                  1097,
                  1100
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 48
                  },
                  "start": {
                    "column": 4,
                    "line": 48
                  }
                }
              },
              "optional": false,
              "range": [
                1097,
                1102
              ],
              "loc": {
                "end": {
                  "column": 9,
                  "line": 48
                },
                "start": {
                  "column": 4,
                  "line": 48
                }
              }
            },
            "range": [
              1097,
              1103
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
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
                  "raw": "'hello'",
                  "value": "hello",
                  "range": [
                    1112,
                    1119
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 49
                    },
                    "start": {
                      "column": 8,
                      "line": 49
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
                  "name": "z",
                  "optional": false,
                  "range": [
                    1108,
                    1109
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 49
                    },
                    "start": {
                      "column": 4,
                      "line": 49
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "range": [
                    1110,
                    1111
                  ],
                  "loc": {
                    "end": {
                      "column": 7,
                      "line": 49
                    },
                    "start": {
                      "column": 6,
                      "line": 49
                    }
                  }
                },
                "range": [
                  1108,
                  1111
                ],
                "loc": {
                  "end": {
                    "column": 7,
                    "line": 49
                  },
                  "start": {
                    "column": 4,
                    "line": 49
                  }
                }
              },
              "optional": false,
              "range": [
                1108,
                1120
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 49
                },
                "start": {
                  "column": 4,
                  "line": 49
                }
              }
            },
            "range": [
              1108,
              1121
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 49
              },
              "start": {
                "column": 4,
                "line": 49
              }
            }
          }
        ],
        "range": [
          1053,
          1123
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 50
          },
          "start": {
            "column": 25,
            "line": 46
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "range": [
          1037,
          1040
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 46
          },
          "start": {
            "column": 9,
            "line": 46
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
                "column": 17,
                "line": 46
              },
              "start": {
                "column": 14,
                "line": 46
              }
            },
            "range": [
              1042,
              1045
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  1044,
                  1045
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 46
                  },
                  "start": {
                    "column": 16,
                    "line": 46
                  }
                }
              },
              "range": [
                1044,
                1045
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 46
                },
                "start": {
                  "column": 16,
                  "line": 46
                }
              }
            }
          },
          "range": [
            1041,
            1045
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
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 23,
                "line": 46
              },
              "start": {
                "column": 20,
                "line": 46
              }
            },
            "range": [
              1048,
              1051
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  1050,
                  1051
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 46
                  },
                  "start": {
                    "column": 22,
                    "line": 46
                  }
                }
              },
              "range": [
                1050,
                1051
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 46
                },
                "start": {
                  "column": 22,
                  "line": 46
                }
              }
            }
          },
          "range": [
            1047,
            1051
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 46
            },
            "start": {
              "column": 19,
              "line": 46
            }
          }
        }
      ],
      "range": [
        1028,
        1123
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1167,
          1193
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "range": [
                1173,
                1182
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 55
                },
                "start": {
                  "column": 4,
                  "line": 55
                }
              }
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 21,
                  "line": 55
                },
                "start": {
                  "column": 15,
                  "line": 55
                }
              },
              "range": [
                1184,
                1190
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  1186,
                  1190
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 55
                  },
                  "start": {
                    "column": 17,
                    "line": 55
                  }
                }
              }
            },
            "static": false,
            "range": [
              1173,
              1191
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 20,
            "line": 54
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReturnVal",
        "optional": false,
        "range": [
          1157,
          1166
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 54
          },
          "start": {
            "column": 10,
            "line": 54
          }
        }
      },
      "range": [
        1147,
        1193
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 56
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
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 58
                },
                "start": {
                  "column": 7,
                  "line": 58
                }
              },
              "range": [
                1202,
                1213
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReturnVal",
                  "optional": false,
                  "range": [
                    1204,
                    1213
                  ],
                  "loc": {
                    "end": {
                      "column": 18,
                      "line": 58
                    },
                    "start": {
                      "column": 9,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1204,
                  1213
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 58
                  },
                  "start": {
                    "column": 9,
                    "line": 58
                  }
                }
              }
            },
            "range": [
              1201,
              1213
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 58
              },
              "start": {
                "column": 6,
                "line": 58
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
                  "name": "something",
                  "optional": false,
                  "range": [
                    1218,
                    1227
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 58
                    },
                    "start": {
                      "column": 23,
                      "line": 58
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
                    1227,
                    1233
                  ],
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "range": [
                      1230,
                      1233
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 58
                      },
                      "start": {
                        "column": 35,
                        "line": 58
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
                      "column": 38,
                      "line": 58
                    },
                    "start": {
                      "column": 32,
                      "line": 58
                    }
                  }
                },
                "range": [
                  1218,
                  1233
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 58
                  },
                  "start": {
                    "column": 23,
                    "line": 58
                  }
                }
              }
            ],
            "range": [
              1216,
              1235
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 58
              },
              "start": {
                "column": 21,
                "line": 58
              }
            }
          },
          "range": [
            1201,
            1235
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 58
            },
            "start": {
              "column": 6,
              "line": 58
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1195,
        1235
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 58
        },
        "start": {
          "column": 0,
          "line": 58
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
            "name": "val",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 60
                },
                "start": {
                  "column": 17,
                  "line": 60
                }
              },
              "range": [
                1254,
                1265
              ],
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReturnVal",
                  "optional": false,
                  "range": [
                    1256,
                    1265
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 60
                    },
                    "start": {
                      "column": 19,
                      "line": 60
                    }
                  }
                },
                "range": [
                  1256,
                  1265
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 60
                  },
                  "start": {
                    "column": 19,
                    "line": 60
                  }
                }
              }
            },
            "range": [
              1251,
              1265
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 60
              },
              "start": {
                "column": 14,
                "line": 60
              }
            }
          },
          "init": null,
          "range": [
            1251,
            1265
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 60
            },
            "start": {
              "column": 14,
              "line": 60
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        1237,
        1266
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 60
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
                  "name": "something",
                  "optional": false,
                  "range": [
                    1335,
                    1344
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 62
                    },
                    "start": {
                      "column": 10,
                      "line": 62
                    }
                  }
                },
                "init": {
                  "type": "LogicalExpression",
                  "operator": "??",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "range": [
                        1347,
                        1354
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 62
                        },
                        "start": {
                          "column": 22,
                          "line": 62
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "range": [
                        1355,
                        1364
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 62
                        },
                        "start": {
                          "column": 30,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      1347,
                      1364
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 62
                      },
                      "start": {
                        "column": 22,
                        "line": 62
                      }
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "val",
                      "optional": false,
                      "range": [
                        1368,
                        1371
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 62
                        },
                        "start": {
                          "column": 43,
                          "line": 62
                        }
                      }
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "range": [
                        1372,
                        1381
                      ],
                      "loc": {
                        "end": {
                          "column": 56,
                          "line": 62
                        },
                        "start": {
                          "column": 47,
                          "line": 62
                        }
                      }
                    },
                    "range": [
                      1368,
                      1381
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 62
                      },
                      "start": {
                        "column": 43,
                        "line": 62
                      }
                    }
                  },
                  "range": [
                    1347,
                    1381
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 62
                    },
                    "start": {
                      "column": 22,
                      "line": 62
                    }
                  }
                },
                "range": [
                  1335,
                  1381
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 62
                  },
                  "start": {
                    "column": 10,
                    "line": 62
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              1329,
              1382
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 62
              },
              "start": {
                "column": 4,
                "line": 62
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
                  "raw": "''",
                  "value": "",
                  "range": [
                    1397,
                    1399
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 63
                    },
                    "start": {
                      "column": 14,
                      "line": 63
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "something",
                "optional": false,
                "range": [
                  1387,
                  1396
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 63
                  },
                  "start": {
                    "column": 4,
                    "line": 63
                  }
                }
              },
              "optional": false,
              "range": [
                1387,
                1400
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 63
                },
                "start": {
                  "column": 4,
                  "line": 63
                }
              }
            },
            "range": [
              1387,
              1401
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          }
        ],
        "range": [
          1323,
          1403
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 64
          },
          "start": {
            "column": 56,
            "line": 61
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "run",
        "optional": false,
        "range": [
          1276,
          1279
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 61
          },
          "start": {
            "column": 9,
            "line": 61
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 54,
                "line": 61
              },
              "start": {
                "column": 20,
                "line": 61
              }
            },
            "range": [
              1287,
              1321
            ],
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "something",
                    "optional": false,
                    "range": [
                      1291,
                      1300
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 61
                      },
                      "start": {
                        "column": 24,
                        "line": 61
                      }
                    }
                  },
                  "kind": "method",
                  "optional": true,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": true,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 45,
                            "line": 61
                          },
                          "start": {
                            "column": 37,
                            "line": 61
                          }
                        },
                        "range": [
                          1304,
                          1312
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1306,
                            1312
                          ],
                          "loc": {
                            "end": {
                              "column": 45,
                              "line": 61
                            },
                            "start": {
                              "column": 39,
                              "line": 61
                            }
                          }
                        }
                      },
                      "range": [
                        1302,
                        1312
                      ],
                      "loc": {
                        "end": {
                          "column": 45,
                          "line": 61
                        },
                        "start": {
                          "column": 35,
                          "line": 61
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 61
                      },
                      "start": {
                        "column": 46,
                        "line": 61
                      }
                    },
                    "range": [
                      1313,
                      1319
                    ],
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "range": [
                        1315,
                        1319
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 61
                        },
                        "start": {
                          "column": 48,
                          "line": 61
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    1291,
                    1319
                  ],
                  "loc": {
                    "end": {
                      "column": 52,
                      "line": 61
                    },
                    "start": {
                      "column": 24,
                      "line": 61
                    }
                  }
                }
              ],
              "range": [
                1289,
                1321
              ],
              "loc": {
                "end": {
                  "column": 54,
                  "line": 61
                },
                "start": {
                  "column": 22,
                  "line": 61
                }
              }
            }
          },
          "range": [
            1280,
            1321
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 61
            },
            "start": {
              "column": 13,
              "line": 61
            }
          }
        }
      ],
      "range": [
        1267,
        1403
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 61
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 65
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
