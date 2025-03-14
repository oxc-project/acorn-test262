__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    425
  ],
  "body": [
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "body": {
              "type": "TSInterfaceBody",
              "range": [
                40,
                70
              ],
              "body": [
                {
                  "type": "TSMethodSignature",
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "now",
                    "optional": false,
                    "range": [
                      50,
                      53
                    ],
                    "loc": {
                      "end": {
                        "column": 11,
                        "line": 3
                      },
                      "start": {
                        "column": 8,
                        "line": 3
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
                        "line": 3
                      },
                      "start": {
                        "column": 13,
                        "line": 3
                      }
                    },
                    "range": [
                      55,
                      63
                    ],
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "range": [
                        57,
                        63
                      ],
                      "loc": {
                        "end": {
                          "column": 21,
                          "line": 3
                        },
                        "start": {
                          "column": 15,
                          "line": 3
                        }
                      }
                    }
                  },
                  "static": false,
                  "range": [
                    50,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 4
                },
                "start": {
                  "column": 23,
                  "line": 2
                }
              }
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "range": [
                31,
                39
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 2
                },
                "start": {
                  "column": 14,
                  "line": 2
                }
              }
            },
            "range": [
              21,
              70
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          15,
          72
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 5
          },
          "start": {
            "column": 15,
            "line": 1
          }
        }
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "global",
        "optional": false,
        "range": [
          8,
          14
        ],
        "loc": {
          "end": {
            "column": 14,
            "line": 1
          },
          "start": {
            "column": 8,
            "line": 1
          }
        }
      },
      "kind": "global",
      "range": [
        0,
        72
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
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "range": [
                74,
                82
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 7
                },
                "start": {
                  "column": 0,
                  "line": 7
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "range": [
                83,
                92
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              }
            },
            "range": [
              74,
              92
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 7
              },
              "start": {
                "column": 0,
                "line": 7
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "now",
            "optional": false,
            "range": [
              93,
              96
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 7
              },
              "start": {
                "column": 19,
                "line": 7
              }
            }
          },
          "range": [
            74,
            96
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 7
            },
            "start": {
              "column": 0,
              "line": 7
            }
          }
        },
        "right": {
          "type": "FunctionExpression",
          "async": false,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Literal",
                  "raw": "\"now\"",
                  "value": "now",
                  "range": [
                    124,
                    129
                  ],
                  "loc": {
                    "end": {
                      "column": 16,
                      "line": 8
                    },
                    "start": {
                      "column": 11,
                      "line": 8
                    }
                  }
                },
                "range": [
                  117,
                  129
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 8
                  },
                  "start": {
                    "column": 4,
                    "line": 8
                  }
                }
              }
            ],
            "range": [
              111,
              131
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 9
              },
              "start": {
                "column": 37,
                "line": 7
              }
            }
          },
          "declare": false,
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "range": [
            99,
            131
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 9
            },
            "start": {
              "column": 25,
              "line": 7
            }
          }
        },
        "range": [
          74,
          131
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 7
          }
        }
      },
      "range": [
        74,
        131
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          141,
          207
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "now",
              "optional": false,
              "range": [
                154,
                157
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 12
                },
                "start": {
                  "column": 11,
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
                157,
                185
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "range": [
                        177,
                        179
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 13
                        },
                        "start": {
                          "column": 15,
                          "line": 13
                        }
                      }
                    },
                    "range": [
                      170,
                      179
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 13
                      },
                      "start": {
                        "column": 8,
                        "line": 13
                      }
                    }
                  }
                ],
                "range": [
                  160,
                  185
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 14
                  },
                  "start": {
                    "column": 17,
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
                  "column": 5,
                  "line": 14
                },
                "start": {
                  "column": 14,
                  "line": 12
                }
              }
            },
            "range": [
              147,
              185
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 12
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
              "name": "why",
              "optional": false,
              "range": [
                191,
                194
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
                194,
                205
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  197,
                  205
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
              191,
              205
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
            "column": 8,
            "line": 11
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "range": [
          139,
          140
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 11
          },
          "start": {
            "column": 6,
            "line": 11
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        133,
        207
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 11
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          217,
          221
        ],
        "body": [],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 8,
            "line": 21
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "range": [
          215,
          216
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 21
          },
          "start": {
            "column": 6,
            "line": 21
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        209,
        221
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
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
            "type": "CallExpression",
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "range": [
                  235,
                  236
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
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "now",
                "optional": false,
                "range": [
                  237,
                  240
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 25
                  },
                  "start": {
                    "column": 14,
                    "line": 25
                  }
                }
              },
              "range": [
                235,
                240
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
            "optional": false,
            "range": [
              235,
              242
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 25
              },
              "start": {
                "column": 12,
                "line": 25
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
            "name": "console",
            "optional": false,
            "range": [
              223,
              230
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 25
              },
              "start": {
                "column": 0,
                "line": 25
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              231,
              234
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 25
              },
              "start": {
                "column": 8,
                "line": 25
              }
            }
          },
          "range": [
            223,
            234
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 25
            },
            "start": {
              "column": 0,
              "line": 25
            }
          }
        },
        "optional": false,
        "range": [
          223,
          243
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 25
          },
          "start": {
            "column": 0,
            "line": 25
          }
        }
      },
      "range": [
        223,
        243
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Y",
                "optional": false,
                "range": [
                  277,
                  278
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 26
                  },
                  "start": {
                    "column": 12,
                    "line": 26
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "now",
                "optional": false,
                "range": [
                  279,
                  282
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 26
                  },
                  "start": {
                    "column": 14,
                    "line": 26
                  }
                }
              },
              "range": [
                277,
                282
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
            "optional": false,
            "range": [
              277,
              284
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 26
              },
              "start": {
                "column": 12,
                "line": 26
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
            "name": "console",
            "optional": false,
            "range": [
              265,
              272
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 26
              },
              "start": {
                "column": 0,
                "line": 26
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "range": [
              273,
              276
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 26
              },
              "start": {
                "column": 8,
                "line": 26
              }
            }
          },
          "range": [
            265,
            276
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 26
            },
            "start": {
              "column": 0,
              "line": 26
            }
          }
        },
        "optional": false,
        "range": [
          265,
          285
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 26
          },
          "start": {
            "column": 0,
            "line": 26
          }
        }
      },
      "range": [
        265,
        285
      ],
      "loc": {
        "end": {
          "column": 20,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "range": [
        308,
        370
      ],
      "attributes": [],
      "declaration": {
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
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 28
                  },
                  "start": {
                    "column": 14,
                    "line": 28
                  }
                },
                "range": [
                  322,
                  334
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "range": [
                          324,
                          325
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 28
                          },
                          "start": {
                            "column": 16,
                            "line": 28
                          }
                        }
                      },
                      "range": [
                        324,
                        325
                      ],
                      "loc": {
                        "end": {
                          "column": 17,
                          "line": 28
                        },
                        "start": {
                          "column": 16,
                          "line": 28
                        }
                      }
                    },
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        328,
                        334
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 28
                        },
                        "start": {
                          "column": 20,
                          "line": 28
                        }
                      }
                    }
                  ],
                  "range": [
                    324,
                    334
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 28
                    },
                    "start": {
                      "column": 16,
                      "line": 28
                    }
                  }
                }
              },
              "range": [
                321,
                334
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 28
                },
                "start": {
                  "column": 13,
                  "line": 28
                }
              }
            },
            "init": {
              "type": "ConditionalExpression",
              "alternate": {
                "type": "Literal",
                "raw": "1",
                "value": 1,
                "range": [
                  369,
                  370
                ],
                "loc": {
                  "end": {
                    "column": 62,
                    "line": 28
                  },
                  "start": {
                    "column": 61,
                    "line": 28
                  }
                }
              },
              "consequent": {
                "type": "NewExpression",
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "range": [
                    363,
                    364
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 28
                    },
                    "start": {
                      "column": 55,
                      "line": 28
                    }
                  }
                },
                "range": [
                  359,
                  366
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 28
                  },
                  "start": {
                    "column": 51,
                    "line": 28
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
                        337,
                        341
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 28
                        },
                        "start": {
                          "column": 29,
                          "line": 28
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
                        342,
                        348
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 28
                        },
                        "start": {
                          "column": 34,
                          "line": 28
                        }
                      }
                    },
                    "range": [
                      337,
                      348
                    ],
                    "loc": {
                      "end": {
                        "column": 40,
                        "line": 28
                      },
                      "start": {
                        "column": 29,
                        "line": 28
                      }
                    }
                  },
                  "optional": false,
                  "range": [
                    337,
                    350
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 28
                    },
                    "start": {
                      "column": 29,
                      "line": 28
                    }
                  }
                },
                "right": {
                  "type": "Literal",
                  "raw": "0.5",
                  "value": 0.5,
                  "range": [
                    353,
                    356
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 28
                    },
                    "start": {
                      "column": 45,
                      "line": 28
                    }
                  }
                },
                "range": [
                  337,
                  356
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 28
                  },
                  "start": {
                    "column": 29,
                    "line": 28
                  }
                }
              },
              "range": [
                337,
                370
              ],
              "loc": {
                "end": {
                  "column": 62,
                  "line": 28
                },
                "start": {
                  "column": 29,
                  "line": 28
                }
              }
            },
            "range": [
              321,
              370
            ],
            "loc": {
              "end": {
                "column": 62,
                "line": 28
              },
              "start": {
                "column": 13,
                "line": 28
              }
            }
          }
        ],
        "declare": false,
        "kind": "const",
        "range": [
          315,
          370
        ],
        "loc": {
          "end": {
            "column": 62,
            "line": 28
          },
          "start": {
            "column": 7,
            "line": 28
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": [],
      "loc": {
        "end": {
          "column": 62,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    398,
                    399
                  ],
                  "loc": {
                    "end": {
                      "column": 5,
                      "line": 31
                    },
                    "start": {
                      "column": 4,
                      "line": 31
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "why",
                  "optional": false,
                  "range": [
                    400,
                    403
                  ],
                  "loc": {
                    "end": {
                      "column": 9,
                      "line": 31
                    },
                    "start": {
                      "column": 6,
                      "line": 31
                    }
                  }
                },
                "range": [
                  398,
                  403
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
              "optional": false,
              "range": [
                398,
                405
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 31
                },
                "start": {
                  "column": 4,
                  "line": 31
                }
              }
            },
            "range": [
              398,
              405
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "range": [
          392,
          425
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 20,
            "line": 30
          }
        }
      },
      "test": {
        "type": "BinaryExpression",
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "range": [
            376,
            377
          ],
          "loc": {
            "end": {
              "column": 5,
              "line": 30
            },
            "start": {
              "column": 4,
              "line": 30
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "X",
          "optional": false,
          "range": [
            389,
            390
          ],
          "loc": {
            "end": {
              "column": 18,
              "line": 30
            },
            "start": {
              "column": 17,
              "line": 30
            }
          }
        },
        "range": [
          376,
          390
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 30
          },
          "start": {
            "column": 4,
            "line": 30
          }
        }
      },
      "range": [
        372,
        425
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 30
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 32
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
