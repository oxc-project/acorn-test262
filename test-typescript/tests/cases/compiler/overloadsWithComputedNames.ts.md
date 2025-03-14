__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    56,
    1075
  ],
  "body": [
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          69,
          171
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "raw": "\"B\"",
              "value": "B",
              "range": [
                76,
                79
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 3
                },
                "start": {
                  "column": 5,
                  "line": 3
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                80,
                100
              ],
              "async": false,
              "body": null,
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
                        "column": 19,
                        "line": 3
                      },
                      "start": {
                        "column": 11,
                        "line": 3
                      }
                    },
                    "range": [
                      82,
                      90
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        84,
                        90
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 3
                        },
                        "start": {
                          "column": 13,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    81,
                    90
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 3
                    },
                    "start": {
                      "column": 10,
                      "line": 3
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 3
                  },
                  "start": {
                    "column": 20,
                    "line": 3
                  }
                },
                "range": [
                  91,
                  99
                ],
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "range": [
                    93,
                    99
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 3
                    },
                    "start": {
                      "column": 22,
                      "line": 3
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 29,
                  "line": 3
                },
                "start": {
                  "column": 9,
                  "line": 3
                }
              }
            },
            "range": [
              75,
              100
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "raw": "\"A\"",
              "value": "A",
              "range": [
                106,
                109
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 4
                },
                "start": {
                  "column": 5,
                  "line": 4
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
                110,
                169
              ],
              "async": false,
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
                        161,
                        162
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 5
                        },
                        "start": {
                          "column": 13,
                          "line": 5
                        }
                      }
                    },
                    "range": [
                      154,
                      163
                    ],
                    "loc": {
                      "end": {
                        "column": 15,
                        "line": 5
                      },
                      "start": {
                        "column": 6,
                        "line": 5
                      }
                    }
                  }
                ],
                "range": [
                  146,
                  169
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 6
                  },
                  "start": {
                    "column": 45,
                    "line": 4
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
                        "column": 26,
                        "line": 4
                      },
                      "start": {
                        "column": 11,
                        "line": 4
                      }
                    },
                    "range": [
                      112,
                      127
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            114,
                            120
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 4
                            },
                            "start": {
                              "column": 13,
                              "line": 4
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            121,
                            127
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 4
                            },
                            "start": {
                              "column": 20,
                              "line": 4
                            }
                          }
                        }
                      ],
                      "range": [
                        114,
                        127
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 4
                        },
                        "start": {
                          "column": 13,
                          "line": 4
                        }
                      }
                    }
                  },
                  "range": [
                    111,
                    127
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 4
                    },
                    "start": {
                      "column": 10,
                      "line": 4
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 4
                  },
                  "start": {
                    "column": 27,
                    "line": 4
                  }
                },
                "range": [
                  128,
                  145
                ],
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        130,
                        136
                      ],
                      "loc": {
                        "end": {
                          "column": 35,
                          "line": 4
                        },
                        "start": {
                          "column": 29,
                          "line": 4
                        }
                      }
                    },
                    {
                      "type": "TSStringKeyword",
                      "range": [
                        139,
                        145
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 4
                        },
                        "start": {
                          "column": 38,
                          "line": 4
                        }
                      }
                    }
                  ],
                  "range": [
                    130,
                    145
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 4
                    },
                    "start": {
                      "column": 29,
                      "line": 4
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 5,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 4
                }
              }
            },
            "range": [
              105,
              169
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
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 13,
            "line": 2
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "range": [
          62,
          68
        ],
        "loc": {
          "end": {
            "column": 12,
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
        56,
        171
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 2
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
            "name": "p",
            "optional": false,
            "range": [
              176,
              177
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "range": [
                184,
                190
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
              180,
              192
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 8
              },
              "start": {
                "column": 8,
                "line": 8
              }
            }
          },
          "range": [
            176,
            192
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        172,
        193
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 8
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
              198,
              199
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
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "range": [
              194,
              195
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 9
              },
              "start": {
                "column": 0,
                "line": 9
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "range": [
              196,
              197
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 9
              },
              "start": {
                "column": 2,
                "line": 9
              }
            }
          },
          "range": [
            194,
            197
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 9
            },
            "start": {
              "column": 0,
              "line": 9
            }
          }
        },
        "optional": false,
        "range": [
          194,
          200
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 9
          },
          "start": {
            "column": 0,
            "line": 9
          }
        }
      },
      "range": [
        194,
        200
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 9
        },
        "start": {
          "column": 0,
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
            "raw": "0",
            "value": 0,
            "range": [
              205,
              206
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
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "range": [
              201,
              202
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 10
              },
              "start": {
                "column": 0,
                "line": 10
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "range": [
              203,
              204
            ],
            "loc": {
              "end": {
                "column": 3,
                "line": 10
              },
              "start": {
                "column": 2,
                "line": 10
              }
            }
          },
          "range": [
            201,
            204
          ],
          "loc": {
            "end": {
              "column": 3,
              "line": 10
            },
            "start": {
              "column": 0,
              "line": 10
            }
          }
        },
        "optional": false,
        "range": [
          201,
          207
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 10
          },
          "start": {
            "column": 0,
            "line": 10
          }
        }
      },
      "range": [
        201,
        207
      ],
      "loc": {
        "end": {
          "column": 6,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          273,
          357
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                280,
                285
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 14
                },
                "start": {
                  "column": 5,
                  "line": 14
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                286,
                294
              ],
              "async": false,
              "body": null,
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
                    "line": 14
                  },
                  "start": {
                    "column": 13,
                    "line": 14
                  }
                },
                "range": [
                  288,
                  294
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    290,
                    294
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
                }
              },
              "loc": {
                "end": {
                  "column": 19,
                  "line": 14
                },
                "start": {
                  "column": 11,
                  "line": 14
                }
              }
            },
            "range": [
              279,
              294
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 14
              },
              "start": {
                "column": 4,
                "line": 14
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "raw": "\"bar\"",
              "value": "bar",
              "range": [
                300,
                305
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 15
                },
                "start": {
                  "column": 5,
                  "line": 15
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                306,
                315
              ],
              "async": false,
              "body": null,
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
                    "line": 15
                  },
                  "start": {
                    "column": 13,
                    "line": 15
                  }
                },
                "range": [
                  308,
                  314
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    310,
                    314
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 15
                    },
                    "start": {
                      "column": 15,
                      "line": 15
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 20,
                  "line": 15
                },
                "start": {
                  "column": 11,
                  "line": 15
                }
              }
            },
            "range": [
              299,
              315
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 15
              },
              "start": {
                "column": 4,
                "line": 15
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                321,
                326
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 16
                },
                "start": {
                  "column": 5,
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
                327,
                355
              ],
              "async": false,
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
                        347,
                        348
                      ],
                      "loc": {
                        "end": {
                          "column": 16,
                          "line": 17
                        },
                        "start": {
                          "column": 15,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      340,
                      349
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
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
                  330,
                  355
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 18
                  },
                  "start": {
                    "column": 14,
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
                  "column": 11,
                  "line": 16
                }
              }
            },
            "range": [
              320,
              355
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
            "line": 13
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
          271,
          272
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 13
          },
          "start": {
            "column": 6,
            "line": 13
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        265,
        357
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
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
            "name": "uniqueSym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 38,
                  "line": 21
                },
                "start": {
                  "column": 23,
                  "line": 21
                }
              },
              "range": [
                382,
                397
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "range": [
                    391,
                    397
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 21
                    },
                    "start": {
                      "column": 32,
                      "line": 21
                    }
                  }
                },
                "range": [
                  384,
                  397
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 21
                  },
                  "start": {
                    "column": 25,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              373,
              397
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 21
              },
              "start": {
                "column": 14,
                "line": 21
              }
            }
          },
          "init": null,
          "range": [
            373,
            397
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 21
            },
            "start": {
              "column": 14,
              "line": 21
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        359,
        398
      ],
      "loc": {
        "end": {
          "column": 39,
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
            "name": "uniqueSym2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 39,
                  "line": 22
                },
                "start": {
                  "column": 24,
                  "line": 22
                }
              },
              "range": [
                423,
                438
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "range": [
                    432,
                    438
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 22
                    },
                    "start": {
                      "column": 33,
                      "line": 22
                    }
                  }
                },
                "range": [
                  425,
                  438
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 22
                  },
                  "start": {
                    "column": 26,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              413,
              438
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 22
              },
              "start": {
                "column": 14,
                "line": 22
              }
            }
          },
          "init": null,
          "range": [
            413,
            438
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 22
            },
            "start": {
              "column": 14,
              "line": 22
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        399,
        439
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 22
        },
        "start": {
          "column": 0,
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
            "name": "sym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 23
                },
                "start": {
                  "column": 17,
                  "line": 23
                }
              },
              "range": [
                457,
                465
              ],
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "range": [
                  459,
                  465
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 23
                  },
                  "start": {
                    "column": 19,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              454,
              465
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 23
              },
              "start": {
                "column": 14,
                "line": 23
              }
            }
          },
          "init": null,
          "range": [
            454,
            465
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 23
            },
            "start": {
              "column": 14,
              "line": 23
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        440,
        466
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "strUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 37,
                  "line": 25
                },
                "start": {
                  "column": 22,
                  "line": 25
                }
              },
              "range": [
                490,
                505
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'foo'",
                      "value": "foo",
                      "range": [
                        492,
                        497
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 25
                        },
                        "start": {
                          "column": 24,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      492,
                      497
                    ],
                    "loc": {
                      "end": {
                        "column": 29,
                        "line": 25
                      },
                      "start": {
                        "column": 24,
                        "line": 25
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'bar'",
                      "value": "bar",
                      "range": [
                        500,
                        505
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 25
                        },
                        "start": {
                          "column": 32,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      500,
                      505
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 25
                      },
                      "start": {
                        "column": 32,
                        "line": 25
                      }
                    }
                  }
                ],
                "range": [
                  492,
                  505
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 25
                  },
                  "start": {
                    "column": 24,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              482,
              505
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 25
              },
              "start": {
                "column": 14,
                "line": 25
              }
            }
          },
          "init": null,
          "range": [
            482,
            505
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 25
            },
            "start": {
              "column": 14,
              "line": 25
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        468,
        506
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          517,
          647
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sym",
              "optional": false,
              "range": [
                524,
                527
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 28
                },
                "start": {
                  "column": 5,
                  "line": 28
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                528,
                537
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 28
                  },
                  "start": {
                    "column": 11,
                    "line": 28
                  }
                },
                "range": [
                  530,
                  536
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    532,
                    536
                  ],
                  "loc": {
                    "end": {
                      "column": 17,
                      "line": 28
                    },
                    "start": {
                      "column": 13,
                      "line": 28
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 18,
                  "line": 28
                },
                "start": {
                  "column": 9,
                  "line": 28
                }
              }
            },
            "range": [
              523,
              537
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 28
              },
              "start": {
                "column": 4,
                "line": 28
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym2",
              "optional": false,
              "range": [
                560,
                570
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 29
                },
                "start": {
                  "column": 5,
                  "line": 29
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                571,
                580
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 29
                  },
                  "start": {
                    "column": 18,
                    "line": 29
                  }
                },
                "range": [
                  573,
                  579
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    575,
                    579
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 29
                    },
                    "start": {
                      "column": 20,
                      "line": 29
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 25,
                  "line": 29
                },
                "start": {
                  "column": 16,
                  "line": 29
                }
              }
            },
            "range": [
              559,
              580
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 29
              },
              "start": {
                "column": 4,
                "line": 29
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym",
              "optional": false,
              "range": [
                604,
                613
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 30
                },
                "start": {
                  "column": 5,
                  "line": 30
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                614,
                623
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 30
                  },
                  "start": {
                    "column": 17,
                    "line": 30
                  }
                },
                "range": [
                  616,
                  622
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    618,
                    622
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 30
                    },
                    "start": {
                      "column": 19,
                      "line": 30
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 24,
                  "line": 30
                },
                "start": {
                  "column": 15,
                  "line": 30
                }
              }
            },
            "range": [
              603,
              623
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 30
              },
              "start": {
                "column": 4,
                "line": 30
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym",
              "optional": false,
              "range": [
                629,
                638
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 31
                },
                "start": {
                  "column": 5,
                  "line": 31
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
                639,
                645
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  642,
                  645
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 31
                  },
                  "start": {
                    "column": 18,
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
                  "column": 21,
                  "line": 31
                },
                "start": {
                  "column": 15,
                  "line": 31
                }
              }
            },
            "range": [
              628,
              645
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 32
          },
          "start": {
            "column": 9,
            "line": 27
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "range": [
          514,
          516
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 27
          },
          "start": {
            "column": 6,
            "line": 27
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        508,
        647
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          662,
          777
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sym",
              "optional": false,
              "range": [
                669,
                672
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 35
                },
                "start": {
                  "column": 5,
                  "line": 35
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
                  "column": 17,
                  "line": 35
                },
                "start": {
                  "column": 11,
                  "line": 35
                }
              },
              "range": [
                675,
                681
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  677,
                  681
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 35
                  },
                  "start": {
                    "column": 13,
                    "line": 35
                  }
                }
              }
            },
            "static": false,
            "range": [
              668,
              682
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym2",
              "optional": false,
              "range": [
                705,
                715
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 36
                },
                "start": {
                  "column": 5,
                  "line": 36
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
                  "column": 24,
                  "line": 36
                },
                "start": {
                  "column": 18,
                  "line": 36
                }
              },
              "range": [
                718,
                724
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  720,
                  724
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 36
                  },
                  "start": {
                    "column": 20,
                    "line": 36
                  }
                }
              }
            },
            "static": false,
            "range": [
              704,
              725
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 36
              },
              "start": {
                "column": 4,
                "line": 36
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym",
              "optional": false,
              "range": [
                731,
                740
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 37
                },
                "start": {
                  "column": 5,
                  "line": 37
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
                  "column": 23,
                  "line": 37
                },
                "start": {
                  "column": 17,
                  "line": 37
                }
              },
              "range": [
                743,
                749
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  745,
                  749
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 37
                  },
                  "start": {
                    "column": 19,
                    "line": 37
                  }
                }
              }
            },
            "static": false,
            "range": [
              730,
              750
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 37
              },
              "start": {
                "column": 4,
                "line": 37
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym",
              "optional": false,
              "range": [
                756,
                765
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 38
                },
                "start": {
                  "column": 5,
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
                  "column": 23,
                  "line": 38
                },
                "start": {
                  "column": 17,
                  "line": 38
                }
              },
              "range": [
                768,
                774
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  770,
                  774
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 38
                  },
                  "start": {
                    "column": 19,
                    "line": 38
                  }
                }
              }
            },
            "static": false,
            "range": [
              755,
              775
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 13,
            "line": 34
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "range": [
          659,
          661
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 34
          },
          "start": {
            "column": 10,
            "line": 34
          }
        }
      },
      "range": [
        649,
        777
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          788,
          852
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "strUnion",
              "optional": false,
              "range": [
                795,
                803
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 42
                },
                "start": {
                  "column": 5,
                  "line": 42
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                804,
                813
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 42
                  },
                  "start": {
                    "column": 16,
                    "line": 42
                  }
                },
                "range": [
                  806,
                  812
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    808,
                    812
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 42
                    },
                    "start": {
                      "column": 18,
                      "line": 42
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 23,
                  "line": 42
                },
                "start": {
                  "column": 14,
                  "line": 42
                }
              }
            },
            "range": [
              794,
              813
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 42
              },
              "start": {
                "column": 4,
                "line": 42
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "strUnion",
              "optional": false,
              "range": [
                835,
                843
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 43
                },
                "start": {
                  "column": 5,
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
                844,
                850
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  847,
                  850
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 43
                  },
                  "start": {
                    "column": 17,
                    "line": 43
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
                  "column": 20,
                  "line": 43
                },
                "start": {
                  "column": 14,
                  "line": 43
                }
              }
            },
            "range": [
              834,
              850
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 43
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
            "line": 44
          },
          "start": {
            "column": 9,
            "line": 41
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
          785,
          787
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 41
          },
          "start": {
            "column": 6,
            "line": 41
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        779,
        852
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
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          863,
          927
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "strUnion",
              "optional": false,
              "range": [
                870,
                878
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 47
                },
                "start": {
                  "column": 5,
                  "line": 47
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                879,
                888
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 47
                  },
                  "start": {
                    "column": 16,
                    "line": 47
                  }
                },
                "range": [
                  881,
                  887
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    883,
                    887
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 47
                    },
                    "start": {
                      "column": 18,
                      "line": 47
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 23,
                  "line": 47
                },
                "start": {
                  "column": 14,
                  "line": 47
                }
              }
            },
            "range": [
              869,
              888
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "strUnion",
              "optional": false,
              "range": [
                910,
                918
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 48
                },
                "start": {
                  "column": 5,
                  "line": 48
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
                919,
                925
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  922,
                  925
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 48
                  },
                  "start": {
                    "column": 17,
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
                  "column": 20,
                  "line": 48
                },
                "start": {
                  "column": 14,
                  "line": 48
                }
              }
            },
            "range": [
              909,
              925
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 48
              },
              "start": {
                "column": 4,
                "line": 48
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 49
          },
          "start": {
            "column": 9,
            "line": 46
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "range": [
          860,
          862
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 46
          },
          "start": {
            "column": 6,
            "line": 46
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        854,
        927
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 46
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "range": [
          938,
          1006
        ],
        "body": [
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                945,
                946
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 52
                },
                "start": {
                  "column": 5,
                  "line": 52
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                947,
                956
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 52
                  },
                  "start": {
                    "column": 9,
                    "line": 52
                  }
                },
                "range": [
                  949,
                  955
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    951,
                    955
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 52
                    },
                    "start": {
                      "column": 11,
                      "line": 52
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 16,
                  "line": 52
                },
                "start": {
                  "column": 7,
                  "line": 52
                }
              }
            },
            "range": [
              944,
              956
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 52
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                979,
                980
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 53
                },
                "start": {
                  "column": 5,
                  "line": 53
                }
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "range": [
                981,
                990
              ],
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 53
                  },
                  "start": {
                    "column": 9,
                    "line": 53
                  }
                },
                "range": [
                  983,
                  989
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    985,
                    989
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 53
                    },
                    "start": {
                      "column": 11,
                      "line": 53
                    }
                  }
                }
              },
              "loc": {
                "end": {
                  "column": 16,
                  "line": 53
                },
                "start": {
                  "column": 7,
                  "line": 53
                }
              }
            },
            "range": [
              978,
              990
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 53
              }
            }
          },
          {
            "type": "MethodDefinition",
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                996,
                997
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 54
                },
                "start": {
                  "column": 5,
                  "line": 54
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
                998,
                1004
              ],
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1001,
                  1004
                ],
                "loc": {
                  "end": {
                    "column": 13,
                    "line": 54
                  },
                  "start": {
                    "column": 10,
                    "line": 54
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
                  "column": 13,
                  "line": 54
                },
                "start": {
                  "column": 7,
                  "line": 54
                }
              }
            },
            "range": [
              995,
              1004
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 54
              },
              "start": {
                "column": 4,
                "line": 54
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 9,
            "line": 51
          }
        }
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "range": [
          935,
          937
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 51
          },
          "start": {
            "column": 6,
            "line": 51
          }
        }
      },
      "implements": [],
      "superClass": null,
      "range": [
        929,
        1006
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "body": {
        "type": "TSInterfaceBody",
        "range": [
          1021,
          1075
        ],
        "body": [
          {
            "type": "TSMethodSignature",
            "computed": true,
            "key": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                1028,
                1029
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 58
                },
                "start": {
                  "column": 5,
                  "line": 58
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
                  "column": 15,
                  "line": 58
                },
                "start": {
                  "column": 9,
                  "line": 58
                }
              },
              "range": [
                1032,
                1038
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  1034,
                  1038
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
              }
            },
            "static": false,
            "range": [
              1027,
              1039
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
          },
          {
            "type": "TSMethodSignature",
            "computed": true,
            "key": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                1045,
                1046
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 59
                },
                "start": {
                  "column": 5,
                  "line": 59
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
                  "column": 15,
                  "line": 59
                },
                "start": {
                  "column": 9,
                  "line": 59
                }
              },
              "range": [
                1049,
                1055
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  1051,
                  1055
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 59
                  },
                  "start": {
                    "column": 11,
                    "line": 59
                  }
                }
              }
            },
            "static": false,
            "range": [
              1044,
              1056
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "computed": true,
            "key": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                1062,
                1063
              ],
              "loc": {
                "end": {
                  "column": 6,
                  "line": 60
                },
                "start": {
                  "column": 5,
                  "line": 60
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
                  "column": 15,
                  "line": 60
                },
                "start": {
                  "column": 9,
                  "line": 60
                }
              },
              "range": [
                1066,
                1072
              ],
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "range": [
                  1068,
                  1072
                ],
                "loc": {
                  "end": {
                    "column": 15,
                    "line": 60
                  },
                  "start": {
                    "column": 11,
                    "line": 60
                  }
                }
              }
            },
            "static": false,
            "range": [
              1061,
              1073
            ],
            "loc": {
              "end": {
                "column": 16,
                "line": 60
              },
              "start": {
                "column": 4,
                "line": 60
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 61
          },
          "start": {
            "column": 13,
            "line": 57
          }
        }
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "range": [
          1018,
          1020
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 57
          },
          "start": {
            "column": 10,
            "line": 57
          }
        }
      },
      "range": [
        1008,
        1075
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 61
    },
    "start": {
      "column": 0,
      "line": 2
    }
  },
  "hashbang": null
}
```
